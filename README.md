# Lyth Color Theme for VS Code

This is a work-in-progress attempt at a VS Code color theme that would offer decent semantic highlighting for C++.

I have yet to test this with any other languages (JavaScript, CSS, HTML, Markdown, etc.)

## Building / Debugging

To build, run

```
npm run build
```

or, to watch for changes and rebuild automatically, run

```
npm run watch
```

then `F5` to open a new editor window with debugger attached.

## Installing

```
npm run install
```

This will look for `.vscode` and `.cursor` directories in your home path and copy the theme there.

## Setup

The project is meant to facilitate creation of multiple themes using  relatively short color palette definitions in `src/defs`.

- In `package.json`, the `contributes.themes` points should list all the themes you want to build.
- `src/defs` should contain `.ts` files with palette definitions. The file names should match the `.json` file name at `contributes.themes[].path` in `package.json`.

## Notes

Token scopes differ depending on the language server used (`clangd` or `cpptools`). As of Jan 2025, the former seems to be better in terms of semantic tokens, but for textmate scopes the latter can sometimes be more informative. Overall, it's a bit of a hit and miss for both. I'm currently using `clangd`, so that's the focus for now.

## Goals / Considerations

- Neutral gray backgrounds to reduce messing with perception of color temperature in app GUIs and graphics
- Stuff like `&` for references and `*` for pointers should be contrasting enough to easily notice
- Differentiate class / class template declarations and definitions from instantinations using bold style, same for functions declarations and calls
- Differentiate local variables, member variables and funciton arguments if possible (maybe make globals stand out as well?)
- Try to avoid making all keywords, casts etc. a big purple mess
- Obviously, macros should be easily distinguishable (maybe differentiate macros definitions from 'calls' as well?)
- Could be great if we'll be able to differentiate between e.g. `const` and non-`const` methods e.g. using italics (doesn't seem to be possible as of now)