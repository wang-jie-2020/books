# Web API

https://developer.mozilla.org/zh-CN/docs/Web/API)


### JavaScript的组成

![1496912475691](./images/1496912475691.png)

#### ECMAScript - JavaScript的核心 

定义了javascript的语法规范

JavaScript的核心，描述了语言的基本语法和数据类型，ECMAScript是一套标准，定义了一种语言的标准与具体实现无关

#### BOM - 浏览器对象模型

一套操作浏览器功能的API

通过BOM可以操作浏览器窗口，比如：弹出框、控制浏览器跳转、获取分辨率等

#### DOM - 文档对象模型

一套操作页面元素的API

DOM可以把HTML看做是文档树，通过DOM提供的API可以对树上的节点进行操作

# BOM

## BOM的概念

BOM(Browser Object Model) 是指浏览器对象模型，浏览器对象模型提供了独立于内容的、可以与浏览器窗口进行互动的对象结构。BOM由多个对象组成，其中代表浏览器窗口的Window对象是BOM的顶层对象，其他对象都是该对象的子对象。

我们在浏览器中的一些操作都可以使用BOM的方式进行编程处理，

比如：刷新浏览器、后退、前进、在浏览器中输入URL等

## BOM的顶级对象window

window是浏览器的顶级对象，当调用window下的属性和方法时，可以省略window
注意：window下一个特殊的属性 window.name

## 对话框

- alert()	提示
- prompt()  输入
- confirm()  确认


## 页面加载事件

- onload

```javascript
window.onload = function () {
  // 当页面加载完成执行
  // 当页面完全加载所有内容（包括图像、脚本文件、CSS 文件等）执行
}
```

- onunload

  不一定被全部浏览器支持

```javascript
window.onunload = function () {
  // 当用户退出页面时执行
}
```

## location对象

location对象是window对象下的一个属性，使用的时候可以省略window对象

location可以获取或者设置浏览器地址栏的URL

#### URL

统一资源定位符 (Uniform Resource Locator, URL)

- URL的组成

```
scheme://host:port/path?query#fragment
scheme:通信协议
	常用的http,ftp,maito等
host:主机
	服务器(计算机)域名系统 (DNS) 主机名或 IP 地址。
port:端口号
	整数，可选，省略时使用方案的默认端口，如http的默认端口为80。
path:路径
	由零或多个'/'符号隔开的字符串，一般用来表示主机上的一个目录或文件地址。
query:查询
	可选，用于给动态网页传递参数，可有多个参数，用'&'符号隔开，每个参数的名和值用'='符号隔开。例如：name=zs
fragment:信息片断
	字符串，锚点.
```

#### location有哪些成员？

- 使用chrome的控制台查看

- 查MDN

  [MDN](https://developer.mozilla.org/zh-CN/)

- 成员

  - assign()/reload()/replace()
  - hash/host/hostname/search/href……

#### 案例

解析URL中的query，并返回对象的形式

```javascript
//    //地址栏上#及后面的内容
//    console.log(window.location.hash);
//    //主机名及端口号
//    console.log(window.location.host);
//    //主机名
//    console.log(window.location.hostname);
//    //文件的路径---相对路径
//    console.log(window.location.pathname);
//    //端口号
//    console.log(window.location.port);
//    //协议
//    console.log(window.location.protocol);
//    //搜索的内容
//    console.log(window.location.search);

//设置跳转的页面的地址
//location.href="http://www.jd.com";//属性----------------->必须记住
//location.assign("http://www.jd.com");//方法
//location.reload();//重新加载--刷新
//location.replace("http://www.jd.com");//没有历史记录
```

## history对象

可以简单的理解为前进、后退的一个记录

- back()
- forward()
- go()

## navigator对象

- userAgent

通过userAgent可以判断用户浏览器的类型

- platform

通过platform可以判断浏览器所在的系统平台类型.

## 定时器

#### setTimeout()和clearTimeout()

在指定的毫秒数到达之后执行指定的函数，只执行一次

```javascript
// 创建一个定时器，1000毫秒后执行，返回定时器的标示
var timerId = setTimeout(function () {
  console.log('Hello World');
}, 1000);

// 取消定时器的执行
clearTimeout(timerId);
```

#### setInterval()和clearInterval()

定时调用的函数，可以按照给定的时间(单位毫秒)周期调用函数

```javascript
// 创建一个定时器，每隔1秒调用一次
var timerId = setInterval(function () {
  var date = new Date();
  console.log(date.toLocaleTimeString());
}, 1000);

// 取消定时器的执行
clearInterval(timerId);
```

# DOM

## DOM的概念

文档对象模型（Document Object Model，简称DOM），是[W3C](http://baike.baidu.com/item/W3C)组织推荐的处理可扩展标志语言的标准编程接口。在网页上，组织页面（或文档）的对象被组织在一个树形结构中，用来表示文档中对象的标准模型就称为DOM。Document Object Model的历史可以追溯至1990年代后期微软与[Netscape](http://baike.baidu.com/item/Netscape)的“浏览器大战”，双方为了在[JavaScript](http://baike.baidu.com/item/JavaScript)与[JScript](http://baike.baidu.com/item/JScript)一决生死，于是大规模的赋予浏览器强大的功能。微软在网页技术上加入了不少专属事物，既有[VBScript](http://baike.baidu.com/item/VBScript)、[ActiveX](http://baike.baidu.com/item/ActiveX)、以及微软自家的[DHTML](http://baike.baidu.com/item/DHTML)格式等，使不少网页使用非微软平台及浏览器无法正常显示。DOM即是当时蕴酿出来的杰作。

DOM又称为文档树模型

![1497154623955](./images/1497154623955.png)

- 文档：一个网页可以称为文档
- 节点：**网页中的所有内容都是节点（标签、属性、文本、注释等）**
- 元素：网页中的标签
- 属性：标签的属性

Note：节点和元素的概念区分，元素可以认为是节点的一种

## DOM之元素

### 元素的查询/获取

| 函数名称               | 含义               | 结果                           |
| ---------------------- | ------------------ | ------------------------------ |
| getElementById         | 指定id的元素       | 1个元素对象                    |
| getElementsByTagName   | 指定标签名称的元素 | 伪数组,里面保存了多个的DOM对象 |
| getElementsByName      | 指定name的元素     | 伪数组,里面保存了多个的DOM对象 |
| getElementsByClassName | 指定class的元素    | 伪数组,里面保存了多个的DOM对象 |
| querySelector          | 指定选择器的元素   | 1个元素对象                    |
| querySelectorAll       | 指定选择器的元素   | 伪数组,里面保存了多个的DOM对象 |

- 这些函数可以组合
- 后4个可能有浏览器兼容问题

### 元素的属性

#### 容易混淆的属性

- innerHTML和innerText

  ```
  innerText主要是设置文本的,设置标签内容,是没有标签的效果的
  innerHTML主要的作用是在标签中设置新的html标签内容,是有标签效果的
  
  innerText可以获取标签中间的文本内容,但是标签中如果还有标签,那么最里面的标签的文本内容也能获取.获取不到标签的,文本可以获取
  innerHTML才是真正的获取标签中间的所有内容
  ```

  ```javascript
  var box = document.getElementById('box');
  box.innerHTML = '我是文本<p>我会生成为标签</p>';
  console.log(box.innerHTML);
  box.innerText = '我是文本<p>我不会生成为标签</p>';
  console.log(box.innerText);
  ```

-  innerText 和value

  innerText 是html标签中的文本内容，会显示在html源文件中中

  value是html标签的值，不会显示在html源文件中，表单提交时用

  设置innerText和value都会得到预期的修改效果，如果是表单则推荐value

- innerText和textContent

  没什么差别，都是标签中的文本内容，兼容性问题而已

  ```javascript
  //设置任意的标签中间的任意文本内容
  function setInnerText(element,text) {
    //判断浏览器是否支持这个属性
    if(typeof element.textContent =="undefined"){//不支持
      element.innerText=text;
    }else{//支持这个属性
      element.textContent=text;
    }
  }
  
  //获取任意标签中间的文本内容
  function getInnerText(element) {
    if(typeof element.textContent=="undefined"){
     return element.innerText;
    }else{
      return element.textContent;
    }
  }
  ```

#### 非表单元素的属性

href、title、id、src、className

- a标签，click事件是在跳转事件前发生的，可以通过return false来阻止默认跳转
- 在js代码中DOM操作的时候,设置元素的类样式不用class关键字,应该使用className


#### 表单元素属性

- value 用于大部分表单元素的内容获取(option除外)

- type 可以获取input标签的类型(输入框或复选框等)

- disabled 禁用属性

- checked 复选框选中属性

- selected 下拉菜单选中属性


#### 总结经验

- 在表单标签中,如果属性和值只有一个,并且值是这个属性本身,那么在写js代码,DOM操作的时候,这个属性值是布尔类型

### 自定义属性操作

自定义属性中可以附加一些信息，更好的进行处理逻辑

- getAttribute() 获取标签行内属性
- setAttribute() 设置标签行内属性，没有则新增
- removeAttribute() 移除标签行内属性

不仅可以用于自定义属性，也可以用于默认属性，即任意属性都可以。

### 样式操作

- 使用style方式设置的样式显示在标签行内
```javascript
var box = document.getElementById('box');
box.style.width = '100px';
box.style.height = '100px';
box.style.backgroundColor = 'red';
```

- 注意

  通过样式属性设置宽高、位置的属性类型是字符串，需要加上px
  

### 类名操作

- 修改标签的className属性相当于直接修改标签的类名
```javascript
var box = document.getElementById('box');
box.className = 'clearfix';
```


### 创建元素的三种方式

#### document.write() 

```javascript
document.write('新设置的内容<p>标签也可以生成</p>');
```

- 缺陷:如果是在页面加载完毕后,此时通过这种方式创建元素,那么页面上存在的所有的内容全部被干掉，一般用不上

#### innerHTML

```javascript
var box = document.getElementById('box');
box.innerHTML = '新内容<p>新标签</p>';
```

#### document.createElement() 

```javascript
var div = document.createElement('div');
document.body.appendChild(div);
```

#### 性能问题

- innerHTML方法由于会对字符串进行解析，需要避免在循环内多次使用。

- 可以借助字符串或数组的方式进行替换，再设置给innerHTML

- 优化后与document.createElement性能相近

## DOM之节点

```javascript
* 文档:document
* 元素:页面中所有的标签,元素---element,  标签----元素---对象
* 节点:页面中所有的内容(标签,属性,文本(文字,换行,空格,回车)),Node
* 根元素:html标签
```

节点的属性：

1. nodeType:节点的类型:

   1---标签

   2---属性

   3---文本

2. nodeName:节点的名字

   标签节点---大写的标签名字

   属性节点---小写的属性名字

   文本节点----#text

3. nodeValue:节点的值

   标签节点---null

   属性节点---属性值

   文本节点---文本内容

### 节点层级

|       属性        |           含义           |
| :---------------: | :----------------------: |
|    parentNode     |         父级节点         |
|   parentElement   |         父级元素         |
|    childNodes     |          子节点          |
|     children      |          子元素          |
|    firstChild     |       第一个子节点       |
| firstElementChild |       第一个子元素       |
|     lastChild     |      最后一个子节点      |
| lastElementChild  |      最后一个子元素      |
|  previousSibling  | 某个元素的前一个兄弟节点 |

### 节点操作

|     属性     |              含义              |
| :----------: | :----------------------------: |
| appendChild  |           追加子元素           |
| insertBefore | 把新的子元素插入到子元素的前面 |
| removeChild  |     移除父级元素中子级元素     |

## 事件

事件：触发-响应机制，Event接口表示在DOM中发生的任何事件，一些是用户生成的（例如鼠标或键盘事件），而其他由API生成。

### 事件三要素

- 事件源:触发(被)事件的元素
- 事件类型:事件的触发方式(例如鼠标点击或键盘点击)
- 事件处理程序:事件触发后要执行的代码(函数形式)

### 注册/移除事件的三种方式 

1. onclick

2. addEventListener

   ```
   对象.addEventListener("事件类型",事件处理函数,bool);--谷歌和火狐支持,IE8不支持
   //参数1:事件的类型---事件的名字,没有on
   //参数2:事件处理函数---函数(命名函数,匿名函数)
   //参数3:true捕获阶段，false冒泡阶段，详见事件的三个阶段，一般都是默认为false
   ```

3. attachEvent

   ```
   对象.attachEvent("有on的事件类型",事件处理函数)--谷歌不支持,火狐不支持,IE8支持
   ```

**addEventListener和attachEvent**

```
1.方法名不一样
2.参数个数不一样addEventListener三个参数,attachEvent两个参数
3.addEventListener 谷歌,火狐,IE11支持,IE8不支持
  attachEvent 谷歌火狐不支持,IE11不支持,IE8支持
4.this不同
	addEventListener 中的this是当前绑定事件的对象
  	attachEvent中的this是window
5.addEventListener中事件的类型(事件的名字)没有on
  attachEvent中的事件的类型(事件的名字)有on
```

```javascript
//例子
var box = document.getElementById('box');
box.onclick = function () {
  console.log('点击后执行');
};
box.onclick = null;

box.addEventListener('click', eventCode, false);
box.removeEventListener('click', eventCode, false);

box.attachEvent('onclick', eventCode);
box.detachEvent('onclick', eventCode);

function eventCode() {
  console.log('点击后执行');
}
```

#### 兼容代码

```javascript
function addEventListener(element, type, fn) {
  if (element.addEventListener) {
    element.addEventListener(type, fn, false);
  } else if (element.attachEvent){
    element.attachEvent('on' + type,fn);
  } else {
    element['on'+type] = fn;
  }
}

function removeEventListener(element, type, fn) {
  if (element.removeEventListener) {
    element.removeEventListener(type, fn, false);
  } else if (element.detachEvent) {
    element.detachEvent('on' + type, fn);
  } else {
    element['on'+type] = null;
  }
}
```

### 事件的三个阶段

1. 捕获阶段，从外向内
2. 当前目标阶段，最开始选择的那个
3. 冒泡阶段，从里向外

事件对象.eventPhase属性可以查看事件触发时所处的阶段

从外向内进行查找，直至找到当前目标；再从当前目标向外依次触发。在这个期间会出现冒泡的问题，比如内层的click事件触发其实也就是外层的click触发，在一些情况下需要阻止这种触发

### 阻止事件传播的方式

- 标准方式 event.stopPropagation();
- IE低版本 event.cancelBubble = true; 标准中已废弃

### 事件对象的属性和方法

- event.type 获取事件类型，比如click、mouseover
- clientX/clientY     所有浏览器都支持，窗口位置
- pageX/pageY       IE8以前不支持，页面位置
- event.target || event.srcElement 用于获取触发事件的元素
- event.preventDefault() 取消默认行为

### 常用的鼠标和键盘事件

- onmouseup 鼠标按键放开时触发
- onmousedown 鼠标按键按下触发
- onmousemove 鼠标移动触发
- onkeyup 键盘按键按下触发
- onkeydown 键盘按键抬起触发
- onmouseout 鼠标移出
- onmouseover 鼠标移入
- onfocus 获取焦点
- onblur 失去焦点


## 特效

### 偏移量

- offsetParent用于获取定位的父级元素
- offsetParent和parentNode的区别

```javascript
var box = document.getElementById('box');
console.log(box.offsetParent);
console.log(box.offsetLeft);
console.log(box.offsetTop);
console.log(box.offsetWidth);
console.log(box.offsetHeight);
```

![1498743216279](./images/1498743216279.png)

### 客户区大小

```javascript
var box = document.getElementById('box');
console.log(box.clientLeft);
console.log(box.clientTop);
console.log(box.clientWidth);
console.log(box.clientHeight);
```

![1498743269100](./images/1498743269100.png)

### 滚动偏移

```javascript
var box = document.getElementById('box');
console.log(box.scrollLeft)
console.log(box.scrollTop)
console.log(box.scrollWidth)
console.log(box.scrollHeight)
```

![1498743288621](./images/1498743288621.png)


## 附录

### 元素的类型

![1497169919418](./images/1497169919418.png)

