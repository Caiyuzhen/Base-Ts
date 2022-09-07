//🔥相当于定义了一个全局 jQuery 变量
declare let jQuery: (param: string) => void 
//🔥相当于定义了一个全局的【变量】，在函数内可以直接 foo = 123
declare let foo: number 
//🔥相当于定义了一个全局的【常量】，常量没法更改
declare const foo22: number = 123
//🔥相当于定义了一个全局函数
declare function gree(greeting: string): void