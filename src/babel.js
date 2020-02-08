async function foo() {
    return await Promise.resolve('i am bable')
}

foo().then(console.log)

class Util {
    static id = Date.now()
}

console.log(Util.id)

const unused = 43