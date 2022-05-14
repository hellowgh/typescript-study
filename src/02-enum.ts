/**
 * 避免硬编码
 * 未来可能改变的常量
 * 
 * 建议定义成枚举
 */

// 数字枚举
// 编译成js时，会反向映射，从而既可以用 数字 映射 值， 又可以用 值 映射 数字
enum Role {
    Reporter = 2, // 自定义初始值
    Developer,
    Maintainer,
    Owner,
    Guest,
}
// console.log(Role.Guest);


// 字符串枚举，没有反向映射
enum Message {
    Success = '成功',
    Failed = '失败'
}

// console.log(Message.Failed);

