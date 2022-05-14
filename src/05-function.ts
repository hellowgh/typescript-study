// 剩余参数
function add4(x: number, ...rest: Array<number>) {
    return x + rest.reduce((pre, cur) => pre + cur, 0)
}

console.log(add4(4, 4, 4));



// 函数重载
