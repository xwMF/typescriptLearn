// 对象的类型 -- 接口


// 在ts中,我们使用接口(interfaces)来定义对象的类型

// 1.什么是接口?
// 在面向对象语言中,接口(interfaces)是一个很重要的概念,它是对行为的抽象,而具体如何行动需要类(classes)去实现(implement)
// ts中的接口是一个非常灵活的概念,除了可用于对类的一部分行为进行抽象意外,也常用于对[对象的形状(shape)]进行描述



// 2.例子
interface Person {
    name: string;
    age: number;
}
let tom: Person = {
    name: 'tom',
    age: 25
}
console.log(tom);
// 下面代码会报错, 因为少了属性
// let peter: Person = {
//     name: 'peter'
// }
// 下面代码会报错, 因为多了属性
// let peter1: Person = {
//     name: 'peter',
//     age: 25,
//     height: 195
// }
// 可见,赋值的时候,变量的形状必须和接口的形状保持一致



// 3.可选属性
// 有时候我们不需要完全匹配一个形状,那么可以用可选属性:
interface Person1 {
    name: string;
    age?: number;
}
let tom1: Person1 = {
    name: 'tom1'
}

interface Person2 {
    name: string;
    age?: number;
}
let tom2: Person2 = {
    name: 'tom2',
    age: 25
}
// 可选属性的含义是该属性可以不存在,但是这时仍然不允许添加未定义的属性
// 下述代码会报错,因为添加了未定义的height属性
// interface Person3 {
//     name: string;
//     age?: number;
// }
// let tom2: Person2 = {
//     name: 'tom2',
//     age: 25,
//     height: 195
// }



// 4.任意属性
// 有时候我们希望一个接口允许有任意的属性, 可以使用如下方式:
interface Person3 {
    name: string;
    age?: number;
    [propName: string]: any;
}
let tom3: Person3 = {
    name: 'tom3',
    age: 23,
    gender: false
}
// 使用[propName: string] 定义了任意属性取string类型的值
// ！！！需要注意的是：一旦定义了任意属性，那么确定属性（如Person3的name）和可选属性（如Person3的age）的类型都必须是它的类型的子集
// interface Person4 {
//     name: string;
//     age?: number;
//     [propName: string]: string;
// }
// let tom4: Person4 = {
//     name: 'tom3',
//     age: 23,
//     gender: 'male'
// }
// 上述Perosn4会报错：因为任意属性的值允许是string，但是可选属性age的值却是 number，而 number 不是 string 的子属性，所以报错了



// 5.只读属性
// 有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用readonly定义只读属性
interface PersonReadonly {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}
let tomReadonly: PersonReadonly = {
    id: 89757,
    name: 'tomR',
    gender: 'male'
}
// tomReadonly.id = 9527;  // ts下会报错，使用readonly定义的id初始化后，又被赋值了
// ！！！注意：只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
/*

interface PersonReadonly1 {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}
let tomReadonly1: PersonReadonly1 = {
    name: 'tomR',
    gender: 'male'
}
tomReadonly1.id = 89757;

*/
// 上述代码会报2个错：
// 第一：是在给tomReadonly1赋值的时候，没有给id赋值
// 第二：是在给tomReadonly1.id 赋值的时候，由于它是只读属性，所以报错了

