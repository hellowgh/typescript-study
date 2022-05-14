// 数组类型（泛型）
const arr: Array<number | string> = [1, 2, 4, '4r34']

// 函数类型
let computed: (x: number, y: number) => number
computed = (a, b) => a + b

// 函数类型 + 泛型
let add: (x: string, y: number) => typeof x
add = (a, b) => a + b

// 对象类型
const obj: {x: number, y: string} = {x: 1, y: '432'}
obj.x = 4;
obj.y = '4324'

// symbol类型
const sy1: symbol = Symbol();

// void类型


// any类型，只声明不赋值就是any（通过此，对JS做了兼容）
let x;
x = 4
x = false
x = []

// never类型，永远不会有返回值的类型，包括以下两种情况
let error = () => {
    throw new Error('err')
}
let endless = () => {
    while(true) {

    }
}
