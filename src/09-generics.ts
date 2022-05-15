/**
 * 泛型：提升函数和类的灵活度，接收、处理一个“宽泛的”类型，轻松支持多种数据类型，增强程序的扩展性
 * 避免写过多【重载】或者【联合类型】
 *
 * 泛型T是函数的另外一个维度的参数，用来定义类型，而不是值
 *
 * 用于【泛型函数】和【泛型接口】
 */

// 1、泛型函数
// 比any的好处在于，约束输入值和返回值类型一致
function log<T>(value: T): T {
  console.log(value);
  return value;
}

// 调用方法
log(["a", "b"]); // 类型推断（推荐）
log<string[]>(["a", "b"]);

// 2、泛型接口
interface Log<T = string> {
  (value: T): T;
}

const myLog: Log = log;
