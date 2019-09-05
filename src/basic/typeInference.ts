// 类型推论


// 如果没有明确的指定类型，那么ts会依照类型推论（Type Inference）的规则推断出一个类型

// 1.什么是类型推论？
// 以下代码虽然没有指定类型，但是会在编译的时候报错
let myNumber = 'seven';
// myNumber = 7;    // 报错
// 等价于：
// let myNumber: string = 'seven';
// myNumber = 7;

// ！！！如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成any类型而完全不被类型检查
let myNumber1;
myNumber1 = 'seven';
myNumber1 = 7;

