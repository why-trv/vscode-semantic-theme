import { writeFileSync } from "node:fs";
import { join, parse } from "node:path";

import type { Theme, Palette } from "./types";
import { loadPackageJson } from "./package";
import { createTheme } from "./theme";

function loadPalette(filename: string): Palette {  
  try {
    return require(`./defs/${filename}`).default;
  } catch (error) {
    throw new Error(`Failed to load palette for theme ${filename}: ${error}`);
  }
}

// Saves theme as a JSON file with specified name inside themes/ directory
export function saveTheme(theme: Theme, filename: string) {
  if (!filename.endsWith('.json')) {
    filename += '.json';
  }

  const outputPath = join(__dirname, '../themes/', filename);
  const data = JSON.stringify(theme, null, 2);
  writeFileSync(outputPath, data);
  console.log(`Theme file generated at: ${outputPath}`);
}

// Load themes from package.json and create them
function buildThemes() {
  const packageJson = loadPackageJson();
  const { themes } = packageJson.contributes;

  for (const theme of themes) {
    // Extract base name without extension from the theme path
    // e.g., "./themes/lyth-dark.json" -> "lyth-dark"
    const { name: filename } = parse(theme.path);
    
    const palette = loadPalette(filename);    

    // Pass theme label as the name
    saveTheme(
      createTheme(theme.label, palette),
      filename
    );
  }
}

// Execute the build
buildThemes();