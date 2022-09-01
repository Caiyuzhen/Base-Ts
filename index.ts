/*
	ts 
		What?
			可以在浏览器中执行, 但需要编译成 js 文件
			可以在编译当中检查错误

		How?
			编译为 js
				手动编译
					Tsc index.ts
					node index.js
				自动编译
					Command + shift + B,
						tsc:watch -tsconfig.json -> 监视，自动编译 ts 文件
			
			数据类型
				js
					原始数据类型： 
						boolean 
						string 
						number
						null
						undefined
						symbol

					引用数据类型： 
						function 
						object
				
				ts
					基础数据类型： 
						boolean 
						string 
						number 
						null 
						undefined 
						symbol 
						any(新增) 
						never(新增)

					引用数据类型：
						object
						interface(新增,面向对象类型)
						数组
							比如基础数组 number[]  string[]  boolean[]、范型数组 Array<number>
						function

					新的语法特性
						as 类型断言
						class (OOP面向对象的三大特性) 
							封装、继承、多态
						接口
*/

var a: string = '啦啦啦'
console.log(a)
function test(a:number,b:number):number{
	return a + b
}

test(1,1)