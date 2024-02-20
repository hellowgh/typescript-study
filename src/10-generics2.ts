/**
 * 泛型也能够约束类（static除外）
 */

class Log2<T> {
  run(val: T) {
    console.log(val);
  }
}

// 实例化时，可以指定参数类型
new Log2<string>().run("test");

// 不指定参数类型
new Log2().run(44);
new Log2().run("fsdfs");

// 【类型约束】
interface Length {
  length: number;
}

function log<T extends Length>(val: T): T {
  console.log(val, val.length);
  return val;
}

log([2]);
log({ length: 4 });
log("dsf");
