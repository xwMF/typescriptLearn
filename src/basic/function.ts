// 函数的类型


// 1.函数声明
// 在js中,有两种常见的定义函数的方--函数声明(Function Declaration)和函数表达式(Function Expression)
// (1).js函数声明(Function Declaration)
// function sum(x, y) {
//     return x + y;
// }
// (2).js函数表达式(Function Expression)
// let mySum = function (x, y) {
//     return x + y;
// }

// 一个函数有输入和输出,要在TypeScript中对其进行约束,需要把输入和输出都考虑到,其中函数声明的类型定义较简单
function sumF(x: number, y: number): number {
    return x + y;
}
// ！！！注意: 输入多余的(或者少于要求的)参数,是不被允许的:
function sumF1(x: number, y: number): number {
    return x + y;
}
// sumF1(1, 2, 3);  // 应有 0-2 个参数，但获得 3 个。
function sumF2(x: number, y: number): number {
    return x + y;
}
// sumF2(1);   // An argument for 'y' was not provided.



// 2.ts:函数表达式
// 如果要我们写一个函数表达式(Function Expression)的定义,可能会写成这样:
let sumTs = function(x: number, y: number): number {
    return x + y;
}
// 这是可以通过编译的,不过事实上,上面的代码只对等号右侧的匿名函数进行了类型定义,而等号左边的sumTs,是通过赋值操作进行类型推论而推断出来的.如果要手动给sumTs添加类型,则应该是这样:
let sumTs1: (x: number, y: number) => number = function(x: number, y: number): number{
    return x + y;
}
// ！！！此处的  =>  和 ES6中的 =>  并不一样
// 在ts的类型定义中， => 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型



// 3.ts:用接口定义函数的形状
interface searchFunc{
    (source: string, subString: string): boolean;
}

let mySearch: searchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}



// 4.ts:可选参数
// 与接口中的可选属性类似,我们用 ?  表示可选的参数:
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('tom', 'cat');
let tom_ = buildName('tom');
console.log(tomcat);
console.log(tom_);
// ！！！注意：可选参数必须跟在必须参数后面。换句话说：可选参数后面不允许再出现必需参数了：
// function buildName1(firstName?: string, lastName: string) { // 必选参数不能位于可选参数后。
//     if (lastName) {
//         return firstName + ' ' + lastName;
//     } else {
//         return firstName;
//     }
// }



// 5.ts:参数默认值
// ts会将添加了默认值的参数识别为可选参数
function buildName2(firstName: string, lastName: string = 'cat') {
    return firstName + ' ' + lastName;
}
let tomcat2 = buildName2('tom', 'cat2');
let tom_2 = buildName2('tom2');
// 此时就不必受 可选参数必须在必须参数后面的限制了:
function buildName3(firstName: string = 'tom3', lastName: string) {
    return firstName + ' ' + lastName;
}



// 6.ts:剩余参数
// ES6中,可以使用...rest的方式获取函数中的剩余参数(rest参数):
/* 
function push(array, ...items) {
    items.forEach(function(item) {
        array.push(item);
    })
} 
*/
// 事实上, items是一个数组,所以我们可以用数组的类型来定义它:
function push(array: any[], ...items: any[]) {
    items.forEach((item) => {
        array.push(item);
    })
}
// ！！！注意： rest参数只能是最后一个参数



// 7.ts:重载
// 重载允许一个函数接受不同数量或类型的参数时，做出不同的处理。
// 比如，我们需要实现一个函数reverse，输入数字123的时候，输出反转的数字321，输入字符串'hello'的时候，输出反转的字符串'olleh'
// 利用联合类型，我们可以这么实现：
function reverse(x: number | string): number | string | undefined {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
// 这样有一个缺点，就是不能够精确的表达，输入为数字的时候，输出也应该为数字，输入为字符串的时候，输出也应该为字符串
// 这时：我们可以使用重载定义多个reverse的函数类型：
function reverse2(x: number): number;
function reverse2(x: string): string;
function reverse2(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
// 上例中，我们重复定义了多次函数 reverse，前几次都是函数定义，最后一次是函数实现
// ！！！注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。