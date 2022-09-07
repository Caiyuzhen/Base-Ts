# 声明文件

### 全局库
是一个全局变量，不需要 import 便能够使用, 比如 jQuery，全局库。全局库有两种安装方式：
* 1 是 npm 安装；
* 2 是直接引入一个 js 文件，比如 <script src="http://a.great.cdn.for/someLib.js"></script>


### 模块化库
在特定环境下才能使用，比如:
* import * as a from 'b';
* import moment = require("moment");

### UMD 模块
即可以用全局的变量方式进行导入，又可以通过模块化的方式进行导入，如调用模板函数、模板类等，比如：
* module.d.ts
* module-class.d.ts 
* module-function.d.ts.


### 使用依赖
安装全局依赖时才会在顶部添加 /// 三斜线的声明, 比如
* /// <reference types="someLib" />
* function getThing(): someLib.thing;
