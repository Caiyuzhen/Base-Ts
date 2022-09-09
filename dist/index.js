"use strict";
let isDone = false;
console.log(isDone);
let myName = 'Tom';
myName = 'Jimmy';
console.log(myName);
let age = 24;
age = 32;
console.log(age);
let abcd = null;
console.log(abcd);
let ooppii = undefined;
console.log(ooppii);
function error(message) {
    throw new ErrorEvent(message);
}
function fail() {
    return error('这是一个报错函数');
}
function failLoop() {
    while (true) {
    }
}
let abc = 4;
abc = 'hello';
console.log(abc);
function test2() {
    console.log('没有返回值的情况');
}
function test(a, b) {
    return '' + a + b;
}
console.log(test(1, 2));
let obj = {
    name: 'Tom',
    toString: function () {
        console.log('Hey');
    }
};
console.log(obj.name);
let ahhah = {
    name: 'Tom',
    toString: function () {
        console.log('Hey');
    }
};
console.log(ahhah.name);
let kkk = true;
console.log(kkk);
function test5(aa) {
    return aa.toString().split('');
}
console.log(test5(10));
let person = {
    id: 123,
    name: 'John',
    sex: 'male',
};
let list1 = [1, 2, 3];
let list2 = [1, 2, 3, 'well'];
list1.push(5);
list2.push('hello');
console.log(list2);
let list3 = [1, 2, 3];
let list4 = [1, 2, 3, 4, 'this is字符串'];
console.log(list4);
function test3(a, b) {
    throw new Error('报错了');
}
function test4(a, b) {
    console.log('hey');
}
function test6(a, b, c = 'Kim') {
    console.log('hey');
}
function test7(a, b, ...restOfName) {
    console.log('hey');
}
function test8({ first, second } = { first: 1, second: '晴' }) {
    return '第' + first + '天' + second;
}
console.log(test8({ first: 2, second: '阴' }));
function test9({ first = 2, second = 3 }) {
    return first + second;
}
console.log(test9({ first: 998, second: undefined }));
let test10 = function (a, b) {
    return a + b;
};
let test11 = function (a, b) {
    return { a: 998 };
};
let test12 = function (a, b) {
    return a;
};
let testFn08 = function (a, b) {
    return a + b;
};
let deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickSuit], card: pickedCard % 13 };
        };
    }
};
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
let deck2 = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickSuit], card: pickedCard % 13 };
        };
    }
};
let cardPicker2 = deck.createCardPicker();
let pickedCard2 = cardPicker();
function reverse(x) {
    if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
}
console.log(reverse(123));
console.log(reverse('123'));
class Animal {
    constructor(msg) {
        this.catcall = msg;
    }
    greet() {
        return "Hello," + this.catcall;
    }
}
let abckkk = new Animal("啦啦啦啦");
console.log(abckkk.greet());
class Dog extends Animal {
    bark() {
        console.log('唧唧唧');
    }
}
let newDog = new Dog("bark");
newDog.bark();
console.log(newDog.greet());
class Animal2 {
    constructor(theName) {
        this.name = theName;
    }
    move(distance = 0) {
        console.log(`${this.name} 可以移动 ${distance}米`);
        console.log(this.name + '11');
    }
    say() {
        console.log(this.name + '22');
    }
}
class Cat extends Animal2 {
    constructor(name) {
        super(name);
    }
    move(distance = 5) {
        super.move(distance);
    }
    say() {
        super.say();
    }
}
let abcdef = new Cat('猫咪1');
console.log(abcdef);
let ghijk = new Cat('猫咪2');
ghijk.move(10);
let ghijk2 = new Cat('猫咪3');
ghijk.say();
class Animal3 {
    constructor(name) {
        this.name = name;
    }
    move(distance) {
        console.log(distance);
    }
}
class skasakl extends Animal3 {
    constructor(name) {
        super(name);
    }
    move(distance = 20) {
        super.move(distance);
    }
}
let jake = new Animal3('jake');
class Animal5 {
    constructor(name) {
        this.name = name;
        console.log(this.name);
    }
}
class Animal6 {
    constructor(name) {
        this.name = name;
    }
}
let passCode = "secret passCode";
class Employee {
    constructor(_fullName) {
        this._fullName = "John";
        this._fullName = _fullName;
    }
    get fullName() {
        return this._fullName;
    }
    set fullName(newName) {
        if (passCode && passCode === "secret passCode") {
            this._fullName = newName;
        }
        else {
            console.log('error');
        }
    }
}
let abddee = new Employee("Jimmy");
console.log(abddee.fullName);
abddee.fullName = "Kim";
class Grid {
    constructor(scale) {
        this.scale = scale;
    }
    calculate(point) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
}
Grid.origin = { x: 0, y: 0 };
let grid1 = new Grid(1.0);
console.log(grid1.calculate({ x: 10, y: 10 }));
class Animal7 {
}
class Dog2 extends Animal7 {
    makeSound() {
        console.log("WangWang");
    }
}
new Dog2().makeSound();
class Department {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(this.name);
    }
}
class DesignDep extends Department {
    constructor() {
        super('design');
    }
    printMeeting() {
        console.log(this.name);
    }
}
new DesignDep().printMeeting();
let lalala;
class ABC {
    constructor(greeting) { }
    greet() { console.log('greettt'); }
}
ABC.stand = 'hello';
let KKK;
KKK = new ABC('haha');
const greet002 = new ABC('best');
greet002.greet();
let LLL = ABC;
LLL.stand = "well";
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
let drawObj1 = { x: 1, y: 2, z: 3 };
console.log(drawObj1.x);
console.log(drawObj1.y);
console.log(drawObj1.z);
let myObj007 = { name: "Jimmy", weight: 120 };
function printLabel(obj1) {
    console.log(obj1.name, obj1.weight);
}
printLabel(myObj007);
let add = [1, 3, 6];
let mySearch = function (source, subString) {
    let result = source.search(subString);
    return result > -1;
};
let obj999 = {
    0: 1,
    1: 2,
    2: 3
};
let arr888 = [1, 2, 3, 4];
class Animal999 {
    constructor(name = 'Bubble') {
        this.name = name;
    }
}
class Dog999 extends Animal999 {
    constructor(age = 12) {
        super();
        this.age = age;
    }
}
let myArray66 = [1, 2, 3];
class Clock {
    constructor(h, m, currentTime) {
        this.currentTime = new Date();
    }
}
class Door {
}
class SecurityDoor extends Door {
    alert() {
        console.log("这是一个安全门");
    }
}
class Car {
    constructor() {
        this.color = 'red';
    }
    alert() {
        console.log("这是一个安全车");
    }
    lightOn() {
        console.log("这是一个开灯方法");
    }
    lightOff() {
        console.log("这是一个关灯方法");
    }
}
class Clock2 {
    constructor(h, m) {
        this.currentTime = new Date;
    }
    getTime() { }
}
function createClock(Cl, h, m) {
    return new Cl(h, m);
}
createClock(Clock2, 10, 12);
let squareABC = {};
let squareABC2 = {};
squareABC.color = "bule";
squareABC.sideLength = 200;
function isFish(animal) {
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
}
let square666 = {};
square666.color = 'blue';
square666.penWidth = 10;
square666.sideLength = 5.0;
function getCounter() {
    let counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
let cc = getCounter();
cc(10);
cc.reset();
cc.interval = 321;
class Clock22 {
    constructor(h = 1, m = 2) {
        this.currentTime = new Date;
    }
    static getData() { }
    getTime() { }
}
function createClock22(Cl, h, m) {
    return new Cl(h, m);
}
createClock22(Clock22, 10, 12);
class Control {
}
class Button extends Control {
    select() {
        console.log('select');
    }
}
class img1 extends Control {
}
class Point2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
let ABCDD = {
    x: 1,
    y: 2,
    z: 3
};
let ab = [1, 2, 3];
let ac = [1, 2, 3];
function indentity(arg) {
    return arg;
}
function indentity2(arg) {
    return arg;
}
function indentity3(arg) {
    return arg;
}
console.log(indentity3('well'));
function indentity10(arg) {
    console.log(arg.length);
    return arg;
}
let indentity4 = function (arg) {
    return arg;
};
let indentity5 = function (arg) {
    return arg;
};
let indentity6 = function (arg) {
    return arg;
};
let indentity7 = function (arg) {
    return arg;
};
let indentity8 = function (arg) {
    return arg;
};
function inden(arg) {
    return arg;
}
let indentity9 = inden;
class GenericNumber {
}
let myNum = new GenericNumber();
myNum.zeroValu = 100;
myNum.add = (x, y) => {
    return x + y;
};
class MinClass {
    constructor() {
        this.list = [];
    }
    add(num) {
        this.list.push(num);
    }
    min() {
        let minNum = this.list[0];
        for (let i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    }
}
function logInden(arg) {
    console.log(arg.length);
    return arg;
}
function logInde2(arg) {
    console.log(arg.length);
    return arg;
}
function logInde3(arg) {
    return arg;
}
function logInde4(arg) {
    return arg;
}
function getProperty(obj, key) {
    return obj[key];
}
let xx = { a: 1, b: 2, c: 3, d: 4 };
console.log(getProperty(xx, 'b'));
function extendsFn(first, second) {
    let res = {};
    for (let id in first) {
        res[id] = first[id];
    }
    for (let id in second) {
        if (!res.hasOwnProperty(id)) {
            res[id] = second[id];
        }
    }
    return res;
}
class PersonAB {
    constructor(name) {
        this.name = name;
    }
}
class ConsoleLogger {
    log() {
        console.log("登录成功");
    }
}
let jim = extendsFn(new PersonAB("jim"), new ConsoleLogger());
let nnn = jim.name;
class QQMusic {
    constructor(arg) {
        this.arg = arg;
        this.props = arg;
    }
    info() {
        return {
            url: this.props.url,
            content: this.props.content,
            title: this.props.title
        };
    }
}
const content = {
    url: 'http://www.abc.com',
    content: 'a long text',
    title: 'Well'
};
console.log(new QQMusic(content).info());
function create(c) {
    return new c();
}
class BeeKeeper {
    constructor() {
        this.hasMask = true;
    }
}
class ZooKeeper {
    constructor() {
        this.nametag = 'Boss';
    }
}
class Animal22 {
    constructor() {
        this.numLegs = 12;
    }
}
class Bee extends Animal22 {
    constructor() {
        super(...arguments);
        this.keeper = new BeeKeeper();
    }
}
class Lion extends Animal22 {
    constructor() {
        super(...arguments);
        this.keeper = new ZooKeeper();
    }
}
function createInstance(cc) {
    return new cc();
}
console.log(createInstance(Lion).keeper.nametag);
console.log(createInstance(Bee).keeper.hasMask);
let x;
x = ['hello', 10];
x.push('world');
x.push(299);
console.log(x);
console.log(x[0].substring(2));
const list = [1, '2'];
let list998 = [true, 1, 2, 3];
let list888 = [12, 'well', 'done'];
console.log(jQuery('#box'));
function greet(greeting) {
    console.log(greeting);
}
greet('字符串');
console.log(window.myLib);
let GreetingSetting01 = {
    greeting: "hello",
    duration: 456,
    color: 'blue'
};
let whoName = 'Tom';
console.log(whoName);
let abbkk;
function fn288(x) {
    x();
}
