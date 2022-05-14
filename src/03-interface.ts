/**
 * 用于约束对象、函数、类、接口数据
 */

interface List {
    readonly id: number, // 只读属性，不允许修改
    name: string,
    age?: number, // 可选属性
}

interface Result {
    data: List[]
}

function render(res: Result) {
    res.data.forEach(item => {
        // console.log(item.id, item.name);
        // item.id = 4
    });
}

const res = {
    data: [
        {
            id: 1,
            name: 'lucy'
        },
        {
            id: 2,
            name: 'jack',
            sex: 'male' // 这里在赋值给res再传递给render函数时，不会报错
        }
    ]
}

render(res)

// 如果是直接传递，避开检查需要使用类型断言（告诉ts，我明确知道这是什么类型）
// render(
//     {
//         data: [
//             {
//                 id: 1,
//                 name: 'lucy'
//             },
//             {
//                 id: 2,
//                 name: 'jack',
//                 sex: 'male' 
//             }
//         ]
//     } as Result
// )
