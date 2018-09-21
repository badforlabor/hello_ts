
function getClassName(obj: any) {
    return obj.constructor.name
}

function New<T>(className: string, ...args: any[]): T {
    var instance = Object.create((<any>window)[className].prototype);
    instance.constructor.apply(instance, args);
    return <T>instance;
}


class A {
    showMe() {
        console.log('i am A')
    }
}

function test1() {
    let a = new A() //New('A') as any
    a.showMe()
    console.log('getClassName:', getClassName(a))
}

test1()