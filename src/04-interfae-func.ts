/**
 * 函数可以用类型定义，类型别名，函数定义
 * 
 * 也可以用接口定义
 */

// 1/函数定义（定义 + 实现）
function add2(x: number, y: number): number{
    return x + y
}

// 2、类型别名
let add1: (x: number, y: number) => number

// 3、接口
interface Add1 {
    (x: number, y: number): number
}

// 4、类型别名
type Add2 = (x: number, y: number) => number

let addFn: Add2 = (a, y) => a + y