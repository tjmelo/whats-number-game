(()=>{"use strict";var e={320:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(81),r=n.n(a),s=n(645),l=n.n(s)()(r());l.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&display=swap);"]),l.push([e.id,':root{--background: linear-gradient(to bottom, #eeeeee, #ffffff);--orange-linear: linear-gradient(#ef6C00, #db6300 );--gray-linear: linear-gradient(to bottom, #434854, #9e9e9e);--flat-orange: #ff6600;--flat-red: #cc3300;--flat-green: #32BF00;--gray: #cfcfcf;--white: #ffffff}*{border:none;list-style:none;margin:0;outline:none;padding:0;box-sizing:border-box}body,html{height:100%}body{background:var(--background);align-items:center;display:flex;font-family:"Montserrat",sans-serif;justify-content:center}.main{padding:1.875em;width:100%;max-width:32.4375em}@media(min-width: 33.125em){.main{width:67.9452055%}}.title-number{align-items:center;background:var(--orange-linear);display:flex;flex-flow:column wrap;font-size:6vw;font-weight:800;line-height:1.8125em;text-transform:uppercase;letter-spacing:-1px;-webkit-background-clip:text;-webkit-text-fill-color:transparent}@media(min-width: 22.5em){.title-number{font-size:1.5em}}@media(min-width: 50em){.title-number{font-size:2.25em}}.title-number:after{border-bottom:1px solid var(--gray);content:"";display:block;margin-top:5px;width:80%}.hint{display:flex;flex-flow:column wrap}.hint__input{background:transparent;border:1px solid var(--flat-orange);border-radius:4px;font-size:.75em;margin-bottom:1em;padding:1em .5em;width:100%}.hint__input::placeholder{color:#9e9e9e}.hint__input:-moz-placeholder{color:#9e9e9e}.hint__input:disabled{background:#f5f5f5;border-color:var(--gray);color:#9e9e9e}.hint__send{background:var(--orange-linear);border-radius:4px;color:var(--white);cursor:pointer;font-weight:700;padding:1em;text-transform:uppercase;text-align:center;width:100%}.hint__send:disabled{background:#ddd;cursor:auto}@media(min-width: 22.5em){.hint{flex-flow:row wrap;justify-content:space-between}.hint__input{margin-bottom:0;width:70%}.hint__send{width:25%}}.view-number{align-items:center;display:flex;flex-flow:column;margin:16.4965986% 0}.view-number .feedback{font-size:1em;font-weight:700;order:0}.view-number__number{order:1;display:flex;flex-flow:row nowrap;gap:.5em;justify-content:space-between}.view-number svg{margin:3em 0}.feedback-menor,.feedback-maior{color:var(--flat-orange)}.feedback-win{color:var(--flat-green)}.feedback-error{color:var(--flat-red);text-transform:uppercase}.new-number{align-items:center;background:var(--gray-linear);border-radius:4px;color:var(--white);cursor:pointer;display:flex;font-weight:700;order:3;padding:.8em 1em .8em .8em;text-transform:uppercase}.new-number:before{content:"";display:inline-block;height:2em;width:2em}.new-number:disabled{display:none}.segment-error .segment{fill:var(--flat-red)}.segment-win .segment{fill:var(--flat-green)}',""]);const i=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,s){"string"==typeof e&&(e=[[null,e,void 0]]);var l={};if(a)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(l[o]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);a&&l[c[0]]||(void 0!==s&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=s),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var s={},l=[],i=0;i<e.length;i++){var o=e[i],d=a.base?o[0]+a.base:o[0],c=s[d]||0,f="".concat(d," ").concat(c);s[d]=c+1;var p=n(f),m={css:o[1],media:o[2],sourceMap:o[3],supports:o[4],layer:o[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var h=r(m,a);a.byIndex=i,t.splice(i,0,{identifier:f,updater:h,references:1})}l.push(f)}return l}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var s=a(e=e||[],r=r||{});return function(e){e=e||[];for(var l=0;l<s.length;l++){var i=n(s[l]);t[i].references--}for(var o=a(e,r),d=0;d<s.length;d++){var c=n(s[d]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}s=o}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var s=t[a]={id:a,exports:{}};return e[a](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e={btnSend:document.querySelector(".hint__send"),inputSend:document.querySelector(".hint__input"),feedback:document.querySelector(".view-number"),newNumber:document.querySelector(".new-number"),hint:document.querySelectorAll(".number"),segment:document.querySelector(".view-number__number"),reset:'<svg width="75" height="135" viewBox="0 0 75 135">\n                <path d="M17.269 14.8295H57.5517L71.4885 1.59469C70.1985 0.597611 68.5846 3.8147e-06 66.8301 3.8147e-06H7.63794C5.89411 3.8147e-06 4.29303 0.589093 3.00726 1.57233L17.269 14.8295Z" fill="#262A34"/>\n                <path d="M1.71614 2.8155C0.644493 4.1311 0 5.80888 0 7.63687V59.4298C0 62.3986 1.69695 64.9659 4.17155 66.2293L15.8425 57.4825V15.947L1.71614 2.8155Z" fill="#262A34"/>\n                <path d="M58.6244 16.2662V57.4704L70.2954 66.2173C72.77 64.9539 74.4669 62.3866 74.4669 59.4177V7.62484C74.4669 5.80751 73.8299 4.14251 72.7721 2.83224L58.6244 16.2662Z" fill="#262A34"/>\n                <path d="M17.269 120.169H57.5517L71.4885 133.405C70.1985 134.4 68.5846 135 66.8301 135H7.63793C5.8941 135 4.29302 134.409 3.00726 133.426L17.269 120.169Z" fill="#262A34"/>\n                <path d="M1.71614 132.194C0.644493 130.88 0 129.203 0 127.374V75.5812C0 72.6124 1.69695 70.0461 4.17155 68.7817L15.8425 77.5285V119.064L1.71614 132.194Z" fill="#262A34"/>\n                <path class="segment" d="M58.6244 118.721V77.5165L70.2954 68.7696C72.77 70.0341 74.4669 72.6003 74.4669 75.5692V127.362C74.4669 129.178 73.8299 130.843 72.7721 132.156L58.6244 118.721Z" fill="#262A34"/>\n                <path d="M57.4494 59.39H17.0175L6.24985 67.3273L17.0175 75.2656H32.4329H42.034H57.4494L68.217 67.3273L57.4494 59.39Z" fill="#DDDDDD"/>\n            </svg>'},{btnSend:t,inputSend:a,feedback:r,classReference:s,newNumber:l,hint:i,reset:o,segment:d}=e,c=(e,t)=>{(e=>{const t=e||"502",n=[],a=e=>{switch(e){case"1":var t='<svg width="75" height="135" viewBox="0 0 75 135">\n                            <path d="M17.269 14.8295H57.5517L71.4885 1.59469C70.1985 0.597611 68.5846 3.8147e-06 66.8301 3.8147e-06H7.63794C5.89411 3.8147e-06 4.29303 0.589093 3.00726 1.57233L17.269 14.8295Z" fill="#DDDDDD"/>\n                            <path d="M1.71614 2.8155C0.644493 4.1311 0 5.80888 0 7.63687V59.4298C0 62.3986 1.69695 64.9659 4.17155 66.2293L15.8425 57.4825V15.947L1.71614 2.8155Z" fill="#DDDDDD"/>\n                            <path d="M58.6244 16.2662V57.4704L70.2954 66.2173C72.77 64.9539 74.4669 62.3866 74.4669 59.4177V7.62484C74.4669 5.80751 73.8299 4.14251 72.7721 2.83224L58.6244 16.2662Z" fill="#262A34" class="segment"/>\n                            <path d="M17.269 120.169H57.5517L71.4885 133.405C70.1985 134.4 68.5846 135 66.8301 135H7.63793C5.8941 135 4.29302 134.409 3.00726 133.426L17.269 120.169Z" fill="#DDDDDD"/>\n                            <path d="M1.71614 132.194C0.644493 130.88 0 129.203 0 127.374V75.5812C0 72.6124 1.69695 70.0461 4.17155 68.7817L15.8425 77.5285V119.064L1.71614 132.194Z" fill="#DDDDDD"/>\n                            <path d="M58.6244 118.721V77.5165L70.2954 68.7696C72.77 70.0341 74.4669 72.6003 74.4669 75.5692V127.362C74.4669 129.178 73.8299 130.843 72.7721 132.156L58.6244 118.721Z" fill="#262A34" class="segment"/>\n                            <path d="M57.4494 59.39H17.0175L6.24985 67.3273L17.0175 75.2656H32.4329H42.034H57.4494L68.217 67.3273L57.4494 59.39Z" fill="#DDDDDD"/>\n                        </svg>';break;case"2":t='<svg width="75" height="135" viewBox="0 0 75 135">\n                            <path d="M17.269 14.8295H57.5517L71.4885 1.59469C70.1985 0.597611 68.5846 3.8147e-06 66.8301 3.8147e-06H7.63794C5.89411 3.8147e-06 4.29303 0.589093 3.00726 1.57233L17.269 14.8295Z" fill="#262A34" class="segment"/>\n                            <path d="M1.71614 2.8155C0.644493 4.1311 0 5.80888 0 7.63687V59.4298C0 62.3986 1.69695 64.9659 4.17155 66.2293L15.8425 57.4825V15.947L1.71614 2.8155Z" fill="#DDDDDD"/>\n                            <path d="M58.6244 16.2662V57.4704L70.2954 66.2173C72.77 64.9539 74.4669 62.3866 74.4669 59.4177V7.62484C74.4669 5.80751 73.8299 4.14251 72.7721 2.83224L58.6244 16.2662Z" fill="#262A34" class="segment"/>\n                            <path d="M17.269 120.169H57.5517L71.4885 133.405C70.1985 134.4 68.5846 135 66.8301 135H7.63793C5.8941 135 4.29302 134.409 3.00726 133.426L17.269 120.169Z" fill="#262A34" class="segment"/>\n                            <path d="M1.71614 132.194C0.644493 130.88 0 129.203 0 127.374V75.5812C0 72.6124 1.69695 70.0461 4.17155 68.7817L15.8425 77.5285V119.064L1.71614 132.194Z" fill="#262A34" class="segment"/>\n                            <path d="M58.6244 118.721V77.5165L70.2954 68.7696C72.77 70.0341 74.4669 72.6003 74.4669 75.5692V127.362C74.4669 129.178 73.8299 130.843 72.7721 132.156L58.6244 118.721Z" fill="#DDDDDD"/>\n                            <path d="M57.4494 59.39H17.0175L6.24985 67.3273L17.0175 75.2656H32.4329H42.034H57.4494L68.217 67.3273L57.4494 59.39Z" fill="#262A34" class="segment"/>\n                        </svg>';break;case"3":t='<svg width="75" height="135" viewBox="0 0 75 135">\n                            <path d="M17.269 14.8295H57.5517L71.4885 1.59469C70.1985 0.597611 68.5846 3.8147e-06 66.8301 3.8147e-06H7.63794C5.89411 3.8147e-06 4.29303 0.589093 3.00726 1.57233L17.269 14.8295Z" fill="#262A34" class="segment"/>\n                            <path d="M1.71614 2.8155C0.644493 4.1311 0 5.80888 0 7.63687V59.4298C0 62.3986 1.69695 64.9659 4.17155 66.2293L15.8425 57.4825V15.947L1.71614 2.8155Z" fill="#DDDDDD"/>\n                            <path d="M58.6244 16.2662V57.4704L70.2954 66.2173C72.77 64.9539 74.4669 62.3866 74.4669 59.4177V7.62484C74.4669 5.80751 73.8299 4.14251 72.7721 2.83224L58.6244 16.2662Z" fill="#262A34" class="segment"/>\n                            <path d="M17.269 120.169H57.5517L71.4885 133.405C70.1985 134.4 68.5846 135 66.8301 135H7.63793C5.8941 135 4.29302 134.409 3.00726 133.426L17.269 120.169Z" fill="#262A34" class="segment"/>\n                            <path d="M1.71614 132.194C0.644493 130.88 0 129.203 0 127.374V75.5812C0 72.6124 1.69695 70.0461 4.17155 68.7817L15.8425 77.5285V119.064L1.71614 132.194Z" fill="#DDDDDD"/>\n                            <path d="M58.6244 118.721V77.5165L70.2954 68.7696C72.77 70.0341 74.4669 72.6003 74.4669 75.5692V127.362C74.4669 129.178 73.8299 130.843 72.7721 132.156L58.6244 118.721Z" fill="#262A34" class="segment"/>\n                            <path d="M57.4494 59.39H17.0175L6.24985 67.3273L17.0175 75.2656H32.4329H42.034H57.4494L68.217 67.3273L57.4494 59.39Z" fill="#262A34" class="segment"/>\n                        </svg>';break;case"4":t='<svg width="75" height="135" viewBox="0 0 75 135">\n                            <path d="M17.269 14.8295H57.5517L71.4885 1.59469C70.1985 0.597611 68.5846 3.8147e-06 66.8301 3.8147e-06H7.63794C5.89411 3.8147e-06 4.29303 0.589093 3.00726 1.57233L17.269 14.8295Z" fill="#DDDDDD"/>\n                            <path d="M1.71614 2.8155C0.644493 4.1311 0 5.80888 0 7.63687V59.4298C0 62.3986 1.69695 64.9659 4.17155 66.2293L15.8425 57.4825V15.947L1.71614 2.8155Z" fill="#262A34" class="segment"/>\n                            <path d="M58.6244 16.2662V57.4704L70.2954 66.2173C72.77 64.9539 74.4669 62.3866 74.4669 59.4177V7.62484C74.4669 5.80751 73.8299 4.14251 72.7721 2.83224L58.6244 16.2662Z" fill="#262A34" class="segment"/>\n                            <path d="M17.269 120.169H57.5517L71.4885 133.405C70.1985 134.4 68.5846 135 66.8301 135H7.63793C5.8941 135 4.29302 134.409 3.00726 133.426L17.269 120.169Z" fill="#DDDDDD"/>\n                            <path d="M1.71614 132.194C0.644493 130.88 0 129.203 0 127.374V75.5812C0 72.6124 1.69695 70.0461 4.17155 68.7817L15.8425 77.5285V119.064L1.71614 132.194Z" fill="#DDDDDD"/>\n                            <path d="M58.6244 118.721V77.5165L70.2954 68.7696C72.77 70.0341 74.4669 72.6003 74.4669 75.5692V127.362C74.4669 129.178 73.8299 130.843 72.7721 132.156L58.6244 118.721Z" fill="#262A34" class="segment"/>\n                            <path d="M57.4494 59.39H17.0175L6.24985 67.3273L17.0175 75.2656H32.4329H42.034H57.4494L68.217 67.3273L57.4494 59.39Z" fill="#262A34" class="segment"/>\n                        </svg>';break;case"5":t='<svg width="75" height="135" viewBox="0 0 75 135">\n                            <path d="M17.269 14.8295H57.5517L71.4885 1.59469C70.1985 0.597611 68.5846 3.8147e-06 66.8301 3.8147e-06H7.63794C5.89411 3.8147e-06 4.29303 0.589093 3.00726 1.57233L17.269 14.8295Z" fill="#262A34" class="segment"/>\n                            <path d="M1.71614 2.8155C0.644493 4.1311 0 5.80888 0 7.63687V59.4298C0 62.3986 1.69695 64.9659 4.17155 66.2293L15.8425 57.4825V15.947L1.71614 2.8155Z" fill="#262A34" class="segment"/>\n                            <path d="M58.6244 16.2662V57.4704L70.2954 66.2173C72.77 64.9539 74.4669 62.3866 74.4669 59.4177V7.62484C74.4669 5.80751 73.8299 4.14251 72.7721 2.83224L58.6244 16.2662Z" fill="#DDDDDD"/>\n                            <path d="M17.269 120.169H57.5517L71.4885 133.405C70.1985 134.4 68.5846 135 66.8301 135H7.63793C5.8941 135 4.29302 134.409 3.00726 133.426L17.269 120.169Z" fill="#262A34" class="segment"/>\n                            <path d="M1.71614 132.194C0.644493 130.88 0 129.203 0 127.374V75.5812C0 72.6124 1.69695 70.0461 4.17155 68.7817L15.8425 77.5285V119.064L1.71614 132.194Z" fill="#DDDDDD"/>\n                            <path d="M58.6244 118.721V77.5165L70.2954 68.7696C72.77 70.0341 74.4669 72.6003 74.4669 75.5692V127.362C74.4669 129.178 73.8299 130.843 72.7721 132.156L58.6244 118.721Z" fill="#262A34" class="segment"/>\n                            <path d="M57.4494 59.39H17.0175L6.24985 67.3273L17.0175 75.2656H32.4329H42.034H57.4494L68.217 67.3273L57.4494 59.39Z" fill="#262A34" class="segment"/>\n                        </svg>';break;case"6":t='<svg width="75" height="135" viewBox="0 0 75 135">\n                            <path d="M17.269 14.8295H57.5517L71.4885 1.59469C70.1985 0.597611 68.5846 3.8147e-06 66.8301 3.8147e-06H7.63794C5.89411 3.8147e-06 4.29303 0.589093 3.00726 1.57233L17.269 14.8295Z" fill="#262A34" class="segment"/>\n                            <path d="M1.71614 2.8155C0.644493 4.1311 0 5.80888 0 7.63687V59.4298C0 62.3986 1.69695 64.9659 4.17155 66.2293L15.8425 57.4825V15.947L1.71614 2.8155Z" fill="#262A34" class="segment"/>\n                            <path d="M58.6244 16.2662V57.4704L70.2954 66.2173C72.77 64.9539 74.4669 62.3866 74.4669 59.4177V7.62484C74.4669 5.80751 73.8299 4.14251 72.7721 2.83224L58.6244 16.2662Z" fill="#DDDDDD"/>\n                            <path d="M17.269 120.169H57.5517L71.4885 133.405C70.1985 134.4 68.5846 135 66.8301 135H7.63793C5.8941 135 4.29302 134.409 3.00726 133.426L17.269 120.169Z" fill="#262A34" class="segment"/>\n                            <path d="M1.71614 132.194C0.644493 130.88 0 129.203 0 127.374V75.5812C0 72.6124 1.69695 70.0461 4.17155 68.7817L15.8425 77.5285V119.064L1.71614 132.194Z" fill="#262A34" class="segment"/>\n                            <path d="M58.6244 118.721V77.5165L70.2954 68.7696C72.77 70.0341 74.4669 72.6003 74.4669 75.5692V127.362C74.4669 129.178 73.8299 130.843 72.7721 132.156L58.6244 118.721Z" fill="#262A34" class="segment"/>\n                            <path d="M57.4494 59.39H17.0175L6.24985 67.3273L17.0175 75.2656H32.4329H42.034H57.4494L68.217 67.3273L57.4494 59.39Z" fill="#262A34" class="segment"/>\n                        </svg>';break;case"7":t='<svg width="75" height="135" viewBox="0 0 75 135">\n                            <path d="M17.269 14.8295H57.5517L71.4885 1.59469C70.1985 0.597611 68.5846 3.8147e-06 66.8301 3.8147e-06H7.63794C5.89411 3.8147e-06 4.29303 0.589093 3.00726 1.57233L17.269 14.8295Z" fill="#262A34" class="segment"/>\n                            <path d="M1.71614 2.8155C0.644493 4.1311 0 5.80888 0 7.63687V59.4298C0 62.3986 1.69695 64.9659 4.17155 66.2293L15.8425 57.4825V15.947L1.71614 2.8155Z" fill="#DDDDDD"/>\n                            <path d="M58.6244 16.2662V57.4704L70.2954 66.2173C72.77 64.9539 74.4669 62.3866 74.4669 59.4177V7.62484C74.4669 5.80751 73.8299 4.14251 72.7721 2.83224L58.6244 16.2662Z" fill="#262A34" class="segment"/>\n                            <path d="M17.269 120.169H57.5517L71.4885 133.405C70.1985 134.4 68.5846 135 66.8301 135H7.63793C5.8941 135 4.29302 134.409 3.00726 133.426L17.269 120.169Z" fill="#DDDDDD"/>\n                            <path d="M1.71614 132.194C0.644493 130.88 0 129.203 0 127.374V75.5812C0 72.6124 1.69695 70.0461 4.17155 68.7817L15.8425 77.5285V119.064L1.71614 132.194Z" fill="#DDDDDD"/>\n                            <path d="M58.6244 118.721V77.5165L70.2954 68.7696C72.77 70.0341 74.4669 72.6003 74.4669 75.5692V127.362C74.4669 129.178 73.8299 130.843 72.7721 132.156L58.6244 118.721Z" fill="#262A34" class="segment"/>\n                            <path d="M57.4494 59.39H17.0175L6.24985 67.3273L17.0175 75.2656H32.4329H42.034H57.4494L68.217 67.3273L57.4494 59.39Z" fill="#DDDDDD"/>\n                        </svg>';break;case"8":t='<svg width="75" height="135" viewBox="0 0 75 135">\n                            <path d="M17.269 14.8295H57.5517L71.4885 1.59469C70.1985 0.597611 68.5846 3.8147e-06 66.8301 3.8147e-06H7.63794C5.89411 3.8147e-06 4.29303 0.589093 3.00726 1.57233L17.269 14.8295Z" fill="#262A34" class="segment"/>\n                            <path d="M1.71614 2.8155C0.644493 4.1311 0 5.80888 0 7.63687V59.4298C0 62.3986 1.69695 64.9659 4.17155 66.2293L15.8425 57.4825V15.947L1.71614 2.8155Z" fill="#262A34" class="segment"/>\n                            <path d="M58.6244 16.2662V57.4704L70.2954 66.2173C72.77 64.9539 74.4669 62.3866 74.4669 59.4177V7.62484C74.4669 5.80751 73.8299 4.14251 72.7721 2.83224L58.6244 16.2662Z" fill="#262A34" class="segment"/>\n                            <path d="M17.269 120.169H57.5517L71.4885 133.405C70.1985 134.4 68.5846 135 66.8301 135H7.63793C5.8941 135 4.29302 134.409 3.00726 133.426L17.269 120.169Z" fill="#262A34" class="segment"/>\n                            <path d="M1.71614 132.194C0.644493 130.88 0 129.203 0 127.374V75.5812C0 72.6124 1.69695 70.0461 4.17155 68.7817L15.8425 77.5285V119.064L1.71614 132.194Z" fill="#262A34" class="segment"/>\n                            <path d="M58.6244 118.721V77.5165L70.2954 68.7696C72.77 70.0341 74.4669 72.6003 74.4669 75.5692V127.362C74.4669 129.178 73.8299 130.843 72.7721 132.156L58.6244 118.721Z" fill="#262A34" class="segment"/>\n                            <path d="M57.4494 59.39H17.0175L6.24985 67.3273L17.0175 75.2656H32.4329H42.034H57.4494L68.217 67.3273L57.4494 59.39Z" fill="#262A34" class="segment"/>\n                        </svg>';break;case"9":t='<svg width="75" height="135" viewBox="0 0 75 135">\n                            <path d="M17.269 14.8295H57.5517L71.4885 1.59469C70.1985 0.597611 68.5846 3.8147e-06 66.8301 3.8147e-06H7.63794C5.89411 3.8147e-06 4.29303 0.589093 3.00726 1.57233L17.269 14.8295Z" fill="#262A34" class="segment"/>\n                            <path d="M1.71614 2.8155C0.644493 4.1311 0 5.80888 0 7.63687V59.4298C0 62.3986 1.69695 64.9659 4.17155 66.2293L15.8425 57.4825V15.947L1.71614 2.8155Z" fill="#262A34" class="segment"/>\n                            <path d="M58.6244 16.2662V57.4704L70.2954 66.2173C72.77 64.9539 74.4669 62.3866 74.4669 59.4177V7.62484C74.4669 5.80751 73.8299 4.14251 72.7721 2.83224L58.6244 16.2662Z" fill="#262A34" class="segment"/>\n                            <path d="M17.269 120.169H57.5517L71.4885 133.405C70.1985 134.4 68.5846 135 66.8301 135H7.63793C5.8941 135 4.29302 134.409 3.00726 133.426L17.269 120.169Z" fill="#262A34" class="segment"/>\n                            <path d="M1.71614 132.194C0.644493 130.88 0 129.203 0 127.374V75.5812C0 72.6124 1.69695 70.0461 4.17155 68.7817L15.8425 77.5285V119.064L1.71614 132.194Z" fill="#DDDDDD"/>\n                            <path d="M58.6244 118.721V77.5165L70.2954 68.7696C72.77 70.0341 74.4669 72.6003 74.4669 75.5692V127.362C74.4669 129.178 73.8299 130.843 72.7721 132.156L58.6244 118.721Z" fill="#262A34" class="segment"/>\n                            <path d="M57.4494 59.39H17.0175L6.24985 67.3273L17.0175 75.2656H32.4329H42.034H57.4494L68.217 67.3273L57.4494 59.39Z" fill="#262A34" class="segment"/>\n                        </svg>';break;default:t='<svg width="75" height="135" viewBox="0 0 75 135">\n                            <path d="M17.269 14.8295H57.5517L71.4885 1.59469C70.1985 0.597611 68.5846 3.8147e-06 66.8301 3.8147e-06H7.63794C5.89411 3.8147e-06 4.29303 0.589093 3.00726 1.57233L17.269 14.8295Z" fill="#262A34" class="segment"/>\n                            <path d="M1.71614 2.8155C0.644493 4.1311 0 5.80888 0 7.63687V59.4298C0 62.3986 1.69695 64.9659 4.17155 66.2293L15.8425 57.4825V15.947L1.71614 2.8155Z" fill="#262A34" class="segment"/>\n                            <path d="M58.6244 16.2662V57.4704L70.2954 66.2173C72.77 64.9539 74.4669 62.3866 74.4669 59.4177V7.62484C74.4669 5.80751 73.8299 4.14251 72.7721 2.83224L58.6244 16.2662Z" fill="#262A34" class="segment"/>\n                            <path d="M17.269 120.169H57.5517L71.4885 133.405C70.1985 134.4 68.5846 135 66.8301 135H7.63793C5.8941 135 4.29302 134.409 3.00726 133.426L17.269 120.169Z" fill="#262A34" class="segment"/>\n                            <path d="M1.71614 132.194C0.644493 130.88 0 129.203 0 127.374V75.5812C0 72.6124 1.69695 70.0461 4.17155 68.7817L15.8425 77.5285V119.064L1.71614 132.194Z" fill="#262A34" class="segment"/>\n                            <path d="M58.6244 118.721V77.5165L70.2954 68.7696C72.77 70.0341 74.4669 72.6003 74.4669 75.5692V127.362C74.4669 129.178 73.8299 130.843 72.7721 132.156L58.6244 118.721Z" fill="#262A34" class="segment"/>\n                            <path d="M57.4494 59.39H17.0175L6.24985 67.3273L17.0175 75.2656H32.4329H42.034H57.4494L68.217 67.3273L57.4494 59.39Z" fill="#DDDDDD"/>\n                        </svg>'}n.push(t)};for(let e=0,n=t.length;e<n;e++)0==e?"0"!=t[e]&&a(t[e]):a(t[e]);document.querySelector(".view-number__number").innerHTML=n.join("")})(e),e=parseInt(e);const n=document.querySelector(".feedback"),a=(e,t)=>{n&&n.remove();let a=document.createElement("span");a.className=e,a.textContent=t,r.appendChild(a)};502===t&&(a("feedback feedback-error","Error"),l.removeAttribute("disabled"),d.classList.add("segment-error"),i.forEach((e=>e.setAttribute("disabled",!0)))),e>t&&a("feedback feedback-menor","it's smaller"),e<t&&a("feedback feedback-maior","It's bigger"),e===t&&(a("feedback feedback-win","Got it right!!!"),l.removeAttribute("disabled"),d.classList.add("segment-win"),i.forEach((e=>e.setAttribute("disabled",!0))))};var f,p=n(379),m=n.n(p),h=n(795),L=n.n(h),u=n(569),g=n.n(u),C=n(565),D=n.n(C),v=n(216),b=n.n(v),H=n(589),w=n.n(H),M=n(320),V={};V.styleTagTransform=w(),V.setAttributes=D(),V.insert=g().bind(null,"head"),V.domAPI=L(),V.insertStyleElement=b(),m()(M.Z,V),M.Z&&M.Z.locals&&M.Z.locals,window.addEventListener("load",(e=>{(()=>{const e=async()=>{t.setAttribute("disabled",!0),a.focus();const e=await(()=>{try{return fetch("https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300",{method:"GET"}).then((e=>200===e.status?e.json():e.status)).then((e=>Number(e)?e:e.value))}catch(e){console.error(e)}})().then((e=>e));502===(f=e)&&c(null,f),console.log(f)};a.addEventListener("keypress",(e=>13!==e.keyCode?(e.keyCode<48||e.keyCode>57)&&e.preventDefault():0)),a.addEventListener("keyup",(e=>""!==e.target.value?t.removeAttribute("disabled"):t.setAttribute("disabled",!0))),t.addEventListener("click",(e=>{e.preventDefault(),c(a.value,f),a.value="",a.focus()})),l.addEventListener("click",(t=>{const n=document.querySelector(".feedback");t.preventDefault(),n.remove(),l.setAttribute("disabled",!0),d.classList.contains("segment-error")&&d.classList.remove("segment-error"),d.classList.contains("segment-win")&&d.classList.remove("segment-win"),d.innerHTML=o,i.forEach((e=>e.removeAttribute("disabled",!0))),e()}),!1),e()})()}))})()})();