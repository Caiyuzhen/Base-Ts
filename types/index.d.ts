/* eslint-disable */

/* 
	仅用于在全局定义类型
	在使用declare声明类型的时候，并不能去定义具体的实现过程

	声明类型
		类型别名，如 type sn = number | string
		interface
		class
		enum
	声明值
		let
		const
		var
		function
		namespace
		class
		enum
*/
//相当于声明了一个全局 jQuery 函数, let jQuery 这个变量 等于一个函数
declare let jQuery: (param: string) => void 



//相当于声明了一个全局的【类型】，容易造成全局污染
// window.kooo = kooo
declare var kooo: boolean = true




//相当于声明了一个全局的【常量】，常量没法更改
// window.nnnkkk = nnnkkk
declare const nnnkkk: number




//相当于声明了一个全局函数，容易造成全局污染
declare function greet8(greeting: string): void




//🏠命名空间(现在基本仅在 ts 的声明文件内应用），相当于用一个全局的对象来挂载【函数】、【变量】等，可以产生一个块级作用域，不会造成全局变量的污染，推荐此做法
//namespace 能够产生一个块级作用域
window.myLib = myLib

namespace myLib {
	export function makeGreeting(ab: string) : string 
	export let numberOfGreeting: number
	namespace fn08 {
		function test(kk: string): void 
		let test2 : string
	}
}



//函数的重载
declare function getWidget(n:number):boolean //传入 number，返回 boolean
// declare function getWidget(s:string):number[] //传入 string，返回 number[] 数组




//声明接口
interface GreetingSettings {
	greeting : string
	duration? : number
	color ? : string
}

declare function greet2(setting : GreetingSettings) : void //函数的参数为接口类型



//使用【类型别名】来声明
type ABCGreeting = string | number | (()=>number) //表示是一个 ABCGreeting 【联合类型】，可以是 string、number、函数

declare function greet(a: ABCGreeting) : void


//声明【类】
declare class DDD {
	constructor(gree: string)

	gree: string
	showGreet() : void
}

let hhh = new DDD('hello')

//通过 export {} 导出可以被解构赋值，通过 export = {} 导出不可以被解构赋值，只能通过 . 语法来引用
// export {
	// kooo
// 	nnnkkk,
// 	greet8,
// 	myLib,
// 	getWidget,
// 	GreetingSettings,
// 	ABCGreeting,
// 	DDD
// }
