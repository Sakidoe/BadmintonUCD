"use strict";(self.webpackChunkbadminton_ucd=self.webpackChunkbadminton_ucd||[]).push([[329],{3936:function(t,e,o){o.r(e),o.d(e,{default:function(){return D}});var r=o(7294),n=o(8825),s=o(5697),a=o.n(s);function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,o){return e&&l(t.prototype,e),o&&l(t,o),t}function _(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t}).apply(this,arguments)}function w(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function d(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,r=f(t);if(e){var n=f(this).constructor;o=Reflect.construct(r,arguments,n)}else o=r.apply(this,arguments);return function(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?u(t):e}(this,o)}}var h={return:13,arrowLeft:37,arrowUp:38,arrowRight:39,arrowDown:40,space:32};h.keyCodes=Object.keys(h).reduce((function(t,e){return t[h[e]]=e,t}),{});var m={"faq-row-wrapper":"styles_faq-row-wrapper__3vA1D","faq-row":"styles_faq-row__2YF3c","row-body":"styles_row-body__1NvUo","row-title":"styles_row-title__1YiiY","no-tabfocus":"styles_no-tabfocus__1HmyD","row-title-text":"styles_row-title-text__1MuhU","icon-wrapper":"styles_icon-wrapper__2cftw",closed:"styles_closed__39w54","row-content":"styles_row-content__QOGZd",animate:"styles_animate__3ecdr",static:"styles_static__3chYW",expanded:"styles_expanded__3elPy",expanding:"styles_expanding__2OAFB","row-content-text":"styles_row-content-text__2sgAB"};!function(t,e){void 0===e&&(e={});var o=e.insertAt;if(t&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===o&&r.firstChild?r.insertBefore(n,r.firstChild):r.appendChild(n),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t))}}(".styles_faq-row-wrapper__3vA1D {\n  background-color: var(--faq-bg-color, white); }\n  .styles_faq-row-wrapper__3vA1D h2 {\n    margin: 0;\n    color: var(--title-text-color, black);\n    font-size: var(--title-text-size, 30px); }\n  .styles_faq-row-wrapper__3vA1D .styles_faq-row__2YF3c {\n    display: flex;\n    justify-content: space-between;\n    padding: 5px 0;\n    border-bottom: 1px solid #ccc; }\n  .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c {\n    flex-direction: column;\n    position: relative; }\n    .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY {\n      padding: 10px 0;\n      display: flex;\n      justify-content: space-between;\n      color: var(--row-title-color, black);\n      font-size: var(--row-title-text-size, large);\n      cursor: pointer;\n      align-items: center; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_no-tabfocus__1HmyD {\n        outline: none; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY .styles_row-title-text__1MuhU {\n        padding-right: 3em; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY .styles_icon-wrapper__2cftw {\n        max-width: 25px;\n        max-height: 25px;\n        margin: 0;\n        padding: 0;\n        color: var(--arrow-color, black);\n        transform: rotate(0deg);\n        transition: transform var(--transition-duration, 0.3s);\n        position: absolute;\n        top: 13px;\n        right: 12px; }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY .styles_icon-wrapper__2cftw svg {\n          width: 100%;\n          height: 100%; }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY .styles_icon-wrapper__2cftw svg {\n          fill: var(--arrow-color, black); }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_closed__39w54 + .styles_row-content__QOGZd {\n        visibility: hidden; }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_closed__39w54 + .styles_row-content__QOGZd.styles_animate__3ecdr {\n          opacity: 0;\n          transition: height var(--transition-duration, 0.3s); }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_closed__39w54 + .styles_row-content__QOGZd.styles_static__3chYW {\n          display: none; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_expanded__3elPy + .styles_row-content__QOGZd {\n        visibility: visible; }\n        .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_expanded__3elPy + .styles_row-content__QOGZd.styles_static__3chYW {\n          display: block; }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_expanded__3elPy .styles_icon-wrapper__2cftw {\n        transform: rotate(180deg); }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY.styles_expanding__2OAFB .styles_icon-wrapper__2cftw {\n        transform: rotate(180deg); }\n    .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-content__QOGZd {\n      overflow: hidden;\n      transition: height var(--transition-duration, 0.3s);\n      transition-timing-function: var(--timing-function, ease); }\n      .styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-content__QOGZd .styles_row-content-text__2sgAB {\n        color: var(--row-content-color, black);\n        font-size: var(--row-content-text-size, medium);\n        padding: var(--row-content-padding-top, 0) var(--row-content-padding-right, 0) var(--row-content-padding-bottom, 0) var(--row-content-padding-left, 0); }\n");var g=function(t){d(o,r.PureComponent);var e=v(o);function o(){var t;i(this,o);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return _(u(t=e.call.apply(e,[this].concat(s))),"state",{isExpanded:!1,ref:r.createRef(),rowRef:r.createRef(),height:0,rowClassName:"closed"}),_(u(t),"finishTransition",(function(){var e=t.state.isExpanded;t.setState({rowClassName:e?"expanded":"closed"})})),_(u(t),"toggle",(function(e){t.setState((function(){return{isExpanded:e}}))})),_(u(t),"expand",(function(){t.setState((function(t){return{isExpanded:!t.isExpanded}}))})),_(u(t),"keyPress",(function(e){var o=e.keyCode?e.keyCode:e.which;switch(h.keyCodes[o]){case"space":case"return":e.preventDefault(),e.stopPropagation(),t.expand()}})),_(u(t),"setHeight",(function(){var e=t.state,o=e.ref,r=e.isExpanded,n=o.current.scrollHeight;t.setState({height:r?n:0})})),t}return c(o,[{key:"getSnapshotBeforeUpdate",value:function(t,e){var o=e.isExpanded,r=this.state.isExpanded,n=this.props.config,s=(n=void 0===n?{}:n).animate,a=void 0===s||s;return r!==o?{rowClassName:r?a?"expanding":"expanded":a?"closing":"closed"}:null}},{key:"componentDidUpdate",value:function(t,e,o){var r=this.props.config,n=(r=void 0===r?{}:r).animate,s=void 0===n||n;null!==o&&this.setState(function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?w(Object(o),!0).forEach((function(e){_(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):w(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}({},o),s?this.setHeight:void 0)}},{key:"componentDidMount",value:function(){var t=this,e=this.state.rowRef;if(this.props.openOnload&&this.expand(),this.props.getRowOptions){var o={expand:function(){t.toggle(!0)},close:function(){t.toggle(!1)},scrollIntoView:function(t){t?e.current.scrollIntoView(t):e.current.scrollIntoView()}};this.props.getRowOptions(o)}}},{key:"render",value:function(){var t=this.props,e=t.data,o=e.title,n=e.content,s=t.config,a=(s=void 0===s?{}:s).animate,i=void 0===a||a,l=s.arrowIcon,c=s.expandIcon,_=s.collapseIcon,w=s.tabFocus,d=void 0!==w&&w,f=this.state,y=f.isExpanded,u=f.ref,v=f.height,h=f.rowClassName,g=f.rowRef,b={onClick:this.expand,role:"button","aria-expanded":y,"aria-controls":"react-faq-rowcontent-".concat(this.props.rowid),onKeyPress:this.keyPress,onKeyDown:this.keyPress};d&&(b.tabIndex=0);var x={role:"region",id:"react-faq-rowcontent-".concat(this.props.rowid),"aria-expanded":y,"aria-hidden":!y,onTransitionEnd:this.finishTransition};i&&(x.style={height:v});var O,q=["row-title",h,m["row-title"],m[h],d?"":m["no-tabfocus"]].filter(Boolean).join(" ");O=c&&_?y?_:c:l||r.createElement("div",{dangerouslySetInnerHTML:{__html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="36px" height="36px"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path d="M0 0h24v24H0V0z" fill="none"/></svg>'},className:"arrow-image ".concat(m["arrow-image"]),alt:"Expand arrow"});var Y=[m["row-content"],"row-content",i?m.animate:m.static].join(" "),C=[m["row-content-text"],"row-content-text"].join(" "),D=n&&"string"==typeof n?r.createElement("div",{className:C,dangerouslySetInnerHTML:{__html:n}}):r.createElement("div",{className:C},n);return r.createElement("section",{className:"faq-row ".concat(m["faq-row"]),role:"listitem",ref:g},r.createElement("div",p({className:q},b),r.createElement("div",{className:"row-title-text ".concat(m["row-title-text"]),id:"react-faq-rowtitle-".concat(this.props.rowid)},o),r.createElement("span",{className:"icon-wrapper ".concat(m["icon-wrapper"]),"aria-hidden":"true"},O)),r.createElement("div",p({className:Y},x,{ref:u}),D))}}]),o}();_(g,"propTypes",{config:a().object,data:a().object,rowid:a().number,getRowOptions:a().func,openOnload:a().bool});var b=function(t){d(o,r.PureComponent);var e=v(o);function o(){var t;i(this,o);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return _(u(t=e.call.apply(e,[this].concat(n))),"state",{rowsOption:[]}),t}return c(o,[{key:"componentDidMount",value:function(){this.props.getRowOptions&&this.props.getRowOptions(this.state.rowsOption)}},{key:"render",value:function(){var t=this,e=this.props.data||{},o=e.title,n=e.rows,s=void 0===n?[]:n,a=this.props,i=a.styles,l=void 0===i?{}:i,c=a.config,_=((c=void 0===c?{}:c).animate,c.openOnload),p={"--faq-bg-color":l.bgColor,"--title-text-color":l.titleTextColor,"--title-text-size":l.titleTextSize,"--row-title-color":l.rowTitleColor,"--row-title-text-size":l.rowTitleTextSize,"--row-content-color":l.rowContentColor,"--row-content-text-size":l.rowContentTextSize,"--row-content-padding-top":l.rowContentPaddingTop,"--row-content-padding-bottom":l.rowContentPaddingBottom,"--row-content-padding-right":l.rowContentPaddingRight,"--row-content-padding-left":l.rowContentPaddingLeft,"--arrow-color":l.arrowColor,"--transition-duration":l.transitionDuration,"--timing-function":l.timingFunc},w="faq-row-wrapper ".concat(m["faq-row-wrapper"]),d="faq-title ".concat(m["faq-row"]),f="faq-body ".concat(m["row-body"]);return r.createElement("div",{className:w,style:p},o?r.createElement("section",{className:d},r.createElement("h2",null,o)):null,s.length?r.createElement("section",{className:f,role:"list"},s.map((function(e,o){return r.createElement(g,{openOnload:_===o,data:e,key:o,rowid:o+1,config:t.props.config,getRowOptions:function(e){return t.state.rowsOption[o]=e}})}))):null)}}]),o}();_(b,"propTypes",{data:a().object,styles:a().object,config:a().object,getRowOptions:a().func});var x=b;o(4160);const O={title:"FAQ",rows:[{title:r.createElement("h",{classname:"FAQ-question"},"  When and where are our practices?"),content:"Our practice information for Fall Quarter 2024-2025 are: <br />\n                   Location: Hickey Gymnasium350 Howard Way, Davis, CA 95616 <br />\n                   Practice Times: <br />\n                   Monday: 9:30pm - 11:00pm <br />\n                   Wednesday: 7:30pm - 9:00pm <br />\n                   Friday: 7:30pm - 9:00pm"},{title:r.createElement("h",{classname:"FAQ-question"},"  How much are our practices?"),content:"Here are our payments info: Zelle: davisbadminton@gmail.com <br /> Year     Membership (UCD students only): $175 <br /> Quarter Membership (UCD students only): $65 <br /> 1-Time Drop-In: 10$ <br />"},{title:r.createElement("h",{classname:"FAQ-question"},"  What do our practices look like?"),content:'Our practices follow an open-gym approach.<br /> Of the 8 courts that Hickey Gym offers, we separate courts depending on skill level for all members to be able to play.<br /> There are "challenge courts" for higher level players, as well as designated "rec courts" for casual members.',styles:{rowContentPaddingLeft:"50px"}}]},q={titleTextColor:"white",bgColor:"#022851",rowTitleColor:"white",rowContentColor:"#cecece",arrowColor:"white",rowContentPaddingLeft:"50px",rowContentPaddingRight:"50px"},Y={animate:!0,tabFocus:!0};var C=()=>r.createElement("div",{className:"faq-container"},r.createElement(x,{data:O,styles:q,config:Y,className:"faq-title"}));var D=()=>r.createElement(n.Z,{pageTitle:"FAQ"},r.createElement(C,null))}}]);
//# sourceMappingURL=component---src-pages-faq-js-fc6eaf1467ef66d866a9.js.map