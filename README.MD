#webkit-sass-generators
> Webkit sass generator mixins.

## usage:
```sass
@import "../dist/webkit-sass-generator";

$color-map: (
  0:#000,
  3:#333,
  6:#666,
  9:#999,
  f:#fff
);
$width-list:(1,2,3,4,5,6,7,8,9);

//Generator a list:
$data-src:generator-list(1,20);
$border-radius-list:generator-list(1,5);
$font-list:(10,20,30);


@include generator-color($color-map,'.c__');
@include generator-background-color($color-map,'.bg__');
@include generator-border-color($color-map,'.bdc__');


@include generator-width-w1($data-src,'.w1__');
@include generator-width-wp($width-list,'.wp__');
@include generator-blank($width-list,'.blk__');
@include generator-font-size($font-list,'.f__');
@include generator-border-radius($border-radius-list,'.bdr__');

```

## todos:
- [x] generator-background-color
- [x] generator-blank
- [x] generator-border-color
- [x] generator-border-radius
- [x] generator-color
- [x] generator-list (data)
- [x] generator-font-size
- [x] generator-width-w1 (width-w1)
- [x] generator-width-wp (width-wp)


## resources:
+ http://hugogiraudel.com/2013/08/08/advanced-sass-list-functions/
+ http://sass-lang.com/documentation/Sass/Script/Functions.html
+ https://github.com/HugoGiraudel/SassyStrings
