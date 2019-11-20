(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{250:function(_,t,v){"use strict";v.r(t);var e=v(2),d=Object(e.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("div",{staticClass:"custom-block tip"},[v("p",[_._v("前言：不管在工作中还是业余搬砖中，正常写 Python 相关用到的无非就哪几种格式化工具等；用着用着就用范了，其实认真看看各各大佬们写的源码，还是非常 Beautiful 和 Comfortable 的；为什么呢，还是缺乏学习 :😂: 。因此在此记录一些Python原生的方法函数便捷用法。")]),_._v(" "),v("blockquote",[v("p",[_._v(":👥: 他们是面向对象的 Python 的一切!")])])]),_._v(" "),v("blockquote",[v("p",[_._v("@Calendar Phrases: "),v("em",[v("strong",[_._v("你凝望深渊的时候，深渊也在凝望你!")])])])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img.shields.io/badge/%E4%BD%9C%E8%80%85-ZF-brightgreen",alt:"作者"}}),_._v(" "),v("img",{attrs:{src:"https://img.shields.io/badge/@time-2019.11.06-orange",alt:"@time"}})]),_._v(" "),v("hr"),_._v(" "),v("h3",{attrs:{id:"一、导言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、导言"}},[_._v("#")]),_._v(" 一、导言")]),_._v(" "),v("p",[_._v("他们是可以给你的类增加魔力的特殊方法，如果你的对象实现（重载）了这些方法中的某一个，那么这个方法就会在特殊的情况下被 Python 所调用，你可以定义自己想要的行为，而这一切都是自动发生的。")]),_._v(" "),v("p",[_._v("Python 的魔术方法非常强大，然而随之而来的则是责任。了解正确的方法去使用非常重要！")]),_._v(" "),v("h3",{attrs:{id:"二、方法汇总"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、方法汇总"}},[_._v("#")]),_._v(" 二、方法汇总")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("方法名（基本的魔法方法）")]),_._v(" "),v("th",[_._v("含义")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[v("code",[_._v("__new__(cls[, ...])")])]),_._v(" "),v("td",[_._v("1. "),v("code",[_._v("__new__")]),_._v(" 是在一个对象实例化的时候所调用的第一个方法"),v("br"),_._v("2. 它的第一个参数是这个类，其他的参数是用来直接传递给 "),v("code",[_._v("__init__")]),_._v(" 方法"),v("br"),_._v("3. "),v("code",[_._v("__new__")]),_._v(" 决定是否要使用该 "),v("code",[_._v("__init__")]),_._v(" 方法，因为 "),v("code",[_._v("__new__")]),_._v(" 可以调用其他类的构造方法或者直接返回别的实例对象来作为本类的实例，如果 "),v("code",[_._v("__new__")]),_._v(" 没有返回实例对象，则 "),v("code",[_._v("__init__")]),_._v(" 不会被调用"),v("br"),_._v("4. "),v("code",[_._v("__new__")]),_._v(" 主要是用于继承一个不可变的类型比如一个 tuple 或者 string")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__init__(self[, ...])")])]),_._v(" "),v("td",[_._v("构造器，当一个实例被创建的时候调用的初始化方法")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__del__(self)")])]),_._v(" "),v("td",[_._v("析构器，当一个实例被销毁的时候调用的方法")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__call__(self[, args...])")])]),_._v(" "),v("td",[_._v("允许一个类的实例像函数一样被调用：x(a, b) 调用 x."),v("code",[_._v("__call__(a, b)")])])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__len__(self)")])]),_._v(" "),v("td",[_._v("定义当被 len() 调用时的行为")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__repr__(self)")])]),_._v(" "),v("td",[_._v("定义当被 repr() 调用时的行为")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__str__(self)")])]),_._v(" "),v("td",[_._v("定义当被 str() 调用时的行为")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__bytes__(self)")])]),_._v(" "),v("td",[_._v("定义当被 bytes() 调用时的行为")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__hash__(self)")])]),_._v(" "),v("td",[_._v("定义当被 hash() 调用时的行为")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__bool__(self)")])]),_._v(" "),v("td",[_._v("定义当被 bool() 调用时的行为，应该返回 True 或 False")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__format__(self, format_spec)")])]),_._v(" "),v("td",[_._v("定义当被 format() 调用时的行为")])])])]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("方法名（有关属性方法）")]),_._v(" "),v("th",[_._v("含义")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[v("code",[_._v("__getattr__(self, name)")])]),_._v(" "),v("td",[_._v("定义当用户试图获取一个不存在的属性时的行为")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__getattribute__(self, name)")])]),_._v(" "),v("td",[_._v("定义当该类的属性被访问时的行为")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__setattr__(self, name, value)")])]),_._v(" "),v("td",[_._v("定义当一个属性被设置时的行为")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__delattr__(self, name)")])]),_._v(" "),v("td",[_._v("定义当一个属性被删除时的行为")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__dir__(self)")])]),_._v(" "),v("td",[_._v("定义当 dir() 被调用时的行为")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__get__(self, instance, owner)")])]),_._v(" "),v("td",[_._v("定义当描述符的值被取得时的行为")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__set__(self, instance, value)")])]),_._v(" "),v("td",[_._v("定义当描述符的值被改变时的行为")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__delete__(self, instance)")])]),_._v(" "),v("td",[_._v("定义当描述符的值被删除时的行为")])])])]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("方法名（比较操作符）")]),_._v(" "),v("th",[_._v("含义")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[v("code",[_._v("__lt__(self, other)")])]),_._v(" "),v("td",[_._v("定义小于号的行为：x < y 调用 x."),v("code",[_._v("__lt__(y)")])])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__le__(self, other)")])]),_._v(" "),v("td",[_._v("定义小于等于号的行为：x <= y 调用 x."),v("code",[_._v("__le__(y)")])])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__eq__(self, other)")])]),_._v(" "),v("td",[_._v("定义等于号的行为：x == y 调用 x."),v("code",[_._v("__eq__(y)")])])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__ne__(self, other)")])]),_._v(" "),v("td",[_._v("定义不等号的行为：x != y 调用 x."),v("code",[_._v("__ne__(y)")])])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__gt__(self, other)")])]),_._v(" "),v("td",[_._v("定义大于号的行为：x > y 调用 x."),v("code",[_._v("__gt__(y)")])])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__ge__(self, other)")])]),_._v(" "),v("td",[_._v("定义大于等于号的行为：x >= y 调用 x."),v("code",[_._v("__ge__(y)")])])])])]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("方法名（算数运算符）")]),_._v(" "),v("th",[_._v("含义")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[v("code",[_._v("__add__(self, other)")])]),_._v(" "),v("td",[_._v("定义加法的行为：+")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__sub__(self, other)")])]),_._v(" "),v("td",[_._v("定义减法的行为：-")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__mul__(self, other)")])]),_._v(" "),v("td",[_._v("定义乘法的行为：*")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__truediv__(self, other)")])]),_._v(" "),v("td",[_._v("定义真除法的行为：/")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__floordiv__(self, other)")])]),_._v(" "),v("td",[_._v("定义整数除法的行为：//")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__mod__(self, other)")])]),_._v(" "),v("td",[_._v("定义取模算法的行为：%")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__divmod__(self, other)")])]),_._v(" "),v("td",[_._v("定义当被 divmod() 调用时的行为")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__pow__(self, other[, modulo])")])]),_._v(" "),v("td",[_._v("定义当被 power() 调用或 ** 运算时的行为")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__lshift__(self, other)")])]),_._v(" "),v("td",[_._v("定义按位左移位的行为：<<")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__rshift__(self, other)")])]),_._v(" "),v("td",[_._v("定义按位右移位的行为：>>")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__and__(self, other)")])]),_._v(" "),v("td",[_._v("定义按位与操作的行为：&")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__xor__(self, other)")])]),_._v(" "),v("td",[_._v("定义按位异或操作的行为：^")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__or__(self, other)")])]),_._v(" "),v("td",[_._v("定义按位或操作的行为：")])])])]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("方法名（反运算）")]),_._v(" "),v("th",[_._v("含义")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[v("code",[_._v("__radd__(self, other)")])]),_._v(" "),v("td",[_._v("（与上方相同，当左操作数不支持相应的操作时被调用）")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__rsub__(self, other)")])]),_._v(" "),v("td",[_._v("（与上方相同，当左操作数不支持相应的操作时被调用）")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__rmul__(self, other)")])]),_._v(" "),v("td",[_._v("（与上方相同，当左操作数不支持相应的操作时被调用）")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__rtruediv__(self, other)")])]),_._v(" "),v("td",[_._v("（与上方相同，当左操作数不支持相应的操作时被调用）")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__rfloordiv__(self, other)")])]),_._v(" "),v("td",[_._v("（与上方相同，当左操作数不支持相应的操作时被调用）")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__rmod__(self, other)")])]),_._v(" "),v("td",[_._v("（与上方相同，当左操作数不支持相应的操作时被调用）")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__rdivmod__(self, other)")])]),_._v(" "),v("td",[_._v("（与上方相同，当左操作数不支持相应的操作时被调用）")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__rpow__(self, other)")])]),_._v(" "),v("td",[_._v("（与上方相同，当左操作数不支持相应的操作时被调用）")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__rlshift__(self, other)")])]),_._v(" "),v("td",[_._v("（与上方相同，当左操作数不支持相应的操作时被调用）")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__rrshift__(self, other)")])]),_._v(" "),v("td",[_._v("（与上方相同，当左操作数不支持相应的操作时被调用）")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__rxor__(self, other)")])]),_._v(" "),v("td",[_._v("（与上方相同，当左操作数不支持相应的操作时被调用）")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__ror__(self, other)")])]),_._v(" "),v("td",[_._v("（与上方相同，当左操作数不支持相应的操作时被调用）")])])])]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("方法名（增量赋值运算）")]),_._v(" "),v("th",[_._v("含义")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[v("code",[_._v("__iadd__(self, other)")])]),_._v(" "),v("td",[_._v("定义赋值加法的行为：+=")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__isub__(self, other)")])]),_._v(" "),v("td",[_._v("定义赋值减法的行为：-=")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__imul__(self, other)")])]),_._v(" "),v("td",[_._v("定义赋值乘法的行为：*=")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__itruediv__(self, other)")])]),_._v(" "),v("td",[_._v("定义赋值真除法的行为：/=")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__ifloordiv__(self, other)")])]),_._v(" "),v("td",[_._v("定义赋值整数除法的行为：//=")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__imod__(self, other)")])]),_._v(" "),v("td",[_._v("定义赋值取模算法的行为：%=")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__ipow__(self, other[, modulo])")])]),_._v(" "),v("td",[_._v("定义赋值幂运算的行为：**=")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__ilshift__(self, other)")])]),_._v(" "),v("td",[_._v("定义赋值按位左移位的行为：<<=")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__irshift__(self, other)")])]),_._v(" "),v("td",[_._v("定义赋值按位右移位的行为：>>=")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__iand__(self, other)")])]),_._v(" "),v("td",[_._v("定义赋值按位与操作的行为：&=")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__ixor__(self, other)")])]),_._v(" "),v("td",[_._v("定义赋值按位异或操作的行为：^=")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__ior__(self, other)")])]),_._v(" "),v("td",[_._v("定义赋值按位或操作的行为：")])])])]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("方法名（一元操作符）")]),_._v(" "),v("th",[_._v("含义")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[v("code",[_._v("__neg__(self)")])]),_._v(" "),v("td",[_._v("定义正号的行为：+x")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__pos__(self)")])]),_._v(" "),v("td",[_._v("定义负号的行为：-x")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__abs__(self)")])]),_._v(" "),v("td",[_._v("定义当被 abs() 调用时的行为")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__invert__(self)")])]),_._v(" "),v("td",[_._v("定义按位求反的行为：~x")])])])]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("方法名（类型转换）")]),_._v(" "),v("th",[_._v("含义")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[v("code",[_._v("__complex__(self)")])]),_._v(" "),v("td",[_._v("定义当被 complex() 调用时的行为（需要返回恰当的值）")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__int__(self)")])]),_._v(" "),v("td",[_._v("定义当被 int() 调用时的行为（需要返回恰当的值）")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__float__(self)")])]),_._v(" "),v("td",[_._v("定义当被 float() 调用时的行为（需要返回恰当的值）")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__round__(self[, n])")])]),_._v(" "),v("td",[_._v("定义当被 round() 调用时的行为（需要返回恰当的值）")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__index__(self)")])]),_._v(" "),v("td",[_._v("1. 当对象是被应用在切片表达式中时，实现整形强制转换."),v("br"),_._v("2. 如果你定义了一个可能在切片时用到的定制的数值型,你应该定义 "),v("code",[_._v("__index__")]),_._v("."),v("br"),_._v("3. 如果 "),v("code",[_._v("__index__")]),_._v(" 被定义，则 "),v("code",[_._v("__int__")]),_._v(" 也需要被定义，且返回相同的值")])])])]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("方法名（上下文管理『with 语句』）")]),_._v(" "),v("th",[_._v("含义")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[v("code",[_._v("__enter__(self)")])]),_._v(" "),v("td",[_._v("1. 定义当使用 with 语句时的初始化行为"),v("br"),_._v("2. "),v("code",[_._v("__enter__")]),_._v(" 的返回值被 with 语句的目标或者 as 后的名字绑定")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__exit__(self, exc_type, exc_value, traceback)")])]),_._v(" "),v("td",[_._v("1. 定义当一个代码块被执行或者终止后上下文管理器应该做什么"),v("br"),_._v("2. 一般被用来处理异常，清除工作或者做一些代码块执行完毕之后的日常工作")])])])]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("方法名（容器类型）")]),_._v(" "),v("th",[_._v("含义")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[v("code",[_._v("__len__(self)")])]),_._v(" "),v("td",[_._v("定义当被 len() 调用时的行为（返回容器中元素的个数）")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__getitem__(self, key)")])]),_._v(" "),v("td",[_._v("定义获取容器中指定元素的行为，相当于 self[key]")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__setitem__(self, key, value)")])]),_._v(" "),v("td",[_._v("定义设置容器中指定元素的行为，相当于 self[key] = value")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__delitem__(self, key)")])]),_._v(" "),v("td",[_._v("定义删除容器中指定元素的行为，相当于 del self[key]")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__iter__(self)")])]),_._v(" "),v("td",[_._v("定义当迭代容器中的元素的行为")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__reversed__(self)")])]),_._v(" "),v("td",[_._v("定义当被 reversed() 调用时的行为")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("__contains__(self, item)")])]),_._v(" "),v("td",[_._v("定义当使用成员测试运算符（in 或 not in）时的行为")])])])]),_._v(" "),v("blockquote",[v("p",[_._v("总结总是繁琐的，不过每一个看起来都是那么的有意思。。。")])]),_._v(" "),v("p",[_._v("转载来自："),v("a",{attrs:{href:"https://www.cnblogs.com/seablog/p/7173107.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("https://www.cnblogs.com/seablog/p/7173107.html"),v("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=d.exports}}]);