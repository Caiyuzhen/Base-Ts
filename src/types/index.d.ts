/* eslint-disable */

/* 
	仅用于在全局定义类型
	在使用declare声明类型的时候，并不能去定义具体的实现过程

*/
//相当于声明了一个全局 jQuery 函数, let jQuery 这个变量 等于一个函数

declare let jQuery: (param: string) => void 

//相当于声明了一个全局的【类型】，容易造成全局污染
declare var kooo: boolean 

//相当于声明了一个全局的【常量】，常量没法更改
declare const nnnkkk: number

//相当于声明了一个全局函数，容易造成全局污染
declare function greet(greeting: string): void

//🏠命名空间(目前基本仅在 ts 的声明文件内应用），相当于用一个全局的对象来挂载【函数】、【变量】等，可以产生一个块级作用域，不会造成全局变量的污染，推荐此做法
declare namespace myLib {
	function makeGreeting(ab: string) : string 
	let numberOfGreeting: number
}

