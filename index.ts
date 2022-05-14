import './src/01-type-base.ts'
import './src/02-enum.ts'
import './src/03-interface.ts'
import './src/05-function.ts'

let msg: string = 'hello world!'
const ele = document.querySelector('.app')
if (ele) {
    ele.innerHTML = msg
}