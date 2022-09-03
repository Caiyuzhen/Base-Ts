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







//⚡️十-1、自定义对象类型, 定义一个对象的‘形状’，比如对象需要又个 string 跟 toString 的方法，或者叫定义了对象的数据类型
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






//⚡️十-2、自定义对象的类型别名，可以类比 interface
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







/* ⚡️十一、接口 interface, 是对于【对象】形状的描述, 对类的一部分行为做抽象, 作用跟对象的类型别名一样
		interface 实例的属性不可多也不可少
		readonly 表示只读属性
		可以用 ？, ? 问号表示可选属性，可有可无
		可以用 [propName: string] : any , 这是固定的写法!! 用来自己加属性*/
interface Person {
	readonly id: number  //readonly 表示只读属性
	name : string
	age? : number  //？表示可选项 
	[propName: string] : any //让继承这个借口的对象可以添加额外属性, 🔥注意, 任意属性一定得是 any！
}

let person: Person = {
	id: 123,
	name: 'John',
	// age: 24,
	sex:'male', //增加的额外属性
}

// person.id = 1234 //因为上面让 id 为只读，所以再赋值会报错








//⚡️十二、Array 数组的注解, 由于数组也是【对象】，函数也是【对象】，类也是【对象】，所以上面的 interface 也可以用来【注解数组、函数、类】

//写法一：用【数组类型】的注解方式
let list1:number[] = [1,2,3]
let list2:(string | number)[] = [1,2,3,'well']
list1.push(5)
list2.push('hello')
console.log(list2)


//写法二：用【范型】的注解方式, 可以理解为构造函数的方式, 本质也是接口
let list3:Array<number> = [1,2,3]


//写法三：用【接口】的注解方式
interface NumberArray { //一个数组的接口
	[index:number]: number | string//🔥让数组可以添加额外内容, 不写死！
}
let list4:NumberArray = [1,2,3,4,'this is字符串']
console.log(list4)







//⚡️十三、函数的注解, 注解【参数+返回值】, 函数参数多传少传都会报错
//写法一：函数声明方式

//要抛出错误的函数
function test3(a:number, b:number):never{
	throw new Error('报错了')//要抛出报错的话，返回值类型必须是 never
}

//要打印的函数
function test4(a:number, b:number):void{
	console.log('hey') //要打印的话，返回值类型必须是 void
}

//包含默认值的函数
function test6(a:number, b:number, c:string = 'Kim'):void{
	console.log('hey') //要打印的话，返回值类型必须是 void
}

//参数多了, 需要搜集剩余参数, 🌟🌟🌟在【最后】添加 ...restOfName:XXX[] 
function test7(a:number, b:number, ...restOfName: string[]):void{
	console.log('hey') //要打印的话，返回值类型必须是 void
}


//🌟包含解构赋值的写法
function test8(
	{first, second} : {first: number, second: string} = {first: 1, second: '晴'}
) {
	return '第' + first	+ '天' + second	
}
console.log(test8({first : 2, second : '阴'}))



//包含解构赋值(键值跟键名一样的话）的简便写法, 🔥🔥🔥表示第二个参数有默认值，然后传参可选
function test9(
	{first = 2, second = 3} : {first: number, second? : number}
){
	return first + second
}
console.log(test9({first: 998, second: undefined})) //🔥🔥🔥因为第二个参数有可选值, 所以不传！！



//写法二-1：函数表达式的方式(一般不这么写)
//不常规的写法
let test10 = function(a:number, b:number): number{
	return a + b
}

//写法二-2：函数表达式的方式（常规写法） => 表示返回值为 {} 类型, 🔥 ？ 表示可选参数，约定速成, 可选参数一般都放最后
//返回一个对象
let test11:(a:number, b? :number) => {} = function(a,b){
	return {a:998}
}

//返回一个 number
let test12:(a:number, b:number) => number = function(a,b){
	return a + b
}