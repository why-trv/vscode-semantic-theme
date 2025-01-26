import type { Theme, ThemeColors } from "./types"
import { createTokens, saveTheme } from "./utils"

// Define color palette
const colors: ThemeColors = {
  background: "#1e1e1e",
  foreground: "#c4c4c4",
  altForeground: "#cecece",
  comment: "#5c5c5c",
  keyword: "#C681E1",
  altKeyword: "#C681E1",
  keywordOther: "#C681E1",
  keywordModifier: "#9c81e1",
  control: "#c774cb",
  misc: "#4cadd3",
  operator: "#97c8ef",
  cast: "#4f799a",
  string: "#c1e88d",
  number: "#f9a167",
  class: "#e0b569",
  namespacePrefix: "#ccb87a",
  lambdaReturnType: "#c2a880",
  function: "#61AFEF",
  specialFunction: "#8AA4F1",
  macro: "#3da779",
  invalid: "#FF5370",
  tag: "#f07178",
  memberVariable: "#f0787f",
  argument: "#cacaca",
  tsPrimitive: "#3da779"
};

const filename = "semantic-theme.json";

// Define theme
const theme: Theme = {
  name: "Semantic Theme",
  semanticHighlighting: true,
  colors: {
    "editor.background": colors.background,
    "editor.foreground": colors.foreground,
    "activityBarBadge.background": "#007acc",
    "sideBarTitle.foreground": "#bbbbbb"
  },
  semanticTokenColors: {
    "namespace": colors.namespacePrefix,
  },
  tokenColors: createTokens([
    [
      "Comment", colors.comment, "italic",
      [
        "comment",
        "punctuation.definition.comment"
      ]
    ],
    [
      "Variables", colors.foreground,
      [
        "variable",
        "string constant.other.placeholder"
      ]
    ],
    [
      "Colors", colors.altForeground,
      [
        "constant.other.color"
      ]
    ],
    [
      "Invalid", colors.invalid,
      [
        "invalid",
        "invalid.illegal"
      ],
    ],
    [
      "Keyword, Storage", colors.keyword,
      [
        "keyword",
        "storage.type",
      ]
    ],
    [
      "Storage Modifier", colors.keywordModifier,
      [
        "storage.modifier"
      ]
    ],
    [
      "Control Keywords", colors.control, "bold",
      [
        "keyword.control",
      ]
    ],
    [
      "Misc", colors.misc,
      [
        // "keyword.control",
        "constant.other.color",
        "punctuation",
        "meta.tag",
        "punctuation.definition.tag",
        "punctuation.separator.inheritance.php",
        "punctuation.definition.tag.html",
        "punctuation.definition.tag.begin.html",
        "punctuation.definition.tag.end.html",
        "punctuation.section.embedded",
        "keyword.other.template",
        "keyword.other.substitution"
      ],
    ],
    [
      "Template Argument Name", colors.foreground,
      [
        "entity.name.type.template.cpp"
      ]
    ],
    [
      "Operator", colors.operator,
      [
        "keyword.operator"
      ]
    ],
    [
      "Cast", colors.cast,
      [
        "keyword.operator.cast"
      ]
    ],
    [
      "Tag", colors.tag,
      [
        "entity.name.tag",
        "meta.tag.sgml",
        "markup.deleted.git_gutter"
      ],
    ],
    [
      "Primitive Type", colors.altKeyword, "bold",
      [
        // "storage.type",
        "storage.type.primitive",
        "storage.type.built-in"
      ],
    ],
    [
      "Class, Support", colors.class,
      [
        // "entity.name",
        "entity.name.type",
        // "meta.qualified-type",
        "support.type",
        "support.class",
        // "meta.body.struct",
        "support.other.namespace.use.php",
        "meta.use.php",
        "support.other.namespace.php",
        "markup.changed.git_gutter",
        // "support.type.sys-types"
      ],
    ],
    [
      "Class, Struct, Type Declaration", colors.class, "bold",
      [
        "entity.name.type.class",
        "entity.name.type.struct",
        // "entity.name.type.declaration",
        "entity.name.type.typedef"
      ],
    ],
    [
      "Class Template Instantiation?", "",
      [
        "entity.name.type.class.templated"
      ]
    ],
    // TODO: Find a way to differentiate between template declaration and
    // instantiation (and un-bold the latter)
    [
      "Namespace Prefix", colors.namespacePrefix,
      [
        "entity.name.scope-resolution"
      ]
    ],
    [
      // As for Jan 2025, VSCode scopes the whole return type of a lambda
      // as one token :(
      "Lambda Return Type", colors.lambdaReturnType,
      [
        "storage.type.return-type.lambda.cpp"
      ]
    ],
    [
      "Function, Special Method", colors.function,
      [
        "entity.name.function",
        "entity.name.function.member",
        "meta.function-call",
        "variable.function",
        "support.function",
        "keyword.other.special-method"
      ]
    ],
    [
      "Member Function", colors.function, "bold",
      [
        "entity.name.function.definition",
        "keyword.other.operator.overload.cpp"
      ]
    ],
    [
      "Static Function", "bold italic",
      [
        "entity.name.function.member.static"
      ]
    ],
    [
      "Special Function", colors.specialFunction, "bold italic",
      [
        "entity.name.function.definition.special"
      ]
    ],
    [
      "Macro", colors.macro,
      [
        "entity.name.function.preprocessor",
        "keyword.control.directive"
      ]
    ],
    [
      "Property/Member Variables", colors.memberVariable,
      [
        // "meta.block variable.other.property",
        "variable.other.property",
        "variable.other.object.property",
        // To color member variable declaration as well
        "meta.body.class variable.other.declare"
      ]
    ],
    [
      "Local Variable Declaration", colors.foreground,
      [
        // Workaround for local variable declaration to not be colored
        // the same as member variable declaration
        "meta.body.function.definition variable.other.declare"
      ]
    ],
    [
      "Other Variable, String Link", colors.memberVariable,
      [
        "support.other.variable",
        "string.other.link"
      ]
    ], // TODO:
    [
      "Number, Constant, Tag Attribute, Embedded", colors.number,
      [
        "constant.numeric",
        "constant.language",
        "support.constant",
        "constant.character",
        "constant.escape",
      ]
    ],
    [
      "Argument", colors.argument, "italic",
      [
        "variable.parameter"
      ],
    ],
    [
      "Keyword (Other)", colors.keywordOther,
      [
        "keyword.other.unit",
        "keyword.other"
      ]
    ],
    [
      "String, Symbols, Inherited Class, Markup Heading", colors.string,
      [
        "string",
        "constant.other.symbol",
        "constant.other.key",
        "entity.other.inherited-class",
        "markup.heading",
        "markup.inserted.git_gutter",
        "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js"
      ]
    ],
    // Web etc. Mostly untouched since theme generation
    [
      "CSS Class and Support",
      "#B2CCD6",
      [
        "source.css support.type.property-name",
        "source.sass support.type.property-name",
        "source.scss support.type.property-name",
        "source.less support.type.property-name",
        "source.stylus support.type.property-name",
        "source.postcss support.type.property-name"
      ]
    ],
    [
      "Sub-methods", "#FF5370",
      [
        "entity.name.module.js",
        "variable.import.parameter.js",
        "variable.other.class.js"
      ]
    ], // Same as invalid?
    [
      "Language methods", "#FF5370",
      [
        "variable.language"
      ]
    ], // Same as invalid?
    [
      "entity.name.method.js", "#82AAFF", "italic",
      [
        "entity.name.method.js"
      ]
    ], // Should be same as function?
    [
      "meta.method.js", "#82AAFF",
      [
        "meta.class-method.js entity.name.function.js",
        "variable.function.constructor"
      ]
    ], // Should be same as function?
    [
      "TypeScript Primitive", colors.tsPrimitive,
      [
        "support.type.primitive.ts"
      ]
    ],
    [
      "Attributes", colors.keyword,
      [
        "entity.other.attribute-name"
      ]
    ],
    [
      "HTML Attributes", "#FFCB6B", "italic",
      [
        "text.html.basic entity.other.attribute-name.html",
        "text.html.basic entity.other.attribute-name"
      ]
    ],
    [
      "CSS Classes", "#FFCB6B", "entity.other.attribute-name.class"
    ],
    [
      "CSS IDs", "#82AAFF", "source.sass keyword.control"
    ],
    [
      "Inserted", "#c1e88d", "markup.inserted"
    ],
    [
      "Deleted", "#FF5370", "markup.deleted"
    ],
    [
      "Changed", "#C792EA", "markup.changed"
    ],
    [
      "Regular Expressions", "#89DDFF", "string.regexp"
    ],
    [
      "Escape Characters", "#89DDFF", "constant.character.escape"
    ],
    [
      "URL", "#89DDFF", "underline",
      [
        "*url*",
        "*link*",
        "*uri*"
      ]
    ], // TODO: Remove color
    [
      "Decorators", "#82AAFF", "italic",
      [
        "tag.decorator.js entity.name.tag.js",
        "tag.decorator.js punctuation.definition.tag.js"
      ]
    ],
    [
      "ES7 Bind Operator", "#FF5370", "italic",
      "source.js constant.other.object.key.js string.unquoted.label.js"
    ],
    [
      "JSON Key - Level 0", "#C792EA",
      "source.json meta.structure.dictionary.json support.type.property-name.json"
    ],
    [
      "JSON Key - Level 1", "#FFCB6B",
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
    ],
    [
      "JSON Key - Level 2", "#F78C6C",
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
    ],
    [
      "JSON Key - Level 3", "#FF5370",
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
    ],
    [
      "JSON Key - Level 4", "#C17E70",
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
    ],
    [
      "JSON Key - Level 5", "#82AAFF",
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
    ],
    [
      "JSON Key - Level 6", "#f07178",
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
    ],
    [
      "JSON Key - Level 7", "#C792EA",
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
    ],
    [
      "JSON Key - Level 8", "#c1e88d",
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
    ],
    [
      "JSON Key - Level 9", "#c1e88d",
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
    ],
    [
      "Markdown - Plain", "#EEFFFF",
      [
        "text.html.markdown",
        "punctuation.definition.list_item.markdown"
      ]
    ],
		[
      "Markdown - Markup Raw Inline", "#C792EA",
      [
        "text.html.markdown markup.inline.raw.markdown"
      ]
    ],
    [
      "Markdown - Markup Raw Inline Punctuation", "#65737E",
      [
        "text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown"
      ]
    ],
		[
      "Markdown - Heading", "#c1e88d",
      [
        "markdown.heading",
        "markup.heading | markup.heading entity.name",
        "markup.heading.markdown punctuation.definition.heading.markdown"
      ]
    ],
		[
      "Markup - Italic", "#f07178", "italic",
      [
        "markup.italic"
      ]
    ],
		[
      "Markup - Bold", "#f07178", "bold",
      [
				"markup.bold",
        "markup.bold string"
      ]
    ],
		[
      "Markup - Bold-Italic",
      "#f07178",
			"bold",
			[
				"markup.bold markup.italic",
				"markup.italic markup.bold",
				"markup.quote markup.bold",
				"markup.bold markup.italic string",
				"markup.italic markup.bold string",
				"markup.quote markup.bold string"
			]
		],
		[
      "Markup - Underline", "#F78C6C", "underline",
      [
        "markup.underline"
      ]
    ],
		[
      "Markdown - Blockquote", "#65737E",
      [
        "markup.quote punctuation.definition.blockquote.markdown"
      ]
    ],
		[
      "Markup - Quote", "#65737E", "italic",
      [
        "markup.quote"
      ]
    ],
		[
      "Markdown - Link", "#82AAFF",
      [
        "string.other.link.title.markdown"
      ]
    ],
		[
      "Markdown - Link Description", "#C792EA",
      [
        "string.other.link.description.title.markdown"
      ]
    ],
		[
      "Markdown - Link Anchor", "#FFCB6B",
      [
        "constant.other.reference.link.markdown"
      ]
    ],
		[
      "Markup - Raw Block", "#C792EA",
      [
        "markup.raw.block"
      ]
    ],
		[
      "Markdown - Raw Block Fenced", "#00000050",
      [
        "markup.raw.block.fenced.markdown"
      ]
    ],
		[
      "Markdown - Fenced Bode Block", "#00000050",
      [
        "punctuation.definition.fenced.markdown"
      ]
    ],
		[
      "Markdown - Fenced Bode Block Variable", "#EEFFFF",
      [
        "markup.raw.block.fenced.markdown",
        "variable.language.fenced.markdown",
        "punctuation.section.class.end"
			],
    ],
		[
      "Markdown - Fenced Language", "#65737E",
      [
        "variable.language.fenced.markdown"
			]
		],
		[
      "Markdown - Separator", "#65737E", "bold",
      [
        "meta.separator"
      ]
    ],
		[
      "Markup - Table", "#EEFFFF",
      [
        "markup.table"
      ]
    ]
  ]),
};

saveTheme(theme, filename);