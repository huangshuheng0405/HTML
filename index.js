//alert("hello")
// 网页输出
// document.write("div")
// document.write("<h1>title1</h1>")
// 控制台输出
// console.log("日志")

// prompt('请输入你的姓名')
// let的使用
// let age
// age = 18
// alert(age)
// let uname = "pink"
// console.log(age)
// let age = 18, uname = 'pink'

// let name1 = prompt('请输入姓名')
// document.write(name1)

// 交换两个数
// let n1 = 20
// let n2 = 10
// let tmp
// tmp = n1
// n1 = n2
// n2 = tmp
// console.log(n1, n2)
// 数组
// let arr = [1, 2, 3, "hsh"]
// console.log(arr[3])
// console.log(arr.length)
// 常量
// const PI = 3.14
// console.log(PI)

// let sum = 0
// for循环
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i]
// }
// console.log(sum)
// while循环
// let i = 0
// while (i < arr.length) {
//   sum += arr[i]
//   i++
// }
// console.log(sum)

// console.log("welcome to js world" - 2) // NaN
// console.log(NaN + 2) // NaN

// 字符串
// let str = 'hello world"hsh"' // 外单内双 或者内单外双
// let str1 = "hello world'hsh'" // 外双内单
// let str2 = `hello world'hsh'` // 模板字符串
// console.log(str2)
// 字符串拼接
// let str3 = "hello" + 123 + "world"
// console.log(str3)
// let age1 = 18
// // 字符串模板
// console.log(`我今年${age1}岁了`)

// let uname1 = prompt("请输入你的姓名")
// let age2 = prompt("请输入你的年龄")
// let str4 = `我的名字是${uname1},今年${age2}岁`
// document.write(str4)

// let isCool = true
// 布尔值
// console.log(isCool) // true
// console.log(typeof isCool) // boolean
// 布尔值的逻辑运算
// console.log(true && false) // false
// console.log(true || false) // true
// console.log(!true) // false
// 布尔值的比较
// console.log(5 > 3) // true
// console.log(null + 1) // 1
// console.log(undefined + 1) // NaN
// let n3 = 10
// console.log(typeof n3)  // number
// console.log(typeof str2) // string
// console.log(typeof isCool) // boolean
// console.log(typeof null) // object (这是一个历史遗留问题)
// let n4
// console.log(typeof n4) // undefined

// 类型转换
// let n5 = prompt("请输入第一个数")
// console.log(typeof n5) // string
// let n6 = Number(n5) // 将字符串转换为数字
// console.log(typeof n6) // number

// 隐式转换
// console.log("5" - 2) // 3 (字符串转换为数字)
// console.log("5" + 2) // 52 (数字转换为字符串)
// console.log("5" * 2) // 10 (字符串转换为数字)
// console.log("5" / 2) // 2.5 (字符串转换为数字)
// console.log("5" % 2) // 1 (字符串转换为数字)
// console.log(typeof + '123') // number (一元加运算符将字符串转换为数字)
// 显式转换
// let str2 = "123"
// console.log(Number(str2)) // 123 (字符串转换为数字)
// console.log(Number("abc" )) // NaN (无法转换为数字)
// console.log(String(123)) // "123" (数字转换为字符串)
// console.log(+prompt("请输入一个数字")) // 将用户输入的字符串转换为数字
// console.log(parseInt("12px"))
// console.log(parseInt("12.34px")) // 12 (解析整数)
// console.log(parseFloat("12.34px")) // 12.34 (解析浮点数)
// console.log(parseInt("abc123px")) // NaN (无法解析为数字)
// console.log(parseFloat("abc123px")) // NaN (无法解析为数字)

// let x = +prompt("请输入第一个数字")
// let y = +prompt("请输入第二个数字")
// alert(`两数和是：${x + y}`) // 将用户输入的字符串转换为数字并相加

// let i = 1
// console.log(++i + 1) // 3
// i = 1
// console.log(i++ + 1) // 2

// // 字符串拼接
// let str4 = `hello ${str2} world`
// console.log(str4)
// // 字符串长度
// console.log(str2.length)
// // 字符串索引
// console.log(str2[0])          // h
// // 字符串截取
// console.log(str2.slice(0, 5)) // hello
// // 字符串查找
// console.log(str2.indexOf("world")) // 6
// // 字符串替换
// console.log(str2.replace("world", "hsh")) // hello hsh'hsh'
// // 字符串分割
// console.log(str2.split(" ")) // [ 'hello', 'world\'hsh\'' ]
// // 字符串转换为大写
// console.log(str2.toUpperCase()) // HELLO WORLD'HSH
// // 字符串转换为小写
// console.log(str2.toLowerCase()) // hello world'hsh'
// // 字符串去除空格
// console.log(str2.trim()) // hello world'hsh'
// // 字符串是否包含
// console.log(str2.includes("world")) // true
// // 字符串是否以某个字符串开头
// console.log(str2.startsWith("hello")) // true
// // 字符串是否以某个字符串结尾
// console.log(str2.endsWith("hsh'")) // true
// // 字符串转换为数组
// console.log(str2.split("")) // [ 'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '\'', 'h', 's', 'h', '\'' ]
// // 字符串模板
// let name = "hsh"
// let age1 = 18
// let str5 = `我的名字是${name},今年${age1}岁`
// console.log(str5) // 我的名字是hsh,今年18岁
// // 字符串反转
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString(str2)) // 'hsh' dlrow olleh
// // 字符串是否是回文
// function isPalindrome(str) {
//   let reversed = reverseString(str);
//   return str === reversed;
// }
// console.log(isPalindrome("hsh")) // true

// console.log(isPalindrome("hello")) // false
// // 数字
// let num1 = 10
// let num2 = 20
// // 数字相加
// let sum1 = num1 + num2
// console.log(sum1) // 30
// // 数字相减
// let diff = num2 - num1
// console.log(diff) // 10
// // 数字相乘
// let product = num1 * num2
// console.log(product) // 200
// // 数字相除
// let quotient = num2 / num1
// console.log(quotient) // 2
// // 数字取余
// let remainder = num2 % num1
// console.log(remainder) // 0
// // 数字的幂
// let power = Math.pow(num1, 2)
// console.log(power) // 100
// // 数字的平方根
// let sqrt = Math.sqrt(num1)
// console.log(sqrt) // 3.1622776601683795
// // 数字的绝对值
// let absValue = Math.abs(-num1)
// console.log(absValue) // 10
// // 数字的四舍五入
// let rounded = Math.round(3.6)
// console.log(rounded) // 4
// // 数字的向上取整
// let ceilValue = Math.ceil(3.2)
// console.log(ceilValue) // 4
// // 数字的向下取整
// let floorValue = Math.floor(3.8)
// console.log(floorValue) // 3
// // 数字的随机数
// let randomNum = Math.random() * 100 // 生成0-100之间的随机数
// console.log(randomNum) // 例如：0.123456789
// // 数字的最大值
// let maxNum = Math.max(num1, num2, 30, 40)
// console.log(maxNum) // 40
// // 数字的最小值
// let minNum = Math.min(num1, num2, 5, 15)
// console.log(minNum) // 5
// // 数字的格式化
// function formatNumber(num) {
//   return num.toFixed(2); // 保留两位小数
// }

// console.log(formatNumber(3.14159)); // 3.14
// // 数字的转换
// function convertToNumber(str) {
//   let num = Number(str);
//   if (isNaN(num)) {
//     console.log("无法转换为数字");
//     return null;
//   }
//   return num;
// }
// console.log(convertToNumber("123")); // 123
// console.log(convertToNumber("abc")); // 无法转换为数字 null
// // 数字的比较
// function compareNumbers(num1, num2) {
//   if (num1 > num2) {
//     return `${num1} 大于 ${num2}`;
//   } else if (num1 < num2) {
//     return `${num1} 小于 ${num2}`;
//   } else {
//     return `${num1} 等于 ${num2}`;
//   }
// }
// console.log(compareNumbers(10, 20)); // 10 小于 20
// console.log(compareNumbers(30, 20)); // 30 大于 20
// console.log(compareNumbers(15, 15)); // 15 等于 15
// // 数字的进制转换
// function convertToBinary(num) {
//   return num.toString(2); // 转换为二进制
// }
// console.log(convertToBinary(10)); // 1010
// function convertToHexadecimal(num) {
//   return num.toString(16); // 转换为十六进制
// }
// console.log(convertToHexadecimal(255)); // ff
// function convertToOctal(num) {
//   return num.toString(8); // 转换为八进制
// }
// console.log(convertToOctal(64)); // 100
// // 数字的位运算

// function bitwiseOperations(num1, num2) {
//   let andResult = num1 & num2; // 按位与
//   let orResult = num1 | num2; // 按位或
//   let xorResult = num1 ^ num2; // 按位异或
//   let notResult = ~num1; // 按位取反
//   let leftShiftResult = num1 << 2; // 左移两位
//   let rightShiftResult = num1 >> 2; // 右移两位

//   return {
//     and: andResult,
//     or: orResult,
//     xor: xorResult,
//     not: notResult,
//     leftShift: leftShiftResult,
//     rightShift: rightShiftResult
//   };
// }
// console.log(bitwiseOperations(5, 3));
// // { and: 1, or: 7, xor: 6, not: -6, leftShift: 20, rightShift: 1 }
// // 数字的进制转换
// function convertBase(num, base) {
//   return num.toString(base); // 转换为指定进制
// }
// console.log(convertBase(255, 2)); // 11111111 (二进制)
// console.log(convertBase(255, 16)); // ff (十六进制)
// console.log(convertBase(255, 8)); // 377 (八进制)
// // 数字的格式化
// function formatCurrency(num) {
//   return `$${num.toFixed(2)}`; // 格式化为货币
// }
// console.log(formatCurrency(1234.567)); // $1234.57
// // 数字的科学计数法
// function formatScientific(num) {
//   return num.toExponential(2); // 科学计数法，保留两位小数
// }
// console.log(formatScientific(123456)); // 1.23e+5
// // 数字的千位分隔符
// function formatWithCommas(num) {
//   return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 添加千位分隔符
// }
// console.log(formatWithCommas(1234567890)); // 1,234,567,890
// // 数字的百分比
// function formatPercentage(num) {
//   return `${(num * 100).toFixed(2)}%`; // 格式化为百分比
// }
// console.log(formatPercentage(0.1234)); // 12.34%
// // 数字的时间格式化
// function formatTime(seconds) {
//   let hours = Math.floor(seconds / 3600);
//   let minutes = Math.floor((seconds % 3600) / 60);
//   let secs = seconds % 60;
//   return `${hours}小时 ${minutes}分钟 ${secs}秒`;
// }
// console.log(formatTime(3661)); // 1小时 1分钟 1秒
// // 数字的日期格式化
// function formatDate(date) {
//   let options = { year: 'numeric', month: '2-digit', day: '2-digit' };
//   return date.toLocaleDateString('zh-CN', options); //
//   以中国格式输出日期
// }
// console.log(formatDate(new Date())); // 例如：2023/10/01
// // 数字的日期时间格式化
// function formatDateTime(date) {

function myFunction(name, job) {
  alert("welcome " + name + ", your job is " + job)
}

function mul(a, b) {
  return a * b
}

function displayDate() {
  document.getElementById("demo2").innerHTML = Date()
}

function change1() {
  var str = document.getElementById("demo7").innerHTML
  var txt = str.replace(/microsoft/i, "Runoob")

  document.getElementById("demo7").innerHTML = txt
}

function change2() {
  var str = document.getElementById("demo7").innerHTML
  var pos = str.search(/runoob/i)
  document.getElementById("demo7").innerHTML += "<br> runoob的位置在" + pos
}

function fun1() {
  var message, x
  message = document.getElementById("demo8")
  message.innerHTML = ""
  x = document.getElementById("ex3").value
  try {
    if (x == "") {
      throw "值是空"
    }
    if (isNaN(x)) {
      throw "值不是一个数字"
    }
    x = Number(x)
    if (x > 10) {
      throw "too big"
    }
    if (x < 5) {
      throw "to small"
    }
  } catch (err) {
    message.innerHTML = "error: " + err + "."
  } finally {
    document.getElementById("ex3").value = ""
  }
}

z = 500
document.getElementById("demo10").innerHTML = z
// var y
// elem.innerHTML = y

function validateForm() {
  var x = document.forms["myForm"]["fname"].value
  if (x == null || x == "") {
    alert("需要输入名字")
    return false
  }
  return true
}

function fun2() {
  var input = document.getElementById("id1")
  if (input.checkValidity() == false) {
    document.getElementById("demo9").innerHTML = input.validationMessage
  } else {
    document.getElementById("demo9").innerHTML = "correct"
  }
}

function fun3() {
  var txt = ""
  if (document.getElementById("id2").validity.rangeOverflow) {
    txt = "输入的值太大了"
  }
  document.getElementById("demo11").innerHTML = txt
}

var text =
  '{"sites" : [' +
  '{"name":"Runoob", "url":"www.runoob.com"},' +
  '{"name":"Google", "url":"www.Google.com"},' +
  '{"name":"Taobao", "url":"www.taobao.com"} ]}'

obj = JSON.parse(text)
document.getElementById("id3").innerHTML = obj.sites[1].name + " " + obj.sites[1].url


const x = (x, y) => x * y
document.getElementById("id4").innerHTML += x(6, 5)


var y = findMax(1, 123, 500, 115, 44, 88) 
function findMax() {
    var max = arguments[0]
    len = arguments.length

    if (len < 2) {
        return max
    }

    for (let i = 1; i < len; i++) {
        if(arguments[i] > max) {
            max = arguments[i]
        }
    }

    return max
}
document.getElementById("id5").innerHTML += y

var cnt = 0
function add() {
    return cnt += 1
}
function fun4() {
    document.getElementById("count").innerHTML = `计数器：${add()}`
}

class runoob {
    construct(name, url) {
        this.name = name
        this.url = url
    }
}
let site = new runoob("菜鸟教程", "www.runoob.com")
// document.getElementById("demo").innerHTML = site.name + ":" + site.url

class Site {
  constructor(name) {
    this.name = name
  }

  present() {
    return "我喜欢" + this.sitename
  }
}

class runoob extends Site {
  consturctor(name, age) {
    super(name)
    this.age = age
  }

  show() {
    return this.present() + ", built " + this.age + ' year'
  }
}

let noob = new runoob("菜鸟教程", 5)
document.getElementById("id6").innerHTML = noob.show()

var x1 = document.getElementById("main")
var y1 = document.getElementByTagName("p")
document.write('id = "main" 元素中的第一个段落为' + y1[0].innerHTML)