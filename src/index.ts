/* eslint-disable */

// import {	
	// kooo,
// 	nnnkkk,
// 	greet,
// 	myLib,
// 	getWidget,
// 	GreetingSettings,
// 	ABCGreeting,
	// DDD
//  } from '../types/'
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
						interface 接口
	
	课程地址：
		https://www.bilibili.com/video/BV1MZ4y157EP?p=17&vd_source=b67f9398d85e7e297041f47a430b16cb
*/

//记得注解都要小写！！

//⚡️一、布尔值 ————————————————————————————————————————————————————————————————————————————————————————
let isDone:boolean = false
console.log(isDone);




//⚡️二、字符串 ————————————————————————————————————————————————————————————————————————————————————————
let myName:string = 'Tom'
myName = 'Jimmy'
console.log(myName);





//⚡️三、数字 ————————————————————————————————————————————————————————————————————————————————————————
let age:number = 24
age = 32
console.log(age);





//⚡️四、null , null 是所有类型的子类型，如果直接 let abcd = null，那么 abcd 则是 any 类型，配置项会检查 null 类型 ————————————————————————————————————————————
let abcd:null = null
console.log(abcd)





//⚡️五、undefined ———————————————————————————————————————————————————————————————
let ooppii:undefined = undefined
console.log(ooppii)





//⚡️六、never 类型, 场景为报错场景，比如函数出错，死循环等 ————————————————————————————————————————————
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





//⚡️七、任意类型，一开始不知道是什么类型，可以写为 any, 缺点则是如果是对象的话，就不能提示原有的属性和方法 ————————————————————————————————————————————
let abc:any = 4
abc = 'hello'
console.log(abc);






//⚡️八、Void 类型，🔥🔥仅用在函数没有返回值时的情况，函数默认返回值为 undefined ————————————————————————————————————————————
//函数无返回值
function test2():void {
	console.log('没有返回值的情况')
}

//函数有返回值
function test(a:number,b:number):string{
	return '' + a + b
}
console.log(test(1,2))






//⚡️九、object 类型，表示【🔥非原始类型】，也就是除却 number、string、boolean、symbol、null 或 undefined 之外的类型 ————————————————————————————————————————————
//declare 为全局声明，场景比如全局声明一个函数，且并不关心函数内的实现方法，只关注函数的参数以及返回值
// declare function createFn(aa:object | null):void;
// createFn({prop:2})







//⚡️十-1、自定义对象类型, 定义一个对象的‘形状’，比如对象需要又个 string 跟 toString 的方法，或者叫定义了对象的数据类型 ————————————————————————————————————————————
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






//⚡️十-2、自定义对象的类型别名，可以类比 interface ————————————————————————————————————————————
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







//⚡️十一、联合类型, 表明 kkk 可能是 string 或者 boolean ————————————————————————————————————————————
let kkk: string | boolean = true
console.log(kkk)

function test5(aa:number | string){//🔥🔥在联合类型上使用方法一定是公有方法才行，否则无法使用！！
	return aa.toString().split('')  //🔥🔥在 number 、string 类型都有 toString 方法
}
console.log(test5(10))







/* ⚡️十二、接口 interface, 是对于【🔥对象】形状的描述, 对类的一部分行为做抽象, 作用跟对象的类型别名一样 ————————————————————————————————————————————
		interface 实例的属性不可多也不可少
		readonly 表示只读属性
		可以用 ？, ? 问号表示可选属性，可有可无
		可以用 [propName: string] : any , 这是固定的写法!! 用来自己加属性，🔥🔥🔥🔥🔥注意是 any 才不会报错，因为 [propName] 权重最大！！*/
interface Person {
	readonly id: number  //readonly 表示只读属性
	name : string
	age? : number  //？表示可选项 
	[propName: string] : any //让继承这个【接口】的对象可以添加额外属性, 🔥注意, 任意属性一定得是 any！
}

let person: Person = {
	id: 123,
	name: 'John',
	// age: 24,
	sex:'male', //增加的额外属性
}

// person.id = 1234 //因为上面让 id 为只读，所以再赋值会报错



//🔥🔥🔥接口应用在函数内
interface IES {
	color: string
}

function isColorPanel(x: IES) : void{
	console.log(x);
}

isColorPanel({color: 'red'})//传入一个【对象】, 这个对象需要符合 【IES 接口】所定义的【形状】







//⚡️十三、Array 数组的注解, 由于数组也是【对象】，函数也是【对象】，类也是【对象】，所以上面的 interface 也可以用来【注解数组、函数、类】————————————————————————————————————————————

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







//⚡️十四、函数的注解, 注解【参数+返回值】, 函数参数多传少传都会报错 ————————————————————————————————————————————
/*	
	四种添加注解的方式
		在函数的参数跟函数体上添加注解
		通过接口 interface 添加注解
		抽象出 type 来添加注解
		用范型来注解函数

*/
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

//返回一个 boolean
let test12:(a:boolean, b:boolean) => boolean = function(a,b){
	return a
}

//🔥简写的定义【函数表达式】的方式，抽象出参数跟返回值！
type testArg = (a:string, b:string) => string
let testFn08 : testArg = function(a:string, b:string): string{
	return a + b
}






//⚡️十五、函数的 this 指向问题 ————————————————————————————————————————————
//默认箭头函数的 this 指向, 这里不写 this 指向 也会进行默认的类型推断
let deck = {
	suits: ['hearts', 'spades', 'clubs', 'diamonds'],
	cards: Array(52),
	createCardPicker: function() { 
		// console.log(this)  //this 指向 deck
		return () => { //🔥改成箭头函数后, 下面的 this 就会指向 deck 了, 因为箭头函数在函数定义时就指向好了
			let pickedCard = Math.floor(Math.random() * 52)
			let pickSuit = Math.floor(pickedCard / 13)

			//🔥如果上面返回的不适箭头函数, 那么这里的 this 指向 window 或 undefined, 是因为是看谁掉用这个函数
			//如果上面是 return 的箭头函数, 那么这里 this 指向的就是 deck
			return {suit: this.suits[pickSuit], card: pickedCard % 13}
		}
	}
}

let cardPicker = deck.createCardPicker()
let pickedCard = cardPicker()

// alert("card:" + pickedCard.card + "of" + pickedCard.suit)




//手动通过 interface 的方式, 传入 this 参数来绑定 this 指向
interface Card {
	suit: string
	card: number
}

interface Deck2 { //描述对象的形状
	suits: string[]
	cards: number[]
	createCardPicker(this: Deck2): () => Card//🔥🔥🔥🔥手动把 this 绑定到 Deck2 上, 返回返回的类型是 Card !!
}

let deck2: Deck2 = {
	suits: ['hearts', 'spades', 'clubs', 'diamonds'],
	cards: Array(52),
	createCardPicker: function(this) {
		// console.log(this)  //this 指向 deck
		return () => { //🔥改成箭头函数后, 下面的 this 就会指向 deck 了, 因为箭头函数在函数定义时就指向好了
			let pickedCard = Math.floor(Math.random() * 52)
			let pickSuit = Math.floor(pickedCard / 13)

			//🔥如果上面返回的不适箭头函数, 那么这里的 this 指向 window 或 undefined, 是因为是看谁掉用这个函数
			//如果上面是 return 的箭头函数, 那么这里 this 指向的就是 deck
			return {suit: this.suits[pickSuit], card: pickedCard % 13}
		}
	}
}

let cardPicker2 = deck.createCardPicker()
let pickedCard2 = cardPicker()

// alert("card:" + pickedCard.card + "of" + pickedCard.suit)






//⚡️十六、函数的重载 ————————————————————————————————————————————————————————————

/*
	🔥🔥重载场景: 函数根据参数的不同, 来返回不同的类型:
	比如：根据传入参数的不同（字符串或数字）, 去反转函数 [1,2,3] -> [3,2,1]
*/


//🌟重载的写法(重载是为了让表意更清晰,不改变实际的实现写法)：
function reverse(x:string) : string  //固定写法, 注意, 不是 => 
function reverse(x:number) : number  //固定写法, 注意, 不是 => 


//🌟一般的写法：
function reverse(x: string | number){
	if(typeof x === 'string'){
		return x.split('').reverse().join('') //把传入的字符串【拆分】，【反转】，再【拼接】
	}
	if(typeof x === 'number'){ //如果是 number 类型
		return Number(x.toString().split('').reverse().join('')) //转为字符串
	}
}
console.log(reverse(123))
console.log(reverse('123'))





//⚡️十七、类 ————————————————————————————————————————————————————————————
/*
	ts 类知识汇总
		 类的注解：	  注解静态属性、注解构造函数的参数、注解原型方法
		 类的继承：   子类的 super()
		 类的封装：   几种修饰符
		 类的存储器： get set 方法
		 抽象类：	 父类公共方法的抽象，子类需要去实现它
		 高级技巧：  类的‘类型’ ，接口可以去继承类

*/ 
//🌟基础类的注解 —— 父类
class Animal {
	catcall: string //实例属性，需要注解

	constructor(msg: string){ //类的构造函数，需要注解
		this.catcall = msg
	}

	greet(){//原型方法,如果有参数也需要注解
		return "Hello," + this.catcall
	}
}

let abckkk = new Animal("啦啦啦啦")
console.log(abckkk.greet())




//继承类的注解 —— 子类
class Dog extends Animal {
	bark() {
		console.log('唧唧唧')
	}
}

let newDog = new Dog("bark")
newDog.bark()
console.log(newDog.greet())





//🌟例子2 —————————————————————
//父类 != 基类！
class Animal2 {
	name: string

	constructor(theName: string) {
		this.name = theName //= 传入的参数
	}

	move(distance: number = 0){
		console.log(`${this.name} 可以移动 ${distance}米`)
		console.log(this.name+'11')
	}

	say(){
		console.log(this.name+'22')
	}
}



//派生类中的 super
class Cat extends Animal2 {
	//🔥 super 等于父类!!
	constructor(name: string){
		super(name) //🔥🔥🔥相当于把父类构造函数的 this.name = theName 继承给子类
	}

	move(distance = 5){
		super.move(distance) //🔥🔥🔥相当于把父类构造函数的 move() 原型方法继承给子类
	}

	say(){
		super.say() //🔥🔥🔥同上
	}
}


//实例化派生类
let abcdef: Animal2 = new Cat('猫咪1')
console.log(abcdef)


let ghijk = new Cat('猫咪2')
ghijk.move(10)


let ghijk2 = new Cat('猫咪3')
ghijk.say()





//⚡️十八、类的修饰符（通过修饰符的方式实现类的封装）————————————————————————————————————————————
/*🔥修饰符 
		能否访问
	 		公共:  public   	自身可调用  子类可调用  实例可调用
	 		保护:  protected  自身可调用  子类可调用  实例不可调用
			私有:  private    自身可调用  子类不可调用  实例不可调用

		能否修改
	 		只读: readonly   只读属性, 放在 publish 后方, 只能出现在【属性】当中（修饰属性）, 不能出现在【方法】当中（修饰方法）

		参数属性（简化的写法）
			constructor(private name: string)
*/
class Animal3 {
	public readonly name:string
	
	public constructor(name: string){ //方法
		this.name = name
	}
	protected move(distance: number) { //让子类可调用
		console.log(distance)
	}
}


class skasakl extends Animal3 {
	constructor(name: string){
		super(name)
	}
	
	move(distance = 20){
		super.move(distance) //子类可调用
	}
}

let jake = new Animal3('jake')
// jake.move(10) //实例不可调用




//私有属性, 这种写法等于下面👇的写法(当参数一致的情况, 比如name 一致, 就可以简写为下面的方式)
class Animal5 {
	constructor(private name: string){ //私有的构造函数, 以及私有的参数属性
		console.log(this.name)
	}
}

//私有属性, 这种写法等于上面👆的写法
class Animal6 {
	private name:string
	constructor(name: string){
		this.name = name
	}
}





//⚡️十九、对象存取器(🔥🔥get、set)————————————————————————————————————————————
/*
	场景: 
			检查用户密码是否正确再允许其修改信息
		
	🔥🔥两个组合方法，get 和 set:
			当实例通过 .fullName 调用时，会自动调用 get 和 set 方法

			get:
				取值函数
			set:
				存值函数
*/

let passCode = "secret passCode" //密码

class Employee {
	private _fullName: string = "John"

	constructor(_fullName: string) {
		this._fullName = _fullName
	}

	//🔥🔥两个组合方法，get 和 set, 当实例通过 .fullName 调用时，会自动调用 get 和 set 方法
	get fullName(): string {
		return this._fullName
	}

	set fullName(newName: string) {
		if(passCode && passCode === "secret passCode"){
			this._fullName = newName
		} else {
			console.log('error')
		}
	}
}


let abddee = new Employee("Jimmy")
console.log(abddee.fullName)  //🔥🔥🔥实际上是调用了 class 内的 get 方法
abddee.fullName = "Kim"  //🔥🔥🔥实际上是调用了 class 内的 set 方法






//⚡️二十、静态属性 ———————————————————————————————————————————————————————————————
class Grid {
	static origin = {x: 0, y: 0} //🔥🔥🔥静态属性,是在【类】身上, 或者说是在【构造函数】身上，而不是在【实例】身上

	calculate(point: {x:number, y:number}){
		let xDist = (point.x - Grid.origin.x) //🔥🔥通【类】上来调用 origin 静态属性, 如果是在【实例】身上的话就得用 this 来调用！！
		let yDist = (point.y - Grid.origin.y)
		return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale
	}
	constructor(public scale: number){}
}

let grid1 = new Grid(1.0) //1x scale

console.log(grid1.calculate({x:10, y:10}))






//⚡️二十一、抽象类(基类), 本质上是个特殊的类, 抽象出父类的【公共方法】————————————————————————————————————————————
/* 
	🔥抽象类无法实例化！
	🔥抽象类一定要有实现(继承抽象类的子类需要实现的方法，比如【叫法】）！！
	🔥抽象类可以【规定形状】, 比如会规定【🔥只能有】 name 、pringName()方法、 pringMeeting()方法！！【🔥抽象类中没有的方法都不能自己定义！！】
	🔥不能读取抽象类的【公共方法】！
*/
abstract class Animal7 {
	abstract makeSound():void  //🔥🔥抽象的【公共方法】比如都会叫, 但【叫法】不一样
}


class Dog2 extends Animal7 {
	makeSound(): void {   //🔥🔥 在子类上实现独特的【叫法】！！
		console.log("WangWang")
	}
}


new Dog2().makeSound()





//另一个抽象类的案例 ——————
abstract class Department {
	constructor(public name:string){} //可以类比为类的 ()
	printName(){
		console.log(this.name) //name = 传入的参数
	}
	abstract printMeeting():void //抽象的【公共方法】
}


//子类继承抽象类
class DesignDep extends Department {
	constructor(){
		super('design') //🔥相当于传入 name
	}
	printMeeting(): void {
		console.log(this.name) //= design
	}
}

new DesignDep().printMeeting()


let lalala: Department //🔥🔥🔥用抽象类来【规定形状】, 比如会规定【🔥只能有】 name 、printName()方法、 printMeeting()方法！！【🔥抽象类中没有的方法都不能自己定义！！】








//⚡️二十二、高级技巧 —————————————————————————————————————————————————————
/*
	定义类的同时也是定义了一种类型
		比如 class ABC{...}
		let kk: ABC
 */
class ABC {
	static stand = 'hello'
	constructor(greeting: string){}
	greet(){console.log('greettt')}
}


//用类一个本身来定义类型, 写法一:
let KKK : ABC		//🔥🔥定义了 KKK 的类型
KKK = new ABC('haha')  //实例化 KKK
// console.log(KKK)


//用类本来来定义类型, 写法二
const greet002 : ABC = new ABC('best')
greet002.greet()


//用类的静态方法来定义函数类型:
let LLL : typeof ABC = ABC   //定义了 LLL 的函数类型
LLL.stand = "well" //能够直接访问 ABC 类上的 stand 静态方法！！
// console.log(LLL.stand + "llllll");






//⚡️二十三、interface 接口, 接口可以被【函数】、【索引数组】、【类】所继承，接口也可以去继承【类】————————————————————————————————————————————
/*
	🌟🌟接口跟类都可以描述对象，差异点是：
		用类来描述： 可以获得父类的方法，且不需要需要去实现它
		用接口来描述：需要去描述它

	🌟🌟interface 接口属性 （不可夺，不可少，除非👇自定义）
		可选属性   age? : number
		任意属性   [propName: string] : any
		只读属性   readonly

	🌟🌟interface 接口类型(接口描述对象)
		1.函数类接口
			interface SearchFunc {
				(source: string, subString: string) : boolean
			}

		2.可索引(数组)类型接口
			interface ReadNum {
				readonly [index: number] : number
			}

		3.(类)的类型接口
			🔥接口不完全可以描述【类】, 只能对【类】的一部分行为进行抽象
			因为类还有【构造器】跟【静态方法（constructor）】、【静态属性】, 这两个东西不能用接口来描述
			interface ClockInterface {
				currentTime: Date  
			}

		4.混合类型的接口(指函数类型的混合 interface)
			interface Counter2 {
				(start: number): string //函数类接口
				interval: number  //属性接口 
				reset(): void  //方法接口
			}

				
*/ 


//🔥🔥用【接口】去继承【类】后, 【接口】也会带有类上的必填项！！！！！！！！！
class Point {
	x: number
	y: number
	constructor(x: number, y: number){
		this.x = x
		this.y = y
	}
}

interface Point3d extends Point {
	z: number
}

let drawObj1: Point3d = {x:1, y:2, z:3}

console.log(drawObj1.x) //1
console.log(drawObj1.y) //2
console.log(drawObj1.z) //3



//🔥自定义接口属性（接口可以描述对象，函数跟数组都是对象，所以接口可以描述函数跟数组）
interface Person2 {
	name : string   			//必填属性
	readonly weight : number  //只读, 必填
	age? : number 		 //可选属性 (可以少)
	[propName: string] : any  //任意属性 （可以多）
}


let myObj007 = {name:"Jimmy", weight:120 }


function printLabel(obj1: Person2):void {//用接口来定义【参数】的类型⚠️
	console.log(obj1.name, obj1.weight)
}

printLabel(myObj007)//传入参数




//用范型方式来定义数组
let add: ReadonlyArray<number> = [1,3,6]
// add[0] = 12 //会报错，因为是只读的数组



//🍎用【接口】的方式来描述【函数的类型】, 【🚀🚀🚀】这种该方法最常见⚠️
interface SearchFunc {
	(source: string, subString: string) : boolean
}

let mySearch: SearchFunc = function (source: string, subString: string) {
	let result = source.search(subString)
	return result > -1
}


//👇以前的方式，函数直接就实现了，没法定义函数类型
// function mySearch(source: string, subString: string): boolean {
// 	let result = source.search(subString)
// 	return result > -1
// }


//👇以前的方式，函数直接就实现了，没法定义函数类型
// let mySearch: (source: string, subString: string) => boolean = function(source, subString) {
// 	let result = source.search(subString)
// 	return result > -1
// }




//⚡️二十四、索引类型的接口（数组）—————————————————————————————————————————————————
/*
	🌟🌟接口可以描述对象，函数跟数组都是对象，所以接口可以描述函数跟数组

	🌟🌟索引签名（可以类比领导的意思，领导说数据类型都是啥就是啥）
		[propName: string] : string | number
*/
interface NumberArray22 {
	[index: number]: number 
}

//描述对象
let obj999: NumberArray = {
	0: 1,
	1: 2,
	2: 3
}

//描述数组
let arr888: NumberArray = [1,2,3,4]


//⚠️ 注意，用【类】来描述【接口参数】时, 子类别需要 > 父类别 
class Animal999 {
	name: string
	constructor(name: string = 'Bubble'){
		this.name = name
	}
}

class Dog999 extends Animal999 {
	constructor(public age : number = 12){ //🔥🔥🔥🔥age 为子类新定义的属性
		super()
	}
}
// console.log(new Dog999(22))

interface Earth {
	[x: string]: Animal999 // 不会报错，因为父类有 string
	[y: number]: Dog999 //number 就不会报错了, 因为子类别 > 父类别 （number 会先被转为 string 再去索引）
}



//⚠️ 注意【索引签名】的类型冲突
interface NunberDic {
	[index: string] : number //🔥🔥🔥🔥🔥这个是最大权重，相当于规定了里边所有数组的数据类型！！
	length: number
	// name: string //⚠️s报错，因为上面的索引值是  :number
}

interface NumberDic {
	[propName: string] : string | number //🔥🔥🔥🔥🔥这个是最大权重，相当于规定了里边所有数组的数据类型！！
	readonly name: string  //同样的也可以添加只读属性！！
	age: number //🔥🔥🔥因为上面定义了【联合类型】，可以是 number 才不会报错！！
}



//🔥🔥可索引类型接口，索引签名也可以不定义参数，索引签名可以设置为只读模式
interface ReadNum {
	readonly [index: number] : number
}

let myArray66:ReadNum = [1,2,3]

// myArray66[0] = 12 //会报错，因为上面只读




//⚡️二十五、类的类型（用接口来描述类的一部分内容）————————————————————————————————————————————
/*
	🔥接口不完全可以描述【类】, 只能对【类】的一部分行为进行抽象
		因为类还有【构造器】跟【静态方法（constructor）】、【静态属性】, 这两个东西不能用接口来描述
	🔥接口来描述跟类来描述的区别
		用类来描述： 可以获得父类的方法，且不需要需要去实现它
		用接口来描述：需要去描述它
*/


//🍎例子：接口用来抽象描述 class 上的【实例属性】
interface ClockInterface {
	currentTime: Date  
}

class Clock implements ClockInterface { //🔥🔥🔥表示继承自【接口】, 并且【实现接口】
	currentTime: Date;
	constructor(h:number, m:number, currentTime: object) { 
		this.currentTime = new Date()
	}
}




//🍎例子：接口用来描述 class 上的【实例方法】, 比如抽象出【Alarm 报警】这个方法, 但是不实现, 让继承它的类来实现
interface Alarm {
	alert(): void 
}

interface Light {
	color: string
	lightOn(): void
	lightOff(): void
}

class Door {}

class SecurityDoor extends Door implements Alarm{ //🔥🔥🔥表示继承自 【Door 类】, 并且【实现接口】
	alert(): void {
		console.log("这是一个安全门")
	}
}

class Car implements Alarm, Light { //🔥🔥🔥表示同时继承自【Alarm 接口】和【Light 接口】, 并且同时【实现接口】
	alert(): void {
		console.log("这是一个安全车")
	}

	color = 'red'

	lightOn(): void {
		console.log("这是一个开灯方法")
	}

	lightOff(): void {
		console.log("这是一个关灯方法")
	}
}









//【静态类】跟【实例类】的区别
/*🍎在【接口】中如何定义类的【构造函数】? 需要分别修饰【静态】跟【实例】！🚀🚀🚀
	需要额外写一个函数来描述【接口】跟【类】的关系！
		用一个函数来判断 【Clock2 类】是否符合 【ClockConstructor 接口】所描述的类型
		核心是下面两句话：
			🌟🌟🌟 因为【接口】只能单独描述【实例属性】!! 然后还要抽象一个【接口】去描述【静态属性（构造函数+静态方法）】
			👉👉核心逻辑：先通过类实现【描述实例属性】的接口, 再通过函数去实现【描述静态属性】的接口！！！！
*/

//🔥🔥🔥修饰类的【实例】部分
interface clockDate { 
	currentTime : Date
	getTime(h:number, m:number): any
}

//🔥🔥🔥修饰类的【静态】部分
interface ClockConstructor {  
	new(h: number, m: number): any //描述 class Clock22 的 constructor)的构造函数，所以要加个 new！
}

//👉👉核心逻辑：先通过类实现【描述实例属性】的接口, 再通过函数去实现【描述静态属性】的接口！！！！
//class 是用来实例化的, 所以用【实例接口】去修饰它
class Clock2 implements clockDate { //继承【修饰实例】的接口
	constructor(h: number, m: number){} //静态
	currentTime = new Date    //实例
	getTime(){}  //实例
}

//用函数来规定【描述静态属性】的接口！！！！！！去规定构造函数跟静态方法！！
function createClock(Cl: ClockConstructor, h: number, m: number){//🔥🔥表示用上面的【接口内所定义的构造函数】来描述【类中所定义的构造函数】
	return new Cl(h, m)
}

createClock(Clock2, 10, 12) //传入实际的对象来检查是否符合【接口】所描述的类型







//⚡️二十六、用接口来继承接口（相当于进一步的约束类型）————————————————————————————————————————————
//🔥🔥用变量来继承接口时候，一般用类型断言！！

//🔥🔥类型断言场景一：先定义一个形状对象，断言为 Square，然后再给它赋值
/*类型断言的语法:
	值 as 类型
	<类型> 值
*/


interface Shape {
	color: string
}

interface Square extends Shape {
	sideLength: number
}

/*
	场景相当于可以先定义一个对象, 用接口约束类型, 再传入初始值
	⚠️不能使用👇这种方式来定义对象, 因为这样的话在定义的时候就【需要传入参数】来【定义参数的类型】, 这样就【失去了】用【接口来定义类型】的意义了
	类型断言可以在初始化定义对象的时候使用
	let squareABCD3: Square
	squareABCD3.color = 'red'	
*/

let squareABC = <Square>{} //🔥🔥🔥🔥🔥类型断言, 写法一，这种写法在 JSX 中用不了，所以一般用下面那种
let squareABC2 = {} as Shape //🔥🔥🔥🔥🔥类型断言, 写法二 （👍推荐写法）

squareABC.color = "bule"
squareABC.sideLength = 200





//🔥🔥类型断言场景二：在方法内判断某个【变量】就是符合【接口】的类型，然后就可以直接使用【接口】的【属性】或【方法】
//from https://blog.csdn.net/qq_29689343/article/details/119546415?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-119546415-blog-120174066.pc_relevant_aa_2&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-119546415-blog-120174066.pc_relevant_aa_2&utm_relevant_index=1
interface Cat008 {
	name: string
	run():void
}

interface Fish {
	name: string
	swim():void
}

function isFish( animal: Cat008 | Fish ) {
	//🔥🔥typeof 表示判断【Fish】里边的 swim 是个【方法】, 因为 typeof 取的是【键】！！
	if( typeof (animal as Fish).swim === 'function'){ //🔥🔥断言此对象一定是 Fish 类型
		return true
	}
	return false
}








//一个接口可以同时继承两个接口
//接口继承接口, 类是实现接口或作为接口的类型定义
interface Shape2 {
	color: string
}

interface PenStroke {
	penWidth: number
}

interface Square3 extends Shape2, PenStroke {
	sideLength: number
}


let square666 = {} as Square3 
square666.color = 'blue'
square666.penWidth = 10
square666.sideLength = 5.0






//⚡️二十七、混合类型的接口(指函数类型的 interface)
interface Counter2 {
	(start: number): string //函数类接口
	interval: number  //属性接口 
	reset(): void  //方法接口
}

function getCounter(): Counter2 {
	let counter = <Counter2>function(start: number) {}
	counter.interval = 123
	counter.reset = function() {}
	return counter
}

let cc = getCounter()
cc(10)
cc.reset()
cc.interval = 321







//混合类型的应用场景？比如给【类】添加静态属性, 需要分别修饰【静态】跟【实例】！🚀🚀🚀🚀
/*
	在【接口】定义类的【构造函数】
	在【混合接口】中定义类的【静态属性】
	核心是下面两句话：
		🌟🌟🌟 因为【接口】只能单独描述【实例属性】!! 然后还要抽象一个【接口】去描述【静态属性（构造函数+静态方法）】
		👉👉核心逻辑：先通过类实现【描述实例属性】的接口, 在通过函数去实现【描述静态属性】的接口！！！！
*/

//🔥🔥🔥修饰类的【实例】部分
interface clockDate22 {  
	currentTime : Date  //描述实例属性
	getTime(h:number, m:number): any //描述函数
}


//🔥🔥🔥混合类型，用来修饰【静态】部分
interface ClockConstructor22 {   		 //🔥🔥🔥修饰类的【静态】部分
	new(h: number, m: number): any //🔥描述 class Clock22 的 constructor)的构造函数，所以要加个 new！
	getData(): void 		//🔥🔥🔥相当于检查 static 静态方法
}


//👉👉核心逻辑：先通过类实现【描述实例属性】的接口, 再通过函数去实现【描述静态属性】的接口！！！！
//class 是用来实例化的, 所以用【实例接口】去修饰它
class Clock22 implements clockDate22 {  //继承【修饰实例】的接口
	static getData(){} 	 //静态部分
	constructor(h: number = 1, m: number = 2){} //静态部分
	currentTime = new Date //实例部分
	getTime(){}  		//实例部分
}

//用函数来规定【描述静态属性】的接口！！！！！！去规定构造函数跟静态方法！！
function createClock22(Cl: ClockConstructor22, h: number, m: number){//🔥🔥表示用上面的【接口内所定义的构造函数】来描述【类中所定义的构造函数】
	return new Cl(h, m)
}

createClock22(Clock22, 10, 12) //传入实际的对象来检查是否符合【接口】所描述的类型




//⚡️二十八、用【接口】去继承【类】————————————————————————————————————————————
/*	
	类可以【实现】接口
	接口可以【继承】接口
	接口可以【继承】类（类本身也是一个特殊的接口）
*/ 
class Control {
	private state: any //私有属性的情况
}

//接口继承类(继承类后,)
interface SelectableControl extends Control {
	select(): void
}

//继承类 + 实现接口
class Button extends Control implements SelectableControl {
	select() {
		console.log('select')
	}
}

class img1 extends Control {}//继承一个有私有属性的父类

//不能实现 state, 因为它是私有的, 因此 img 2 不能实现【 Control 接口】
// class img2 implements SelectableControl {
// 	select() {}
// }




//🌞其他例子, 定义一个类相当于也是定义了一个接口

//继承方法一：接口去继承类（写法效用同下）
class Point2 {
	x: number
	y: number
	constructor(x: number, y: number){
		this.x = x
		this.y = y
	}
}

interface Point3D extends Point2 {//接口继承类, 增加额外属性
	z: number
}



//继承方法二：接口继承接口（写法效用同上）
interface PointInterface {
	x: number
	y: number
}

interface Point3D2 extends PointInterface { //接口继承接口, 增加额外属性
	z: number
}




let ABCDD: Point3D2 = {
	x: 1,
	y: 2,
	z: 3
}







//⚡️二十九、范型（动态类型，解决类型不确定的场景）, 可以用来增强函数跟接口的灵活性 ————————————————————————————————————————————
/*
	范型
		范型变量
		范型类型 

*/


//——————————————————


//范型 & 数组
/*
	Array 范型的底层接口, 用索引签名规定了数组的类型是传入的 T 参数
	interface Array<T> {
		[n: number]: T
	}
*/
//👇一般定义数组的方式
let ab:number[] = [1,2,3]

//👇用范型定义数组的方式(能力上跟一般的定义方法没差别)
let ac:Array<number> = [1,2,3]



//——————————————————



//范型 & 函数的使用场景
/*
	🌟场景一: 希望根据传入参数的【类型】来返回不同的内容（传入的参数不确定,返回的也不确定）
			本质是一个【🔥类型的变量】, 用来判断函数返回的类型 
*/
//👇一般的写法(也可以用函数重载的写法), 但都比较冗余
function indentity(arg: number): number {
	return arg
}

function indentity2(arg: string): string {
return arg
}


//👇用范型的写法, T 是一种特殊的变量（范型变量或类型变量）, 这里 T 的类型是根据传入的参数所【推论】出来的
function indentity3<T>(arg: T): T {
	return arg
}

console.log(indentity3('well'))



//——————————————————



/*🌟场景二: 希望打印出【参数】的length, 因为传入的类型不确定, 所以用范型的写法
				参数是个【范型数组】, 返回的对象是数组, 所以就一定有 length 属性, 只不过数组的成员不确定
*/
//👇范型函数的一般写法
function indentity10<T>(arg: Array<T>): Array<T> {
	console.log(arg.length)
	return arg
}



//——————————————————



//范型 & 函数的更多写法
/*
	🌟范型函数写法汇总(核心为三种方式)
		1.函数范型的注解方式: 
			let a: <X>(arg: X) => X = function(arg){}
			function<T>(arg: T) : T {}

		2.对象字面量的注解方式: 
			不抽离出函数
				let a :{<T>(arg: T) => T } = function(arg){}
			抽离出函数
				function abc<T>(argu: T) : T {}
				let a :{<T>(arg: T) => T } = abc

		3.范型接口的注解方式:
			不自定义范型(不抽离出函数)
				interface Inden {
					<T>(arg: T) : T
				}
				let a : Inden = function(arg){}
			自定义范型(不抽离出函数)
				interface Inden<T>{
					(arg: T) : T
				}
				let a : Inden<number> = function(arg){}
*/ 
//👇一般的函数注解,【函数表达式】的方式
let indentity4: (arg: number) => number = function(arg){
	return arg
}


//👇范型注解函数写法一：用【🔥函数表达式】的方式定义范型函数, 范型的变量可以随便写, 变量不一定是 T, 也可以是 X
let indentity5: <X>(arg: X) => X = function(arg){
	return arg
}


//👇范型注解函数写法二：用【🔥对象字面量】的方式定义范型函数, 因为函数也是对象, T 就是范型对象的字面量
let indentity6: {<T>(arg: T) : T} = function(arg){
	return arg
}




//——————————————————




//范型 & 函数接口

//👇用【🔥范型接口】的方式来定义【函数表达式】的类型
//🌟方式一：不改变范型的类型
interface IndetiterFace {
	<T>(arg : T) : T  
}

let indentity7: IndetiterFace = function(arg) {
	return arg
}




//🌟方式二：自定义范型的类型的写法, 比如下面的<string>
interface IndetiterFace2<T> {
	(arg : T) : T  //这样结合上面的 <T> 就能自定义范型为 <string> 等
}

//👆上面的【函数表达式】可以传入【🔥🔥🔥范型的参数】来规定类型！！
let indentity8: IndetiterFace2<string> = function(arg){
	return arg
}




//🌟方式三：【🔥抽离出函数】的自定义范型的写法
interface IndetiterFace2<T> {
	(arg : T) : T  //这样结合上面的 <T> 就能自定义范型为 <string> 等
}

function inden<U>(arg : U): U {
	return arg
}

//👆上面的【函数表达式】可以传入【🔥🔥🔥自定义范型的参数】来规定类型！！
let indentity9: IndetiterFace2<string> = inden




//——————————————————



//范型 & 范型类(🔥🔥只能定义实例部分, 不能定义静态部分, 🔥 static 跟 constructor 都是静态部分！！) 
//例子一：
class GenericNumber<T> {
	zeroValu!: T    
	add!: (x: T, y: T) => T //🔥🔥用了非空断言！尽量少用,只是不想写 constructor, 想先定义类再定义类的方法

}

let myNum = new GenericNumber<number>()
myNum.zeroValu = 100
myNum.add = (x: number, y: number) => {
	return x + y
}




//例子二：
class MinClass<T> {
	public list: T[] = []  //🔥类实例原形属性定义为范型数组

	//添加元素的方法	
	add(num: T) {   //🔥类实例原型方法定义为范型函数
		this.list.push(num)
	}

	//判断最小值的方法
	min(): T {		//🔥类实例原型方法定义为范型函数
		let minNum = this.list[0]

		for(let i = 0; i < this.list.length; i++) {//循环所有 i 个数组
			if(minNum > this.list[i]) {
				minNum = this.list[i]  //如果 minNum 大于当前的值, 就把当前的值赋值给 minNum, 全部比对完后就会越变越小
			}
		}
		return minNum
	}
}



//——————————————————



//⚡️三十、范型约束 & 在范型内使用类型参数(保证范型身上有某些属性) ————————————————————————————————————————————

//范型约束 
//场景：要取得 length 值
//👇过往的做法, 要取得 length 属性, 需要先把范型变成数组 T[] 类型, 然后再取 length 属性
function logInden<T>(arg: T[]) : T[]{
	console.log(arg.length)
	return arg
}


//场景：要取得 length 值
//👇方法一: 用【继承接口】的方式来做范型约束🔥
interface LengthWise {
	length: number
}

function logInde2<T extends LengthWise>(arg: T) : T { //相当于用接口来约束范型
	console.log(arg.length)
	return arg
}



//场景：要取得 length 值
//👇方法二: 用【类型参数】来组在范型的约束🔥
type LengthWise2 = string //🔥定义一个类型别名（本质就是定义一个 XX 类型的变量）

function logInde3<T extends LengthWise2>(arg: T) : T {
	return arg
}



//场景：要取得 length 值
//👇方法三: 用【继承接口】+ 【类型参数】的方式来做范型约束🔥
interface LengthWise3{
	length: number
	a: string
}

type LengthWise4 = string | LengthWise3 //相当于是一个联合类型

function logInde4<T extends LengthWise4>(arg: T) : T {
	return arg
}






//在范型内使用类型参数（🔥字符串联合类型）(🧠难度大)
//keyof 能获得一组由【键】组成的的联合类型, 比如这里的 KK2 就是【字符串的联合类型】, 包含 a、b、c、d
type KK2 = keyof {a:1, b:2, c:3, d:4}  


//例子一:
interface PersonA {
	name: string
	age: number
	sex: string
}

//🔥🔥K1、K2、K3 最终拿到的都是一组 "键名", 根据 keyof 后面的这个对象所决定
type K1 = keyof PersonA 		//🔥K1 的值为 "name" ｜ "age" ｜ "sex" 三个‘键’的其中一个
type K2 = keyof PersonA[] 		//🔥K2 的值为 number 类型的键名【🔥因为PersonA[]是个数组, 在 ts 内数组的【索引签名】是 [n: number]: T】,比如 length、push、contact、splic 等
type K3 = keyof {[x: string] : PersonA} 	//🔥K3 的值为 [] 这个对象的【键名】, 就是 x, 而 x 又是 string 类型, [] 数组的【索引签名】又是 number 类型, 所以 K3 的类型即是 string 又是 number



//例子二: 
function getProperty<T, K extends keyof T>(obj: T, key: K) { //🔥 K 是 keyof T 的子类型, 也就是说 K 的值只能是 T 的键名之一,不是则会报错
	return obj[key] //T[K]
}

let xx = {a:1, b:2, c:3, d:4}  //👇下面就把 xx 这个对象传入 getProperty 函数, 🔥由于 xx 是个对象, 所以 T 的值就是 xx, K 的值就是 xx 的键名之一
console.log(getProperty(xx, 'b'))
// console.log(getProperty(xx, 'z')) //🔥这个就会报错, 因为 z 不是 xx 的键名之一





//⚡️三十一、多重范型约束 & 交叉类型 ————————————————————————————————————————————
//& 表示【🔥交叉类型】, 同时具备两种类型的特性！


//🌟🌟案例一: 把两个对象上的【属性值】都拷贝到一个【新的对象上】
function extendsFn<TT, UU>(first:TT, second:UU): TT & UU { //结果是【交叉类型】,也就是做了多重的范型约束
	//👇类型断言的两个写法
	// let result = {} as <TT & UU> //写法一
	let res = <any>{} //写法二

	for(let id in first) {//🔥key 是 id, 【value 值】 是 first[id]
		//🔥对象上的属性是 any 类型, 
		(<any> res)[id] = (<any> first)[id] //将第一个 【first 对象】上的【所有属性】都【赋值给 res】
	}
	for(let id in second) {
		if(!res.hasOwnProperty(id)){  //🔥判断 second 对象上的值是否存在于 res 身上
			(<any> res)[id] = (<any> second)[id]
		}
	}
	return res;
}




class PersonAB {
	constructor(public name: string){}
}

interface Loggable {
	log(): void //定义类型
}

class ConsoleLogger implements Loggable { //类去实现接口, 接口是抽象的
	log() {
		console.log("登录成功")
	}
}

let jim = extendsFn(new PersonAB("jim"), new ConsoleLogger())
let nnn = jim.name
// jim.log()








//🌟🌟案例二: 利用【多重范型约束】来【🔥整合不同接口下】的【内容】
interface Sentence {
	content: string
	title: string
}

interface Music {
	url: string
}

class QQMusic <T extends Sentence & Music> {
	props: T
	constructor(public arg: T) {
		this.props = arg //props 等于 arg, arg 符合 T 交叉范型, 这个交叉范型的接口有 url , 所以下面可以获得 url!!
	}

	info() {
		return {
			url: this.props.url,
			content: this.props.content,
			title: this.props.title
		}
	}
}

const content = {
	url: 'http://www.abc.com',
	content: 'a long text',
	title: 'Well'
}

console.log(new QQMusic(content).info())


// class Point2 {
// 	x: number
// 	y: number
// 	constructor(x: number, y: number){
// 		this.x = x
// 		this.y = y
// 	}
// }



//⚡️三十二、 用【类】来约束范型 ————————————————————————————————————————————
/*
	👇表示参数 c 的类型是 { new():T }  也就是一个【🔥对象类型】
		这个对象有 new(), 所以是个【构造方法】
			所以这个对象的【范型】 :T 是【实例之后】的【对象】的【类型】, 
				所以要通过 new() 来【实例化】这个对象, 来符合 { new():T } 的类型

*/
//🔥例子一
function create<T>( c:{ new():T; } ): T {
	return new c()
}





//🔥例子二，写法一，constructor：
// class Beekeeper {
// 	constructor(hasMask: boolean = false){  //🔥🔥【父类】有传入默认参数时候, 【子类】继承它就不用在 super() 内传入默认参数了！
// 		hasMask
// 	}
// }

// class Zookeeper {
// 	constructor(nameTag: string = 'Jimmy'){  //🔥🔥【父类】有传入默认参数时候, 【子类】继承它就不用在 super() 内传入默认参数了！
// 		nameTag
// 	}
// }

// class Animal000 {
// 	constructor(numLeg: number = 100){ //🔥🔥【父类】有传入默认参数时候, 【子类】继承它就不用在 super() 内传入默认参数了！
// 		numLeg //多少条腿
// 	}
// }


// class Bee extends Animal000 {
// 	constructor(keeper: Beekeeper){
// 		super() //Animal 类的 super
// 	}
// }

// class Lion extends Animal000 {
// 	constructor(keeper: Zookeeper){
// 		super() //Animal 类的 super
// 	}
// }

// //类型约束, 约束 T 一定是 Animal000, c 会返回一个实例对象, 根据这个实例对象的类型来确定 T 的类型
// function createInstance<T extends Animal000>(c: new() => T ) : T {
// 	return new c()
// }

// createInstance(Lion)


//🔥例子二，写法二，写死数据：
class BeeKeeper {
    hasMask: boolean = true;
}

class ZooKeeper {
    nametag: string = 'Boss';
}

class Animal22 {
    numLegs: number = 12;
}

//下面两个是要分别实例化然后传入函数的类
class Bee extends Animal22 {
    keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal22 {
    keeper: ZooKeeper = new ZooKeeper();
}

/*
	类型约束, 约束 T 一定是 Animal000 动物
		然后 cc 会返回一个实例对象, 根据这个实例对象的类型来确定 T 的类型, 【cc 的类型由它的实例所决定】比如 Keeper 是谁
*/
function createInstance<T extends Animal22>(cc: new () => T) : T {
    return new cc();
}

console.log(createInstance(Lion).keeper.nametag)
console.log(createInstance(Bee).keeper.hasMask)





//⚡️三十三、元组：表示一组【已知数量】跟【类型】的数组 ————————————————————————————————————————————
let x : [string, number] //确定了【类型】的【顺序】

//👇赋值
x = ['hello', 10]
x.push('world')
x.push(299)
//push 进去的数组是 => ['hello', 10, 'world', 299]
// x= [10,'world'] //报错，因为类型不对
// x.push(false) //不能 push 非 string, number 类型的值


//👇取值
console.log(x)
console.log(x[0].substring(2)) //🔥substring(2) 表示从第二个开始截取


// let list1:number[] = [1,2,3] 数组的写法
// let y : [boolean, number] 元组的写法

//👇可选的元素
const list : [number, string, boolean?] = [1, '2'] //🔥const 定义元组需要定义初始值，let 定义则不用， ? 【问号】表示元素可选填入初始值
//const 需要定义初始值！


//🌟元组的应用场景:


//在函数中：
//👇元组结合【拓展运算符】的写法:
declare function test09(arg1: number, arg2: string, arg3: boolean): void 

//👇原始的写法: 
declare function test08(...args:[ number, string, boolean]): void  //用 declare 定义一个函数的类型（全局变量，声明文件，不实用现此函数）



//在数组中(可以不限制长度)：
//👇元组结合【拓展运算符】的写法:
let list998 : [boolean, ...number[]] = [true, 1,2,3]
let list888 : [number, ...string[]] = [12, 'well', 'done' ]




//⚡️三十四、通过声明文件引入 jQuery 包 ————————————————————————————————————————————

//引入全局 jQuery 包
//👇在 <script> 内引用好 jQuery 路径后, 🔥还需要在此处定义一个全局类型的【jQuery 变量】，这样就可以在任何地方使用 jQuery 了
//👇另一种写法是写在 src -> types 文件夹下的 index.d.ts 文件中（记得前提是已经在 tsconfig.json 中配置 "include": ["src/**/*"]）
// declare let jQuery: (param: string) => void
console.log(jQuery('#box'))


//引用全局定义好的变量
// window.kooo = false;
// console.log(kooo)



//引用全局定义好的函数
function greet(greeting: string) {
	console.log(greeting);
}
greet('字符串')


//myLib 
console.log(window.myLib)



//函数重载
// let XXX: boolean = getWidget(288)
// let YYY: number[] = getWidget('Haha')


//使用所声明的接口
let GreetingSetting01: GreetingSettings = {
	greeting : "hello",
	duration : 456,
	color: 'blue'
}


//使用所声明的【类型别名】
let whoName: ABCGreeting = 'Tom'
console.log(whoName)




//⚡️三十五、声明文件的规范 ————————————————————————————————————————————
//Boolean、Number String 等大写的方式系统内置的类型，我们要定义应该用小写
let abbkk : boolean

//没有返回值应该写为 void，而不是 any，比如回调函数没有返回值
function fn288(x:() => void){
	x()
}


//【函数】的【参数】是函数，那么这就是一个【回调函数】
declare function wellOK(x: () => void, timeout ? : number) : void 
declare function beforeAll(action: () => void) : void




//⚡️三十六、枚举 ————————————————————————————————————————————
/*
	是什么？
		枚举是一组【带有名字】的【🌟常量】对象, 通常这几个数据之间是有关联的
		跟类比较相似，不仅定义【类型】，还定义了具体的【值】
		🔥【枚举类型】可以作为【class 类型】
	
	有什么枚举类型？
		【数字枚举】,值会自动累加具有【连续性】，可以手动传入初始值
		【类型枚举】
		【计算枚举】,值为函数的返回值或一个表达式
		【异构枚举】,混合【字符串】和【数字】的枚举结构，注意排序问题
		【字符串枚举】, 含字符串成员的枚举不能使用【计算的枚举值】
		【接口类型枚举】

*/ 
//🌟有定义初始值的枚举数据
enum Direction {
	Up = 1,
	Down = 2,
	Left = 3,
	Right =4
}
console.log(Direction.Up) //1




//🌟没有定义初始值的枚举数据, 默认从 0 开始自增长
enum Direction1 {
	Up,
	Down,
	Left,
	Right
}
console.log(Direction1) //0,1,2,3


//过往的做法并没法保证枚举的值是唯一的，因为可以再去改变值
const Direction2 = {
	Up: 1,
	Down: 2,
	left: 3,
	Right: 4
}
console.log(Direction2.Up) //1





//🌟类型枚举
enum Response2 {
	No = 0,
	Yes = 1,
}

function respond(recipient: string, message: Response2) :void {
	//...
}
respond("aha",Response2.Yes)




//🌟计算枚举
function getSomeValue() :number {
	return 200
}

enum G {
	A, //不带初始化参数的枚举值需要放在【计算枚举值】的前面！
	B = getSomeValue(),//函数返回值
}
console.log(G);




//🌟混合枚举
enum E {
	A, //排序 0 
	B = getSomeValue(),//排序 4
	C = 3 * 2, //排序 3
	D = 'abcd'.length ///排序 2
}
console.log(E);




//🌟字符串枚举, 含字符串成员的枚举不能使用【计算的枚举值】
enum Z {
	Up = 'UP',
	Down = 'DOWN',
	Left = 'LEFT',
	Right = 'RIGHT',
	// Top = getSomeValue()//🌟会报错
}
console.log(Z.Up, Z.Down, Z.Left, Z.Right) //UP DOWN LEFT RIGHT);




//🌟计算值与常量枚举
enum FileAccess {
	None,
	Read = 1 << 1,//结果为2    0000 0001 -> 0000 0010    //转化为二进制后, 向左偏移 1 位, 2
	Think = 6 << 2,//结果为   0000 0110 -> 0001 1000    //转化为二进制后, 向左偏移 1 位, 16 + 8 = 24
	Write = 1 << 2,//结果为4   0000 0001 -> 0000 0100    //转化为二进制后, 向左偏移 2 位, 2 * 2 = 4
	ReadWrite = Read | Write, //6, 按位或
	G = '123'.length
}
console.log(FileAccess);




//🌟作为【接口类型】的枚举成员
enum ShapeKind {
	Circle, //0 或 Circle 类型
	Square, //1 或 Square 类型
}

interface Circle {
	kind: ShapeKind.Circle,//使用【枚举值（或叫枚举成员）】来当作【类型】
	radius: number,
}

interface Square {
	Kind: ShapeKind.Square,
	sideLength: number,
}

let angle: Circle = {
	kind: ShapeKind.Circle, //枚举值为 0
	radius: 180,
}
console.log(angle);



//🌟根据枚举值判断枚举条件
enum isFishData {
	FishFins,
	Limbs,
}

function isACat(x: isFishData) : void{//🔥用【枚举类型】, 来作为判断条件
	if(x === isFishData.FishFins) {
		console.log('this is a fish');
	}else{
		console.log('this is not a cat');
	}
}

isACat(isFishData.Limbs)//跟接口的差别是, 枚举值可以【直接传入函数】, 而接口需要【通过{对象}来传入函数】




//🌟运行时的枚举, 会被编译成对象, 可以当作对象来使用
enum E1 {
	X, Y, Z //0,1,2
}

function f(obj: {Y: number}) { //相当于传入了【枚举对象】, 里边有个值 X 为 number
	console.log(obj.Y)
	return obj.Y //枚举值 X 为 0
}

f(E1)//🔥🔥注意，如果通过 【const 声明】的话, enum 就没法作为【值】传入了






//🌟const 枚举, 会在编译阶段【被删除】, 相当于赋值使用后就废弃, 不能包含计算成员, 不能包含初始化函数
const enum ObjData {
	Up,
	Down,
	Left,
	Right,
}

let gameDire: ObjData[] = [
	ObjData.Up,
	ObjData.Down,
	ObjData.Left,
	ObjData.Right,
]

console.log(gameDire) // [0, 1, 2, 3]
// console.log(ObjData) //🔥🔥因为是用 const 生命的枚举值, 所以编译后会【被删除】，所以这里会报错！





//🌟外部枚举
declare enum abcData {
	A = 1,
	B = A * 2,
	C = 3
}

// console.log(abcData)


