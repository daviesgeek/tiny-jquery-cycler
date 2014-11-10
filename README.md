# TinyJQCycler
A tiny jQuery image cycler that is ~1.5K minified. One lightweight JS file, no CSS file required.

(I am planning on adding a demo sometime soon)

## Usage:

```js
  new TinyJQCycler([jQuery element], [options])
```
#### Example:
```html
<ul class="cycler">
  <li><img src="/img/image-1.jpg"></li>
  <li><img src="/img/image-2.jpg"></li>
</ul>
<script src="https://cdn.rawgit.com/daviesgeek/tiny-jquery-cycler/master/dist/tiny-jquery-cycler.min.js"></script>
<script type="text/javascript">
  new TinyJQCycler($('.cycler'))
</script>
```

It is recommended that you do have one CSS rule for the `li` elements within the `ul` to ensure that on page load they don't flash:
```css
.cycler li {
  display: none;
}
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

# Contributing:
See [the contributing file](CONTRIBUTING.md)

# License

The MIT License

Copyright (c) 2014 Matthew Davies http://daviesgeek.github.io/

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.