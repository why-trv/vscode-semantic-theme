import type { Theme, Palette } from "./types";
import { createSemanticTokens, createTokens } from "./utils";

export function createTheme(name: string, palette: Palette) {
  const theme: Theme = {
    name,
    semanticHighlighting: true,
    colors: {
      "editor.background": palette.background,
      "editor.foreground": palette.foreground,
      "activityBarBadge.background": "#007acc",
      "sideBarTitle.foreground": "#bbbbbb"
    },
    semanticTokenColors: createSemanticTokens({
      "namespace": palette.namespacePrefix,
      "macro": palette.macro,
      "typeParameter": { italic: true },
      "function.static": { italic: true },
      "class": [palette.class, ""],
      "class.declaration": "bold",
      "class.definition": "bold",
      "class.constructorOrDestructor": palette.function,
      "type.defaultLibrary": palette.keyword,
      "class.deduced": palette.keyword,
      "variable.readonly": palette.constantVariable
    }),
    tokenColors: createTokens([
      [
        "Comment", palette.comment, "italic",
        [
          "comment",
          "punctuation.definition.comment"
        ]
      ],
      [
        "Variables", palette.foreground,
        [
          "variable",
          "string constant.other.placeholder"
        ]
      ],
      [
        "Constant Variable", palette.constantVariable,
        [
          "variable.other.constant"
        ]
      ],    
      [
        "Colors", palette.altForeground,
        [
          "constant.other.color"
        ]
      ],
      [
        "Invalid", palette.invalid,
        [
          "invalid",
          "invalid.illegal"
        ],
      ],
      [
        "Keyword, Storage", palette.keyword,
        [
          "keyword",
          "storage.type",
        ]
      ],
      [
        "Storage Modifier, noexcept", palette.keywordModifier,
        [
          "storage.modifier",
          "keyword.operator.noexcept"
        ]
      ],
      [
        "Requires Keyword", palette.keyword, "bold",
        [
          "keyword.other.requires"
        ]
      ],
      [
        "Control Keywords", palette.control, "bold",
        [
          "keyword.control",        
        ]
      ],
      [
        "Misc", palette.misc,
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
        "Template Argument Name", palette.foreground,
        [
          "entity.name.type.template.cpp"
        ]
      ],
      [
        "Operator", palette.operator,
        [
          "keyword.operator"
        ]
      ],
      [
        "Cast", palette.cast,
        [
          "keyword.operator.cast"
        ]
      ],
      [
        "Tag", palette.tag,
        [
          "entity.name.tag",
          "meta.tag.sgml",
          "markup.deleted.git_gutter"
        ],
      ],
      [
        "Primitive Type", palette.altKeyword,
        [
          // "storage.type",
          "storage.type.primitive",
          "storage.type.built-in"
        ],
      ],
      [
        "Class, Support", palette.class,
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
        "Class, Struct, Type Declaration", palette.class,
        // No longer doing "bold" here to avoid member variable type boldening when using clangd
        [
          "entity.name.type.class",
          "entity.name.type.struct",
          // "entity.name.type.declaration",
          "entity.name.type.typedef"
        ],
      ],
      // TODO: Find a way to differentiate between template declaration and
      // instantiation (and un-bold the latter)
      [
        "Namespace Prefix", palette.namespacePrefix,
        [
          "entity.name.scope-resolution"
        ]
      ],
      [
        // As for Jan 2025, VSCode scopes the whole return type of a lambda
        // as one token :(
        "Lambda Return Type", palette.lambdaReturnType,
        [
          "storage.type.return-type.lambda.cpp"
        ]
      ],
      [
        "Function, Special Method", palette.function,
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
        "Member Function", palette.function, "bold",
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
        "Special Function", palette.specialFunction, "bold italic",
        [
          "entity.name.function.definition.special"
        ]
      ],
      [
        "Macro", palette.macro,
        [
          "entity.name.function.preprocessor",
          "keyword.control.directive"
        ]
      ],
      [
        "Property/Member Variables", palette.memberVariable,
        [
          // "meta.block variable.other.property",
          "variable.other.property",
          "variable.other.object.property",
          // To color member variable declaration as well
          "meta.body.class variable.other.declare"
        ]
      ],
      [
        "Local Variable Declaration", palette.foreground,
        [
          // Workaround for local variable declaration to not be colored
          // the same as member variable declaration
          "meta.body.function.definition variable.other.declare"
        ]
      ],
      [
        "Other Variable, String Link", palette.memberVariable,
        [
          "support.other.variable",
          "string.other.link"
        ]
      ], // TODO:
      [
        "Number, Constant, Tag Attribute, Embedded", palette.number,
        [
          "constant.numeric",
          "constant.language",
          "support.constant",
          "constant.character",
          "constant.escape",
        ]
      ],
      [
        "Argument", palette.argument, "italic",
        [
          "variable.parameter"
        ],
      ],
      [
        "Keyword (Other)", palette.keywordOther,
        [
          "keyword.other.unit",
          "keyword.other"
        ]
      ],
      [
        "String, Symbols, Inherited Class, Markup Heading", palette.string,
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
        "TypeScript Primitive", palette.tsPrimitive,
        [
          "support.type.primitive.ts"
        ]
      ],
      [
        "Attributes", palette.keyword,
        [
          "entity.other.attribute-name"
        ]
      ],
      [
        "HTML Attributes", palette.class, "italic",
        [
          "text.html.basic entity.other.attribute-name.html",
          "text.html.basic entity.other.attribute-name"
        ]
      ],
      [
        "CSS Classes", palette.class, "entity.other.attribute-name.class"
      ],
      [
        "CSS IDs", palette.function, "source.sass keyword.control"
      ],
      [
        "Inserted", palette.string, "markup.inserted"
      ],
      [
        "Deleted", palette.invalid, "markup.deleted"
      ],
      [
        "Changed", palette.changed, "markup.changed"
      ],
      [
        "Regular Expressions", palette.regexp, "string.regexp"
      ],
      [
        "Escape Characters", palette.misc, "constant.character.escape"
      ],
      [
        "URL", "underline",
        [
          "*url*",
          "*link*",
          "*uri*"
        ]
      ],
      [
        "Decorators", palette.specialFunction, "italic",
        [
          "tag.decorator.js entity.name.tag.js",
          "tag.decorator.js punctuation.definition.tag.js"
        ]
      ],
      [
        "ES7 Bind Operator", palette.operator, "italic",
        "source.js constant.other.object.key.js string.unquoted.label.js"
      ],
      // TODO: Better semantics, e.g. separate props with the same colors
      [
        "JSON Key - Level 0", palette.keyword,
        "source.json meta.structure.dictionary.json support.type.property-name.json"
      ],
      [
        "JSON Key - Level 1", palette.class,
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
      ],
      [
        "JSON Key - Level 2", palette.number,
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
      ],
      [
        "JSON Key - Level 3", palette.memberVariable,
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
      ],
      [
        "JSON Key - Level 4", palette.jsonLevel4,
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
      ],
      [
        "JSON Key - Level 5", palette.function,
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
      ],
      [
        "JSON Key - Level 6", palette.tag,
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
      ],
      [
        "JSON Key - Level 7", palette.keyword,
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
      ],
      [
        "JSON Key - Level 8", palette.string,
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
      ],
      [
        "Markdown - Plain", palette.mdPlain,
        [
          "text.html.markdown",
          "punctuation.definition.list_item.markdown"
        ]
      ],
      [
        "Markdown - Markup Raw Inline", palette.mdRaw,
        [
          "text.html.markdown markup.inline.raw.markdown",
          "text.html.markdown markup.inline.raw.string.markdown"
        ]
      ],
      [
        "Markdown - Markup Raw Inline Punctuation", palette.mdMisc,
        [
          "text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown"
        ]
      ],
      [
        "Markdown - Heading", palette.mdHeading,
        [
          "markdown.heading",
          "markup.heading | markup.heading entity.name",
          "markup.heading.markdown punctuation.definition.heading.markdown"
        ]
      ],
      [
        "Markup - Italic", palette.mdItalic, "italic",
        [
          "markup.italic"
        ]
      ],
      [
        "Markup - Bold", palette.mdBold, "bold",
        [
          "markup.bold",
          "markup.bold string"
        ]
      ],
      [
        "Markup - Bold-Italic", palette.mdBoldItalic, "bold",
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
        "Markup - Underline", palette.mdUnderline, "underline",
        [
          "markup.underline"
        ]
      ],
      [
        "Markdown - Blockquote", palette.mdMisc,
        [
          "markup.quote punctuation.definition.blockquote.markdown"
        ]
      ],
      [
        "Markup - Quote", palette.mdMisc, "italic",
        [
          "markup.quote"
        ]
      ],
      [
        "Markdown - Link", palette.mdLink,
        [
          "string.other.link.title.markdown"
        ]
      ],
      [
        "Markdown - Link Description", palette.mdLinkDescription,
        [
          "string.other.link.description.title.markdown"
        ]
      ],
      [
        "Markdown - Link Anchor", palette.class,
        [
          "constant.other.reference.link.markdown"
        ]
      ],
      [
        "Markup - Raw Block", palette.mdRawBlock,
        [
          "markup.raw.block"
        ]
      ],
      [
        "Markdown - Raw Block Fenced", palette.mdRawBlock,
        [
          "markup.raw.block.fenced.markdown",
          "markup.fenced_code.block"
        ]
      ],
      [
        "Markdown - Fenced Code Block", palette.mdRawBlock,
        [
          "punctuation.definition.fenced.markdown"
        ]
      ],
      [
        "Markdown - Fenced Code Block Variable", palette.mdPlain,
        [
          "markup.raw.block.fenced.markdown",
          "variable.language.fenced.markdown",
          "punctuation.section.class.end"
        ],
      ],
      [
        "Markdown - Fenced Language", palette.mdMisc,
        [
          "variable.language.fenced.markdown"
        ]
      ],
      [
        "Markdown - Separator", palette.mdMisc, "bold",
        [
          "meta.separator"
        ]
      ],
      [
        "Markup - Table", palette.mdPlain,
        [
          "markup.table"
        ]
      ]
    ]),
  };

  return theme;
}