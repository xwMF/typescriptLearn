// 数组的类型


// ts中，数组类型有多种定义方式，比较灵活

// 1. 类型 + 方括号 表示法
let arrNum: number[] = [1, 2, 3, 4, 5];
console.log(arrNum);
// 数组的项中不允许出现其它类型：
// let arrNum1: number[] = [1, 2, 3, 4, '5'];
// 上述代码会报错：不能将类型“string”分配给类型“number”。

// 数组的一些方法的参数也会根据数组在定义时约定的类型进行限制:
let arrNum2: number[] = [1, 2, 3];
// arrNum2.push('2');  // 类型“"2"”的参数不能赋给类型“number”的参数。



// 2.数组泛型
// 语法: 使用数组泛型(Array Generic)   Array<elemType> 来表示数组:
let arrNum3: Array<number> = [1, 2, 3, 4, 5];



// 3.用接口表示数组
interface NumberArray {
    [index: number]: number;
}
let arrNum4: NumberArray = [1, 1, 2, 3];
// NumberArray表示: 只要索引的类型是数字,那么值的类型必须为数字
// 一般不用接口来描述数组,一种情况例外,就是用它来表示类数组



// 4.类数组
// 类数组(Array-like Object) 不是数组类型,比如arguments
// function sum() {
//     let args: number[]  = arguments;    // ts下报错
// }
// 上述代码中,arguments实际上是一个数组,不能用普通的数组的方式来描述,应该用接口 
function sum1() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function; 
    } = arguments;
}
// 在这个例子中，我们除了约束当索引的类型是数字时，值的类型必须是数字之外，也约束了它还有 length 和 callee 两个属性。

// 常用的类数组都有自己的接口定义,如 IArguments, NodeList, HTMLCollection等:
function sum2() {
    let args: IArguments = arguments;
}
// 其中的 IArguments 是 ts 中定义好了的类型,它实际上就是:
interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
}