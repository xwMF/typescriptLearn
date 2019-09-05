// 原始数据类型：布尔值、数值、字符串、null、undefined以及Symbol

// 1.布尔值
// 语法：使用boolean定义布尔值类型
let isDone: boolean = false;
// let isDone: boolean = 'false';   // ts下会报错

// ！！！注意：使用构造函数Boolean创造的对象不是布尔值
// let createdByNewboolean: boolean = new Boolean(1);   // ts下会报错

// 直接使用Boolean 可以返回一个boolean的值
let createdByNewboolean: boolean = Boolean(1);
console.log(typeof createdByNewboolean);



// 2.数值
// 语法：使用number定义数值类型
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6中的八进制表示法
let octalLiteral: number = 0o744;
let notNumber: number = NaN;
let infinityNumber: number = Infinity;



// 3.字符串
// 语法：使用string定义字符串类型
let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${ myName }.I'll be ${ myAge + 1 } years old next month.`;
console.log(sentence);



// 4.空值
// js中没有空值（Void）的概念，在ts中可以用 void 表示没有任何返回值的函数：
function alertName(): void {
    alert(`my name is Tom`);
}
// 声明一个void类型的变量没有什么用，只能给其赋值 undefined 和 null
let unusable1: void = undefined;
// let unusable2: void = null;  // ? 编辑器报错，待考证



// 5.null和undefined
// 语法：可以使用 undefined 和 null 来定义这两类原始数据
let u: undefined = undefined;
let n: null = null;

// 与void的区别是，undefined 和 null 是所有类型的子类型。也就是说  undefined 类型的变量可以赋值给 number类型的变量
// let num: number = undefined;    // ? 编辑器报错，待考证
// let u1: undefined;
// let num1: number = u;

// let u2: void;
// let num2: number = u;    // ts下会报错






