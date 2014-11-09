# TinyJQSlider
#### Features
- Lightweight; less than 1KB, minified
- Single file; no CSS file to load

## Usage:

```js
  new TinyJQSlider([jQuery element], [options])
```

```html
<ul class="slider">
  <li><img src="/img/image-1.jpg"></li>
  <li><img src="/img/image-2.jpg"></li>
</ul>
```

```js
  new TinyJQSlider($('.slider'))
```

### Options
#### interval:
the duration of each slide in milliseconds
```js
  default: 5000
```
#### speed:
the speed of each slide transition in milliseconds
```js
default: 1500
```
#### elementCSS:
an object with CSS to be applied to the element
```js
default: {
  position: 'relative',
  'list-style': 'none'
}
```
#### slideCSS:
an object with CSS to be applied to each li
```js
default: {
  float: 'left',
  width: '100%'
}
```
#### imageCSS:
an object with CSS to be applied to each image
```js
default: {
  position: 'absolute',
  top: 0,
  left: 0,
  float: 'left',
  width: '100%'
}
```