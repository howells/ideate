#!/usr/bin/env node

/**
 * Bump version in plugin.json and update CHANGELOG.md
 *
 * Usage:
 *   node scripts/bump-version.js patch|minor|major [commit-message]
 *
 * Or auto-detect from commit message:
 *   node scripts/bump-version.js auto "feat: add new feature"
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PLUGIN_PATH = path.join(__dirname, '..', '.claude-plugin', 'plugin.json');
const CHANGELOG_PATH = path.join(__dirname, '..', 'CHANGELOG.md');

function readPlugin() {
  return JSON.parse(fs.readFileSync(PLUGIN_PATH, 'utf8'));
}

function writePlugin(data) {
  fs.writeFileSync(PLUGIN_PATH, JSON.stringify(data, null, 2) + '\n');
}

function parseVersion(version) {
  const [major, minor, patch] = version.split('.').map(Number);
  return { major, minor, patch };
}

function formatVersion({ major, minor, patch }) {
  return `${major}.${minor}.${patch}`;
}

function bumpVersion(current, type) {
  const v = parseVersion(current);

  switch (type) {
    case 'major':
      return formatVersion({ major: v.major + 1, minor: 0, patch: 0 });
    case 'minor':
      return formatVersion({ major: v.major, minor: v.minor + 1, patch: 0 });
    case 'patch':
    default:
      return formatVersion({ major: v.major, minor: v.minor, patch: v.patch + 1 });
  }
}

function detectBumpType(message) {
  if (!message) return 'patch';

  // Breaking change
  if (message.includes('BREAKING CHANGE') || /^[a-z]+!:/.test(message)) {
    return 'major';
  }

  // Feature
  if (/^feat(\(.+\))?:/.test(message)) {
    return 'minor';
  }

  // Everything else (fix, docs, chore, refactor, etc.)
  return 'patch';
}

function categorizeCommit(message) {
  if (/^feat(\(.+\))?:/.test(message)) return 'Added';
  if (/^fix(\(.+\))?:/.test(message)) return 'Fixed';
  if (/^docs(\(.+\))?:/.test(message)) return 'Documentation';
  if (/^refactor(\(.+\))?:/.test(message)) return 'Changed';
  if (/^perf(\(.+\))?:/.test(message)) return 'Performance';
  if (/^test(\(.+\))?:/.test(message)) return 'Testing';
  if (/^chore(\(.+\))?:/.test(message)) return 'Maintenance';
  if (/BREAKING CHANGE/.test(message) || /^[a-z]+!:/.test(message)) return 'Breaking';
  return 'Other';
}

function formatCommitForChangelog(message) {
  // Remove conventional commit prefix for cleaner changelog
  return message
    .replace(/^[a-z]+(\(.+\))?!?:\s*/i, '')
    .replace(/^./, c => c.toUpperCase());
}

function getRecentCommits(since) {
  try {
    // Get commits since last tag or last 50 commits
    const cmd = since
      ? `git log ${since}..HEAD --pretty=format:"%s"`
      : `git log -50 --pretty=format:"%s"`;

    const output = execSync(cmd, { encoding: 'utf8', cwd: path.join(__dirname, '..') });
    return output.split('\n').filter(Boolean);
  } catch {
    return [];
  }
}

function getLastTag() {
  try {
    return execSync('git describe --tags --abbrev=0 2>/dev/null', {
      encoding: 'utf8',
      cwd: path.join(__dirname, '..')
    }).trim();
  } catch {
    return null;
  }
}

function updateChangelog(newVersion, commits) {
  const date = new Date().toISOString().split('T')[0];

  // Group commits by category
  const grouped = {};
  for (const commit of commits) {
    const category = categorizeCommit(commit);
    if (!grouped[category]) grouped[category] = [];
    grouped[category].push(formatCommitForChangelog(commit));
  }

  // Build changelog entry
  let entry = `## [${newVersion}] - ${date}\n\n`;

  const categoryOrder = ['Breaking', 'Added', 'Changed', 'Fixed', 'Performance', 'Documentation', 'Testing', 'Maintenance', 'Other'];

  for (const category of categoryOrder) {
    if (grouped[category]?.length) {
      entry += `### ${category}\n\n`;
      for (const item of grouped[category]) {
        entry += `- ${item}\n`;
      }
      entry += '\n';
    }
  }

  // Read existing changelog or create new one
  let changelog = '';
  if (fs.existsSync(CHANGELOG_PATH)) {
    changelog = fs.readFileSync(CHANGELOG_PATH, 'utf8');
  }

  if (!changelog.includes('# Changelog')) {
    changelog = `# Changelog\n\nAll notable changes to the Arc plugin will be documented in this file.\n\nThe format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),\nand this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).\n\n`;
  }

  // Insert new entry after header
  const headerEnd = changelog.indexOf('\n## ');
  if (headerEnd !== -1) {
    changelog = changelog.slice(0, headerEnd) + '\n' + entry + changelog.slice(headerEnd + 1);
  } else {
    changelog += entry;
  }

  fs.writeFileSync(CHANGELOG_PATH, changelog);
  return entry;
}

// Main
const [,, typeArg, messageArg] = process.argv;

const plugin = readPlugin();
const currentVersion = plugin.version;

let bumpType = typeArg;
let commitMessage = messageArg;

// Auto-detect from commit message
if (typeArg === 'auto') {
  bumpType = detectBumpType(messageArg);
}

// Get commits for changelog
const lastTag = getLastTag();
const commits = commitMessage
  ? [commitMessage]
  : getRecentCommits(lastTag);

const newVersion = bumpVersion(currentVersion, bumpType);

// Update plugin.json
plugin.version = newVersion;
writePlugin(plugin);

// Update changelog
const changelogEntry = updateChangelog(newVersion, commits);

console.log(`✓ Bumped version: ${currentVersion} → ${newVersion} (${bumpType})`);
console.log(`✓ Updated CHANGELOG.md`);

// Output for git hooks
process.stdout.write(newVersion);
