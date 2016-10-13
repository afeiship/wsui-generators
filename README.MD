#webkit-sass-generators
> Webkit sass generator mixins.

## usage:
```sass
@import "../dist/webkit-sass-generator";
//test color-map
$color-map: (
  0:#000,
  3:#333,
  6:#666,
  9:#999,
  f:#fff
);
$width-list:(1,2,3,4,5,6,7,8,9);
$margin-list:(1,2,3,4,5,6,7,8,9);
$padding-list:(1,2,3,4,5,6,7,8,90,100);

//Generate a list:
$data-src:generator-list(1,20);
$border-radius-list:generator-list(1,5);
$font-list:(10,20,30);


@include generator-color($color-map,'.c__');
@include generator-background-color($color-map,'.bg__');
@include generator-border-color($color-map,'.bdc__');

//Generate width/blank/font-size/border-radius:
@include generator-width-w1($data-src,'.w1__');
@include generator-width-wp($width-list,'.wp__');
@include generator-blank($width-list,'.blk__');
@include generator-font-size($font-list,'.f__');
@include generator-border-radius($border-radius-list,'.bdr__');

//Generate margin:
@include generator-margin($margin-list,'m','_');
@include generator-margin($margin-list,'mt','_');
@include generator-margin($margin-list,'mr','_');
@include generator-margin($margin-list,'ml','_');
@include generator-margin($margin-list,'mb','_');
@include generator-margin($margin-list,'mx','_');
@include generator-margin($margin-list,'my','_');

//Generate padding:
@include generator-padding($padding-list,'p','__');
@include generator-padding($padding-list,'pt','__');
@include generator-padding($padding-list,'pr','__');
@include generator-padding($padding-list,'pl','__');
@include generator-padding($padding-list,'pb','__');
@include generator-padding($padding-list,'px','__');
@include generator-padding($padding-list,'py','__');

//Generate your own grid:
@include generator-grid(12,'.wk-row','.wk-col-');
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
- [x] generator-margin
- [x] generator-margin-m
- [x] generator-margin-mt
- [x] generator-margin-mr
- [x] generator-margin-mb
- [x] generator-margin-ml
- [x] generator-padding
- [x] generator-padding-p
- [x] generator-padding-pt
- [x] generator-padding-pr
- [x] generator-padding-pb
- [x] generator-padding-pl
- [x] generator-grid


## resources:
+ http://hugogiraudel.com/2013/08/08/advanced-sass-list-functions/
+ http://sass-lang.com/documentation/Sass/Script/Functions.html
+ https://github.com/HugoGiraudel/SassyStrings
