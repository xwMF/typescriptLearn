// 元组


// 数组合并了相同类型的对象，而元组（tuple）合并了不同类型的对象。
// 元组起源于函数编程语言（如F#），这些语言中会频繁使用元组。



// 例子
// 定义一对值分别为 string 和 number的元组：
let tupleTom: [string, number] = ['tupleTom', 25];
// 当赋值或访问一个已知索引的元素时，会得到正确的类型：
tupleTom[0] = 'tupleTom1';
tupleTom[1] = 25;
tupleTom[0].slice(1);
tupleTom[1].toFixed(2);

// 也可以只赋值其中一种：
// let tupleTom1: [string, number];
// tupleTom1[0] = 'tom';

// 但是当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项。
let tupleTom2: [string, number];
tupleTom2 = ['tupleTom2', 25];

// let tupleTom3: [string, number];
// tupleTom3 = ['tupleTom3'];      // Property '1' is missing in type '[string]' but required in type '[string, number]'.



// 越界的元素：
// 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型：
let tupleTom3: [string, number];
tupleTom3 = ['tupleTom', 25];
tupleTom3.push('male');
console.log(tupleTom3);
// tupleTom3.push(true);   // 类型“true”的参数不能赋给类型“string | number”的参数。
