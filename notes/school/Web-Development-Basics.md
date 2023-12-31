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
- [4. 前端框架](#4-前端框架)
  - [4.1 Node.js与Vue.js概述](#41-nodejs与vuejs概述)
  - [4.2 关于Node](#42-关于node)
  - [4.3 Node.js使用示例](#43-nodejs使用示例)
  - [4.4 使用IDEA 2023创建Vue3项目](#44-使用idea-2023创建vue3项目)
  - [4.5 认识Vite+Vue3项目结构](#45-认识vitevue3项目结构)
  - [4.6 Vue3项目工作原理](#46-vue3项目工作原理)
    - [核心组件：App.vue](#核心组件appvue)
    - [入口文件：main.js](#入口文件mainjs)
    - [项目打包与部署](#项目打包与部署)
    - [生产环境部署](#生产环境部署)
  - [4.7 在命令行方式下运行 Vite+Vue3 项目](#47-在命令行方式下运行-vitevue3-项目)
- [5. Vue 3基础语法示例项目](#5-vue-3基础语法示例项目)
  - [vite-vue3-basic](#vite-vue3-basic)
  - [App.vue](#appvue)
  - [router/index.js](#routerindexjs)
  - [main.js](#mainjs)
  - [MVVM.vue](#mvvmvue)
  - [axios.get()](#axiosget)
- [6. 前端框架 Elemet Plus](#6-前端框架-elemet-plus)
  - [6.1 Element Plus](#61-element-plus)
  - [6.2 常用组件（标签）](#62-常用组件标签)
- [7. Java Web开发环境](#7-java-web开发环境)
  - [7.1 Java EE规范概述](#71-java-ee规范概述)
  - [7.2 Maven](#72-maven)


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

> 该项目实现了一个简单的电影信息查询功能。

首先，使用HTML标签定义页面元素，包括文本输入框、标题、海报和描述：

```html
请输入豆瓣电影id：<input type="text" id="idFieId" value="10606004" />
<div id="filmTitle">电影名称</div>
<img id="poster" alt="电影海报" />
<div id="filmDescription">电影描述</div>
```

接着老样子，引入jQuery库：

```html
<script src="js/jquery-1.10.2.min.js"></script>
<script>
   // js代码...
</script>
```

下面我们来看JS代码。

首先，我们使用了`jQuery`的选择器来获取`HTML`中的不同元素，并将它们存储在相应的变量中，以便后续操作。

```JavaScript
let idFieId = $("#idFieId");                    // 获取文本输入框
let filmTitle = $("#filmTitle");                // 获取电影标题元素
let poster = $("#poster");                      // 获取电影海报元素
let filmDescription = $("#filmDescription");    // 获取电影描述元素
```

下面这个代码，用于页面初始化加载时通过 `getFilmInformation` 方法获取电影信息。同时，监听文本输入框的按键事件，当按下回车键时，同样调用 `getFilmInformation` 方法获取电影信息。

```JavaScript
let idv = idFieId.val();
getFilmInformation(idv);            // 初始加载页面时获取电影信息

idFieId.keyup(function (event) {    // 监听文本输入框按键事件
   if (event.keyCode == 13) {       // 如果按下的是回车键
      id = idFieId.val();           // 获取输入框中的电影ID
      getFilmInformation(id);       // 调用获取电影信息的方法
   }
});
```

下面就是`getFilmInformation()`方法的具体实现，该方法用于编写获取电影信息的`AJAX`请求：

```JavaScript
function getFilmInformation(idv) {
   $.ajax({
      url: "https://movie.querydata.org/api",
      data: {
            id: idv,  // 设置请求参数
      },
      success: function (response) {  // 当请求成功时的处理方法
            console.log("成功响应");
            filmTitle.text(response.originalName);  // 更新电影标题
            poster.attr("src", response.data[0].poster);  // 更新电影海报
            filmDescription.html(response.data[0].description);  // 更新电影描述
      },
      error: function () {  // 当请求出错时的处理方法
            alert("请求的服务接口没有正常响应！\n豆瓣后台接口限制频繁访问，两次请求之间的时间间隔大约需要半分钟。");
      }
   });
}
```

在这一部分，我们使用了`jQuery`的 `ajax` 方法发起异步请求。通过指定 `url` 和 `data` 参数，向豆瓣的电影查询接口发送请求。在请求成功时，通过回调函数处理返回的数据，更新页面上的电影标题、海报和描述。如果请求出错，弹出警告提示。

> - **工作原理**：
>
> 当用户输入豆瓣电影的`ID`并点击回车键或按回车键时，`getFilmInformation()`方法会向后端服务器发送请求，请求参数为`id`。后端服务器会根据`id`查询电影信息，并返回给前端页面。前端页面会将后端服务器返回的信息设置到页面元素上，完成电影信息的显示。

![image-20231227233437223](images/Web-Development-Basics/image-20231227233437223.png)

![image-20231227233657401](images/Web-Development-Basics/image-20231227233657401.png)

# 4. 前端框架

## 4.1 Node.js与Vue.js概述

`Node.js`和`Vue.js`是两个广泛应用于`Web`开发的`JavaScript`框架，它们分别用于服务器端和客户端开发，提供了不同的功能和用途。

**Node.js**：

- **定义与特点：** `Node.js`是基于`Chrome V8 JavaScript`引擎构建的运行时环境，用于在服务器端构建高性能的网络应用程序。
- **官网及版本获取：** 访问[Node.js官网](https://nodejs.org/)可以获取最新版本，提供下载和安装指南。

**包管理器npm**：

- **功能与优势：** `Node.js`拥有强大的包管理器`npm`，使得开发者能够轻松地使用各种第三方模块和库来构建复杂的服务器应用。
- **加速安装：** 使用淘宝`NPM`镜像源的`cnpm`可以加速`npm`的安装速度，全局安装命令是：`npm install -g cnpm`。

**Vue.js**：

- **定义与用途：** `Vue.js`是轻量级的`JavaScript`框架，专用于构建交互式的用户界面，采用**组件化**的开发方式，支持**响应式的数据绑定**。
- **核心特性：** 提供**路由管理**、**状态管理**和**构建工具**等功能，使得前端开发更加简便和高效。

**Vue.js前端开发**：

- **本地开发服务器：** 在使用`Vue.js`进行前端开发时，通常需要在本地环境中设置一个开发服务器。`Node.js`提供适用于开发环境的服务器。
- **依赖项管理：** 使用`Node.js`的包管理器`npm`来管理`Vue.js`项目的依赖项，简化项目的构建过程。

## 4.2 关于Node

**默认安装路径**：

- **路径：** 默认情况下，`Node.js`安装路径通常为`C:\Program Files\nodejs\`（在`Windows`系统中）。

**重要命令**：

1. **node命令**
    - **作用：** 用于执行`JavaScript`脚本文件或启动`Node.js`交互式环境。
    - **命令：** `node`

2. **npm命令**
    - **作用：** `Node.js`的包管理器，用于安装、卸载和管理`JavaScript`包。
    - **命令：** `npm`

**测试Node.js安装**：

在命令行方式下，可以通过以下命令测试是否成功安装了`Node.js`：

- **检查Node.js版本**
    ```bash
    node -v
    ```

- **检查npm版本**
    ```bash
    npm -v
    ```

- **检查cnpm版本（若使用淘宝NPM镜像源）**
    ```bash
    cnpm -v
    ```

以上命令会分别显示安装的`Node.js`版本、`npm`版本和`cnpm`版本（若已安装）。如果安装成功，会显示相应的版本号，证明`Node.js`已经正确添加到系统环境变量中，可以在任何路径下使用相关命令。

## 4.3 Node.js使用示例

下面是一个使用`Node.js`搭`建Web`服务器的示例，利用`Express`框架简化了`HTTP`服务器的搭建和路由处理。在这个示例中，我们创建一个简单的服务器，监听端口`3000`，并在根路由("`/`")上返回"`Hello World!`"。

```js
// 引入Express模块
let express = require('express')

// 创建Express实例
let app = express()

// 定义路由，处理根路径请求
app.get('/', function (req, res) {
    res.send('Hello World!')
})

// 配置服务器端口和主机
const PORT = 3000
const HOST = '127.0.0.1'

// 启动HTTP服务器，监听指定端口和主机
let server = app.listen(PORT, HOST, function() {
    let host = server.address().address
    let port = server.address().port
    console.log('Example app listening at http://%s:%s', host, port)
})

// 输出一些提示信息
console.log("Web服务器正在运行中...")
console.log("请打开浏览器访问：http://localhost:3000")
console.log("按Ctrl+C停止Web服务器，返回到命令行方式。")
```

使用该示例，你可以通过在终端中运行`node useExpress.js`来启动`Web`服务器。然后，可以在浏览器中访问`http://localhost:3000`，将看到输出的"`Hello World!`"。最后，通过按下`Ctrl+C`，可以停止`Web`服务器。这个示例展示了使用`Node.js`和`Express`框架快速创建简单`Web`服务器的过程。

## 4.4 使用IDEA 2023创建Vue3项目

确保已经安装`Node.js Ver 20.10.0`。

`Vite`（快速之意）是一个轻量级、运行速度快的前端构建工具，它支持模块热替换。`Vite`默认安装的插件比较少，因而占用磁盘空间比较小。

`IDEA 2023`自带了`Vite`，在市场里搜索到后启用即可。在`IDEA 2023`里，以图形界面方式，**创建项目**、**安装依赖**、**运行项目**。

## 4.5 认识Vite+Vue3项目结构

一个典型的 Vite + Vue3 项目包含以下目录和文件结构：

- **dist：** 项目打包生成的目标文件夹，用于部署到Web服务器上运行。
- **index.html：** 应用程序的入口文件，定义了一个空的 div 元素（通常带有id="app"），该 div 将作为 Vue 应用的挂载点。
- **node_modules：** 存放项目依赖的第三方模块，通过 npm 或 yarn 安装的包将存放在这个目录下。
- **package.json：** 项目配置文件，包含了项目的描述、依赖配置、脚本命令等信息。其中，dependencies 和 devDependencies 字段分别用于指定生产环境和开发环境的依赖项。
- **src：** 主要存放项目的源代码。
  - **App.vue：** 根组件，是应用程序的核心组件。通常包含整体布局和结构，使用路由视图标签 `<router-view/>` 来容纳路由组件，实现页面间的切换。
  - **assets：** 存放应用所需的静态资源文件，如图片、样式文件等。
  - **components：** 存放 Vue 组件，可根据功能或模块划分子文件夹。
  - **main.js：** 构建应用程序的入口文件。在这里，使用 Vue.js 框架创建一个应用程序，并将根组件渲染到指定的 HTML 元素（通常是 index.html 文件中的 id 为 "app" 的 div 元素）。
- **vite.config.js：** Vite 构建工具的配置文件，用于指定 Vite 的特定选项。在打包上线时，可能需要根据需要进行修改，例如配置代理、设置打包输出路径等。

## 4.6 Vue3项目工作原理

### 核心组件：App.vue

- **作用：** 根组件是应用程序的核心组件，提供整体布局和结构。
- **路由切换：** 通常使用路由视图标签 `<router-view/>` 容纳路由组件，实现页面间的切换。
- **组成部分：** 包含模板、CSS样式和脚本，实现特定业务逻辑功能。

### 入口文件：main.js

- **作用：** 构建应用程序的入口文件，用于开发环境中创建Vue实例、配置路由、注册组件和挂载根组件等。
- **构建工具：** 通过构建工具（如Vite等），将源代码打包生成最终的JavaScript文件。
- **功能：** 打包文件包含应用程序的逻辑和组件，最终渲染到index.html对应的页面上。

### 项目打包与部署

- **打包工具：** 使用构建工具（如Vite）对前端项目进行打包和优化。
- **生成文件：** 打包完成后，生成用于生产环境的JavaScript文件。
- **入口文件：** 打包后的index.html作为前端项目的入口文件，定义页面结构和内容。
- **资源引入：** 可通过引入外部资源（如.css和.js）来加载和显示页面。

### 生产环境部署

- **部署流程：** 将打包后的前端项目部署到Web服务器上。
- **源代码保护：** 生产环境中，源代码已被构建、打包和优化，不直接暴露给用户。
- **入口文件加载：** 浏览器加载和解析index.html作为起点，通过引入外部资源加载并显示页面。

Vue的原理在于通过组件化和响应式数据绑定，构建出整个应用的结构和逻辑，并通过构建工具打包生成最终的可在浏览器中运行的文件。这样的设计使得开发者能够更方便地组织代码、管理状态，并在生产环境中进行高效的部署。

## 4.7 在命令行方式下运行 Vite+Vue3 项目

在使用 Vite + Vue 3 项目时，与之前使用 Vue CLI 和 webpack 的方式略有不同。以下是在命令行方式下运行 Vite + Vue 3 项目的步骤：

1. **初始化 npm 项目**

   ```bash
   npm init
   ```

   - 此命令将引导你创建一个 `package.json` 文件，你可以根据提示输入项目名称、版本、描述、入口文件、作者等信息。如果你已经手动修改了 `package.json`，这一步可以省略。

2. **安装项目依赖项**

   ```bash
   npm install
   ```

   - 该命令将读取项目中的 `package.json` 文件，并根据其中的依赖项列表下载并安装所需的软件包。

3. **启动开发服务器**

   ```bash
   npm run dev
   ```

   - 这个命令会启动 Vite 的开发服务器，然后在本地运行你的 Vite + Vue 3 项目。

这种方式使用了 Vite 提供的开发服务器，而不是像 Vue CLI 那样使用 webpack。Vite 具有更快的冷启动时间和更高的性能，特别适合快速的开发和调试。

需要注意的是，与 Vue CLI 不同，Vite 不需要全局安装，因为它的命令是在项目的 `node_modules` 目录中的可执行文件。因此，在命令行中运行 `npm run dev` 就能启动 Vite + Vue 3 项目的开发服务器。

# 5. Vue 3基础语法示例项目

## vite-vue3-basic

项目地址：[vite-vue3-basic](https://github.com/zheng-yi-yi/Java-Web-learning/tree/main/code/school/unit1-Web-Development-Basics/Vite%E6%9E%84%E5%BB%BA%E7%9A%84Vue3%E4%BD%BF%E7%94%A8%E5%9F%BA%E7%A1%80%E9%A1%B9%E7%9B%AE/vite-vue3-basic)

运行效果：

![image-20231229105123118](images/Web-Development-Basics/image-20231229105123118.png)

## App.vue

- **模板标签：**
  - 使用了 `<router-link>` 定义了多个路由链接，每个链接指向不同的路由路径。
  - 包含了一个 `<router-view>` 标签，用于显示匹配到的路由组件。

- **样式：**
  - 使用了 `<style scoped>`，确保样式仅作用于当前组件。

![image-20231229110424565](images/Web-Development-Basics/image-20231229110424565.png)

## router/index.js

- **路由表定义：**
  - 在 `routes` 数组中，每个对象表示一个路由映射，包括路径 (`path`) 和对应的组件 (`component`)。

- **路由对象创建：**
  - 使用 `createRouter` 创建路由对象，设置 `history` 为 `createWebHistory()`，以使用 `HTML5 History` 模式。

- **路由导出：**
  - 导出创建好的路由对象，供 `main.js` 使用。

![image-20231229111001284](images/Web-Development-Basics/image-20231229111001284.png)

## main.js

- **Vue 实例创建：**
  - 使用 `createApp` 创建 `Vue` 实例，并将根组件 `App` 传入。

- **百度地图配置：**
  - 使用 `app.use(BaiduMap, { ak: '' })` 配置百度地图，其中 `ak` 是你的百度应用的 `key`。

- **路由和百度地图插件注册：**
  - 使用 `app.use(router)` 注册路由，使路由链接生效。
  - 使用 `app.mount('#app')` 挂载 `Vue` 实例到 `HTML` 中。

![image-20231229111632556](images/Web-Development-Basics/image-20231229111632556.png)

## MVVM.vue

`Vue.js` 的显著特点是**数据驱动视图**的**响应式设计**，将`Model`和`View`进行**单向绑定**或者**双向绑定**。

在Vue中，单向绑定是指数据流只能从数据源`Model`流向视图`View`，而不能反向流动。当我们用`JavaScript`代码更新`Model`时，`View`就会自动更新。当希望对`HTML`的某些属性进行单向绑定时，只需在该属性前加`v-bind:`指令。

举个例子：

```html
<template>
    <div>
        <!-- 三种单向绑定的方式 -->
        <p>{{message}}</p>                     <!-- 插值 方式 -->
        <p v-text="message"></p>               <!-- v-text -->
        <p><button v-on:click="reverseMessage">逆转消息</button></p>    <!-- 测试逆转字符串的方法 -->
        <button v-on:click="setUrl">设置教学网站网址</button>&nbsp;     <!-- 点击后调用setUrl方法来设置网址 -->
        <a v-bind:href="url">访问教学网站</a>   <!-- v-bind方式 -->
    </div>
</template>

<script>
export default {
    //定义JSON格式的数据（Vue对象的属性）
    data() {
        return {
            message: 'Hello Vue!',
            url: "",
        }
    },
    //定义方法（Vue对象的方法）
    methods: {
        // 自定义方法一，用于反转字符串
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('') // (1)将字符串拆分成字符数组(2)反序(3)拼接成字符串
        },
        // 自定义方法二，用于设置网站
        setUrl() {
            this.url = 'http://www.wustwzx.com'
            alert('已经设置了教学网站网址，可以访问啦...')
        },
    },
}
</script>
```

![单向绑定](images/Web-Development-Basics/单向绑定.gif)

这是一个使用Vue.js的简单示例，展示了三种单向绑定的方式：插值、v-text指令和v-bind指令。

1. **插值（Interpolation）:**
   ```html
   <p>{{message}}</p>
   ```
   这里使用了双大括号`{{}}`来进行插值，将Vue实例中的`message`数据动态地显示在`<p>`元素中。

2. **v-text指令:**
   ```html
   <p v-text="message"></p>
   ```
   这里使用了`v-text`指令，它会将元素的textContent属性与Vue实例中的`message`数据进行绑定，实现单向绑定。

3. **v-bind指令:**
   ```html
   <a v-bind:href="url">访问教学网站</a>
   ```
   这里使用了`v-bind`指令，将`<a>`元素的href属性与Vue实例中的`url`数据进行关联。点击按钮调用`setUrl`方法后，`url`会被设置为`http://www.wustwzx.com`，从而动态地更新`<a>`元素的href属性。

```javascript
data() {
    return {
        message: 'Hello Vue!',
        url: "",
    };
},
methods: {
   reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
   },
   setUrl() {
         this.url = 'http://www.wustwzx.com';
         alert('已经设置了教学网站网址，可以访问啦...');
   },
},
```

我们来看脚本中的代码：

1. **数据（data）:**
   - 在`data`函数中定义了两个属性：`message`和`url`。
   - 属性是Vue实例的响应式数据，当它们的值发生变化时，相关的视图会自动更新。
   - `message`用于展示一条初始消息，`url`用于存储网站的URL。

2. **方法（methods）:**
   - 在`methods`对象中定义了两个方法：`reverseMessage`和`setUrl`。
   - `reverseMessage`方法用于将`message`属性中的字符串进行反转，这会触发视图更新。
   - `setUrl`方法用于设置`url`属性为`http://www.wustwzx.com`，并弹出一个提示框。

看完单向绑定，我们再来看双向绑定是什么？

双向绑定指的是将数据从模型`Model`同步到视图`View`的同时，也能将`View`绑定到`Model`上，即将用户的输入同步回模型。

Vue 中的双向绑定是通过 `v-model` 指令实现的，主要用于表单元素，使用 `v-model` 可以在视图和模型之间实现简洁的双向绑定，而不需要显式地编写大量的事件监听器和数据更新逻辑。

我们来看这个例子：

```vue
<template>
   <div>
      <!-- 单向绑定，用于展示数据 -->
      <p>{{message}}</p>

      <!-- 双向绑定：实现Model与View之间的双向绑定 -->
      <p>双向绑定示例：<input v-model="message"></p>
   </div>
</template>

<script>
export default {
   data() {
      return {
         message: 'Hello Vue!',
      }
   },
}
</script>
```

效果如下：

![双向绑定](images/Web-Development-Basics/双向绑定.gif)

## axios.get()

我们来学一下`axios.get()`。代码如下：

```vue
<!-- DoubanFilm.vue -->
<template>
   <div><input v-model="filmId">&nbsp;<button @click="getDoubanFileInfo">获取豆瓣电影信息</button></div>
   <div>{{filmName}}</div>
   <div><img v-bind:src="filmPoster"></div>
   <div>{{filmDescription}}</div>
</template>

<script>
import axios from 'axios'
export default {
   data(){
      return{
         filmId:10606004,
         filmName:'电影名称',
         filmPoster:'电影海报',
         filmDescription:'电影描述'
      }
   },
   methods: {
      getDoubanFileInfo(){
         //使用豆瓣电影后台接口；使用params实现带参数传递的get请求
         axios.get("https://movie.querydata.org/api",{
               params:{  //params称为异步GET请求的参数对象。https://movie.querydata.org/api?id=10606004不通用
                  id:this.filmId
               }
         }).then(res=>{
               console.log(res.data)
               this.filmName=res.data.originalName;this.filmPoster=res.data.data[0].poster
               this.filmDescription=res.data.data[0].description
         }).catch(err=>{
               console.log(err)
               alert("请求失败！\n可能的原因如下：\n（1）两次请求的间隔未超过半分钟\n（2）请求的url或参数错误")
         })
      }
   },
   mounted() {
      this.getDoubanFileInfo()
   }
}
</script>
```

这段代码是一个基本的 `Vue` 组件，通过 axios 库进行异步请求获取豆瓣电影信息，并在页面上显示。

![image-20231229150003467](images/Web-Development-Basics/image-20231229150003467.png)

下面是对代码的解释：

1. **导入 Axios 模块**:

   ```javascript
   import axios from 'axios'
   ```

   通过 `import` 语句导入 axios 模块，以便在组件中使用。

2. **数据初始化**:

   ```javascript
   data() {
      return {
         filmId: 10606004,
         filmName: '电影名称',
         filmPoster: '电影海报',
         filmDescription: '电影描述'
      }
   }
   ```

   在 Vue 组件的 `data` 钩子中初始化了组件的数据，包括 `filmId`（豆瓣电影的ID）、`filmName`、`filmPoster`、`filmDescription`。

3. **异步请求方法**:

   ```javascript
   methods: {
      getDoubanFileInfo() {
         // 使用豆瓣电影后台接口；使用 params 实现带参数传递的 GET 请求
         axios.get("https://movie.querydata.org/api", {
            params: {
                  id: this.filmId
            }
         }).then(res => {
            console.log(res.data)
            this.filmName = res.data.originalName;
            this.filmPoster = res.data.data[0].poster;
            this.filmDescription = res.data.data[0].description;
         }).catch(err => {
            console.log(err)
            alert("请求失败！\n可能的原因如下：\n（1）两次请求的间隔未超过半分钟\n（2）请求的 URL 或参数错误")
         })
      }
   }
   ```

   - 在 `getDoubanFileInfo` 方法中，使用 `axios` 的 `get` 方法发送 GET 请求到豆瓣电影后台接口。
   - `params` 参数用于传递 `GET` 请求的参数，这里传递了豆瓣电影的`ID`（filmId）。
   - 使用 `then` 处理请求成功的情况，更新组件的数据。
   - 使用 `catch` 处理请求失败的情况，打印错误信息并弹出提示框。

4. **模板**:

   ```html
   <template>
       <div>
           <input v-model="filmId">&nbsp;
           <button @click="getDoubanFileInfo">获取豆瓣电影信息</button>
       </div>
       <div>{{ filmName }}</div>
       <div><img v-bind:src="filmPoster"></div> 
       <div>{{ filmDescription }}</div>
   </template>
   ```

   - 在模板中，使用 `v-model` 将输入框的值与 `filmId` 数据进行双向绑定。
   - 使用 `@click` 监听按钮点击事件，触发 `getDoubanFileInfo` 方法。
   - 展示豆瓣电影信息，包括电影名称、海报和描述。

5. **生命周期钩子**:

   ```javascript
   mounted() {
       this.getDoubanFileInfo()
   }
   ```

   在 `Vue` 组件的 `mounted` 生命周期钩子中调用 `getDoubanFileInfo` 方法，保证组件被挂载后立即执行异步请求。

这段代码实现了一个简单的 `Vue` 组件，通过 `Axios` 发送异步请求获取豆瓣电影信息，并在页面上进行展示。

好，我们来总结一下使用 `axios.get()` 发送 GET 请求时的模板：

```javascript
// 导入axios模块
import axios from 'axios';

axios.get('api_url', {
   params: {
      key1: 'value1',
      key2: 'value2',
      // ...
   }
}).then(response=>{
      // 处理成功响应
      // ...
   })
   .catch({
      // 处理错误响应
      // ...
   });
```

记录：

1. `axios.get('your_api_url', {...})`：使用 `axios.get()` 方法发送 GET 请求，第一个参数是请求的 API 地址，第二个参数是可选的配置对象。
2. `params`：在配置对象中，可以设置 `params` 属性传递请求参数。
3. `.then(response => {...})`：处理成功响应的回调函数，`response` 包含了响应的详细信息，其中的 `data` 属性包含了响应的主体内容。
4. `.catch(error => {...})`：处理错误响应的回调函数，`error` 包含了错误的详细信息。

请根据实际情况替换 `'your_api_url'` 和请求参数，以及根据需要配置请求头。

> 在Web项目前后端分离开发时，大量使用post请求且参数使用JSON格式。此时，不需要params。

# 6. 前端框架 Elemet Plus

> Element UI
> 
> - **UI框架特点：** Element UI是一种强大的UI框架，提供了众多与HTML相应的标签，用于美化页面元素并简化布局。
> - **目的：** 旨在为Vue.js项目提供丰富的UI组件，提高开发效率并提供一致的用户界面。

## 6.1 Element Plus

安装Element Plus依赖

为了在Vue项目中使用Element Plus框架，需要运行以下npm命令安装其依赖：

```bash
npm install element-plus
```

在main.js中配置

为了确保不同组件能够方便使用Element Plus框架，需要在`main.js`文件中进行相应配置：

```javascript
// main.js

// 引入Vue和Element Plus样式
import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

// 创建Vue实例并使用Element Plus
const app = createApp(App);
app.use(ElementPlus);

// ...其他配置

// 挂载Vue实例
app.mount('#app');
```

## 6.2 常用组件（标签）

为了实现页面美化和布局的方便，Element UI提供了一系列的组件，这些组件的标签名均以`el-`打头。

以下是一些常用的Element UI组件：

1. **布局容器**
   - `<el-container>`：整体布局容器
   - `<el-header>`：页面头部容器
   - `<el-aside>`：侧边栏容器
   - `<el-main>`：主要内容区域
   - `<el-footer>`：页面底部容器

2. **菜单**
   - `<el-menu>`：菜单容器
   - `<el-menu-item>`：菜单项

3. **表单**
   - `<el-form>`：表单容器
   - `<el-form-item>`：表单项
   - `<el-input>`：输入框
   - `<el-button>`：按钮

4. **标签页（选项卡）**
   - `<el-tabs>`：标签页容器
   - `<el-tab-pane>`：标签页

5. **对话框**
   - `<el-dialog>`：对话框容器

6. **超链接**
   - `<el-link>`：超链接

7. **表格**
   - `<el-table>`：表格容器
   - `<el-table-column>`：表格列

8. **下拉列表**
   - `<el-select>`：下拉列表容器
   - `<el-option>`：下拉列表选项

9. **确认框**
   - `this.$confirm()`：确认框

10. **消息框**
    - `this.$message()`：消息框
        - `this.$message.success()`：成功消息
        - `this.$message.info()`：信息消息
        - `this.$message.error()`：错误消息
        - `this.$message.warning()`：警告消息

**注意：**
1. Vue双向绑定语法`v-model`在Element UI里简化为`:model`。
2. 对于`this.$message.info()`，`this`指的是Vue实例，`$message`是Element UI提供的全局方法，`info()`是`$message`的一个具体方法。


# 7. Java Web开发环境

## 7.1 Java EE规范概述

Java EE（Java Platform, Enterprise Edition）是一套用于企业级应用开发的工业标准，基于Java语言，提供了一系列的技术规范，旨在加速设计、开发、装配及部署企业级应用程序。

以下是Java EE规范中的一些关键概念和技术组成部分：

1. **概念与性质：**
   - Java EE并非一个产品，而是一系列的技术规范，为企业级开发提供了一致的标准。
   - 不是一种编程语言，而是基于Java语言的规范集合。

2. **Servlet：**
   - Servlet是一种运行于Web服务器端的Java应用程序。
   - 能够动态响应客户端请求，用于生成动态的Web页面。

3. **JSP（Java Server Page）：**
   - JSP技术是Java EE的组成部分，提供了处理用户请求的JSP内置对象。
   - 支持JSTL标签和EL表达式等，用于简化在JSP页面中的Java编码。

4. **JavaBean：**
   - JavaBean是一些可移植、可重用的Java实体类。
   - 可以组装到应用程序中，促进模块化和可维护性。

5. **其他技术和规范：**
   - **JPA（Java Persistence API）标准：** 用于实现Java对象与数据库之间的映射。
   - **应用服务器：** 例如Tomcat、JBoss等，用于运行和管理Java EE应用。
   - **应用程序框架：** 如Spring、Spring MVC、MyBatis、Hibernate等，提供了额外的功能和便利。

6. **JBoss：**
   - JBoss作为Java EE应用服务器，不仅是Servlet容器，还是EJB（Enterprise Java Beans）容器。
   - 对Tomcat进行本地化，将Tomcat以内嵌的方式集成到JBoss中，提供更丰富的企业级功能。

Java EE规范的使用有助于开发者构建可伸缩、可维护、安全可靠的企业级应用。各个技术规范的结合使用提供了全面的解决方案，从而满足了复杂企业级应用的需求。

## 7.2 Maven

**传统方式 vs Maven**：

在传统的Java项目开发中，管理第三方jar包需要手工查找、复制，并配置系统环境变量ClassPath，可能导致繁琐和版本更新时的问题。相比之下，使用Maven可以更便捷地进行项目构建和依赖管理。

**Maven概述**：

- **定义：** Maven意为知识的积累，是由Maven团队维护的项目管理工具。
- **远程仓库：** 存储了开源的jar包，地址为[http://www.mvnrepository.com](http://www.mvnrepository.com)。
- **依赖坐标：** 通过依赖坐标，可以在Maven仓库中下载相应的jar包。

**Maven的优势**：

- **统一管理：** 可以统一管理项目的jar包依赖，使多个工程共享这些jar包。
- **自动下载：** Maven会自动下载项目所依赖的其他jar包，并添加到项目的构建路径（Build Path）。
- **pom.xml文件：** Maven项目都有一个`pom.xml`文件，通过它可以添加新的依赖，自动下载相应的jar包。

**Maven的基本工作**：

- **项目构建：** 包括项目清理、编译测试、生成报告、打包和部署等工作。
- **依赖管理：** 自动下载和管理项目所需的第三方jar包。
- **pom.xml文件：** Maven项目的核心配置文件，用于定义项目的结构、依赖和构建过程。

**Maven与IDEA集成**：

- **IDEA集成：** IDEA内置了Maven，可以通过Settings查看和配置。
- **阿里云镜像站点：** 为获得较快的下载速度，可以使用国内的阿里云镜像站点，并将配置文件`settings.xml`复制到Windows用户的`.m2`文件夹。

通过Maven，开发者可以更高效地进行Java项目的构建、依赖管理，以及打包部署等工作，提高了项目的可维护性和共享性。