<!-- F5 - 开始调试、继续执行
cmd(ctrl) + shift + F5 - 重启
shift + F5 - 结束调试
F9 - 添加断点
F10 - 单步跳过
F11 - 单步调试
shift + f11 - 单步跳出 -->

src/basic/                  基础  

    priDataType.ts          原始数据类型  

    any.ts                  任意值  

    typeInference.ts        类型推论  

    unionType.ts            联合类型  

    interfaces.ts           对象的类型 -- 接口  

    array.ts                数组的类型  

    function.ts             函数的类型  

    typeAssertion.ts        类型断言  

  
  
src/advance/                进阶  

    type.ts                 类型别名  

    stringLiteral.ts        字符串字面量类型  

  
git clone下来后  

  
npm install 安装依赖  

  
然后可以在vs code中按下 ctrl + shift + B 实时编译  

输出的js文件路径在tsconfig.json定义位dist文件夹下  

注意：ctrl + shift + B 后 watch选项为实时编译，即文件改动后就会编译  

build选项为手动编译  

