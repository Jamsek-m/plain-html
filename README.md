# Adding a page

To add new page, you need to create folder structure, matching path. For example, to create new page at `/page`, you need to create folder `/www/page` with `index.html` in it.

You also need to add this line:
```javascript
input: {
  [pageId]: resolve($pagePath)
}
```
where `pageId` is some unique name (determines how bundle will be named) and `$pagePath` which is path to created file (`resolve(__dirname, "www/page", "index.html")` in this case).

into `vite.config.js`:

```javascript
export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, "www", "index.html"),
                // ... other pages
                page: resolve(__dirname, "www/page" "index.html"),
            },
        },
    },
})
```

## Styling

To inherit global styles and import TailwindCSS's configuration, create scss file, let's say `page.scss` and include it into the page:
```html
<link href="./page.scss" rel="stylesheet"/>
```

Then, insert import statement on top of file:

```scss
@import "../globals";
```

## Scripting

To create page script, simply create typescript file in same folder, let's say `page.ts` and include it into page:

```html
<script src="./page.ts" type="module"></script>
```
(`type="module"` is mandatory)
