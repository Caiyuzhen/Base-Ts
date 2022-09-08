declare let isDone: boolean;
declare let myName: string;
declare let age: number;
declare let abcd: null;
declare let ooppii: undefined;
declare let abc: any;
declare let obj: {
    name: string;
    toString: () => void;
};
interface Obj2 {
    name: string;
    toString: () => void;
}
declare let ahhah: Obj2;
declare let kkk: string | boolean;
interface Person {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}
declare let person: Person;
declare let list1: number[];
declare let list2: (string | number)[];
declare let list3: Array<number>;
interface NumberArray {
    [index: number]: number | string;
}
declare let list4: NumberArray;
declare let test10: (a: number, b: number) => number;
declare let test11: (a: number, b?: number) => {};
declare let test12: (a: boolean, b: boolean) => boolean;
declare type testArg = (a: string, b: string) => string;
declare let testFn08: testArg;
declare let deck: {
    suits: string[];
    cards: any[];
    createCardPicker: () => () => {
        suit: string;
        card: number;
    };
};
declare let cardPicker: () => {
    suit: string;
    card: number;
};
declare let pickedCard: {
    suit: string;
    card: number;
};
interface Card {
    suit: string;
    card: number;
}
interface Deck2 {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck2): () => Card;
}
declare let deck2: Deck2;
declare let cardPicker2: () => {
    suit: string;
    card: number;
};
declare let pickedCard2: {
    suit: string;
    card: number;
};
declare function reverse(x: string): string;
declare function reverse(x: number): number;
declare class Animal {
    catcall: string;
    constructor(msg: string);
    greet(): string;
}
declare let abckkk: Animal;
declare class Dog extends Animal {
    bark(): void;
}
declare let newDog: Dog;
declare class Animal2 {
    name: string;
    constructor(theName: string);
    move(distance?: number): void;
    say(): void;
}
declare class Cat extends Animal2 {
    constructor(name: string);
    move(distance?: number): void;
    say(): void;
}
declare let abcdef: Animal2;
declare let ghijk: Cat;
declare let ghijk2: Cat;
declare class Animal3 {
    readonly name: string;
    constructor(name: string);
    protected move(distance: number): void;
}
declare class skasakl extends Animal3 {
    constructor(name: string);
    move(distance?: number): void;
}
declare let jake: Animal3;
declare class Animal5 {
    private name;
    constructor(name: string);
}
declare class Animal6 {
    private name;
    constructor(name: string);
}
declare let passCode: string;
declare class Employee {
    private _fullName;
    constructor(_fullName: string);
    get fullName(): string;
    set fullName(newName: string);
}
declare let abddee: Employee;
declare class Grid {
    scale: number;
    static origin: {
        x: number;
        y: number;
    };
    calculate(point: {
        x: number;
        y: number;
    }): number;
    constructor(scale: number);
}
declare let grid1: Grid;
declare abstract class Animal7 {
    abstract makeSound(): void;
}
declare class Dog2 extends Animal7 {
    makeSound(): void;
}
declare abstract class Department {
    name: string;
    constructor(name: string);
    printName(): void;
    abstract printMeeting(): void;
}
declare class DesignDep extends Department {
    constructor();
    printMeeting(): void;
}
declare let lalala: Department;
declare class ABC {
    static stand: string;
    constructor(greeting: string);
    greet(): void;
}
declare let KKK: ABC;
declare const greet002: ABC;
declare let LLL: typeof ABC;
declare class Point {
    x: number;
    y: number;
    constructor(x: number, y: number);
}
interface Point3d extends Point {
    z: number;
}
declare let drawObj1: Point3d;
interface Person2 {
    name: string;
    readonly weight: number;
    age?: number;
    [propName: string]: any;
}
declare let myObj007: {
    name: string;
    weight: number;
};
declare let add: ReadonlyArray<number>;
interface SearchFunc {
    (source: string, subString: string): boolean;
}
declare let mySearch: SearchFunc;
interface NumberArray22 {
    [index: number]: number;
}
declare let obj999: NumberArray;
declare let arr888: NumberArray;
declare class Animal999 {
    name: string;
    constructor(name?: string);
}
declare class Dog999 extends Animal999 {
    age: number;
    constructor(age?: number);
}
interface Earth {
    [x: string]: Animal999;
    [y: number]: Dog999;
}
interface NunberDic {
    [index: string]: number;
    length: number;
}
interface NumberDic {
    [propName: string]: string | number;
    readonly name: string;
    age: number;
}
interface ReadNum {
    readonly [index: number]: number;
}
declare let myArray66: ReadNum;
interface ClockInterface {
    currentTime: Date;
}
declare class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number, currentTime: object);
}
interface Alarm {
    alert(): void;
}
interface Light {
    color: string;
    lightOn(): void;
    lightOff(): void;
}
declare class Door {
}
declare class SecurityDoor extends Door implements Alarm {
    alert(): void;
}
declare class Car implements Alarm, Light {
    alert(): void;
    color: string;
    lightOn(): void;
    lightOff(): void;
}
interface clockDate {
    currentTime: Date;
    getTime(h: number, m: number): any;
}
interface ClockConstructor {
    new (h: number, m: number): any;
}
declare class Clock2 implements clockDate {
    constructor(h: number, m: number);
    currentTime: Date;
    getTime(): void;
}
interface Shape {
    color: string;
}
interface Square extends Shape {
    sideLength: number;
}
declare let squareABC: Square;
declare let squareABC2: Shape;
interface Cat008 {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}
interface Shape2 {
    color: string;
}
interface PenStroke {
    penWidth: number;
}
interface Square3 extends Shape2, PenStroke {
    sideLength: number;
}
declare let square666: Square3;
interface Counter2 {
    (start: number): string;
    interval: number;
    reset(): void;
}
declare let cc: Counter2;
interface clockDate22 {
    currentTime: Date;
    getTime(h: number, m: number): any;
}
interface ClockConstructor22 {
    new (h: number, m: number): any;
    getData(): void;
}
declare class Clock22 implements clockDate22 {
    static getData(): void;
    constructor(h?: number, m?: number);
    currentTime: Date;
    getTime(): void;
}
declare class Control {
    private state;
}
interface SelectableControl extends Control {
    select(): void;
}
declare class Button extends Control implements SelectableControl {
    select(): void;
}
declare class img1 extends Control {
}
declare class Point2 {
    x: number;
    y: number;
    constructor(x: number, y: number);
}
interface Point3D extends Point2 {
    z: number;
}
interface PointInterface {
    x: number;
    y: number;
}
interface Point3D2 extends PointInterface {
    z: number;
}
declare let ABCDD: Point3D2;
declare let ab: number[];
declare let ac: Array<number>;
declare let indentity4: (arg: number) => number;
declare let indentity5: <X>(arg: X) => X;
declare let indentity6: {
    <T>(arg: T): T;
};
interface IndetiterFace {
    <T>(arg: T): T;
}
declare let indentity7: IndetiterFace;
interface IndetiterFace2<T> {
    (arg: T): T;
}
declare let indentity8: IndetiterFace2<string>;
interface IndetiterFace2<T> {
    (arg: T): T;
}
declare let indentity9: IndetiterFace2<string>;
declare class GenericNumber<T> {
    zeroValu: T;
    add: (x: T, y: T) => T;
}
declare let myNum: GenericNumber<number>;
declare class MinClass<T> {
    list: T[];
    add(num: T): void;
    min(): T;
}
interface LengthWise {
    length: number;
}
declare type LengthWise2 = string;
interface LengthWise3 {
    length: number;
    a: string;
}
declare type LengthWise4 = string | LengthWise3;
declare type KK2 = keyof {
    a: 1;
    b: 2;
    c: 3;
    d: 4;
};
interface PersonA {
    name: string;
    age: number;
    sex: string;
}
declare type K1 = keyof PersonA;
declare type K2 = keyof PersonA[];
declare type K3 = keyof {
    [x: string]: PersonA;
};
declare let xx: {
    a: number;
    b: number;
    c: number;
    d: number;
};
declare class PersonAB {
    name: string;
    constructor(name: string);
}
interface Loggable {
    log(): void;
}
declare class ConsoleLogger implements Loggable {
    log(): void;
}
declare let jim: PersonAB & ConsoleLogger;
declare let nnn: string;
interface Sentence {
    content: string;
    title: string;
}
interface Music {
    url: string;
}
declare class QQMusic<T extends Sentence & Music> {
    arg: T;
    props: T;
    constructor(arg: T);
    info(): {
        url: string;
        content: string;
        title: string;
    };
}
declare const content: {
    url: string;
    content: string;
    title: string;
};
declare class BeeKeeper {
    hasMask: boolean;
}
declare class ZooKeeper {
    nametag: string;
}
declare class Animal22 {
    numLegs: number;
}
declare class Bee extends Animal22 {
    keeper: BeeKeeper;
}
declare class Lion extends Animal22 {
    keeper: ZooKeeper;
}
declare let x: [string, number];
declare const list: [number, string, boolean?];
declare function test09(arg1: number, arg2: string, arg3: boolean): void;
declare function test08(...args: [number, string, boolean]): void;
declare let list998: [boolean, ...number[]];
declare let list888: [number, ...string[]];
