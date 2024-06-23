"use strict";(self.webpackChunkbadminton_ucd=self.webpackChunkbadminton_ucd||[]).push([[233],{3204:function(e){const a=/[\p{Lu}]/u,t=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,s=/([\p{Alpha}\p{N}_]|$)/u,r=/[_.\- ]+/,i=new RegExp("^"+r.source),c=new RegExp(r.source+s.source,"gu"),o=new RegExp("\\d+"+s.source,"gu"),l=(e,s)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(s={pascalCase:!1,preserveConsecutiveUppercase:!1,...s},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const r=!1===s.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(s.locale),l=!1===s.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(s.locale);if(1===e.length)return s.pascalCase?l(e):r(e);return e!==r(e)&&(e=((e,n,s)=>{let r=!1,i=!1,c=!1;for(let o=0;o<e.length;o++){const l=e[o];r&&a.test(l)?(e=e.slice(0,o)+"-"+e.slice(o),r=!1,c=i,i=!0,o++):i&&c&&t.test(l)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),c=i,i=!1,r=!0):(r=n(l)===l&&s(l)!==l,c=i,i=s(l)===l&&n(l)!==l)}return e})(e,r,l)),e=e.replace(i,""),e=s.preserveConsecutiveUppercase?((e,a)=>(n.lastIndex=0,e.replace(n,(e=>a(e)))))(e,r):r(e),s.pascalCase&&(e=l(e.charAt(0))+e.slice(1)),((e,a)=>(c.lastIndex=0,o.lastIndex=0,e.replace(c,((e,t)=>a(t))).replace(o,(e=>a(e)))))(e,l)};e.exports=l,e.exports.default=l},8032:function(e,a,t){t.d(a,{L:function(){return g},M:function(){return C},P:function(){return v},S:function(){return F},_:function(){return c},a:function(){return i},b:function(){return d},g:function(){return m},h:function(){return o}});var n=t(7294),s=(t(3204),t(5697)),r=t.n(s);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}function c(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a.indexOf(t=r[n])>=0||(s[t]=e[t]);return s}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function l(e,a,t){const n={};let s="gatsby-image-wrapper";return"fixed"===t?(n.width=e,n.height=a):"constrained"===t&&(s="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:s,"data-gatsby-image-wrapper":"",style:n}}function d(e,a,t,n,s){return void 0===s&&(s={}),i({},t,{loading:n,shouldLoad:e,"data-main-image":"",style:i({},s,{opacity:a?1:0})})}function m(e,a,t,n,s,r,c,o){const l={};r&&(l.backgroundColor=r,"fixed"===t?(l.width=n,l.height=s,l.backgroundColor=r,l.position="relative"):("constrained"===t||"fullWidth"===t)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),c&&(l.objectFit=c),o&&(l.objectPosition=o);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:a?0:1,transition:"opacity 500ms linear"},l)});return d}const u=["children"],p=function(e){let{layout:a,width:t,height:s}=e;return"fullWidth"===a?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:s/t*100+"%"}}):"constrained"===a?n.createElement("div",{style:{maxWidth:t,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+s+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:a}=e,t=c(e,u);return n.createElement(n.Fragment,null,n.createElement(p,i({},t)),a,null)},f=["src","srcSet","loading","alt","shouldLoad"],b=["fallback","sources","shouldLoad"],h=function(e){let{src:a,srcSet:t,loading:s,alt:r="",shouldLoad:o}=e,l=c(e,f);return n.createElement("img",i({},l,{decoding:"async",loading:s,src:o?a:void 0,"data-src":o?void 0:a,srcSet:o?t:void 0,"data-srcset":o?void 0:t,alt:r}))},w=function(e){let{fallback:a,sources:t=[],shouldLoad:s=!0}=e,r=c(e,b);const o=r.sizes||(null==a?void 0:a.sizes),l=n.createElement(h,i({},r,a,{sizes:o,shouldLoad:s}));return t.length?n.createElement("picture",null,t.map((e=>{let{media:a,srcSet:t,type:r}=e;return n.createElement("source",{key:a+"-"+r+"-"+t,type:r,media:a,srcSet:s?t:void 0,"data-srcset":s?void 0:t,sizes:o})})),l):l};var y;h.propTypes={src:s.string.isRequired,alt:s.string.isRequired,sizes:s.string,srcSet:s.string,shouldLoad:s.bool},w.displayName="Picture",w.propTypes={alt:s.string.isRequired,shouldLoad:s.bool,fallback:s.exact({src:s.string.isRequired,srcSet:s.string,sizes:s.string}),sources:s.arrayOf(s.oneOfType([s.exact({media:s.string.isRequired,type:s.string,sizes:s.string,srcSet:s.string.isRequired}),s.exact({media:s.string,type:s.string.isRequired,sizes:s.string,srcSet:s.string.isRequired})]))};const E=["fallback"],v=function(e){let{fallback:a}=e,t=c(e,E);return a?n.createElement(w,i({},t,{fallback:{src:a},"aria-hidden":!0,alt:""})):n.createElement("div",i({},t))};v.displayName="Placeholder",v.propTypes={fallback:s.string,sources:null==(y=w.propTypes)?void 0:y.sources,alt:function(e,a,t){return e[a]?new Error("Invalid prop `"+a+"` supplied to `"+t+"`. Validation failed."):null}};const C=function(e){return n.createElement(n.Fragment,null,n.createElement(w,i({},e)),n.createElement("noscript",null,n.createElement(w,i({},e,{shouldLoad:!0}))))};C.displayName="MainImage",C.propTypes=w.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],N=["style","className"],x=e=>e.replace(/\n/g,""),S=function(e,a,t){for(var n=arguments.length,s=new Array(n>3?n-3:0),i=3;i<n;i++)s[i-3]=arguments[i];return e.alt||""===e.alt?r().string.apply(r(),[e,a,t].concat(s)):new Error('The "alt" prop is required in '+t+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},U={image:r().object.isRequired,alt:S},_=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],D=["style","className"],L=new Set;let B,T;const q=function(e){let{as:a="div",image:s,style:r,backgroundColor:d,className:m,class:u,onStartLoad:p,onLoad:g,onError:f}=e,b=c(e,_);const{width:h,height:w,layout:y}=s,E=l(h,w,y),{style:v,className:C}=E,k=c(E,D),N=(0,n.useRef)(),x=(0,n.useMemo)((()=>JSON.stringify(s.images)),[s.images]);u&&(m=u);const S=function(e,a,t){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+t/a*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+a+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+t+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(y,h,w);return(0,n.useEffect)((()=>{B||(B=t.e(731).then(t.bind(t,6731)).then((e=>{let{renderImageToString:a,swapPlaceholderImage:t}=e;return T=a,{renderImageToString:a,swapPlaceholderImage:t}})));const e=N.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function a(){e.removeEventListener("load",a),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void L.add(x);if(T&&L.has(x))return;let a,n;return B.then((e=>{let{renderImageToString:t,swapPlaceholderImage:c}=e;N.current&&(N.current.innerHTML=t(i({isLoading:!0,isLoaded:L.has(x),image:s},b)),L.has(x)||(a=requestAnimationFrame((()=>{N.current&&(n=c(N.current,x,L,r,p,g,f))}))))})),()=>{a&&cancelAnimationFrame(a),n&&n()}}),[s]),(0,n.useLayoutEffect)((()=>{L.has(x)&&T&&(N.current.innerHTML=T(i({isLoading:L.has(x),isLoaded:L.has(x),image:s},b)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[s]),(0,n.createElement)(a,i({},k,{style:i({},v,r,{backgroundColor:d}),className:C+(m?" "+m:""),ref:N,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},I=(0,n.memo)((function(e){return e.image?(0,n.createElement)(q,e):null}));I.propTypes=U,I.displayName="GatsbyImage";const O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function z(e){return function(a){let{src:t,__imageData:s,__error:r}=a,o=c(a,O);return r&&console.warn(r),s?n.createElement(e,i({image:s},o)):(console.warn("Image not loaded",t),null)}}const R=z((function(e){let{as:a="div",className:t,class:s,style:r,image:o,loading:u="lazy",imgClassName:p,imgStyle:f,backgroundColor:b,objectFit:h,objectPosition:w}=e,y=c(e,k);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;s&&(t=s),f=i({objectFit:h,objectPosition:w,backgroundColor:b},f);const{width:E,height:S,layout:U,images:_,placeholder:D,backgroundColor:L}=o,B=l(E,S,U),{style:T,className:q}=B,I=c(B,N),O={fallback:void 0,sources:[]};return _.fallback&&(O.fallback=i({},_.fallback,{srcSet:_.fallback.srcSet?x(_.fallback.srcSet):void 0})),_.sources&&(O.sources=_.sources.map((e=>i({},e,{srcSet:x(e.srcSet)})))),n.createElement(a,i({},I,{style:i({},T,r,{backgroundColor:b}),className:q+(t?" "+t:"")}),n.createElement(g,{layout:U,width:E,height:S},n.createElement(v,i({},m(D,!1,U,E,S,L,h,w))),n.createElement(C,i({"data-gatsby-image-ssr":"",className:p},y,d("eager"===u,!1,O,u,f)))))})),j=function(e,a){for(var t=arguments.length,n=new Array(t>2?t-2:0),s=2;s<t;s++)n[s-2]=arguments[s];return"fullWidth"!==e.layout||"width"!==a&&"height"!==a||!e[a]?r().number.apply(r(),[e,a].concat(n)):new Error('"'+a+'" '+e[a]+" may not be passed when layout is fullWidth.")},A=new Set(["fixed","fullWidth","constrained"]),P={src:r().string.isRequired,alt:S,width:j,height:j,sizes:r().string,layout:e=>{if(void 0!==e.layout&&!A.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};R.displayName="StaticImage",R.propTypes=P;const F=z(I);F.displayName="StaticImage",F.propTypes=P},8825:function(e,a,t){t.d(a,{Z:function(){return d}});var n=t(7294),s=t(4160),r=t(8032),i="navbar-module--navLinkItem--038bd",c="navbar-module--navLinkText--5c16c";var o=()=>n.createElement("nav",{className:"navbar-module--nav--affb7"},n.createElement("div",{className:"navbar-module--logoContainer--a6175"},n.createElement(s.rU,{to:"/"},n.createElement(r.S,{src:"../images/ucd_logo_opaque.png",alt:"UCD Logo",className:"navbar-module--logo--fe1cd",placeholder:"tracedSVG",__imageData:t(9034)}))),n.createElement("div",{className:"navbar-module--navLinks--a29c1"},n.createElement("li",{className:i},n.createElement(s.rU,{to:"/about",className:c},"About")),n.createElement("li",{className:i},n.createElement(s.rU,{to:"/officers",className:c},"Officers")),n.createElement("li",{className:i},n.createElement(s.rU,{to:"/join",className:c},"Join")),n.createElement("li",{className:i},n.createElement(s.rU,{to:"/FAQ",className:c},"FAQ"))));var l=()=>n.createElement("div",{className:"outro"},n.createElement("div",{className:"outro-paragraph"},n.createElement("h1",null,"Follow Us For Updates"),n.createElement("ul",null,n.createElement("li",null,n.createElement("a",{className:"facebook",href:"https://www.facebook.com/groups/ucdavisbadminton"},n.createElement("span",null,n.createElement(r.S,{src:"../images/facebook5.png",className:"social-icon",__imageData:t(9032)})),n.createElement("span",null),n.createElement("span",null),n.createElement("span",null),n.createElement("i",{className:"fa fa-facebook","aria-hidden":"true"}))),n.createElement("li",null,n.createElement("a",{className:"instagram",href:"https://www.instagram.com/badminton_ucd/"},n.createElement("span",null,n.createElement(r.S,{src:"../images/instagram.png",className:"social-icon",__imageData:t(6471)})),n.createElement("span",null),n.createElement("span",null),n.createElement("span",null),n.createElement("i",{className:"fa fa-instagram","aria-hidden":"true"}))),n.createElement("li",null,n.createElement("a",{className:"discord",href:"https://discord.gg/bssTuRwBZx"},n.createElement("span",null,n.createElement(r.S,{src:"../images/discord.png",className:"social-icon",__imageData:t(5562)})),n.createElement("span",null),n.createElement("span",null),n.createElement("span",null),n.createElement("i",{className:"fa fa-discord","aria-hidden":"true"})))),n.createElement("p",{className:"p1"},"Question? Email us at davisbadminton@gmail.com"),n.createElement("p",{className:"p2"},"Developed by Richard Huang, Publicity Coordinator"),n.createElement("p",{className:"p3"},"With 💜 from the officers of the Badminton Club at UC Davis")));var d=e=>{let{pageTitle:a,children:t}=e;return n.createElement("section",null,n.createElement("div",{className:"layout-module--full-width-container--bd712"},n.createElement(o,null),n.createElement("main",null,n.createElement("h1",{className:"layout-module--heading--f158c"},a),t),n.createElement(l,null)))}},9032:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/BadmintonUCD/static/00d73232f13b2d14b73f6f4c2faf27ac/8b27a/facebook5.png","srcSet":"/BadmintonUCD/static/00d73232f13b2d14b73f6f4c2faf27ac/3193b/facebook5.png 86w,\\n/BadmintonUCD/static/00d73232f13b2d14b73f6f4c2faf27ac/aab28/facebook5.png 171w,\\n/BadmintonUCD/static/00d73232f13b2d14b73f6f4c2faf27ac/8b27a/facebook5.png 342w","sizes":"(min-width: 342px) 342px, 100vw"},"sources":[{"srcSet":"/BadmintonUCD/static/00d73232f13b2d14b73f6f4c2faf27ac/ff4dd/facebook5.webp 86w,\\n/BadmintonUCD/static/00d73232f13b2d14b73f6f4c2faf27ac/1875e/facebook5.webp 171w,\\n/BadmintonUCD/static/00d73232f13b2d14b73f6f4c2faf27ac/7ab00/facebook5.webp 342w","type":"image/webp","sizes":"(min-width: 342px) 342px, 100vw"}]},"width":342,"height":342}')},9034:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/BadmintonUCD/static/68f88fb5925d2d79a26ecf6f82cd59e7/25a04/ucd_logo_opaque.png","srcSet":"/BadmintonUCD/static/68f88fb5925d2d79a26ecf6f82cd59e7/2e2bb/ucd_logo_opaque.png 173w,\\n/BadmintonUCD/static/68f88fb5925d2d79a26ecf6f82cd59e7/2c0ba/ucd_logo_opaque.png 346w,\\n/BadmintonUCD/static/68f88fb5925d2d79a26ecf6f82cd59e7/25a04/ucd_logo_opaque.png 692w","sizes":"(min-width: 692px) 692px, 100vw"},"sources":[{"srcSet":"/BadmintonUCD/static/68f88fb5925d2d79a26ecf6f82cd59e7/4102e/ucd_logo_opaque.webp 173w,\\n/BadmintonUCD/static/68f88fb5925d2d79a26ecf6f82cd59e7/a608e/ucd_logo_opaque.webp 346w,\\n/BadmintonUCD/static/68f88fb5925d2d79a26ecf6f82cd59e7/8bf75/ucd_logo_opaque.webp 692w","type":"image/webp","sizes":"(min-width: 692px) 692px, 100vw"}]},"width":692,"height":360}')},5562:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/BadmintonUCD/static/cf1ce3053bcfb302873711429574ebc7/7560b/discord.png","srcSet":"/BadmintonUCD/static/cf1ce3053bcfb302873711429574ebc7/4329d/discord.png 125w,\\n/BadmintonUCD/static/cf1ce3053bcfb302873711429574ebc7/9ef47/discord.png 250w,\\n/BadmintonUCD/static/cf1ce3053bcfb302873711429574ebc7/7560b/discord.png 500w","sizes":"(min-width: 500px) 500px, 100vw"},"sources":[{"srcSet":"/BadmintonUCD/static/cf1ce3053bcfb302873711429574ebc7/92507/discord.webp 125w,\\n/BadmintonUCD/static/cf1ce3053bcfb302873711429574ebc7/698d2/discord.webp 250w,\\n/BadmintonUCD/static/cf1ce3053bcfb302873711429574ebc7/cadb1/discord.webp 500w","type":"image/webp","sizes":"(min-width: 500px) 500px, 100vw"}]},"width":500,"height":514}')},6471:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/BadmintonUCD/static/a024856aab1b3ea4e4954ce0af7e2527/453e9/instagram.png","srcSet":"/BadmintonUCD/static/a024856aab1b3ea4e4954ce0af7e2527/9703a/instagram.png 53w,\\n/BadmintonUCD/static/a024856aab1b3ea4e4954ce0af7e2527/12f71/instagram.png 107w,\\n/BadmintonUCD/static/a024856aab1b3ea4e4954ce0af7e2527/453e9/instagram.png 213w","sizes":"(min-width: 213px) 213px, 100vw"},"sources":[{"srcSet":"/BadmintonUCD/static/a024856aab1b3ea4e4954ce0af7e2527/ae675/instagram.webp 53w,\\n/BadmintonUCD/static/a024856aab1b3ea4e4954ce0af7e2527/d9648/instagram.webp 107w,\\n/BadmintonUCD/static/a024856aab1b3ea4e4954ce0af7e2527/e72da/instagram.webp 213w","type":"image/webp","sizes":"(min-width: 213px) 213px, 100vw"}]},"width":213,"height":213}')}}]);
//# sourceMappingURL=f89bb3d9ca53fac3f1030a86e178668be54fa23e-f769e25b21d2399d2bed.js.map