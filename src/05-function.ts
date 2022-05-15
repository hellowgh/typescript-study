// 剩余参数
function add4(x: number, ...rest: Array<number>) {
    return x + rest.reduce((pre, cur) => pre + cur, 0)
}

// console.log(add4(4, 4, 4));



// 函数重载（同一个函数名，根据不同的参数类型有不同的行为，降低取名难度）
function add5(...rest: number[]): number
function add5(...rest: string[]): string

// 用一个共同的大类来包含上面的number 和 string
function add5(...rest: any[]): any {
    let first = rest[0]
    if (typeof first === 'number') {
        return rest.reduce((pre, cur) => pre + cur)
    }
    if (typeof first === 'string') {
        return rest.join('')
    }
}

// console.log(add5(4,4,4));
// console.log(add5('4', '4', '4'));

