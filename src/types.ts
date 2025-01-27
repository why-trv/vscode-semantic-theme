// This ugly definition forces a particular order of style tokens, but we're
// doing what we can within TypeScript limitations. At least it's readable.
export type FontStyle =
  | ""
  | "bold"
  | "italic"
  | "underline"
  | "strikethrough"
  | "bold italic"
  | "bold underline"
  | "bold strikethrough"
  | "bold italic underline"
  | "bold italic strikethrough"
  | "bold italic underline strikethrough"
  | "italic underline"
  | "italic strikethrough"
  | "italic underline strikethrough"
  | "underline strikethrough";

export type Color = `#${string}`;

export interface TokenSettings {
  foreground?: Color;
  fontStyle?: FontStyle;
}

export type SemanticTokenSettings = Color | {
  foreground?: Color;
  fontStyle?: FontStyle;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;  
};

export type Scope = string[];
export type ScopeDefinition = Scope | string;

export interface TokenItem {
  name?: string;
  scope: Scope;
  settings: TokenSettings;
}

export interface SemanticTokenColors {
  [key: string]: SemanticTokenSettings;
}

export interface Palette {
  [key: string]: Color;
}

export interface ThemeColors {
  [key: string]: Color;
}

export interface Theme {
  name: string;
  colors: ThemeColors;
  tokenColors: TokenItem[];
  semanticHighlighting?: boolean;
  semanticTokenColors?: SemanticTokenColors;
}