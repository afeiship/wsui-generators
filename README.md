# wsui-generators
> Webkit sass generator mixins.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm i -S @jswork/wsui-generators
```

## usage
```scss
@import "@jswork/wsui-functions";
@import "@jswork/wsui-generators";

$color-map: (
  0: #000,
  3: #333,
  6: #666,
  9: #999,
  f: #fff
);

$width-list: range(1, 10);
$box-list: (1, 2, 3, 4, 5, 6, 7, 8, 9);

//Generate a list:
$w1-list: range(1, 20);
$border-radius-list: range(1, 5);
$font-list: (10, 20, 30);
$font-weight-list: (100, 200, 300, 400, 500, 600, 700, 800);
$line-clamp: (1, 2, 3, 4, 5);

@include generator-color($color-map);
@include generator-background-color($color-map);
@include generator-border-color($color-map);

// Generate width/blank/font-size/border-radius:
@include generator-width-w1($w1-list);
@include generator-width-wp($width-list);
@include generator-space($width-list);
@include generator-font-size($font-list);
@include generator-font-weight($font-weight-list);
@include generator-border-radius($border-radius-list);

//Generate margin:
@include generator-box($box-list, "m");
@include generator-box($box-list, "mt");
@include generator-box($box-list, "mr");
@include generator-box($box-list, "ml");
@include generator-box($box-list, "mb");
@include generator-box($box-list, "mx");
@include generator-box($box-list, "my");


// OR you want Generate `rem` value
@include generator-box($box-list, "p", 50);
@include generator-box($box-list, "pt", 50);
@include generator-box($box-list, "pr", 50);
@include generator-box($box-list, "pl", 50);
@include generator-box($box-list, "pb", 50);
@include generator-box($box-list, "px", 50);
@include generator-box($box-list, "py", 50);

//Generate your own grid:
@include generator-line($width-list, #f3f3f3);
@include generator-line-clamp($line-clamp);
```

## customize
```scss
$wsui-generators-options: (
  global: "",
  background-color: "bg-",
  border-color: "bcd-",
  border-radius: "bdr-",
  box: "-",
  color: "c-",
  font-size: "f-",
  font-weight: "fw-",
  line-clamp: "lc-",
  line-height: "lh-",
  height-line-height: "hlh-",
  line: "line-",
  space: "sp-",
  width-w1: "w1-",
  width-wp: "wp-",
) !default;
```

## resources
- http://hugogiraudel.com/2013/08/08/advanced-sass-list-functions/
- http://sass-lang.com/documentation/Sass/Script/Functions.html
- https://github.com/HugoGiraudel/SassyStrings

## license
Code released under [the MIT license](https://github.com/afeiship/wsui-generators/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/wsui-generators
[version-url]: https://npmjs.org/package/@jswork/wsui-generators

[license-image]: https://img.shields.io/npm/l/@jswork/wsui-generators
[license-url]: https://github.com/afeiship/wsui-generators/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/wsui-generators
[size-url]: https://github.com/afeiship/wsui-generators/blob/master/dist/wsui-generators.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/wsui-generators
[download-url]: https://www.npmjs.com/package/@jswork/wsui-generators
