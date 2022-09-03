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
