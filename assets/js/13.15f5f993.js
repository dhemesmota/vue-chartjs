(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{148:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("グローバルメソッドはインポートして使用します。")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),a("p",[t._v("インスタンスメソッドは独自のチャートコンポーネント内で使用することができます。")]),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("HTMLの凡例を作成するヘルパー関数")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),a("p",[t._v("Chart.jsでは、グローバルプラグインとインラインプラグインを定義できます。 グローバルプラグインは、"),a("a",{attrs:{href:"http://www.chartjs.org/docs/latest/developers/plugins.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chart.js docs"),a("OutboundLink")],1),t._v("で説明されているように"),a("code",[t._v("vue-chartjs")]),t._v("でも問題なく動作します。")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),a("p",[t._v("Chart.js のインスタンスを作成して描画します。")]),t._v(" "),t._m(21),t._v(" "),t._m(22),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"コーディング-レファレンス"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#コーディング-レファレンス","aria-hidden":"true"}},[this._v("#")]),this._v(" コーディング レファレンス")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[this._v("#")]),this._v(" Props")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("vue-chartjs")]),this._v("によって提供されるコンポーネントにはいくつかの基本的なプロパティが定義されています。 "),s("code",[this._v("拡張")]),this._v("しているので、それらは "),s("em",[this._v("見えない")]),this._v(" ですが、それらの値は上書きすることができます：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Prop名")]),t._v(" "),a("th",[t._v("説明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("width")]),t._v(" "),a("td",[t._v("チャート幅")])]),t._v(" "),a("tr",[a("td",[t._v("height")]),t._v(" "),a("td",[t._v("チャート高さ")])]),t._v(" "),a("tr",[a("td",[t._v("chart-id")]),t._v(" "),a("td",[t._v("canvas要素のid")])]),t._v(" "),a("tr",[a("td",[t._v("css-classes")]),t._v(" "),a("td",[t._v("囲んでいる div の css クラス (文字列)")])]),t._v(" "),a("tr",[a("td",[t._v("styles")]),t._v(" "),a("td",[t._v("囲んでいる div の css クラス (オブジェクト)")])]),t._v(" "),a("tr",[a("td",[t._v("plugins")]),t._v(" "),a("td",[t._v("chartjs プラグイン (配列)")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[this._v("#")]),this._v(" Events")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("reactData")]),this._v("または"),s("code",[this._v("reactProp")]),this._v("ミックスインが使用されている場合、以下のイベントが発行されます。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Event名")]),t._v(" "),a("th",[t._v("説明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("chart:render")])]),t._v(" "),a("td",[t._v("ミックスインが完全にレンダリングしたとき")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("chart:destroy")])]),t._v(" "),a("td",[t._v("ミックスインがチャートオブジェクトインスタンスを削除したとき")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("chart:update")])]),t._v(" "),a("td",[t._v("ミックスインが再レンダリングの代わりに更新をしたとき")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("labels:update")])]),t._v(" "),a("td",[t._v("labelsがセットされたとき")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("xlabels:update")])]),t._v(" "),a("td",[t._v("xlabelsがセットされたとき")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("ylabels:update")])]),t._v(" "),a("td",[t._v("ylabelsがセットされたとき")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"global-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#global-methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Global Methods")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"generatechart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generatechart","aria-hidden":"true"}},[this._v("#")]),this._v(" generateChart")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("code",[t._v("Function")])]),t._v(" "),a("li",[a("strong",[t._v("Arguments")]),t._v(": "),a("code",[t._v("chart-id")]),t._v(", "),a("code",[t._v("chart-type")])]),t._v(" "),a("li",[a("strong",[t._v("Usage:")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" generateChart "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vue-chartjs'")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// First argument is the chart-id, second the chart type.")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CustomLine "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("generateChart")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'custom-line'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'LineWithLine'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"instance-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instance-methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Instance Methods")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"generatelegend"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generatelegend","aria-hidden":"true"}},[this._v("#")]),this._v(" generateLegend()")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("code",[t._v("Function")])]),t._v(" "),a("li",[a("strong",[t._v("Arguments")]),t._v(": "),a("code",[t._v("none")])]),t._v(" "),a("li",[a("strong",[t._v("Usage:")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Line "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vue-chartjs'")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Line"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  props"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'datasets'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'options'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  data"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    htmlLegend"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("mounted")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("renderChart")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("datasets"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("htmlLegend "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("generateLegend")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"プラグインの追加"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#プラグインの追加","aria-hidden":"true"}},[this._v("#")]),this._v(" プラグインの追加")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("インラインプラグインを追加したい場合に備えて、"),s("code",[this._v("vue-chartjs")]),this._v("は"),s("code",[this._v("addPlugin()")]),this._v("と呼ばれるヘルパーメソッドを公開します。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("renderChart()")]),this._v("メソッドの前に "),s("code",[this._v("addPlugin()")]),this._v("を呼び出すべきです。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("code",[t._v("Function")])]),t._v(" "),a("li",[a("strong",[t._v("Arguments")]),t._v(": "),a("code",[t._v("Array")]),t._v(" of Plugins")]),t._v(" "),a("li",[a("strong",[t._v("Usage:")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("mounted")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addPlugin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    id"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'my-plugin'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    beforeInit"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chart"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"renderchart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#renderchart","aria-hidden":"true"}},[this._v("#")]),this._v(" renderChart()")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("code",[t._v("Function")])]),t._v(" "),a("li",[a("strong",[t._v("Arguments")]),t._v(": "),a("code",[t._v("Chart Data")]),t._v(", "),a("code",[t._v("Chart Options")])]),t._v(" "),a("li",[a("strong",[t._v("Usage:")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("mounted")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("renderChart")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    labels"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'January'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'February'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    datasets"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        label"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Data One'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        backgroundColor"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'#f87979'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        data"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("40")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("20")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      responsive"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"chart-js-オブジェクト"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chart-js-オブジェクト","aria-hidden":"true"}},[this._v("#")]),this._v(" Chart.js オブジェクト")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("独自のチャートコンポーネント内からChart.jsのオブジェクトには "),s("code",[this._v("this.$data._chart")]),this._v(" でアクセスできます。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"canvas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#canvas","aria-hidden":"true"}},[this._v("#")]),this._v(" Canvas")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Canvas要素には "),s("code",[this._v("this.$refs.canvas")]),this._v(" でアクセスできます。")])}],!1,null,null,null);e.options.__file="README.md";s.default=e.exports}}]);