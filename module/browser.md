# Browser

## Firefox

```about:config
browser.closeWindowWithLastTab=false
```

## codeforces.com

```css
body>.mobile-toolbar>.mobile-toolbar-internals {
    width: auto !important;
}
body>#body {
    max-width: none !important;
    min-width: auto !important;
    width: auto !important;
}
body>#body>div {
    width: auto !important;
}
#facebox {
    left: 0 !important;
    top: 0 !important;
}
#facebox .content {
    width: auto;
}
.source-popup pre {
    width: 0;
    overflow-x: visible !important;
}
.source-popup {
    width: auto !important;
    height: auto !important;
}
```

Needs to be reloaded while F12 is open to apply the overrides.

```js
let style = document.createElement(`style`);
document.head.appendChild(style);
style.appendChild(document.createTextNode(`body>.mobile-toolbar>.mobile-toolbar-internals {
    width: auto !important;
}
body>#body {
    max-width: none !important;
    min-width: auto !important;
    width: auto !important;
}
body>#body>div {
    width: auto !important;
}`));
```
