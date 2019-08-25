const src = require('./text')
import face from './face.png';
import abc from './abc.png'
import './index.css';
import './index.less'

var root = document.getElementById('root')

root.innerHTML = '<div class="iconfont el-icon-bi-shouye"></div>'

var myIcon = new Image();
myIcon.src = face;

document.body.appendChild(myIcon);

console.log(src)

const fn = () => {
  console.log('箭头函数')
}

fn()

let arr = [1, 2, 4];
let arrB = arr.map(item => item * 2);

console.log(arrB.includes(8));
console.log("new Set(arrB) is ", new Set(arrB));

@log
class A {
  a = 1
}
let a = new A()
console.log(a.a)

function log(target) {
  console.log(target, '----')
}