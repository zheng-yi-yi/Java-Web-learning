<div align="center">

<h1>Web开发基础</h1>

</div>


# 目录

- [目录](#目录)
- [Web前端技术及其发展](#web前端技术及其发展)
- [Java EE开发环境](#java-ee开发环境)
  - [IDEA 2023](#idea-2023)
  - [常用快捷操作](#常用快捷操作)
- [Web前端基础](#web前端基础)
  - [HTMLAndCSS项目](#htmlandcss项目)
  - [JavaScriptAndjQuery项目](#javascriptandjquery项目)


# Web前端技术及其发展

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

# Java EE开发环境

## IDEA 2023

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

## 常用快捷操作

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

# Web前端基础

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

## HTMLAndCSS项目

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
>

---

## JavaScriptAndjQuery项目

项目地址：[JavaScriptAndjQuery项目](https://github.com/zheng-yi-yi/Java-Web-learning/tree/main/code/school/unit1-Web-Development-Basics/JavaScriptAndjQuery)

项目主页：

![image-20231227205918033](images/Web-Development-Basics/image-20231227205918033.png)
