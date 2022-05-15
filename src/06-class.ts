// 与ES6一致，类成员的 属性 都是实例属性，方法 是实例方法，而非原型的属性和方法

class Dog {
    constructor(name: string) {
        this.name = name
    }

    name: string

    age?: number = 5 // 必须要有初始值，或者在constructor中声明

    static food: string // 只能通过类名（子类和父类都可）访问

    public run() {

    }

    private pri() {

    }

    protected pro() {
        // 只能在类和子类中访问，不能被实例访问
    }
}

// console.log(Dog.prototype);
// console.log(new Dog('yellow').pro());
console.log(Dog.food);


// 继承
class Husky extends Dog {
    constructor(name: string, public color: string) { // 这里使用public，可以简化代码，不用再声明，且无需this.color=color
        super(name) // super是Dog的实例，实例的name就是这里传入的name
        // console.log(super(name));
    }
}

const dog = new Husky('black', 'red')
// console.log(dog.color);



// 修饰符
/**
 * public 默认
 * 
 * private 不能在实例上访问，只能在类内部访问，也不能被子类访问
 * 如果在构造函数上使用private，说明这个类既不能被实例化，也不能被继承
 * 
 * protected 只能在类和子类中访问，不能被实例访问
 * 修饰构造函数时，此类只能被继承，不能被实例化，是一个基类
 * 
 * static修饰符  静态成员
 */
