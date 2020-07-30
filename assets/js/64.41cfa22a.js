(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{223:function(n,s,a){"use strict";a.r(s);var e=a(2),t=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[n._v("前言：pandas中行列转换")]),n._v(" "),a("blockquote",[a("p",[n._v("此文献经转载修改")])])]),n._v(" "),a("h1",{attrs:{id:"pandas中行列转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pandas中行列转换"}},[n._v("#")]),n._v(" pandas中行列转换")]),n._v(" "),a("p",[n._v("①列转行方法")]),n._v(" "),a("ul",[a("li",[n._v("stack函数：pandas.DataFrame.stack(self, level=-1, dropna=True)")])]),n._v(" "),a("p",[n._v("通过?pandas.DataFrame.stack命令查看帮助文档")]),n._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("Signature: pandas.DataFrame.stack(self, level=-1, dropna=True)\nDocstring:\nPivot a level of the (possibly hierarchical) column labels, returning a\nDataFrame (or Series in the case of an object with a single level of\ncolumn labels) having a hierarchical index with a new inner-most level\nof row labels.\nThe level involved will automatically get sorted.\n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br")])]),a("p",[n._v("a、对于普通的DataFrame而言，直接列索引转换到最内层行索引，生一个Series对象")]),n._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("In [16]: import pandas as pd\n    ...: import numpy as np\n    ...: df = pd.DataFrame(np.arange(6).reshape(2,3),index=['AA','BB'],columns=\n    ...: ['three','two','one'])\n    ...: df\n    ...:\nOut[16]:\n    three  two  one\nAA      0    1    2\nBB      3    4    5\n \nIn [17]: df.stack()\nOut[17]:\nAA  three    0\n    two      1\n    one      2\nBB  three    3\n    two      4\n    one      5\ndtype: int32\n \nIn [18]: df.stack(level=0)\nOut[18]:\nAA  three    0\n    two      1\n    one      2\nBB  three    3\n    two      4\n    one      5\ndtype: int32\n \nIn [19]: df.stack(level=-1)\nOut[19]:\nAA  three    0\n    two      1\n    one      2\nBB  three    3\n    two      4\n    one      5\ndtype: int32\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br")])]),a("p",[n._v("b、对于层次化索引的DataFrame而言，可以将指定的索引层转换到行上，默认是将最内层的列索引转换到最内层行")]),n._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("In [31]: import pandas as pd\n    ...: import numpy as np\n    ...: df = pd.DataFrame(np.arange(8).reshape(2,4),index=['AA','BB'],columns=\n    ...: [['two','two','one','one'],['A','B','C','D']])\n    ...: df\n    ...:\nOut[31]:\n   two    one\n     A  B   C  D\nAA   0  1   2  3\nBB   4  5   6  7\n \nIn [32]: df.stack()\nOut[32]:\n      one  two\nAA A  NaN  0.0\n   B  NaN  1.0\n   C  2.0  NaN\n   D  3.0  NaN\nBB A  NaN  4.0\n   B  NaN  5.0\n   C  6.0  NaN\n   D  7.0  NaN\n \nIn [33]: df.stack(level=0)\nOut[33]:\n          A    B    C    D\nAA one  NaN  NaN  2.0  3.0\n   two  0.0  1.0  NaN  NaN\nBB one  NaN  NaN  6.0  7.0\n   two  4.0  5.0  NaN  NaN\n \nIn [34]: df.stack(level=1)\nOut[34]:\n      one  two\nAA A  NaN  0.0\n   B  NaN  1.0\n   C  2.0  NaN\n   D  3.0  NaN\nBB A  NaN  4.0\n   B  NaN  5.0\n   C  6.0  NaN\n   D  7.0  NaN\n \nIn [35]: df.stack(level=-1)\nOut[35]:\n      one  two\nAA A  NaN  0.0\n   B  NaN  1.0\n   C  2.0  NaN\n   D  3.0  NaN\nBB A  NaN  4.0\n   B  NaN  5.0\n   C  6.0  NaN\n   D  7.0  NaN\n \nIn [36]: df.stack(level=[0,1])\nOut[36]:\nAA  one  C    2.0\n         D    3.0\n    two  A    0.0\n         B    1.0\nBB  one  C    6.0\n         D    7.0\n    two  A    4.0\n         B    5.0\ndtype: float64\n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br"),a("span",{staticClass:"line-number"},[n._v("55")]),a("br"),a("span",{staticClass:"line-number"},[n._v("56")]),a("br"),a("span",{staticClass:"line-number"},[n._v("57")]),a("br"),a("span",{staticClass:"line-number"},[n._v("58")]),a("br"),a("span",{staticClass:"line-number"},[n._v("59")]),a("br"),a("span",{staticClass:"line-number"},[n._v("60")]),a("br"),a("span",{staticClass:"line-number"},[n._v("61")]),a("br"),a("span",{staticClass:"line-number"},[n._v("62")]),a("br"),a("span",{staticClass:"line-number"},[n._v("63")]),a("br"),a("span",{staticClass:"line-number"},[n._v("64")]),a("br"),a("span",{staticClass:"line-number"},[n._v("65")]),a("br"),a("span",{staticClass:"line-number"},[n._v("66")]),a("br"),a("span",{staticClass:"line-number"},[n._v("67")]),a("br"),a("span",{staticClass:"line-number"},[n._v("68")]),a("br")])]),a("ul",[a("li",[n._v("unstack函数：pandas.DataFrame.unstack(self, level=-1, fill_value=None)")])]),n._v(" "),a("p",[n._v("通过?pandas.DataFrame.unstack命令查看帮助文档")]),n._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("Signature: pandas.DataFrame.unstack(self, level=-1, fill_value=None)\nDocstring:\nPivot a level of the (necessarily hierarchical) index labels, returning\na DataFrame having a new level of column labels whose inner-most level\nconsists of the pivoted index labels. If the index is not a MultiIndex,\nthe output will be a Series (the analogue of stack when the columns are\nnot a MultiIndex).\nThe level involved will automatically get sorted.\n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br")])]),a("p",[n._v("a、对于普通的DataFrame而言，直接将列索引转换到行索引的最外层索引，生成一个Series对象")]),n._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("In [20]: df\nOut[20]:\n    three  two  one\nAA      0    1    2\nBB      3    4    5\n \nIn [21]: df.unstack()\nOut[21]:\nthree  AA    0\n       BB    3\ntwo    AA    1\n       BB    4\none    AA    2\n       BB    5\ndtype: int32\n \nIn [22]: df.unstack(0)\nOut[22]:\nthree  AA    0\n       BB    3\ntwo    AA    1\n       BB    4\none    AA    2\n       BB    5\ndtype: int32\n \nIn [23]: df.unstack(-1)\nOut[23]:\nthree  AA    0\n       BB    3\ntwo    AA    1\n       BB    4\none    AA    2\n       BB    5\ndtype: int32\nb、对于层次化索引的DataFrame而言，和stack函数类似，似乎把两层索引当作一个整体，当level为列表时报错\nIn [37]: df\nOut[37]:\n   two    one\n     A  B   C  D\nAA   0  1   2  3\nBB   4  5   6  7\n \nIn [38]: df.unstack()\nOut[38]:\ntwo  A  AA    0\n        BB    4\n     B  AA    1\n        BB    5\none  C  AA    2\n        BB    6\n     D  AA    3\n        BB    7\ndtype: int32\n \nIn [39]: df.unstack(0)\nOut[39]:\ntwo  A  AA    0\n        BB    4\n     B  AA    1\n        BB    5\none  C  AA    2\n        BB    6\n     D  AA    3\n        BB    7\ndtype: int32\n \nIn [40]: df.unstack(1)\nOut[40]:\ntwo  A  AA    0\n        BB    4\n     B  AA    1\n        BB    5\none  C  AA    2\n        BB    6\n     D  AA    3\n        BB    7\ndtype: int32\n \nIn [41]: df.unstack(-1)\nOut[41]:\ntwo  A  AA    0\n        BB    4\n     B  AA    1\n        BB    5\none  C  AA    2\n        BB    6\n     D  AA    3\n        BB    7\ndtype: int32\n \nIn [42]: df.unstack(level=[0,1])\n \nIndexError: Too many levels: Index has only 1 level, not 2\n那再试下level=5，发现也正常，这里的level怎么理解？--遗留问题\nIn [44]: df\nOut[44]:\n   two    one\n     A  B   C  D\nAA   0  1   2  3\nBB   4  5   6  7\n \nIn [45]: df.unstack(level=5)\nOut[45]:\ntwo  A  AA    0\n        BB    4\n     B  AA    1\n        BB    5\none  C  AA    2\n        BB    6\n     D  AA    3\n        BB    7\ndtype: int32\n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br"),a("span",{staticClass:"line-number"},[n._v("55")]),a("br"),a("span",{staticClass:"line-number"},[n._v("56")]),a("br"),a("span",{staticClass:"line-number"},[n._v("57")]),a("br"),a("span",{staticClass:"line-number"},[n._v("58")]),a("br"),a("span",{staticClass:"line-number"},[n._v("59")]),a("br"),a("span",{staticClass:"line-number"},[n._v("60")]),a("br"),a("span",{staticClass:"line-number"},[n._v("61")]),a("br"),a("span",{staticClass:"line-number"},[n._v("62")]),a("br"),a("span",{staticClass:"line-number"},[n._v("63")]),a("br"),a("span",{staticClass:"line-number"},[n._v("64")]),a("br"),a("span",{staticClass:"line-number"},[n._v("65")]),a("br"),a("span",{staticClass:"line-number"},[n._v("66")]),a("br"),a("span",{staticClass:"line-number"},[n._v("67")]),a("br"),a("span",{staticClass:"line-number"},[n._v("68")]),a("br"),a("span",{staticClass:"line-number"},[n._v("69")]),a("br"),a("span",{staticClass:"line-number"},[n._v("70")]),a("br"),a("span",{staticClass:"line-number"},[n._v("71")]),a("br"),a("span",{staticClass:"line-number"},[n._v("72")]),a("br"),a("span",{staticClass:"line-number"},[n._v("73")]),a("br"),a("span",{staticClass:"line-number"},[n._v("74")]),a("br"),a("span",{staticClass:"line-number"},[n._v("75")]),a("br"),a("span",{staticClass:"line-number"},[n._v("76")]),a("br"),a("span",{staticClass:"line-number"},[n._v("77")]),a("br"),a("span",{staticClass:"line-number"},[n._v("78")]),a("br"),a("span",{staticClass:"line-number"},[n._v("79")]),a("br"),a("span",{staticClass:"line-number"},[n._v("80")]),a("br"),a("span",{staticClass:"line-number"},[n._v("81")]),a("br"),a("span",{staticClass:"line-number"},[n._v("82")]),a("br"),a("span",{staticClass:"line-number"},[n._v("83")]),a("br"),a("span",{staticClass:"line-number"},[n._v("84")]),a("br"),a("span",{staticClass:"line-number"},[n._v("85")]),a("br"),a("span",{staticClass:"line-number"},[n._v("86")]),a("br"),a("span",{staticClass:"line-number"},[n._v("87")]),a("br"),a("span",{staticClass:"line-number"},[n._v("88")]),a("br"),a("span",{staticClass:"line-number"},[n._v("89")]),a("br"),a("span",{staticClass:"line-number"},[n._v("90")]),a("br"),a("span",{staticClass:"line-number"},[n._v("91")]),a("br"),a("span",{staticClass:"line-number"},[n._v("92")]),a("br"),a("span",{staticClass:"line-number"},[n._v("93")]),a("br"),a("span",{staticClass:"line-number"},[n._v("94")]),a("br"),a("span",{staticClass:"line-number"},[n._v("95")]),a("br"),a("span",{staticClass:"line-number"},[n._v("96")]),a("br"),a("span",{staticClass:"line-number"},[n._v("97")]),a("br"),a("span",{staticClass:"line-number"},[n._v("98")]),a("br"),a("span",{staticClass:"line-number"},[n._v("99")]),a("br"),a("span",{staticClass:"line-number"},[n._v("100")]),a("br"),a("span",{staticClass:"line-number"},[n._v("101")]),a("br"),a("span",{staticClass:"line-number"},[n._v("102")]),a("br"),a("span",{staticClass:"line-number"},[n._v("103")]),a("br"),a("span",{staticClass:"line-number"},[n._v("104")]),a("br"),a("span",{staticClass:"line-number"},[n._v("105")]),a("br"),a("span",{staticClass:"line-number"},[n._v("106")]),a("br"),a("span",{staticClass:"line-number"},[n._v("107")]),a("br"),a("span",{staticClass:"line-number"},[n._v("108")]),a("br"),a("span",{staticClass:"line-number"},[n._v("109")]),a("br"),a("span",{staticClass:"line-number"},[n._v("110")]),a("br"),a("span",{staticClass:"line-number"},[n._v("111")]),a("br"),a("span",{staticClass:"line-number"},[n._v("112")]),a("br"),a("span",{staticClass:"line-number"},[n._v("113")]),a("br"),a("span",{staticClass:"line-number"},[n._v("114")]),a("br")])]),a("ul",[a("li",[n._v("melt函数：pandas.melt(frame, id_vars=None, value_vars=None, var_name=None, value_name='value', col_level=None)")])]),n._v(" "),a("p",[n._v("通过?pandas.melt查看帮助文档")]),n._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("\nSignature: pandas.melt(frame, id_vars=None, value_vars=None, var_name=None, value_name='value', col_level=None)\nDocstring:\n\"Unpivots\" a DataFrame from wide format to long format, optionally leaving\nidentifier variables set.\n \nThis function is useful to massage a DataFrame into a format where one\nor more columns are identifier variables (`id_vars`), while all other\ncolumns, considered measured variables (`value_vars`), are \"unpivoted\" to\nthe row axis, leaving just two non-identifier columns, 'variable' and\n'value'.\n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br")])]),a("p",[n._v("首先拿普通的DataFrame实验下，看看melt函数怎么转换的")]),n._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("In [46]: df = pd.DataFrame(np.arange(8).reshape(2,4),index=['AA','BB'],columns=\n    ...: ['A','B','C','D'])\n    ...: df\n    ...:\nOut[46]:\n    A  B  C  D\nAA  0  1  2  3\nBB  4  5  6  7\n \nIn [47]: pd.melt(df,id_vars=['A','C'],value_vars=['B','D'],var_name='B|D',value\n    ...: _name='(B|D)_value')\nOut[47]:\n   A  C B|D  (B|D)_value\n0  0  2   B            1\n1  4  6   B            5\n2  0  2   D            3\n3  4  6   D            7\n \nIn [48]: pd.melt(df,id_vars=['A'],value_vars=['B','D'],var_name='B|D',value_nam\n    ...: e='(B|D)_value')\nOut[48]:\n   A B|D  (B|D)_value\n0  0   B            1\n1  4   B            5\n2  0   D            3\n3  4   D            7\n \nIn [49]: pd.melt(df,id_vars=['A'],value_vars=['B'],var_name='B',value_name='B_v\n    ...: alue')\nOut[49]:\n   A  B  B_value\n0  0  B        1\n1  4  B        5\n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br")])]),a("p",[n._v("结论：从上述结果可以看出，id_vars可以理解为结果需要保留的原始列，value_vars可以理解为需需要列转行的列名；var_name把列转行的列变量重新命名，默认为variable；value_name列转行对应变量的值的名称")]),n._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("In [50]: df1 = pd.DataFrame(np.arange(8).reshape(2,4),columns=[list('ABCD'),lis\n    ...: t('EFGH')])\n    ...: df1\n    ...:\nOut[50]:\n   A  B  C  D\n   E  F  G  H\n0  0  1  2  3\n1  4  5  6  7\n \nIn [51]: pd.melt(df1,col_level=0,id_vars=['A'],value_vars=['D'])\nOut[51]:\n   A variable  value\n0  0        D      3\n1  4        D      7\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br")])]),a("p",[n._v("②行转列方法")]),n._v(" "),a("ul",[a("li",[n._v("unstack函数：pandas.DataFrame.unstack(self, level=-1, fill_value=None)")])]),n._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("In [26]: df2=df.stack()\n    ...: df2\n    ...:\nOut[26]:\nAA  three    0\n    two      1\n    one      2\nBB  three    3\n    two      4\n    one      5\ndtype: int32\n \nIn [27]: df2.unstack()\nOut[27]:\n    three  two  one\nAA      0    1    2\nBB      3    4    5\n \nIn [28]: df2.unstack(0)\nOut[28]:\n       AA  BB\nthree   0   3\ntwo     1   4\none     2   5\n \nIn [29]: df2.unstack(1)\nOut[29]:\n    three  two  one\nAA      0    1    2\nBB      3    4    5\n \nIn [30]: df2.unstack(-1)\nOut[30]:\n    three  two  one\nAA      0    1    2\nBB      3    4    5\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);