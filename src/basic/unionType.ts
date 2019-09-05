// 联合类型


// 联合类型（Union Types）表示取值可以为多种类型中的一种。

// 1.例子
let unionType1: string | number;
unionType1 = 'seven';
unionType1 = 7;
// unionType1 = false;     // 报错
// 联合类型使用  |  分割每个类型
// 上述例子的意思是：unionType1的值的类型只能是 string 或 number



// 2.访问联合类型的属性或方法
// 当ts不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性和方法：
// function getLength(something: string | number): number {
//     return something.length
// }
// 上述函数会报错，因为length不是string 和 number的共有属性，所以会报错
// 但是访问string 和 number的共有属性是没有问题的，如下访问toString()：
function getString(something: string | number): string {
    return something.toString();
}

// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：
let stringNumber: string | number;
stringNumber = 'seven';   // 此时stringNumber被推断为 string,所以可以访问length属性
console.log(stringNumber.length);   
stringNumber = 7;   // 此时stringNumber被推断为 number,所以不可以访问length属性,下行代码会报错
// console.log(stringNumber.length);   // 类型“number”上不存在属性“length”。


