# webkit-sass-generators
> Webkit sass generator mixins.

## installation
```shell
npm i -S @feizheng/webkit-sass-generators
```

## update
```shell
npm update @feizheng/webkit-sass-generators
```

## usage
```scss
@import "../dist/webkit-sass-generators.scss";
//test color-map
$color-map: (
  0:#000,
  3:#333,
  6:#666,
  9:#999,
  f:#fff
);
$width-list:(1,2,3,4,5,6,7,8,9);
$box-list:(1,2,3,4,5,6,7,8,9);

//Generate a list:
$data-src:generate-list(1,20);
$border-radius-list:generate-list(1,5);
$font-list:(10,20,30);
$line-clamp:(1,2,3,4,5);

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
@include generator-box($box-list,'m');
@include generator-box($box-list,'mt');
@include generator-box($box-list,'mr');
@include generator-box($box-list,'ml');
@include generator-box($box-list,'mb');
@include generator-box($box-list,'mx');
@include generator-box($box-list,'my');

@include generator-box-rem($box-list,'p', 50);
@include generator-box-rem($box-list,'pt', 50);
@include generator-box-rem($box-list,'pr', 50);
@include generator-box-rem($box-list,'pl', 50);
@include generator-box-rem($box-list,'pb', 50);
@include generator-box-rem($box-list,'px', 50);
@include generator-box-rem($box-list,'py', 50);

//Generate your own grid:
@include generator-grid(12,'.wk-row','.wk-col-');
@include generator-line($width-list,#f3f3f3,'.dc-line-');
@include generator-line-clamp($line-clamp,'.line-clamp-');


.test-ml100{
  >span{
    border: 1px solid #000;
  }
}
```

## some problem:
```sass
  /* autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
```

## resources
+ http://hugogiraudel.com/2013/08/08/advanced-sass-list-functions/
+ http://sass-lang.com/documentation/Sass/Script/Functions.html
+ https://github.com/HugoGiraudel/SassyStrings
