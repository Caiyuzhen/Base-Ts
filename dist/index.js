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
let greet002 = new ABC('best');
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
