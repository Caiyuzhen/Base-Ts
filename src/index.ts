/*
	ts 
		What?
			可以在浏览器中执行, 但需要编译成 js 文件
			可以在编译当中检查错误

		How?
			编译为 js
				手动编译
					Tsc index.ts
					node index.js
				自动编译
					Command + shift + B,
						tsc:watch -tsconfig.json -> 监视，自动编译 ts 文件
			
			数据类型
				js
					原始数据类型： 
						boolean 
						string 
						number
						null
						undefined
						symbol

					引用数据类型： 
						function 
						object
				
				ts
					基础数据类型： 
						boolean 
						string 
						number 
						null 
						undefined 
						symbol 
						never(新增)
						any(新增) 

					引用数据类型：
						object
						interface(新增,面向对象类型)
						Array
							比如基础数组 number[]  string[]  boolean[]、范型数组 Array<number>
						function
						枚举

					新的语法特性
						联合类型
						as 类型断言
						class (OOP面向对象的三大特性) 
							封装、继承、多态
						接口
*/

//记得注解都要小写！！

//⚡️一、布尔值
let isDone:boolean = false
console.log(isDone);



//⚡️二、字符串
let myName:string = 'Tom'
myName = 'Jimmy'
console.log(myName);



//⚡️三、数字
let age:number = 24
age = 32
console.log(age);



//⚡️四、null , null 是所有类型的子类型，如果直接 let abcd = null，那么 abcd 则是 any 类型，配置项会检查 null 类型
let abcd:null = null
console.log(abcd)



//⚡️五、undefined
let ooppii:undefined = undefined
console.log(ooppii)



//⚡️六、never 类型, 场景为报错场景，比如函数出错，死循环等
//函数没法跑到终点
function error(message:string):never {
	throw new ErrorEvent(message)
}

//推断返回的值为 never 
function fail() {
	return error('这是一个报错函数')
}

//死循环
function failLoop(): never {
	while(true){

	}
}




//⚡️七、任意类型，一开始不知道是什么类型，可以写为 any, 缺点则是如果是对象的话，就不能提示原有的属性和方法
let abc:any = 4
abc = 'hello'
console.log(abc);




//⚡️八、Void 类型，🔥🔥仅用在函数没有返回值时的情况，函数默认返回值为 undefined
//函数无返回值
function test2():void {
	console.log('没有返回值的情况')
}

//函数有返回值
function test(a:number,b:number):string{
	return '' + a + b
}
console.log(test(1,2))




//⚡️九、object 类型，表示【🔥非原始类型】，也就是除却 number、string、boolean、symbol、null 或 undefined 之外的类型
//declare 为全局声明，场景比如全局声明一个函数，且并不关心函数内的实现方法，只关注函数的参数以及返回值
// declare function createFn(aa:object | null):void;
// createFn({prop:2})





//⚡️十、自定义对象类型, 定义一个对象的‘形状’，比如对象需要又个 string 跟 toString 的方法，或者叫定义了对象的数据类型
let obj: {
	name:string,
	toString:()=> void
} = {
	name:'Tom',
	toString: function(){
		console.log('Hey')
	}
}
console.log(obj.name)



//自定义对象可以类比 interface
interface Obj2 {
	name: string
	toString: ()=> void
}

let ahhah:Obj2 = {
	name:'Tom',
	toString: function(){
		console.log('Hey')
	}
}
console.log(ahhah.name)



//⚡️十、联合类型, 表明 kkk 可能是 string 或者 boolean
let kkk: string | boolean = true
console.log(kkk)

function test5(aa:number | string){//🔥🔥在联合类型上使用方法一定是公有方法才行，否则无法使用！！
	return aa.toString().split('')  //🔥🔥在 number 、string 类型都有 toString 方法
}
console.log(test5(10))