!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.simpleUI5=t():e.simpleUI5=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=2)}([function(e,t,n){},function(e,t,n){"use strict";var o=n(0);n.n(o).a},function(e,t,n){"use strict";n.r(t);var o=function(){var e=this.$createElement,t=this._self._c||e;return t("span",{class:this.className,style:this.styleCss,on:{click:this.toggle}},[t("span",{staticClass:"circle"})])};o._withStripped=!0;var r={props:["value","activeColor","inactiveColor"],computed:{className:function(){return this.value?"box open":"box"},styleCss:function(){return this.value&&this.activeColor?"background-color:"+this.activeColor:!this.value&&this.inactiveColor?"background-color:"+this.inactiveColor:void 0}},methods:{toggle:function(){this.$emit("input",!this.value)}}};n(1);function i(e,t,n,o,r,i,s,u){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=c):r&&(c=u?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var a=l.render;l.render=function(e,t){return c.call(t),a(e,t)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,c):[c]}return{exports:e,options:l}}var s=i(r,o,[],!1,null,"1fecdf18",null);s.options.__file="src/components/UiSwitch.vue";var u=s.exports,c=function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n  uitree\n")])};c._withStripped=!0;var l=i({},c,[],!1,null,null,null);l.options.__file="src/components/UiTree.vue";var a=l.exports;n.d(t,"UiSwitch",function(){return u}),n.d(t,"UiTree",function(){return a})}])});