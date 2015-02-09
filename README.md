# catdown-hash

A [Catdown](http://github.com/zuren/catdown) plugin for loose persistance. It stores the editor's Markdown value in the URL hash after every change, encoded as base64. Upon initialisation it checks the URL hash, decodes the hash if present and sets the editors content.

## Usage

Install with `npm`.

```bash
$ npm install --save catdown-hash
```

`use` it on your Catdown editor.

```js
editor.use(require("catdown-hash"));
```