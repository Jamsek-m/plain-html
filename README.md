# Generating redundant css

## Reproduction

Run build using `npm run build`.

In `/dist` folder, `logger-[hash].js` is generated (as it should be), but there is also `logger-[hash].css`, which 
should not be generated, since this is plain typescript file it should not generate any css.
