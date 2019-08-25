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