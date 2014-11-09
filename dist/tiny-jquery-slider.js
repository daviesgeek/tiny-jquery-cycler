/**
 * A tiny lightweight slider
 * @version v1.0.1 - 2014-11-09
 * @link https://github.com/daviesgeek/tiny-jquery-slider
 * @author Matthew Davies
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
'use strict';

var TinyJQSlider = function(element, options) {
  if(typeof jQuery == 'undefined')
    console.error('jQuery is required for the slider to run')

  this._defaults = {
    interval: 5000,
    speed: 1500,
    elementCSS: {
      position: 'relative',
      'list-style': 'none'
    },
    slideCSS: {
      float: 'left',
      width: '100%'
    },
    imageCSS: {
      position: 'absolute',
      top: 0,
      left: 0,
      float: 'left',
      width: '100%'
    }
  }

  this._options = $.extend(true, {}, this._defaults, options)

  this._init(element, options);
};

TinyJQSlider.prototype._init = function(element, options) {
  this._element = element
  this._slides = this._element.children('li')
  if(!this._slides)
    return;

  this._applyCSS()
  this._slidesLength = this._slides.length

  this._slides.hide()

  this._currentSlide = this._slides.eq(0)
  this._currentSlide.fadeIn()

  this._nextSlide = this._slides.eq(1)
  window.setInterval(this._advanceSlide.bind(this), this._options.interval)
}

TinyJQSlider.prototype._advanceSlide = function() {
  this._currentSlide.fadeOut(this._options.speed)
  this._nextSlide.fadeIn(this._options.speed)

  this._currentSlide = this._nextSlide
  this._nextSlide = this._currentSlide.next()

  if(!this._nextSlide.get(0))
    this._nextSlide = this._slides.eq(0)
}
TinyJQSlider.prototype._applyCSS = function() {
  this._element.css(this._options.elementCSS)

  var self = this
  $.each(this._slides, function(index, slide) {
    $(slide).css(self._options.slideCSS)
    $(slide).children('img').css(self._options.imageCSS)
  })
};

window.TinyJQSlider = TinyJQSlider