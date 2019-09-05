// 任意值


// 任意值 (Any) 用来表示允许赋值为任意类型

// 1.什么是任意值类型？
// 一个普通类型的值，在赋值过程中改变类型是不允许的：
let myFavoriteNumber: string = 'seven';
// myFavoriteNumber = 7;   // 将会报错
// 但如果是any类型，则允许修改为任意类型
let myFavoriteNumber1: any = 'twenty four';
myFavoriteNumber1 = 24;



// 2.任意值的属性和方法
let anything: any = 'hello';
// console.log(anything.myName);
// console.log(anything.myName.firstName);
// 也允许调用任何方法：
let anything1: any = 'Tom';
// anything1.setName('Jerry');
// 可以认为，！！！声明一个变量为任意值之后，对它的任何操作，返回的内容类型都是任意值



// 3.未声明类型的变量
// 如果变量在声明的时候未指定其类型，那么它会被识别为任意值类型
let something;
something = 'seven';
something = 7;
// 等价于：
// let something: any;
// something = 'seven';
// something = 7;
