/**
 * 抽象类是TS对ES的补充：只能继承不能实例化的类
 *
 * 主要用于方法的抽取、复用
 *
 * 用于实现多态
 */

abstract class Animal {
  // 直接没有constructor

  eat() {
    // 具体方法
    console.log("eat");
  }

  abstract sleep(): void; // 在子类中具体实现
}

class Dog2 extends Animal {
  constructor(public name: string) {
    super();
  }

  sleep(): void {
    console.log("dog sleep");
  }
}

const dog2 = new Dog2("xiaohei");

console.log(new Dog2("wang"));

// 2、多态
class Cat extends Animal {
  sleep(): void {
    console.log("cat sleep");
  }
}
const animals: Animal[] = [new Dog2("xiaohei"), new Cat()];
animals.forEach((animal) => {
  animal.sleep();
});

// 3、链式调用，return this，这里的this既可以是子类，也可以是父类，这样就能链式调用子类和父类的方法
class WorkFlow {
  doSomething() {
    return this;
  }
}

class MyWorkFlow extends WorkFlow {
  next() {
    return this;
  }
}

new MyWorkFlow().doSomething().next().doSomething();
