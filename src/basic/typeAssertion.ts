// 类型断言


// 类型断言（Type Assertion）可以用来手动指定一个值的类型。

// 1.语法
/* 
    <类型>值
或
    值 as 类型 
*/
// ！！！注意：在tsx语法（React的jsx语法的ts版）中必须使用后一种



// 2.例子：将一个联合类型的变量指定为一个更具体的类型
// 当ts不确定一个联合类型的变量到底是哪个类型的时候,我们只能访问此联合类型的所有类型里共有的属性或方法
/* 
    function getLength(something: string | number): number {
        return something.length;
    }
    类型“string | number”上不存在属性“length”。
    类型“number”上不存在属性“length”。 
*/

// 而有些时候，我们确实需要在还不确定类型的时候就访问其中一个类型的属性或方法，比如：
/*
     function getLength(something: string | number): number {
        if (something.length) {
            return something.length;
        } else {
            return something.toString().length;
        }
    }
    上面获取 something.length 的时候会报错。 
*/

// 此时可以使用类型断言，将something断言成string：
function getLength(something: string | number): number {
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}
// 类型断言的语法如上：在需要断言的变量前加上 <Type> 即可
// ！！！注意：类型断言不是类型转换，断言成一个联合类型中不存在的类型是不被允许的：
/*     
    function toBoolean(something: string | number): boolean {
        return <boolean>something;
    }
    Type 'number' is not comparable to type 'boolean'.
    类型“number”不可与类型“boolean”进行比较。 
*/
