(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{208:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"vue指令之v-for的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue指令之v-for的使用"}},[s._v("#")]),s._v(" Vue指令之v-for的使用")]),s._v(" "),t("blockquote",[t("p",[s._v("@Calendar Phrases: "),t("em",[t("strong",[s._v("不紧不问即是稳，不散不慢即可成！")])])])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img.shields.io/badge/%E4%BD%9C%E8%80%85-ZF-brightgreen",alt:"作者"}}),s._v(" "),t("img",{attrs:{src:"https://img.shields.io/badge/@time-2019.10.28-orange",alt:"@time"}})]),s._v(" "),t("hr"),s._v(" "),t("h3",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("blockquote",[t("p",[s._v("其实 Vue 已经把前端封装改变到超级简单编写的地步了，此文介绍一下如何使用 Vue 在 html 中迭代数据问题：")])]),s._v(" "),t("h3",{attrs:{id:"使用方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[s._v("#")]),s._v(" 使用方式")]),s._v(" "),t("h4",{attrs:{id:"_1-迭代普通数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-迭代普通数组"}},[s._v("#")]),s._v(" 1.迭代普通数组")]),s._v(" "),t("p",[s._v("(1)首先:"),t("code",[s._v("需要在‘.vue’文件中定义数组对象:")])]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("data:{\n      list:[1,2,3,4,5,6]\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("(2)然后:"),t("code",[s._v("在html中渲染对应标签的 v-for 指令")])]),s._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("p")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("v-for")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("(item,i) in list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("--索引值--{{i}}   --每一项--{{item}}"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("p")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_2-迭代对象数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-迭代对象数组"}},[s._v("#")]),s._v(" 2.迭代对象数组")]),s._v(" "),t("p",[s._v("(1)首先:"),t("code",[s._v("定义数组对象：")])]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("data:{\n      list:[1,2,3,4,5,6],\n      listObj:[\n        {id:1, name:'zf1'},\n        {id:2, name:'zf2'},\n        {id:3, name:'zf3'},\n        {id:4, name:'zf4'},\n        {id:5, name:'zf5'},\n        {id:6, name:'zf6'},\n      ]\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("(2)其次:"),t("code",[s._v("在html中使用 v-for 指令渲染")])]),s._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("p")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("v-for")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("(user,i) in listObj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("--id--{{user.id}}   --name--{{user.name}}"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("p")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"迭代对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#迭代对象"}},[s._v("#")]),s._v(" 迭代对象")]),s._v(" "),t("p",[s._v("(1)首先:"),t("code",[s._v("定义data对象")])]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\ndata:{\n      user:{\n        id:1,\n        age: '45',\n        name:'托尼.史塔克',\n        gender:'男'\n      }\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("(2)其次："),t("code",[s._v("html中使用 v-for 指令渲染")])]),s._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("p")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("v-for")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("(val,key) in user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("--key:--{{key}}--value:--{{val}}"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("p")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"迭代数字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#迭代数字"}},[s._v("#")]),s._v(" 迭代数字")]),s._v(" "),t("p",[s._v("(1)"),t("code",[s._v("循环 count 数值")])]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('\x3c!-- 注意：如果使用v-for迭代数字的话，前面 count 的值从 1 开始--\x3e\n<p v-for="count in 10">这是第{{count}}次循环</p>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("a",{attrs:{href:"https://www.cnblogs.com/mushitianya/p/10505303.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("本文参考文章链接"),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);