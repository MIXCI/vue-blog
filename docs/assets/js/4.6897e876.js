(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{168:function(t,n,e){},169:function(t,n,e){},170:function(t,n,e){},171:function(t,n,e){},173:function(t,n,e){"use strict";e(168)},174:function(t,n,e){"use strict";e(169)},175:function(t,n,e){var r=e(65),i=e(58),o=e(176),s=e(180);t.exports=function(t,n){if(null==t)return{};var e=r(s(t),(function(t){return[t]}));return n=i(n),o(t,e,(function(t,e){return n(t,e[0])}))}},176:function(t,n,e){var r=e(33),i=e(177),o=e(28);t.exports=function(t,n,e){for(var s=-1,a=n.length,u={};++s<a;){var c=n[s],p=r(t,c);e(p,c)&&i(u,o(c,t),p)}return u}},177:function(t,n,e){var r=e(178),i=e(28),o=e(31),s=e(19),a=e(13);t.exports=function(t,n,e,u){if(!s(t))return t;for(var c=-1,p=(n=i(n,t)).length,l=p-1,f=t;null!=f&&++c<p;){var v=a(n[c]),g=e;if("__proto__"===v||"constructor"===v||"prototype"===v)return t;if(c!=l){var m=f[v];void 0===(g=u?u(m,v,f):void 0)&&(g=s(m)?m:o(n[c+1])?[]:{})}r(f,v,g),f=f[v]}return t}},178:function(t,n,e){var r=e(179),i=e(30),o=Object.prototype.hasOwnProperty;t.exports=function(t,n,e){var s=t[n];o.call(t,n)&&i(s,e)&&(void 0!==e||n in t)||r(t,n,e)}},179:function(t,n,e){var r=e(66);t.exports=function(t,n,e){"__proto__"==n&&r?r(t,n,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[n]=e}},180:function(t,n,e){var r=e(59),i=e(181),o=e(183);t.exports=function(t){return r(t,o,i)}},181:function(t,n,e){var r=e(29),i=e(182),o=e(60),s=e(61),a=Object.getOwnPropertySymbols?function(t){for(var n=[];t;)r(n,o(t)),t=i(t);return n}:s;t.exports=a},182:function(t,n,e){var r=e(64)(Object.getPrototypeOf,Object);t.exports=r},183:function(t,n,e){var r=e(62),i=e(184),o=e(32);t.exports=function(t){return o(t)?r(t,!0):i(t)}},184:function(t,n,e){var r=e(19),i=e(63),o=e(185),s=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var n=i(t),e=[];for(var a in t)("constructor"!=a||!n&&s.call(t,a))&&e.push(a);return e}},185:function(t,n){t.exports=function(t){var n=[];if(null!=t)for(var e in Object(t))n.push(e);return n}},186:function(t,n,e){"use strict";e(170)},187:function(t,n,e){"use strict";e(171)},188:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return f}));var r={data:()=>({comp:null}),computed:{page(){return this.$pagination.paginationIndex+1}},mounted(){e.e(2).then(e.t.bind(null,209,7)).then(t=>{this.comp=t.default})},methods:{clickCallback(t){const n=this.$pagination.getSpecificPageLink(t-1);this.$router.push(n)}}},i=(e(173),e(4)),o=Object(i.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.comp?e(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,s=(e(174),Object(i.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?e("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?e("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),a=e(20),u=e.n(a),c=e(175),p=e.n(c),l={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties(){return p()(this.$props,u.a)},commentProps(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},f=Object(i.a)(l,(function(){var t=this.$createElement,n=this._self._c||t;return"vssue"===this.$service.comment.service?n("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?n("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports},189:function(t,n,e){"use strict";var r={name:"Tags",props:{tags:{default:()=>[]}},data:()=>({colorList:["#0099CC","#FF6666","#FF6600","#009999","#CCCC44","#CC3333","#FF99CC","#993399","#666699","#66CC66"]})},i=(e(186),e(4)),o=Object(i.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"ui-tags-wrapper"},t._l(t.tags,(function(n,r){return e("span",{key:r,staticClass:"ui-tags-item",style:{"background-color":t.colorList[r]}},[t._v("\n        "+t._s(n)+"\n    ")])})),0)}),[],!1,null,null,null);n.a=o.exports},194:function(t,n,e){},203:function(t,n,e){"use strict";e(194)},213:function(t,n,e){"use strict";e.r(n);e(1);var r=e(7),i=e(188),o=e(189),s={components:{NavigationIcon:r.g,ClockIcon:r.a,Tags:o.a},data:()=>({paginationComponent:null}),created(){this.paginationComponent=this.getPaginationComponent()},computed:{pages(){return this.$pagination.pages}},methods:{getPaginationComponent:()=>i.b,resovlePostDate:t=>new Date(t.replace(/\-/g,"/").trim()).toDateString()}},a=(e(203),e(187),e(4)),u=Object(a.a)(s,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"base-list-layout"}},[e("div",{staticClass:"ui-posts"},t._l(t.pages,(function(n){return e("div",{staticClass:"ui-post"},[e("div",{staticClass:"ui-post-title"},[e("NavLink",{attrs:{link:n.path}},[t._v(t._s(n.title))])],1),t._v(" "),e("Tags",{attrs:{tags:n.frontmatter.tags||[]}}),t._v(" "),n.excerpt?e("div",{staticClass:"ui-post-summary",domProps:{innerHTML:t._s(n.excerpt)}}):e("div",{staticClass:"ui-post-summary"},[t._v("\n        "+t._s(n.frontmatter.summary||n.summary)+"\n        ")]),t._v(" "),n.frontmatter.author?e("div",{staticClass:"ui-post-author"},[e("NavigationIcon"),t._v(" "),e("span",[t._v(t._s(n.frontmatter.author)+" in "+t._s(n.frontmatter.location))])],1):t._e(),t._v(" "),n.frontmatter.date?e("div",{staticClass:"ui-post-date"},[e("ClockIcon"),t._v(" "),e("span",[t._v(t._s(t.resovlePostDate(n.frontmatter.date)))])],1):t._e()],1)})),0),t._v(" "),t.$pagination.length>1&&t.paginationComponent?e(t.paginationComponent,{tag:"component"}):t._e()],1)}),[],!1,null,null,null);n.default=u.exports}}]);