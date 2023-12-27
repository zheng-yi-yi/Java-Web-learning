<div align="center">

<h1>Web开发基础</h1>

</div>


# 目录

- [目录](#目录)
- [1. Web前端技术及其发展](#1-web前端技术及其发展)
- [2. Java EE开发环境](#2-java-ee开发环境)
  - [2.1 IDEA 2023](#21-idea-2023)
  - [2.2 常用快捷操作](#22-常用快捷操作)
- [3. Web前端基础](#3-web前端基础)
  - [3.1 HTMLAndCSS项目](#31-htmlandcss项目)
  - [3.2 JavaScriptAndjQuery项目](#32-javascriptandjquery项目)
    - [3.2.1 知识点](#321-知识点)
    - [3.2.2 代码学习](#322-代码学习)
  - [3.3 jQuery Ajax项目 — douban](#33-jquery-ajax项目--douban)
    - [3.3.1 知识点](#331-知识点)
    - [3.3.2 代码学习](#332-代码学习)


# 1. Web前端技术及其发展

1. **网络应用体系结构演变：**
   - 传统`C/S`（客户端/服务端）架构向`B/S`（浏览器/服务端）架构的演变。
   - `S`代表服务端，`C`代表客户端，`B`代表浏览器。

2. **网页设计技术：**
   - `HTML+CSS+JavaScript`是原生的网页设计技术。
   - `HTML`提供标签用于设计页面元素。
   - `CSS`用于修饰页面元素外观和进行布局。
   - `JavaScript`实现页面的交互效果或动态效果。

3. **浏览器开发者工具：**
   - 浏览器程序通过解释`.html`文档代码呈现页面。
   - 使用开发者模式，按功能键`F12`进入，有助于调试`Web`项目。
   - `Google`浏览器是推荐的用于Web项目调试的浏览器。

4. **前端技术库和框架：**
   - `jQuery`是`JavaScript`库，简化`JavaScript`的使用。
   - `Vue3+Element Plus`是基于`Node`的新`Web`前端框架技术。
   - `Vue3+Element Plus`提供高效的代码复用，使界面更加美观。

5. **技术术语解释：**
   - `HTML`是超文本标记语言，用于设计页面元素。
   - `CSS`是层叠样式表，用于修饰页面元素外观和进行布局。
   - `JavaScript`是一种脚本语言，用于实现页面的交互效果或动态效果。

事实上，JavaWeb开发涵盖了前端和后端技术，通过不断演进的体系结构和新技术，提供了更高效、美观的Web应用开发解决方案。

> [返回目录 ↑ ](#目录)
>
---

# 2. Java EE开发环境

## 2.1 IDEA 2023

1. **IntelliJ IDEA概述：**
   - `IntelliJ IDEA`是由`JetBrains`公司开发的集成开发环境（`IDE`）。
   - 公司总部位于捷克共和国的首都布拉格。
   - `JetBrains`以严谨著称的东欧程序员为主。

2. **应用领域：**
   - `IntelliJ IDEA`可用于`Java`项目、`Java EE`项目和`Spring Boot`项目的开发。
   - 也可作为`Web`前端项目的集成开发环境。

3. **下载和访问：**
   - 访问[JetBrains官网](http://www.jetbrains.com/idea/)，可以找到`IntelliJ IDEA`的下载链接。

4. **版本和许可：**
   - `IDEA`有多个版本，其中社区版（`Community`）是免费的，但功能有限制。
   - 社区版适用于`Java`开发，但不能进行`Java EE`开发。
   - 终极版（`Ultimate`）是收费版本，功能无限制。
   - 终极版有免费试用版（`EAP`），可免费使用一个月。
   - 持有`edu`邮箱的用户，申请帐号后可免费使用终极版一年。

5. **效率和方便性：**
   - 相对于免费的`Eclipse-JEE`，`IntelliJ IDEA`在使用上更加方便，提高开发效率。

小结：IntelliJ IDEA是一款强大的集成开发环境，广泛用于Java和Web开发，提供了方便、高效的开发工具，尤其在东欧程序员中有较高的声誉。

> [返回目录 ↑ ](#目录)
>
---

## 2.2 常用快捷操作

1. **双击选词：** 通过双击可以选择一个单词。
2. **`Ctrl+C`：** 复制选中的内容。
3. **`Ctrl+V`：** 粘贴已复制的内容。
4. **`Ctrl+X`：** 剪切选中的内容。
5. **`Ctrl+D`：** 复制当前行至下一行，相当于复制和粘贴两个操作的组合。
6. **`Ctrl+Y`：** 删除光标所在的当前行，无需先拖拽选取，操作迅速。
7. **代码注释及取消：**
   - 单行注释：`Ctrl+Shift+/`
   - 取消单行注释：`Ctrl+/`
8. **重写（实现）接口方法或抽象方法：** 使用联机提示或快捷键`Ctrl+O`。
9. **`Alt+回车`：** 提供自动修正错误、自动导包、实例提示等功能。
10. **`Ctrl+H`：** 查看类或接口的继承关系。
11. **参数提示：** 在方法调用时使用`Ctrl+P`来显示参数提示。
12. **接口方法体生成：** 在接口中模糊输入方法名后选择。
13. **显示类或程序结构：** 单击左侧工具`Structure`按钮。
14. **当前代码查找：**
    - 局部查找：`Ctrl+F`
    - 全局查找：`Ctrl+Shift+F`

> [返回目录 ↑ ](#目录)
>
---

# 3. Web前端基础

`Web`前端基础主要涵盖`HTML5`、`CSS3`以及`客户端脚本`等部分：

1. **HTML5（超文本标记语言第五版）：**
   - `HTML5`是用于构建和呈现Web页面内容的标记语言。
   - 引入了一系列新的语义化标签，如`<header>`、`<nav>`、`<section>`等，使页面结构更清晰。
   - 提供了新的表单元素，多媒体支持（如`<audio>`和`<video>`），以及本地存储能力。
   - 支持`Canvas`和`SVG`等图形技术，使得在`Web`页面上绘制图形和动画更为灵活。

2. **CSS3（层叠样式表第三版）：**
   - `CSS3`用于样式化`HTML`元素，实现页面的外观和布局设计。
   - 引入了新的选择器，如属性选择器、伪类和伪元素，增强了样式选择的灵活性。
   - 提供了过渡（`Transition`）和动画（`Animation`）等功能，实现页面元素的平滑过渡和动态效果。
   - 引入了`Flexbox`和`Grid`等布局模型，使得页面布局更为直观和灵活。

3. **客户端脚本：**
   - 客户端脚本通常指的是`JavaScript`，是一种用于在`Web`浏览器中实现交互性和动态效果的脚本语言。
   - 可以通过嵌入在HTML中的`<script>`标签引入。
   - 用于响应用户的操作，处理表单验证、页面动态变化和与服务器的异步通信（`AJAX`）等。
   - 现代的前端开发中，常使用一些流行的`JavaScript`框架和库，如`React`、`Vue.js`和`Angular`，来简化开发和提高代码的可维护性。

> [返回目录 ↑ ](#目录)
>

---

## 3.1 HTMLAndCSS项目

项目地址：[HTMLAndCSS项目](https://github.com/zheng-yi-yi/Java-Web-learning/tree/main/code/school/unit1-Web-Development-Basics/HTMLAndCSS)

项目主页：

![image-20231227204911559](images/Web-Development-Basics/image-20231227204911559.png)

项目知识点如下：

1. **标签：**
   - `<meta>`: 用于设置`HTML`文档的元数据，如字符集等。
   - `<title>`: 定义文档的标题。
   - `<div>`: 用于定义`HTML`文档中的分区或区块，常用于组织和布局页面内容。
   - `<a>`: 定义超链接。

2. **属性：**
   - `charset`: 设置字符集，通常用于 `<meta>` 标签。
   - `id`: 用于唯一标识`HTML`元素。
   - `href`: 定义超链接的目标地址。
   - `target`: 定义超链接的打开方式，如在新窗口中打开 (`_blank`)。
   - `src`: 定义嵌入的资源的地址，如 `<iframe>` 中的网页地址。
   - `name`: 为 `<iframe>` 定义一个名称，以便其他链接可以在该框架中打开。

3. **选择器：**
   - `*`: 通用选择器，选择所有元素。
   - `#`: `ID`选择器，选择具有特定`ID`的元素。
   - `.`: 类选择器，选择具有特定类的元素。

4. **度量单位：**
   - `%`: 百分比单位，相对于父元素的大小。
   - `em`: 相对于当前字体尺寸的单位。
   - `px`: 像素，绝对长度单位。

5. **CSS+Div布局：**
   - `box-sizing`: 定义盒模型的`-sizing`属性，常用于保持元素大小的稳定和可控。
   - `margin`, `padding`: 外边距和内边距，用于控制元素与其他元素之间的空间。
   - `float`: 定义元素的浮动方式，用于实现元素的水平并排。
   - `background-image`: 设置元素的背景图片。

6. **弹性布局：**
   - `display: flex;`: 定义弹性容器，使其子元素成为弹性项，实现灵活的布局。
   - `justify-content`: 定义弹性容器中子项的水平排列方式。
   - `align-items`: 定义弹性容器中子项的垂直对齐方式。

> [返回目录 ↑ ](#目录)

---

## 3.2 JavaScriptAndjQuery项目

项目地址：[JavaScriptAndjQuery项目](https://github.com/zheng-yi-yi/Java-Web-learning/tree/main/code/school/unit1-Web-Development-Basics/JavaScriptAndjQuery)

项目主页：

![image-20231227205918033](images/Web-Development-Basics/image-20231227205918033.png)

### 3.2.1 知识点

1. **客户端脚本：**
   - 客户端脚本能够被浏览器程序解释执行，用于实现交互效果或动态效果。
   - 有原生`JavaScript`和`jQuery`库两种使用方式。
   - 在页面中使用成对的`<script>…</script>`标签定义客户端脚本。
   - 在客户端脚本中，可以使用浏览器对象或JavaScript内置对象。

2. **jQuery库：**
   - 引入`jQuery`库后，可以使用`$(选择器)`将页面元素对象转换成`jQuery`对象。
   - `jQuery`是原生`JavaScript`的脚本库，简化了`DOM`操作、事件处理和`AJAX`等操作。

3. **Web存储（localStorage和sessionStorage）：**
   - `HTML5`对`window`对象增加了属性`localStorage`和`sessionStorage`，以及方法`openDatabase()`，是客户端存储数据的一种新方式，统称为Web存储。
   - `localStorage`用于永久存储数据，可被同一域名下的所有页面访问。
   - `sessionStorage`用于在当前会话期间存储数据，在浏览器会话结束时会被自动清除。
   - 这两者常用于浏览器会话存储，`JWT`（`JSON Web Token`）技术也需要使用`sessionStorage`对象。

4. **Web存储的常用方法：**
   - `setItem(key, value)`：向存储添加一个键值对。
   - `getItem(key)`：从存储中获取键名对应的值。
   - `removeItem(key)`：从存储中移除键名对应的键值对。

5. **JavaScript基本数据类型：**
   - 数值（`number`）、字符串（`string`）、逻辑真与假（`boolean`）、未定义（`undefined`）、空值（`null`）。
   - J`avaScript`是一种弱类型语言，变量的数据类型可以在运行时动态地改变。

6. **let和const：**
   - `ES6`引入的新特性，解决了使用`var`时存在的一些问题。
   - `let`用于声明变量，可被重新赋值。
   - `const`用于声明常量，一旦赋值就不能再改变。

7. **对象类型和引用传递：**
   - J`avaScript`可以使用对象类型（`object`），其赋值操作是按引用传递的。
   - 数组和函数也属于对象类型，具有属性和方法。
   - 对象是基于原型（`prototype`）的，而不是基于类。
   - `JavaScript`内置的原型对象有`Date`、`Array`、`String`和`Math`等，其中前三需要使用`new`创建其实例。

8. **浏览器对象：**
   - 在客户端脚本编程中，通常会使用浏览器对象，如`window`、`document`和`location`等。

9. **调试和错误处理：**
   - 代码错误时，可以使用`console.log(var)`在控制台输出信息。
   - 打开浏览器调试工具，查看控制台Console里的错误信息。

10. **前后端分离项目开发：**
   - 可以使用`jQuery Ajax`简化前后端交互。

> [返回目录 ↑ ](#目录)

---


### 3.2.2 代码学习

首先，`index.html` 页面中有一个元素：

```html
<div id="dtps">date and time</div>
```

这里定义了一个具有`id`属性为`"dtps"`的`div`元素，初始显示文本为`"date and time"`。

现在，我们要在页面中显示实时的日期和时间。

方法一：使用**原生的方式**来更新页面上的时间显示

我们来看这段`JavaScript`代码：

```javascript
// (1) 得到 DOM对象
let dtps=document.getElementById("dtps")
// (2) 定义函数，刷新页面元素
function displayDT(){
   dtps.innerHTML=new Date().toLocaleString()
}
// (3) 实时时间显示
window.setInterval("displayDT()",1000)
```

记录：

- `let dtps=document.getElementById("dtps")`: 使用`JavaScript`获取`id`为"`dtps`"的元素对象，并将其赋值给变量`dtps`。
- `function displayDT() { ... }`: 定义了一个名为`displayDT`的函数，该函数用于更新页面上`id`为"`dtps`"的元素内容。
- `dtps.innerHTML=new Date().toLocaleString()`: 在`displayDT`函数中，通过`innerHTML`属性将元素的内容更新为当前日期和时间，使用toLocaleString方法以本地格式显示日期和时间。
- `window.setInterval("displayDT()",1000)`: 使用`setInterval`方法（定时执行指定的函数），每隔`1000`毫秒（即`1`秒）调用一次`displayDT`函数，实现实时更新。

这是使用原生JavaScript方式。

方法二是使用`jQuery`库的方式，可以极大简化操作。

注意，如果使用`jQuery`方式，需要先引入`jQuery`库文件：

```html
<!--引入了jQuery库，使得页面中可以使用jQuery的功能 -->
<script src="js/jquery-1.10.2.min.js"></script>
```

下面，使用`jQuery`选择器和方法来操作DOM元素。

```javascript
// (1) 将DOM元素封装成jQuery对象
let dtps = $("#dtps")
// (2) 定义JavaScript函数的另一种方式，属于对象类型
let displayDateAndTime = function () {
   // Date是JavaScript内置的动态对象
   let dt = new Date().toLocaleString()
   // 刷新页面元素
   dtps.html(dt)
}
// (3) 调用window对象的定时器方法，实现实时时间显示
window.setInterval(displayDateAndTime, 1000)
```

- `let dtps = $("#dtps")`: 使用`jQuery`选择器将`ID`为 "`dtps`" 的元素封装成`jQuery`对象，以便后续操作。
- `let displayDateAndTime = function () { ... }`: 定义一个函数 `displayDateAndTime`，用于获取当前时间并更新页面元素。
- `new Date().toLocaleString()`: 获取当前时间，并将其转换为字符串形式，包括日期和时间。
- `dtps.html(dt)`: 使用`jQuery`的`html`方法将获取到的时间字符串更新到页面元素中。
- `window.setInterval(displayDateAndTime, 1000)`: 使用`setInterval`方法，每隔`1`秒（1000毫秒）执行一次 `displayDateAndTime` 函数，实现实时更新时间的效果。

对比如下：

| 操作         | 原生JavaScript                             | jQuery                         |
| ------------ | ------------------------------------------ | ------------------------------ |
| DOM对象获取  | 使用 `document.getElementById` 获取DOM元素 | 使用 `$` 函数来选择DOM元素     |
| 刷新页面元素 | 使用 `innerHTML` 属性更新元素内容          | 使用 `html()` 方法更新元素内容 |

---

这里看一下**浏览器会话存储**知识点。代码如下：

```html
<meta charset="UTF-8" />
<title>浏览器存储localStorage与localStorage</title>
<script>
    // 检测浏览器是否支持sessionStorage
    let ss = window.sessionStorage; // 获取本地会话存储对象

    if (ss) {
        // 如果支持sessionStorage
        document.writeln("浏览器支持sessionStorage! <br/>");

        // 使用sessionStorage存储数据
        ss.setItem("kc1", "Android开发");

        // 提示用户查看sessionStorage信息的方法
        document.writeln("打开浏览器调试，从【Application】选项查验已经建立的sessionStorage信息...<br/>");
        
        // 提示用户关闭浏览器后再打开站点，不能看到sessionStorage信息。
        document.writeln("关闭浏览器后再打开站点，不能看到sessionStorage信息。");
    } else {
        // 如果不支持sessionStorage，则弹出提示
        alert("浏览器不支持sessionStorage! ");
    }

    // 检测浏览器是否支持localStorage
    let ls = window.localStorage; // 获取本地存储对象

    if (ls) {
        // 如果支持localStorage
        document.writeln("<hr/>");
        document.writeln("浏览器支持localStorage ! <br>");

        // 使用localStorage存储数据
        ls.setItem("kc2", "Java桌面开发");
        ls.setItem("kc3", "Java EE开发");

        // 提示用户查看localStorage信息的方法
        document.writeln("打开浏览器调试，从【Application】选项查验已经建立的localStorage信息... <br/> ");
        
        // 提示用户关闭浏览器后再打开站点而不必访问本页面，仍然可查验到localStorage信息。
        document.writeln("关闭浏览器后再打开站点而不必访问本页面，仍然可查验到localStorage信息。");
    } else {
        // 如果不支持localStorage，则弹出提示
        alert("浏览器不支持localStorage! ");
    }
</script>
```

记录：

- 通过`window.sessionStorage`和`window.localStorage`可以获取浏览器的本地会话存储和本地存储对象。
- 使用`setItem`方法向`sessionStorage`和`localStorage`中添加数据。
- 使用`document.writeln`在页面上输出信息，说明浏览器是否支持存储和如何查看存储的数据。
- 如果浏览器不支持`sessionStorage`或`localStorage`，则通过`alert`弹出提示。

> [返回目录 ↑ ](#目录)
> 
---


## 3.3 jQuery Ajax项目 — douban

项目地址：[jQuery Ajax项目 — douban](https://github.com/zheng-yi-yi/Java-Web-learning/tree/main/code/school/unit1-Web-Development-Basics/douban)


主页效果：

![image-20231227224438006](images/Web-Development-Basics/image-20231227224438006.png)

### 3.3.1 知识点

1. **Ajax（Asynchronous JavaScript and XML）:**
   - `Ajax`是一种使用`JavaScript`的异步请求和响应机制。
   - 它允许在不刷新整个页面的情况下，通过局部更新页面的内容来实现动态加载数据，提高用户体验。

2. **jQuery Ajax:**
   - `jQuery Ajax`提供了简化`Ajax`使用的方法`$.ajax()`，使得异步请求更加方便。
   - 通过使用`jQuery Ajax`，可以更容易地处理各种`Ajax`请求和处理响应。

3. **JSON（JavaScript Object Notation）:**
   - `JSON`是一种轻量级的数据交换格式，使用键值对的方式来表示数据。
   - 独立于编程语言，易于阅读和编写，并能够被大多数编程语言轻松处理。
   - 使用大括号`{}`表示对象，方括号`[]`表示数组，键名必须使用双引号`""`括起来。

4. **豆瓣电影网站和API:**
   - 访问豆瓣电影网站（`https://movie.douban.com/`），选择电影后可以得到电影的`id`（观察浏览器地址栏的参数）。
   - 通过访问`https://movie.querydata.org/api?id=10606004`，可以获取电影相关信息的`JSON`格式数据。

5. **Postwoman:**
   - `Postwoman`是一个用于测试`API`的工具，可用于测试豆瓣的后台接口并格式化返回的数据信息，地址：[Postwoman](https://github.com/zheng-yi-yi/Java-Web-learning/tree/main/code/school/tools/postwoman.v.1.1.7)

6. **JSON在线解析:**
   - 网站`https://www.json.cn`提供了在线解析`JSON`数据的服务，以折叠式方式查看数据信息，有助于直观地了解JSON结构。

### 3.3.2 代码学习

打开项目中的`useJson.html`页面，效果如下：

![image-20231227225736781](images/Web-Development-Basics/image-20231227225736781.png)
