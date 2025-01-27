import { existsSync } from 'fs';
import { execSync } from 'child_process';
import { homedir } from 'os';
import { join } from 'path';

const THEME_PATH = 'extensions/semantic-theme';
const VSCODE_PATH = join(homedir(), '.vscode');
const CURSOR_PATH = join(homedir(), '.cursor');

const EXCLUDE_PATTERNS = [
  '.*',           // Hidden files
  'node_modules', // Dependencies
  '.out',         // Build output
  '*.vsix'        // VSCode extension package
];

// Convert patterns to rsync exclude arguments
const RSYNC_EXCLUDE = EXCLUDE_PATTERNS
  .map(pattern => `--exclude='${pattern}'`)
  .join(' ');

try {
  // Check for VSCode extensions directory
  if (existsSync(VSCODE_PATH)) {
    console.log('Installing for VSCode...');
    execSync(`rsync -av ${RSYNC_EXCLUDE} . "${join(VSCODE_PATH, THEME_PATH)}"`);
    console.log('VSCode installation complete');
  }

  // Check for Cursor extensions directory
  if (existsSync(CURSOR_PATH)) {
    console.log('Installing for Cursor...');
    execSync(`rsync -av ${RSYNC_EXCLUDE} . "${join(CURSOR_PATH, THEME_PATH)}"`);
    console.log('Cursor installation complete');
  }
} catch (error) {
  console.error('Installation failed:', error);
  process.exit(1);
} 