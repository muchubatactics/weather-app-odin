(()=>{"use strict";var e={426:(e,n,r)=>{r.d(n,{Z:()=>p});var t=r(81),a=r.n(t),o=r(645),c=r.n(o),i=r(667),s=r.n(i),d=new URL(r(453),r.b),f=c()(a());f.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);var u=s()(d);f.push([e.id,`body {\n  height: 100vh;\n  margin: 0px;\n  padding: 0px;\n  background-image: url(${u});\n  background-repeat: no-repeat;\n  background-size: cover;\n  font-family: 'Poppins', sans-serif;\n  user-select: none;\n}\n\n.container {\n  display: grid;\n  grid-template-columns: 2fr 5fr;\n  grid-template-rows: minmax(0, 0.5fr) 1fr 3fr 4fr 2fr minmax(0, 0.5fr);\n  max-height: 100vh;\n}\n\n.major-cur {\n  grid-area: 2 / 1 / 4 / 2;\n  padding: 1em;\n  display: grid;\n  grid-template-columns: 1fr 47px 47px 47px 47px 20px 1fr 47px 47px 1fr;\n  grid-template-rows: 1fr 1fr 35px 35px 35px 35px 35px 35px 35px 1fr;\n}\n\n.major-cur > .now {\n  grid-area: 4 / 2 / 5 / 4;\n  font-weight: 400;\n  font-size: 1.5em;\n}\n\n.major-cur > .temp-cur {\n  grid-area: 5 / 2 / 8 / 6;\n  font-size: 7rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.major-cur > .icon {\n  grid-area: 7 / 6 / 9 / 8;\n  background-image: url(https://cdn.weatherapi.com/weather/64x64/night/116.png);\n  background-repeat: no-repeat;\n} \n\n.major-cur > .cur-description {\n  grid-area: 5 / 7 / 6 / 10;\n  font-weight: 500;\n  font-size: 1.5rem;\n  justify-self: end;\n  align-self: self-end;\n}\n\n.major-cur > .feels-like {\n  grid-area: 6 / 7 / 7 / 10;\n  font-weight: 400;\n  font-size: 1em;\n  justify-self: end;\n  align-self: self-start;\n}\n\n.major-cur > .high-low-temp {\n  grid-area: 8 / 2 / 9 / 6;\n  font-weight: 400;\n  font-size: 1em;\n}\n\n.major-cur > .rain {\n  grid-area: 9 / 2 / 10 / 10;\n  /* background-color: rgb(160, 160, 160, 0.3); */\n  background-color: rgb(255, 255, 255, 0.2);\n  backdrop-filter: blur(10px);\n  border-radius: 10px;\n  display: none;\n  grid-template-columns: 2fr 9fr;\n  height: 50px;\n}\n\n.major-cur > .rain > span {\n  align-self: center;\n}\n\n.major-cur > .rain > .rain-icon {\n  background-color: rgb(80, 80, 80, 0.4);\n  fill: white;\n  height: 40px;\n  width: 40px;\n  justify-self: center;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.search {\n  grid-area: 2 / 2 / 3 / 3;\n  padding: 1em;\n}\n\n.search form label > span:hover {\n  box-shadow: 0px 0px 3px 3px rgb(255, 255, 255, 0.2);;\n}\n\n.search input::placeholder {\n  color: rgb(61, 61, 61);\n}\n\n.search > form > label > span {\n  display: grid;\n  grid-template-columns: 1fr 15fr 1fr;\n  background-color: rgb(255, 255, 255, 0.2);\n  backdrop-filter: blur(20px);\n  height: 4em;\n  border-radius: 50px;\n  align-items: center;\n  padding: 0 0.7em;\n}\n\n.search > form > label > span > span {\n  justify-self: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.search > form > label > span > span > svg {\n  height: 30px;\n  width: 50px;\n}\n\n.search input {\n  background-color: rgb(255, 255, 255, 0.0001);\n  outline: none;\n  border: 0px;\n  height: 60%;\n  font-size: 1.5em;\n  font-family: 'Poppins';\n}\n\n.search input:focus {\n  outline: none;\n}\n\n.search input + span > svg:hover {\n  fill: green\n}\n\n.conditions-cur {\n  grid-area: 4 / 1 / 5 / 2;\n  display: grid;\n  grid-template-columns: repeat(10, minmax(50px, 1fr));\n  grid-template-rows: repeat(9, 40px) 1fr;\n}\n\n.conditions-cur > span {\n  grid-area: 1 / 2 / 2 / 11;\n  font-size: 1.3em;\n}\n\n.conditions-cur > .wind {\n  grid-area: 2 / 2 / 6 / 6;\n  /* background-color: rgb(160, 160, 160, 0.3); */\n  background-color: rgb(255, 255, 255, 0.2);\n  backdrop-filter: blur(10px);\n  border-radius: 20px;\n  width: 90%;\n  height: 90%;\n  display: grid;\n  grid-template-columns: repeat(10, minmax(15px, 1fr));\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.conditions-cur > .wind > .heading {\n  grid-area: 2 / 2 / 4 / 10;\n  font-weight: 500;\n}\n\n.conditions-cur > .wind > .value {\n  grid-area: 4 / 2 / 7 / 7;\n  font-size: 2rem;\n  font-weight: 300;\n}\n\n.conditions-cur > .wind > .value > .unit {\n  font-size: 0.8rem;\n}\n\n.conditions-cur > .wind > .info {\n  grid-area: 7 / 2 / 9 / 7;\n  font-size: 0.8rem;\n}\n\n.conditions-cur > .wind > .icon {\n  grid-area: 4 / 7 / 8 / 10;\n}\n\n.conditions-cur > .wind > .icon > svg {\n  fill: aqua;\n  height: 100%;\n  width: 100%;\n}\n\n.conditions-cur > .uvIndex {\n  grid-area: 6 / 2 / 10 / 6;\n  /* background-color: rgb(160, 160, 160, 0.3); */\n  background-color: rgb(255, 255, 255, 0.2);\n  backdrop-filter: blur(10px);\n  border-radius: 20px;\n  height: 90%;\n  width: 90%;\n  display: grid;\n  grid-template-columns: repeat(10, minmax(15px, 1fr));\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.conditions-cur > .uvIndex > .heading {\n  grid-area: 2 / 2 / 4 / 10;\n  font-weight: 500;\n}\n\n.conditions-cur > .uvIndex > .value {\n  grid-area: 4 / 2 / 7 / 7;\n  font-size: 2rem;\n  font-weight: 300;\n}\n\n.conditions-cur > .uvIndex > .value > .unit {\n  font-size: 0.8rem;\n}\n\n.conditions-cur > .uvIndex > .info {\n  grid-area: 7 / 2 / 9 / 7;\n  font-size: 0.8rem;\n}\n\n.conditions-cur > .uvIndex > .icon {\n  grid-area: 4 / 7 / 8 / 10;\n}\n\n.conditions-cur > .uvIndex > .icon > svg {\n  fill: greenyellow;\n  height: 100%;\n  width: 100%;\n}\n\n\n.conditions-cur > .humidity {\n  grid-area: 2 / 6 / 6 / 10;\n  /* background-color: rgb(160, 160, 160, 0.3); */\n  background-color: rgb(255, 255, 255, 0.2);\n  backdrop-filter: blur(10px);\n  border-radius: 20px;\n  height: 90%;\n  width: 90%;\n  display: grid;\n  grid-template-columns: repeat(10, minmax(15px, 1fr));\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.conditions-cur > .humidity > .heading {\n  grid-area: 2 / 2 / 4 / 10;\n  font-weight: 500;\n}\n\n.conditions-cur > .humidity > .value {\n  grid-area: 4 / 2 / 7 / 7;\n  font-size: 2rem;\n  font-weight: 300;\n}\n\n.conditions-cur > .humidity > .value > .unit {\n  font-size: 0.8rem;\n}\n\n.conditions-cur > .humidity > .info {\n  grid-area: 7 / 2 / 9 / 7;\n  font-size: 0.8rem;\n}\n\n.conditions-cur > .humidity > .icon {\n  grid-area: 4 / 7 / 8 / 10;\n}\n\n.conditions-cur > .humidity > .icon > svg {\n  fill: orange;\n  height: 100%;\n  width: 100%;\n}\n\n\n.conditions-cur > .pressure {\n  grid-area: 6 / 6 / 10 / 10;\n  /* background-color: rgb(160, 160, 160, 0.3); */\n  background-color: rgb(255, 255, 255, 0.2);\n  backdrop-filter: blur(10px);\n  border-radius: 20px;\n  height: 90%;\n  width: 90%;\n  display: grid;\n  grid-template-columns: repeat(10, minmax(15px, 1fr));\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.conditions-cur > .pressure > .heading {\n  grid-area: 2 / 2 / 4 / 10;\n  font-weight: 500;\n}\n\n.conditions-cur > .pressure > .value {\n  grid-area: 4 / 2 / 7 / 7;\n  font-size: 2rem;\n  font-weight: 300;\n}\n\n.conditions-cur > .pressure > .value > .unit {\n  font-size: 0.8rem;\n}\n\n.conditions-cur > .pressure > .info {\n  grid-area: 7 / 2 / 9 / 7;\n  font-size: 0.8rem;\n}\n\n.conditions-cur > .pressure > .icon {\n  grid-area: 4 / 7 / 8 / 10;\n}\n\n.conditions-cur > .pressure > .icon > svg {\n  fill: rgb(0, 80, 184);\n  height: 100%;\n  width: 100%;\n}\n\n\n.sunrise-set-cur {\n  grid-area: 5 / 1 / 6 / 2;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 19px);\n}\n\n.sunrise-set-cur > div {\n  /* background-color: rgb(160, 160, 160, 0.3); */\n  background-color: rgb(255, 255, 255, 0.2);\n  backdrop-filter: blur(10px);\n  grid-area: 1 / 2 / 10 / 10;\n  width: 95%;\n  border-radius: 15px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.sunrise-set-cur > div > .first {\n  grid-area: 2 / 2 / 3 / 6;\n}\n\n.sunrise-set-cur > div > .time1 {\n  grid-area: 3 / 2 / 5 / 6;\n  font-size: 2em;\n}\n\n.sunrise-set-cur > div > .second {\n  grid-area: 6 / 2 / 7 / 6;\n}\n\n.sunrise-set-cur > div > .time2 {\n  grid-area: 7 / 2 / 9 / 6;\n  font-size: 2em;\n}\n\n.sunrise-set-cur > div .units {\n  font-size: 0.5em;\n}\n\n.sunrise-set-cur > div > .icon {\n  grid-area: 4 / 6 / 9 / 9;\n}\n\n.sunrise-set-cur > div > .icon > svg {\n  width: 100%;\n  height: 100%;\n  fill: yellow;\n}\n\n\n.hourly-forecast {\n  grid-area: 3 / 2 / 4 / 3;\n  /* background-color: rgb(160, 160, 160, 0.3); */\n  background-color: rgb(255, 255, 255, 0.2);\n  backdrop-filter: blur(10px);\n  border-radius: 20px;\n  height: 95%;\n  width: 99%;\n  display: grid;\n  grid-template-rows: 1fr 7fr;\n  row-gap: 10px;\n  padding: 10px;\n  box-sizing: border-box;\n}\n\n.hourly-forecast > .heading {\n  font-size: 1.2em;\n  padding-left: 5px;\n}\n\n.hourly-forecast > .main {\n  display: grid;\n  grid-template-columns: 100px;\n  grid-auto-columns: 100px;\n  column-gap: 10px;\n  overflow-x: scroll;\n  grid-auto-flow: column;\n  overflow-y: hidden;\n}\n\n.hourly-forecast > .main > .hour {\n  display: grid;\n  grid-template-rows: 1fr 2fr 1fr;\n  justify-content: center;\n  background-color: rgb(255, 255, 255, 0.3);\n  border-radius: 10px;\n  height: 90%;\n}\n\n.hourly-forecast > .main > .hour > .temp {\n  font-size: 2rem;\n  align-self: self-end;\n  text-align: center;\n}\n\n.hourly-forecast > .main > .hour > .icon {\n  background-image: url(https://cdn.weatherapi.com/weather/64x64/night/116.png);\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 80px;\n}\n\n.hourly-forecast > .main > .hour > .time {\n  text-align: center;\n}\n\n\n\n\n/* scrollbar  */\n\n* {\n  scrollbar-width: thin;\n  scrollbar-color:rgb(80, 80, 80, 0.4) rgb(256, 256, 256, 0.2);\n}\n\n*::-webkit-scrollbar {\n  height: 5px;\n}\n    \n*::-webkit-scrollbar-track {\n  background: rgb(256, 256, 256, 0.2);\n}\n  \n*::-webkit-scrollbar-thumb {\n  background-color: rgb(80, 80, 80, 0.4);\n}\n\n/* scrollbar  */\n\n\n.forecast {\n  grid-area: 4 / 2 / 6 / 3;\n  /* background-color: rgb(160, 160, 160, 0.3); */\n  background-color: rgb(255, 255, 255, 0.2);\n  backdrop-filter: blur(10px);\n  border-radius: 20px;\n  width: 99%;\n  padding: 10px;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-rows: 0.5fr 3fr 3fr 3fr;\n  row-gap: 10px;\n}\n\n.forecast > .heading {\n  font-size: 1.2rem;\n  padding-left: 5px;\n}\n\n.forecast > .day {\n  background-color: rgb(255, 255, 255, 0.3);\n  border-radius: 10px;\n  display: grid;\n  grid-template-columns: minmax(125px, 1fr) minmax(125px, 1fr) repeat(8, minmax(85px, 1fr));\n  grid-template-rows: repeat(5, 30px);\n  padding: 0px 10px;\n  box-sizing: border-box;\n}\n\n.forecast > .day > .date {\n  font-size: 1em;\n  font-weight: 300;\n  grid-area: 1 / 1 / 2 / 3;\n  align-self: self-end;\n}\n\n.forecast > .day > .high-low-temp {\n  grid-area: 2 / 1 / 4 / 3;\n  font-weight: 600;\n  font-size: 3em;\n  height: 90%;\n}\n\n.forecast > .day > .high-low-temp .slash {\n  font-size: 0.8em;\n}\n\n.forecast > .day > .high-low-temp .low {\n  color: grey;\n}\n\n.forecast > .day > .description {\n  grid-area: 4 / 1 / 6 / 2;\n}\n\n.forecast > .day > .icon {\n  grid-area: 4 / 2 / 6 / 3;\n  background-image: url(https://cdn.weatherapi.com/weather/64x64/night/116.png);\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.forecast > .day > .maxwind {\n  grid-area: 2 / 3 / 6 / 5;\n}\n\n.forecast > .day > .avhumid {\n  grid-area: 2 / 5 / 6 / 7;\n}\n\n.forecast > .day > .maxindex {\n  grid-area: 2 / 7 / 6 / 9;\n}\n\n.forecast > .day > .sunrise-set {\n  grid-area: 2 / 9 / 6 / 11;\n\n}\n\n.forecast > .day > div > .head {\n  font-weight: 500;\n  font-size: 1.1em;\n}\n\n.forecast > .day > div .value {\n  font-size: 1.5em;\n}\n\n.forecast > .day > div .units {\n  font-size: 0.6em;\n}\n\n.forecast > .day > .sunrise-set .small-title {\n  font-size: 0.6em;\n}\n\n\n\n\n\n\n\n.rain:hover, .wind:hover, .humidity:hover, .pressure:hover, .uvIndex:hover, .sunrise-set-cur > div:hover {\n  box-shadow: 0px 0px 5px 5px rgb(255, 255, 255, 0.2);\n}`,""]);const p=f},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(t)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var f=[].concat(e[d]);t&&c[f[0]]||(void 0!==o&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=o),r&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=r):f[2]=r),a&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=a):f[4]="".concat(a)),n.push(f))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var o={},c=[],i=0;i<e.length;i++){var s=e[i],d=t.base?s[0]+t.base:s[0],f=o[d]||0,u="".concat(d," ").concat(f);o[d]=f+1;var p=r(u),l={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(l);else{var m=a(l,t);t.byIndex=i,n.splice(i,0,{identifier:u,updater:m,references:1})}c.push(u)}return c}function a(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,a){var o=t(e=e||[],a=a||{});return function(e){e=e||[];for(var c=0;c<o.length;c++){var i=r(o[c]);n[i].references--}for(var s=t(e,a),d=0;d<o.length;d++){var f=r(o[d]);0===n[f].references&&(n[f].updater(),n.splice(f,1))}o=s}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,a&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},453:(e,n,r)=>{e.exports=r.p+"92d514f284f0ba4db792.jpg"}},n={};function r(t){var a=n[t];if(void 0!==a)return a.exports;var o=n[t]={id:t,exports:{}};return e[t](o,o.exports,r),o.exports}r.m=e,r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var n=r.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");if(t.length)for(var a=t.length-1;a>-1&&!e;)e=t[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.b=document.baseURI||self.location.href,r.nc=void 0,(()=>{var e=r(379),n=r.n(e),t=r(795),a=r.n(t),o=r(569),c=r.n(o),i=r(565),s=r.n(i),d=r(216),f=r.n(d),u=r(589),p=r.n(u),l=r(426),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=c().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=f(),n()(l.Z,m),l.Z&&l.Z.locals&&l.Z.locals;const h=function(e){return{current:{time:e.current.last_updated,text:e.current.condition.text,icon:e.current.condition.icon,temp_c:e.current.temp_c,temp_f:e.current.temp_f,cloud:e.current.cloud,feelslike_c:e.current.feelslike_c,feelslike_f:e.current.feelslike_f,wind_kph:e.current.wind_kph,wind_mph:e.current.wind_mph,humidity:e.current.humidity,UVIndex:e.current.uv,is_day:e.current.is_day,wind_direction:e.current.wind_dir,pressure_mbar:e.current.pressure_mb},location:{country:e.location.country,region:e.location.region,localTime:e.location.localtime,tzID:e.location.tz_id,name:e.location.name},forecast:[{hourly:[{temp_c:e.forecast.forecastday[0].hour[0].temp_c,temp_f:e.forecast.forecastday[0].hour[0].temp_f,icon:e.forecast.forecastday[0].hour[0].condition.icon,percentRain:e.forecast.forecastday[0].hour[0].chance_of_rain},{temp_c:e.forecast.forecastday[0].hour[1].temp_c,temp_f:e.forecast.forecastday[0].hour[1].temp_f,icon:e.forecast.forecastday[0].hour[1].condition.icon,percentRain:e.forecast.forecastday[0].hour[1].chance_of_rain},{temp_c:e.forecast.forecastday[0].hour[2].temp_c,temp_f:e.forecast.forecastday[0].hour[2].temp_f,icon:e.forecast.forecastday[0].hour[2].condition.icon,percentRain:e.forecast.forecastday[0].hour[2].chance_of_rain},{temp_c:e.forecast.forecastday[0].hour[3].temp_c,temp_f:e.forecast.forecastday[0].hour[3].temp_f,icon:e.forecast.forecastday[0].hour[3].condition.icon,percentRain:e.forecast.forecastday[0].hour[3].chance_of_rain},{temp_c:e.forecast.forecastday[0].hour[4].temp_c,temp_f:e.forecast.forecastday[0].hour[4].temp_f,icon:e.forecast.forecastday[0].hour[4].condition.icon,percentRain:e.forecast.forecastday[0].hour[4].chance_of_rain},{temp_c:e.forecast.forecastday[0].hour[5].temp_c,temp_f:e.forecast.forecastday[0].hour[5].temp_f,icon:e.forecast.forecastday[0].hour[5].condition.icon,percentRain:e.forecast.forecastday[0].hour[5].chance_of_rain},{temp_c:e.forecast.forecastday[0].hour[6].temp_c,temp_f:e.forecast.forecastday[0].hour[6].temp_f,icon:e.forecast.forecastday[0].hour[6].condition.icon,percentRain:e.forecast.forecastday[0].hour[6].chance_of_rain},{temp_c:e.forecast.forecastday[0].hour[7].temp_c,temp_f:e.forecast.forecastday[0].hour[7].temp_f,icon:e.forecast.forecastday[0].hour[7].condition.icon,percentRain:e.forecast.forecastday[0].hour[7].chance_of_rain},{temp_c:e.forecast.forecastday[0].hour[8].temp_c,temp_f:e.forecast.forecastday[0].hour[8].temp_f,icon:e.forecast.forecastday[0].hour[8].condition.icon,percentRain:e.forecast.forecastday[0].hour[8].chance_of_rain},{temp_c:e.forecast.forecastday[0].hour[9].temp_c,temp_f:e.forecast.forecastday[0].hour[9].temp_f,icon:e.forecast.forecastday[0].hour[9].condition.icon,percentRain:e.forecast.forecastday[0].hour[9].chance_of_rain},{temp_c:e.forecast.forecastday[0].hour[10].temp_c,temp_f:e.forecast.forecastday[0].hour[10].temp_f,icon:e.forecast.forecastday[0].hour[10].condition.icon,percentRain:e.forecast.forecastday[0].hour[10].chance_of_rain},{temp_c:e.forecast.forecastday[0].hour[11].temp_c,temp_f:e.forecast.forecastday[0].hour[11].temp_f,icon:e.forecast.forecastday[0].hour[11].condition.icon,percentRain:e.forecast.forecastday[0].hour[11].chance_of_rain},{temp_c:e.forecast.forecastday[0].hour[12].temp_c,temp_f:e.forecast.forecastday[0].hour[12].temp_f,icon:e.forecast.forecastday[0].hour[12].condition.icon,percentRain:e.forecast.forecastday[0].hour[12].chance_of_rain},{temp_c:e.forecast.forecastday[0].hour[13].temp_c,temp_f:e.forecast.forecastday[0].hour[13].temp_f,icon:e.forecast.forecastday[0].hour[13].condition.icon,percentRain:e.forecast.forecastday[0].hour[13].chance_of_rain},{temp_c:e.forecast.forecastday[0].hour[14].temp_c,temp_f:e.forecast.forecastday[0].hour[14].temp_f,icon:e.forecast.forecastday[0].hour[14].condition.icon,percentRain:e.forecast.forecastday[0].hour[14].chance_of_rain},{temp_c:e.forecast.forecastday[0].hour[15].temp_c,temp_f:e.forecast.forecastday[0].hour[15].temp_f,icon:e.forecast.forecastday[0].hour[15].condition.icon,percentRain:e.forecast.forecastday[0].hour[15].chance_of_rain},{temp_c:e.forecast.forecastday[0].hour[16].temp_c,temp_f:e.forecast.forecastday[0].hour[16].temp_f,icon:e.forecast.forecastday[0].hour[16].condition.icon,percentRain:e.forecast.forecastday[0].hour[16].chance_of_rain},{temp_c:e.forecast.forecastday[0].hour[17].temp_c,temp_f:e.forecast.forecastday[0].hour[17].temp_f,icon:e.forecast.forecastday[0].hour[17].condition.icon,percentRain:e.forecast.forecastday[0].hour[17].chance_of_rain},{temp_c:e.forecast.forecastday[0].hour[18].temp_c,temp_f:e.forecast.forecastday[0].hour[18].temp_f,icon:e.forecast.forecastday[0].hour[18].condition.icon,percentRain:e.forecast.forecastday[0].hour[18].chance_of_rain},{temp_c:e.forecast.forecastday[0].hour[19].temp_c,temp_f:e.forecast.forecastday[0].hour[19].temp_f,icon:e.forecast.forecastday[0].hour[19].condition.icon,percentRain:e.forecast.forecastday[0].hour[19].chance_of_rain},{temp_c:e.forecast.forecastday[0].hour[20].temp_c,temp_f:e.forecast.forecastday[0].hour[20].temp_f,icon:e.forecast.forecastday[0].hour[20].condition.icon,percentRain:e.forecast.forecastday[0].hour[20].chance_of_rain},{temp_c:e.forecast.forecastday[0].hour[21].temp_c,temp_f:e.forecast.forecastday[0].hour[21].temp_f,icon:e.forecast.forecastday[0].hour[21].condition.icon,percentRain:e.forecast.forecastday[0].hour[21].chance_of_rain},{temp_c:e.forecast.forecastday[0].hour[22].temp_c,temp_f:e.forecast.forecastday[0].hour[22].temp_f,icon:e.forecast.forecastday[0].hour[22].condition.icon,percentRain:e.forecast.forecastday[0].hour[22].chance_of_rain},{temp_c:e.forecast.forecastday[0].hour[23].temp_c,temp_f:e.forecast.forecastday[0].hour[23].temp_f,icon:e.forecast.forecastday[0].hour[23].condition.icon,percentRain:e.forecast.forecastday[0].hour[23].chance_of_rain}],date:e.forecast.forecastday[0].date,maxwind_kph:e.forecast.forecastday[0].day.maxwind_kph,maxwind_mph:e.forecast.forecastday[0].day.maxwind_mph,averageHumidity:e.forecast.forecastday[0].day.avghumidity,sunrise:e.forecast.forecastday[0].astro.sunrise.slice(0,-3),sunset:e.forecast.forecastday[0].astro.sunset.slice(0,-3),UVIndex:e.forecast.forecastday[0].day.uv,willRain:e.forecast.forecastday[0].day.daily_will_it_rain,maxTemp_c:e.forecast.forecastday[0].day.maxtemp_c,maxTemp_f:e.forecast.forecastday[0].day.maxtemp_f,minTemp_c:e.forecast.forecastday[2].day.mintemp_c,minTemp_f:e.forecast.forecastday[2].day.mintemp_f,text:e.forecast.forecastday[0].day.condition.text,icon:e.forecast.forecastday[0].day.condition.icon},{date:e.forecast.forecastday[1].date,maxwind_kph:e.forecast.forecastday[1].day.maxwind_kph,maxwind_mph:e.forecast.forecastday[1].day.maxwind_mph,averageHumidity:e.forecast.forecastday[1].day.avghumidity,sunrise:e.forecast.forecastday[1].astro.sunrise.slice(0,-3),sunset:e.forecast.forecastday[1].astro.sunset.slice(0,-3),UVIndex:e.forecast.forecastday[1].day.uv,willRain:e.forecast.forecastday[1].day.daily_will_it_rain,maxTemp_c:e.forecast.forecastday[1].day.maxtemp_c,maxTemp_f:e.forecast.forecastday[1].day.maxtemp_f,minTemp_c:e.forecast.forecastday[2].day.mintemp_c,minTemp_f:e.forecast.forecastday[2].day.mintemp_f,text:e.forecast.forecastday[1].day.condition.text,icon:e.forecast.forecastday[1].day.condition.icon},{date:e.forecast.forecastday[2].date,maxwind_kph:e.forecast.forecastday[2].day.maxwind_kph,maxwind_mph:e.forecast.forecastday[2].day.maxwind_mph,averageHumidity:e.forecast.forecastday[2].day.avghumidity,sunrise:e.forecast.forecastday[2].astro.sunrise.slice(0,-3),sunset:e.forecast.forecastday[2].astro.sunset.slice(0,-3),UVIndex:e.forecast.forecastday[2].day.uv,willRain:e.forecast.forecastday[2].day.dail_will_it__rain,maxTemp_c:e.forecast.forecastday[2].day.maxtemp_c,maxTemp_f:e.forecast.forecastday[2].day.maxtemp_f,minTemp_c:e.forecast.forecastday[2].day.mintemp_c,minTemp_f:e.forecast.forecastday[2].day.mintemp_f,text:e.forecast.forecastday[2].day.condition.text,icon:e.forecast.forecastday[2].day.condition.icon}]}},y=function(){const e="a21a520a8ece4a8bb1c73708241101",n="http://api.weatherapi.com/v1";return{getCurrentWeather:async function(r){let t=await fetch(`${n}/current.json?key=${e}&q=${r}`,{mode:"cors"});t=await t.json(),console.log(t)},getForecastWeather:function(r){return fetch(`${n}/forecast.json?key=${e}&q=${r}&days=3`,{mode:"cors"}).then((function(e){if(!e.ok)throw new Error(`${e.statusText}, ${e.status}`);return e.json()})).then((function(e){return h(e)})).catch((function(e){console.log(e)}))}}}(),g=document.querySelector("input"),_=function(){const e=document.querySelector(".major-cur > .temp-cur"),n=document.querySelector(".major-cur > .high-low-temp"),r=document.querySelector(".major-cur > .cur-description"),t=document.querySelector(".major-cur > .icon"),a=document.querySelector(".major-cur > .feels-like"),o=document.querySelector(".major-cur > .rain");function c(c){e.innerHTML=`${Math.round(Number(c.current.temp_c))}&deg;`,n.innerHTML=`High: ${c.forecast[0].maxTemp_c}&deg; &#x2022; Low: ${c.forecast[0].minTemp_c}&deg;`,r.innerHTML=`${c.current.text}`,t.style=`background-image: url(https:${c.current.icon})`,a.innerHTML=`Feels like ${c.current.feelslike_c}&deg;`,c.forecast[0].willRain?o.style="display: grid;":o.style="display: none"}const i=document.querySelector(".conditions-cur > .wind > .value"),s=document.querySelector(".conditions-cur > .wind > .info"),d=document.querySelector(".conditions-cur > .humidity > .value"),f=document.querySelector(".conditions-cur > .humidity > .info"),u=document.querySelector(".conditions-cur > .pressure > .value"),p=document.querySelector(".conditions-cur > .uvIndex > .value"),l=document.querySelector(".conditions-cur > .uvIndex > .info");function m(e,n){let r="",t="";switch(e){case"N":r="North";break;case"NNE":r="North North East";break;case"NNW":r="North North West";break;case"S":r="South";break;case"SSW":r="South South West";break;case"SSE":r="South South East";break;case"E":r="East";break;case"ENE":r="East North East";break;case"ESE":r="East South East";break;case"W":r="West";break;case"WNW":r="West North West";break;case"WSW":r="West South West";break;case"NE":r="North East";break;case"NW":r="North West";break;case"SE":r="South East";break;case"SW":r="South West"}return t=Number(n)<11?"Light":Number(n)<19?"Gentle":Number(n)<28?"Moderate":Number(n)<49?"Strong":"Storm",{windDirection:r,windDescription:t}}function h(e){i.innerHTML=`${e.current.wind_kph}<span class="unit">km/h</span>`;const{windDirection:n,windDescription:r}=m(e.current.wind_direction,e.current.wind_kph);s.innerHTML=`${r} &#x2022; From ${n}`,d.innerHTML=`${e.current.humidity} <span class="unit">%`,f.innerHTML="Nice! you found the easter egg!",u.innerHTML=`${e.current.pressure_mbar} <span class="unit"></span>`,p.innerHTML=`${e.current.UVIndex} <span class="unit"></span>`;let t="";t=e.current.UVIndex<3?"Low":e.current.UVIndex<9?"Medium":"Extreme",l.innerHTML=t}const y=document.querySelector(".sunrise-set-cur > div > .time1"),_=document.querySelector(".sunrise-set-cur > div > .time2");function x(e){y.innerHTML=`${e.forecast[0].sunrise} <span class="units">AM</span>`,_.innerHTML=`${e.forecast[0].sunset} <span class="units">PM</span>`}function b(e){g.placeholder=e.location.name}const w=document.querySelector(".hourly-forecast > .main");function v(e){w.innerHTML="";const n=Number(e.current.time.slice(10,-3));for(let r=n;r<24;++r){const t=document.createElement("div");t.classList.add("hour");const a=document.createElement("span");a.classList.add("time"),a.innerHTML=r==n?"Now":r<9?`0${r}:00`:`${r}:00`;const o=document.createElement("div");o.classList.add("icon"),o.style=`background-image: url(https:${e.forecast[0].hourly[r].icon}`;const c=document.createElement("span");c.classList.add("temp"),c.innerHTML=`${e.forecast[0].hourly[r].temp_c}&deg;`,t.appendChild(c),t.appendChild(o),t.appendChild(a),w.appendChild(t)}}function k(e){for(let n=0;n<3;n++){let r="";r=0==n?"one":1==n?"two":"three";let t="";if(0==n)t="Today";else{const r=new Date(e.forecast[n].date);t=`${["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][r.getDay()]}, ${["January","February","March","April","May","June","July","August","September","October","November","December"][r.getMonth()]}\n         ${r.getDate()}\n        `}document.querySelector(`.forecast > .${r} >.date`).innerHTML=t,document.querySelector(`.forecast > .${r} > .high-low-temp`).innerHTML=`\n      ${e.forecast[n].maxTemp_c}&deg;<span class="low"><span class="slash">/</span>${e.forecast[n].minTemp_c}&deg;</span>\n      `,document.querySelector(`.forecast > .${r} > .icon`).style=`\n      background-image: url(https:${e.forecast[n].icon});\n      `,document.querySelector(`.forecast > .${r} > .description`).innerHTML=e.forecast[n].text;const a=m("N",e.forecast[n].maxwind_kph);document.querySelector(`.forecast > .${r} > .maxwind .value`).innerHTML=`\n      ${e.forecast[n].maxwind_kph}<span class="units">km/hr</span>\n      `,document.querySelector(`.forecast > .${r} > .maxwind .description`).innerHTML=a.windDescription,document.querySelector(`.forecast > .${r} > .avhumid .value`).innerHTML=`\n      ${e.forecast[n].averageHumidity}<span class="units">%</span>\n      `,document.querySelector(`.forecast > .${r} > .maxindex .value`).innerHTML=e.forecast[n].UVIndex;let o="";o=e.forecast[n].UVIndex<3?"Low":e.forecast[n].UVIndex<9?"Medium":"Extreme",document.querySelector(`.forecast > .${r} > .maxindex .description`).innerHTML=o,document.querySelector(`.forecast > .${r} > .sunrise-set .rise`).innerHTML=`\n      ${e.forecast[n].sunrise} <span class="units">AM</span> <span class="small-title">&#x2022; Sunrise</span>\n      `,document.querySelector(`.forecast > .${r} > .sunrise-set .set`).innerHTML=`\n      ${e.forecast[n].sunset} <span class="units">PM</span> <span class="small-title">&#x2022; Sunset</span>\n      `}}return{fillForecast:k,fillHourForecast:v,fillMain:c,fillConditions:h,fillSunriseSet:x,fillLeft:function(e){b(e),h(e),c(e),x(e),v(e),k(e)},fillPlaceHolder:b}}(),x=document.querySelector("form");x.addEventListener("submit",(function(e){e.preventDefault(),g.placeholder="Loading",y.getForecastWeather(g.value.trim()).then((function(e){_.fillLeft(e)})),x.reset()})),document.getElementById("search-svg").onclick=function(e){g.value&&(e.preventDefault(),g.placeholder="Loading",y.getForecastWeather(g.value.trim()).then((function(e){_.fillLeft(e)})),x.reset())},window.onload=function(){g.placeholder="Loading",y.getForecastWeather("Kampala").then((function(e){_.fillLeft(e)}))}})()})();