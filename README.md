# Semantic Theme for VS Code

This is an attempt at a VS Code color theme that would offer decent semantic highlighting for C++. Needs more work.

I have yet to test this with any other languages (JavaScript, CSS, HTML, Markdown, etc.)

## Goals / Considerations

- Neutral gray backgrounds to reduce messing with perception of color temperature in app GUIs and graphics
- Stuff like `&` for references and `*` for pointers should be contrasting enough to easily notice
- Differentiate class / class template declarations and definitions from instantinations using bold style, same for functions declarations and calls
- Differentiate local variables, member variables and funciton arguments if possible (maybe make globals stand out as well?)
- Try to avoid making all keywords, casts etc. a big purple mess
- Obviously, macros should be easily distinguishable (maybe differentiate macros definitions from 'calls' as well?)
- Could be great if we'll be able to differentiate between e.g. `const` and non-`const` methods e.g. using italics (doesn't seem to be possible as of now)