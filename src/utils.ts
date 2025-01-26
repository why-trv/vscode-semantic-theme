import * as fs from 'node:fs';
import * as path from 'node:path';

import type {
  Color, 
  FontStyle,
  ScopeDefinition,  
  TokenItem, 
  TokenSettings,
  Theme
} from "./types";

type TokenDefinition = [
  name: string,
  arg1: Color | FontStyle | ScopeDefinition,
  arg2?: FontStyle | ScopeDefinition,
  arg3?: ScopeDefinition
];

// type SemanticTokenDefinition = [
//   scope: string,
//   arg1: Color | FontStyle,
//   arg2?: FontStyle,
// ];

// function createSemanticTokens(definitions: SemanticTokenDefinition[]): SemanticTokenColors {
//   const result: SemanticTokenColors = {};

//   for (const def of definitions) {
//     const scope = def[0];

//     let color: Color | undefined;
//     let fontStyle: FontStyle | undefined;

//     // TODO: Color and fontStyle validation

//     if (def.length >= 4 || def.length <= 1) {
//       throw new Error(`Unexpected semantic token settings length ${def.length} for "${scope}"`);
//     } else if (def.length === 3) {
//       color = def[1] as Color;
//       fontStyle = def[2] as FontStyle;
//     } else if (def.length === 2) {
//       if (def[1].startsWith('#')) {
//         color = def[1] as Color;
//       } else {
//         fontStyle = def[1] as FontStyle;
//       }
//     }

//     let settings: SemanticTokenSettings;

//     if (color && fontStyle !== undefined) {
//       settings = color;
//     } else {
//       settings = {};
//       if (color !== undefined) { settings.foreground = color; }
//       if (fontStyle !== undefined) { settings.fontStyle = fontStyle; }
//     }

//     result[scope] = settings;
//   }

//   return result;
// }

export function createTokens(definitions: TokenDefinition[]): TokenItem[] {
  return definitions.map((def) => {
    const name = def[0];
    const scope = def[def.length - 1] as ScopeDefinition;

    let color: Color | undefined;
    let fontStyle: FontStyle | undefined;

    if (def.length >= 5 || def.length <= 2) {
      throw new Error(`Unexpected token settings length ${def.length} for "${name}"`);
    } else if (def.length === 4) {
      if (typeof def[1] !== 'string' || !def[1].startsWith('#')) {
        throw new Error(`Unexpected token color argument "${def[1]}" for "${name}"`);
      }

      if (typeof def[2] !== 'string') {
        throw new Error(`Unexpected token fontStyle argument "${def[2]}" for "${name}"`);
      }

      color = def[1] as Color;
      fontStyle = def[2] as FontStyle;

    } else if (def.length === 3) {
      if (typeof def[1] !== 'string') {
        throw new Error(`Unexpected token settings argument "${def[1]}" for "${name}"`);
      }

      if (def[1].startsWith('#')) {
        color = def[1] as Color;
      } else {
        fontStyle = def[1] as FontStyle;
      }
    }

    const settings: TokenSettings = {};
    if (color !== undefined) { settings.foreground = color; }
    if (fontStyle !== undefined) { settings.fontStyle = fontStyle; }

    return {
      name,
      scope: Array.isArray(scope) ? scope : [scope],
      settings
    };
  });
}

export function saveTheme(theme: Theme, filename: string) {
  const outputPath = path.join(__dirname, '../themes/', filename);
  const data = JSON.stringify(theme, null, 2);  
  fs.writeFileSync(outputPath, data);
  console.log(`Theme file generated at: ${outputPath}`);
}