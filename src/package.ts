import { join } from "node:path";
import { readFileSync } from "node:fs";

// Gonna read only what matters for the build process
export interface PackageJson {
  name: string;
  version: string;
  contributes: {
    themes: {
      label: string;
      uiTheme: string;
      path: string;
    }[];
  }
}

export function loadPackageJson(): PackageJson {
  try {
    const packageJsonPath = join(__dirname, "../package.json");
    const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8"));
    return packageJson;
  } catch (error) {
    throw new Error(`Failed to load package.json: ${error}`);
  }
}