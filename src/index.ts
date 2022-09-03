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
/*	
	三种添加注解的方式
		在函数的参数跟函数体上添加注解
		通过接口 interface 添加注解
		抽象出 type 来添加注解

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






//⚡️十三、函数的 this 指向问题
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






//⚡️十三、函数的重载
//反转函数 [1,2,3] -> [3,2,1]

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





//⚡️十四、类
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





//🌟例子2 ————————————————————————————————————————————————————————————
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





//⚡️十四、类的修饰符（通过修饰符的方式实现类的封装）
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





//⚡️十五、对象存取器(🔥🔥get、set)
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






//⚡️十六、静态属性
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




//⚡️十七、抽象类(基类), 本质上是个特殊的类, 抽象出父类的【公共方法】
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





//另一个抽象类的案例 ——————————————————————————————————————————
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
		super('design')
	}
	printMeeting(): void {
		console.log(this.name) //= design
	}
}

new DesignDep().printMeeting()


let lalala: Department //🔥🔥🔥用抽象类来【规定形状】, 比如会规定【🔥只能有】 name 、pringName()方法、 pringMeeting()方法！！【🔥抽象类中没有的方法都不能自己定义！！】








//⚡️十八、高级技巧
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


//用类本来来定义类型, 写法一:
let KKK : ABC		//定义了 KKK 的类型
KKK = new ABC('haha')  //实例化 KKK
// console.log(KKK)


//用类本来来定义类型, 写法二
let greet002 : ABC = new ABC('best')
greet002.greet()


//用类的静态方法来定义函数类型:
let LLL : typeof ABC = ABC   //定义了 LLL 的函数类型
LLL.stand = "well" //能够直接访问 ABC 类上的 stand 静态方法！！
// console.log(LLL.stand + "llllll");






//⚡️十八、interface 接口, 接口可以去继承【类】
/*
	🌟interface 属性 （不可夺，不可少，除非👇自定义）
		可选属性   age? : number
		任意属性   [propName: string] : any
		只读属性   readonly

	🌟接口类型
		1.函数类接口
			interface SearchFunc {
					(source: string, subString: string) : boolean
				}

		2.可索引类型接口
			interface ReadNum {
					readonly [index: number] : number
				}
		3.类类型接口
				
*/ 


//🔥🔥用【接口】来继承【类】！！！！！！！！！
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


function printLabel(obj1: Person2):void {//用接口来定义【参数】的类型
	console.log(obj1.name, obj1.weight)
}

printLabel(myObj007)//传入参数




//用范型方式来定义数组
let add: ReadonlyArray<number> = [1,3,6]
// add[0] = 12 //会报错，因为是只读的数组



//🍎用【接口】的方式来描述【函数的类型】, 【🚀🚀🚀】这种该方法最常见
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




//⚡️十九、索引类型（数组）
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


//⚠️ 注意，用【类】来描述继承【接口参数】时, 子类别 > 父类别 
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




//⚡️二十、类的类型