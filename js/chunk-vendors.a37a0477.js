"use strict";(self["webpackChunkfirebase"]=self["webpackChunkfirebase"]||[]).push([[504],{6743:function(t,e,n){n.d(e,{Am:function(){return F},FA:function(){return $},Fy:function(){return w},I9:function(){return B},Im:function(){return R},Ku:function(){return W},T9:function(){return v},Tj:function(){return m},Uj:function(){return c},XA:function(){return y},ZQ:function(){return _},bD:function(){return M},c1:function(){return E},cY:function(){return b},eX:function(){return O},g:function(){return D},hp:function(){return j},jZ:function(){return C},lT:function(){return I},lV:function(){return T},nr:function(){return k},sr:function(){return A},tD:function(){return U},u:function(){return l},yU:function(){return g},zW:function(){return x}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296===(64512&r)&&i+1<t.length&&56320===(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},r=function(t){const e=[];let n=0,i=0;while(n<t.length){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const e=t[r],s=r+1<t.length,o=s?t[r+1]:0,a=r+2<t.length,c=a?t[r+2]:0,l=e>>2,u=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):r(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const e=n[t.charAt(r++)],s=r<t.length,a=s?n[t.charAt(r)]:0;++r;const c=r<t.length,l=c?n[t.charAt(r)]:64;++r;const u=r<t.length,h=u?n[t.charAt(r)]:64;if(++r,null==e||null==a||null==l||null==h)throw new o;const d=e<<2|a>>4;if(i.push(d),64!==l){const t=a<<4&240|l>>2;if(i.push(t),64!==h){const t=l<<6&192|h;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(t){const e=i(t);return s.encodeByteArray(e,!0)},c=function(t){return a(t).replace(/\./g,"")},l=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=()=>u().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",VUE_APP_API_KEY_FIREBASE:"AIzaSyBazUwYMK5HqqGYZTkir5WC_9SQwZ2Ln14",BASE_URL:"/profe2024/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},f=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&l(t[1]);return e&&JSON.parse(e)},p=()=>{try{return h()||d()||f()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},m=t=>{var e,n;return null===(n=null===(e=p())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},g=t=>{const e=m(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},v=()=>{var t;return null===(t=p())||void 0===t?void 0:t.config},y=t=>{var e;return null===(e=p())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class b{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function C(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function S(){var t;const e=null===(t=p())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(i){return!1}}function E(){return"undefined"!==typeof navigator&&"Cloudflare-Workers"===navigator.userAgent}function A(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function T(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function I(){const t=_();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function k(){return!S()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function x(){try{return"object"===typeof indexedDB}catch(t){return!1}}function O(){return new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const L="FirebaseError";class D extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=L,Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$.prototype.create)}}class ${constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?N(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new D(i,o,n);return a}}function N(t,e){return t.replace(P,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}const P=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function M(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(V(n)&&V(s)){if(!M(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function V(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function B(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}})),e}function j(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t,e){const n=new z(t,e);return n.subscribe.bind(n)}class z{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=H(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=q),void 0===i.error&&(i.error=q),void 0===i.complete&&(i.complete=q);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function H(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function q(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function W(t){return t&&t._delegate?t._delegate:t}},1656:function(t,e,n){function i(t,e,n,i,r,s,o,a){var c,l="function"===typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):r&&(c=a?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:l}}n.d(e,{A:function(){return i}})},5668:function(t,e,n){n.d(e,{A:function(){return o}});var i=n(3381),r=n(5803),s=n(4152),o=(0,r.A)(i.A).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark(){return this.$vuetify.theme.dark}},beforeCreate(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://v2.vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render(t){const e=t("div",{staticClass:"v-application--wrap"},(0,s.$c)(this));return t("div",{staticClass:"v-application",class:{"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl,...this.themeClasses},attrs:{"data-app":!0},domProps:{id:this.id}},[e])}})},3746:function(t,e,n){n.d(e,{A:function(){return w}});n(4114);var i=n(8184),r=n(5420),s=n(4152),o=n(6988),a=i.A.extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:()=>({isExtended:!1}),computed:{computedHeight(){const t=this.computedContentHeight;if(!this.isExtended)return t;const e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes(){return{...i.A.options.computed.classes.call(this),"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent}},isCollapsed(){return this.collapse},isProminent(){return this.prominent},styles(){return{...this.measurableStyles,height:(0,s.Dg)(this.computedHeight)}}},created(){const t=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,o.q4)(t,e,this)}))},methods:{genBackground(){const t={height:(0,s.Dg)(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(r.A,{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:(0,s.Dg)(this.computedContentHeight)}},(0,s.$c)(this))},genExtension(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:(0,s.Dg)(this.extensionHeight)}},(0,s.$c)(this,"extension"))}},render(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;const e=[this.genContent()],n=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,n,e)}});function c(t,e,n){const{self:i=!1}=e.modifiers||{},r=e.value,s="object"===typeof r&&r.options||{passive:!0},o="function"===typeof r||"handleEvent"in r?r:r.handler,a=i?t:e.arg?document.querySelector(e.arg):window;a&&(a.addEventListener("scroll",o,s),t._onScroll=Object(t._onScroll),t._onScroll[n.context._uid]={handler:o,options:s,target:i?void 0:a})}function l(t,e,n){var i;if(!(null===(i=t._onScroll)||void 0===i?void 0:i[n.context._uid]))return;const{handler:r,options:s,target:o=t}=t._onScroll[n.context._uid];o.removeEventListener("scroll",r,s),delete t._onScroll[n.context._uid]}const u={inserted:c,unbind:l};var h=u,d=n(6763),f=n(5803);function p(t,e=[]){return(0,f.A)((0,d.P)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,n=e.length;t<n;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}var m=n(5471),g=m.Ay.extend({name:"scrollable",directives:{Scroll:u},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:()=>({currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}),computed:{canScroll(){return"undefined"!==typeof window},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp(){this.savedScroll=this.savedScroll||this.currentScroll},isActive(){this.savedScroll=0}},mounted(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||(0,o.OP)(`Unable to locate element with identifier ${this.scrollTarget}`,this))},methods:{onScroll(){this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((()=>{Math.abs(this.currentScroll-this.savedScroll)>this.computedScrollThreshold&&this.thresholdMet()})))},thresholdMet(){}}}),v=n(5367),y=n(428);const b=(0,f.A)(a,g,v.A,y.A,p("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));var w=b.extend({name:"v-app-bar",directives:{Scroll:h},provide(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data(){return{isActive:this.value}},computed:{applicationProperty(){return this.bottom?"bottom":"top"},canScroll(){return g.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes(){return{...a.options.computed.classes.call(this),"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll}},scrollRatio(){const t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight(){if(!this.shrinkOnScroll)return a.options.computed.computedContentHeight.call(this);const t=this.dense?48:56,e=this.computedOriginalHeight;return t+(e-t)*this.scrollRatio},computedFontSize(){if(!this.isProminent)return;const t=1.25,e=1.5;return t+(e-t)*this.scrollRatio},computedLeft(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop(){return this.app?this.$vuetify.application.bar:0},computedOpacity(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight(){let t=a.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;const t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed(){return this.collapseOnScroll?this.currentScroll>0:a.options.computed.isCollapsed.call(this)},isProminent(){return a.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles(){return{...a.options.computed.styles.call(this),fontSize:(0,s.Dg)(this.computedFontSize,"rem"),marginTop:(0,s.Dg)(this.computedMarginTop),transform:`translateY(${(0,s.Dg)(this.computedTransform)})`,left:(0,s.Dg)(this.computedLeft),right:(0,s.Dg)(this.computedRight)}}},watch:{canScroll:"onScroll",computedTransform(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll(t){this.isActive=!t||0!==this.currentScroll},hideOnScroll(t){this.isActive=!t||this.currentScroll<this.computedScrollThreshold}},created(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground(){const t=a.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render(t){const e=a.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},3740:function(t,e,n){n.d(e,{A:function(){return g}});var i=n(9375),r=n(1554),s=r.A,o=n(7515),a=n(428),c=n(3251),l=n(6763),u=n(8418),h=n(9785),d=n(5803),f=n(6988),p=n(4152);const m=(0,d.A)(i.A,u.A,l.A,h.A,(0,o.P)("btnToggle"),(0,a.P)("inputValue"));var g=m.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...u.A.options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},computedElevation(){if(!this.disabled)return c.A.options.computed.computedElevation.call(this)},computedRipple(){var t;const e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!==(t=this.ripple)&&void 0!==t?t:e)},hasBg(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const t=[["flat","text"],["outline","outlined"],["round","rounded"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,f.q4)(t,e,this)}))},methods:{click(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},(0,p.$c)(this))},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},(0,p.$c)(this,"loader")||[this.$createElement(s,{props:{indeterminate:!0,size:23,width:2}})])}},render(t){const e=[this.genContent(),this.loading&&this.genLoader()],{tag:n,data:i}=this.generateRouteLink(),r=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===n&&(i.attrs.type=this.type,i.attrs.disabled=this.disabled),i.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),t(n,this.disabled?i:r(this.color,i),e)}})},1484:function(t,e,n){n.d(e,{A:function(){return c}});var i=n(9375),r=n(3801),s=n(8418),o=n(5803),a=n(4152),c=(0,o.A)(r.A,s.A,i.A).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...s.A.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...i.A.options.computed.classes.call(this)}},styles(){const t={...i.A.options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=r.A.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:n}=this.generateRouteLink();return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,n),[this.genProgress(),(0,a.$c)(this)])}})},2938:function(t,e,n){n.d(e,{SL:function(){return s},ri:function(){return c}});var i=n(1484),r=n(4152);const s=(0,r.Gn)("v-card__actions"),o=(0,r.Gn)("v-card__subtitle"),a=(0,r.Gn)("v-card__text"),c=(0,r.Gn)("v-card__title");i.A},1289:function(t,e,n){n.d(e,{A:function(){return _}});var i=n(4596),r=n(5030),s=n(2031),o=n(7631),a=(n(4114),n(8743)),c=n(3381),l=n(428),u=n(5803),h=n(4152),d=(0,u.A)(a.A,c.A,l.A).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},(0,h.$c)(this))}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}}),f=d,p=n(5471),m=p.Ay.extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data(){return{animationFrame:0,overlay:null}},watch:{hideOverlay(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const t=new f({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();const e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=(0,h.fl)(this.$el)),this.overlay.value=!0)})),!0},removeOverlay(t=!0){this.overlay&&((0,h.d7)(this.overlay.$el,"transitionend",(()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&!this.isActive&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),t&&this.showScroll()},scrollListener(t){if("key"in t){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;const e=[h.uP.up,h.uP.pageup],n=[h.uP.down,h.uP.pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!n.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll(t,e){if(t.hasAttribute("data-app"))return!1;const n=e.shiftKey||e.deltaX?"x":"y",i="y"===n?e.deltaY:e.deltaX||e.deltaY;let r,s;"y"===n?(r=0===t.scrollTop,s=t.scrollTop+t.clientHeight===t.scrollHeight):(r=0===t.scrollLeft,s=t.scrollLeft+t.clientWidth===t.scrollWidth);const o=i<0,a=i>0;return!(r||!o)||(!(s||!a)||!(!r&&!s||!t.parentNode)&&this.shouldScroll(t.parentNode,e))},isInside(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath(t){const e=(0,h.K9)(t);if("keydown"===t.type&&e[0]===document.body){const e=this.$refs.dialog,n=window.getSelection().anchorNode;return!(e&&this.hasScrollbar(e)&&this.isInside(n,e))||!this.shouldScroll(e,t)}for(let n=0;n<e.length;n++){const i=e[n];if(i===document)return!0;if(i===document.documentElement)return!0;if(i===this.$refs.content)return!0;if(this.hasScrollbar(i))return!this.shouldScroll(i,t)}return!0},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):((0,h.P4)(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}}),g=n(7198),v=n(5648),y=n(4598),b=n(6988);const w=(0,u.A)(s.A,o.A,m,g.A,v.A,r.A);var _=w.extend({name:"v-dialog",directives:{ClickOutside:y.A},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(e=this.previousActiveElement)||void 0===e||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&(0,b.rq)("full-width",this)},beforeMount(){this.$nextTick((()=>{this.isBooted=this.isActive,this.isActive&&this.show()}))},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick((()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout((()=>this.animate=!1),150)}))},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):m.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((()=>{this.$nextTick((()=>{var t,e;(null===(t=this.$refs.dialog)||void 0===t?void 0:t.contains(document.activeElement))||(this.previousActiveElement=document.activeElement,null===(e=this.$refs.dialog)||void 0===e||e.focus()),this.bind()}))}))},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===h.uP.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick((()=>t&&t.focus()))}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((t=>t.contains(e)))){const t=this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find((t=>!t.hasAttribute("disabled")&&!t.matches('[tabindex="-1"]')));e&&e.focus()}},genContent(){return this.showLazyContent((()=>[this.$createElement(i.A,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"dialog","aria-modal":this.hideOverlay?void 0:"true",...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])]))},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:(0,h.Dg)(this.maxWidth),width:(0,h.Dg)(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},9483:function(t,e,n){n.d(e,{A:function(){return r}});var i=n(3381),r=i.A.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})},174:function(t,e,n){n(4114);var i=n(5803),r=n(7717),s=n(7540),o=n(4152);e.A=(0,i.A)(r.A,(0,s.G)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",(e=>{this.$set(this.errorBag,t._uid,e)}),{immediate:!0}),n={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(n.valid=e(t)))})):n.valid=e(t),n},validate(){return 0===this.inputs.filter((t=>!t.validate(!0))).length},reset(){this.inputs.forEach((t=>t.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((t=>t.resetValidation())),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find((e=>e._uid===t._uid));if(!e)return;const n=this.watchers.find((t=>t._uid===e._uid));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((t=>t._uid!==e._uid)),this.inputs=this.inputs.filter((t=>t._uid!==e._uid)),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},(0,o.$c)(this))}})},4414:function(t,e,n){n(4114),n(125);var i=n(5471),r=n(8041),s=n(4152);const o=["sm","md","lg","xl"],a=(()=>o.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),c=(()=>o.reduce(((t,e)=>(t["offset"+(0,s.Zb)(e)]={type:[String,Number],default:null},t)),{}))(),l=(()=>o.reduce(((t,e)=>(t["order"+(0,s.Zb)(e)]={type:[String,Number],default:null},t)),{}))(),u={col:Object.keys(a),offset:Object.keys(c),order:Object.keys(l)};function h(t,e,n){let i=t;if(null!=n&&!1!==n){if(e){const n=e.replace(t,"");i+=`-${n}`}return"col"!==t||""!==n&&!0!==n?(i+=`-${n}`,i.toLowerCase()):i.toLowerCase()}}const d=new Map;e.A=i.Ay.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...a,offset:{type:[String,Number],default:null},...c,order:{type:[String,Number],default:null},...l,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:n,children:i,parent:s}){let o="";for(const r in e)o+=String(e[r]);let a=d.get(o);if(!a){let t;for(t in a=[],u)u[t].forEach((n=>{const i=e[n],r=h(t,n,i);r&&a.push(r)}));const n=a.some((t=>t.startsWith("col-")));a.push({col:!n||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),d.set(o,a)}return t(e.tag,(0,r.Ay)(n,{class:a}),i)}})},3449:function(t,e,n){n.d(e,{A:function(){return o}});n(158),n(125);var i=n(5471);function r(t){return i.Ay.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:n,data:i,children:r}){i.staticClass=`${t} ${i.staticClass||""}`.trim();const{attrs:s}=i;if(s){i.attrs={};const t=Object.keys(s).filter((t=>{if("slot"===t)return!1;const e=s[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(i.staticClass+=` ${t.join(" ")}`)}return n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),e(n.tag,i,r)}})}var s=n(8041),o=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:n,children:i}){let r;const{attrs:o}=n;return o&&(n.attrs={},r=Object.keys(o).filter((t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(n.domProps=n.domProps||{},n.domProps.id=e.id),t(e.tag,(0,s.Ay)(n,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(r||[])}),i)}})},2756:function(t,e,n){n(4114),n(125);var i=n(5471),r=n(8041),s=n(4152);const o=["sm","md","lg","xl"],a=["start","end","center"];function c(t,e){return o.reduce(((n,i)=>(n[t+(0,s.Zb)(i)]=e(),n)),{})}const l=t=>[...a,"baseline","stretch"].includes(t),u=c("align",(()=>({type:String,default:null,validator:l}))),h=t=>[...a,"space-between","space-around"].includes(t),d=c("justify",(()=>({type:String,default:null,validator:h}))),f=t=>[...a,"space-between","space-around","stretch"].includes(t),p=c("alignContent",(()=>({type:String,default:null,validator:f}))),m={align:Object.keys(u),justify:Object.keys(d),alignContent:Object.keys(p)},g={align:"align",justify:"justify",alignContent:"align-content"};function v(t,e,n){let i=g[t];if(null!=n){if(e){const n=e.replace(t,"");i+=`-${n}`}return i+=`-${n}`,i.toLowerCase()}}const y=new Map;e.A=i.Ay.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:l},...u,justify:{type:String,default:null,validator:h},...d,alignContent:{type:String,default:null,validator:f},...p},render(t,{props:e,data:n,children:i}){let s="";for(const r in e)s+=String(e[r]);let o=y.get(s);if(!o){let t;for(t in o=[],m)m[t].forEach((n=>{const i=e[n],r=v(t,n,i);r&&o.push(r)}));o.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),y.set(s,o)}return t(e.tag,(0,r.Ay)(n,{staticClass:"row",class:o}),i)}})},1034:function(t,e,n){n(158);var i=n(4152);e.A=(0,i.Gn)("spacer","div","v-spacer")},6930:function(t,e,n){n.d(e,{A:function(){return p}});n(4114);var i,r=n(7717),s=n(8743),o=n(9785),a=n(3381),c=n(4152),l=n(5471),u=n(5803);function h(t){return["fas","far","fal","fab","fad","fak"].some((e=>t.includes(e)))}function d(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(i||(i={}));const f=(0,u.A)(r.A,s.A,o.A,a.A).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1},hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),(0,c.g8)(this,t)},getSize(){const t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=(0,c.HP)(t).find((e=>t[e]));return e&&i[e]||(0,c.Dg)(this.size)},getDefaultData(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$}},getSvgWrapperData(){const t=this.getSize(),e={...this.getDefaultData(),style:t?{fontSize:t,height:t,width:t}:void 0};return this.applyColors(e),e},applyColors(t){t.class={...t.class,...this.themeClasses},this.setTextColor(this.color,t)},renderFontIcon(t,e){const n=[],i=this.getDefaultData();let r="material-icons";const s=t.indexOf("-"),o=s<=-1;o?n.push(t):(r=t.slice(0,s),h(r)&&(r="")),i.class[r]=!0,i.class[t]=!o;const a=this.getSize();return a&&(i.style={fontSize:a}),this.applyColors(i),e(this.hasClickListener?"button":this.tag,i,n)},renderSvgIcon(t,e){const n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},i=this.getSize();return i&&(n.style={fontSize:i,height:i,width:i}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent(t,e){const n={class:{"v-icon__component":!0}},i=this.getSize();i&&(n.style={fontSize:i,height:i,width:i}),this.applyColors(n);const r=t.component;return n.props=t.props,n.nativeOn=n.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(r,n)])}},render(t){const e=this.getIcon();return"string"===typeof e?d(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});var p=l.Ay.extend({name:"v-icon",$_wrapperFor:f,functional:!0,render(t,{data:e,children:n}){let i="";return e.domProps&&(i=e.domProps.textContent||e.domProps.innerHTML||i,delete e.domProps.textContent,delete e.domProps.innerHTML),t(f,e,i?[i]:n)}})},569:function(t,e,n){var i=n(6930);e.A=i.A},5420:function(t,e,n){n.d(e,{A:function(){return f}});n(4114);var i=n(1677),r=n(7282),s=n(5803),o=n(4152),a=(0,s.A)(r.A).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},(0,o.$c)(this))}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=a,l=n(3381),u=n(8041),h=n(6988);const d="undefined"!==typeof window&&"IntersectionObserver"in window;var f=(0,s.A)(c,l.A).extend({name:"v-img",directives:{intersect:i.A},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const n=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[n]):n}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,n){if(!d||n||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,h.OP)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const n=()=>{const{naturalHeight:i,naturalWidth:r}=t;i||r?(this.naturalWidth=r,this.calculatedAspectRatio=r/i):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(n,e)};n()},genContent(){const t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){const t=(0,o.$c)(this,"placeholder");if(t){const e=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},t)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},e):e[0]}}},render(t){const e=c.options.render.call(this,t),n=(0,u.Ay)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:d?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,n,e.children)}})},6993:function(t,e,n){n.d(e,{A:function(){return g}});n(4114);var i=n(569),r=n(6355),s=n(8743),o=n(3381),a=n(5803),c=n(4152),l=(0,a.A)(s.A,o.A).extend({name:"v-messages",props:{value:{type:Array,default:()=>[]}},methods:{genChildren(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage(t,e){return this.$createElement("div",{staticClass:"v-messages__message",key:e},(0,c.$c)(this,"default",{message:t,key:e})||[t])}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}}),u=l,h=n(7717),d=n(3791),f=n(8041);const p=(0,a.A)(h.A,d.A);var m=p.extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},dense:Boolean,height:[Number,String],hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes(){return{"v-input--has-state":this.hasState,"v-input--hide-details":!this.showDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.isDisabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&null!=this.loading,"v-input--is-readonly":this.isReadonly,"v-input--dense":this.dense,"v-input--hide-spin-buttons":this.hideSpinButtons,...this.themeClasses}},computedId(){return this.id||`input-${this._uid}`},hasDetails(){return this.messagesToDisplay.length>0},hasHint(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel(){return!(!this.$slots.label&&!this.label)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit(this.$_modelEvent,t)}},isDirty(){return!!this.lazyValue},isLabelActive(){return this.isDirty},messagesToDisplay(){return this.hasHint?[this.hint]:this.hasMessages?this.validations.map((t=>{if("string"===typeof t)return t;const e=t(this.internalValue);return"string"===typeof e?e:""})).filter((t=>""!==t)):[]},showDetails(){return!1===this.hideDetails||"auto"===this.hideDetails&&this.hasDetails}},watch:{value(t){this.lazyValue=t}},beforeCreate(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl(){return this.$createElement("div",{staticClass:"v-input__control",attrs:{title:this.attrs$.title}},[this.genInputSlot(),this.genMessages()])},genDefaultSlot(){return[this.genLabel(),(0,c.$c)(this)]},genIcon(t,e,n={}){var r;const s=this[`${t}Icon`],o=`click:${(0,c.kW)(t)}`,a=!(!this.listeners$[o]&&!e),l={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendOuter:"appendAction",clear:"clear"}[t],u=a&&l?this.$vuetify.lang.t(`$vuetify.input.${l}`,null!==(r=this.label)&&void 0!==r?r:""):void 0,h=(0,f.Ay)({attrs:{"aria-label":u,color:this.validationState,dark:this.dark,disabled:this.isDisabled,light:this.light,tabindex:"clear"===t?-1:void 0},on:a?{click:t=>{t.preventDefault(),t.stopPropagation(),this.$emit(o,t),e&&e(t)},mouseup:t=>{t.preventDefault(),t.stopPropagation()}}:void 0},n);return this.$createElement("div",{staticClass:"v-input__icon",class:t?`v-input__icon--${(0,c.kW)(t)}`:void 0},[this.$createElement(i.A,h,s)])},genInputSlot(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:(0,c.Dg)(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel(){return this.hasLabel?this.$createElement(r.A,{props:{color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:this.hasState,for:this.computedId,light:this.light}},(0,c.$c)(this,"label")||this.label):null},genMessages(){return this.showDetails?this.$createElement(u,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.messagesToDisplay},attrs:{role:this.hasMessages?"alert":null},scopedSlots:{default:t=>(0,c.$c)(this,"message",t)}}):null},genSlot(t,e,n){if(!n.length)return null;const i=`${t}-${e}`;return this.$createElement("div",{staticClass:`v-input__${i}`,ref:i},n)},genPrependSlot(){const t=[];return this.$slots.prepend?t.push(this.$slots.prepend):this.prependIcon&&t.push(this.genIcon("prepend")),this.genSlot("prepend","outer",t)},genAppendSlot(){const t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","outer",t)},onClick(t){this.$emit("click",t)},onMouseDown(t){this.hasMouseDown=!0,this.$emit("mousedown",t)},onMouseUp(t){this.hasMouseDown=!1,this.$emit("mouseup",t)}},render(t){return t("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}}),g=m},6355:function(t,e,n){n.d(e,{A:function(){return l}});var i=n(8743),r=n(3381),s=n(5803),o=n(4152),a=n(8041),c=(0,s.A)(r.A).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render(t,e){const{children:n,listeners:s,props:c,data:l}=e,u=(0,a.Ay)({staticClass:"v-label",class:{"v-label--active":c.value,"v-label--is-disabled":c.disabled,...(0,r.H)(e)},attrs:{for:c.for,"aria-hidden":!c.for},on:s,style:{left:(0,o.Dg)(c.left),right:(0,o.Dg)(c.right),position:c.absolute?"absolute":"relative"},ref:"label"},l);return t("label",i.A.options.methods.setTextColor(c.focused&&c.color,u),n)}}),l=c},5322:function(t,e,n){n.d(e,{A:function(){return s}});var i=n(5367),r=n(4152),s=i.A.extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles(){const{bar:t,top:e,right:n,footer:i,insetFooter:r,bottom:s,left:o}=this.$vuetify.application;return{paddingTop:`${e+t}px`,paddingRight:`${n}px`,paddingBottom:`${i+r+s}px`,paddingLeft:`${o}px`}}},render(t){const e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},(0,r.$c)(this))])}})},1554:function(t,e,n){n.d(e,{A:function(){return o}});var i=n(1677),r=n(8743),s=n(4152),o=r.A.extend({name:"v-progress-circular",directives:{intersect:i.A},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,s.Dg)(this.calculatedSize),width:(0,s.Dg)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:`v-progress-circular__${t}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},(0,s.$c)(this))},onObserve(t,e,n){this.isVisible=n}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},8466:function(t,e,n){n.d(e,{A:function(){return dt}});n(4114),n(8245);var i=n(5803),r=n(5961),s=n(569),o=n(8743),a=n(7515),c=n(3381),l=n(428),u=n(8418),h=n(9785),d=n(6988),f=n(4152),p=(0,i.A)(o.A,h.A,u.A,c.A,(0,a.P)("chipGroup"),(0,l.P)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...u.A.options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(u.A.options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,d.q4)(t,e,this)}))},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(s.A,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(r.SM,t)},genClose(){return this.$createElement(s.A,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),(0,f.$c)(this),this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:n,data:i}=this.generateRouteLink();i.attrs={...i.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:i.attrs.tabindex},i.directives.push({name:"show",value:this.active}),i=this.setBackgroundColor(this.color,i);const r=this.textColor||this.outlined&&this.color;return t(n,this.setTextColor(r,i),e)}}),m=p,g=n(4596),v=n(5030),y=n(7391),b=n(2031),w=n(5648),_=n(6763),C=n(7631);const S=(0,i.A)(w.A,(0,_.P)(["top","right","bottom","left","absolute"]),v.A,C.A);var E=S.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:()=>({activatorNode:[],absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},relativeYOffset:0,hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}),computed:{computedLeft(){const t=this.dimensions.activator,e=this.dimensions.content,n=(!1!==this.attach?t.offsetLeft:t.left)||0,i=Math.max(t.width,e.width);let r=0;if(r+=n,(this.left||this.$vuetify.rtl&&!this.right)&&(r-=i-t.width),this.offsetX){const e=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));r+=this.left?-e:t.width}return this.nudgeLeft&&(r-=parseInt(this.nudgeLeft)),this.nudgeRight&&(r+=parseInt(this.nudgeRight)),r},computedTop(){const t=this.dimensions.activator,e=this.dimensions.content;let n=0;return this.top&&(n+=t.height-e.height),!1!==this.attach?n+=t.offsetTop:n+=t.top+this.pageYOffset,this.offsetY&&(n+=this.top?-t.height:t.height),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),n},hasActivator(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator},absoluteYOffset(){return this.pageYOffset-this.relativeYOffset}},watch:{disabled(t){t&&this.callDeactivate()},isActive(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount(){this.hasWindow="undefined"!==typeof window,this.hasWindow&&window.addEventListener("resize",this.updateDimensions,!1)},beforeDestroy(){this.hasWindow&&window.removeEventListener("resize",this.updateDimensions,!1)},methods:{absolutePosition(){return{offsetTop:this.positionY||this.absoluteY,offsetLeft:this.positionX||this.absoluteX,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate(){},calcLeft(t){return(0,f.Dg)(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop(){return(0,f.Dg)(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow(t,e){const n=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&n>0?Math.max(t-n,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow(t){const e=this.getInnerHeight(),n=this.absoluteYOffset+e,i=this.dimensions.activator,r=this.dimensions.content.height,s=t+r,o=n<s;return o&&this.offsetOverflow&&i.top>r?t=this.pageYOffset+(i.top-r):o&&!this.allowOverflow?t=n-r-12:t<this.absoluteYOffset&&!this.allowOverflow&&(t=this.absoluteYOffset+12),t<12?12:t},callActivate(){this.hasWindow&&this.activate()},callDeactivate(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed(){if(!1!==this.attach)return void(this.activatorFixed=!1);let t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1},deactivate(){},genActivatorListeners(){const t=v.A.options.methods.genActivatorListeners.call(this),e=t.click;return e&&(t.click=t=>{this.openOnClick&&e&&e(t),this.absoluteX=t.clientX,this.absoluteY=t.clientY}),t},getInnerHeight(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect(t){const e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure(t){if(!t||!this.hasWindow)return null;const e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){const n=window.getComputedStyle(t);e.left=parseInt(n.marginLeft),e.top=parseInt(n.marginTop)}return e},sneakPeek(t){requestAnimationFrame((()=>{const e=this.$refs.content;e&&"none"===e.style.display?(e.style.display="inline-block",t(),e.style.display="none"):t()}))},startTransition(){return new Promise((t=>requestAnimationFrame((()=>{this.isContentActive=this.hasJustFocused=this.isActive,t()}))))},updateDimensions(){this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;const t={activator:{...this.dimensions.activator},content:{...this.dimensions.content}};if(!this.hasActivator||this.absolute)t.activator=this.absolutePosition();else{const e=this.getActivator();if(!e)return;t.activator=this.measure(e),t.activator.offsetLeft=e.offsetLeft,!1!==this.attach?t.activator.offsetTop=e.offsetTop:t.activator.offsetTop=0}this.sneakPeek((()=>{if(this.$refs.content){if(this.$refs.content.offsetParent){const e=this.getRoundedBoundedClientRect(this.$refs.content.offsetParent);this.relativeYOffset=window.pageYOffset+e.top,t.activator.top-=this.relativeYOffset,t.activator.left-=window.pageXOffset+e.left}t.content=this.measure(this.$refs.content)}this.dimensions=t}))}}}),A=n(7198),T=n(9272),I=n(4598),k=n(5168),x=n(4427);const O=(0,i.A)(b.A,y.A,A.A,T.A,c.A,E);var L=O.extend({name:"v-menu",directives:{ClickOutside:I.A,Resize:k.A},provide(){return{isInMenu:!0,theme:this.theme}},props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,disableKeys:Boolean,maxHeight:{type:[Number,String],default:"auto"},offsetX:Boolean,offsetY:Boolean,openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"},contentProps:{type:Object,default:()=>({})}},data(){return{calculatedTopAuto:0,defaultOffset:8,hasJustFocused:!1,listIndex:-1,resizeTimeout:0,selectedIndex:null,tiles:[]}},computed:{activeTile(){return this.tiles[this.listIndex]},calculatedLeft(){const t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?(0,f.Dg)(this.calcXOverflow(this.calcLeftAuto(),t))||"0":this.calcLeft(t)||"0"},calculatedMaxHeight(){const t=this.auto?"200px":(0,f.Dg)(this.maxHeight);return t||"0"},calculatedMaxWidth(){return(0,f.Dg)(this.maxWidth)||"0"},calculatedMinWidth(){if(this.minWidth)return(0,f.Dg)(this.minWidth)||"0";const t=Math.min(this.dimensions.activator.width+Number(this.nudgeWidth)+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return(0,f.Dg)(Math.min(e,t))||"0"},calculatedTop(){const t=this.auto?(0,f.Dg)(this.calcYOverflow(this.calculatedTopAuto)):this.calcTop();return t||"0"},hasClickableTiles(){return Boolean(this.tiles.find((t=>t.tabIndex>-1)))},styles(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{isActive(t){t||(this.listIndex=-1)},isContentActive(t){this.hasJustFocused=t},listIndex(t,e){if(t in this.tiles){const e=this.tiles[t];e.classList.add("v-list-item--highlighted");const n=this.$refs.content.scrollTop,i=this.$refs.content.clientHeight;n>e.offsetTop-8?(0,x.A)(e.offsetTop-e.clientHeight,{appOffset:!1,duration:300,container:this.$refs.content}):n+i<e.offsetTop+e.clientHeight+8&&(0,x.A)(e.offsetTop-i+2*e.clientHeight,{appOffset:!1,duration:300,container:this.$refs.content})}e in this.tiles&&this.tiles[e].classList.remove("v-list-item--highlighted")}},created(){this.$attrs.hasOwnProperty("full-width")&&(0,d.rq)("full-width",this)},mounted(){this.isActive&&this.callActivate()},methods:{activate(){this.updateDimensions(),requestAnimationFrame((()=>{this.startTransition().then((()=>{this.$refs.content&&(this.calculatedTopAuto=this.calcTopAuto(),this.auto&&(this.$refs.content.scrollTop=this.calcScrollPosition()))}))}))},calcScrollPosition(){const t=this.$refs.content,e=t.querySelector(".v-list-item--active"),n=t.scrollHeight-t.offsetHeight;return e?Math.min(n,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto(){return parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto(){const t=this.$refs.content,e=t.querySelector(".v-list-item--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);const n=e.offsetTop-this.calcScrollPosition(),i=t.querySelector(".v-list-item").offsetTop;return this.computedTop-n-i-1},changeListIndex(t){if(this.getTiles(),this.isActive&&this.hasClickableTiles)if(t.keyCode!==f.uP.tab){if(t.keyCode===f.uP.down)this.nextTile();else if(t.keyCode===f.uP.up)this.prevTile();else if(t.keyCode===f.uP.end)this.lastTile();else if(t.keyCode===f.uP.home)this.firstTile();else{if(t.keyCode!==f.uP.enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()}else this.isActive=!1},closeConditional(t){const e=t.target;return this.isActive&&!this._isDestroyed&&this.closeOnClick&&!this.$refs.content.contains(e)},genActivatorAttributes(){const t=v.A.options.methods.genActivatorAttributes.call(this);return this.activeTile&&this.activeTile.id?{...t,"aria-activedescendant":this.activeTile.id}:t},genActivatorListeners(){const t=E.options.methods.genActivatorListeners.call(this);return this.disableKeys||(t.keydown=this.onKeyDown),t},genTransition(){const t=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition}},[t]):t},genDirectives(){const t=[{name:"show",value:this.isContentActive}];return!this.openOnHover&&this.closeOnClick&&t.push({name:"click-outside",value:{handler:()=>{this.isActive=!1},closeConditional:this.closeConditional,include:()=>[this.$el,...this.getOpenDependentElements()]}}),t},genContent(){const t={attrs:{...this.getScopeIdAttrs(),...this.contentProps,role:"role"in this.$attrs?this.$attrs.role:"menu"},staticClass:"v-menu__content",class:{...this.rootThemeClasses,...this.roundedClasses,"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive,[this.contentClass.trim()]:!0},style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:t=>{const e=t.target;e.getAttribute("disabled")||this.closeOnContentClick&&(this.isActive=!1)},keydown:this.onKeyDown}};return this.$listeners.scroll&&(t.on=t.on||{},t.on.scroll=this.$listeners.scroll),!this.disabled&&this.openOnHover&&(t.on=t.on||{},t.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(t.on=t.on||{},t.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",t,this.getContentSlot())},getTiles(){this.$refs.content&&(this.tiles=Array.from(this.$refs.content.querySelectorAll(".v-list-item, .v-divider, .v-subheader")))},mouseEnterHandler(){this.runDelay("open",(()=>{this.hasJustFocused||(this.hasJustFocused=!0)}))},mouseLeaveHandler(t){this.runDelay("close",(()=>{var e;(null===(e=this.$refs.content)||void 0===e?void 0:e.contains(t.relatedTarget))||requestAnimationFrame((()=>{this.isActive=!1,this.callDeactivate()}))}))},nextTile(){const t=this.tiles[this.listIndex+1];if(!t){if(!this.tiles.length)return;return this.listIndex=-1,void this.nextTile()}this.listIndex++,-1===t.tabIndex&&this.nextTile()},prevTile(){const t=this.tiles[this.listIndex-1];if(!t){if(!this.tiles.length)return;return this.listIndex=this.tiles.length,void this.prevTile()}this.listIndex--,-1===t.tabIndex&&this.prevTile()},lastTile(){const t=this.tiles[this.tiles.length-1];t&&(this.listIndex=this.tiles.length-1,-1===t.tabIndex&&this.prevTile())},firstTile(){const t=this.tiles[0];t&&(this.listIndex=0,-1===t.tabIndex&&this.nextTile())},onKeyDown(t){if(!this.disableKeys){if(t.keyCode===f.uP.esc){setTimeout((()=>{this.isActive=!1}));const t=this.getActivator();this.$nextTick((()=>t&&t.focus()))}else!this.isActive&&[f.uP.up,f.uP.down].includes(t.keyCode)&&(this.isActive=!0);this.$nextTick((()=>this.changeListIndex(t)))}},onResize(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.updateDimensions,100))}},render(t){const e={staticClass:"v-menu",class:{"v-menu--attached":""===this.attach||!0===this.attach||"attach"===this.attach},directives:[{arg:"500",name:"resize",value:this.onResize}]};return t("div",e,[!this.activator&&this.genActivator(),this.showLazyContent((()=>[this.$createElement(g.A,{props:{root:!0,light:this.light,dark:this.dark}},[this.genTransition()])]))])}}),D=L,$=n(4746),N=n(5471),P=n(6930),R=n(8041),M=N.Ay.extend({name:"v-simple-checkbox",functional:!0,directives:{Ripple:$.A},props:{...o.A.options.props,...c.A.options.props,disabled:Boolean,ripple:{type:Boolean,default:!0},value:Boolean,indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},onIcon:{type:String,default:"$checkboxOn"},offIcon:{type:String,default:"$checkboxOff"}},render(t,{props:e,data:n,listeners:i}){const r=[];let s=e.offIcon;if(e.indeterminate?s=e.indeterminateIcon:e.value&&(s=e.onIcon),r.push(t(P.A,o.A.options.methods.setTextColor(e.value&&e.color,{props:{disabled:e.disabled,dark:e.dark,light:e.light}}),s)),e.ripple&&!e.disabled){const n=t("div",o.A.options.methods.setTextColor(e.color,{staticClass:"v-input--selection-controls__ripple",directives:[{def:$.A,name:"ripple",value:{center:!0}}]}));r.push(n)}return t("div",(0,R.Ay)(n,{class:{"v-simple-checkbox":!0,"v-simple-checkbox--disabled":e.disabled},on:{click:t=>{t.stopPropagation(),n.on&&n.on.input&&!e.disabled&&(0,f.BN)(n.on.input).forEach((t=>t(!e.value)))}}}),[t("div",{staticClass:"v-input--selection-controls__input"},r)])}}),V=n(9483),F=V.A,B=(0,i.A)(c.A).extend({name:"v-subheader",props:{inset:Boolean},render(t){return t("div",{staticClass:"v-subheader",class:{"v-subheader--inset":this.inset,...this.themeClasses},attrs:this.$attrs,on:this.$listeners},(0,f.$c)(this))}}),j=B;const U=(0,i.A)(o.A,u.A,c.A,(0,a.P)("listItemGroup"),(0,l.P)("inputValue"));var z=U.extend().extend({name:"v-list-item",directives:{Ripple:$.A},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:()=>({proxyClass:"v-list-item--active"}),computed:{classes(){return{"v-list-item":!0,...u.A.options.computed.classes.call(this),"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine,...this.themeClasses}},isClickable(){return Boolean(u.A.options.computed.isClickable.call(this)||this.listItemGroup)}},created(){this.$attrs.hasOwnProperty("avatar")&&(0,d.rq)("avatar",this)},methods:{click(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs(){const t={"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1,...this.$attrs};return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="option",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||`list-item-${this._uid}`):this.isInList&&(t.role="listitem")),t},toggle(){this.to&&void 0===this.inputValue&&(this.isActive=!this.isActive),this.$emit("change")}},render(t){let{tag:e,data:n}=this.generateRouteLink();n.attrs={...n.attrs,...this.genAttrs()},n[this.to?"nativeOn":"on"]={...n[this.to?"nativeOn":"on"],keydown:t=>{this.disabled||(t.keyCode===f.uP.enter&&this.click(t),this.$emit("keydown",t))}},this.inactive&&(e="div"),this.inactive&&this.to&&(n.on=n.nativeOn,delete n.nativeOn);const i=(0,f.$c)(this,"default",{active:this.isActive,toggle:this.toggle});return t(e,this.isActive?this.setTextColor(this.color,n):n,i)}}),H=N.Ay.extend({name:"v-list-item-action",functional:!0,render(t,{data:e,children:n=[]}){e.staticClass=e.staticClass?`v-list-item__action ${e.staticClass}`:"v-list-item__action";const i=n.filter((t=>!1===t.isComment&&" "!==t.text));return i.length>1&&(e.staticClass+=" v-list-item__action--stack"),t("div",e,n)}}),q=n(8184),W=q.A.extend().extend({name:"v-list",provide(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:()=>({groups:[]}),computed:{classes(){return{...q.A.options.computed.classes.call(this),"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine}}},methods:{register(t){this.groups.push(t)},unregister(t){const e=this.groups.findIndex((e=>e._uid===t._uid));e>-1&&this.groups.splice(e,1)},listClick(t){if(!this.expand)for(const e of this.groups)e.toggle(t)}},render(t){const e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:{role:this.isInNav||this.isInMenu?void 0:"list",...this.attrs$},on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),(0,f.$c)(this))}}),K=N.Ay.extend({name:"v-list-item-icon",functional:!0,render(t,{data:e,children:n}){return e.staticClass=`v-list-item__icon ${e.staticClass||""}`.trim(),t("div",e,n)}}),G=n(7717),Q=n(72),Y=n(7540);const X=(0,i.A)(G.A,Q.A,o.A,(0,Y.W)("list"),l.A);X.extend().extend({name:"v-list-group",directives:{ripple:$.A},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:[String,RegExp],noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive(t){!this.subGroup&&t&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy(){this.list&&this.list.unregister(this)},methods:{click(t){this.disabled||(this.isBooted=!0,this.$emit("click",t),this.$nextTick((()=>this.isActive=!this.isActive)))},genIcon(t){return this.$createElement(s.A,t)},genAppendIcon(){const t=!this.subGroup&&this.appendIcon,e=(0,f.$c)(this,"appendIcon");return t||e?this.$createElement(K,{staticClass:"v-list-group__header__append-icon"},[e||this.genIcon(t)]):null},genHeader(){return this.$createElement(z,{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:{[this.activeClass]:this.isActive},props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.listeners$,click:this.click}},[this.genPrependIcon(),(0,f.$c)(this,"activator"),this.genAppendIcon()])},genItems(){return this.showLazyContent((()=>[this.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:this.isActive}]},(0,f.$c)(this))]))},genPrependIcon(){const t=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon,e=(0,f.$c)(this,"prependIcon");return t||e?this.$createElement(K,{staticClass:"v-list-group__header__prepend-icon"},[e||this.genIcon(t)]):null},onRouteChange(t){if(!this.group)return;const e=this.matchRoute(t.path);e&&this.isActive!==e&&this.list&&this.list.listClick(this._uid),this.isActive=e},toggle(t){const e=this._uid===t;e&&(this.isBooted=!0),this.$nextTick((()=>this.isActive=e))},matchRoute(t){return null!==t.match(this.group)}},render(t){return t("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),t(r.Qo,this.genItems())])}});var J=n(8968),Z=n(4632);const tt=(0,i.A)(J.A,Z.A,c.A).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter(((t,e)=>this.toggleMethod(this.getValue(t,e))))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return t=>this.valueComparator(this.internalValue,t);const t=this.internalValue;return Array.isArray(t)?e=>t.some((t=>this.valueComparator(t,e))):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&(0,d.OP)("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(t,e){return void 0===t.value?e:t.value},onClick(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register(t){const e=this.items.push(t)-1;t.$on("change",(()=>this.onClick(t))),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,e)},unregister(t){if(this._isDestroyed)return;const e=this.items.indexOf(t),n=this.getValue(t,e);this.items.splice(e,1);const i=this.selectedValues.indexOf(n);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(n);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((t=>t!==n)):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(t,e){const n=this.getValue(t,e);t.isActive=this.toggleMethod(n)},updateItemsState(){this.$nextTick((()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)}))},updateInternalValue(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory(t){if(!this.items.length)return;const e=this.items.slice();t&&e.reverse();const n=e.find((t=>!t.disabled));if(!n)return;const i=this.items.indexOf(n);this.updateInternalValue(this.getValue(n,i))},updateMultiple(t){const e=Array.isArray(this.internalValue)?this.internalValue:[],n=e.slice(),i=n.findIndex((e=>this.valueComparator(e,t)));this.mandatory&&i>-1&&n.length-1<1||null!=this.max&&i<0&&n.length+1>this.max||(i>-1?n.splice(i,1):n.push(t),this.internalValue=n)},updateSingle(t){const e=this.valueComparator(this.internalValue,t);this.mandatory&&e||(this.internalValue=e?void 0:t)}},render(t){return t(this.tag,this.genData(),(0,f.$c)(this))}});tt.extend({name:"v-item-group",provide(){return{itemGroup:this}}}),(0,i.A)(tt,o.A).extend({name:"v-list-item-group",provide(){return{isInGroup:!0,listItemGroup:this}},computed:{classes(){return{...tt.options.computed.classes.call(this),"v-list-item-group":!0}}},methods:{genData(){return this.setTextColor(this.color,{...tt.options.methods.genData.call(this),attrs:{role:"listbox"}})}}});var et=n(7282),nt=(0,i.A)(o.A,et.A,T.A).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,...this.roundedClasses}},styles(){return{height:(0,f.Dg)(this.size),minWidth:(0,f.Dg)(this.size),width:(0,f.Dg)(this.size),...this.measurableStyles}}},render(t){const e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),(0,f.$c)(this))}}),it=nt;it.extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes(){return{"v-list-item__avatar--horizontal":this.horizontal,...it.options.computed.classes.call(this),"v-avatar--tile":this.tile||this.horizontal}}},render(t){const e=it.options.render.call(this,t);return e.data=e.data||{},e.data.staticClass+=" v-list-item__avatar",e}});(0,f.Gn)("v-list-item__action-text","span");const rt=(0,f.Gn)("v-list-item__content","div"),st=(0,f.Gn)("v-list-item__title","div");(0,f.Gn)("v-list-item__subtitle","div");var ot=(0,i.A)(o.A,c.A).extend({name:"v-select-list",directives:{ripple:$.A},props:{action:Boolean,dense:Boolean,hideSelected:Boolean,items:{type:Array,default:()=>[]},itemDisabled:{type:[String,Array,Function],default:"disabled"},itemText:{type:[String,Array,Function],default:"text"},itemValue:{type:[String,Array,Function],default:"value"},noDataText:String,noFilter:Boolean,searchInput:null,selectedItems:{type:Array,default:()=>[]}},computed:{parsedItems(){return this.selectedItems.map((t=>this.getValue(t)))},tileActiveClass(){return Object.keys(this.setTextColor(this.color).class||{}).join(" ")},staticNoDataTile(){const t={attrs:{role:void 0},on:{mousedown:t=>t.preventDefault()}};return this.$createElement(z,t,[this.genTileContent(this.noDataText)])}},methods:{genAction(t,e){return this.$createElement(H,[this.$createElement(M,{props:{color:this.color,value:e,ripple:!1},on:{input:()=>this.$emit("select",t)}})])},genDivider(t){return this.$createElement(F,{props:t})},genFilteredText(t){if(t=t||"",!this.searchInput||this.noFilter)return t;const{start:e,middle:n,end:i}=this.getMaskedCharacters(t);return[e,this.genHighlight(n),i]},genHeader(t){return this.$createElement(j,{props:t},t.header)},genHighlight(t){return this.$createElement("span",{staticClass:"v-list-item__mask"},t)},getMaskedCharacters(t){const e=(this.searchInput||"").toString().toLocaleLowerCase(),n=t.toLocaleLowerCase().indexOf(e);if(n<0)return{start:t,middle:"",end:""};const i=t.slice(0,n),r=t.slice(n,n+e.length),s=t.slice(n+e.length);return{start:i,middle:r,end:s}},genTile({item:t,index:e,disabled:n=null,value:i=!1}){i||(i=this.hasItem(t)),t===Object(t)&&(n=null!==n?n:this.getDisabled(t));const r={attrs:{"aria-selected":String(i),id:`list-item-${this._uid}-${e}`,role:"option"},on:{mousedown:t=>{t.preventDefault()},click:()=>n||this.$emit("select",t)},props:{activeClass:this.tileActiveClass,disabled:n,ripple:!0,inputValue:i}};if(!this.$scopedSlots.item)return this.$createElement(z,r,[this.action&&!this.hideSelected&&this.items.length>0?this.genAction(t,i):null,this.genTileContent(t,e)]);const s=this,o=this.$scopedSlots.item({parent:s,item:t,attrs:{...r.attrs,...r.props},on:r.on});return this.needsTile(o)?this.$createElement(z,r,o):o},genTileContent(t,e=0){return this.$createElement(rt,[this.$createElement(st,[this.genFilteredText(this.getText(t))])])},hasItem(t){return this.parsedItems.indexOf(this.getValue(t))>-1},needsTile(t){return 1!==t.length||null==t[0].componentOptions||"v-list-item"!==t[0].componentOptions.Ctor.options.name},getDisabled(t){return Boolean((0,f.TD)(t,this.itemDisabled,!1))},getText(t){return String((0,f.TD)(t,this.itemText,t))},getValue(t){return(0,f.TD)(t,this.itemValue,this.getText(t))}},render(){const t=[],e=this.items.length;for(let n=0;n<e;n++){const e=this.items[n];this.hideSelected&&this.hasItem(e)||(null==e?t.push(this.genTile({item:e,index:n})):e.header?t.push(this.genHeader(e)):e.divider?t.push(this.genDivider(e)):t.push(this.genTile({item:e,index:n})))}return t.length||t.push(this.$slots["no-data"]||this.staticNoDataTile),this.$slots["prepend-item"]&&t.unshift(this.$slots["prepend-item"]),this.$slots["append-item"]&&t.push(this.$slots["append-item"]),this.$createElement(W,{staticClass:"v-select-list",class:this.themeClasses,attrs:{role:"listbox",tabindex:-1},on:{mousedown:t=>{t.preventDefault()}},props:{dense:this.dense}},t)}}),at=n(6993),ct=n(7112),lt=N.Ay.extend({name:"filterable",props:{noDataText:{type:String,default:"$vuetify.noDataText"}}});const ut={closeOnClick:!1,closeOnContentClick:!1,disableKeys:!0,openOnClick:!1,maxHeight:304},ht=(0,i.A)(ct.A,J.A,b.A,lt);var dt=ht.extend().extend({name:"v-select",directives:{ClickOutside:I.A},props:{appendIcon:{type:String,default:"$dropdown"},attach:{type:null,default:!1},cacheItems:Boolean,chips:Boolean,clearable:Boolean,deletableChips:Boolean,disableLookup:Boolean,eager:Boolean,hideSelected:Boolean,items:{type:Array,default:()=>[]},itemColor:{type:String,default:"primary"},itemDisabled:{type:[String,Array,Function],default:"disabled"},itemText:{type:[String,Array,Function],default:"text"},itemValue:{type:[String,Array,Function],default:"value"},menuProps:{type:[String,Array,Object],default:()=>ut},multiple:Boolean,openOnClear:Boolean,returnObject:Boolean,smallChips:Boolean},data(){return{cachedItems:this.cacheItems?this.items:[],menuIsBooted:!1,isMenuActive:!1,lastItem:20,lazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,selectedIndex:-1,selectedItems:[],keyboardLookupPrefix:"",keyboardLookupLastTime:0}},computed:{allItems(){return this.filterDuplicates(this.cachedItems.concat(this.items))},classes(){return{...ct.A.options.computed.classes.call(this),"v-select":!0,"v-select--chips":this.hasChips,"v-select--chips--small":this.smallChips,"v-select--is-menu-active":this.isMenuActive,"v-select--is-multi":this.multiple}},computedItems(){return this.allItems},computedOwns(){return`list-${this._uid}`},computedCounterValue(){var t;const e=this.multiple?this.selectedItems:(null!==(t=this.getText(this.selectedItems[0]))&&void 0!==t?t:"").toString();return"function"===typeof this.counterValue?this.counterValue(e):e.length},directives(){return this.isFocused?[{name:"click-outside",value:{handler:this.blur,closeConditional:this.closeConditional,include:()=>this.getOpenDependentElements()}}]:void 0},dynamicHeight(){return"auto"},hasChips(){return this.chips||this.smallChips},hasSlot(){return Boolean(this.hasChips||this.$scopedSlots.selection)},isDirty(){return this.selectedItems.length>0},listData(){const t=this.$vnode&&this.$vnode.context.$options._scopeId,e=t?{[t]:!0}:{};return{attrs:{...e,id:this.computedOwns},props:{action:this.multiple,color:this.itemColor,dense:this.dense,hideSelected:this.hideSelected,items:this.virtualizedItems,itemDisabled:this.itemDisabled,itemText:this.itemText,itemValue:this.itemValue,noDataText:this.$vuetify.lang.t(this.noDataText),selectedItems:this.selectedItems},on:{select:this.selectItem},scopedSlots:{item:this.$scopedSlots.item}}},staticList(){return(this.$slots["no-data"]||this.$slots["prepend-item"]||this.$slots["append-item"])&&(0,d.yA)("assert: staticList should not be called if slots are used"),this.$createElement(ot,this.listData)},virtualizedItems(){return this.$_menuProps.auto?this.computedItems:this.computedItems.slice(0,this.lastItem)},menuCanShow:()=>!0,$_menuProps(){let t="string"===typeof this.menuProps?this.menuProps.split(","):this.menuProps;return Array.isArray(t)&&(t=t.reduce(((t,e)=>(t[e.trim()]=!0,t)),{})),{...ut,eager:this.eager,value:this.menuCanShow&&this.isMenuActive,nudgeBottom:t.offsetY?1:0,...t}}},watch:{internalValue(t){this.initialValue=t,this.setSelectedItems(),this.multiple&&this.$nextTick((()=>{var t;null===(t=this.$refs.menu)||void 0===t||t.updateDimensions()})),this.hideSelected&&this.$nextTick((()=>{this.onScroll()}))},isMenuActive(t){window.setTimeout((()=>this.onMenuActiveChange(t)))},items:{immediate:!0,handler(t){this.cacheItems&&this.$nextTick((()=>{this.cachedItems=this.filterDuplicates(this.cachedItems.concat(t))})),this.setSelectedItems()}}},methods:{blur(t){ct.A.options.methods.blur.call(this,t),this.isMenuActive=!1,this.isFocused=!1,this.selectedIndex=-1,this.setMenuIndex(-1)},activateMenu(){this.isInteractive&&!this.isMenuActive&&(this.isMenuActive=!0)},clearableCallback(){this.setValue(this.multiple?[]:null),this.setMenuIndex(-1),this.$nextTick((()=>this.$refs.input&&this.$refs.input.focus())),this.openOnClear&&(this.isMenuActive=!0)},closeConditional(t){return!this.isMenuActive||!this._isDestroyed&&(!this.getContent()||!this.getContent().contains(t.target))&&this.$el&&!this.$el.contains(t.target)&&t.target!==this.$el},filterDuplicates(t){const e=new Map;for(let n=0;n<t.length;++n){const i=t[n];if(null==i)continue;if(i.header||i.divider){e.set(i,i);continue}const r=this.getValue(i);!e.has(r)&&e.set(r,i)}return Array.from(e.values())},findExistingIndex(t){const e=this.getValue(t);return(this.internalValue||[]).findIndex((t=>this.valueComparator(this.getValue(t),e)))},getContent(){return this.$refs.menu&&this.$refs.menu.$refs.content},genChipSelection(t,e){const n=this.isDisabled||this.getDisabled(t),i=!n&&this.isInteractive;return this.$createElement(m,{staticClass:"v-chip--select",attrs:{tabindex:-1},props:{close:this.deletableChips&&i,disabled:n,inputValue:e===this.selectedIndex,small:this.smallChips},on:{click:t=>{i&&(t.stopPropagation(),this.selectedIndex=e)},"click:close":()=>this.onChipInput(t)},key:JSON.stringify(this.getValue(t))},this.getText(t))},genCommaSelection(t,e,n){const i=e===this.selectedIndex&&this.computedColor,r=this.isDisabled||this.getDisabled(t);return this.$createElement("div",this.setTextColor(i,{staticClass:"v-select__selection v-select__selection--comma",class:{"v-select__selection--disabled":r},key:JSON.stringify(this.getValue(t))}),`${this.getText(t)}${n?"":", "}`)},genDefaultSlot(){const t=this.genSelections(),e=this.genInput();return Array.isArray(t)?t.push(e):(t.children=t.children||[],t.children.push(e)),[this.genFieldset(),this.$createElement("div",{staticClass:"v-select__slot",directives:this.directives},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,t,this.suffix?this.genAffix("suffix"):null,this.genClearIcon(),this.genIconSlot(),this.genHiddenInput()]),this.genMenu(),this.genProgress()]},genIcon(t,e,n){const i=at.A.options.methods.genIcon.call(this,t,e,n);return"append"===t&&(i.children[0].data=(0,R.Ay)(i.children[0].data,{attrs:{tabindex:i.children[0].componentOptions.listeners&&"-1","aria-hidden":"true","aria-label":void 0}})),i},genInput(){const t=ct.A.options.methods.genInput.call(this);return delete t.data.attrs.name,t.data=(0,R.Ay)(t.data,{domProps:{value:null},attrs:{readonly:!0,type:"text","aria-readonly":String(this.isReadonly),"aria-activedescendant":(0,f.no)(this.$refs.menu,"activeTile.id"),autocomplete:(0,f.no)(t.data,"attrs.autocomplete","off"),placeholder:this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?void 0:this.placeholder},on:{keypress:this.onKeyPress}}),t},genHiddenInput(){return this.$createElement("input",{domProps:{value:this.lazyValue},attrs:{type:"hidden",name:this.attrs$.name}})},genInputSlot(){const t=ct.A.options.methods.genInputSlot.call(this);return t.data.attrs={...t.data.attrs,role:"button","aria-haspopup":"listbox","aria-expanded":String(this.isMenuActive),"aria-owns":this.computedOwns},t},genList(){return this.$slots["no-data"]||this.$slots["prepend-item"]||this.$slots["append-item"]?this.genListWithSlot():this.staticList},genListWithSlot(){const t=["prepend-item","no-data","append-item"].filter((t=>this.$slots[t])).map((t=>this.$createElement("template",{slot:t},this.$slots[t])));return this.$createElement(ot,{...this.listData},t)},genMenu(){const t=this.$_menuProps;return t.activator=this.$refs["input-slot"],"attach"in t||(""===this.attach||!0===this.attach||"attach"===this.attach?t.attach=this.$el:t.attach=this.attach),this.$createElement(D,{attrs:{role:void 0},props:t,on:{input:t=>{this.isMenuActive=t,this.isFocused=t},scroll:this.onScroll},ref:"menu"},[this.genList()])},genSelections(){let t=this.selectedItems.length;const e=new Array(t);let n;n=this.$scopedSlots.selection?this.genSlotSelection:this.hasChips?this.genChipSelection:this.genCommaSelection;while(t--)e[t]=n(this.selectedItems[t],t,t===e.length-1);return this.$createElement("div",{staticClass:"v-select__selections"},e)},genSlotSelection(t,e){return this.$scopedSlots.selection({attrs:{class:"v-chip--select"},parent:this,item:t,index:e,select:t=>{t.stopPropagation(),this.selectedIndex=e},selected:e===this.selectedIndex,disabled:!this.isInteractive})},getMenuIndex(){return this.$refs.menu?this.$refs.menu.listIndex:-1},getDisabled(t){return(0,f.TD)(t,this.itemDisabled,!1)},getText(t){return(0,f.TD)(t,this.itemText,t)},getValue(t){return(0,f.TD)(t,this.itemValue,this.getText(t))},onBlur(t){t&&this.$emit("blur",t)},onChipInput(t){this.multiple?this.selectItem(t):this.setValue(null),0===this.selectedItems.length?this.isMenuActive=!0:this.isMenuActive=!1,this.selectedIndex=-1},onClick(t){this.isInteractive&&(this.isAppendInner(t.target)||(this.isMenuActive=!0),this.isFocused||(this.isFocused=!0,this.$emit("focus")),this.$emit("click",t))},onEscDown(t){t.preventDefault(),this.isMenuActive&&(t.stopPropagation(),this.isMenuActive=!1)},onKeyPress(t){if(this.multiple||!this.isInteractive||this.disableLookup||t.key.length>1||t.ctrlKey||t.metaKey||t.altKey)return;const e=1e3,n=performance.now();n-this.keyboardLookupLastTime>e&&(this.keyboardLookupPrefix=""),this.keyboardLookupPrefix+=t.key.toLowerCase(),this.keyboardLookupLastTime=n;const i=this.allItems.findIndex((t=>{var e;const n=(null!==(e=this.getText(t))&&void 0!==e?e:"").toString();return n.toLowerCase().startsWith(this.keyboardLookupPrefix)})),r=this.allItems[i];-1!==i&&(this.lastItem=Math.max(this.lastItem,i+5),this.setValue(this.returnObject?r:this.getValue(r)),this.$nextTick((()=>this.$refs.menu.getTiles())),setTimeout((()=>this.setMenuIndex(i))))},onKeyDown(t){if(this.isReadonly&&t.keyCode!==f.uP.tab)return;const e=t.keyCode,n=this.$refs.menu;return this.$emit("keydown",t),n?(this.isMenuActive&&[f.uP.up,f.uP.down,f.uP.home,f.uP.end,f.uP.enter].includes(e)&&this.$nextTick((()=>{n.changeListIndex(t),this.$emit("update:list-index",n.listIndex)})),[f.uP.enter,f.uP.space].includes(e)&&this.activateMenu(),!this.isMenuActive&&[f.uP.up,f.uP.down,f.uP.home,f.uP.end].includes(e)?this.onUpDown(t):e===f.uP.esc?this.onEscDown(t):e===f.uP.tab?this.onTabDown(t):e===f.uP.space?this.onSpaceDown(t):void 0):void 0},onMenuActiveChange(t){if(this.multiple&&!t||this.getMenuIndex()>-1)return;const e=this.$refs.menu;if(e&&this.isDirty){this.$refs.menu.getTiles();for(let t=0;t<e.tiles.length;t++)if("true"===e.tiles[t].getAttribute("aria-selected")){this.setMenuIndex(t);break}}},onMouseUp(t){this.hasMouseDown&&3!==t.which&&this.isInteractive&&this.isAppendInner(t.target)&&this.$nextTick((()=>this.isMenuActive=!this.isMenuActive)),ct.A.options.methods.onMouseUp.call(this,t)},onScroll(){if(this.isMenuActive){if(this.lastItem>this.computedItems.length)return;const t=this.getContent().scrollHeight-(this.getContent().scrollTop+this.getContent().clientHeight)<200;t&&(this.lastItem+=20)}else requestAnimationFrame((()=>{const t=this.getContent();t&&(t.scrollTop=0)}))},onSpaceDown(t){t.preventDefault()},onTabDown(t){const e=this.$refs.menu;if(!e)return;const n=e.activeTile;!this.multiple&&n&&this.isMenuActive?(t.preventDefault(),t.stopPropagation(),n.click()):this.blur(t)},onUpDown(t){const e=this.$refs.menu;if(!e)return;if(t.preventDefault(),this.multiple)return this.activateMenu();const n=t.keyCode;e.isBooted=!0,window.requestAnimationFrame((()=>{if(e.getTiles(),!e.hasClickableTiles)return this.activateMenu();switch(n){case f.uP.up:e.prevTile();break;case f.uP.down:e.nextTile();break;case f.uP.home:e.firstTile();break;case f.uP.end:e.lastTile();break}this.selectItem(this.allItems[this.getMenuIndex()])}))},selectItem(t){if(this.multiple){const e=(this.internalValue||[]).slice(),n=this.findExistingIndex(t);if(-1!==n?e.splice(n,1):e.push(t),this.setValue(e.map((t=>this.returnObject?t:this.getValue(t)))),this.hideSelected)this.setMenuIndex(-1);else{const e=this.computedItems.indexOf(t);~e&&(this.$nextTick((()=>this.$refs.menu.getTiles())),setTimeout((()=>this.setMenuIndex(e))))}}else this.setValue(this.returnObject?t:this.getValue(t)),this.isMenuActive=!1},setMenuIndex(t){this.$refs.menu&&(this.$refs.menu.listIndex=t)},setSelectedItems(){const t=[],e=this.multiple&&Array.isArray(this.internalValue)?this.internalValue:[this.internalValue];for(const n of e){const e=this.allItems.findIndex((t=>this.valueComparator(this.getValue(t),this.getValue(n))));e>-1&&t.push(this.allItems[e])}this.selectedItems=t},setValue(t){this.valueComparator(t,this.internalValue)||(this.internalValue=t,this.$emit("change",t))},isAppendInner(t){const e=this.$refs["append-inner"];return e&&(e===t||e.contains(t))}}})},8184:function(t,e,n){n.d(e,{A:function(){return u}});var i=n(7717),r=n(8743),s=n(3251),o=n(7282),a=n(9272),c=n(3381),l=n(5803),u=(0,l.A)(i.A,r.A,s.A,o.A,a.A,c.A).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(t){const e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},9375:function(t,e,n){var i=n(8184);e.A=i.A},3142:function(t,e,n){n.d(e,{A:function(){return S}});n(4114);var i=n(6993),r=n(4746),s=n(5471),o=s.Ay.extend({name:"rippleable",directives:{ripple:r.A},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),a=n(8968),c=n(5803);function l(t){t.preventDefault()}var u=(0,c.A)(i.A,o,a.A).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some((e=>this.valueComparator(e,t))):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=i.A.options.methods.genLabel.call(this);return t?(t.data.on={click:l},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:l},ref:"input"})},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const n=e.length;e=e.filter((e=>!this.valueComparator(e,t))),e.length===n&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown(t){}}}),h=n(4152);const d=t=>{const{touchstartX:e,touchendX:n,touchstartY:i,touchendY:r}=t,s=.5,o=16;t.offsetX=n-e,t.offsetY=r-i,Math.abs(t.offsetY)<s*Math.abs(t.offsetX)&&(t.left&&n<e-o&&t.left(t),t.right&&n>e+o&&t.right(t)),Math.abs(t.offsetX)<s*Math.abs(t.offsetY)&&(t.up&&r<i-o&&t.up(t),t.down&&r>i+o&&t.down(t))};function f(t,e){const n=t.changedTouches[0];e.touchstartX=n.clientX,e.touchstartY=n.clientY,e.start&&e.start(Object.assign(t,e))}function p(t,e){const n=t.changedTouches[0];e.touchendX=n.clientX,e.touchendY=n.clientY,e.end&&e.end(Object.assign(t,e)),d(e)}function m(t,e){const n=t.changedTouches[0];e.touchmoveX=n.clientX,e.touchmoveY=n.clientY,e.move&&e.move(Object.assign(t,e))}function g(t){const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:t=>f(t,e),touchend:t=>p(t,e),touchmove:t=>m(t,e)}}function v(t,e,n){const i=e.value,r=i.parent?t.parentElement:t,s=i.options||{passive:!0};if(!r)return;const o=g(e.value);r._touchHandlers=Object(r._touchHandlers),r._touchHandlers[n.context._uid]=o,(0,h.HP)(o).forEach((t=>{r.addEventListener(t,o[t],s)}))}function y(t,e,n){const i=e.value.parent?t.parentElement:t;if(!i||!i._touchHandlers)return;const r=i._touchHandlers[n.context._uid];(0,h.HP)(r).forEach((t=>{i.removeEventListener(t,r[t])})),delete i._touchHandlers[n.context._uid]}const b={inserted:v,unbind:y};var w=b,_=n(5961),C=n(1554),S=u.extend({name:"v-switch",directives:{Touch:w},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes(){return{...i.A.options.computed.classes.call(this),"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset}},attrs(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot(){return[this.genSwitch(),this.genLabel()]},genSwitch(){const{title:t,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",{...this.attrs,...e}),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",{staticClass:"v-input--switch__track",...this.switchData}),this.$createElement("div",{staticClass:"v-input--switch__thumb",...this.switchData},[this.genProgress()])])},genProgress(){return this.$createElement(_.Z,{},[!1===this.loading?null:(0,h.$c)(this,"progress")||this.$createElement(C.A,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft(){this.isActive&&this.onChange()},onSwipeRight(){this.isActive||this.onChange()},onKeydown(t){(t.keyCode===h.uP.left&&this.isActive||t.keyCode===h.uP.right&&!this.isActive)&&this.onChange()}}})},7112:function(t,e,n){n.d(e,{A:function(){return _}});n(4114),n(8245);var i=n(6993),r=n(3381),s=n(5803),o=(0,s.A)(r.A).extend({name:"v-counter",functional:!0,props:{value:{type:[Number,String],default:""},max:[Number,String]},render(t,e){const{props:n}=e,i=parseInt(n.max,10),s=parseInt(n.value,10),o=i?`${s} / ${i}`:String(n.value),a=i&&s>i;return t("div",{staticClass:"v-counter",class:{"error--text":a,...(0,r.H)(e)}},o)}}),a=o,c=n(6355),l=n(1677),u=n(6988),h=n(5471);function d(t){return h.Ay.extend({name:"intersectable",data:()=>({isIntersecting:!1}),mounted(){l.A.inserted(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},destroyed(){l.A.unbind(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},methods:{onObserve(e,n,i){if(this.isIntersecting=i,i)for(let r=0,s=t.onVisible.length;r<s;r++){const e=this[t.onVisible[r]];"function"!==typeof e?(0,u.OP)(t.onVisible[r]+" method is not available on the instance but referenced in intersectable mixin options"):e()}}}})}var f=n(3801),p=n(3791),m=n(5168),g=n(4746),v=n(5189),y=n(4152);const b=(0,s.A)(i.A,d({onVisible:["onResize","tryAutofocus"]}),f.A),w=["color","file","time","date","datetime-local","week","month"];var _=b.extend().extend({name:"v-text-field",directives:{resize:m.A,ripple:g.A},inheritAttrs:!1,props:{appendOuterIcon:String,autofocus:Boolean,clearable:Boolean,clearIcon:{type:String,default:"$clear"},counter:[Boolean,Number,String],counterValue:Function,filled:Boolean,flat:Boolean,fullWidth:Boolean,label:String,outlined:Boolean,placeholder:String,prefix:String,prependInnerIcon:String,persistentPlaceholder:Boolean,reverse:Boolean,rounded:Boolean,shaped:Boolean,singleLine:Boolean,solo:Boolean,soloInverted:Boolean,suffix:String,type:{type:String,default:"text"}},data:()=>({badInput:!1,labelWidth:0,prefixWidth:0,prependWidth:0,initialValue:null,isBooted:!1,isClearing:!1}),computed:{classes(){return{...i.A.options.computed.classes.call(this),"v-text-field":!0,"v-text-field--full-width":this.fullWidth,"v-text-field--prefix":this.prefix,"v-text-field--single-line":this.isSingle,"v-text-field--solo":this.isSolo,"v-text-field--solo-inverted":this.soloInverted,"v-text-field--solo-flat":this.flat,"v-text-field--filled":this.filled,"v-text-field--is-booted":this.isBooted,"v-text-field--enclosed":this.isEnclosed,"v-text-field--reverse":this.reverse,"v-text-field--outlined":this.outlined,"v-text-field--placeholder":this.placeholder,"v-text-field--rounded":this.rounded,"v-text-field--shaped":this.shaped}},computedColor(){const t=p.A.options.computed.computedColor.call(this);return this.soloInverted&&this.isFocused?this.color||"primary":t},computedCounterValue(){return"function"===typeof this.counterValue?this.counterValue(this.internalValue):[...(this.internalValue||"").toString()].length},hasCounter(){return!1!==this.counter&&null!=this.counter},hasDetails(){return i.A.options.computed.hasDetails.call(this)||this.hasCounter},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("input",this.lazyValue)}},isDirty(){var t;return(null===(t=this.lazyValue)||void 0===t?void 0:t.toString().length)>0||this.badInput},isEnclosed(){return this.filled||this.isSolo||this.outlined},isLabelActive(){return this.isDirty||w.includes(this.type)},isSingle(){return this.isSolo||this.singleLine||this.fullWidth||this.filled&&!this.hasLabel},isSolo(){return this.solo||this.soloInverted},labelPosition(){let t=this.prefix&&!this.labelValue?this.prefixWidth:0;return this.labelValue&&this.prependWidth&&(t-=this.prependWidth),this.$vuetify.rtl===this.reverse?{left:t,right:"auto"}:{left:"auto",right:t}},showLabel(){return this.hasLabel&&!(this.isSingle&&this.labelValue)},labelValue(){return this.isFocused||this.isLabelActive||this.persistentPlaceholder}},watch:{outlined:"setLabelWidth",label(){this.$nextTick(this.setLabelWidth)},prefix(){this.$nextTick(this.setPrefixWidth)},isFocused:"updateValue",value(t){this.lazyValue=t}},created(){this.$attrs.hasOwnProperty("box")&&(0,u.q4)("box","filled",this),this.$attrs.hasOwnProperty("browser-autocomplete")&&(0,u.q4)("browser-autocomplete","autocomplete",this),this.shaped&&!(this.filled||this.outlined||this.isSolo)&&(0,u.OP)("shaped should be used with either filled or outlined",this)},mounted(){this.$watch((()=>this.labelValue),this.setLabelWidth),this.autofocus&&this.tryAutofocus(),requestAnimationFrame((()=>{this.isBooted=!0,requestAnimationFrame((()=>{this.isIntersecting||this.onResize()}))}))},methods:{focus(){this.onFocus()},blur(t){window.requestAnimationFrame((()=>{this.$refs.input&&this.$refs.input.blur()}))},clearableCallback(){this.$refs.input&&this.$refs.input.focus(),this.$nextTick((()=>this.internalValue=null))},genAppendSlot(){const t=[];return this.$slots["append-outer"]?t.push(this.$slots["append-outer"]):this.appendOuterIcon&&t.push(this.genIcon("appendOuter")),this.genSlot("append","outer",t)},genPrependInnerSlot(){const t=[];return this.$slots["prepend-inner"]?t.push(this.$slots["prepend-inner"]):this.prependInnerIcon&&t.push(this.genIcon("prependInner")),this.genSlot("prepend","inner",t)},genIconSlot(){const t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","inner",t)},genInputSlot(){const t=i.A.options.methods.genInputSlot.call(this),e=this.genPrependInnerSlot();return e&&(t.children=t.children||[],t.children.unshift(e)),t},genClearIcon(){return this.clearable?this.isDirty?this.genSlot("append","inner",[this.genIcon("clear",this.clearableCallback)]):this.genSlot("append","inner",[this.$createElement("div")]):null},genCounter(){var t,e,n;if(!this.hasCounter)return null;const i=!0===this.counter?this.attrs$.maxlength:this.counter,r={dark:this.dark,light:this.light,max:i,value:this.computedCounterValue};return null!==(n=null===(e=(t=this.$scopedSlots).counter)||void 0===e?void 0:e.call(t,{props:r}))&&void 0!==n?n:this.$createElement(a,{props:r})},genControl(){return i.A.options.methods.genControl.call(this)},genDefaultSlot(){return[this.genFieldset(),this.genTextFieldSlot(),this.genClearIcon(),this.genIconSlot(),this.genProgress()]},genFieldset(){return this.outlined?this.$createElement("fieldset",{attrs:{"aria-hidden":!0}},[this.genLegend()]):null},genLabel(){if(!this.showLabel)return null;const t={props:{absolute:!0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:!this.isSingle&&(this.isFocused||!!this.validationState),for:this.computedId,left:this.labelPosition.left,light:this.light,right:this.labelPosition.right,value:this.labelValue}};return this.$createElement(c.A,t,(0,y.$c)(this,"label")||this.label)},genLegend(){const t=this.singleLine||!this.labelValue&&!this.isDirty?0:this.labelWidth,e=this.$createElement("span",{domProps:{innerHTML:"&#8203;"},staticClass:"notranslate"});return this.$createElement("legend",{style:{width:this.isSingle?void 0:(0,y.Dg)(t)}},[e])},genInput(){const t=Object.assign({},this.listeners$);delete t.change;const{title:e,...n}=this.attrs$;return this.$createElement("input",{style:{},domProps:{value:"number"===this.type&&Object.is(this.lazyValue,-0)?"-0":this.lazyValue},attrs:{...n,autofocus:this.autofocus,disabled:this.isDisabled,id:this.computedId,placeholder:this.persistentPlaceholder||this.isFocused||!this.hasLabel?this.placeholder:void 0,readonly:this.isReadonly,type:this.type},on:Object.assign(t,{blur:this.onBlur,input:this.onInput,focus:this.onFocus,keydown:this.onKeyDown}),ref:"input",directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]})},genMessages(){if(!this.showDetails)return null;const t=i.A.options.methods.genMessages.call(this),e=this.genCounter();return this.$createElement("div",{staticClass:"v-text-field__details"},[t,e])},genTextFieldSlot(){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,this.genInput(),this.suffix?this.genAffix("suffix"):null])},genAffix(t){return this.$createElement("div",{class:`v-text-field__${t}`,ref:t},this[t])},onBlur(t){this.isFocused=!1,t&&this.$nextTick((()=>this.$emit("blur",t)))},onClick(){this.isFocused||this.isDisabled||!this.$refs.input||this.$refs.input.focus()},onFocus(t){if(!this.$refs.input)return;const e=(0,v.b)(this.$el);return e?e.activeElement!==this.$refs.input?this.$refs.input.focus():void(this.isFocused||(this.isFocused=!0,t&&this.$emit("focus",t))):void 0},onInput(t){const e=t.target;this.internalValue=e.value,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){t.keyCode===y.uP.enter&&this.lazyValue!==this.initialValue&&(this.initialValue=this.lazyValue,this.$emit("change",this.initialValue)),this.$emit("keydown",t)},onMouseDown(t){t.target!==this.$refs.input&&(t.preventDefault(),t.stopPropagation()),i.A.options.methods.onMouseDown.call(this,t)},onMouseUp(t){this.hasMouseDown&&this.focus(),i.A.options.methods.onMouseUp.call(this,t)},setLabelWidth(){this.outlined&&(this.labelWidth=this.$refs.label?Math.min(.75*this.$refs.label.scrollWidth+6,this.$el.offsetWidth-24):0)},setPrefixWidth(){this.$refs.prefix&&(this.prefixWidth=this.$refs.prefix.offsetWidth)},setPrependWidth(){this.outlined&&this.$refs["prepend-inner"]&&(this.prependWidth=this.$refs["prepend-inner"].offsetWidth)},tryAutofocus(){if(!this.autofocus||"undefined"===typeof document||!this.$refs.input)return!1;const t=(0,v.b)(this.$el);return!(!t||t.activeElement===this.$refs.input)&&(this.$refs.input.focus(),!0)},updateValue(t){this.hasColor=t,t?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)},onResize(){this.setLabelWidth(),this.setPrefixWidth(),this.setPrependWidth()}}})},4596:function(t,e,n){var i=n(3381);e.A=i.A.extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark(){return this.root?this.rootIsDark:i.A.options.computed.isDark.call(this)}},render(){return this.$slots.default&&this.$slots.default.find((t=>!t.isComment&&" "!==t.text))}})},5961:function(t,e,n){n.d(e,{Qo:function(){return d},SM:function(){return f},Z:function(){return l},mM:function(){return u},vt:function(){return h}});var i=n(8041);function r(t=[],...e){return Array().concat(t,...e)}function s(t,e="top center 0",n){return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:e}},render(e,n){const s="transition"+(n.props.group?"-group":""),o={props:{name:t,mode:n.props.mode},on:{beforeEnter(t){t.style.transformOrigin=n.props.origin,t.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(o.on.leave=r(o.on.leave,(t=>{const{offsetTop:e,offsetLeft:n,offsetWidth:i,offsetHeight:r}=t;t._transitionInitialStyles={position:t.style.position,top:t.style.top,left:t.style.left,width:t.style.width,height:t.style.height},t.style.position="absolute",t.style.top=e+"px",t.style.left=n+"px",t.style.width=i+"px",t.style.height=r+"px"})),o.on.afterLeave=r(o.on.afterLeave,(t=>{if(t&&t._transitionInitialStyles){const{position:e,top:n,left:i,width:r,height:s}=t._transitionInitialStyles;delete t._transitionInitialStyles,t.style.position=e||"",t.style.top=n||"",t.style.left=i||"",t.style.width=r||"",t.style.height=s||""}}))),n.props.hideOnLeave&&(o.on.leave=r(o.on.leave,(t=>{t.style.setProperty("display","none","important")}))),e(s,(0,i.Ay)(n.data,o),n.children)}}}function o(t,e,n="in-out"){return{name:t,functional:!0,props:{mode:{type:String,default:n}},render(n,r){return n("transition",(0,i.Ay)(r.data,{props:{name:t},on:e}),r.children)}}}var a=n(4152);function c(t="",e=!1){const n=e?"width":"height",i=`offset${(0,a.Zb)(n)}`;return{beforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[n]:t.style[n]}},enter(e){const r=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden";const s=`${e[i]}px`;e.style[n]="0",e.offsetHeight,e.style.transition=r.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((()=>{e.style[n]=s}))},afterEnter:s,enterCancelled:s,leave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[n]:t.style[n]},t.style.overflow="hidden",t.style[n]=`${t[i]}px`,t.offsetHeight,requestAnimationFrame((()=>t.style[n]="0"))},afterLeave:r,leaveCancelled:r};function r(e){t&&e._parent&&e._parent.classList.remove(t),s(e)}function s(t){const e=t._initialStyle[n];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[n]=e),delete t._initialStyle}}s("carousel-transition"),s("carousel-reverse-transition"),s("tab-transition"),s("tab-reverse-transition"),s("menu-transition");const l=s("fab-transition","center center","out-in"),u=(s("dialog-transition"),s("dialog-bottom-transition"),s("dialog-top-transition"),s("fade-transition")),h=(s("scale-transition"),s("scroll-x-transition"),s("scroll-x-reverse-transition"),s("scroll-y-transition"),s("scroll-y-reverse-transition"),s("slide-x-transition")),d=(s("slide-x-reverse-transition"),s("slide-y-transition"),s("slide-y-reverse-transition"),o("expand-transition",c())),f=o("expand-x-transition",c("",!0))},4598:function(t,e,n){n(4114);var i=n(5189);function r(){return!0}function s(t,e,n){if(!t||!1===o(t,n))return!1;const r=(0,i.b)(e);if("undefined"!==typeof ShadowRoot&&r instanceof ShadowRoot&&r.host===t.target)return!1;const s=("object"===typeof n.value&&n.value.include||(()=>[]))();return s.push(e),!s.some((e=>e.contains(t.target)))}function o(t,e){const n="object"===typeof e.value&&e.value.closeConditional||r;return n(t)}function a(t,e,n){const i="function"===typeof n.value?n.value:n.value.handler;e._clickOutside.lastMousedownWasOutside&&s(t,e,n)&&setTimeout((()=>{o(t,n)&&i&&i(t)}),0)}function c(t,e){const n=(0,i.b)(t);e(document),"undefined"!==typeof ShadowRoot&&n instanceof ShadowRoot&&e(n)}const l={inserted(t,e,n){const i=n=>a(n,t,e),r=n=>{t._clickOutside.lastMousedownWasOutside=s(n,t,e)};c(t,(t=>{t.addEventListener("click",i,!0),t.addEventListener("mousedown",r,!0)})),t._clickOutside||(t._clickOutside={lastMousedownWasOutside:!0}),t._clickOutside[n.context._uid]={onClick:i,onMousedown:r}},unbind(t,e,n){t._clickOutside&&(c(t,(e=>{var i;if(!e||!(null===(i=t._clickOutside)||void 0===i?void 0:i[n.context._uid]))return;const{onClick:r,onMousedown:s}=t._clickOutside[n.context._uid];e.removeEventListener("click",r,!0),e.removeEventListener("mousedown",s,!0)})),delete t._clickOutside[n.context._uid])}};e.A=l},1677:function(t,e,n){function i(t,e,n){if("undefined"===typeof window||!("IntersectionObserver"in window))return;const i=e.modifiers||{},s=e.value,{handler:o,options:a}="object"===typeof s?s:{handler:s,options:{}},c=new IntersectionObserver(((s=[],a)=>{var c;const l=null===(c=t._observe)||void 0===c?void 0:c[n.context._uid];if(!l)return;const u=s.some((t=>t.isIntersecting));!o||i.quiet&&!l.init||i.once&&!u&&!l.init||o(s,a,u),u&&i.once?r(t,e,n):l.init=!0}),a);t._observe=Object(t._observe),t._observe[n.context._uid]={init:!1,observer:c},c.observe(t)}function r(t,e,n){var i;const r=null===(i=t._observe)||void 0===i?void 0:i[n.context._uid];r&&(r.observer.unobserve(t),delete t._observe[n.context._uid])}const s={inserted:i,unbind:r};e.A=s},5168:function(t,e,n){function i(t,e,n){const i=e.value,r=e.options||{passive:!0};window.addEventListener("resize",i,r),t._onResize=Object(t._onResize),t._onResize[n.context._uid]={callback:i,options:r},e.modifiers&&e.modifiers.quiet||i()}function r(t,e,n){var i;if(!(null===(i=t._onResize)||void 0===i?void 0:i[n.context._uid]))return;const{callback:r,options:s}=t._onResize[n.context._uid];window.removeEventListener("resize",r,s),delete t._onResize[n.context._uid]}const s={inserted:i,unbind:r};e.A=s},4746:function(t,e,n){n.d(e,{A:function(){return E}});var i=n(4152);const r=80;function s(t,e){t.style.transform=e,t.style.webkitTransform=e}function o(t){return"TouchEvent"===t.constructor.name}function a(t){return"KeyboardEvent"===t.constructor.name}const c=(t,e,n={})=>{let i=0,r=0;if(!a(t)){const n=e.getBoundingClientRect(),s=o(t)?t.touches[t.touches.length-1]:t;i=s.clientX-n.left,r=s.clientY-n.top}let s=0,c=.3;e._ripple&&e._ripple.circle?(c=.15,s=e.clientWidth/2,s=n.center?s:s+Math.sqrt((i-s)**2+(r-s)**2)/4):s=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const l=(e.clientWidth-2*s)/2+"px",u=(e.clientHeight-2*s)/2+"px",h=n.center?l:i-s+"px",d=n.center?u:r-s+"px";return{radius:s,scale:c,x:h,y:d,centerX:l,centerY:u}},l={show(t,e,n={}){if(!e._ripple||!e._ripple.enabled)return;const i=document.createElement("span"),r=document.createElement("span");i.appendChild(r),i.className="v-ripple__container",n.class&&(i.className+=` ${n.class}`);const{radius:o,scale:a,x:l,y:u,centerX:h,centerY:d}=c(t,e,n),f=2*o+"px";r.className="v-ripple__animation",r.style.width=f,r.style.height=f,e.appendChild(i);const p=window.getComputedStyle(e);p&&"static"===p.position&&(e.style.position="relative",e.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),s(r,`translate(${l}, ${u}) scale3d(${a},${a},${a})`),r.dataset.activated=String(performance.now()),setTimeout((()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),s(r,`translate(${h}, ${d}) scale3d(1,1,1)`)}),0)},hide(t){if(!t||!t._ripple||!t._ripple.enabled)return;const e=t.getElementsByClassName("v-ripple__animation");if(0===e.length)return;const n=e[e.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const i=performance.now()-Number(n.dataset.activated),r=Math.max(250-i,0);setTimeout((()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout((()=>{var e;const i=t.getElementsByClassName("v-ripple__animation");1===i.length&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),(null===(e=n.parentNode)||void 0===e?void 0:e.parentNode)===t&&t.removeChild(n.parentNode)}),300)}),r)}};function u(t){return"undefined"===typeof t||!!t}function h(t){const e={},n=t.currentTarget;if(n&&n._ripple&&!n._ripple.touched&&!t.rippleStop){if(t.rippleStop=!0,o(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||a(t),n._ripple.class&&(e.class=n._ripple.class),o(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{l.show(t,n,e)},n._ripple.showTimer=window.setTimeout((()=>{n&&n._ripple&&n._ripple.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)}),r)}else l.show(t,n,e)}}function d(t){const e=t.currentTarget;if(e&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),"touchend"===t.type&&e._ripple.showTimerCommit)return e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,void(e._ripple.showTimer=setTimeout((()=>{d(t)})));window.setTimeout((()=>{e._ripple&&(e._ripple.touched=!1)})),l.hide(e)}}function f(t){const e=t.currentTarget;e&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let p=!1;function m(t){p||t.keyCode!==i.uP.enter&&t.keyCode!==i.uP.space||(p=!0,h(t))}function g(t){p=!1,d(t)}function v(t){!0===p&&(p=!1,d(t))}function y(t,e,n){const i=u(e.value);i||l.hide(t),t._ripple=t._ripple||{},t._ripple.enabled=i;const r=e.value||{};r.center&&(t._ripple.centered=!0),r.class&&(t._ripple.class=e.value.class),r.circle&&(t._ripple.circle=r.circle),i&&!n?(t.addEventListener("touchstart",h,{passive:!0}),t.addEventListener("touchend",d,{passive:!0}),t.addEventListener("touchmove",f,{passive:!0}),t.addEventListener("touchcancel",d),t.addEventListener("mousedown",h),t.addEventListener("mouseup",d),t.addEventListener("mouseleave",d),t.addEventListener("keydown",m),t.addEventListener("keyup",g),t.addEventListener("blur",v),t.addEventListener("dragstart",d,{passive:!0})):!i&&n&&b(t)}function b(t){t.removeEventListener("mousedown",h),t.removeEventListener("touchstart",h),t.removeEventListener("touchend",d),t.removeEventListener("touchmove",f),t.removeEventListener("touchcancel",d),t.removeEventListener("mouseup",d),t.removeEventListener("mouseleave",d),t.removeEventListener("keydown",m),t.removeEventListener("keyup",g),t.removeEventListener("dragstart",d),t.removeEventListener("blur",v)}function w(t,e,n){y(t,e,!1)}function _(t){delete t._ripple,b(t)}function C(t,e){if(e.value===e.oldValue)return;const n=u(e.oldValue);y(t,e,n)}const S={bind:w,unbind:_,update:C};var E=S},3971:function(t,e,n){n.d(e,{A:function(){return tt}});n(4114);var i=n(5471),r=n(6988);function s(t,e={}){if(s.installed)return;s.installed=!0,i.Ay!==t&&(0,r.yA)("Multiple instances of Vue detected\nSee https://github.com/vuetifyjs/vuetify/issues/4068\n\nIf you're seeing \"$attrs is readonly\", it's caused by this");const n=e.components||{},o=e.directives||{};for(const i in o){const e=o[i];t.directive(i,e)}(function e(n){if(n){for(const i in n){const r=n[i];r&&!e(r.$_vuetify_subcomponents)&&t.component(i,r)}return!0}return!1})(n),t.$_vuetify_installed||(t.$_vuetify_installed=!0,t.mixin({beforeCreate(){const e=this.$options;e.vuetify?(e.vuetify.init(this,this.$ssrContext),this.$vuetify=t.observable(e.vuetify.framework)):this.$vuetify=e.parent&&e.parent.$vuetify||this},beforeMount(){this.$options.vuetify&&this.$el&&this.$el.hasAttribute("data-server-rendered")&&(this.$vuetify.isHydrating=!0,this.$vuetify.breakpoint.update(!0))},mounted(){this.$options.vuetify&&this.$vuetify.isHydrating&&(this.$vuetify.isHydrating=!1,this.$vuetify.breakpoint.update())}}))}var o={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{wrapper:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Current Page, Page {0}"}},rating:{ariaLabel:{icon:"Rating {0} of {1}"}},loading:"Loading..."};const a={breakpoint:{mobileBreakpoint:1264,scrollBarWidth:16,thresholds:{xs:600,sm:960,md:1280,lg:1920}},icons:{iconfont:"mdi",values:{}},lang:{current:"en",locales:{en:o},t:void 0},rtl:!1,theme:{dark:!1,default:"light",disable:!1,options:{cspNonce:void 0,customProperties:void 0,minifyTheme:void 0,themeCache:void 0,variations:!0},themes:{light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},dark:{primary:"#2196F3",secondary:"#424242",accent:"#FF4081",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"}}}};var c=n(4152),l=n(3761);class u extends l.k{constructor(t,e){super();const n=(0,c.D9)({},a),{userPreset:i}=e,{preset:s={},...o}=i;null!=s.preset&&(0,r.OP)("Global presets do not support the **preset** option, it can be safely omitted"),e.preset=(0,c.D9)((0,c.D9)(n,s),o)}}u.property="presets";class h extends l.k{constructor(){super(...arguments),this.bar=0,this.top=0,this.left=0,this.insetFooter=0,this.right=0,this.bottom=0,this.footer=0,this.application={bar:{},top:{},left:{},insetFooter:{},right:{},bottom:{},footer:{}}}register(t,e,n){this.application[e][t]=n,this.update(e)}unregister(t,e){null!=this.application[e][t]&&(delete this.application[e][t],this.update(e))}update(t){this[t]=Object.values(this.application[t]).reduce(((t,e)=>t+e),0)}}h.property="application";class d extends l.k{constructor(t){super(),this.xs=!1,this.sm=!1,this.md=!1,this.lg=!1,this.xl=!1,this.xsOnly=!1,this.smOnly=!1,this.smAndDown=!1,this.smAndUp=!1,this.mdOnly=!1,this.mdAndDown=!1,this.mdAndUp=!1,this.lgOnly=!1,this.lgAndDown=!1,this.lgAndUp=!1,this.xlOnly=!1,this.name="xs",this.height=0,this.width=0,this.mobile=!0,this.resizeTimeout=0;const{mobileBreakpoint:e,scrollBarWidth:n,thresholds:i}=t[d.property];this.mobileBreakpoint=e,this.scrollBarWidth=n,this.thresholds=i}init(){this.update(),"undefined"!==typeof window&&window.addEventListener("resize",this.onResize.bind(this),{passive:!0})}update(t=!1){const e=t?0:this.getClientHeight(),n=t?0:this.getClientWidth(),i=n<this.thresholds.xs,r=n<this.thresholds.sm&&!i,s=n<this.thresholds.md-this.scrollBarWidth&&!(r||i),o=n<this.thresholds.lg-this.scrollBarWidth&&!(s||r||i),a=n>=this.thresholds.lg-this.scrollBarWidth;switch(this.height=e,this.width=n,this.xs=i,this.sm=r,this.md=s,this.lg=o,this.xl=a,this.xsOnly=i,this.smOnly=r,this.smAndDown=(i||r)&&!(s||o||a),this.smAndUp=!i&&(r||s||o||a),this.mdOnly=s,this.mdAndDown=(i||r||s)&&!(o||a),this.mdAndUp=!(i||r)&&(s||o||a),this.lgOnly=o,this.lgAndDown=(i||r||s||o)&&!a,this.lgAndUp=!(i||r||s)&&(o||a),this.xlOnly=a,!0){case i:this.name="xs";break;case r:this.name="sm";break;case s:this.name="md";break;case o:this.name="lg";break;default:this.name="xl";break}if("number"===typeof this.mobileBreakpoint)return void(this.mobile=n<parseInt(this.mobileBreakpoint,10));const c={xs:0,sm:1,md:2,lg:3,xl:4},l=c[this.name],u=c[this.mobileBreakpoint];this.mobile=l<=u}onResize(){clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.update.bind(this),200)}getClientWidth(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientWidth,window.innerWidth||0)}getClientHeight(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}d.property="breakpoint";var f=n(4427);const p={complete:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",cancel:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",close:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",delete:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",clear:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",success:"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z",info:"M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2ZM13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",warning:"M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",error:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",prev:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",next:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",checkboxOn:"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",checkboxOff:"M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z",checkboxIndeterminate:"M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",delimiter:"M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",sort:"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",expand:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",menu:"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",subgroup:"M7,10L12,15L17,10H7Z",dropdown:"M7,10L12,15L17,10H7Z",radioOn:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z",radioOff:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",edit:"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",ratingEmpty:"M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",ratingFull:"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",ratingHalf:"M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",loading:"M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12",first:"M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z",last:"M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z",unfold:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",file:"M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z",plus:"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",minus:"M19,13H5V11H19V13Z"};var m=p;const g={complete:"check",cancel:"cancel",close:"close",delete:"cancel",clear:"clear",success:"check_circle",info:"info",warning:"priority_high",error:"warning",prev:"chevron_left",next:"chevron_right",checkboxOn:"check_box",checkboxOff:"check_box_outline_blank",checkboxIndeterminate:"indeterminate_check_box",delimiter:"fiber_manual_record",sort:"arrow_upward",expand:"keyboard_arrow_down",menu:"menu",subgroup:"arrow_drop_down",dropdown:"arrow_drop_down",radioOn:"radio_button_checked",radioOff:"radio_button_unchecked",edit:"edit",ratingEmpty:"star_border",ratingFull:"star",ratingHalf:"star_half",loading:"cached",first:"first_page",last:"last_page",unfold:"unfold_more",file:"attach_file",plus:"add",minus:"remove"};var v=g;const y={complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-exclamation",error:"mdi-alert",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"};var b=y;const w={complete:"fas fa-check",cancel:"fas fa-times-circle",close:"fas fa-times",delete:"fas fa-times-circle",clear:"fas fa-times-circle",success:"fas fa-check-circle",info:"fas fa-info-circle",warning:"fas fa-exclamation-circle",error:"fas fa-exclamation-triangle",prev:"fas fa-chevron-left",next:"fas fa-chevron-right",checkboxOn:"fas fa-check-square",checkboxOff:"far fa-square",checkboxIndeterminate:"fas fa-minus-square",delimiter:"fas fa-circle",sort:"fas fa-sort-up",expand:"fas fa-chevron-down",menu:"fas fa-bars",subgroup:"fas fa-caret-down",dropdown:"fas fa-caret-down",radioOn:"far fa-dot-circle",radioOff:"far fa-circle",edit:"fas fa-edit",ratingEmpty:"far fa-star",ratingFull:"fas fa-star",ratingHalf:"fas fa-star-half",loading:"fas fa-sync",first:"fas fa-step-backward",last:"fas fa-step-forward",unfold:"fas fa-arrows-alt-v",file:"fas fa-paperclip",plus:"fas fa-plus",minus:"fas fa-minus"};var _=w;const C={complete:"fa fa-check",cancel:"fa fa-times-circle",close:"fa fa-times",delete:"fa fa-times-circle",clear:"fa fa-times-circle",success:"fa fa-check-circle",info:"fa fa-info-circle",warning:"fa fa-exclamation",error:"fa fa-exclamation-triangle",prev:"fa fa-chevron-left",next:"fa fa-chevron-right",checkboxOn:"fa fa-check-square",checkboxOff:"fa fa-square-o",checkboxIndeterminate:"fa fa-minus-square",delimiter:"fa fa-circle",sort:"fa fa-sort-up",expand:"fa fa-chevron-down",menu:"fa fa-bars",subgroup:"fa fa-caret-down",dropdown:"fa fa-caret-down",radioOn:"fa fa-dot-circle-o",radioOff:"fa fa-circle-o",edit:"fa fa-pencil",ratingEmpty:"fa fa-star-o",ratingFull:"fa fa-star",ratingHalf:"fa fa-star-half-o",loading:"fa fa-refresh",first:"fa fa-step-backward",last:"fa fa-step-forward",unfold:"fa fa-angle-double-down",file:"fa fa-paperclip",plus:"fa fa-plus",minus:"fa fa-minus"};var S=C;function E(t,e){const n={};for(const i in e)n[i]={component:t,props:{icon:e[i].split(" fa-")}};return n}var A=E("font-awesome-icon",_),T=Object.freeze({mdiSvg:m,md:v,mdi:b,fa:_,fa4:S,faSvg:A});class I extends l.k{constructor(t){super();const{iconfont:e,values:n,component:i}=t[I.property];this.component=i,this.iconfont=e,this.values=(0,c.D9)(T[e],n)}}I.property="icons";const k="$vuetify.",x=Symbol("Lang fallback");function O(t,e,n=!1,i){const s=e.replace(k,"");let o=(0,c.no)(t,s,x);return o===x&&(n?((0,r.yA)(`Translation key "${s}" not found in fallback`),o=e):((0,r.OP)(`Translation key "${s}" not found, falling back to default`),o=O(i,e,!0,i))),o}class L extends l.k{constructor(t){super(),this.defaultLocale="en";const{current:e,locales:n,t:i}=t[L.property];this.current=e,this.locales=n,this.translator=i||this.defaultTranslator}currentLocale(t){const e=this.locales[this.current],n=this.locales[this.defaultLocale];return O(e,t,!1,n)}t(t,...e){return t.startsWith(k)?this.translator(t,...e):this.replace(t,e)}defaultTranslator(t,...e){return this.replace(this.currentLocale(t),e)}replace(t,e){return t.replace(/\{(\d+)\}/g,((t,n)=>String(e[+n])))}}L.property="lang";var D=n(517);const $=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],N=t=>t<=.0031308?12.92*t:1.055*t**(1/2.4)-.055,P=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],R=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function M(t){const e=Array(3),n=N,i=$;for(let r=0;r<3;++r)e[r]=Math.round(255*(0,c.qE)(n(i[r][0]*t[0]+i[r][1]*t[1]+i[r][2]*t[2])));return(e[0]<<16)+(e[1]<<8)+(e[2]|0)}function V(t){const e=[0,0,0],n=R,i=P,r=n((t>>16&255)/255),s=n((t>>8&255)/255),o=n((255&t)/255);for(let a=0;a<3;++a)e[a]=i[a][0]*r+i[a][1]*s+i[a][2]*o;return e}const F=.20689655172413793,B=t=>t>F**3?Math.cbrt(t):t/(3*F**2)+4/29,j=t=>t>F?t**3:3*F**2*(t-4/29);function U(t){const e=B,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function z(t){const e=j,n=(t[0]+16)/116;return[.95047*e(n+t[1]/500),e(n),1.08883*e(n-t[2]/200)]}function H(t,e=!1,n=!0){const{anchor:i,...r}=t,s=Object.keys(r),o={};for(let a=0;a<s.length;++a){const i=s[a],r=t[i];null!=r&&(n?e?("base"===i||i.startsWith("lighten")||i.startsWith("darken"))&&(o[i]=(0,D.si)(r)):o[i]="object"===typeof r?H(r,!0,n):Y(i,(0,D.E8)(r)):o[i]={base:(0,D.y6)((0,D.E8)(r))})}return e||(o.anchor=i||o.base||o.primary.base),o}const q=(t,e)=>`\n.v-application .${t} {\n  background-color: ${e} !important;\n  border-color: ${e} !important;\n}\n.v-application .${t}--text {\n  color: ${e} !important;\n  caret-color: ${e} !important;\n}`,W=(t,e,n)=>{const[i,r]=e.split(/(\d)/,2);return`\n.v-application .${t}.${i}-${r} {\n  background-color: ${n} !important;\n  border-color: ${n} !important;\n}\n.v-application .${t}--text.text--${i}-${r} {\n  color: ${n} !important;\n  caret-color: ${n} !important;\n}`},K=(t,e="base")=>`--v-${t}-${e}`,G=(t,e="base")=>`var(${K(t,e)})`;function Q(t,e=!1){const{anchor:n,...i}=t,r=Object.keys(i);if(!r.length)return"";let s="",o="";const a=e?G("anchor"):n;o+=`.v-application a { color: ${a}; }`,e&&(s+=`  ${K("anchor")}: ${n};\n`);for(let l=0;l<r.length;++l){const n=r[l],i=t[n];o+=q(n,e?G(n):i.base),e&&(s+=`  ${K(n)}: ${i.base};\n`);const a=(0,c.HP)(i);for(let t=0;t<a.length;++t){const r=a[t],c=i[r];"base"!==r&&(o+=W(n,r,e?G(n,r):c),e&&(s+=`  ${K(n,r)}: ${c};\n`))}}return e&&(s=`:root {\n${s}}\n\n`),s+o}function Y(t,e){const n={base:(0,D.y6)(e)};for(let i=5;i>0;--i)n[`lighten${i}`]=(0,D.y6)(X(e,i));for(let i=1;i<=4;++i)n[`darken${i}`]=(0,D.y6)(J(e,i));return n}function X(t,e){const n=U(V(t));return n[0]=n[0]+10*e,M(z(n))}function J(t,e){const n=U(V(t));return n[0]=n[0]-10*e,M(z(n))}class Z extends l.k{constructor(t){super(),this.disabled=!1,this.isDark=null,this.unwatch=null,this.vueMeta=null;const{dark:e,disable:n,options:i,themes:r}=t[Z.property];this.dark=Boolean(e),this.defaults=this.themes=r,this.options=i,n?this.disabled=!0:this.themes={dark:this.fillVariant(r.dark,!0),light:this.fillVariant(r.light,!1)}}set css(t){this.vueMeta?this.isVueMeta23&&this.applyVueMeta23():this.checkOrCreateStyleElement()&&(this.styleEl.innerHTML=t)}set dark(t){const e=this.isDark;this.isDark=t,null!=e&&this.applyTheme()}get dark(){return Boolean(this.isDark)}applyTheme(){if(this.disabled)return this.clearCss();this.css=this.generatedStyles}clearCss(){this.css=""}init(t,e){this.disabled||(t.$meta?this.initVueMeta(t):e&&this.initSSR(e),this.initTheme(t))}setTheme(t,e){this.themes[t]=Object.assign(this.themes[t],e),this.applyTheme()}resetThemes(){this.themes.light=Object.assign({},this.defaults.light),this.themes.dark=Object.assign({},this.defaults.dark),this.applyTheme()}checkOrCreateStyleElement(){return this.styleEl=document.getElementById("vuetify-theme-stylesheet"),!!this.styleEl||(this.genStyleElement(),Boolean(this.styleEl))}fillVariant(t={},e){const n=this.themes[e?"dark":"light"];return Object.assign({},n,t)}genStyleElement(){"undefined"!==typeof document&&(this.styleEl=document.createElement("style"),this.styleEl.type="text/css",this.styleEl.id="vuetify-theme-stylesheet",this.options.cspNonce&&this.styleEl.setAttribute("nonce",this.options.cspNonce),document.head.appendChild(this.styleEl))}initVueMeta(t){if(this.vueMeta=t.$meta(),this.isVueMeta23)return void t.$nextTick((()=>{this.applyVueMeta23()}));const e="function"===typeof this.vueMeta.getOptions?this.vueMeta.getOptions().keyName:"metaInfo",n=t.$options[e]||{};t.$options[e]=()=>{n.style=n.style||[];const t=n.style.find((t=>"vuetify-theme-stylesheet"===t.id));return t?t.cssText=this.generatedStyles:n.style.push({cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:(this.options||{}).cspNonce}),n}}applyVueMeta23(){const{set:t}=this.vueMeta.addApp("vuetify");t({style:[{cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:this.options.cspNonce}]})}initSSR(t){const e=this.options.cspNonce?` nonce="${this.options.cspNonce}"`:"";t.head=t.head||"",t.head+=`<style type="text/css" id="vuetify-theme-stylesheet"${e}>${this.generatedStyles}</style>`}initTheme(t){"undefined"!==typeof document&&(this.unwatch&&(this.unwatch(),this.unwatch=null),t.$once("hook:created",(()=>{const e=i.Ay.observable({themes:this.themes});this.unwatch=t.$watch((()=>e.themes),(()=>this.applyTheme()),{deep:!0})})),this.applyTheme())}get currentTheme(){const t=this.dark?"dark":"light";return this.themes[t]}get generatedStyles(){const t=this.parsedTheme,e=this.options||{};let n;return null!=e.themeCache&&(n=e.themeCache.get(t),null!=n)||(n=Q(t,e.customProperties),null!=e.minifyTheme&&(n=e.minifyTheme(n)),null!=e.themeCache&&e.themeCache.set(t,n)),n}get parsedTheme(){return H(this.currentTheme||{},void 0,(0,c.LJ)(this.options,["variations"],!0))}get isVueMeta23(){return"function"===typeof this.vueMeta.addApp}}Z.property="theme";class tt{constructor(t={}){this.framework={isHydrating:!1},this.installed=[],this.preset={},this.userPreset={},this.userPreset=t,this.use(u),this.use(h),this.use(d),this.use(f.I),this.use(I),this.use(L),this.use(Z)}init(t,e){this.installed.forEach((n=>{const i=this.framework[n];i.framework=this.framework,i.init(t,e)})),this.framework.rtl=Boolean(this.preset.rtl)}use(t){const e=t.property;this.installed.includes(e)||(this.framework[e]=new t(this.preset,this),this.installed.push(e))}}tt.install=s,tt.installed=!1,tt.version="2.7.2",tt.config={silent:!1}},5030:function(t,e,n){var i=n(7391),r=n(428),s=n(5803),o=n(4152),a=n(6988);const c=(0,s.A)(i.A,r.A);e.A=c.extend({name:"activatable",props:{activator:{default:null,validator:t=>["string","object"].includes(typeof t)},disabled:Boolean,internalActivator:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,openOnFocus:Boolean},data:()=>({activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}),watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted(){const t=(0,o.fo)(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&(0,a.yA)('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy(){this.removeActivatorEvents()},methods:{addActivatorEvents(){if(!this.activator||this.disabled||!this.getActivator())return;this.listeners=this.genActivatorListeners();const t=Object.keys(this.listeners);for(const e of t)this.getActivator().addEventListener(e,this.listeners[e])},genActivator(){const t=(0,o.$c)(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes(){return{role:this.openOnClick&&!this.openOnHover?"button":void 0,"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners(){if(this.disabled)return{};const t={};return this.openOnHover?(t.mouseenter=t=>{this.getActivator(t),this.runDelay("open")},t.mouseleave=t=>{this.getActivator(t),this.runDelay("close")}):this.openOnClick&&(t.click=t=>{const e=this.getActivator(t);e&&e.focus(),t.stopPropagation(),this.isActive=!this.isActive}),this.openOnFocus&&(t.focus=t=>{this.getActivator(t),t.stopPropagation(),this.isActive=!this.isActive}),t},getActivator(t){if(this.activatorElement)return this.activatorElement;let e=null;if(this.activator){const t=this.internalActivator?this.$el:document;e="string"===typeof this.activator?t.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){const t=this.activatorNode[0].componentInstance;e=t&&t.$options.mixins&&t.$options.mixins.some((t=>t.options&&["activatable","menuable"].includes(t.options.name)))?t.getActivator():this.activatorNode[0].elm}else t&&(e=t.currentTarget||t.target);return this.activatorElement=(null===e||void 0===e?void 0:e.nodeType)===Node.ELEMENT_NODE?e:null,this.activatorElement},getContentSlot(){return(0,o.$c)(this,"default",this.getValueProxy(),!0)},getValueProxy(){const t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents(){if(!this.activator||!this.activatorElement)return;const t=Object.keys(this.listeners);for(const e of t)this.activatorElement.removeEventListener(e,this.listeners[e]);this.listeners={}},resetActivator(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}})},7717:function(t,e,n){var i=n(5471);function r(t){return function(e,n){for(const i in n)Object.prototype.hasOwnProperty.call(e,i)||this.$delete(this.$data[t],i);for(const i in e)this.$set(this.$data[t],i,e[i])}}e.A=i.Ay.extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",r("attrs$"),{immediate:!0}),this.$watch("$listeners",r("listeners$"),{immediate:!0})}})},72:function(t,e,n){var i=n(6988),r=n(5471);e.A=r.Ay.extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&(0,i.rq)("lazy",this)},methods:{showLazyContent(t){return this.hasContent&&t?t():[this.$createElement()]}}})},8743:function(t,e,n){var i=n(5471),r=n(6988),s=n(517);e.A=i.Ay.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(t,e={}){return"string"===typeof e.style?((0,r.yA)("style must be an object",this),e):"string"===typeof e.class?((0,r.yA)("class must be an object",this),e):((0,s.VP)(t)?e.style={...e.style,"background-color":`${t}`,"border-color":`${t}`}:t&&(e.class={...e.class,[t]:!0}),e)},setTextColor(t,e={}){if("string"===typeof e.style)return(0,r.yA)("style must be an object",this),e;if("string"===typeof e.class)return(0,r.yA)("class must be an object",this),e;if((0,s.VP)(t))e.style={...e.style,color:`${t}`,"caret-color":`${t}`};else if(t){const[n,i]=t.toString().trim().split(" ",2);e.class={...e.class,[n+"--text"]:!0},i&&(e.class["text--"+i]=!0)}return e}}})},8968:function(t,e,n){var i=n(5471),r=n(4152);e.A=i.Ay.extend({name:"comparable",props:{valueComparator:{type:Function,default:r.bD}}})},7391:function(t,e,n){var i=n(5471);e.A=i.Ay.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:()=>({openTimeout:void 0,closeTimeout:void 0}),methods:{clearDelay(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay(t,e){this.clearDelay();const n=parseInt(this[`${t}Delay`],10);this[`${t}Timeout`]=setTimeout(e||(()=>{this.isActive={open:!0,close:!1}[t]}),n)}}})},2031:function(t,e,n){n(4114);var i=n(5803);function r(t){const e=[];for(let n=0;n<t.length;n++){const i=t[n];i.isActive&&i.isDependent?e.push(i):e.push(...r(i.$children))}return e}e.A=(0,i.A)().extend({name:"dependent",data(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive(t){if(t)return;const e=this.getOpenDependents();for(let n=0;n<e.length;n++)e[n].isActive=!1}},methods:{getOpenDependents(){return this.closeDependents?r(this.$children):[]},getOpenDependentElements(){const t=[],e=this.getOpenDependents();for(let n=0;n<e.length;n++)t.push(...e[n].getClickableDependentElements());return t},getClickableDependentElements(){const t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push(...this.getOpenDependentElements()),t}}})},7631:function(t,e,n){var i=n(72),r=n(4152),s=n(5803),o=n(6988);function a(t){const e=typeof t;return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}function c(t){t.forEach((t=>{t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}e.A=(0,s.A)(i.A).extend({name:"detachable",props:{attach:{default:!1,validator:a},contentClass:{type:String,default:""}},data:()=>({activatorNode:null,hasDetached:!1}),watch:{attach(){this.hasDetached=!1,this.initDetach()},hasContent(){this.$nextTick(this.initDetach)}},beforeMount(){this.$nextTick((()=>{if(this.activatorNode){const t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach((t=>{if(!t.elm)return;if(!this.$el.parentNode)return;const e=this.$el===this.$el.parentNode.firstChild?this.$el:this.$el.nextSibling;this.$el.parentNode.insertBefore(t.elm,e)}))}}))},mounted(){this.hasContent&&this.initDetach()},deactivated(){this.isActive=!1},beforeDestroy(){this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content)},destroyed(){if(this.activatorNode){const t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];if(this.$el.isConnected){const e=new MutationObserver((n=>{n.some((t=>Array.from(t.removedNodes).includes(this.$el)))&&(e.disconnect(),c(t))}));e.observe(this.$el.parentNode,{subtree:!1,childList:!0})}else c(t)}},methods:{getScopeIdAttrs(){const t=(0,r.no)(this.$vnode,"context.$options._scopeId");return t&&{[t]:""}},initDetach(){if(this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach)return;let t;t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):(0,o.OP)(`Unable to locate target ${this.attach||"[data-app]"}`,this)}}})},3251:function(t,e,n){var i=n(5471);e.A=i.Ay.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:{[`elevation-${this.elevation}`]:!0}}}})},7515:function(t,e,n){n.d(e,{P:function(){return r}});var i=n(7540);function r(t,e,n){return(0,i.W)(t,e,n).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[t])return this[t].activeClass}},disabled:Boolean},data(){return{isActive:!1}},computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[t]&&this[t].register(this)},beforeDestroy(){this[t]&&this[t].unregister(this)},methods:{toggle(t){this.disabled&&t?t.preventDefault():this.$emit("change")}}})}r("itemGroup")},3801:function(t,e,n){n.d(e,{A:function(){return m}});var i=n(5471),r=n(5961),s=n(1677),o=n(8743),a=n(6763),c=n(4632),l=n(3381),u=n(4152),h=n(5803);const d=(0,h.A)(o.A,(0,a.P)(["absolute","fixed","top","bottom"]),c.A,l.A);var f=d.extend({name:"v-progress-linear",directives:{intersect:s.A},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:(0,u.Dg)(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:(0,u.Dg)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:t,[this.isReversed?"right":"left"]:(0,u.Dg)(this.normalizedValue,"%"),width:(0,u.Dg)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?r.mM:r.vt},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=(0,u.Dg)(this.normalizedBuffer,"%")),t}},methods:{genContent(){const t=(0,u.$c)(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners(){const t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){if(!this.reactive)return;const{width:e}=this.$el.getBoundingClientRect();this.internalValue=t.offsetX/e*100},onObserve(t,e,n){this.isVisible=n},normalize(t){return t<0?0:t>100?100:parseFloat(t)}},render(t){const e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?(0,u.Dg)(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),p=f,m=i.Ay.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:(0,u.$c)(this,"progress")||this.$createElement(p,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},7282:function(t,e,n){var i=n(4152),r=n(5471);e.A=r.Ay.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=(0,i.Dg)(this.height),n=(0,i.Dg)(this.minHeight),r=(0,i.Dg)(this.minWidth),s=(0,i.Dg)(this.maxHeight),o=(0,i.Dg)(this.maxWidth),a=(0,i.Dg)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),r&&(t.minWidth=r),s&&(t.maxHeight=s),o&&(t.maxWidth=o),a&&(t.width=a),t}}})},6763:function(t,e,n){n.d(e,{P:function(){return o}});var i=n(5471),r=n(4152);const s={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function o(t=[]){return i.Ay.extend({name:"positionable",props:t.length?(0,r.fF)(s,t):s})}e.A=o()},4632:function(t,e,n){var i=n(5471);function r(t="value",e="change"){return i.Ay.extend({name:"proxyable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{internalLazyValue:this[t]}},computed:{internalValue:{get(){return this.internalLazyValue},set(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:{[t](t){this.internalLazyValue=t}}})}const s=r();e.A=s},7540:function(t,e,n){n.d(e,{G:function(){return a},W:function(){return o}});var i=n(5471),r=n(6988);function s(t,e){return()=>(0,r.OP)(`The ${t} component must be used inside a ${e}`)}function o(t,e,n){const r=e&&n?{register:s(e,n),unregister:s(e,n)}:null;return i.Ay.extend({name:"registrable-inject",inject:{[t]:{default:r}}})}function a(t,e=!1){return i.Ay.extend({name:"registrable-provide",provide(){return{[t]:e?this:{register:this.register,unregister:this.unregister}}}})}},7198:function(t,e,n){var i=n(5471);e.A=i.Ay.extend({name:"returnable",props:{returnValue:null},data:()=>({isActive:!1,originalValue:null}),watch:{isActive(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save(t){this.originalValue=t,setTimeout((()=>{this.isActive=!1}))}}})},9272:function(t,e,n){n(4114);var i=n(5471);e.A=i.Ay.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const t=[],e="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof e){const n=e.split(" ");for(const e of n)t.push(`rounded-${e}`)}else e&&t.push("rounded");return t.length>0?{[t.join(" ")]:!0}:{}}}})},8418:function(t,e,n){var i=n(5471),r=n(4746),s=n(4152);e.A=i.Ay.extend({name:"routable",directives:{Ripple:r.A},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple(){var t;return null!==(t=this.ripple)&&void 0!==t?t:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},mounted(){this.onRouteChange()},methods:{generateRouteLink(){let t,e=this.exact;const n={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,..."click"in this?{click:this.click}:void 0},ref:"link"};if("undefined"===typeof this.exact&&(e="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let i=this.activeClass,r=this.exactActiveClass||i;this.proxyClass&&(i=`${i} ${this.proxyClass}`.trim(),r=`${r} ${this.proxyClass}`.trim()),t=this.nuxt?"nuxt-link":"router-link",Object.assign(n.props,{to:this.to,exact:e,exactPath:this.exactPath,activeClass:i,exactActiveClass:r,append:this.append,replace:this.replace})}else t=(this.href?"a":this.tag)||"div","a"===t&&this.href&&(n.attrs.href=this.href);return this.target&&(n.attrs.target=this.target),{tag:t,data:n}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const t=`${this.activeClass||""} ${this.proxyClass||""}`.trim(),e=`${this.exactActiveClass||""} ${this.proxyClass||""}`.trim()||t,n="_vnode.data.class."+(this.exact?e:t);this.$nextTick((()=>{!(0,s.no)(this.$refs.link,n)===this.isActive&&this.toggle()}))},toggle(){this.isActive=!this.isActive}}})},9785:function(t,e,n){var i=n(5471);e.A=i.Ay.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},5367:function(t,e,n){var i=n(5471);e.A=i.Ay.extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame((()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0}))}})},5648:function(t,e,n){n(4114);var i=n(5471),r=n(4152);e.A=i.Ay.extend().extend({name:"stackable",data(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex(){if("undefined"===typeof window)return 0;const t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:(0,r.fl)(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex(t=[]){const e=this.$el,n=[this.stackMinZIndex,(0,r.fl)(e)],i=[...document.getElementsByClassName("v-menu__content--active"),...document.getElementsByClassName("v-dialog__content--active")];for(let s=0;s<i.length;s++)t.includes(i[s])||n.push((0,r.fl)(i[s]));return Math.max(...n)}}})},3381:function(t,e,n){n.d(e,{H:function(){return s}});var i=n(5471);const r=i.Ay.extend().extend({name:"themeable",provide(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data(){return{themeableProvide:{isDark:!1}}},computed:{appIsDark(){return this.$vuetify.theme.dark||!1},isDark(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler(t,e){t!==e&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}});function s(t){const e={...t.props,...t.injections},n=r.options.computed.isDark.call(e);return r.options.computed.themeClasses.call({isDark:n})}e.A=r},428:function(t,e,n){n.d(e,{P:function(){return r}});var i=n(5471);function r(t="value",e="input"){return i.Ay.extend({name:"toggleable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{isActive:!!this[t]}},watch:{[t](t){this.isActive=!!t},isActive(n){!!n!==this[t]&&this.$emit(e,n)}}})}const s=r();e.A=s},3791:function(t,e,n){n(4114);var i=n(8743),r=n(3381),s=n(7540),o=n(4152),a=n(6988),c=n(5803);const l=(0,c.A)(i.A,(0,s.W)("form"),r.A);e.A=l.extend({name:"validatable",props:{disabled:{type:Boolean,default:null},error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:()=>[]},messages:{type:[String,Array],default:()=>[]},readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},success:Boolean,successMessages:{type:[String,Array],default:()=>[]},validateOnBlur:Boolean,value:{required:!1}},data(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor(){if(!this.isDisabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess(){return this.internalSuccessMessages.length>0||this.success},externalError(){return this.internalErrorMessages.length>0||this.error},hasMessages(){return this.validationTarget.length>0},hasState(){return!this.isDisabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages(){return this.genInternalMessages(this.errorMessages)},internalMessages(){return this.genInternalMessages(this.messages)},internalSuccessMessages(){return this.genInternalMessages(this.successMessages)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("input",t)}},isDisabled(){var t;return null!==(t=this.disabled)&&void 0!==t?t:!!this.form&&this.form.disabled},isInteractive(){return!this.isDisabled&&!this.isReadonly},isReadonly(){var t;return null!==(t=this.readonly)&&void 0!==t?t:!!this.form&&this.form.readonly},shouldValidate(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState(){if(!this.isDisabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages&&this.successMessages.length>0?this.internalSuccessMessages:this.messages&&this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler(t,e){(0,o.bD)(t,e)||this.validate()},deep:!0},internalValue(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused(t){t||this.isDisabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting(){setTimeout((()=>{this.hasInput=!1,this.hasFocused=!1,this.isResetting=!1,this.validate()}),0)},hasError(t){this.shouldValidate&&this.$emit("update:error",t)},value(t){this.lazyValue=t}},beforeMount(){this.validate()},created(){this.form&&this.form.register(this)},beforeDestroy(){this.form&&this.form.unregister(this)},methods:{genInternalMessages(t){return t?Array.isArray(t)?t:[t]:[]},reset(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:null},resetValidation(){this.isResetting=!0},validate(t=!1,e){const n=[];e=e||this.internalValue,t&&(this.hasInput=this.hasFocused=!0);for(let i=0;i<this.rules.length;i++){const t=this.rules[i],r="function"===typeof t?t(e):t;!1===r||"string"===typeof r?n.push(r||""):"boolean"!==typeof r&&(0,a.yA)(`Rules should return a string or boolean, received '${typeof r}' instead`,this)}return this.errorBucket=n,this.valid=0===n.length,this.valid}}})},4427:function(t,e,n){n.d(e,{I:function(){return S},A:function(){return C}});var i={};n.r(i),n.d(i,{easeInCubic:function(){return l},easeInOutCubic:function(){return h},easeInOutQuad:function(){return c},easeInOutQuart:function(){return p},easeInOutQuint:function(){return v},easeInQuad:function(){return o},easeInQuart:function(){return d},easeInQuint:function(){return m},easeOutCubic:function(){return u},easeOutQuad:function(){return a},easeOutQuart:function(){return f},easeOutQuint:function(){return g},linear:function(){return s}});var r=n(3761);const s=t=>t,o=t=>t**2,a=t=>t*(2-t),c=t=>t<.5?2*t**2:(4-2*t)*t-1,l=t=>t**3,u=t=>--t**3+1,h=t=>t<.5?4*t**3:(t-1)*(2*t-2)*(2*t-2)+1,d=t=>t**4,f=t=>1- --t**4,p=t=>t<.5?8*t*t*t*t:1-8*--t*t*t*t,m=t=>t**5,g=t=>1+--t**5,v=t=>t<.5?16*t**5:1+16*--t**5;function y(t){if("number"===typeof t)return t;let e=_(t);if(!e)throw"string"===typeof t?new Error(`Target element "${t}" not found.`):new TypeError(`Target must be a Number/Selector/HTMLElement/VueComponent, received ${w(t)} instead.`);let n=0;while(e)n+=e.offsetTop,e=e.offsetParent;return n}function b(t){const e=_(t);if(e)return e;throw"string"===typeof t?new Error(`Container element "${t}" not found.`):new TypeError(`Container must be a Selector/HTMLElement/VueComponent, received ${w(t)} instead.`)}function w(t){return null==t?t:t.constructor.name}function _(t){return"string"===typeof t?document.querySelector(t):t&&t._isVue?t.$el:t instanceof HTMLElement?t:null}function C(t,e={}){const n={container:document.scrollingElement||document.body||document.documentElement,duration:500,offset:0,easing:"easeInOutCubic",appOffset:!0,...e},r=b(n.container);if(n.appOffset&&C.framework.application){const t=r.classList.contains("v-navigation-drawer"),e=r.classList.contains("v-navigation-drawer--clipped"),{bar:i,top:s}=C.framework.application;n.offset+=i,t&&!e||(n.offset+=s)}const s=performance.now();let o;o="number"===typeof t?y(t)-n.offset:y(t)-y(r)-n.offset;const a=r.scrollTop;if(o===a)return Promise.resolve(o);const c="function"===typeof n.easing?n.easing:i[n.easing];if(!c)throw new TypeError(`Easing function "${n.easing}" not found.`);return new Promise((t=>requestAnimationFrame((function e(i){const l=i-s,u=Math.abs(n.duration?Math.min(l/n.duration,1):1);r.scrollTop=Math.floor(a+(o-a)*c(u));const h=r===document.body?document.documentElement.clientHeight:r.clientHeight,d=h+r.scrollTop>=r.scrollHeight;if(1===u||o>r.scrollTop&&d)return t(o);requestAnimationFrame(e)}))))}C.framework={},C.init=()=>{};class S extends r.k{constructor(){return super(),C}}S.property="goTo"},3761:function(t,e,n){n.d(e,{k:function(){return i}});class i{constructor(){this.framework={}}init(t,e){}}},517:function(t,e,n){n.d(e,{E8:function(){return s},VP:function(){return r},si:function(){return a},y6:function(){return o}});var i=n(6988);function r(t){return!!t&&!!t.match(/^(#|var\(--|(rgb|hsl)a?\()/)}function s(t){let e;if("number"===typeof t)e=t;else{if("string"!==typeof t)throw new TypeError(`Colors can only be numbers or strings, recieved ${null==t?t:t.constructor.name} instead`);{let n="#"===t[0]?t.substring(1):t;3===n.length&&(n=n.split("").map((t=>t+t)).join("")),6!==n.length&&(0,i.OP)(`'${t}' is not a valid rgb color`),e=parseInt(n,16)}}return e<0?((0,i.OP)(`Colors cannot be negative: '${t}'`),e=0):(e>16777215||isNaN(e))&&((0,i.OP)(`'${t}' is not a valid rgb color`),e=16777215),e}function o(t){let e=t.toString(16);return e.length<6&&(e="0".repeat(6-e.length)+e),"#"+e}function a(t){return o(s(t))}},6988:function(t,e,n){n.d(e,{OP:function(){return s},q4:function(){return a},rq:function(){return c},yA:function(){return o}});n(4114);var i=n(3971);function r(t,e,n){if(!i.A.config.silent){if(n&&(e={_isVue:!0,$parent:n,$options:e}),e){if(e.$_alreadyWarned=e.$_alreadyWarned||[],e.$_alreadyWarned.includes(t))return;e.$_alreadyWarned.push(t)}return`[Vuetify] ${t}`+(e?d(e):"")}}function s(t,e,n){const i=r(t,e,n);null!=i&&console.warn(i)}function o(t,e,n){const i=r(t,e,n);null!=i&&console.error(i)}function a(t,e,n,i){o(`[BREAKING] '${t}' has been removed, use '${e}' instead. For more information, see the upgrade guide https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0#user-content-upgrade-guide`,n,i)}function c(t,e,n){s(`[REMOVED] '${t}' has been removed. You can safely omit it.`,e,n)}const l=/(?:^|[-_])(\w)/g,u=t=>t.replace(l,(t=>t.toUpperCase())).replace(/[-_]/g,"");function h(t,e){if(t.$root===t)return"<Root>";const n="function"===typeof t&&null!=t.cid?t.options:t._isVue?t.$options||t.constructor.options:t||{};let i=n.name||n._componentTag;const r=n.__file;if(!i&&r){const t=r.match(/([^/\\]+)\.vue$/);i=t&&t[1]}return(i?`<${u(i)}>`:"<Anonymous>")+(r&&!1!==e?` at ${r}`:"")}function d(t){if(t._isVue&&t.$parent){const e=[];let n=0;while(t){if(e.length>0){const i=e[e.length-1];if(i.constructor===t.constructor){n++,t=t.$parent;continue}n>0&&(e[e.length-1]=[i,n],n=0)}e.push(t),t=t.$parent}return"\n\nfound in\n\n"+e.map(((t,e)=>`${0===e?"---\x3e ":" ".repeat(5+2*e)}${Array.isArray(t)?`${h(t[0])}... (${t[1]} recursive calls)`:h(t)}`)).join("\n")}return`\n\n(found in ${h(t)})`}},5189:function(t,e,n){function i(t){if("function"!==typeof t.getRootNode){while(t.parentNode)t=t.parentNode;return t!==document?null:document}const e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}n.d(e,{b:function(){return i}})},4152:function(t,e,n){n.d(e,{$c:function(){return A},BN:function(){return S},D9:function(){return I},Dg:function(){return p},Gn:function(){return r},HP:function(){return b},K9:function(){return k},LJ:function(){return c},P4:function(){return a},PT:function(){return _},TD:function(){return h},Zb:function(){return C},bD:function(){return l},d7:function(){return s},fF:function(){return f},fl:function(){return d},fo:function(){return E},g8:function(){return y},kW:function(){return m},no:function(){return u},qE:function(){return T},uP:function(){return v}});n(4114);var i=n(5471);function r(t,e="div",n){return i.Ay.extend({name:n||t.replace(/__/g,"-"),functional:!0,props:{tag:{type:String,default:e}},render(e,{data:n,props:i,children:r}){return n.staticClass=`${t} ${n.staticClass||""}`.trim(),e(i.tag,n,r)}})}function s(t,e,n,i=!1){const r=s=>{n(s),t.removeEventListener(e,r,i)};t.addEventListener(e,r,i)}let o=!1;try{if("undefined"!==typeof window){const t=Object.defineProperty({},"passive",{get:()=>{o=!0}});window.addEventListener("testListener",t,t),window.removeEventListener("testListener",t,t)}}catch(x){console.warn(x)}function a(t,e,n,i){t.addEventListener(e,n,!!o&&i)}function c(t,e,n){const i=e.length-1;if(i<0)return void 0===t?n:t;for(let r=0;r<i;r++){if(null==t)return n;t=t[e[r]]}return null==t||void 0===t[e[i]]?n:t[e[i]]}function l(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime())return!1;if(t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length===Object.keys(e).length&&n.every((n=>l(t[n],e[n])))}function u(t,e,n){return null!=t&&e&&"string"===typeof e?void 0!==t[e]?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),c(t,e.split("."),n)):n}function h(t,e,n){if(null==e)return void 0===t?n:t;if(t!==Object(t))return void 0===n?t:n;if("string"===typeof e)return u(t,e,n);if(Array.isArray(e))return c(t,e,n);if("function"!==typeof e)return n;const i=e(t,n);return"undefined"===typeof i?n:i}function d(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return 0;const e=+window.getComputedStyle(t).getPropertyValue("z-index");return e||d(t.parentNode)}function f(t,e){const n={};for(let i=0;i<e.length;i++){const r=e[i];"undefined"!==typeof t[r]&&(n[r]=t[r])}return n}function p(t,e="px"){return null==t||""===t?void 0:isNaN(+t)?String(t):`${Number(t)}${e}`}function m(t){return(t||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function g(t){return null!==t&&"object"===typeof t}const v=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function y(t,e){const n=t.$vuetify.icons.component;if(e.startsWith("$")){const n=`$vuetify.icons.values.${e.split("$").pop().split(".").pop()}`,i=u(t,n,e);if("string"!==typeof i)return i;e=i}return null==n?e:{component:n,props:{icon:e}}}function b(t){return Object.keys(t)}const w=/-(\w)/g,_=t=>t.replace(w,((t,e)=>e?e.toUpperCase():""));function C(t){return t.charAt(0).toUpperCase()+t.slice(1)}function S(t){return null!=t?Array.isArray(t)?t:[t]:[]}function E(t,e,n){return t.$slots.hasOwnProperty(e)&&t.$scopedSlots.hasOwnProperty(e)&&t.$scopedSlots[e].name?n?"v-slot":"scoped":t.$slots.hasOwnProperty(e)?"normal":t.$scopedSlots.hasOwnProperty(e)?"scoped":void 0}function A(t,e="default",n,i=!1){const r=m(e);return t.$scopedSlots.hasOwnProperty(e)?t.$scopedSlots[e](n instanceof Function?n():n):t.$scopedSlots.hasOwnProperty(r)?t.$scopedSlots[r](n instanceof Function?n():n):!t.$slots.hasOwnProperty(e)||n&&!i?!t.$slots.hasOwnProperty(r)||n&&!i?void 0:t.$slots[r]:t.$slots[e]}function T(t,e=0,n=1){return Math.max(e,Math.min(n,t))}function I(t={},e={}){for(const n in e){const i=t[n],r=e[n];g(i)&&g(r)?t[n]=I(i,r):t[n]=r}return t}function k(t){if(t.composedPath)return t.composedPath();const e=[];let n=t.target;while(n){if(e.push(n),"HTML"===n.tagName)return e.push(document),e.push(window),e;n=n.parentElement}return e}},8041:function(t,e,n){n.d(e,{Ay:function(){return o}});var i=n(4152);const r={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function s(t){const e={};for(const n of t.split(r.styleList)){let[t,s]=n.split(r.styleProp);t=t.trim(),t&&("string"===typeof s&&(s=s.trim()),e[(0,i.PT)(t)]=s)}return e}function o(){const t={};let e,n=arguments.length;while(n--)for(e of Object.keys(arguments[n]))switch(e){case"class":case"directives":arguments[n][e]&&(t[e]=c(t[e],arguments[n][e]));break;case"style":arguments[n][e]&&(t[e]=a(t[e],arguments[n][e]));break;case"staticClass":if(!arguments[n][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[n][e].trim();break;case"on":case"nativeOn":arguments[n][e]&&(t[e]=l(t[e],arguments[n][e]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][e])break;t[e]||(t[e]={}),t[e]={...arguments[n][e],...t[e]};break;default:t[e]||(t[e]=arguments[n][e])}return t}function a(t,e){return t?e?(t=(0,i.BN)("string"===typeof t?s(t):t),t.concat("string"===typeof e?s(e):e)):t:e}function c(t,e){return e?t&&t?(0,i.BN)(t).concat(e):e:t}function l(...t){if(!t[0])return t[1];if(!t[1])return t[0];const e={};for(let n=2;n--;){const i=t[n];for(const t in i)i[t]&&(e[t]?e[t]=[].concat(i[t],e[t]):e[t]=i[t])}return e}},5803:function(t,e,n){n.d(e,{A:function(){return r}});var i=n(5471);function r(...t){return i.Ay.extend({mixins:t})}},125:function(){},158:function(){},8245:function(){},173:function(t,e,n){function i(t,e){for(var n in e)t[n]=e[n];return t}n.d(e,{Ay:function(){return Ce}});var r=/[!'()*]/g,s=function(t){return"%"+t.charCodeAt(0).toString(16)},o=/%2C/g,a=function(t){return encodeURIComponent(t).replace(r,s).replace(o,",")};function c(t){try{return decodeURIComponent(t)}catch(e){0}return t}function l(t,e,n){void 0===e&&(e={});var i,r=n||h;try{i=r(t||"")}catch(a){i={}}for(var s in e){var o=e[s];i[s]=Array.isArray(o)?o.map(u):u(o)}return i}var u=function(t){return null==t||"object"===typeof t?t:String(t)};function h(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),i=c(n.shift()),r=n.length>0?c(n.join("=")):null;void 0===e[i]?e[i]=r:Array.isArray(e[i])?e[i].push(r):e[i]=[e[i],r]})),e):e}function d(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return a(e);if(Array.isArray(n)){var i=[];return n.forEach((function(t){void 0!==t&&(null===t?i.push(a(e)):i.push(a(e)+"="+a(t)))})),i.join("&")}return a(e)+"="+a(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var f=/\/?$/;function p(t,e,n,i){var r=i&&i.options.stringifyQuery,s=e.query||{};try{s=m(s)}catch(a){}var o={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:s,params:e.params||{},fullPath:y(e,r),matched:t?v(t):[]};return n&&(o.redirectedFrom=y(n,r)),Object.freeze(o)}function m(t){if(Array.isArray(t))return t.map(m);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=m(t[n]);return e}return t}var g=p(null,{path:"/"});function v(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function y(t,e){var n=t.path,i=t.query;void 0===i&&(i={});var r=t.hash;void 0===r&&(r="");var s=e||d;return(n||"/")+s(i)+r}function b(t,e,n){return e===g?t===e:!!e&&(t.path&&e.path?t.path.replace(f,"")===e.path.replace(f,"")&&(n||t.hash===e.hash&&w(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&w(t.query,e.query)&&w(t.params,e.params))))}function w(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),i=Object.keys(e).sort();return n.length===i.length&&n.every((function(n,r){var s=t[n],o=i[r];if(o!==n)return!1;var a=e[n];return null==s||null==a?s===a:"object"===typeof s&&"object"===typeof a?w(s,a):String(s)===String(a)}))}function _(t,e){return 0===t.path.replace(f,"/").indexOf(e.path.replace(f,"/"))&&(!e.hash||t.hash===e.hash)&&C(t.query,e.query)}function C(t,e){for(var n in e)if(!(n in t))return!1;return!0}function S(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var i in n.instances){var r=n.instances[i],s=n.enteredCbs[i];if(r&&s){delete n.enteredCbs[i];for(var o=0;o<s.length;o++)r._isBeingDestroyed||s[o](r)}}}}var E={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,r=e.children,s=e.parent,o=e.data;o.routerView=!0;var a=s.$createElement,c=n.name,l=s.$route,u=s._routerViewCache||(s._routerViewCache={}),h=0,d=!1;while(s&&s._routerRoot!==s){var f=s.$vnode?s.$vnode.data:{};f.routerView&&h++,f.keepAlive&&s._directInactive&&s._inactive&&(d=!0),s=s.$parent}if(o.routerViewDepth=h,d){var p=u[c],m=p&&p.component;return m?(p.configProps&&A(m,o,p.route,p.configProps),a(m,o,r)):a()}var g=l.matched[h],v=g&&g.components[c];if(!g||!v)return u[c]=null,a();u[c]={component:v},o.registerRouteInstance=function(t,e){var n=g.instances[c];(e&&n!==t||!e&&n===t)&&(g.instances[c]=e)},(o.hook||(o.hook={})).prepatch=function(t,e){g.instances[c]=e.componentInstance},o.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==g.instances[c]&&(g.instances[c]=t.componentInstance),S(l)};var y=g.props&&g.props[c];return y&&(i(u[c],{route:l,configProps:y}),A(v,o,l,y)),a(v,o,r)}};function A(t,e,n,r){var s=e.props=T(n,r);if(s){s=e.props=i({},s);var o=e.attrs=e.attrs||{};for(var a in s)t.props&&a in t.props||(o[a]=s[a],delete s[a])}}function T(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function I(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var s=t.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];".."===a?r.pop():"."!==a&&r.push(a)}return""!==r[0]&&r.unshift(""),r.join("/")}function k(t){var e="",n="",i=t.indexOf("#");i>=0&&(e=t.slice(i),t=t.slice(0,i));var r=t.indexOf("?");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{path:t,query:n,hash:e}}function x(t){return t.replace(/\/(?:\s*\/)+/g,"/")}var O=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},L=Y,D=M,$=V,N=j,P=Q,R=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function M(t,e){var n,i=[],r=0,s=0,o="",a=e&&e.delimiter||"/";while(null!=(n=R.exec(t))){var c=n[0],l=n[1],u=n.index;if(o+=t.slice(s,u),s=u+c.length,l)o+=l[1];else{var h=t[s],d=n[2],f=n[3],p=n[4],m=n[5],g=n[6],v=n[7];o&&(i.push(o),o="");var y=null!=d&&null!=h&&h!==d,b="+"===g||"*"===g,w="?"===g||"*"===g,_=n[2]||a,C=p||m;i.push({name:f||r++,prefix:d||"",delimiter:_,optional:w,repeat:b,partial:y,asterisk:!!v,pattern:C?z(C):v?".*":"[^"+U(_)+"]+?"})}}return s<t.length&&(o+=t.substr(s)),o&&i.push(o),i}function V(t,e){return j(M(t,e),e)}function F(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function B(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function j(t,e){for(var n=new Array(t.length),i=0;i<t.length;i++)"object"===typeof t[i]&&(n[i]=new RegExp("^(?:"+t[i].pattern+")$",q(e)));return function(e,i){for(var r="",s=e||{},o=i||{},a=o.pretty?F:encodeURIComponent,c=0;c<t.length;c++){var l=t[c];if("string"!==typeof l){var u,h=s[l.name];if(null==h){if(l.optional){l.partial&&(r+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(O(h)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(u=a(h[d]),!n[c].test(u))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(u)+"`");r+=(0===d?l.prefix:l.delimiter)+u}}else{if(u=l.asterisk?B(h):a(h),!n[c].test(u))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+u+'"');r+=l.prefix+u}}else r+=l}return r}}function U(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function z(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function H(t,e){return t.keys=e,t}function q(t){return t&&t.sensitive?"":"i"}function W(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var i=0;i<n.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return H(t,e)}function K(t,e,n){for(var i=[],r=0;r<t.length;r++)i.push(Y(t[r],e,n).source);var s=new RegExp("(?:"+i.join("|")+")",q(n));return H(s,e)}function G(t,e,n){return Q(M(t,n),e,n)}function Q(t,e,n){O(e)||(n=e||n,e=[]),n=n||{};for(var i=n.strict,r=!1!==n.end,s="",o=0;o<t.length;o++){var a=t[o];if("string"===typeof a)s+=U(a);else{var c=U(a.prefix),l="(?:"+a.pattern+")";e.push(a),a.repeat&&(l+="(?:"+c+l+")*"),l=a.optional?a.partial?c+"("+l+")?":"(?:"+c+"("+l+"))?":c+"("+l+")",s+=l}}var u=U(n.delimiter||"/"),h=s.slice(-u.length)===u;return i||(s=(h?s.slice(0,-u.length):s)+"(?:"+u+"(?=$))?"),s+=r?"$":i&&h?"":"(?="+u+"|$)",H(new RegExp("^"+s,q(n)),e)}function Y(t,e,n){return O(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?W(t,e):O(t)?K(t,e,n):G(t,e,n)}L.parse=D,L.compile=$,L.tokensToFunction=N,L.tokensToRegExp=P;var X=Object.create(null);function J(t,e,n){e=e||{};try{var i=X[t]||(X[t]=L.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),i(e,{pretty:!0})}catch(r){return""}finally{delete e[0]}}function Z(t,e,n,r){var s="string"===typeof t?{path:t}:t;if(s._normalized)return s;if(s.name){s=i({},t);var o=s.params;return o&&"object"===typeof o&&(s.params=i({},o)),s}if(!s.path&&s.params&&e){s=i({},s),s._normalized=!0;var a=i(i({},e.params),s.params);if(e.name)s.name=e.name,s.params=a;else if(e.matched.length){var c=e.matched[e.matched.length-1].path;s.path=J(c,a,"path "+e.path)}else 0;return s}var u=k(s.path||""),h=e&&e.path||"/",d=u.path?I(u.path,h,n||s.append):h,f=l(u.query,s.query,r&&r.options.parseQuery),p=s.hash||u.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:d,query:f,hash:p}}var tt,et=[String,Object],nt=[String,Array],it=function(){},rt={name:"RouterLink",props:{to:{type:et,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:nt,default:"click"}},render:function(t){var e=this,n=this.$router,r=this.$route,s=n.resolve(this.to,r,this.append),o=s.location,a=s.route,c=s.href,l={},u=n.options.linkActiveClass,h=n.options.linkExactActiveClass,d=null==u?"router-link-active":u,f=null==h?"router-link-exact-active":h,m=null==this.activeClass?d:this.activeClass,g=null==this.exactActiveClass?f:this.exactActiveClass,v=a.redirectedFrom?p(null,Z(a.redirectedFrom),null,n):a;l[g]=b(r,v,this.exactPath),l[m]=this.exact||this.exactPath?l[g]:_(r,v);var y=l[g]?this.ariaCurrentValue:null,w=function(t){st(t)&&(e.replace?n.replace(o,it):n.push(o,it))},C={click:st};Array.isArray(this.event)?this.event.forEach((function(t){C[t]=w})):C[this.event]=w;var S={class:l},E=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:w,isActive:l[m],isExactActive:l[g]});if(E){if(1===E.length)return E[0];if(E.length>1||!E.length)return 0===E.length?t():t("span",{},E)}if("a"===this.tag)S.on=C,S.attrs={href:c,"aria-current":y};else{var A=ot(this.$slots.default);if(A){A.isStatic=!1;var T=A.data=i({},A.data);for(var I in T.on=T.on||{},T.on){var k=T.on[I];I in C&&(T.on[I]=Array.isArray(k)?k:[k])}for(var x in C)x in T.on?T.on[x].push(C[x]):T.on[x]=w;var O=A.data.attrs=i({},A.data.attrs);O.href=c,O["aria-current"]=y}else S.on=C}return t(this.tag,S,this.$slots.default)}};function st(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ot(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=ot(e.children)))return e}}function at(t){if(!at.installed||tt!==t){at.installed=!0,tt=t;var e=function(t){return void 0!==t},n=function(t,n){var i=t.$options._parentVnode;e(i)&&e(i=i.data)&&e(i=i.registerRouteInstance)&&i(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",E),t.component("RouterLink",rt);var i=t.config.optionMergeStrategies;i.beforeRouteEnter=i.beforeRouteLeave=i.beforeRouteUpdate=i.created}}var ct="undefined"!==typeof window;function lt(t,e,n,i,r){var s=e||[],o=n||Object.create(null),a=i||Object.create(null);t.forEach((function(t){ut(s,o,a,t,r)}));for(var c=0,l=s.length;c<l;c++)"*"===s[c]&&(s.push(s.splice(c,1)[0]),l--,c--);return{pathList:s,pathMap:o,nameMap:a}}function ut(t,e,n,i,r,s){var o=i.path,a=i.name;var c=i.pathToRegexpOptions||{},l=dt(o,r,c.strict);"boolean"===typeof i.caseSensitive&&(c.sensitive=i.caseSensitive);var u={path:l,regex:ht(l,c),components:i.components||{default:i.component},alias:i.alias?"string"===typeof i.alias?[i.alias]:i.alias:[],instances:{},enteredCbs:{},name:a,parent:r,matchAs:s,redirect:i.redirect,beforeEnter:i.beforeEnter,meta:i.meta||{},props:null==i.props?{}:i.components?i.props:{default:i.props}};if(i.children&&i.children.forEach((function(i){var r=s?x(s+"/"+i.path):void 0;ut(t,e,n,i,u,r)})),e[u.path]||(t.push(u.path),e[u.path]=u),void 0!==i.alias)for(var h=Array.isArray(i.alias)?i.alias:[i.alias],d=0;d<h.length;++d){var f=h[d];0;var p={path:f,children:i.children};ut(t,e,n,p,r,u.path||"/")}a&&(n[a]||(n[a]=u))}function ht(t,e){var n=L(t,[],e);return n}function dt(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:x(e.path+"/"+t)}function ft(t,e){var n=lt(t),i=n.pathList,r=n.pathMap,s=n.nameMap;function o(t){lt(t,i,r,s)}function a(t,e){var n="object"!==typeof t?s[t]:void 0;lt([e||t],i,r,s,n),n&&n.alias.length&&lt(n.alias.map((function(t){return{path:t,children:[e]}})),i,r,s,n)}function c(){return i.map((function(t){return r[t]}))}function l(t,n,o){var a=Z(t,n,!1,e),c=a.name;if(c){var l=s[c];if(!l)return d(null,a);var u=l.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&u.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=J(l.path,a.params,'named route "'+c+'"'),d(l,a,o)}if(a.path){a.params={};for(var f=0;f<i.length;f++){var p=i[f],m=r[p];if(pt(m.regex,a.path,a.params))return d(m,a,o)}}return d(null,a)}function u(t,n){var i=t.redirect,r="function"===typeof i?i(p(t,n,null,e)):i;if("string"===typeof r&&(r={path:r}),!r||"object"!==typeof r)return d(null,n);var o=r,a=o.name,c=o.path,u=n.query,h=n.hash,f=n.params;if(u=o.hasOwnProperty("query")?o.query:u,h=o.hasOwnProperty("hash")?o.hash:h,f=o.hasOwnProperty("params")?o.params:f,a){s[a];return l({_normalized:!0,name:a,query:u,hash:h,params:f},void 0,n)}if(c){var m=mt(c,t),g=J(m,f,'redirect route with path "'+m+'"');return l({_normalized:!0,path:g,query:u,hash:h},void 0,n)}return d(null,n)}function h(t,e,n){var i=J(n,e.params,'aliased route with path "'+n+'"'),r=l({_normalized:!0,path:i});if(r){var s=r.matched,o=s[s.length-1];return e.params=r.params,d(o,e)}return d(null,e)}function d(t,n,i){return t&&t.redirect?u(t,i||n):t&&t.matchAs?h(t,n,t.matchAs):p(t,n,i,e)}return{match:l,addRoute:a,getRoutes:c,addRoutes:o}}function pt(t,e,n){var i=e.match(t);if(!i)return!1;if(!n)return!0;for(var r=1,s=i.length;r<s;++r){var o=t.keys[r-1];o&&(n[o.name||"pathMatch"]="string"===typeof i[r]?c(i[r]):i[r])}return!0}function mt(t,e){return I(t,e.parent?e.parent.path:"/",!0)}var gt=ct&&window.performance&&window.performance.now?window.performance:Date;function vt(){return gt.now().toFixed(3)}var yt=vt();function bt(){return yt}function wt(t){return yt=t}var _t=Object.create(null);function Ct(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=i({},window.history.state);return n.key=bt(),window.history.replaceState(n,"",e),window.addEventListener("popstate",At),function(){window.removeEventListener("popstate",At)}}function St(t,e,n,i){if(t.app){var r=t.options.scrollBehavior;r&&t.app.$nextTick((function(){var s=Tt(),o=r.call(t,e,n,i?s:null);o&&("function"===typeof o.then?o.then((function(t){$t(t,s)})).catch((function(t){0})):$t(o,s))}))}}function Et(){var t=bt();t&&(_t[t]={x:window.pageXOffset,y:window.pageYOffset})}function At(t){Et(),t.state&&t.state.key&&wt(t.state.key)}function Tt(){var t=bt();if(t)return _t[t]}function It(t,e){var n=document.documentElement,i=n.getBoundingClientRect(),r=t.getBoundingClientRect();return{x:r.left-i.left-e.x,y:r.top-i.top-e.y}}function kt(t){return Lt(t.x)||Lt(t.y)}function xt(t){return{x:Lt(t.x)?t.x:window.pageXOffset,y:Lt(t.y)?t.y:window.pageYOffset}}function Ot(t){return{x:Lt(t.x)?t.x:0,y:Lt(t.y)?t.y:0}}function Lt(t){return"number"===typeof t}var Dt=/^#\d/;function $t(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var i=Dt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(i){var r=t.offset&&"object"===typeof t.offset?t.offset:{};r=Ot(r),e=It(i,r)}else kt(t)&&(e=xt(t))}else n&&kt(t)&&(e=xt(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var Nt=ct&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Pt(t,e){Et();var n=window.history;try{if(e){var r=i({},n.state);r.key=bt(),n.replaceState(r,"",t)}else n.pushState({key:wt(vt())},"",t)}catch(s){window.location[e?"replace":"assign"](t)}}function Rt(t){Pt(t,!0)}var Mt={redirected:2,aborted:4,cancelled:8,duplicated:16};function Vt(t,e){return Ut(t,e,Mt.redirected,'Redirected when going from "'+t.fullPath+'" to "'+Ht(e)+'" via a navigation guard.')}function Ft(t,e){var n=Ut(t,e,Mt.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function Bt(t,e){return Ut(t,e,Mt.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function jt(t,e){return Ut(t,e,Mt.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function Ut(t,e,n,i){var r=new Error(i);return r._isRouter=!0,r.from=t,r.to=e,r.type=n,r}var zt=["params","query","hash"];function Ht(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return zt.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function qt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Wt(t,e){return qt(t)&&t._isRouter&&(null==e||t.type===e)}function Kt(t,e,n){var i=function(r){r>=t.length?n():t[r]?e(t[r],(function(){i(r+1)})):i(r+1)};i(0)}function Gt(t){return function(e,n,i){var r=!1,s=0,o=null;Qt(t,(function(t,e,n,a){if("function"===typeof t&&void 0===t.cid){r=!0,s++;var c,l=Zt((function(e){Jt(e)&&(e=e.default),t.resolved="function"===typeof e?e:tt.extend(e),n.components[a]=e,s--,s<=0&&i()})),u=Zt((function(t){var e="Failed to resolve async component "+a+": "+t;o||(o=qt(t)?t:new Error(e),i(o))}));try{c=t(l,u)}catch(d){u(d)}if(c)if("function"===typeof c.then)c.then(l,u);else{var h=c.component;h&&"function"===typeof h.then&&h.then(l,u)}}})),r||i()}}function Qt(t,e){return Yt(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function Yt(t){return Array.prototype.concat.apply([],t)}var Xt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Jt(t){return t.__esModule||Xt&&"Module"===t[Symbol.toStringTag]}function Zt(t){var e=!1;return function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];if(!e)return e=!0,t.apply(this,n)}}var te=function(t,e){this.router=t,this.base=ee(e),this.current=g,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function ee(t){if(!t)if(ct){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ne(t,e){var n,i=Math.max(t.length,e.length);for(n=0;n<i;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function ie(t,e,n,i){var r=Qt(t,(function(t,i,r,s){var o=re(t,e);if(o)return Array.isArray(o)?o.map((function(t){return n(t,i,r,s)})):n(o,i,r,s)}));return Yt(i?r.reverse():r)}function re(t,e){return"function"!==typeof t&&(t=tt.extend(t)),t.options[e]}function se(t){return ie(t,"beforeRouteLeave",ae,!0)}function oe(t){return ie(t,"beforeRouteUpdate",ae)}function ae(t,e){if(e)return function(){return t.apply(e,arguments)}}function ce(t){return ie(t,"beforeRouteEnter",(function(t,e,n,i){return le(t,n,i)}))}function le(t,e,n){return function(i,r,s){return t(i,r,(function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),s(t)}))}}te.prototype.listen=function(t){this.cb=t},te.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},te.prototype.onError=function(t){this.errorCbs.push(t)},te.prototype.transitionTo=function(t,e,n){var i,r=this;try{i=this.router.match(t,this.current)}catch(o){throw this.errorCbs.forEach((function(t){t(o)})),o}var s=this.current;this.confirmTransition(i,(function(){r.updateRoute(i),e&&e(i),r.ensureURL(),r.router.afterHooks.forEach((function(t){t&&t(i,s)})),r.ready||(r.ready=!0,r.readyCbs.forEach((function(t){t(i)})))}),(function(t){n&&n(t),t&&!r.ready&&(Wt(t,Mt.redirected)&&s===g||(r.ready=!0,r.readyErrorCbs.forEach((function(e){e(t)}))))}))},te.prototype.confirmTransition=function(t,e,n){var i=this,r=this.current;this.pending=t;var s=function(t){!Wt(t)&&qt(t)&&(i.errorCbs.length?i.errorCbs.forEach((function(e){e(t)})):console.error(t)),n&&n(t)},o=t.matched.length-1,a=r.matched.length-1;if(b(t,r)&&o===a&&t.matched[o]===r.matched[a])return this.ensureURL(),t.hash&&St(this.router,r,t,!1),s(Ft(r,t));var c=ne(this.current.matched,t.matched),l=c.updated,u=c.deactivated,h=c.activated,d=[].concat(se(u),this.router.beforeHooks,oe(l),h.map((function(t){return t.beforeEnter})),Gt(h)),f=function(e,n){if(i.pending!==t)return s(Bt(r,t));try{e(t,r,(function(e){!1===e?(i.ensureURL(!0),s(jt(r,t))):qt(e)?(i.ensureURL(!0),s(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(s(Vt(r,t)),"object"===typeof e&&e.replace?i.replace(e):i.push(e)):n(e)}))}catch(o){s(o)}};Kt(d,f,(function(){var n=ce(h),o=n.concat(i.router.resolveHooks);Kt(o,f,(function(){if(i.pending!==t)return s(Bt(r,t));i.pending=null,e(t),i.router.app&&i.router.app.$nextTick((function(){S(t)}))}))}))},te.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},te.prototype.setupListeners=function(){},te.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=g,this.pending=null};var ue=function(t){function e(e,n){t.call(this,e,n),this._startLocation=he(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,i=Nt&&n;i&&this.listeners.push(Ct());var r=function(){var n=t.current,r=he(t.base);t.current===g&&r===t._startLocation||t.transitionTo(r,(function(t){i&&St(e,t,n,!0)}))};window.addEventListener("popstate",r),this.listeners.push((function(){window.removeEventListener("popstate",r)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var i=this,r=this,s=r.current;this.transitionTo(t,(function(t){Pt(x(i.base+t.fullPath)),St(i.router,t,s,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var i=this,r=this,s=r.current;this.transitionTo(t,(function(t){Rt(x(i.base+t.fullPath)),St(i.router,t,s,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(he(this.base)!==this.current.fullPath){var e=x(this.base+this.current.fullPath);t?Pt(e):Rt(e)}},e.prototype.getCurrentLocation=function(){return he(this.base)},e}(te);function he(t){var e=window.location.pathname,n=e.toLowerCase(),i=t.toLowerCase();return!t||n!==i&&0!==n.indexOf(x(i+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var de=function(t){function e(e,n,i){t.call(this,e,n),i&&fe(this.base)||pe()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,i=Nt&&n;i&&this.listeners.push(Ct());var r=function(){var e=t.current;pe()&&t.transitionTo(me(),(function(n){i&&St(t.router,n,e,!0),Nt||ye(n.fullPath)}))},s=Nt?"popstate":"hashchange";window.addEventListener(s,r),this.listeners.push((function(){window.removeEventListener(s,r)}))}},e.prototype.push=function(t,e,n){var i=this,r=this,s=r.current;this.transitionTo(t,(function(t){ve(t.fullPath),St(i.router,t,s,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var i=this,r=this,s=r.current;this.transitionTo(t,(function(t){ye(t.fullPath),St(i.router,t,s,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;me()!==e&&(t?ve(e):ye(e))},e.prototype.getCurrentLocation=function(){return me()},e}(te);function fe(t){var e=he(t);if(!/^\/#/.test(e))return window.location.replace(x(t+"/#"+e)),!0}function pe(){var t=me();return"/"===t.charAt(0)||(ye("/"+t),!1)}function me(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function ge(t){var e=window.location.href,n=e.indexOf("#"),i=n>=0?e.slice(0,n):e;return i+"#"+t}function ve(t){Nt?Pt(ge(t)):window.location.hash=t}function ye(t){Nt?Rt(ge(t)):window.location.replace(ge(t))}var be=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var i=this;this.transitionTo(t,(function(t){i.stack=i.stack.slice(0,i.index+1).concat(t),i.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var i=this;this.transitionTo(t,(function(t){i.stack=i.stack.slice(0,i.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var i=this.stack[n];this.confirmTransition(i,(function(){var t=e.current;e.index=n,e.updateRoute(i),e.router.afterHooks.forEach((function(e){e&&e(i,t)}))}),(function(t){Wt(t,Mt.duplicated)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(te),we=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=ft(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Nt&&!1!==t.fallback,this.fallback&&(e="hash"),ct||(e="abstract"),this.mode=e,e){case"history":this.history=new ue(this,t.base);break;case"hash":this.history=new de(this,t.base,this.fallback);break;case"abstract":this.history=new be(this,t.base);break;default:0}},_e={currentRoute:{configurable:!0}};we.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},_e.currentRoute.get=function(){return this.history&&this.history.current},we.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var n=this.history;if(n instanceof ue||n instanceof de){var i=function(t){var i=n.current,r=e.options.scrollBehavior,s=Nt&&r;s&&"fullPath"in t&&St(e,t,i,!1)},r=function(t){n.setupListeners(),i(t)};n.transitionTo(n.getCurrentLocation(),r,r)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},we.prototype.beforeEach=function(t){return Se(this.beforeHooks,t)},we.prototype.beforeResolve=function(t){return Se(this.resolveHooks,t)},we.prototype.afterEach=function(t){return Se(this.afterHooks,t)},we.prototype.onReady=function(t,e){this.history.onReady(t,e)},we.prototype.onError=function(t){this.history.onError(t)},we.prototype.push=function(t,e,n){var i=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){i.history.push(t,e,n)}));this.history.push(t,e,n)},we.prototype.replace=function(t,e,n){var i=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){i.history.replace(t,e,n)}));this.history.replace(t,e,n)},we.prototype.go=function(t){this.history.go(t)},we.prototype.back=function(){this.go(-1)},we.prototype.forward=function(){this.go(1)},we.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},we.prototype.resolve=function(t,e,n){e=e||this.history.current;var i=Z(t,e,n,this),r=this.match(i,e),s=r.redirectedFrom||r.fullPath,o=this.history.base,a=Ee(o,s,this.mode);return{location:i,route:r,href:a,normalizedTo:i,resolved:r}},we.prototype.getRoutes=function(){return this.matcher.getRoutes()},we.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==g&&this.history.transitionTo(this.history.getCurrentLocation())},we.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==g&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(we.prototype,_e);var Ce=we;function Se(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Ee(t,e,n){var i="hash"===n?"#"+e:e;return t?x(t+"/"+i):i}we.install=at,we.version="3.6.5",we.isNavigationFailure=Wt,we.NavigationFailureType=Mt,we.START_LOCATION=g,ct&&window.Vue&&window.Vue.use(we)},5471:function(t,e,n){n.d(e,{Ay:function(){return Ji}});
/*!
 * Vue.js v2.7.16
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */
var i=Object.freeze({}),r=Array.isArray;function s(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function a(t){return!0===t}function c(t){return!1===t}function l(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function u(t){return"function"===typeof t}function h(t){return null!==t&&"object"===typeof t}var d=Object.prototype.toString;function f(t){return"[object Object]"===d.call(t)}function p(t){return"[object RegExp]"===d.call(t)}function m(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function g(t){return o(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function v(t){return null==t?"":Array.isArray(t)||f(t)&&t.toString===d?JSON.stringify(t,y,2):String(t)}function y(t,e){return e&&e.__v_isRef?e.value:e}function b(t){var e=parseFloat(t);return isNaN(e)?t:e}function w(t,e){for(var n=Object.create(null),i=t.split(","),r=0;r<i.length;r++)n[i[r]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}w("slot,component",!0);var _=w("key,ref,slot,slot-scope,is");function C(t,e){var n=t.length;if(n){if(e===t[n-1])return void(t.length=n-1);var i=t.indexOf(e);if(i>-1)return t.splice(i,1)}}var S=Object.prototype.hasOwnProperty;function E(t,e){return S.call(t,e)}function A(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var T=/-(\w)/g,I=A((function(t){return t.replace(T,(function(t,e){return e?e.toUpperCase():""}))})),k=A((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),x=/\B([A-Z])/g,O=A((function(t){return t.replace(x,"-$1").toLowerCase()}));function L(t,e){function n(n){var i=arguments.length;return i?i>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function D(t,e){return t.bind(e)}var $=Function.prototype.bind?D:L;function N(t,e){e=e||0;var n=t.length-e,i=new Array(n);while(n--)i[n]=t[n+e];return i}function P(t,e){for(var n in e)t[n]=e[n];return t}function R(t){for(var e={},n=0;n<t.length;n++)t[n]&&P(e,t[n]);return e}function M(t,e,n){}var V=function(t,e,n){return!1},F=function(t){return t};function B(t,e){if(t===e)return!0;var n=h(t),i=h(e);if(!n||!i)return!n&&!i&&String(t)===String(e);try{var r=Array.isArray(t),s=Array.isArray(e);if(r&&s)return t.length===e.length&&t.every((function(t,n){return B(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(r||s)return!1;var o=Object.keys(t),a=Object.keys(e);return o.length===a.length&&o.every((function(n){return B(t[n],e[n])}))}catch(c){return!1}}function j(t,e){for(var n=0;n<t.length;n++)if(B(t[n],e))return n;return-1}function U(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}function z(t,e){return t===e?0===t&&1/t!==1/e:t===t||e===e}var H="data-server-rendered",q=["component","directive","filter"],W=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],K={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:V,isReservedAttr:V,isUnknownElement:V,getTagNamespace:M,parsePlatformTagName:F,mustUseProp:V,async:!0,_lifecycleHooks:W},G=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function Q(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function Y(t,e,n,i){Object.defineProperty(t,e,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var X=new RegExp("[^".concat(G.source,".$_\\d]"));function J(t){if(!X.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var Z="__proto__"in{},tt="undefined"!==typeof window,et=tt&&window.navigator.userAgent.toLowerCase(),nt=et&&/msie|trident/.test(et),it=et&&et.indexOf("msie 9.0")>0,rt=et&&et.indexOf("edge/")>0;et&&et.indexOf("android");var st=et&&/iphone|ipad|ipod|ios/.test(et);et&&/chrome\/\d+/.test(et),et&&/phantomjs/.test(et);var ot,at=et&&et.match(/firefox\/(\d+)/),ct={}.watch,lt=!1;if(tt)try{var ut={};Object.defineProperty(ut,"passive",{get:function(){lt=!0}}),window.addEventListener("test-passive",null,ut)}catch(Zo){}var ht=function(){return void 0===ot&&(ot=!tt&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),ot},dt=tt&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ft(t){return"function"===typeof t&&/native code/.test(t.toString())}var pt,mt="undefined"!==typeof Symbol&&ft(Symbol)&&"undefined"!==typeof Reflect&&ft(Reflect.ownKeys);pt="undefined"!==typeof Set&&ft(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var gt=null;function vt(t){void 0===t&&(t=null),t||gt&&gt._scope.off(),gt=t,t&&t._scope.on()}var yt=function(){function t(t,e,n,i,r,s,o,a){this.tag=t,this.data=e,this.children=n,this.text=i,this.elm=r,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(t.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),t}(),bt=function(t){void 0===t&&(t="");var e=new yt;return e.text=t,e.isComment=!0,e};function wt(t){return new yt(void 0,void 0,void 0,String(t))}function _t(t){var e=new yt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}"function"===typeof SuppressedError&&SuppressedError;var Ct=0,St=[],Et=function(){for(var t=0;t<St.length;t++){var e=St[t];e.subs=e.subs.filter((function(t){return t})),e._pending=!1}St.length=0},At=function(){function t(){this._pending=!1,this.id=Ct++,this.subs=[]}return t.prototype.addSub=function(t){this.subs.push(t)},t.prototype.removeSub=function(t){this.subs[this.subs.indexOf(t)]=null,this._pending||(this._pending=!0,St.push(this))},t.prototype.depend=function(e){t.target&&t.target.addDep(this)},t.prototype.notify=function(t){var e=this.subs.filter((function(t){return t}));for(var n=0,i=e.length;n<i;n++){var r=e[n];0,r.update()}},t}();At.target=null;var Tt=[];function It(t){Tt.push(t),At.target=t}function kt(){Tt.pop(),At.target=Tt[Tt.length-1]}var xt=Array.prototype,Ot=Object.create(xt),Lt=["push","pop","shift","unshift","splice","sort","reverse"];Lt.forEach((function(t){var e=xt[t];Y(Ot,t,(function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];var r,s=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&o.observeArray(r),o.dep.notify(),s}))}));var Dt=Object.getOwnPropertyNames(Ot),$t={},Nt=!0;function Pt(t){Nt=t}var Rt={notify:M,depend:M,addSub:M,removeSub:M},Mt=function(){function t(t,e,n){if(void 0===e&&(e=!1),void 0===n&&(n=!1),this.value=t,this.shallow=e,this.mock=n,this.dep=n?Rt:new At,this.vmCount=0,Y(t,"__ob__",this),r(t)){if(!n)if(Z)t.__proto__=Ot;else for(var i=0,s=Dt.length;i<s;i++){var o=Dt[i];Y(t,o,Ot[o])}e||this.observeArray(t)}else{var a=Object.keys(t);for(i=0;i<a.length;i++){o=a[i];Ft(t,o,$t,void 0,e,n)}}}return t.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Vt(t[e],!1,this.mock)},t}();function Vt(t,e,n){return t&&E(t,"__ob__")&&t.__ob__ instanceof Mt?t.__ob__:!Nt||!n&&ht()||!r(t)&&!f(t)||!Object.isExtensible(t)||t.__v_skip||Wt(t)||t instanceof yt?void 0:new Mt(t,e,n)}function Ft(t,e,n,i,s,o,a){void 0===a&&(a=!1);var c=new At,l=Object.getOwnPropertyDescriptor(t,e);if(!l||!1!==l.configurable){var u=l&&l.get,h=l&&l.set;u&&!h||n!==$t&&2!==arguments.length||(n=t[e]);var d=s?n&&n.__ob__:Vt(n,!1,o);return Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=u?u.call(t):n;return At.target&&(c.depend(),d&&(d.dep.depend(),r(e)&&Ut(e))),Wt(e)&&!s?e.value:e},set:function(e){var i=u?u.call(t):n;if(z(i,e)){if(h)h.call(t,e);else{if(u)return;if(!s&&Wt(i)&&!Wt(e))return void(i.value=e);n=e}d=s?e&&e.__ob__:Vt(e,!1,o),c.notify()}}}),c}}function Bt(t,e,n){if(!qt(t)){var i=t.__ob__;return r(t)&&m(e)?(t.length=Math.max(t.length,e),t.splice(e,1,n),i&&!i.shallow&&i.mock&&Vt(n,!1,!0),n):e in t&&!(e in Object.prototype)?(t[e]=n,n):t._isVue||i&&i.vmCount?n:i?(Ft(i.value,e,n,void 0,i.shallow,i.mock),i.dep.notify(),n):(t[e]=n,n)}}function jt(t,e){if(r(t)&&m(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||qt(t)||E(t,e)&&(delete t[e],n&&n.dep.notify())}}function Ut(t){for(var e=void 0,n=0,i=t.length;n<i;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),r(e)&&Ut(e)}function zt(t){return Ht(t,!0),Y(t,"__v_isShallow",!0),t}function Ht(t,e){if(!qt(t)){Vt(t,e,ht());0}}function qt(t){return!(!t||!t.__v_isReadonly)}function Wt(t){return!(!t||!0!==t.__v_isRef)}function Kt(t,e,n){Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var t=e[n];if(Wt(t))return t.value;var i=t&&t.__ob__;return i&&i.dep.depend(),t},set:function(t){var i=e[n];Wt(i)&&!Wt(t)?i.value=t:e[n]=t}})}var Gt="watcher";"".concat(Gt," callback"),"".concat(Gt," getter"),"".concat(Gt," cleanup");var Qt;var Yt=function(){function t(t){void 0===t&&(t=!1),this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Qt,!t&&Qt&&(this.index=(Qt.scopes||(Qt.scopes=[])).push(this)-1)}return t.prototype.run=function(t){if(this.active){var e=Qt;try{return Qt=this,t()}finally{Qt=e}}else 0},t.prototype.on=function(){Qt=this},t.prototype.off=function(){Qt=this.parent},t.prototype.stop=function(t){if(this.active){var e=void 0,n=void 0;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].teardown();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){var i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}},t}();function Xt(t,e){void 0===e&&(e=Qt),e&&e.active&&e.effects.push(t)}function Jt(){return Qt}function Zt(t){var e=t._provided,n=t.$parent&&t.$parent._provided;return n===e?t._provided=Object.create(n):e}var te=A((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var i="!"===t.charAt(0);return t=i?t.slice(1):t,{name:t,once:n,capture:i,passive:e}}));function ee(t,e){function n(){var t=n.fns;if(!r(t))return Xe(t,null,arguments,e,"v-on handler");for(var i=t.slice(),s=0;s<i.length;s++)Xe(i[s],null,arguments,e,"v-on handler")}return n.fns=t,n}function ne(t,e,n,i,r,o){var c,l,u,h;for(c in t)l=t[c],u=e[c],h=te(c),s(l)||(s(u)?(s(l.fns)&&(l=t[c]=ee(l,o)),a(h.once)&&(l=t[c]=r(h.name,l,h.capture)),n(h.name,l,h.capture,h.passive,h.params)):l!==u&&(u.fns=l,t[c]=u));for(c in e)s(t[c])&&(h=te(c),i(h.name,e[c],h.capture))}function ie(t,e,n){var i;t instanceof yt&&(t=t.data.hook||(t.data.hook={}));var r=t[e];function c(){n.apply(this,arguments),C(i.fns,c)}s(r)?i=ee([c]):o(r.fns)&&a(r.merged)?(i=r,i.fns.push(c)):i=ee([r,c]),i.merged=!0,t[e]=i}function re(t,e,n){var i=e.options.props;if(!s(i)){var r={},a=t.attrs,c=t.props;if(o(a)||o(c))for(var l in i){var u=O(l);se(r,c,l,u,!0)||se(r,a,l,u,!1)}return r}}function se(t,e,n,i,r){if(o(e)){if(E(e,n))return t[n]=e[n],r||delete e[n],!0;if(E(e,i))return t[n]=e[i],r||delete e[i],!0}return!1}function oe(t){for(var e=0;e<t.length;e++)if(r(t[e]))return Array.prototype.concat.apply([],t);return t}function ae(t){return l(t)?[wt(t)]:r(t)?le(t):void 0}function ce(t){return o(t)&&o(t.text)&&c(t.isComment)}function le(t,e){var n,i,c,u,h=[];for(n=0;n<t.length;n++)i=t[n],s(i)||"boolean"===typeof i||(c=h.length-1,u=h[c],r(i)?i.length>0&&(i=le(i,"".concat(e||"","_").concat(n)),ce(i[0])&&ce(u)&&(h[c]=wt(u.text+i[0].text),i.shift()),h.push.apply(h,i)):l(i)?ce(u)?h[c]=wt(u.text+i):""!==i&&h.push(wt(i)):ce(i)&&ce(u)?h[c]=wt(u.text+i.text):(a(t._isVList)&&o(i.tag)&&s(i.key)&&o(e)&&(i.key="__vlist".concat(e,"_").concat(n,"__")),h.push(i)));return h}function ue(t,e){var n,i,s,a,c=null;if(r(t)||"string"===typeof t)for(c=new Array(t.length),n=0,i=t.length;n<i;n++)c[n]=e(t[n],n);else if("number"===typeof t)for(c=new Array(t),n=0;n<t;n++)c[n]=e(n+1,n);else if(h(t))if(mt&&t[Symbol.iterator]){c=[];var l=t[Symbol.iterator](),u=l.next();while(!u.done)c.push(e(u.value,c.length)),u=l.next()}else for(s=Object.keys(t),c=new Array(s.length),n=0,i=s.length;n<i;n++)a=s[n],c[n]=e(t[a],a,n);return o(c)||(c=[]),c._isVList=!0,c}function he(t,e,n,i){var r,s=this.$scopedSlots[t];s?(n=n||{},i&&(n=P(P({},i),n)),r=s(n)||(u(e)?e():e)):r=this.$slots[t]||(u(e)?e():e);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},r):r}function de(t){return Ai(this.$options,"filters",t,!0)||F}function fe(t,e){return r(t)?-1===t.indexOf(e):t!==e}function pe(t,e,n,i,r){var s=K.keyCodes[e]||n;return r&&i&&!K.keyCodes[e]?fe(r,i):s?fe(s,t):i?O(i)!==e:void 0===t}function me(t,e,n,i,s){if(n)if(h(n)){r(n)&&(n=R(n));var o=void 0,a=function(r){if("class"===r||"style"===r||_(r))o=t;else{var a=t.attrs&&t.attrs.type;o=i||K.mustUseProp(e,a,r)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=I(r),l=O(r);if(!(c in o)&&!(l in o)&&(o[r]=n[r],s)){var u=t.on||(t.on={});u["update:".concat(r)]=function(t){n[r]=t}}};for(var c in n)a(c)}else;return t}function ge(t,e){var n=this._staticTrees||(this._staticTrees=[]),i=n[t];return i&&!e||(i=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,this._c,this),ye(i,"__static__".concat(t),!1)),i}function ve(t,e,n){return ye(t,"__once__".concat(e).concat(n?"_".concat(n):""),!0),t}function ye(t,e,n){if(r(t))for(var i=0;i<t.length;i++)t[i]&&"string"!==typeof t[i]&&be(t[i],"".concat(e,"_").concat(i),n);else be(t,e,n)}function be(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function we(t,e){if(e)if(f(e)){var n=t.on=t.on?P({},t.on):{};for(var i in e){var r=n[i],s=e[i];n[i]=r?[].concat(r,s):s}}else;return t}function _e(t,e,n,i){e=e||{$stable:!n};for(var s=0;s<t.length;s++){var o=t[s];r(o)?_e(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return i&&(e.$key=i),e}function Ce(t,e){for(var n=0;n<e.length;n+=2){var i=e[n];"string"===typeof i&&i&&(t[e[n]]=e[n+1])}return t}function Se(t,e){return"string"===typeof t?e+t:t}function Ee(t){t._o=ve,t._n=b,t._s=v,t._l=ue,t._t=he,t._q=B,t._i=j,t._m=ge,t._f=de,t._k=pe,t._b=me,t._v=wt,t._e=bt,t._u=_e,t._g=we,t._d=Ce,t._p=Se}function Ae(t,e){if(!t||!t.length)return{};for(var n={},i=0,r=t.length;i<r;i++){var s=t[i],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,s.context!==e&&s.fnContext!==e||!o||null==o.slot)(n.default||(n.default=[])).push(s);else{var a=o.slot,c=n[a]||(n[a]=[]);"template"===s.tag?c.push.apply(c,s.children||[]):c.push(s)}}for(var l in n)n[l].every(Te)&&delete n[l];return n}function Te(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Ie(t){return t.isComment&&t.asyncFactory}function ke(t,e,n,r){var s,o=Object.keys(n).length>0,a=e?!!e.$stable:!o,c=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(a&&r&&r!==i&&c===r.$key&&!o&&!r.$hasNormal)return r;for(var l in s={},e)e[l]&&"$"!==l[0]&&(s[l]=xe(t,n,l,e[l]))}else s={};for(var u in n)u in s||(s[u]=Oe(n,u));return e&&Object.isExtensible(e)&&(e._normalized=s),Y(s,"$stable",a),Y(s,"$key",c),Y(s,"$hasNormal",o),s}function xe(t,e,n,i){var s=function(){var e=gt;vt(t);var n=arguments.length?i.apply(null,arguments):i({});n=n&&"object"===typeof n&&!r(n)?[n]:ae(n);var s=n&&n[0];return vt(e),n&&(!s||1===n.length&&s.isComment&&!Ie(s))?void 0:n};return i.proxy&&Object.defineProperty(e,n,{get:s,enumerable:!0,configurable:!0}),s}function Oe(t,e){return function(){return t[e]}}function Le(t){var e=t.$options,n=e.setup;if(n){var i=t._setupContext=De(t);vt(t),It();var r=Xe(n,null,[t._props||zt({}),i],t,"setup");if(kt(),vt(),u(r))e.render=r;else if(h(r))if(t._setupState=r,r.__sfc){var s=t._setupProxy={};for(var o in r)"__sfc"!==o&&Kt(s,r,o)}else for(var o in r)Q(o)||Kt(t,r,o);else 0}}function De(t){return{get attrs(){if(!t._attrsProxy){var e=t._attrsProxy={};Y(e,"_v_attr_proxy",!0),$e(e,t.$attrs,i,t,"$attrs")}return t._attrsProxy},get listeners(){if(!t._listenersProxy){var e=t._listenersProxy={};$e(e,t.$listeners,i,t,"$listeners")}return t._listenersProxy},get slots(){return Pe(t)},emit:$(t.$emit,t),expose:function(e){e&&Object.keys(e).forEach((function(n){return Kt(t,e,n)}))}}}function $e(t,e,n,i,r){var s=!1;for(var o in e)o in t?e[o]!==n[o]&&(s=!0):(s=!0,Ne(t,o,i,r));for(var o in t)o in e||(s=!0,delete t[o]);return s}function Ne(t,e,n,i){Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){return n[i][e]}})}function Pe(t){return t._slotsProxy||Re(t._slotsProxy={},t.$scopedSlots),t._slotsProxy}function Re(t,e){for(var n in e)t[n]=e[n];for(var n in t)n in e||delete t[n]}function Me(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,r=n&&n.context;t.$slots=Ae(e._renderChildren,r),t.$scopedSlots=n?ke(t.$parent,n.data.scopedSlots,t.$slots):i,t._c=function(e,n,i,r){return We(t,e,n,i,r,!1)},t.$createElement=function(e,n,i,r){return We(t,e,n,i,r,!0)};var s=n&&n.data;Ft(t,"$attrs",s&&s.attrs||i,null,!0),Ft(t,"$listeners",e._parentListeners||i,null,!0)}var Ve=null;function Fe(t){Ee(t.prototype),t.prototype.$nextTick=function(t){return un(t,this)},t.prototype._render=function(){var t=this,e=t.$options,n=e.render,i=e._parentVnode;i&&t._isMounted&&(t.$scopedSlots=ke(t.$parent,i.data.scopedSlots,t.$slots,t.$scopedSlots),t._slotsProxy&&Re(t._slotsProxy,t.$scopedSlots)),t.$vnode=i;var s,o=gt,a=Ve;try{vt(t),Ve=t,s=n.call(t._renderProxy,t.$createElement)}catch(Zo){Ye(Zo,t,"render"),s=t._vnode}finally{Ve=a,vt(o)}return r(s)&&1===s.length&&(s=s[0]),s instanceof yt||(s=bt()),s.parent=i,s}}function Be(t,e){return(t.__esModule||mt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),h(t)?e.extend(t):t}function je(t,e,n,i,r){var s=bt();return s.asyncFactory=t,s.asyncMeta={data:e,context:n,children:i,tag:r},s}function Ue(t,e){if(a(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;var n=Ve;if(n&&o(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),a(t.loading)&&o(t.loadingComp))return t.loadingComp;if(n&&!o(t.owners)){var i=t.owners=[n],r=!0,c=null,l=null;n.$on("hook:destroyed",(function(){return C(i,n)}));var u=function(t){for(var e=0,n=i.length;e<n;e++)i[e].$forceUpdate();t&&(i.length=0,null!==c&&(clearTimeout(c),c=null),null!==l&&(clearTimeout(l),l=null))},d=U((function(n){t.resolved=Be(n,e),r?i.length=0:u(!0)})),f=U((function(e){o(t.errorComp)&&(t.error=!0,u(!0))})),p=t(d,f);return h(p)&&(g(p)?s(t.resolved)&&p.then(d,f):g(p.component)&&(p.component.then(d,f),o(p.error)&&(t.errorComp=Be(p.error,e)),o(p.loading)&&(t.loadingComp=Be(p.loading,e),0===p.delay?t.loading=!0:c=setTimeout((function(){c=null,s(t.resolved)&&s(t.error)&&(t.loading=!0,u(!1))}),p.delay||200)),o(p.timeout)&&(l=setTimeout((function(){l=null,s(t.resolved)&&f(null)}),p.timeout)))),r=!1,t.loading?t.loadingComp:t.resolved}}function ze(t){if(r(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||Ie(n)))return n}}var He=1,qe=2;function We(t,e,n,i,s,o){return(r(n)||l(n))&&(s=i,i=n,n=void 0),a(o)&&(s=qe),Ke(t,e,n,i,s)}function Ke(t,e,n,i,s){if(o(n)&&o(n.__ob__))return bt();if(o(n)&&o(n.is)&&(e=n.is),!e)return bt();var a,c;if(r(i)&&u(i[0])&&(n=n||{},n.scopedSlots={default:i[0]},i.length=0),s===qe?i=ae(i):s===He&&(i=oe(i)),"string"===typeof e){var l=void 0;c=t.$vnode&&t.$vnode.ns||K.getTagNamespace(e),a=K.isReservedTag(e)?new yt(K.parsePlatformTagName(e),n,i,void 0,void 0,t):n&&n.pre||!o(l=Ai(t.$options,"components",e))?new yt(e,n,i,void 0,void 0,t):ci(l,n,t,i,e)}else a=ci(e,n,t,i);return r(a)?a:o(a)?(o(c)&&Ge(a,c),o(n)&&Qe(n),a):bt()}function Ge(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),o(t.children))for(var i=0,r=t.children.length;i<r;i++){var c=t.children[i];o(c.tag)&&(s(c.ns)||a(n)&&"svg"!==c.tag)&&Ge(c,e,n)}}function Qe(t){h(t.style)&&mn(t.style),h(t.class)&&mn(t.class)}function Ye(t,e,n){It();try{if(e){var i=e;while(i=i.$parent){var r=i.$options.errorCaptured;if(r)for(var s=0;s<r.length;s++)try{var o=!1===r[s].call(i,t,e,n);if(o)return}catch(Zo){Je(Zo,i,"errorCaptured hook")}}}Je(t,e,n)}finally{kt()}}function Xe(t,e,n,i,r){var s;try{s=n?t.apply(e,n):t.call(e),s&&!s._isVue&&g(s)&&!s._handled&&(s.catch((function(t){return Ye(t,i,r+" (Promise/async)")})),s._handled=!0)}catch(Zo){Ye(Zo,i,r)}return s}function Je(t,e,n){if(K.errorHandler)try{return K.errorHandler.call(null,t,e,n)}catch(Zo){Zo!==t&&Ze(Zo,null,"config.errorHandler")}Ze(t,e,n)}function Ze(t,e,n){if(!tt||"undefined"===typeof console)throw t;console.error(t)}var tn,en=!1,nn=[],rn=!1;function sn(){rn=!1;var t=nn.slice(0);nn.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&ft(Promise)){var on=Promise.resolve();tn=function(){on.then(sn),st&&setTimeout(M)},en=!0}else if(nt||"undefined"===typeof MutationObserver||!ft(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())tn="undefined"!==typeof setImmediate&&ft(setImmediate)?function(){setImmediate(sn)}:function(){setTimeout(sn,0)};else{var an=1,cn=new MutationObserver(sn),ln=document.createTextNode(String(an));cn.observe(ln,{characterData:!0}),tn=function(){an=(an+1)%2,ln.data=String(an)},en=!0}function un(t,e){var n;if(nn.push((function(){if(t)try{t.call(e)}catch(Zo){Ye(Zo,e,"nextTick")}else n&&n(e)})),rn||(rn=!0,tn()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}function hn(t){return function(e,n){if(void 0===n&&(n=gt),n)return dn(n,t,e)}}function dn(t,e,n){var i=t.$options;i[e]=vi(i[e],n)}hn("beforeMount"),hn("mounted"),hn("beforeUpdate"),hn("updated"),hn("beforeDestroy"),hn("destroyed"),hn("activated"),hn("deactivated"),hn("serverPrefetch"),hn("renderTracked"),hn("renderTriggered"),hn("errorCaptured");var fn="2.7.16";var pn=new pt;function mn(t){return gn(t,pn),pn.clear(),t}function gn(t,e){var n,i,s=r(t);if(!(!s&&!h(t)||t.__v_skip||Object.isFrozen(t)||t instanceof yt)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(s){n=t.length;while(n--)gn(t[n],e)}else if(Wt(t))gn(t.value,e);else{i=Object.keys(t),n=i.length;while(n--)gn(t[i[n]],e)}}}var vn,yn=0,bn=function(){function t(t,e,n,i,r){Xt(this,Qt&&!Qt._vm?Qt:t?t._scope:void 0),(this.vm=t)&&r&&(t._watcher=this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++yn,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new pt,this.newDepIds=new pt,this.expression="",u(e)?this.getter=e:(this.getter=J(e),this.getter||(this.getter=M)),this.value=this.lazy?void 0:this.get()}return t.prototype.get=function(){var t;It(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(Zo){if(!this.user)throw Zo;Ye(Zo,e,'getter for watcher "'.concat(this.expression,'"'))}finally{this.deep&&mn(t),kt(),this.cleanupDeps()}return t},t.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},t.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},t.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Xn(this)},t.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||h(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'.concat(this.expression,'"');Xe(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},t.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},t.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},t.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&C(this.vm._scope.effects,this),this.active){var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},t}();function wn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&En(t,e)}function _n(t,e){vn.$on(t,e)}function Cn(t,e){vn.$off(t,e)}function Sn(t,e){var n=vn;return function i(){var r=e.apply(null,arguments);null!==r&&n.$off(t,i)}}function En(t,e,n){vn=t,ne(e,n||{},_n,Cn,Sn,t),vn=void 0}function An(t){var e=/^hook:/;t.prototype.$on=function(t,n){var i=this;if(r(t))for(var s=0,o=t.length;s<o;s++)i.$on(t[s],n);else(i._events[t]||(i._events[t]=[])).push(n),e.test(t)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(t,e){var n=this;function i(){n.$off(t,i),e.apply(n,arguments)}return i.fn=e,n.$on(t,i),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(r(t)){for(var i=0,s=t.length;i<s;i++)n.$off(t[i],e);return n}var o,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var c=a.length;while(c--)if(o=a[c],o===e||o.fn===e){a.splice(c,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?N(n):n;for(var i=N(arguments,1),r='event handler for "'.concat(t,'"'),s=0,o=n.length;s<o;s++)Xe(n[s],e,i,e,r)}return e}}var Tn=null;function In(t){var e=Tn;return Tn=t,function(){Tn=e}}function kn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._provided=n?n._provided:Object.create(null),t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function xn(t){t.prototype._update=function(t,e){var n=this,i=n.$el,r=n._vnode,s=In(n);n._vnode=t,n.$el=r?n.__patch__(r,t):n.__patch__(n.$el,t,e,!1),s(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n);var o=n;while(o&&o.$vnode&&o.$parent&&o.$vnode===o.$parent._vnode)o.$parent.$el=o.$el,o=o.$parent},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Pn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||C(e.$children,t),t._scope.stop(),t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Pn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function On(t,e,n){var i;t.$el=e,t.$options.render||(t.$options.render=bt),Pn(t,"beforeMount"),i=function(){t._update(t._render(),n)};var r={before:function(){t._isMounted&&!t._isDestroyed&&Pn(t,"beforeUpdate")}};new bn(t,i,M,r,!0),n=!1;var s=t._preWatchers;if(s)for(var o=0;o<s.length;o++)s[o].run();return null==t.$vnode&&(t._isMounted=!0,Pn(t,"mounted")),t}function Ln(t,e,n,r,s){var o=r.data.scopedSlots,a=t.$scopedSlots,c=!!(o&&!o.$stable||a!==i&&!a.$stable||o&&t.$scopedSlots.$key!==o.$key||!o&&t.$scopedSlots.$key),l=!!(s||t.$options._renderChildren||c),u=t.$vnode;t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=s;var h=r.data.attrs||i;t._attrsProxy&&$e(t._attrsProxy,h,u.data&&u.data.attrs||i,t,"$attrs")&&(l=!0),t.$attrs=h,n=n||i;var d=t.$options._parentListeners;if(t._listenersProxy&&$e(t._listenersProxy,n,d||i,t,"$listeners"),t.$listeners=t.$options._parentListeners=n,En(t,n,d),e&&t.$options.props){Pt(!1);for(var f=t._props,p=t.$options._propKeys||[],m=0;m<p.length;m++){var g=p[m],v=t.$options.props;f[g]=Ti(g,v,e,t)}Pt(!0),t.$options.propsData=e}l&&(t.$slots=Ae(s,r.context),t.$forceUpdate())}function Dn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function $n(t,e){if(e){if(t._directInactive=!1,Dn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)$n(t.$children[n]);Pn(t,"activated")}}function Nn(t,e){if((!e||(t._directInactive=!0,!Dn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Nn(t.$children[n]);Pn(t,"deactivated")}}function Pn(t,e,n,i){void 0===i&&(i=!0),It();var r=gt,s=Jt();i&&vt(t);var o=t.$options[e],a="".concat(e," hook");if(o)for(var c=0,l=o.length;c<l;c++)Xe(o[c],t,n||null,t,a);t._hasHookEvent&&t.$emit("hook:"+e),i&&(vt(r),s&&s.on()),kt()}var Rn=[],Mn=[],Vn={},Fn=!1,Bn=!1,jn=0;function Un(){jn=Rn.length=Mn.length=0,Vn={},Fn=Bn=!1}var zn=0,Hn=Date.now;if(tt&&!nt){var qn=window.performance;qn&&"function"===typeof qn.now&&Hn()>document.createEvent("Event").timeStamp&&(Hn=function(){return qn.now()})}var Wn=function(t,e){if(t.post){if(!e.post)return 1}else if(e.post)return-1;return t.id-e.id};function Kn(){var t,e;for(zn=Hn(),Bn=!0,Rn.sort(Wn),jn=0;jn<Rn.length;jn++)t=Rn[jn],t.before&&t.before(),e=t.id,Vn[e]=null,t.run();var n=Mn.slice(),i=Rn.slice();Un(),Yn(n),Gn(i),Et(),dt&&K.devtools&&dt.emit("flush")}function Gn(t){var e=t.length;while(e--){var n=t[e],i=n.vm;i&&i._watcher===n&&i._isMounted&&!i._isDestroyed&&Pn(i,"updated")}}function Qn(t){t._inactive=!1,Mn.push(t)}function Yn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,$n(t[e],!0)}function Xn(t){var e=t.id;if(null==Vn[e]&&(t!==At.target||!t.noRecurse)){if(Vn[e]=!0,Bn){var n=Rn.length-1;while(n>jn&&Rn[n].id>t.id)n--;Rn.splice(n+1,0,t)}else Rn.push(t);Fn||(Fn=!0,un(Kn))}}function Jn(t){var e=t.$options.provide;if(e){var n=u(e)?e.call(t):e;if(!h(n))return;for(var i=Zt(t),r=mt?Reflect.ownKeys(n):Object.keys(n),s=0;s<r.length;s++){var o=r[s];Object.defineProperty(i,o,Object.getOwnPropertyDescriptor(n,o))}}}function Zn(t){var e=ti(t.$options.inject,t);e&&(Pt(!1),Object.keys(e).forEach((function(n){Ft(t,n,e[n])})),Pt(!0))}function ti(t,e){if(t){for(var n=Object.create(null),i=mt?Reflect.ownKeys(t):Object.keys(t),r=0;r<i.length;r++){var s=i[r];if("__ob__"!==s){var o=t[s].from;if(o in e._provided)n[s]=e._provided[o];else if("default"in t[s]){var a=t[s].default;n[s]=u(a)?a.call(e):a}else 0}}return n}}function ei(t,e,n,s,o){var c,l=this,u=o.options;E(s,"_uid")?(c=Object.create(s),c._original=s):(c=s,s=s._original);var h=a(u._compiled),d=!h;this.data=t,this.props=e,this.children=n,this.parent=s,this.listeners=t.on||i,this.injections=ti(u.inject,s),this.slots=function(){return l.$slots||ke(s,t.scopedSlots,l.$slots=Ae(n,s)),l.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return ke(s,t.scopedSlots,this.slots())}}),h&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=ke(s,t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,i){var o=We(c,t,e,n,i,d);return o&&!r(o)&&(o.fnScopeId=u._scopeId,o.fnContext=s),o}:this._c=function(t,e,n,i){return We(c,t,e,n,i,d)}}function ni(t,e,n,s,a){var c=t.options,l={},u=c.props;if(o(u))for(var h in u)l[h]=Ti(h,u,e||i);else o(n.attrs)&&ri(l,n.attrs),o(n.props)&&ri(l,n.props);var d=new ei(n,l,a,s,t),f=c.render.call(null,d._c,d);if(f instanceof yt)return ii(f,n,d.parent,c,d);if(r(f)){for(var p=ae(f)||[],m=new Array(p.length),g=0;g<p.length;g++)m[g]=ii(p[g],n,d.parent,c,d);return m}}function ii(t,e,n,i,r){var s=_t(t);return s.fnContext=n,s.fnOptions=i,e.slot&&((s.data||(s.data={})).slot=e.slot),s}function ri(t,e){for(var n in e)t[I(n)]=e[n]}function si(t){return t.name||t.__name||t._componentTag}Ee(ei.prototype);var oi={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;oi.prepatch(n,n)}else{var i=t.componentInstance=li(t,Tn);i.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,i=e.componentInstance=t.componentInstance;Ln(i,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Pn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Qn(n):$n(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Nn(e,!0):e.$destroy())}},ai=Object.keys(oi);function ci(t,e,n,i,r){if(!s(t)){var c=n.$options._base;if(h(t)&&(t=c.extend(t)),"function"===typeof t){var l;if(s(t.cid)&&(l=t,t=Ue(l,c),void 0===t))return je(l,e,n,i,r);e=e||{},Yi(t),o(e.model)&&di(t.options,e);var u=re(e,t,r);if(a(t.options.functional))return ni(t,u,e,n,i);var d=e.on;if(e.on=e.nativeOn,a(t.options.abstract)){var f=e.slot;e={},f&&(e.slot=f)}ui(e);var p=si(t.options)||r,m=new yt("vue-component-".concat(t.cid).concat(p?"-".concat(p):""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:u,listeners:d,tag:r,children:i},l);return m}}}function li(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},i=t.data.inlineTemplate;return o(i)&&(n.render=i.render,n.staticRenderFns=i.staticRenderFns),new t.componentOptions.Ctor(n)}function ui(t){for(var e=t.hook||(t.hook={}),n=0;n<ai.length;n++){var i=ai[n],r=e[i],s=oi[i];r===s||r&&r._merged||(e[i]=r?hi(s,r):s)}}function hi(t,e){var n=function(n,i){t(n,i),e(n,i)};return n._merged=!0,n}function di(t,e){var n=t.model&&t.model.prop||"value",i=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var s=e.on||(e.on={}),a=s[i],c=e.model.callback;o(a)?(r(a)?-1===a.indexOf(c):a!==c)&&(s[i]=[c].concat(a)):s[i]=c}var fi=M,pi=K.optionMergeStrategies;function mi(t,e,n){if(void 0===n&&(n=!0),!e)return t;for(var i,r,s,o=mt?Reflect.ownKeys(e):Object.keys(e),a=0;a<o.length;a++)i=o[a],"__ob__"!==i&&(r=t[i],s=e[i],n&&E(t,i)?r!==s&&f(r)&&f(s)&&mi(r,s):Bt(t,i,s));return t}function gi(t,e,n){return n?function(){var i=u(e)?e.call(n,n):e,r=u(t)?t.call(n,n):t;return i?mi(i,r):r}:e?t?function(){return mi(u(e)?e.call(this,this):e,u(t)?t.call(this,this):t)}:e:t}function vi(t,e){var n=e?t?t.concat(e):r(e)?e:[e]:t;return n?yi(n):n}function yi(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function bi(t,e,n,i){var r=Object.create(t||null);return e?P(r,e):r}pi.data=function(t,e,n){return n?gi(t,e,n):e&&"function"!==typeof e?t:gi(t,e)},W.forEach((function(t){pi[t]=vi})),q.forEach((function(t){pi[t+"s"]=bi})),pi.watch=function(t,e,n,i){if(t===ct&&(t=void 0),e===ct&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var s={};for(var o in P(s,t),e){var a=s[o],c=e[o];a&&!r(a)&&(a=[a]),s[o]=a?a.concat(c):r(c)?c:[c]}return s},pi.props=pi.methods=pi.inject=pi.computed=function(t,e,n,i){if(!t)return e;var r=Object.create(null);return P(r,t),e&&P(r,e),r},pi.provide=function(t,e){return t?function(){var n=Object.create(null);return mi(n,u(t)?t.call(this):t),e&&mi(n,u(e)?e.call(this):e,!1),n}:e};var wi=function(t,e){return void 0===e?t:e};function _i(t,e){var n=t.props;if(n){var i,s,o,a={};if(r(n)){i=n.length;while(i--)s=n[i],"string"===typeof s&&(o=I(s),a[o]={type:null})}else if(f(n))for(var c in n)s=n[c],o=I(c),a[o]=f(s)?s:{type:s};else 0;t.props=a}}function Ci(t,e){var n=t.inject;if(n){var i=t.inject={};if(r(n))for(var s=0;s<n.length;s++)i[n[s]]={from:n[s]};else if(f(n))for(var o in n){var a=n[o];i[o]=f(a)?P({from:o},a):{from:a}}else 0}}function Si(t){var e=t.directives;if(e)for(var n in e){var i=e[n];u(i)&&(e[n]={bind:i,update:i})}}function Ei(t,e,n){if(u(e)&&(e=e.options),_i(e,n),Ci(e,n),Si(e),!e._base&&(e.extends&&(t=Ei(t,e.extends,n)),e.mixins))for(var i=0,r=e.mixins.length;i<r;i++)t=Ei(t,e.mixins[i],n);var s,o={};for(s in t)a(s);for(s in e)E(t,s)||a(s);function a(i){var r=pi[i]||wi;o[i]=r(t[i],e[i],n,i)}return o}function Ai(t,e,n,i){if("string"===typeof n){var r=t[e];if(E(r,n))return r[n];var s=I(n);if(E(r,s))return r[s];var o=k(s);if(E(r,o))return r[o];var a=r[n]||r[s]||r[o];return a}}function Ti(t,e,n,i){var r=e[t],s=!E(n,t),o=n[t],a=Li(Boolean,r.type);if(a>-1)if(s&&!E(r,"default"))o=!1;else if(""===o||o===O(t)){var c=Li(String,r.type);(c<0||a<c)&&(o=!0)}if(void 0===o){o=Ii(i,r,t);var l=Nt;Pt(!0),Vt(o),Pt(l)}return o}function Ii(t,e,n){if(E(e,"default")){var i=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:u(i)&&"Function"!==xi(e.type)?i.call(t):i}}var ki=/^\s*function (\w+)/;function xi(t){var e=t&&t.toString().match(ki);return e?e[1]:""}function Oi(t,e){return xi(t)===xi(e)}function Li(t,e){if(!r(e))return Oi(e,t)?0:-1;for(var n=0,i=e.length;n<i;n++)if(Oi(e[n],t))return n;return-1}var Di={enumerable:!0,configurable:!0,get:M,set:M};function $i(t,e,n){Di.get=function(){return this[e][n]},Di.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Di)}function Ni(t){var e=t.$options;if(e.props&&Pi(t,e.props),Le(t),e.methods&&zi(t,e.methods),e.data)Ri(t);else{var n=Vt(t._data={});n&&n.vmCount++}e.computed&&Fi(t,e.computed),e.watch&&e.watch!==ct&&Hi(t,e.watch)}function Pi(t,e){var n=t.$options.propsData||{},i=t._props=zt({}),r=t.$options._propKeys=[],s=!t.$parent;s||Pt(!1);var o=function(s){r.push(s);var o=Ti(s,e,n,t);Ft(i,s,o,void 0,!0),s in t||$i(t,"_props",s)};for(var a in e)o(a);Pt(!0)}function Ri(t){var e=t.$options.data;e=t._data=u(e)?Mi(e,t):e||{},f(e)||(e={});var n=Object.keys(e),i=t.$options.props,r=(t.$options.methods,n.length);while(r--){var s=n[r];0,i&&E(i,s)||Q(s)||$i(t,"_data",s)}var o=Vt(e);o&&o.vmCount++}function Mi(t,e){It();try{return t.call(e,e)}catch(Zo){return Ye(Zo,e,"data()"),{}}finally{kt()}}var Vi={lazy:!0};function Fi(t,e){var n=t._computedWatchers=Object.create(null),i=ht();for(var r in e){var s=e[r],o=u(s)?s:s.get;0,i||(n[r]=new bn(t,o||M,M,Vi)),r in t||Bi(t,r,s)}}function Bi(t,e,n){var i=!ht();u(n)?(Di.get=i?ji(e):Ui(n),Di.set=M):(Di.get=n.get?i&&!1!==n.cache?ji(e):Ui(n.get):M,Di.set=n.set||M),Object.defineProperty(t,e,Di)}function ji(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),At.target&&e.depend(),e.value}}function Ui(t){return function(){return t.call(this,this)}}function zi(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?M:$(e[n],t)}function Hi(t,e){for(var n in e){var i=e[n];if(r(i))for(var s=0;s<i.length;s++)qi(t,n,i[s]);else qi(t,n,i)}}function qi(t,e,n,i){return f(n)&&(i=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,i)}function Wi(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Bt,t.prototype.$delete=jt,t.prototype.$watch=function(t,e,n){var i=this;if(f(e))return qi(i,t,e,n);n=n||{},n.user=!0;var r=new bn(i,t,e,n);if(n.immediate){var s='callback for immediate watcher "'.concat(r.expression,'"');It(),Xe(e,i,[r.value],i,s),kt()}return function(){r.teardown()}}}var Ki=0;function Gi(t){t.prototype._init=function(t){var e=this;e._uid=Ki++,e._isVue=!0,e.__v_skip=!0,e._scope=new Yt(!0),e._scope.parent=void 0,e._scope._vm=!0,t&&t._isComponent?Qi(e,t):e.$options=Ei(Yi(e.constructor),t||{},e),e._renderProxy=e,e._self=e,kn(e),wn(e),Me(e),Pn(e,"beforeCreate",void 0,!1),Zn(e),Ni(e),Jn(e),Pn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function Qi(t,e){var n=t.$options=Object.create(t.constructor.options),i=e._parentVnode;n.parent=e.parent,n._parentVnode=i;var r=i.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Yi(t){var e=t.options;if(t.super){var n=Yi(t.super),i=t.superOptions;if(n!==i){t.superOptions=n;var r=Xi(t);r&&P(t.extendOptions,r),e=t.options=Ei(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Xi(t){var e,n=t.options,i=t.sealedOptions;for(var r in n)n[r]!==i[r]&&(e||(e={}),e[r]=n[r]);return e}function Ji(t){this._init(t)}function Zi(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=N(arguments,1);return n.unshift(this),u(t.install)?t.install.apply(t,n):u(t)&&t.apply(null,n),e.push(t),this}}function tr(t){t.mixin=function(t){return this.options=Ei(this.options,t),this}}function er(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,i=n.cid,r=t._Ctor||(t._Ctor={});if(r[i])return r[i];var s=si(t)||si(n.options);var o=function(t){this._init(t)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=e++,o.options=Ei(n.options,t),o["super"]=n,o.options.props&&nr(o),o.options.computed&&ir(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,q.forEach((function(t){o[t]=n[t]})),s&&(o.options.components[s]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=P({},o.options),r[i]=o,o}}function nr(t){var e=t.options.props;for(var n in e)$i(t.prototype,"_props",n)}function ir(t){var e=t.options.computed;for(var n in e)Bi(t.prototype,n,e[n])}function rr(t){q.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&f(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&u(n)&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function sr(t){return t&&(si(t.Ctor.options)||t.tag)}function or(t,e){return r(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!p(t)&&t.test(e)}function ar(t,e){var n=t.cache,i=t.keys,r=t._vnode,s=t.$vnode;for(var o in n){var a=n[o];if(a){var c=a.name;c&&!e(c)&&cr(n,o,i,r)}}s.componentOptions.children=void 0}function cr(t,e,n,i){var r=t[e];!r||i&&r.tag===i.tag||r.componentInstance.$destroy(),t[e]=null,C(n,e)}Gi(Ji),Wi(Ji),An(Ji),xn(Ji),Fe(Ji);var lr=[String,RegExp,Array],ur={name:"keep-alive",abstract:!0,props:{include:lr,exclude:lr,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,i=t.vnodeToCache,r=t.keyToCache;if(i){var s=i.tag,o=i.componentInstance,a=i.componentOptions;e[r]={name:sr(a),tag:s,componentInstance:o},n.push(r),this.max&&n.length>parseInt(this.max)&&cr(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)cr(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){ar(t,(function(t){return or(e,t)}))})),this.$watch("exclude",(function(e){ar(t,(function(t){return!or(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=ze(t),n=e&&e.componentOptions;if(n){var i=sr(n),r=this,s=r.include,o=r.exclude;if(s&&(!i||!or(s,i))||o&&i&&or(o,i))return e;var a=this,c=a.cache,l=a.keys,u=null==e.key?n.Ctor.cid+(n.tag?"::".concat(n.tag):""):e.key;c[u]?(e.componentInstance=c[u].componentInstance,C(l,u),l.push(u)):(this.vnodeToCache=e,this.keyToCache=u),e.data.keepAlive=!0}return e||t&&t[0]}},hr={KeepAlive:ur};function dr(t){var e={get:function(){return K}};Object.defineProperty(t,"config",e),t.util={warn:fi,extend:P,mergeOptions:Ei,defineReactive:Ft},t.set=Bt,t.delete=jt,t.nextTick=un,t.observable=function(t){return Vt(t),t},t.options=Object.create(null),q.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,P(t.options.components,hr),Zi(t),tr(t),er(t),rr(t)}dr(Ji),Object.defineProperty(Ji.prototype,"$isServer",{get:ht}),Object.defineProperty(Ji.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Ji,"FunctionalRenderContext",{value:ei}),Ji.version=fn;var fr=w("style,class"),pr=w("input,textarea,option,select,progress"),mr=function(t,e,n){return"value"===n&&pr(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},gr=w("contenteditable,draggable,spellcheck"),vr=w("events,caret,typing,plaintext-only"),yr=function(t,e){return Sr(e)||"false"===e?"false":"contenteditable"===t&&vr(e)?e:"true"},br=w("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),wr="http://www.w3.org/1999/xlink",_r=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Cr=function(t){return _r(t)?t.slice(6,t.length):""},Sr=function(t){return null==t||!1===t};function Er(t){var e=t.data,n=t,i=t;while(o(i.componentInstance))i=i.componentInstance._vnode,i&&i.data&&(e=Ar(i.data,e));while(o(n=n.parent))n&&n.data&&(e=Ar(e,n.data));return Tr(e.staticClass,e.class)}function Ar(t,e){return{staticClass:Ir(t.staticClass,e.staticClass),class:o(t.class)?[t.class,e.class]:e.class}}function Tr(t,e){return o(t)||o(e)?Ir(t,kr(e)):""}function Ir(t,e){return t?e?t+" "+e:t:e||""}function kr(t){return Array.isArray(t)?xr(t):h(t)?Or(t):"string"===typeof t?t:""}function xr(t){for(var e,n="",i=0,r=t.length;i<r;i++)o(e=kr(t[i]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Or(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Lr={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Dr=w("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),$r=w("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Nr=function(t){return Dr(t)||$r(t)};function Pr(t){return $r(t)?"svg":"math"===t?"math":void 0}var Rr=Object.create(null);function Mr(t){if(!tt)return!0;if(Nr(t))return!1;if(t=t.toLowerCase(),null!=Rr[t])return Rr[t];var e=document.createElement(t);return t.indexOf("-")>-1?Rr[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:Rr[t]=/HTMLUnknownElement/.test(e.toString())}var Vr=w("text,number,password,search,email,tel,url");function Fr(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function Br(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function jr(t,e){return document.createElementNS(Lr[t],e)}function Ur(t){return document.createTextNode(t)}function zr(t){return document.createComment(t)}function Hr(t,e,n){t.insertBefore(e,n)}function qr(t,e){t.removeChild(e)}function Wr(t,e){t.appendChild(e)}function Kr(t){return t.parentNode}function Gr(t){return t.nextSibling}function Qr(t){return t.tagName}function Yr(t,e){t.textContent=e}function Xr(t,e){t.setAttribute(e,"")}var Jr=Object.freeze({__proto__:null,createElement:Br,createElementNS:jr,createTextNode:Ur,createComment:zr,insertBefore:Hr,removeChild:qr,appendChild:Wr,parentNode:Kr,nextSibling:Gr,tagName:Qr,setTextContent:Yr,setStyleScope:Xr}),Zr={create:function(t,e){ts(e)},update:function(t,e){t.data.ref!==e.data.ref&&(ts(t,!0),ts(e))},destroy:function(t){ts(t,!0)}};function ts(t,e){var n=t.data.ref;if(o(n)){var i=t.context,s=t.componentInstance||t.elm,a=e?null:s,c=e?void 0:s;if(u(n))Xe(n,i,[a],i,"template ref function");else{var l=t.data.refInFor,h="string"===typeof n||"number"===typeof n,d=Wt(n),f=i.$refs;if(h||d)if(l){var p=h?f[n]:n.value;e?r(p)&&C(p,s):r(p)?p.includes(s)||p.push(s):h?(f[n]=[s],es(i,n,f[n])):n.value=[s]}else if(h){if(e&&f[n]!==s)return;f[n]=c,es(i,n,a)}else if(d){if(e&&n.value!==s)return;n.value=a}else 0}}}function es(t,e,n){var i=t._setupState;i&&E(i,e)&&(Wt(i[e])?i[e].value=n:i[e]=n)}var ns=new yt("",{},[]),is=["create","activate","update","remove","destroy"];function rs(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&o(t.data)===o(e.data)&&ss(t,e)||a(t.isAsyncPlaceholder)&&s(e.asyncFactory.error))}function ss(t,e){if("input"!==t.tag)return!0;var n,i=o(n=t.data)&&o(n=n.attrs)&&n.type,r=o(n=e.data)&&o(n=n.attrs)&&n.type;return i===r||Vr(i)&&Vr(r)}function os(t,e,n){var i,r,s={};for(i=e;i<=n;++i)r=t[i].key,o(r)&&(s[r]=i);return s}function as(t){var e,n,i={},c=t.modules,u=t.nodeOps;for(e=0;e<is.length;++e)for(i[is[e]]=[],n=0;n<c.length;++n)o(c[n][is[e]])&&i[is[e]].push(c[n][is[e]]);function h(t){return new yt(u.tagName(t).toLowerCase(),{},[],void 0,t)}function d(t,e){function n(){0===--n.listeners&&f(t)}return n.listeners=e,n}function f(t){var e=u.parentNode(t);o(e)&&u.removeChild(e,t)}function p(t,e,n,i,r,s,c){if(o(t.elm)&&o(s)&&(t=s[c]=_t(t)),t.isRootInsert=!r,!m(t,e,n,i)){var l=t.data,h=t.children,d=t.tag;o(d)?(t.elm=t.ns?u.createElementNS(t.ns,d):u.createElement(d,t),S(t),b(t,h,e),o(l)&&C(t,e),y(n,t.elm,i)):a(t.isComment)?(t.elm=u.createComment(t.text),y(n,t.elm,i)):(t.elm=u.createTextNode(t.text),y(n,t.elm,i))}}function m(t,e,n,i){var r=t.data;if(o(r)){var s=o(t.componentInstance)&&r.keepAlive;if(o(r=r.hook)&&o(r=r.init)&&r(t,!1),o(t.componentInstance))return g(t,e),y(n,t.elm,i),a(s)&&v(t,e,n,i),!0}}function g(t,e){o(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,_(t)?(C(t,e),S(t)):(ts(t),e.push(t))}function v(t,e,n,r){var s,a=t;while(a.componentInstance)if(a=a.componentInstance._vnode,o(s=a.data)&&o(s=s.transition)){for(s=0;s<i.activate.length;++s)i.activate[s](ns,a);e.push(a);break}y(n,t.elm,r)}function y(t,e,n){o(t)&&(o(n)?u.parentNode(n)===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function b(t,e,n){if(r(e)){0;for(var i=0;i<e.length;++i)p(e[i],n,t.elm,null,!0,e,i)}else l(t.text)&&u.appendChild(t.elm,u.createTextNode(String(t.text)))}function _(t){while(t.componentInstance)t=t.componentInstance._vnode;return o(t.tag)}function C(t,n){for(var r=0;r<i.create.length;++r)i.create[r](ns,t);e=t.data.hook,o(e)&&(o(e.create)&&e.create(ns,t),o(e.insert)&&n.push(t))}function S(t){var e;if(o(e=t.fnScopeId))u.setStyleScope(t.elm,e);else{var n=t;while(n)o(e=n.context)&&o(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e),n=n.parent}o(e=Tn)&&e!==t.context&&e!==t.fnContext&&o(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e)}function E(t,e,n,i,r,s){for(;i<=r;++i)p(n[i],s,t,e,!1,n,i)}function A(t){var e,n,r=t.data;if(o(r))for(o(e=r.hook)&&o(e=e.destroy)&&e(t),e=0;e<i.destroy.length;++e)i.destroy[e](t);if(o(e=t.children))for(n=0;n<t.children.length;++n)A(t.children[n])}function T(t,e,n){for(;e<=n;++e){var i=t[e];o(i)&&(o(i.tag)?(I(i),A(i)):f(i.elm))}}function I(t,e){if(o(e)||o(t.data)){var n,r=i.remove.length+1;for(o(e)?e.listeners+=r:e=d(t.elm,r),o(n=t.componentInstance)&&o(n=n._vnode)&&o(n.data)&&I(n,e),n=0;n<i.remove.length;++n)i.remove[n](t,e);o(n=t.data.hook)&&o(n=n.remove)?n(t,e):e()}else f(t.elm)}function k(t,e,n,i,r){var a,c,l,h,d=0,f=0,m=e.length-1,g=e[0],v=e[m],y=n.length-1,b=n[0],w=n[y],_=!r;while(d<=m&&f<=y)s(g)?g=e[++d]:s(v)?v=e[--m]:rs(g,b)?(O(g,b,i,n,f),g=e[++d],b=n[++f]):rs(v,w)?(O(v,w,i,n,y),v=e[--m],w=n[--y]):rs(g,w)?(O(g,w,i,n,y),_&&u.insertBefore(t,g.elm,u.nextSibling(v.elm)),g=e[++d],w=n[--y]):rs(v,b)?(O(v,b,i,n,f),_&&u.insertBefore(t,v.elm,g.elm),v=e[--m],b=n[++f]):(s(a)&&(a=os(e,d,m)),c=o(b.key)?a[b.key]:x(b,e,d,m),s(c)?p(b,i,t,g.elm,!1,n,f):(l=e[c],rs(l,b)?(O(l,b,i,n,f),e[c]=void 0,_&&u.insertBefore(t,l.elm,g.elm)):p(b,i,t,g.elm,!1,n,f)),b=n[++f]);d>m?(h=s(n[y+1])?null:n[y+1].elm,E(t,h,n,f,y,i)):f>y&&T(e,d,m)}function x(t,e,n,i){for(var r=n;r<i;r++){var s=e[r];if(o(s)&&rs(t,s))return r}}function O(t,e,n,r,c,l){if(t!==e){o(e.elm)&&o(r)&&(e=r[c]=_t(e));var h=e.elm=t.elm;if(a(t.isAsyncPlaceholder))o(e.asyncFactory.resolved)?$(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(t.isStatic)&&e.key===t.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=t.componentInstance;else{var d,f=e.data;o(f)&&o(d=f.hook)&&o(d=d.prepatch)&&d(t,e);var p=t.children,m=e.children;if(o(f)&&_(e)){for(d=0;d<i.update.length;++d)i.update[d](t,e);o(d=f.hook)&&o(d=d.update)&&d(t,e)}s(e.text)?o(p)&&o(m)?p!==m&&k(h,p,m,n,l):o(m)?(o(t.text)&&u.setTextContent(h,""),E(h,null,m,0,m.length-1,n)):o(p)?T(p,0,p.length-1):o(t.text)&&u.setTextContent(h,""):t.text!==e.text&&u.setTextContent(h,e.text),o(f)&&o(d=f.hook)&&o(d=d.postpatch)&&d(t,e)}}}function L(t,e,n){if(a(n)&&o(t.parent))t.parent.data.pendingInsert=e;else for(var i=0;i<e.length;++i)e[i].data.hook.insert(e[i])}var D=w("attrs,class,staticClass,staticStyle,key");function $(t,e,n,i){var r,s=e.tag,c=e.data,l=e.children;if(i=i||c&&c.pre,e.elm=t,a(e.isComment)&&o(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(o(c)&&(o(r=c.hook)&&o(r=r.init)&&r(e,!0),o(r=e.componentInstance)))return g(e,n),!0;if(o(s)){if(o(l))if(t.hasChildNodes())if(o(r=c)&&o(r=r.domProps)&&o(r=r.innerHTML)){if(r!==t.innerHTML)return!1}else{for(var u=!0,h=t.firstChild,d=0;d<l.length;d++){if(!h||!$(h,l[d],n,i)){u=!1;break}h=h.nextSibling}if(!u||h)return!1}else b(e,l,n);if(o(c)){var f=!1;for(var p in c)if(!D(p)){f=!0,C(e,n);break}!f&&c["class"]&&mn(c["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,r){if(!s(e)){var c=!1,l=[];if(s(t))c=!0,p(e,l);else{var d=o(t.nodeType);if(!d&&rs(t,e))O(t,e,l,null,null,r);else{if(d){if(1===t.nodeType&&t.hasAttribute(H)&&(t.removeAttribute(H),n=!0),a(n)&&$(t,e,l))return L(e,l,!0),t;t=h(t)}var f=t.elm,m=u.parentNode(f);if(p(e,l,f._leaveCb?null:m,u.nextSibling(f)),o(e.parent)){var g=e.parent,v=_(e);while(g){for(var y=0;y<i.destroy.length;++y)i.destroy[y](g);if(g.elm=e.elm,v){for(var b=0;b<i.create.length;++b)i.create[b](ns,g);var w=g.data.hook.insert;if(w.merged)for(var C=w.fns.slice(1),S=0;S<C.length;S++)C[S]()}else ts(g);g=g.parent}}o(m)?T([t],0,0):o(t.tag)&&A(t)}}return L(e,l,c),e.elm}o(t)&&A(t)}}var cs={create:ls,update:ls,destroy:function(t){ls(t,ns)}};function ls(t,e){(t.data.directives||e.data.directives)&&us(t,e)}function us(t,e){var n,i,r,s=t===ns,o=e===ns,a=ds(t.data.directives,t.context),c=ds(e.data.directives,e.context),l=[],u=[];for(n in c)i=a[n],r=c[n],i?(r.oldValue=i.value,r.oldArg=i.arg,ps(r,"update",e,t),r.def&&r.def.componentUpdated&&u.push(r)):(ps(r,"bind",e,t),r.def&&r.def.inserted&&l.push(r));if(l.length){var h=function(){for(var n=0;n<l.length;n++)ps(l[n],"inserted",e,t)};s?ie(e,"insert",h):h()}if(u.length&&ie(e,"postpatch",(function(){for(var n=0;n<u.length;n++)ps(u[n],"componentUpdated",e,t)})),!s)for(n in a)c[n]||ps(a[n],"unbind",t,t,o)}var hs=Object.create(null);function ds(t,e){var n,i,r=Object.create(null);if(!t)return r;for(n=0;n<t.length;n++){if(i=t[n],i.modifiers||(i.modifiers=hs),r[fs(i)]=i,e._setupState&&e._setupState.__sfc){var s=i.def||Ai(e,"_setupState","v-"+i.name);i.def="function"===typeof s?{bind:s,update:s}:s}i.def=i.def||Ai(e.$options,"directives",i.name,!0)}return r}function fs(t){return t.rawName||"".concat(t.name,".").concat(Object.keys(t.modifiers||{}).join("."))}function ps(t,e,n,i,r){var s=t.def&&t.def[e];if(s)try{s(n.elm,t,n,i,r)}catch(Zo){Ye(Zo,n.context,"directive ".concat(t.name," ").concat(e," hook"))}}var ms=[Zr,cs];function gs(t,e){var n=e.componentOptions;if((!o(n)||!1!==n.Ctor.options.inheritAttrs)&&(!s(t.data.attrs)||!s(e.data.attrs))){var i,r,c,l=e.elm,u=t.data.attrs||{},h=e.data.attrs||{};for(i in(o(h.__ob__)||a(h._v_attr_proxy))&&(h=e.data.attrs=P({},h)),h)r=h[i],c=u[i],c!==r&&vs(l,i,r,e.data.pre);for(i in(nt||rt)&&h.value!==u.value&&vs(l,"value",h.value),u)s(h[i])&&(_r(i)?l.removeAttributeNS(wr,Cr(i)):gr(i)||l.removeAttribute(i))}}function vs(t,e,n,i){i||t.tagName.indexOf("-")>-1?ys(t,e,n):br(e)?Sr(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):gr(e)?t.setAttribute(e,yr(e,n)):_r(e)?Sr(n)?t.removeAttributeNS(wr,Cr(e)):t.setAttributeNS(wr,e,n):ys(t,e,n)}function ys(t,e,n){if(Sr(n))t.removeAttribute(e);else{if(nt&&!it&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var i=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",i)};t.addEventListener("input",i),t.__ieph=!0}t.setAttribute(e,n)}}var bs={create:gs,update:gs};function ws(t,e){var n=e.elm,i=e.data,r=t.data;if(!(s(i.staticClass)&&s(i.class)&&(s(r)||s(r.staticClass)&&s(r.class)))){var a=Er(e),c=n._transitionClasses;o(c)&&(a=Ir(a,kr(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var _s,Cs={create:ws,update:ws},Ss="__r",Es="__c";function As(t){if(o(t[Ss])){var e=nt?"change":"input";t[e]=[].concat(t[Ss],t[e]||[]),delete t[Ss]}o(t[Es])&&(t.change=[].concat(t[Es],t.change||[]),delete t[Es])}function Ts(t,e,n){var i=_s;return function r(){var s=e.apply(null,arguments);null!==s&&xs(t,r,n,i)}}var Is=en&&!(at&&Number(at[1])<=53);function ks(t,e,n,i){if(Is){var r=zn,s=e;e=s._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=r||t.timeStamp<=0||t.target.ownerDocument!==document)return s.apply(this,arguments)}}_s.addEventListener(t,e,lt?{capture:n,passive:i}:n)}function xs(t,e,n,i){(i||_s).removeEventListener(t,e._wrapper||e,n)}function Os(t,e){if(!s(t.data.on)||!s(e.data.on)){var n=e.data.on||{},i=t.data.on||{};_s=e.elm||t.elm,As(n),ne(n,i,ks,xs,Ts,e.context),_s=void 0}}var Ls,Ds={create:Os,update:Os,destroy:function(t){return Os(t,ns)}};function $s(t,e){if(!s(t.data.domProps)||!s(e.data.domProps)){var n,i,r=e.elm,c=t.data.domProps||{},l=e.data.domProps||{};for(n in(o(l.__ob__)||a(l._v_attr_proxy))&&(l=e.data.domProps=P({},l)),c)n in l||(r[n]="");for(n in l){if(i=l[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),i===c[n])continue;1===r.childNodes.length&&r.removeChild(r.childNodes[0])}if("value"===n&&"PROGRESS"!==r.tagName){r._value=i;var u=s(i)?"":String(i);Ns(r,u)&&(r.value=u)}else if("innerHTML"===n&&$r(r.tagName)&&s(r.innerHTML)){Ls=Ls||document.createElement("div"),Ls.innerHTML="<svg>".concat(i,"</svg>");var h=Ls.firstChild;while(r.firstChild)r.removeChild(r.firstChild);while(h.firstChild)r.appendChild(h.firstChild)}else if(i!==c[n])try{r[n]=i}catch(Zo){}}}}function Ns(t,e){return!t.composing&&("OPTION"===t.tagName||Ps(t,e)||Rs(t,e))}function Ps(t,e){var n=!0;try{n=document.activeElement!==t}catch(Zo){}return n&&t.value!==e}function Rs(t,e){var n=t.value,i=t._vModifiers;if(o(i)){if(i.number)return b(n)!==b(e);if(i.trim)return n.trim()!==e.trim()}return n!==e}var Ms={create:$s,update:$s},Vs=A((function(t){var e={},n=/;(?![^(]*\))/g,i=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(i);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function Fs(t){var e=Bs(t.style);return t.staticStyle?P(t.staticStyle,e):e}function Bs(t){return Array.isArray(t)?R(t):"string"===typeof t?Vs(t):t}function js(t,e){var n,i={};if(e){var r=t;while(r.componentInstance)r=r.componentInstance._vnode,r&&r.data&&(n=Fs(r.data))&&P(i,n)}(n=Fs(t.data))&&P(i,n);var s=t;while(s=s.parent)s.data&&(n=Fs(s.data))&&P(i,n);return i}var Us,zs=/^--/,Hs=/\s*!important$/,qs=function(t,e,n){if(zs.test(e))t.style.setProperty(e,n);else if(Hs.test(n))t.style.setProperty(O(e),n.replace(Hs,""),"important");else{var i=Ks(e);if(Array.isArray(n))for(var r=0,s=n.length;r<s;r++)t.style[i]=n[r];else t.style[i]=n}},Ws=["Webkit","Moz","ms"],Ks=A((function(t){if(Us=Us||document.createElement("div").style,t=I(t),"filter"!==t&&t in Us)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<Ws.length;n++){var i=Ws[n]+e;if(i in Us)return i}}));function Gs(t,e){var n=e.data,i=t.data;if(!(s(n.staticStyle)&&s(n.style)&&s(i.staticStyle)&&s(i.style))){var r,a,c=e.elm,l=i.staticStyle,u=i.normalizedStyle||i.style||{},h=l||u,d=Bs(e.data.style)||{};e.data.normalizedStyle=o(d.__ob__)?P({},d):d;var f=js(e,!0);for(a in h)s(f[a])&&qs(c,a,"");for(a in f)r=f[a],qs(c,a,null==r?"":r)}}var Qs={create:Gs,update:Gs},Ys=/\s+/;function Xs(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Ys).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" ".concat(t.getAttribute("class")||""," ");n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Js(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Ys).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" ".concat(t.getAttribute("class")||""," "),i=" "+e+" ";while(n.indexOf(i)>=0)n=n.replace(i," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Zs(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&P(e,to(t.name||"v")),P(e,t),e}return"string"===typeof t?to(t):void 0}}var to=A((function(t){return{enterClass:"".concat(t,"-enter"),enterToClass:"".concat(t,"-enter-to"),enterActiveClass:"".concat(t,"-enter-active"),leaveClass:"".concat(t,"-leave"),leaveToClass:"".concat(t,"-leave-to"),leaveActiveClass:"".concat(t,"-leave-active")}})),eo=tt&&!it,no="transition",io="animation",ro="transition",so="transitionend",oo="animation",ao="animationend";eo&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(ro="WebkitTransition",so="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(oo="WebkitAnimation",ao="webkitAnimationEnd"));var co=tt?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function lo(t){co((function(){co(t)}))}function uo(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Xs(t,e))}function ho(t,e){t._transitionClasses&&C(t._transitionClasses,e),Js(t,e)}function fo(t,e,n){var i=mo(t,e),r=i.type,s=i.timeout,o=i.propCount;if(!r)return n();var a=r===no?so:ao,c=0,l=function(){t.removeEventListener(a,u),n()},u=function(e){e.target===t&&++c>=o&&l()};setTimeout((function(){c<o&&l()}),s+1),t.addEventListener(a,u)}var po=/\b(transform|all)(,|$)/;function mo(t,e){var n,i=window.getComputedStyle(t),r=(i[ro+"Delay"]||"").split(", "),s=(i[ro+"Duration"]||"").split(", "),o=go(r,s),a=(i[oo+"Delay"]||"").split(", "),c=(i[oo+"Duration"]||"").split(", "),l=go(a,c),u=0,h=0;e===no?o>0&&(n=no,u=o,h=s.length):e===io?l>0&&(n=io,u=l,h=c.length):(u=Math.max(o,l),n=u>0?o>l?no:io:null,h=n?n===no?s.length:c.length:0);var d=n===no&&po.test(i[ro+"Property"]);return{type:n,timeout:u,propCount:h,hasTransform:d}}function go(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return vo(e)+vo(t[n])})))}function vo(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function yo(t,e){var n=t.elm;o(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var i=Zs(t.data.transition);if(!s(i)&&!o(n._enterCb)&&1===n.nodeType){var r=i.css,a=i.type,c=i.enterClass,l=i.enterToClass,d=i.enterActiveClass,f=i.appearClass,p=i.appearToClass,m=i.appearActiveClass,g=i.beforeEnter,v=i.enter,y=i.afterEnter,w=i.enterCancelled,_=i.beforeAppear,C=i.appear,S=i.afterAppear,E=i.appearCancelled,A=i.duration,T=Tn,I=Tn.$vnode;while(I&&I.parent)T=I.context,I=I.parent;var k=!T._isMounted||!t.isRootInsert;if(!k||C||""===C){var x=k&&f?f:c,O=k&&m?m:d,L=k&&p?p:l,D=k&&_||g,$=k&&u(C)?C:v,N=k&&S||y,P=k&&E||w,R=b(h(A)?A.enter:A);0;var M=!1!==r&&!it,V=_o($),F=n._enterCb=U((function(){M&&(ho(n,L),ho(n,O)),F.cancelled?(M&&ho(n,x),P&&P(n)):N&&N(n),n._enterCb=null}));t.data.show||ie(t,"insert",(function(){var e=n.parentNode,i=e&&e._pending&&e._pending[t.key];i&&i.tag===t.tag&&i.elm._leaveCb&&i.elm._leaveCb(),$&&$(n,F)})),D&&D(n),M&&(uo(n,x),uo(n,O),lo((function(){ho(n,x),F.cancelled||(uo(n,L),V||(wo(R)?setTimeout(F,R):fo(n,a,F)))}))),t.data.show&&(e&&e(),$&&$(n,F)),M||V||F()}}}function bo(t,e){var n=t.elm;o(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var i=Zs(t.data.transition);if(s(i)||1!==n.nodeType)return e();if(!o(n._leaveCb)){var r=i.css,a=i.type,c=i.leaveClass,l=i.leaveToClass,u=i.leaveActiveClass,d=i.beforeLeave,f=i.leave,p=i.afterLeave,m=i.leaveCancelled,g=i.delayLeave,v=i.duration,y=!1!==r&&!it,w=_o(f),_=b(h(v)?v.leave:v);0;var C=n._leaveCb=U((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),y&&(ho(n,l),ho(n,u)),C.cancelled?(y&&ho(n,c),m&&m(n)):(e(),p&&p(n)),n._leaveCb=null}));g?g(S):S()}function S(){C.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),d&&d(n),y&&(uo(n,c),uo(n,u),lo((function(){ho(n,c),C.cancelled||(uo(n,l),w||(wo(_)?setTimeout(C,_):fo(n,a,C)))}))),f&&f(n,C),y||w||C())}}function wo(t){return"number"===typeof t&&!isNaN(t)}function _o(t){if(s(t))return!1;var e=t.fns;return o(e)?_o(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Co(t,e){!0!==e.data.show&&yo(e)}var So=tt?{create:Co,activate:Co,remove:function(t,e){!0!==t.data.show?bo(t,e):e()}}:{},Eo=[bs,Cs,Ds,Ms,Qs,So],Ao=Eo.concat(ms),To=as({nodeOps:Jr,modules:Ao});it&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&No(t,"input")}));var Io={inserted:function(t,e,n,i){"select"===n.tag?(i.elm&&!i.elm._vOptions?ie(n,"postpatch",(function(){Io.componentUpdated(t,e,n)})):ko(t,e,n.context),t._vOptions=[].map.call(t.options,Lo)):("textarea"===n.tag||Vr(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",Do),t.addEventListener("compositionend",$o),t.addEventListener("change",$o),it&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){ko(t,e,n.context);var i=t._vOptions,r=t._vOptions=[].map.call(t.options,Lo);if(r.some((function(t,e){return!B(t,i[e])}))){var s=t.multiple?e.value.some((function(t){return Oo(t,r)})):e.value!==e.oldValue&&Oo(e.value,r);s&&No(t,"change")}}}};function ko(t,e,n){xo(t,e,n),(nt||rt)&&setTimeout((function(){xo(t,e,n)}),0)}function xo(t,e,n){var i=e.value,r=t.multiple;if(!r||Array.isArray(i)){for(var s,o,a=0,c=t.options.length;a<c;a++)if(o=t.options[a],r)s=j(i,Lo(o))>-1,o.selected!==s&&(o.selected=s);else if(B(Lo(o),i))return void(t.selectedIndex!==a&&(t.selectedIndex=a));r||(t.selectedIndex=-1)}}function Oo(t,e){return e.every((function(e){return!B(e,t)}))}function Lo(t){return"_value"in t?t._value:t.value}function Do(t){t.target.composing=!0}function $o(t){t.target.composing&&(t.target.composing=!1,No(t.target,"input"))}function No(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function Po(t){return!t.componentInstance||t.data&&t.data.transition?t:Po(t.componentInstance._vnode)}var Ro={bind:function(t,e,n){var i=e.value;n=Po(n);var r=n.data&&n.data.transition,s=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;i&&r?(n.data.show=!0,yo(n,(function(){t.style.display=s}))):t.style.display=i?s:"none"},update:function(t,e,n){var i=e.value,r=e.oldValue;if(!i!==!r){n=Po(n);var s=n.data&&n.data.transition;s?(n.data.show=!0,i?yo(n,(function(){t.style.display=t.__vOriginalDisplay})):bo(n,(function(){t.style.display="none"}))):t.style.display=i?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,i,r){r||(t.style.display=t.__vOriginalDisplay)}},Mo={model:Io,show:Ro},Vo={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Fo(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?Fo(ze(e.children)):t}function Bo(t){var e={},n=t.$options;for(var i in n.propsData)e[i]=t[i];var r=n._parentListeners;for(var i in r)e[I(i)]=r[i];return e}function jo(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function Uo(t){while(t=t.parent)if(t.data.transition)return!0}function zo(t,e){return e.key===t.key&&e.tag===t.tag}var Ho=function(t){return t.tag||Ie(t)},qo=function(t){return"show"===t.name},Wo={name:"transition",props:Vo,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(Ho),n.length)){0;var i=this.mode;0;var r=n[0];if(Uo(this.$vnode))return r;var s=Fo(r);if(!s)return r;if(this._leaving)return jo(t,r);var o="__transition-".concat(this._uid,"-");s.key=null==s.key?s.isComment?o+"comment":o+s.tag:l(s.key)?0===String(s.key).indexOf(o)?s.key:o+s.key:s.key;var a=(s.data||(s.data={})).transition=Bo(this),c=this._vnode,u=Fo(c);if(s.data.directives&&s.data.directives.some(qo)&&(s.data.show=!0),u&&u.data&&!zo(s,u)&&!Ie(u)&&(!u.componentInstance||!u.componentInstance._vnode.isComment)){var h=u.data.transition=P({},a);if("out-in"===i)return this._leaving=!0,ie(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),jo(t,r);if("in-out"===i){if(Ie(s))return c;var d,f=function(){d()};ie(a,"afterEnter",f),ie(a,"enterCancelled",f),ie(h,"delayLeave",(function(t){d=t}))}}return r}}},Ko=P({tag:String,moveClass:String},Vo);delete Ko.mode;var Go={props:Ko,beforeMount:function(){var t=this,e=this._update;this._update=function(n,i){var r=In(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,r(),e.call(t,n,i)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),i=this.prevChildren=this.children,r=this.$slots.default||[],s=this.children=[],o=Bo(this),a=0;a<r.length;a++){var c=r[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))s.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o;else;}if(i){var l=[],u=[];for(a=0;a<i.length;a++){c=i[a];c.data.transition=o,c.data.pos=c.elm.getBoundingClientRect(),n[c.key]?l.push(c):u.push(c)}this.kept=t(e,null,l),this.removed=u}return t(e,null,s)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(Qo),t.forEach(Yo),t.forEach(Xo),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,i=n.style;uo(n,e),i.transform=i.WebkitTransform=i.transitionDuration="",n.addEventListener(so,n._moveCb=function t(i){i&&i.target!==n||i&&!/transform$/.test(i.propertyName)||(n.removeEventListener(so,t),n._moveCb=null,ho(n,e))})}})))},methods:{hasMove:function(t,e){if(!eo)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Js(n,t)})),Xs(n,e),n.style.display="none",this.$el.appendChild(n);var i=mo(n);return this.$el.removeChild(n),this._hasMove=i.hasTransform}}};function Qo(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Yo(t){t.data.newPos=t.elm.getBoundingClientRect()}function Xo(t){var e=t.data.pos,n=t.data.newPos,i=e.left-n.left,r=e.top-n.top;if(i||r){t.data.moved=!0;var s=t.elm.style;s.transform=s.WebkitTransform="translate(".concat(i,"px,").concat(r,"px)"),s.transitionDuration="0s"}}var Jo={Transition:Wo,TransitionGroup:Go};Ji.config.mustUseProp=mr,Ji.config.isReservedTag=Nr,Ji.config.isReservedAttr=fr,Ji.config.getTagNamespace=Pr,Ji.config.isUnknownElement=Mr,P(Ji.options.directives,Mo),P(Ji.options.components,Jo),Ji.prototype.__patch__=tt?To:M,Ji.prototype.$mount=function(t,e){return t=t&&tt?Fr(t):void 0,On(this,t,e)},tt&&setTimeout((function(){K.devtools&&dt&&dt.emit("init",Ji)}),0)},5353:function(t,e,n){
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function i(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:i});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[i].concat(t.init):i,n.call(this,t)}}function i(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}n.d(e,{aH:function(){return $},i0:function(){return R}});var r="undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{},s=r.__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(t){s&&(t._devtoolHook=s,s.emit("vuex:init",t),s.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){s.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){s.emit("vuex:action",t,e)}),{prepend:!0}))}function a(t,e){return t.filter(e)[0]}function c(t,e){if(void 0===e&&(e=[]),null===t||"object"!==typeof t)return t;var n=a(e,(function(e){return e.original===t}));if(n)return n.copy;var i=Array.isArray(t)?[]:{};return e.push({original:t,copy:i}),Object.keys(t).forEach((function(n){i[n]=c(t[n],e)})),i}function l(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function u(t){return null!==t&&"object"===typeof t}function h(t){return t&&"function"===typeof t.then}function d(t,e){return function(){return t(e)}}var f=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},p={namespaced:{configurable:!0}};p.namespaced.get=function(){return!!this._rawModule.namespaced},f.prototype.addChild=function(t,e){this._children[t]=e},f.prototype.removeChild=function(t){delete this._children[t]},f.prototype.getChild=function(t){return this._children[t]},f.prototype.hasChild=function(t){return t in this._children},f.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},f.prototype.forEachChild=function(t){l(this._children,t)},f.prototype.forEachGetter=function(t){this._rawModule.getters&&l(this._rawModule.getters,t)},f.prototype.forEachAction=function(t){this._rawModule.actions&&l(this._rawModule.actions,t)},f.prototype.forEachMutation=function(t){this._rawModule.mutations&&l(this._rawModule.mutations,t)},Object.defineProperties(f.prototype,p);var m=function(t){this.register([],t,!1)};function g(t,e,n){if(e.update(n),n.modules)for(var i in n.modules){if(!e.getChild(i))return void 0;g(t.concat(i),e.getChild(i),n.modules[i])}}m.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},m.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},m.prototype.update=function(t){g([],this.root,t)},m.prototype.register=function(t,e,n){var i=this;void 0===n&&(n=!0);var r=new f(e,n);if(0===t.length)this.root=r;else{var s=this.get(t.slice(0,-1));s.addChild(t[t.length-1],r)}e.modules&&l(e.modules,(function(e,r){i.register(t.concat(r),e,n)}))},m.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],i=e.getChild(n);i&&i.runtime&&e.removeChild(n)},m.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var v;var y=function(t){var e=this;void 0===t&&(t={}),!v&&"undefined"!==typeof window&&window.Vue&&D(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var i=t.strict;void 0===i&&(i=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new m(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new v,this._makeLocalGettersCache=Object.create(null);var r=this,s=this,a=s.dispatch,c=s.commit;this.dispatch=function(t,e){return a.call(r,t,e)},this.commit=function(t,e,n){return c.call(r,t,e,n)},this.strict=i;var l=this._modules.root.state;S(this,l,[],this._modules.root),C(this,l),n.forEach((function(t){return t(e)}));var u=void 0!==t.devtools?t.devtools:v.config.devtools;u&&o(this)},b={state:{configurable:!0}};function w(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function _(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;S(t,n,[],t._modules.root,!0),C(t,n,e)}function C(t,e,n){var i=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var r=t._wrappedGetters,s={};l(r,(function(e,n){s[n]=d(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var o=v.config.silent;v.config.silent=!0,t._vm=new v({data:{$$state:e},computed:s}),v.config.silent=o,t.strict&&x(t),i&&(n&&t._withCommit((function(){i._data.$$state=null})),v.nextTick((function(){return i.$destroy()})))}function S(t,e,n,i,r){var s=!n.length,o=t._modules.getNamespace(n);if(i.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=i),!s&&!r){var a=O(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){v.set(a,c,i.state)}))}var l=i.context=E(t,o,n);i.forEachMutation((function(e,n){var i=o+n;T(t,i,e,l)})),i.forEachAction((function(e,n){var i=e.root?n:o+n,r=e.handler||e;I(t,i,r,l)})),i.forEachGetter((function(e,n){var i=o+n;k(t,i,e,l)})),i.forEachChild((function(i,s){S(t,e,n.concat(s),i,r)}))}function E(t,e,n){var i=""===e,r={dispatch:i?t.dispatch:function(n,i,r){var s=L(n,i,r),o=s.payload,a=s.options,c=s.type;return a&&a.root||(c=e+c),t.dispatch(c,o)},commit:i?t.commit:function(n,i,r){var s=L(n,i,r),o=s.payload,a=s.options,c=s.type;a&&a.root||(c=e+c),t.commit(c,o,a)}};return Object.defineProperties(r,{getters:{get:i?function(){return t.getters}:function(){return A(t,e)}},state:{get:function(){return O(t.state,n)}}}),r}function A(t,e){if(!t._makeLocalGettersCache[e]){var n={},i=e.length;Object.keys(t.getters).forEach((function(r){if(r.slice(0,i)===e){var s=r.slice(i);Object.defineProperty(n,s,{get:function(){return t.getters[r]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function T(t,e,n,i){var r=t._mutations[e]||(t._mutations[e]=[]);r.push((function(e){n.call(t,i.state,e)}))}function I(t,e,n,i){var r=t._actions[e]||(t._actions[e]=[]);r.push((function(e){var r=n.call(t,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:t.getters,rootState:t.state},e);return h(r)||(r=Promise.resolve(r)),t._devtoolHook?r.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):r}))}function k(t,e,n,i){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(i.state,i.getters,t.state,t.getters)})}function x(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function O(t,e){return e.reduce((function(t,e){return t[e]}),t)}function L(t,e,n){return u(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function D(t){v&&t===v||(v=t,i(v))}b.state.get=function(){return this._vm._data.$$state},b.state.set=function(t){0},y.prototype.commit=function(t,e,n){var i=this,r=L(t,e,n),s=r.type,o=r.payload,a=(r.options,{type:s,payload:o}),c=this._mutations[s];c&&(this._withCommit((function(){c.forEach((function(t){t(o)}))})),this._subscribers.slice().forEach((function(t){return t(a,i.state)})))},y.prototype.dispatch=function(t,e){var n=this,i=L(t,e),r=i.type,s=i.payload,o={type:r,payload:s},a=this._actions[r];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(o,n.state)}))}catch(l){0}var c=a.length>1?Promise.all(a.map((function(t){return t(s)}))):a[0](s);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(o,n.state)}))}catch(l){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(o,n.state,t)}))}catch(l){0}e(t)}))}))}},y.prototype.subscribe=function(t,e){return w(t,this._subscribers,e)},y.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return w(n,this._actionSubscribers,e)},y.prototype.watch=function(t,e,n){var i=this;return this._watcherVM.$watch((function(){return t(i.state,i.getters)}),e,n)},y.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},y.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),S(this,this.state,t,this._modules.get(t),n.preserveState),C(this,this.state)},y.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=O(e.state,t.slice(0,-1));v.delete(n,t[t.length-1])})),_(this)},y.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},y.prototype.hotUpdate=function(t){this._modules.update(t),_(this,!0)},y.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(y.prototype,b);var $=B((function(t,e){var n={};return V(e).forEach((function(e){var i=e.key,r=e.val;n[i]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var i=j(this.$store,"mapState",t);if(!i)return;e=i.context.state,n=i.context.getters}return"function"===typeof r?r.call(this,e,n):e[r]},n[i].vuex=!0})),n})),N=B((function(t,e){var n={};return V(e).forEach((function(e){var i=e.key,r=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.commit;if(t){var s=j(this.$store,"mapMutations",t);if(!s)return;i=s.context.commit}return"function"===typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}})),n})),P=B((function(t,e){var n={};return V(e).forEach((function(e){var i=e.key,r=e.val;r=t+r,n[i]=function(){if(!t||j(this.$store,"mapGetters",t))return this.$store.getters[r]},n[i].vuex=!0})),n})),R=B((function(t,e){var n={};return V(e).forEach((function(e){var i=e.key,r=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.dispatch;if(t){var s=j(this.$store,"mapActions",t);if(!s)return;i=s.context.dispatch}return"function"===typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}})),n})),M=function(t){return{mapState:$.bind(null,t),mapGetters:P.bind(null,t),mapMutations:N.bind(null,t),mapActions:R.bind(null,t)}};function V(t){return F(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function F(t){return Array.isArray(t)||u(t)}function B(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function j(t,e,n){var i=t._modulesNamespaceMap[n];return i}function U(t){void 0===t&&(t={});var e=t.collapsed;void 0===e&&(e=!0);var n=t.filter;void 0===n&&(n=function(t,e,n){return!0});var i=t.transformer;void 0===i&&(i=function(t){return t});var r=t.mutationTransformer;void 0===r&&(r=function(t){return t});var s=t.actionFilter;void 0===s&&(s=function(t,e){return!0});var o=t.actionTransformer;void 0===o&&(o=function(t){return t});var a=t.logMutations;void 0===a&&(a=!0);var l=t.logActions;void 0===l&&(l=!0);var u=t.logger;return void 0===u&&(u=console),function(t){var h=c(t.state);"undefined"!==typeof u&&(a&&t.subscribe((function(t,s){var o=c(s);if(n(t,h,o)){var a=q(),l=r(t),d="mutation "+t.type+a;z(u,d,e),u.log("%c prev state","color: #9E9E9E; font-weight: bold",i(h)),u.log("%c mutation","color: #03A9F4; font-weight: bold",l),u.log("%c next state","color: #4CAF50; font-weight: bold",i(o)),H(u)}h=o})),l&&t.subscribeAction((function(t,n){if(s(t,n)){var i=q(),r=o(t),a="action "+t.type+i;z(u,a,e),u.log("%c action","color: #03A9F4; font-weight: bold",r),H(u)}})))}}function z(t,e,n){var i=n?t.groupCollapsed:t.group;try{i.call(t,e)}catch(r){t.log(e)}}function H(t){try{t.groupEnd()}catch(e){t.log("—— log end ——")}}function q(){var t=new Date;return" @ "+K(t.getHours(),2)+":"+K(t.getMinutes(),2)+":"+K(t.getSeconds(),2)+"."+K(t.getMilliseconds(),3)}function W(t,e){return new Array(e+1).join(t)}function K(t,e){return W("0",e-t.toString().length)+t}var G={Store:y,install:D,version:"3.6.2",mapState:$,mapMutations:N,mapGetters:P,mapActions:R,createNamespacedHelpers:M,createLogger:U};e.Ay=G},9306:function(t,e,n){var i=n(4901),r=n(6823),s=TypeError;t.exports=function(t){if(i(t))return t;throw new s(r(t)+" is not a function")}},8551:function(t,e,n){var i=n(34),r=String,s=TypeError;t.exports=function(t){if(i(t))return t;throw new s(r(t)+" is not an object")}},9617:function(t,e,n){var i=n(5397),r=n(5610),s=n(6198),o=function(t){return function(e,n,o){var a=i(e),c=s(a);if(0===c)return!t&&-1;var l,u=r(o,c);if(t&&n!==n){while(c>u)if(l=a[u++],l!==l)return!0}else for(;c>u;u++)if((t||u in a)&&a[u]===n)return t||u||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},4527:function(t,e,n){var i=n(3724),r=n(4376),s=TypeError,o=Object.getOwnPropertyDescriptor,a=i&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(r(t)&&!o(t,"length").writable)throw new s("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},2195:function(t,e,n){var i=n(9504),r=i({}.toString),s=i("".slice);t.exports=function(t){return s(r(t),8,-1)}},7740:function(t,e,n){var i=n(9297),r=n(5031),s=n(7347),o=n(4913);t.exports=function(t,e,n){for(var a=r(e),c=o.f,l=s.f,u=0;u<a.length;u++){var h=a[u];i(t,h)||n&&i(n,h)||c(t,h,l(e,h))}}},6699:function(t,e,n){var i=n(3724),r=n(4913),s=n(6980);t.exports=i?function(t,e,n){return r.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},6980:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},6840:function(t,e,n){var i=n(4901),r=n(4913),s=n(283),o=n(9433);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,l=void 0!==a.name?a.name:e;if(i(n)&&s(n,l,a),a.global)c?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(u){}c?t[e]=n:r.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},9433:function(t,e,n){var i=n(4576),r=Object.defineProperty;t.exports=function(t,e){try{r(i,t,{value:e,configurable:!0,writable:!0})}catch(n){i[t]=e}return e}},3724:function(t,e,n){var i=n(9039);t.exports=!i((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4055:function(t,e,n){var i=n(4576),r=n(34),s=i.document,o=r(s)&&r(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},6837:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},8727:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2839:function(t,e,n){var i=n(4576),r=i.navigator,s=r&&r.userAgent;t.exports=s?String(s):""},9519:function(t,e,n){var i,r,s=n(4576),o=n(2839),a=s.process,c=s.Deno,l=a&&a.versions||c&&c.version,u=l&&l.v8;u&&(i=u.split("."),r=i[0]>0&&i[0]<4?1:+(i[0]+i[1])),!r&&o&&(i=o.match(/Edge\/(\d+)/),(!i||i[1]>=74)&&(i=o.match(/Chrome\/(\d+)/),i&&(r=+i[1]))),t.exports=r},6518:function(t,e,n){var i=n(4576),r=n(7347).f,s=n(6699),o=n(6840),a=n(9433),c=n(7740),l=n(2796);t.exports=function(t,e){var n,u,h,d,f,p,m=t.target,g=t.global,v=t.stat;if(u=g?i:v?i[m]||a(m,{}):i[m]&&i[m].prototype,u)for(h in e){if(f=e[h],t.dontCallGetSet?(p=r(u,h),d=p&&p.value):d=u[h],n=l(g?h:m+(v?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(t.sham||d&&d.sham)&&s(f,"sham",!0),o(u,h,f,t)}}},9039:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},616:function(t,e,n){var i=n(9039);t.exports=!i((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},9565:function(t,e,n){var i=n(616),r=Function.prototype.call;t.exports=i?r.bind(r):function(){return r.apply(r,arguments)}},350:function(t,e,n){var i=n(3724),r=n(9297),s=Function.prototype,o=i&&Object.getOwnPropertyDescriptor,a=r(s,"name"),c=a&&"something"===function(){}.name,l=a&&(!i||i&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},9504:function(t,e,n){var i=n(616),r=Function.prototype,s=r.call,o=i&&r.bind.bind(s,s);t.exports=i?o:function(t){return function(){return s.apply(t,arguments)}}},7751:function(t,e,n){var i=n(4576),r=n(4901),s=function(t){return r(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(i[t]):i[t]&&i[t][e]}},5966:function(t,e,n){var i=n(9306),r=n(4117);t.exports=function(t,e){var n=t[e];return r(n)?void 0:i(n)}},4576:function(t,e,n){var i=function(t){return t&&t.Math===Math&&t};t.exports=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof n.g&&n.g)||i("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(t,e,n){var i=n(9504),r=n(8981),s=i({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(r(t),e)}},421:function(t){t.exports={}},5917:function(t,e,n){var i=n(3724),r=n(9039),s=n(4055);t.exports=!i&&!r((function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},7055:function(t,e,n){var i=n(9504),r=n(9039),s=n(2195),o=Object,a=i("".split);t.exports=r((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"===s(t)?a(t,""):o(t)}:o},3706:function(t,e,n){var i=n(9504),r=n(4901),s=n(7629),o=i(Function.toString);r(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},1181:function(t,e,n){var i,r,s,o=n(8622),a=n(4576),c=n(34),l=n(6699),u=n(9297),h=n(7629),d=n(6119),f=n(421),p="Object already initialized",m=a.TypeError,g=a.WeakMap,v=function(t){return s(t)?r(t):i(t,{})},y=function(t){return function(e){var n;if(!c(e)||(n=r(e)).type!==t)throw new m("Incompatible receiver, "+t+" required");return n}};if(o||h.state){var b=h.state||(h.state=new g);b.get=b.get,b.has=b.has,b.set=b.set,i=function(t,e){if(b.has(t))throw new m(p);return e.facade=t,b.set(t,e),e},r=function(t){return b.get(t)||{}},s=function(t){return b.has(t)}}else{var w=d("state");f[w]=!0,i=function(t,e){if(u(t,w))throw new m(p);return e.facade=t,l(t,w,e),e},r=function(t){return u(t,w)?t[w]:{}},s=function(t){return u(t,w)}}t.exports={set:i,get:r,has:s,enforce:v,getterFor:y}},4376:function(t,e,n){var i=n(2195);t.exports=Array.isArray||function(t){return"Array"===i(t)}},4901:function(t){var e="object"==typeof document&&document.all;t.exports="undefined"==typeof e&&void 0!==e?function(t){return"function"==typeof t||t===e}:function(t){return"function"==typeof t}},2796:function(t,e,n){var i=n(9039),r=n(4901),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n===u||n!==l&&(r(e)?i(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},l=o.NATIVE="N",u=o.POLYFILL="P";t.exports=o},4117:function(t){t.exports=function(t){return null===t||void 0===t}},34:function(t,e,n){var i=n(4901);t.exports=function(t){return"object"==typeof t?null!==t:i(t)}},6395:function(t){t.exports=!1},757:function(t,e,n){var i=n(7751),r=n(4901),s=n(1625),o=n(7040),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol");return r(e)&&s(e.prototype,a(t))}},6198:function(t,e,n){var i=n(8014);t.exports=function(t){return i(t.length)}},283:function(t,e,n){var i=n(9504),r=n(9039),s=n(4901),o=n(9297),a=n(3724),c=n(350).CONFIGURABLE,l=n(3706),u=n(1181),h=u.enforce,d=u.get,f=String,p=Object.defineProperty,m=i("".slice),g=i("".replace),v=i([].join),y=a&&!r((function(){return 8!==p((function(){}),"length",{value:8}).length})),b=String(String).split("String"),w=t.exports=function(t,e,n){"Symbol("===m(f(e),0,7)&&(e="["+g(f(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!o(t,"name")||c&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),y&&n&&o(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(r){}var i=h(t);return o(i,"source")||(i.source=v(b,"string"==typeof e?e:"")),t};Function.prototype.toString=w((function(){return s(this)&&d(this).source||l(this)}),"toString")},741:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var i=+t;return(i>0?n:e)(i)}},4913:function(t,e,n){var i=n(3724),r=n(5917),s=n(8686),o=n(8551),a=n(6969),c=TypeError,l=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";e.f=i?s?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&f in n&&!n[f]){var i=u(t,e);i&&i[f]&&(t[e]=n.value,n={configurable:d in n?n[d]:i[d],enumerable:h in n?n[h]:i[h],writable:!1})}return l(t,e,n)}:l:function(t,e,n){if(o(t),e=a(e),o(n),r)try{return l(t,e,n)}catch(i){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},7347:function(t,e,n){var i=n(3724),r=n(9565),s=n(8773),o=n(6980),a=n(5397),c=n(6969),l=n(9297),u=n(5917),h=Object.getOwnPropertyDescriptor;e.f=i?h:function(t,e){if(t=a(t),e=c(e),u)try{return h(t,e)}catch(n){}if(l(t,e))return o(!r(s.f,t,e),t[e])}},8480:function(t,e,n){var i=n(1828),r=n(8727),s=r.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,s)}},3717:function(t,e){e.f=Object.getOwnPropertySymbols},1625:function(t,e,n){var i=n(9504);t.exports=i({}.isPrototypeOf)},1828:function(t,e,n){var i=n(9504),r=n(9297),s=n(5397),o=n(9617).indexOf,a=n(421),c=i([].push);t.exports=function(t,e){var n,i=s(t),l=0,u=[];for(n in i)!r(a,n)&&r(i,n)&&c(u,n);while(e.length>l)r(i,n=e[l++])&&(~o(u,n)||c(u,n));return u}},8773:function(t,e){var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,r=i&&!n.call({1:2},1);e.f=r?function(t){var e=i(this,t);return!!e&&e.enumerable}:n},4270:function(t,e,n){var i=n(9565),r=n(4901),s=n(34),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&r(n=t.toString)&&!s(a=i(n,t)))return a;if(r(n=t.valueOf)&&!s(a=i(n,t)))return a;if("string"!==e&&r(n=t.toString)&&!s(a=i(n,t)))return a;throw new o("Can't convert object to primitive value")}},5031:function(t,e,n){var i=n(7751),r=n(9504),s=n(8480),o=n(3717),a=n(8551),c=r([].concat);t.exports=i("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},7750:function(t,e,n){var i=n(4117),r=TypeError;t.exports=function(t){if(i(t))throw new r("Can't call method on "+t);return t}},6119:function(t,e,n){var i=n(5745),r=n(3392),s=i("keys");t.exports=function(t){return s[t]||(s[t]=r(t))}},7629:function(t,e,n){var i=n(6395),r=n(4576),s=n(9433),o="__core-js_shared__",a=t.exports=r[o]||s(o,{});(a.versions||(a.versions=[])).push({version:"3.38.1",mode:i?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(t,e,n){var i=n(7629);t.exports=function(t,e){return i[t]||(i[t]=e||{})}},4495:function(t,e,n){var i=n(9519),r=n(9039),s=n(4576),o=s.String;t.exports=!!Object.getOwnPropertySymbols&&!r((function(){var t=Symbol("symbol detection");return!o(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},5610:function(t,e,n){var i=n(1291),r=Math.max,s=Math.min;t.exports=function(t,e){var n=i(t);return n<0?r(n+e,0):s(n,e)}},5397:function(t,e,n){var i=n(7055),r=n(7750);t.exports=function(t){return i(r(t))}},1291:function(t,e,n){var i=n(741);t.exports=function(t){var e=+t;return e!==e||0===e?0:i(e)}},8014:function(t,e,n){var i=n(1291),r=Math.min;t.exports=function(t){var e=i(t);return e>0?r(e,9007199254740991):0}},8981:function(t,e,n){var i=n(7750),r=Object;t.exports=function(t){return r(i(t))}},2777:function(t,e,n){var i=n(9565),r=n(34),s=n(757),o=n(5966),a=n(4270),c=n(8227),l=TypeError,u=c("toPrimitive");t.exports=function(t,e){if(!r(t)||s(t))return t;var n,c=o(t,u);if(c){if(void 0===e&&(e="default"),n=i(c,t,e),!r(n)||s(n))return n;throw new l("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},6969:function(t,e,n){var i=n(2777),r=n(757);t.exports=function(t){var e=i(t,"string");return r(e)?e:e+""}},6823:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},3392:function(t,e,n){var i=n(9504),r=0,s=Math.random(),o=i(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++r+s,36)}},7040:function(t,e,n){var i=n(4495);t.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(t,e,n){var i=n(3724),r=n(9039);t.exports=i&&r((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8622:function(t,e,n){var i=n(4576),r=n(4901),s=i.WeakMap;t.exports=r(s)&&/native code/.test(String(s))},8227:function(t,e,n){var i=n(4576),r=n(5745),s=n(9297),o=n(3392),a=n(4495),c=n(7040),l=i.Symbol,u=r("wks"),h=c?l["for"]||l:l&&l.withoutSetter||o;t.exports=function(t){return s(u,t)||(u[t]=a&&s(l,t)?l[t]:h("Symbol."+t)),u[t]}},4114:function(t,e,n){var i=n(6518),r=n(8981),s=n(6198),o=n(4527),a=n(6837),c=n(9039),l=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=l||!u();i({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=r(this),n=s(e),i=arguments.length;a(n+i);for(var c=0;c<i;c++)e[n]=arguments[c],n++;return o(e,n),n}})},9928:function(t,e,n){n.d(e,{MF:function(){return bt},j6:function(){return pt},xZ:function(){return mt},om:function(){return ft},Sx:function(){return _t},Wp:function(){return wt},KO:function(){return Ct}});var i=n(5125),r=n(3424),s=n(6743);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(C(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),m.set(e,t),e}function v(t){if(d.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));d.set(t,e)}let y={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return d.get(t);if("objectStoreNames"===e)return t.objectStoreNames||f.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return C(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function b(t){y=t(y)}function w(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(t)?function(...e){return t.apply(S(this),e),C(h.get(this))}:function(...e){return C(t.apply(S(this),e))}:function(e,...n){const i=t.call(S(this),e,...n);return f.set(i,e.sort?e.sort():[e]),C(i)}}function _(t){return"function"===typeof t?w(t):(t instanceof IDBTransaction&&v(t),o(t,l())?new Proxy(t,y):t)}function C(t){if(t instanceof IDBRequest)return g(t);if(p.has(t))return p.get(t);const e=_(t);return e!==t&&(p.set(t,e),m.set(e,t)),e}const S=t=>m.get(t);function E(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=C(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(C(o.result),t.oldVersion,t.newVersion,C(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),r&&t.addEventListener("versionchange",(t=>r(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const A=["get","getKey","getAll","getAllKeys","count"],T=["put","add","delete","clear"],I=new Map;function k(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(I.get(e))return I.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=T.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!A.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&s.done]))[0]};return I.set(e,s),s}b((t=>({...t,get:(e,n,i)=>k(e,n)||t.get(e,n,i),has:(e,n)=>!!k(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class x{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(O(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function O(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const L="@firebase/app",D="0.10.12",$=new r.Vy("@firebase/app"),N="@firebase/app-compat",P="@firebase/analytics-compat",R="@firebase/analytics",M="@firebase/app-check-compat",V="@firebase/app-check",F="@firebase/auth",B="@firebase/auth-compat",j="@firebase/database",U="@firebase/data-connect",z="@firebase/database-compat",H="@firebase/functions",q="@firebase/functions-compat",W="@firebase/installations",K="@firebase/installations-compat",G="@firebase/messaging",Q="@firebase/messaging-compat",Y="@firebase/performance",X="@firebase/performance-compat",J="@firebase/remote-config",Z="@firebase/remote-config-compat",tt="@firebase/storage",et="@firebase/storage-compat",nt="@firebase/firestore",it="@firebase/vertexai-preview",rt="@firebase/firestore-compat",st="firebase",ot="10.14.0",at="[DEFAULT]",ct={[L]:"fire-core",[N]:"fire-core-compat",[R]:"fire-analytics",[P]:"fire-analytics-compat",[V]:"fire-app-check",[M]:"fire-app-check-compat",[F]:"fire-auth",[B]:"fire-auth-compat",[j]:"fire-rtdb",[U]:"fire-data-connect",[z]:"fire-rtdb-compat",[H]:"fire-fn",[q]:"fire-fn-compat",[W]:"fire-iid",[K]:"fire-iid-compat",[G]:"fire-fcm",[Q]:"fire-fcm-compat",[Y]:"fire-perf",[X]:"fire-perf-compat",[J]:"fire-rc",[Z]:"fire-rc-compat",[tt]:"fire-gcs",[et]:"fire-gcs-compat",[nt]:"fire-fst",[rt]:"fire-fst-compat",[it]:"fire-vertex","fire-js":"fire-js",[st]:"fire-js-all"},lt=new Map,ut=new Map,ht=new Map;function dt(t,e){try{t.container.addComponent(e)}catch(n){$.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ft(t){const e=t.name;if(ht.has(e))return $.debug(`There were multiple attempts to register component ${e}.`),!1;ht.set(e,t);for(const n of lt.values())dt(n,t);for(const n of ut.values())dt(n,t);return!0}function pt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function mt(t){return void 0!==t.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gt={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},vt=new s.FA("app","Firebase",gt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw vt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bt=ot;function wt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const r=Object.assign({name:at,automaticDataCollectionEnabled:!1},e),o=r.name;if("string"!==typeof o||!o)throw vt.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw vt.create("no-options");const a=lt.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(r,a.config))return a;throw vt.create("duplicate-app",{appName:o})}const c=new i.h1(o);for(const i of ht.values())c.addComponent(i);const l=new yt(n,r,c);return lt.set(o,l),l}function _t(t=at){const e=lt.get(t);if(!e&&t===at&&(0,s.T9)())return wt();if(!e)throw vt.create("no-app",{appName:t});return e}function Ct(t,e,n){var r;let s=null!==(r=ct[t])&&void 0!==r?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void $.warn(t.join(" "))}ft(new i.uA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const St="firebase-heartbeat-database",Et=1,At="firebase-heartbeat-store";let Tt=null;function It(){return Tt||(Tt=E(St,Et,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(At)}catch(n){console.warn(n)}}}}).catch((t=>{throw vt.create("idb-open",{originalErrorMessage:t.message})}))),Tt}async function kt(t){try{const e=await It(),n=e.transaction(At),i=await n.objectStore(At).get(Ot(t));return await n.done,i}catch(e){if(e instanceof s.g)$.warn(e.message);else{const t=vt.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});$.warn(t.message)}}}async function xt(t,e){try{const n=await It(),i=n.transaction(At,"readwrite"),r=i.objectStore(At);await r.put(e,Ot(t)),await i.done}catch(n){if(n instanceof s.g)$.warn(n.message);else{const t=vt.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});$.warn(t.message)}}}function Ot(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=1024,Dt=2592e6;class $t{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Rt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t,e;try{const n=this.container.getProvider("platform-logger").getImmediate(),i=n.getPlatformInfoString(),r=Nt();if(null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some((t=>t.date===r)))return;return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=Dt})),this._storage.overwrite(this._heartbeatsCache)}catch(n){$.warn(n)}}async getHeartbeatsHeader(){var t;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=Nt(),{heartbeatsToSend:n,unsentEntries:i}=Pt(this._heartbeatsCache.heartbeats),r=(0,s.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return $.warn(e),""}}}function Nt(){const t=new Date;return t.toISOString().substring(0,10)}function Pt(t,e=Lt){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),Mt(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Mt(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Rt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await kt(this.app);return(null===t||void 0===t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return xt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return xt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Mt(t){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t){ft(new i.uA("platform-logger",(t=>new x(t)),"PRIVATE")),ft(new i.uA("heartbeat",(t=>new $t(t)),"PRIVATE")),Ct(L,D,t),Ct(L,D,"esm2017"),Ct("fire-js","")}Vt("")},5125:function(t,e,n){n.d(e,{h1:function(){return l},uA:function(){return r}});var i=n(6743);class r{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new i.cY;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),i=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[r,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(r);n===t&&s.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(i){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(i){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},3424:function(t,e,n){n.d(e,{$b:function(){return r},Vy:function(){return l}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var r;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=a[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class l{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in r))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...t),this._logHandler(this,r.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...t),this._logHandler(this,r.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,r.INFO,...t),this._logHandler(this,r.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,r.WARN,...t),this._logHandler(this,r.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...t),this._logHandler(this,r.ERROR,...t)}}},223:function(t,e,n){n.d(e,{Wp:function(){return i.Wp}});var i=n(9928),r="firebase",s="10.14.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,i.KO)(r,s,"app")},7496:function(t,e,n){n.d(e,{xI:function(){return Hi},hg:function(){return Re},x9:function(){return $e},CI:function(){return Me}});var i=n(9928),r=n(6743),s=n(3424);function o(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(5125);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new r.FA("auth","Firebase",c()),h=new s.Vy("@firebase/auth");function d(t,...e){h.logLevel<=s.$b.WARN&&h.warn(`Auth (${i.MF}): ${t}`,...e)}function f(t,...e){h.logLevel<=s.$b.ERROR&&h.error(`Auth (${i.MF}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(t,...e){throw y(t,...e)}function m(t,...e){return y(t,...e)}function g(t,e,n){const i=Object.assign(Object.assign({},l()),{[e]:n}),s=new r.FA("auth","Firebase",i);return s.create(e,{appName:t.name})}function v(t){return g(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function y(t,...e){if("string"!==typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return u.create(t,...e)}function b(t,e,...n){if(!t)throw y(e,...n)}function w(t){const e="INTERNAL ASSERTION FAILED: "+t;throw f(e),new Error(e)}function _(t,e){t||w(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function S(){return"http:"===E()||"https:"===E()}function E(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(S()||(0,r.sr)()||"connection"in navigator))||navigator.onLine}function T(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t,e){this.shortDelay=t,this.longDelay=e,_(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,r.jZ)()||(0,r.lV)()}get(){return A()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t,e){_(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},L=new I(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $(t,e,n,i,s={}){return N(t,s,(async()=>{let s={},o={};i&&("GET"===e?o=i:s={body:JSON.stringify(i)});const a=(0,r.Am)(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:c},s);return(0,r.c1)()||(l.referrerPolicy="no-referrer"),x.fetch()(R(t,t.config.apiHost,n,a),l)}))}async function N(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},O),e);try{const e=new V(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw F(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw F(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw F(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw F(t,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(t,a,o);p(t,a)}}catch(s){if(s instanceof r.g)throw s;p(t,"network-request-failed",{message:String(s)})}}async function P(t,e,n,i,r={}){const s=await $(t,e,n,i,r);return"mfaPendingCredential"in s&&p(t,"multi-factor-auth-required",{_serverResponse:s}),s}function R(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?k(t.config,r):`${t.config.apiScheme}://${r}`}function M(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class V{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(m(this.auth,"network-request-failed"))),L.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function F(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=m(t,e,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t){return void 0!==t&&void 0!==t.enterprise}class j{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return M(e.enforcementState);return null}isProviderEnabled(t){return"ENFORCE"===this.getProviderEnforcementState(t)||"AUDIT"===this.getProviderEnforcementState(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(t,e){return $(t,"GET","/v2/recaptchaConfig",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(t,e){return $(t,"POST","/v1/accounts:delete",e)}async function H(t,e){return $(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(t,e=!1){const n=(0,r.Ku)(t),i=await n.getIdToken(e),s=G(i);b(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:q(K(s.auth_time)),issuedAtTime:q(K(s.iat)),expirationTime:q(K(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function K(t){return 1e3*Number(t)}function G(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return f("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,r.u)(n);return t?JSON.parse(t):(f("Failed to decode base64 JWT payload"),null)}catch(s){return f("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function Q(t){const e=G(t);return b(e,"internal-error"),b("undefined"!==typeof e.exp,"internal-error"),b("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r.g&&X(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function X({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===t||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=q(this.lastLoginAt),this.creationTime=q(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Y(t,H(n,{idToken:i}));b(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?it(s.providerUserInfo):[],a=nt(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Z(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function et(t){const e=(0,r.Ku)(t);await tt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nt(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function it(t){return t.map((t=>{var{providerId:e}=t,n=o(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(t,e){const n=await N(t,{},(async()=>{const n=(0,r.Am)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=R(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",x.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function st(t,e){return $(t,"POST","/v2/accounts:revokeToken",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){b(t.idToken,"internal-error"),b("undefined"!==typeof t.idToken,"internal-error"),b("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):Q(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){b(0!==t.length,"internal-error");const e=Q(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return e||!this.accessToken||this.isExpired?(b(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:r}=await rt(t,e);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:r}=e,s=new ot;return n&&(b("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),i&&(b("string"===typeof i,"internal-error",{appName:t}),s.accessToken=i),r&&(b("number"===typeof r,"internal-error",{appName:t}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ot,this.toJSON())}_performRefresh(){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t,e){b("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class ct{constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,r=o(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Z(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await Y(this,this.stsTokenManager.getToken(this.auth,t));return b(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return W(this,t)}reload(){return et(this)}_assign(t){this!==t&&(b(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new ct(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await tt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,i.xZ)(this.auth.app))return Promise.reject(v(this.auth));const t=await this.getIdToken();return await Y(this,z(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,r,s,o,a,c,l;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,v=null!==(l=e.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:w,isAnonymous:_,providerData:C,stsTokenManager:S}=e;b(y&&S,t,"internal-error");const E=ot.fromJSON(this.name,S);b("string"===typeof y,t,"internal-error"),at(u,t.name),at(h,t.name),b("boolean"===typeof w,t,"internal-error"),b("boolean"===typeof _,t,"internal-error"),at(d,t.name),at(f,t.name),at(p,t.name),at(m,t.name),at(g,t.name),at(v,t.name);const A=new ct({uid:y,auth:t,email:h,emailVerified:w,displayName:u,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:v});return C&&Array.isArray(C)&&(A.providerData=C.map((t=>Object.assign({},t)))),m&&(A._redirectEventId=m),A}static async _fromIdTokenResponse(t,e,n=!1){const i=new ot;i.updateFromServerResponse(e);const r=new ct({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await tt(r),r}static async _fromGetAccountInfoResponse(t,e,n){const i=e.users[0];b(void 0!==i.localId,"internal-error");const r=void 0!==i.providerUserInfo?it(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(null===r||void 0===r?void 0:r.length),o=new ot;o.updateFromIdToken(n);const a=new ct({uid:i.localId,auth:t,stsTokenManager:o,isAnonymous:s}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Z(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(null===r||void 0===r?void 0:r.length)};return Object.assign(a,c),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=new Map;function ut(t){_(t instanceof Function,"Expected a class definition");let e=lt.get(t);return e?(_(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lt.set(t,e),e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ht.type="NONE";const dt=ht;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t,e,n){return`firebase:${t}:${e}:${n}`}class pt{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=ft(this.userKey,i.apiKey,r),this.fullPersistenceKey=ft("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ct._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new pt(ut(dt),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let r=i[0]||ut(dt);const s=ft(n,t.config.apiKey,t.name);let o=null;for(const l of e)try{const e=await l._get(s);if(e){const n=ct._fromJSON(t,e);l!==r&&(o=n),r=l;break}}catch(c){}const a=i.filter((t=>t._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==r)try{await t._remove(s)}catch(c){}}))),new pt(r,t,n)):new pt(r,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_t(e))return"Blackberry";if(Ct(e))return"Webos";if(vt(e))return"Safari";if((e.includes("chrome/")||yt(e))&&!e.includes("edge/"))return"Chrome";if(wt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function gt(t=(0,r.ZQ)()){return/firefox\//i.test(t)}function vt(t=(0,r.ZQ)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yt(t=(0,r.ZQ)()){return/crios\//i.test(t)}function bt(t=(0,r.ZQ)()){return/iemobile/i.test(t)}function wt(t=(0,r.ZQ)()){return/android/i.test(t)}function _t(t=(0,r.ZQ)()){return/blackberry/i.test(t)}function Ct(t=(0,r.ZQ)()){return/webos/i.test(t)}function St(t=(0,r.ZQ)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Et(t=(0,r.ZQ)()){var e;return St(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function At(){return(0,r.lT)()&&10===document.documentMode}function Tt(t=(0,r.ZQ)()){return St(t)||wt(t)||Ct(t)||_t(t)||/windows phone/i.test(t)||bt(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t,e=[]){let n;switch(t){case"Browser":n=mt((0,r.ZQ)());break;case"Worker":n=`${mt((0,r.ZQ)())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.MF}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,i)=>{try{const i=t(e);n(i)}catch(r){i(r)}}));n.onAbort=e,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(n){e.reverse();for(const t of e)try{t()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xt(t,e={}){return $(t,"GET","/v2/passwordPolicy",D(t,e))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=6;class Lt{constructor(t){var e,n,i,r;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(e=s.minPasswordLength)&&void 0!==e?e:Ot,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(i=null===(n=t.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==i?i:"",this.forceUpgradeOnSignin=null!==(r=t.forceUpgradeOnSignin)&&void 0!==r&&r,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,n,i,r,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,a),this.validatePasswordCharacterOptions(t,a),a.isValid&&(a.isValid=null===(e=a.meetsMinPasswordLength)||void 0===e||e),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(i=a.containsLowercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(r=a.containsUppercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(t,e){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(e.meetsMinPasswordLength=t.length>=n),i&&(e.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,e){let n;this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);for(let i=0;i<t.length;i++)n=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(e,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(t,e,n,i,r){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t,e,n,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nt(this),this.idTokenSubscription=new Nt(this),this.beforeStateQueue=new kt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=ut(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await pt.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUserFromIdToken(t){try{const e=await H(this,{idToken:t}),n=await ct._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(n)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if((0,i.xZ)(this.app)){const t=this.app.settings.authIdToken;return t?new Promise((e=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(t).then(e,e)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==i||!(null===o||void 0===o?void 0:o.user)||(r=o.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(o)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await tt(t)}catch(e){if("auth/network-request-failed"!==(null===e||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=T()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if((0,i.xZ)(this.app))return Promise.reject(v(this));const e=t?(0,r.Ku)(t):null;return e&&b(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&b(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return(0,i.xZ)(this.app)?Promise.reject(v(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return(0,i.xZ)(this.app)?Promise.reject(v(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(ut(t))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await xt(this),e=new Lt(t);null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r.FA("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}authStateReady(){return new Promise(((t,e)=>{if(this.currentUser)t();else{const n=this.onAuthStateChanged((()=>{n(),t()}),e)}}))}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};null!=this.tenantId&&(n.tenantId=this.tenantId),await st(this,n)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&ut(t)||this._popupRedirectResolver;b(e,this,"argument-error"),this.redirectPersistenceManager=await pt.create(this,[ut(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const r="function"===typeof e?e:e.next.bind(e);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(o,this,"internal-error"),o.then((()=>{s||r(this.currentUser)})),"function"===typeof e){const r=t.addObserver(e,n,i);return()=>{s=!0,r()}}{const n=t.addObserver(e);return()=>{s=!0,n()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=It(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null===e||void 0===e?void 0:e.error)&&d(`Error while retrieving App Check token: ${e.error}`),null===e||void 0===e?void 0:e.token}}function $t(t){return(0,r.Ku)(t)}class Nt{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,r.tD)((t=>this.observer=t))}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Rt(t){Pt=t}function Mt(t){return Pt.loadJS(t)}function Vt(){return Pt.recaptchaEnterpriseScript}function Ft(){return Pt.gapiScript}function Bt(t){return`__${t}${Math.floor(1e6*Math.random())}`}const jt="recaptcha-enterprise",Ut="NO_RECAPTCHA";class zt{constructor(t){this.type=jt,this.auth=$t(t)}async verify(t="verify",e=!1){async function n(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise((async(e,n)=>{U(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new j(i);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((t=>{n(t)}))}))}function i(e,n,i){const r=window.grecaptcha;B(r)?r.enterprise.ready((()=>{r.enterprise.execute(e,{action:t}).then((t=>{n(t)})).catch((()=>{n(Ut)}))})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((t,r)=>{n(this.auth).then((n=>{if(!e&&B(window.grecaptcha))i(n,t,r);else{if("undefined"===typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));let e=Vt();0!==e.length&&(e+=n),Mt(e).then((()=>{i(n,t,r)})).catch((t=>{r(t)}))}})).catch((t=>{r(t)}))}))}}async function Ht(t,e,n,i=!1){const r=new zt(t);let s;try{s=await r.verify(n)}catch(a){s=await r.verify(n,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function qt(t,e,n,i){var r;if(null===(r=t._getRecaptchaConfig())||void 0===r?void 0:r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Ht(t,e,n,"getOobCode"===n);return i(t,r)}return i(t,e).catch((async r=>{if("auth/missing-recaptcha-token"===r.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const r=await Ht(t,e,n,"getOobCode"===n);return i(t,r)}return Promise.reject(r)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wt(t,e){const n=(0,i.j6)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if((0,r.bD)(i,null!==e&&void 0!==e?e:{}))return t;p(t,"already-initialized")}const s=n.initialize({options:e});return s}function Kt(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(ut);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null===e||void 0===e?void 0:e.popupRedirectResolver)}function Gt(t,e,n){const i=$t(t);b(i._canInitEmulator,i,"emulator-config-failed"),b(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Qt(e),{host:o,port:a}=Yt(e),c=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Jt()}function Qt(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Yt(t){const e=Qt(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const t=r[1];return{host:t,port:Xt(i.substr(t.length+1))}}{const[t,e]=i.split(":");return{host:t,port:Xt(e)}}}function Xt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Jt(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return w("not implemented")}_getIdTokenResponse(t){return w("not implemented")}_linkToIdToken(t,e){return w("not implemented")}_getReauthenticationResolver(t){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function te(t,e){return $(t,"POST","/v1/accounts:signUp",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ee(t,e){return P(t,"POST","/v1/accounts:signInWithPassword",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ne(t,e){return P(t,"POST","/v1/accounts:signInWithEmailLink",D(t,e))}async function ie(t,e){return P(t,"POST","/v1/accounts:signInWithEmailLink",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re extends Zt{constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new re(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new re(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qt(t,e,"signInWithPassword",ee);case"emailLink":return ne(t,{email:this._email,oobCode:this._password});default:p(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const n={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qt(t,n,"signUpPassword",te);case"emailLink":return ie(t,{idToken:e,email:this._email,oobCode:this._password});default:p(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function se(t,e){return P(t,"POST","/v1/accounts:signInWithIdp",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe="http://localhost";class ae extends Zt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new ae(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):p("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,r=o(e,["providerId","signInMethod"]);if(!n||!i)return null;const s=new ae(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(t){const e=this.buildRequest();return se(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,se(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,se(t,e)}buildRequest(){const t={requestUri:oe,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,r.Am)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ce(t,e){return $(t,"POST","/v1/accounts:sendVerificationCode",D(t,e))}async function le(t,e){return P(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,e))}async function ue(t,e){const n=await P(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,e));if(n.temporaryProof)throw F(t,"account-exists-with-different-credential",n);return n}const he={["USER_NOT_FOUND"]:"user-not-found"};async function de(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return P(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,n),he)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends Zt{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new fe({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new fe({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return le(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return ue(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return de(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}=t;return n||e||i||r?new fe({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function me(t){const e=(0,r.I9)((0,r.hp)(t))["link"],n=e?(0,r.I9)((0,r.hp)(e))["deep_link_id"]:null,i=(0,r.I9)((0,r.hp)(t))["deep_link_id"],s=i?(0,r.I9)((0,r.hp)(i))["link"]:null;return s||i||n||e||t}class ge{constructor(t){var e,n,i,s,o,a;const c=(0,r.I9)((0,r.hp)(t)),l=null!==(e=c["apiKey"])&&void 0!==e?e:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=pe(null!==(i=c["mode"])&&void 0!==i?i:null);b(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=me(t);try{return new ge(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ve{constructor(){this.providerId=ve.PROVIDER_ID}static credential(t,e){return re._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=ge.parseLink(e);return b(n,"argument-error"),re._fromEmailAndCode(t,n.code,n.tenantId)}}ve.PROVIDER_ID="password",ve.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ve.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ye{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends ye{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class we extends be{constructor(){super("facebook.com")}static credential(t){return ae._fromParams({providerId:we.PROVIDER_ID,signInMethod:we.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return we.credentialFromTaggedObject(t)}static credentialFromError(t){return we.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return we.credential(t.oauthAccessToken)}catch(e){return null}}}we.FACEBOOK_SIGN_IN_METHOD="facebook.com",we.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _e extends be{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return ae._fromParams({providerId:_e.PROVIDER_ID,signInMethod:_e.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return _e.credentialFromTaggedObject(t)}static credentialFromError(t){return _e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return _e.credential(e,n)}catch(i){return null}}}_e.GOOGLE_SIGN_IN_METHOD="google.com",_e.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ce extends be{constructor(){super("github.com")}static credential(t){return ae._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ce.credentialFromTaggedObject(t)}static credentialFromError(t){return Ce.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Ce.credential(t.oauthAccessToken)}catch(e){return null}}}Ce.GITHUB_SIGN_IN_METHOD="github.com",Ce.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Se extends be{constructor(){super("twitter.com")}static credential(t,e){return ae._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Se.credentialFromTaggedObject(t)}static credentialFromError(t){return Se.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Se.credential(e,n)}catch(i){return null}}}Se.TWITTER_SIGN_IN_METHOD="twitter.com",Se.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ee{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,i=!1){const r=await ct._fromIdTokenResponse(t,n,i),s=Ae(n),o=new Ee({user:r,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=Ae(n);return new Ee({user:t,providerId:i,_tokenResponse:n,operationType:e})}}function Ae(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Te extends r.g{constructor(t,e,n,i){var r;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Te.prototype),this.customData={appName:t.name,tenantId:null!==(r=t.tenantId)&&void 0!==r?r:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,i){return new Te(t,e,n,i)}}function Ie(t,e,n,i){const r="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return r.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Te._fromErrorAndOperation(t,n,e,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ke(t,e,n=!1){const i=await Y(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ee._forOperation(t,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function xe(t,e,n=!1){const{auth:r}=t;if((0,i.xZ)(r.app))return Promise.reject(v(r));const s="reauthenticate";try{const i=await Y(t,Ie(r,s,e,t),n);b(i.idToken,r,"internal-error");const o=G(i.idToken);b(o,r,"internal-error");const{sub:a}=o;return b(t.uid===a,r,"user-mismatch"),Ee._forOperation(t,s,i)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&p(r,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oe(t,e,n=!1){if((0,i.xZ)(t.app))return Promise.reject(v(t));const r="signIn",s=await Ie(t,r,e),o=await Ee._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(o.user),o}async function Le(t,e){return Oe($t(t),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function De(t){const e=$t(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function $e(t,e,n){return(0,i.xZ)(t.app)?Promise.reject(v(t)):Le((0,r.Ku)(t),ve.credential(e,n)).catch((async e=>{throw"auth/password-does-not-meet-requirements"===e.code&&De(t),e}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t,e,n,i){return(0,r.Ku)(t).onIdTokenChanged(e,n,i)}function Pe(t,e,n){return(0,r.Ku)(t).beforeAuthStateChanged(e,n)}function Re(t,e,n,i){return(0,r.Ku)(t).onAuthStateChanged(e,n,i)}function Me(t){return(0,r.Ku)(t).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ve(t,e){return $(t,"POST","/v2/accounts/mfaEnrollment:start",D(t,e))}function Fe(t,e){return $(t,"POST","/v2/accounts/mfaEnrollment:finalize",D(t,e))}function Be(t,e){return $(t,"POST","/v2/accounts/mfaEnrollment:start",D(t,e))}function je(t,e){return $(t,"POST","/v2/accounts/mfaEnrollment:finalize",D(t,e))}new WeakMap;const Ue="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Ue,"1"),this.storage.removeItem(Ue),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=1e3,qe=10;class We extends ze{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Tt(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;e?this.detachListener():this.stopPolling();const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},r=this.storage.getItem(n);At()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,qe):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),He)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}We.type="LOCAL";const Ke=We;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends ze{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Ge.type="SESSION";const Qe=Ge;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Xe(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:r}=e.data,s=this.handlersMap[i];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async t=>t(e.origin,r))),a=await Ye(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Je(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xe.receivers=[];class Ze{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=Je("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(l),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(e.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return window}function en(t){tn().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(){return"undefined"!==typeof tn()["WorkerGlobalScope"]&&"function"===typeof tn()["importScripts"]}async function rn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function sn(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function on(){return nn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="firebaseLocalStorageDb",cn=1,ln="firebaseLocalStorage",un="fbase_key";class hn{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function dn(t,e){return t.transaction([ln],e?"readwrite":"readonly").objectStore(ln)}function fn(){const t=indexedDB.deleteDatabase(an);return new hn(t).toPromise()}function pn(){const t=indexedDB.open(an,cn);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(ln,{keyPath:un})}catch(i){n(i)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(ln)?e(n):(n.close(),await fn(),e(await pn()))}))}))}async function mn(t,e,n){const i=dn(t,!0).put({[un]:e,value:n});return new hn(i).toPromise()}async function gn(t,e){const n=dn(t,!1).get(e),i=await new hn(n).toPromise();return void 0===i?null:i.value}function vn(t,e){const n=dn(t,!0).delete(e);return new hn(n).toPromise()}const yn=800,bn=3;class wn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await pn()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>bn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xe._getInstance(on()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await rn(),!this.activeServiceWorker)return;this.sender=new Ze(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&sn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await pn();return await mn(t,Ue,"1"),await vn(t,Ue),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>mn(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>gn(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>vn(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=dn(t,!1).getAll();return new hn(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;if(0!==t.length)for(const{fbase_key:i,value:r}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),yn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}wn.type="LOCAL";const _n=wn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t,e){return $(t,"POST","/v2/accounts/mfaSignIn:start",D(t,e))}function Sn(t,e){return $(t,"POST","/v2/accounts/mfaSignIn:finalize",D(t,e))}function En(t,e){return $(t,"POST","/v2/accounts/mfaSignIn:finalize",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Bt("rcb"),new I(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const An="recaptcha";async function Tn(t,e,n){var i;const r=await n.verify();try{let s;if(b("string"===typeof r,t,"argument-error"),b(n.type===An,t,"argument-error"),s="string"===typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){b("enroll"===e.type,t,"internal-error");const n=await Ve(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{b("signin"===e.type,t,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;b(n,t,"missing-multi-factor-info");const o=await Cn(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await ce(t,{phoneNumber:s.phoneNumber,recaptchaToken:r});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class In{constructor(t){this.providerId=In.PROVIDER_ID,this.auth=$t(t)}verifyPhoneNumber(t,e){return Tn(this.auth,t,(0,r.Ku)(e))}static credential(t,e){return fe._fromVerification(t,e)}static credentialFromResult(t){const e=t;return In.credentialFromTaggedObject(e)}static credentialFromError(t){return In.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?fe._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function kn(t,e){return e?ut(e):(b(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In.PROVIDER_ID="phone",In.PHONE_SIGN_IN_METHOD="phone";class xn extends Zt{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return se(t,this._buildIdpRequest())}_linkToIdToken(t,e){return se(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return se(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function On(t){return Oe(t.auth,new xn(t),t.bypassAuthState)}function Ln(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),xe(n,new xn(t),t.bypassAuthState)}async function Dn(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),ke(n,new xn(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,e,n,i,r=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return On;case"linkViaPopup":case"linkViaRedirect":return Dn;case"reauthViaPopup":case"reauthViaRedirect":return Ln;default:p(this.auth,"internal-error")}}resolve(t){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new I(2e3,1e4);class Pn extends $n{constructor(t,e,n,i,r){super(t,e,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Pn.currentPopupAction&&Pn.currentPopupAction.cancel(),Pn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return b(t,this.auth,"internal-error"),t}async onExecution(){_(1===this.filter.length,"Popup operations only handle one event");const t=Je();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(m(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(m(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(m(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(t,Nn.get())};t()}}Pn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rn="pendingRedirect",Mn=new Map;class Vn extends $n{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Mn.get(this.auth._key());if(!t){try{const e=await Fn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}Mn.set(this.auth._key(),t)}return this.bypassAuthState||Mn.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Fn(t,e){const n=Un(e),i=jn(t);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}function Bn(t,e){Mn.set(t._key(),e)}function jn(t){return ut(t._redirectPersistence)}function Un(t){return ft(Rn,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(t,e,n=!1){if((0,i.xZ)(t.app))return Promise.reject(v(t));const r=$t(t),s=kn(r,e),o=new Vn(r,s,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hn=6e5;class qn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!Gn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Kn(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(m(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Hn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wn(t))}saveEventToCache(t){this.cachedEventUids.add(Wn(t)),this.lastProcessedEventTime=Date.now()}}function Wn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Kn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function Gn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Kn(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qn(t,e={}){return $(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xn=/^https?/;async function Jn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Qn(t);for(const i of e)try{if(Zn(i))return}catch(n){}p(t,"unauthorized-domain")}function Zn(t){const e=C(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Xn.test(n))return!1;if(Yn.test(t))return i===t;const r=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+r+"|"+r+")$","i");return s.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new I(3e4,6e4);function ei(){const t=tn().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function ni(t){return new Promise(((e,n)=>{var i,r,s;function o(){ei(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ei(),n(m(t,"network-request-failed"))},timeout:ti.get()})}if(null===(r=null===(i=tn().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=tn().gapi)||void 0===s?void 0:s.load)){const e=Bt("iframefcb");return tn()[e]=()=>{gapi.load?o():n(m(t,"network-request-failed"))},Mt(`${Ft()}?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw ii=null,t}))}let ii=null;function ri(t){return ii=ii||ni(t),ii}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=new I(5e3,15e3),oi="__/auth/iframe",ai="emulator/auth/iframe",ci={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},li=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ui(t){const e=t.config;b(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?k(e,ai):`https://${t.config.authDomain}/${oi}`,s={apiKey:e.apiKey,appName:t.name,v:i.MF},o=li.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.Am)(s).slice(1)}`}async function hi(t){const e=await ri(t),n=tn().gapi;return b(n,t,"internal-error"),e.open({where:document.body,url:ui(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ci,dontclear:!0},(e=>new Promise((async(n,i)=>{await e.restyle({setHideOnLeave:!1});const r=m(t,"network-request-failed"),s=tn().setTimeout((()=>{i(r)}),si.get());function o(){tn().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{i(r)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fi=500,pi=600,mi="_blank",gi="http://localhost";class vi{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function yi(t,e,n,i=fi,s=pi){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l=Object.assign(Object.assign({},di),{width:i.toString(),height:s.toString(),top:o,left:a}),u=(0,r.ZQ)().toLowerCase();n&&(c=yt(u)?mi:n),gt(u)&&(e=e||gi,l.scrollbars="yes");const h=Object.entries(l).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(Et(u)&&"_self"!==c)return bi(e||"",c),new vi(null);const d=window.open(e||"",c,h);b(d,t,"popup-blocked");try{d.focus()}catch(f){}return new vi(d)}function bi(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="__/auth/handler",_i="emulator/auth/handler",Ci=encodeURIComponent("fac");async function Si(t,e,n,s,o,a){b(t.config.authDomain,t,"auth-domain-config-required"),b(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:i.MF,eventId:o};if(e instanceof ye){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",(0,r.Im)(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof be){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const l=c;for(const i of Object.keys(l))void 0===l[i]&&delete l[i];const u=await t._getAppCheckToken(),h=u?`#${Ci}=${encodeURIComponent(u)}`:"";return`${Ei(t)}?${(0,r.Am)(l).slice(1)}${h}`}function Ei({config:t}){return t.emulator?k(t,_i):`https://${t.authDomain}/${wi}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai="webStorageSupport";class Ti{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qe,this._completeRedirectFn=zn,this._overrideRedirectResult=Bn}async _openPopup(t,e,n,i){var r;_(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const s=await Si(t,e,n,C(),i);return yi(t,s,Je())}async _openRedirect(t,e,n,i){await this._originValidation(t);const r=await Si(t,e,n,C(),i);return en(r),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(_(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await hi(t),n=new qn(t);return e.register("authEvent",(e=>{b(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const i=n.onEvent(e.authEvent);return{status:i?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(Ai,{type:Ai},(n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[Ai];void 0!==r&&e(!!r),p(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Jn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Tt()||vt()||St()}}const Ii=Ti;class ki{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return w("unexpected MultiFactorSessionType")}}}class xi extends ki{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new xi(t)}_finalizeEnroll(t,e,n){return Fe(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return Sn(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Oi{constructor(){}static assertion(t){return xi._fromCredential(t)}}Oi.FACTOR_ID="phone";class Li{static assertionForEnrollment(t,e){return Di._fromSecret(t,e)}static assertionForSignIn(t,e){return Di._fromEnrollmentId(t,e)}static async generateSecret(t){var e;const n=t;b("undefined"!==typeof(null===(e=n.user)||void 0===e?void 0:e.auth),"internal-error");const i=await Be(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return $i._fromStartTotpMfaEnrollmentResponse(i,n.user.auth)}}Li.FACTOR_ID="totp";class Di extends ki{constructor(t,e,n){super("totp"),this.otp=t,this.enrollmentId=e,this.secret=n}static _fromSecret(t,e){return new Di(e,void 0,t)}static _fromEnrollmentId(t,e){return new Di(e,t)}async _finalizeEnroll(t,e,n){return b("undefined"!==typeof this.secret,t,"argument-error"),je(t,{idToken:e,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(t,e){b(void 0!==this.enrollmentId&&void 0!==this.otp,t,"argument-error");const n={verificationCode:this.otp};return En(t,{mfaPendingCredential:e,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class $i{constructor(t,e,n,i,r,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=t,this.hashingAlgorithm=e,this.codeLength=n,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=r}static _fromStartTotpMfaEnrollmentResponse(t,e){return new $i(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,e)}_makeTotpVerificationInfo(t){return{sessionInfo:this.sessionInfo,verificationCode:t}}generateQrCodeUrl(t,e){var n;let i=!1;return(Ni(t)||Ni(e))&&(i=!0),i&&(Ni(t)&&(t=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Ni(e)&&(e=this.auth.name)),`otpauth://totp/${e}:${t}?secret=${this.secretKey}&issuer=${e}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Ni(t){return"undefined"===typeof t||0===(null===t||void 0===t?void 0:t.length)}var Pi="@firebase/auth",Ri="1.7.9";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mi{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null===e||void 0===e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Fi(t){(0,i.om)(new a.uA("auth",((e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;b(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:It(t)},l=new Dt(i,r,s,c);return Kt(l,n),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const i=t.getProvider("auth-internal");i.initialize()}))),(0,i.om)(new a.uA("auth-internal",(t=>{const e=$t(t.getProvider("auth").getImmediate());return(t=>new Mi(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KO)(Pi,Ri,Vi(t)),(0,i.KO)(Pi,Ri,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=300,ji=(0,r.XA)("authIdTokenMaxAge")||Bi;let Ui=null;const zi=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>ji)return;const r=null===n||void 0===n?void 0:n.token;Ui!==r&&(Ui=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Hi(t=(0,i.Sx)()){const e=(0,i.j6)(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Wt(t,{popupRedirectResolver:Ii,persistence:[_n,Ke,Qe]}),s=(0,r.XA)("authTokenSyncURL");if(s&&"boolean"===typeof isSecureContext&&isSecureContext){const t=new URL(s,location.origin);if(location.origin===t.origin){const e=zi(t.toString());Pe(n,e,(()=>e(n.currentUser))),Ne(n,(t=>e(t)))}}const o=(0,r.Tj)("auth");return o&&Gt(n,`http://${o}`),n}function qi(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}Rt({loadJS(t){return new Promise(((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=m("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",qi().appendChild(i)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Fi("Browser")},1884:function(t,e,n){n.d(e,{gS:function(){return Va},rJ:function(){return Ho},kd:function(){return Ma},H9:function(){return qo},x7:function(){return $a},GG:function(){return Pa},aU:function(){return Go},mZ:function(){return Ra}});var i,r,s=n(9928),o=n(5125),a=n(3424),c=n(6743),l="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},u={};(function(){var t;
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(t,e){function n(){}n.prototype=e.prototype,t.D=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.C=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function o(t,e,n){n||(n=0);var i=Array(16);if("string"===typeof e)for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],o=e+(s^n&(r^s))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[2]+606105819&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[6]+2821735955&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[10]+4294925233&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[14]+2792965006&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^s&(n^r))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^s)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[11]+1839030562&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[7]+4139469664&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[3]+3572445317&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[15]+530742520&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~s))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}function a(t,e){var n=l;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}function c(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var s=0|t[r];i&&s==e||(n[r]=s,i=!1)}this.g=n}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},s.prototype.u=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,i=this.B,r=this.h,s=0;s<e;){if(0==r)for(;s<=n;)o(this,t,s),s+=this.blockSize;if("string"===typeof t){for(;s<e;)if(i[r++]=t.charCodeAt(s++),r==this.blockSize){o(this,i),r=0;break}}else for(;s<e;)if(i[r++]=t[s++],r==this.blockSize){o(this,i),r=0;break}}this.h=r,this.o+=e},s.prototype.v=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.o;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.u(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};var l={};function h(t){return-128<=t&&128>t?a(t,(function(t){return new c([0|t],0>t?-1:0)})):new c([0|t],0>t?-1:0)}function d(t){if(isNaN(t)||!isFinite(t))return p;if(0>t)return b(d(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=4294967296;return new c(e,0)}function f(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return b(f(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=d(Math.pow(e,8)),i=p,r=0;r<t.length;r+=8){var s=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+s),e);8>s?(s=d(Math.pow(e,s)),i=i.j(s).add(d(o))):(i=i.j(n),i=i.add(d(o)))}return i}var p=h(0),m=h(1),g=h(16777216);function v(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function y(t){return-1==t.h}function b(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new c(n,~t.h).add(m)}function w(t,e){return t.add(b(e))}function _(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function C(t,e){this.g=t,this.h=e}function S(t,e){if(v(e))throw Error("division by zero");if(v(t))return new C(p,p);if(y(t))return e=S(b(t),e),new C(b(e.g),b(e.h));if(y(e))return e=S(t,b(e)),new C(b(e.g),e.h);if(30<t.g.length){if(y(t)||y(e))throw Error("slowDivide_ only works with positive integers.");for(var n=m,i=e;0>=i.l(t);)n=E(n),i=E(i);var r=A(n,1),s=A(i,1);for(i=A(i,2),n=A(n,2);!v(i);){var o=s.add(i);0>=o.l(t)&&(r=r.add(n),s=o),i=A(i,1),n=A(n,1)}return e=w(t,r.j(e)),new C(r,e)}for(r=p;0<=t.l(e);){for(n=Math.max(1,Math.floor(t.m()/e.m())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),s=d(n),o=s.j(e);y(o)||0<o.l(t);)n-=i,s=d(n),o=s.j(e);v(s)&&(s=m),r=r.add(s),t=w(t,o)}return new C(r,t)}function E(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.i(i)<<1|t.i(i-1)>>>31;return new c(n,t.h)}function A(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,r=[],s=0;s<i;s++)r[s]=0<e?t.i(s+n)>>>e|t.i(s+n+1)<<32-e:t.i(s+n);return new c(r,t.h)}t=c.prototype,t.m=function(){if(y(this))return-b(this).m();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.i(n);t+=(0<=i?i:4294967296+i)*e,e*=4294967296}return t},t.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(v(this))return"0";if(y(this))return"-"+b(this).toString(t);for(var e=d(Math.pow(t,6)),n=this,i="";;){var r=S(n,e).g;n=w(n,r.j(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,v(n))return s+i;for(;6>s.length;)s="0"+s;i=s+i}},t.i=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return t=w(this,t),y(t)?-1:v(t)?0:1},t.abs=function(){return y(this)?b(this):this},t.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,r=0;r<=e;r++){var s=i+(65535&this.i(r))+(65535&t.i(r)),o=(s>>>16)+(this.i(r)>>>16)+(t.i(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new c(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(v(this)||v(t))return p;if(y(this))return y(t)?b(this).j(b(t)):b(b(this).j(t));if(y(t))return b(this.j(b(t)));if(0>this.l(g)&&0>t.l(g))return d(this.m()*t.m());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<t.g.length;r++){var s=this.i(i)>>>16,o=65535&this.i(i),a=t.i(r)>>>16,l=65535&t.i(r);n[2*i+2*r]+=o*l,_(n,2*i+2*r),n[2*i+2*r+1]+=s*l,_(n,2*i+2*r+1),n[2*i+2*r+1]+=o*a,_(n,2*i+2*r+1),n[2*i+2*r+2]+=s*a,_(n,2*i+2*r+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new c(n,0)},t.A=function(t){return S(this,t).h},t.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.i(i)&t.i(i);return new c(n,this.h&t.h)},t.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.i(i)|t.i(i);return new c(n,this.h|t.h)},t.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.i(i)^t.i(i);return new c(n,this.h^t.h)},s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,r=u.Md5=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=d,c.fromString=f,i=u.Integer=c}).apply("undefined"!==typeof l?l:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var h,d,f,p,m,g,v,y,b="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},w={};(function(){var t,e="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){return t==Array.prototype||t==Object.prototype||(t[e]=n.value),t};function n(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof b&&b];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var i=n(this);function r(t,n){if(n)t:{var r=i;t=t.split(".");for(var s=0;s<t.length-1;s++){var o=t[s];if(!(o in r))break t;r=r[o]}t=t[t.length-1],s=r[t],n=n(s),n!=s&&null!=n&&e(r,t,{configurable:!0,writable:!0,value:n})}}function s(t,e){t instanceof String&&(t+="");var n=0,i=!1,r={next:function(){if(!i&&n<t.length){var r=n++;return{value:e(r,t[r]),done:!1}}return i=!0,{done:!0,value:void 0}}};return r[Symbol.iterator]=function(){return r},r}r("Array.prototype.values",(function(t){return t||function(){return s(this,(function(t,e){return e}))}}));
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var o=o||{},a=this||self;function c(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function l(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function u(t,e,n){return t.call.apply(t.bind,arguments)}function C(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function S(t,e,n){return S=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?u:C,S.apply(null,arguments)}function A(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function T(t,e){function n(){}n.prototype=e.prototype,t.aa=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Qb=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function I(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function k(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(c(e)){const n=t.length||0,i=e.length||0;t.length=n+i;for(let r=0;r<i;r++)t[n+r]=e[r]}else t.push(e)}}class x{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function O(t){return/^[\s\xa0]*$/.test(t)}function L(){var t=a.navigator;return t&&(t=t.userAgent)?t:""}function D(t){return D[" "](t),t}D[" "]=function(){};var $=-1!=L().indexOf("Gecko")&&!(-1!=L().toLowerCase().indexOf("webkit")&&-1==L().indexOf("Edge"))&&!(-1!=L().indexOf("Trident")||-1!=L().indexOf("MSIE"))&&-1==L().indexOf("Edge");function N(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function P(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function R(t){const e={};for(const n in t)e[n]=t[n];return e}const M="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function V(t,e){let n,i;for(let r=1;r<arguments.length;r++){for(n in i=arguments[r],i)t[n]=i[n];for(let e=0;e<M.length;e++)n=M[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function F(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function B(t){a.setTimeout((()=>{throw t}),0)}function j(){var t=K;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class U{constructor(){this.h=this.g=null}add(t,e){const n=z.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var z=new x((()=>new H),(t=>t.reset()));class H{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let q,W=!1,K=new U,G=()=>{const t=a.Promise.resolve(void 0);q=()=>{t.then(Q)}};var Q=()=>{for(var t;t=j();){try{t.h.call(t.g)}catch(n){B(n)}var e=z;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}W=!1};function Y(){this.s=this.s,this.C=this.C}function X(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Y.prototype.s=!1,Y.prototype.ma=function(){this.s||(this.s=!0,this.N())},Y.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},X.prototype.h=function(){this.defaultPrevented=!0};var J=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};a.addEventListener("test",t,e),a.removeEventListener("test",t,e)}catch(n){}return t}();function Z(t,e){if(X.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($){t:{try{D(e.nodeName);var r=!0;break t}catch(s){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:tt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Z.aa.h.call(this)}}T(Z,X);var tt={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var et="closure_listenable_"+(1e6*Math.random()|0),nt=0;function it(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=r,this.key=++nt,this.da=this.fa=!1}function rt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function st(t){this.src=t,this.g={},this.h=0}function ot(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=Array.prototype.indexOf.call(r,e,void 0);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(rt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function at(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.da&&s.listener==e&&s.capture==!!n&&s.ha==i)return r}return-1}st.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=at(t,e,i,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new it(e,this.src,s,!!i,r),e.fa=n,t.push(e)),e};var ct="closure_lm_"+(1e6*Math.random()|0),lt={};function ut(t,e,n,i,r){if(i&&i.once)return ft(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ut(t,e[s],n,i,r);return null}return n=wt(n),t&&t[et]?t.K(e,n,l(i)?!!i.capture:!!i,r):ht(t,e,n,!1,i,r)}function ht(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=l(r)?!!r.capture:!!r,a=yt(t);if(a||(t[ct]=a=new st(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=dt(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)J||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(gt(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function dt(){function t(n){return e.call(t.src,t.listener,n)}const e=vt;return t}function ft(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)ft(t,e[s],n,i,r);return null}return n=wt(n),t&&t[et]?t.L(e,n,l(i)?!!i.capture:!!i,r):ht(t,e,n,!0,i,r)}function pt(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)pt(t,e[s],n,i,r);else i=l(i)?!!i.capture:!!i,n=wt(n),t&&t[et]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=at(s,n,i,r),-1<n&&(rt(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=yt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=at(e,n,i,r)),(n=-1<t?e[t]:null)&&mt(n))}function mt(t){if("number"!==typeof t&&t&&!t.da){var e=t.src;if(e&&e[et])ot(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(gt(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=yt(e))?(ot(n,t),0==n.h&&(n.src=null,e[ct]=null)):rt(t)}}}function gt(t){return t in lt?lt[t]:lt[t]="on"+t}function vt(t,e){if(t.da)t=!0;else{e=new Z(e,this);var n=t.listener,i=t.ha||t.src;t.fa&&mt(t),t=n.call(i,e)}return t}function yt(t){return t=t[ct],t instanceof st?t:null}var bt="__closure_events_fn_"+(1e9*Math.random()>>>0);function wt(t){return"function"===typeof t?t:(t[bt]||(t[bt]=function(e){return t.handleEvent(e)}),t[bt])}function _t(){Y.call(this),this.i=new st(this),this.M=this,this.F=null}function Ct(t,e){var n,i=t.F;if(i)for(n=[];i;i=i.F)n.push(i);if(t=t.M,i=e.type||e,"string"===typeof e)e=new X(e,t);else if(e instanceof X)e.target=e.target||t;else{var r=e;e=new X(i,t),V(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=St(o,i,!0,e)&&r}if(o=e.g=t,r=St(o,i,!0,e)&&r,r=St(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=St(o,i,!1,e)&&r}function St(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.da&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.fa&&ot(t.i,o),r=!1!==a.call(c,i)&&r}}return r&&!i.defaultPrevented}function Et(t,e,n){if("function"===typeof t)n&&(t=S(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=S(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function At(t){t.g=Et((()=>{t.g=null,t.i&&(t.i=!1,At(t))}),t.l);const e=t.h;t.h=null,t.m.apply(null,e)}T(_t,Y),_t.prototype[et]=!0,_t.prototype.removeEventListener=function(t,e,n,i){pt(this,t,e,n,i)},_t.prototype.N=function(){if(_t.aa.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)rt(n[i]);delete e.g[t],e.h--}}this.F=null},_t.prototype.K=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},_t.prototype.L=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};class Tt extends Y{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:At(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function It(t){Y.call(this),this.h=t,this.g={}}T(It,Y);var kt=[];function xt(t){N(t.g,(function(t,e){this.g.hasOwnProperty(e)&&mt(t)}),t),t.g={}}It.prototype.N=function(){It.aa.N.call(this),xt(this)},It.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ot=a.JSON.stringify,Lt=a.JSON.parse,Dt=class{stringify(t){return a.JSON.stringify(t,void 0)}parse(t){return a.JSON.parse(t,void 0)}};function $t(){}function Nt(t){return t.h||(t.h=t.i())}function Pt(){}$t.prototype.h=null;var Rt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Mt(){X.call(this,"d")}function Vt(){X.call(this,"c")}T(Mt,X),T(Vt,X);var Ft={},Bt=null;function jt(){return Bt=Bt||new _t}function Ut(t){X.call(this,Ft.La,t)}function zt(t){const e=jt();Ct(e,new Ut(e))}function Ht(t,e){X.call(this,Ft.STAT_EVENT,t),this.stat=e}function qt(t){const e=jt();Ct(e,new Ht(e,t))}function Wt(t,e){X.call(this,Ft.Ma,t),this.size=e}function Kt(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}function Gt(){this.g=!0}function Qt(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}function Yt(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Xt(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Zt(t,n)+(i?" "+i:"")}))}function Jt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Zt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return Ot(n)}catch(a){return e}}Ft.La="serverreachability",T(Ut,X),Ft.STAT_EVENT="statevent",T(Ht,X),Ft.Ma="timingevent",T(Wt,X),Gt.prototype.xa=function(){this.g=!1},Gt.prototype.info=function(){};var te,ee={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ne={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function ie(){}function re(t,e,n,i){this.j=t,this.i=e,this.l=n,this.R=i||1,this.U=new It(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new se}function se(){this.i=null,this.g="",this.h=!1}T(ie,$t),ie.prototype.g=function(){return new XMLHttpRequest},ie.prototype.i=function(){return{}},te=new ie;var oe={},ae={};function ce(t,e,n){t.L=1,t.v=Me(De(e)),t.m=n,t.P=!0,le(t,null)}function le(t,e){t.F=Date.now(),de(t),t.A=De(t.v);var n=t.A,i=t.R;Array.isArray(i)||(i=[String(i)]),Ye(n.i,"t",i),t.C=0,n=t.j.J,t.h=new se,t.g=zn(t.j,n?e:null,!t.m),0<t.O&&(t.M=new Tt(S(t.Y,t,t.g),t.O)),e=t.U,n=t.g,i=t.ca;var r="readystatechange";Array.isArray(r)||(r&&(kt[0]=r.toString()),r=kt);for(var s=0;s<r.length;s++){var o=ut(n,r[s],i||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}e=t.H?R(t.H):{},t.m?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),zt(),Qt(t.i,t.u,t.A,t.l,t.R,t.m)}function ue(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.j.Ca)}function he(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?ae:(n=Number(e.substring(n,i)),isNaN(n)?oe:(i+=1,i+n>e.length?ae:(e=e.slice(i,i+n),t.C=i+n,e)))}function de(t){t.S=Date.now()+t.I,fe(t,t.I)}function fe(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Kt(S(t.ba,t),e)}function pe(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function me(t){0==t.j.G||t.J||Vn(t.j,t)}function ge(t){pe(t);var e=t.M;e&&"function"==typeof e.ma&&e.ma(),t.M=null,xt(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ma())}function ve(t,e){try{var n=t.j;if(0!=n.G&&(n.g==t||Ce(n.h,t)))if(!t.K&&Ce(n.h,t)&&3==n.G){try{var i=n.Da.g.parse(e)}catch(l){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Mn(n),Tn(n)}Nn(n),qt(18)}}else n.za=r[1],0<n.za-n.T&&37500>r[2]&&n.F&&0==n.v&&!n.C&&(n.C=Kt(S(n.Za,n),6e3));if(1>=_e(n.h)&&n.ca){try{n.ca()}catch(l){}n.ca=void 0}}else Bn(n,11)}else if((t.K||n.g==t)&&Mn(n),!O(e))for(r=n.Da.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],2==n.G)if("c"==l[0]){n.K=l[1],n.ia=l[2];const e=l[3];null!=e&&(n.la=e,n.j.info("VER="+n.la));const r=l[4];null!=r&&(n.Aa=r,n.j.info("SVER="+n.Aa));const u=l[5];null!=u&&"number"===typeof u&&0<u&&(i=1.5*u,n.L=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Se(s,s.h),s.h=null))}if(i.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.ya=t,Re(i.I,i.D,t))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-t.F,n.j.info("Handshake RTT: "+n.R+"ms")),i=n;var o=t;if(i.qa=Un(i,i.J?i.ia:null,i.W),o.K){Ee(i.h,o);var a=o,c=i.L;c&&(a.I=c),a.B&&(pe(a),de(a)),i.g=o}else $n(i);0<n.i.length&&kn(n)}else"stop"!=l[0]&&"close"!=l[0]||Bn(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?Bn(n,7):An(n):"noop"!=l[0]&&n.l&&n.l.ta(l),n.v=0)}zt(4)}catch(l){}}re.prototype.ca=function(t){t=t.target;const e=this.M;e&&3==wn(t)?e.j():this.Y(t)},re.prototype.Y=function(t){try{if(t==this.g)t:{const d=wn(this.g);var e=this.g.Ba();const f=this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||_n(this.g)))){this.J||4!=d||7==e||zt(8==e||0>=f?3:2),pe(this);var n=this.g.Z();this.X=n;e:if(ue(this)){var i=_n(this.g);t="";var r=i.length,s=4==wn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){ge(this),me(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:!(s&&e==r-1)});i.length=0,this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.oa();if(this.o=200==n,Yt(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){e:{if(this.g){var c,l=this.g;if((c=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(c)){var u=c;break e}}u=null}if(!(n=u)){this.o=!1,this.s=3,qt(12),ge(this),me(this);break t}Xt(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ve(this,n)}if(this.P){let t;for(n=!0;!this.J&&this.C<o.length;){if(t=he(this,o),t==ae){4==d&&(this.s=4,qt(14),n=!1),Xt(this.i,this.l,null,"[Incomplete Response]");break}if(t==oe){this.s=4,qt(15),Xt(this.i,this.l,o,"[Invalid Chunk]"),n=!1;break}Xt(this.i,this.l,t,null),ve(this,t)}if(ue(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=o.length||this.h.h||(this.s=1,qt(16),n=!1),this.o=this.o&&n,n){if(0<o.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),Pn(h),h.M=!0,qt(11))}}else Xt(this.i,this.l,o,"[Invalid Chunked Response]"),ge(this),me(this)}else Xt(this.i,this.l,o,null),ve(this,o);4==d&&ge(this),this.o&&!this.J&&(4==d?Vn(this.j,this):(this.o=!1,de(this)))}else Cn(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,qt(12)):(this.s=0,qt(13)),ge(this),me(this)}}}catch(_){}},re.prototype.cancel=function(){this.J=!0,ge(this)},re.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(Jt(this.i,this.A),2!=this.L&&(zt(),qt(17)),ge(this),this.s=2,me(this)):fe(this,this.S-t)};var ye=class{constructor(t,e){this.g=t,this.map=e}};function be(t){this.l=t||10,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function we(t){return!!t.h||!!t.g&&t.g.size>=t.j}function _e(t){return t.h?1:t.g?t.g.size:0}function Ce(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Se(t,e){t.g?t.g.add(e):t.h=e}function Ee(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Ae(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return I(t.i)}function Te(t){if(t.V&&"function"==typeof t.V)return t.V();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(c(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}function Ie(t){if(t.na&&"function"==typeof t.na)return t.na();if(!t.V||"function"!=typeof t.V){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(c(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function ke(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(c(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Ie(t),i=Te(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}be.prototype.cancel=function(){if(this.i=Ae(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var xe=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Oe(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Le(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof Le){this.h=t.h,$e(this,t.j),this.o=t.o,this.g=t.g,Ne(this,t.s),this.l=t.l;var e=t.i,n=new We;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Pe(this,n),this.m=t.m}else t&&(e=String(t).match(xe))?(this.h=!1,$e(this,e[1]||"",!0),this.o=Ve(e[2]||""),this.g=Ve(e[3]||"",!0),Ne(this,e[4]),this.l=Ve(e[5]||"",!0),Pe(this,e[6]||"",!0),this.m=Ve(e[7]||"")):(this.h=!1,this.i=new We(null,this.h))}function De(t){return new Le(t)}function $e(t,e,n){t.j=n?Ve(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ne(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.s=e}else t.s=null}function Pe(t,e,n){e instanceof We?(t.i=e,Je(t.i,t.h)):(n||(e=Fe(e,He)),t.i=new We(e,t.h))}function Re(t,e,n){t.i.set(e,n)}function Me(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ve(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Fe(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Be),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Be(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Le.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Fe(e,je,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(Fe(e,je,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.s,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Fe(n,"/"==n.charAt(0)?ze:Ue,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",Fe(n,qe)),t.join("")};var je=/[#\/\?@]/g,Ue=/[#\?:]/g,ze=/[#\?]/g,He=/[#\?@]/g,qe=/#/g;function We(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ke(t){t.g||(t.g=new Map,t.h=0,t.i&&Oe(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Ge(t,e){Ke(t),e=Xe(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Qe(t,e){return Ke(t),e=Xe(t,e),t.g.has(e)}function Ye(t,e,n){Ge(t,e),0<n.length&&(t.i=null,t.g.set(Xe(t,e),I(n)),t.h+=n.length)}function Xe(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Je(t,e){e&&!t.j&&(Ke(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Ge(this,e),Ye(this,n,t))}),t)),t.j=e}function Ze(t,e){const n=new Gt;if(a.Image){const i=new Image;i.onload=A(en,n,"TestLoadImage: loaded",!0,e,i),i.onerror=A(en,n,"TestLoadImage: error",!1,e,i),i.onabort=A(en,n,"TestLoadImage: abort",!1,e,i),i.ontimeout=A(en,n,"TestLoadImage: timeout",!1,e,i),a.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}function tn(t,e){const n=new Gt,i=new AbortController,r=setTimeout((()=>{i.abort(),en(n,"TestPingServer: timeout",!1,e)}),1e4);fetch(t,{signal:i.signal}).then((t=>{clearTimeout(r),t.ok?en(n,"TestPingServer: ok",!0,e):en(n,"TestPingServer: server error",!1,e)})).catch((()=>{clearTimeout(r),en(n,"TestPingServer: error",!1,e)}))}function en(t,e,n,i,r){try{r&&(r.onload=null,r.onerror=null,r.onabort=null,r.ontimeout=null),i(n)}catch(s){}}function nn(){this.g=new Dt}function rn(t,e,n){const i=n||"";try{ke(t,(function(t,n){let r=t;l(t)&&(r=Ot(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function sn(t){this.l=t.Ub||null,this.j=t.eb||!1}function on(t,e){_t.call(this),this.D=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function an(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}function cn(t){t.readyState=4,t.l=null,t.j=null,t.v=null,ln(t)}function ln(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function un(t){let e="";return N(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function hn(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=un(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Re(t,e,n))}function dn(t){_t.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}t=We.prototype,t.add=function(t,e){Ke(this),this.i=null,t=Xe(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){Ke(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},t.na=function(){Ke(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},t.V=function(t){Ke(this);let e=[];if("string"===typeof t)Qe(this,t)&&(e=e.concat(this.g.get(Xe(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},t.set=function(t,e){return Ke(this),this.i=null,t=Xe(this,t),Qe(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t?(t=this.V(t),0<t.length?String(t[0]):e):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.V(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")},T(sn,$t),sn.prototype.g=function(){return new on(this.l,this.j)},sn.prototype.i=function(t){return function(){return t}}({}),T(on,_t),t=on.prototype,t.open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=e,this.readyState=1,ln(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.A,e)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,cn(this)),this.readyState=0},t.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ln(this)),this.g&&(this.readyState=3,ln(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;an(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))},t.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.v.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?cn(this):ln(this),3==this.readyState&&an(this)}},t.Ra=function(t){this.g&&(this.response=this.responseText=t,cn(this))},t.Qa=function(t){this.g&&(this.response=t,cn(this))},t.ga=function(){this.g&&cn(this)},t.setRequestHeader=function(t,e){this.u.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(on.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),T(dn,_t);var fn=/^https?$/i,pn=["POST","PUT"];function mn(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.m=5,gn(t),yn(t)}function gn(t){t.A||(t.A=!0,Ct(t,"complete"),Ct(t,"error"))}function vn(t){if(t.h&&"undefined"!=typeof o&&(!t.v[1]||4!=wn(t)||2!=t.Z()))if(t.u&&4==wn(t))Et(t.Ea,0,t);else if(Ct(t,"readystatechange"),4==wn(t)){t.h=!1;try{const o=t.Z();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===o){var r=String(t.D).match(xe)[1]||null;!r&&a.self&&a.self.location&&(r=a.self.location.protocol.slice(0,-1)),i=!fn.test(r?r.toLowerCase():"")}n=i}if(n)Ct(t,"complete"),Ct(t,"success");else{t.m=6;try{var s=2<wn(t)?t.g.statusText:""}catch(c){s=""}t.l=s+" ["+t.Z()+"]",gn(t)}}finally{yn(t)}}}function yn(t,e){if(t.g){bn(t);const i=t.g,r=t.v[0]?()=>{}:null;t.g=null,t.v=null,e||Ct(t,"ready");try{i.onreadystatechange=r}catch(n){}}}function bn(t){t.I&&(a.clearTimeout(t.I),t.I=null)}function wn(t){return t.g?t.g.readyState:0}function _n(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(E){return null}}function Cn(t){const e={};t=(t.g&&2<=wn(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<t.length;i++){if(O(t[i]))continue;var n=F(t[i]);const r=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=e[r]||[];e[r]=s,s.push(n)}P(e,(function(t){return t.join(", ")}))}function Sn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function En(t){this.Aa=0,this.i=[],this.j=new Gt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Sn("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Sn("baseRetryDelayMs",5e3,t),this.cb=Sn("retryDelaySeedMs",1e4,t),this.Wa=Sn("forwardChannelMaxRetries",2,t),this.wa=Sn("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new be(t&&t.concurrentRequestLimit),this.Da=new nn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function An(t){if(In(t),3==t.G){var e=t.U++,n=De(t.I);if(Re(n,"SID",t.K),Re(n,"RID",e),Re(n,"TYPE","terminate"),Ln(t,n),e=new re(t,t.j,e),e.L=2,e.v=Me(De(n)),n=!1,a.navigator&&a.navigator.sendBeacon)try{n=a.navigator.sendBeacon(e.v.toString(),"")}catch(i){}!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=zn(e.j,null),e.g.ea(e.v)),e.F=Date.now(),de(e)}jn(t)}function Tn(t){t.g&&(Pn(t),t.g.cancel(),t.g=null)}function In(t){Tn(t),t.u&&(a.clearTimeout(t.u),t.u=null),Mn(t),t.h.cancel(),t.s&&("number"===typeof t.s&&a.clearTimeout(t.s),t.s=null)}function kn(t){if(!we(t.h)&&!t.s){t.s=!0;var e=t.Ga;q||G(),W||(q(),W=!0),K.add(e,t),t.B=0}}function xn(t,e){return!(_e(t.h)>=t.h.j-(t.s?1:0))&&(t.s?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.B>=(t.Va?0:t.Wa))&&(t.s=Kt(S(t.Ga,t,e),Fn(t,t.B)),t.B++,!0))}function On(t,e){var n;n=e?e.l:t.U++;const i=De(t.I);Re(i,"SID",t.K),Re(i,"RID",n),Re(i,"AID",t.T),Ln(t,i),t.m&&t.o&&hn(i,t.m,t.o),n=new re(t,t.j,n,t.B+1),null===t.m&&(n.H=t.o),e&&(t.i=e.D.concat(t.i)),e=Dn(t,n,1e3),n.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Se(t.h,n),ce(n,i,e)}function Ln(t,e){t.H&&N(t.H,(function(t,n){Re(e,n,t)})),t.l&&ke({},(function(t,n){Re(e,n,t)}))}function Dn(t,e,n){n=Math.min(t.i.length,n);var i=t.l?S(t.l.Na,t.l,t):null;t:{var r=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=r[o].g;const a=r[o].map;if(n-=e,0>n)e=Math.max(0,r[o].g-100),s=!1;else try{rn(a,t,"req"+n+"_")}catch(_){i&&i(a)}}if(s){i=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,i}function $n(t){if(!t.g&&!t.u){t.Y=1;var e=t.Fa;q||G(),W||(q(),W=!0),K.add(e,t),t.v=0}}function Nn(t){return!(t.g||t.u||3<=t.v)&&(t.Y++,t.u=Kt(S(t.Fa,t),Fn(t,t.v)),t.v++,!0)}function Pn(t){null!=t.A&&(a.clearTimeout(t.A),t.A=null)}function Rn(t){t.g=new re(t,t.j,"rpc",t.Y),null===t.m&&(t.g.H=t.o),t.g.O=0;var e=De(t.qa);Re(e,"RID","rpc"),Re(e,"SID",t.K),Re(e,"AID",t.T),Re(e,"CI",t.F?"0":"1"),!t.F&&t.ja&&Re(e,"TO",t.ja),Re(e,"TYPE","xmlhttp"),Ln(t,e),t.m&&t.o&&hn(e,t.m,t.o),t.L&&(t.g.I=t.L);var n=t.g;t=t.ia,n.L=1,n.v=Me(De(e)),n.m=null,n.P=!0,le(n,t)}function Mn(t){null!=t.C&&(a.clearTimeout(t.C),t.C=null)}function Vn(t,e){var n=null;if(t.g==e){Mn(t),Pn(t),t.g=null;var i=2}else{if(!Ce(t.h,e))return;n=e.D,Ee(t.h,e),i=1}if(0!=t.G)if(e.o)if(1==i){n=e.m?e.m.length:0,e=Date.now()-e.F;var r=t.B;i=jt(),Ct(i,new Wt(i,n)),kn(t)}else $n(t);else if(r=e.s,3==r||0==r&&0<e.X||!(1==i&&xn(t,e)||2==i&&Nn(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Bn(t,5);break;case 4:Bn(t,10);break;case 3:Bn(t,6);break;default:Bn(t,2)}}function Fn(t,e){let n=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(n*=2),n*e}function Bn(t,e){if(t.j.info("Error code "+e),2==e){var n=S(t.fb,t),i=t.Xa;const e=!i;i=new Le(i||"//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||$e(i,"https"),Me(i),e?Ze(i.toString(),n):tn(i.toString(),n)}else qt(2);t.G=0,t.l&&t.l.sa(e),jn(t),In(t)}function jn(t){if(t.G=0,t.ka=[],t.l){const e=Ae(t.h);0==e.length&&0==t.i.length||(k(t.ka,e),k(t.ka,t.i),t.h.i.length=0,I(t.i),t.i.length=0),t.l.ra()}}function Un(t,e,n){var i=n instanceof Le?De(n):new Le(n);if(""!=i.g)e&&(i.g=e+"."+i.g),Ne(i,i.s);else{var r=a.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new Le(null);i&&$e(s,i),e&&(s.g=e),r&&Ne(s,r),n&&(s.l=n),i=s}return n=t.D,e=t.ya,n&&e&&Re(i,n,e),Re(i,"VER",t.la),Ln(t,i),i}function zn(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ca&&!t.pa?new dn(new sn({eb:n})):new dn(t.pa),e.Ha(t.J),e}function Hn(){}function qn(){}function Wn(t,e){_t.call(this),this.g=new En(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.va&&(t?t["X-WebChannel-Client-Profile"]=e.va:t={"X-WebChannel-Client-Profile":e.va}),this.g.S=t,(t=e&&e.Sb)&&!O(t)&&(this.g.m=t),this.v=e&&e.supportsCrossDomainXhr||!1,this.u=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!O(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Qn(this)}function Kn(t){Mt.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Gn(){Vt.call(this),this.status=1}function Qn(t){this.g=t}t=dn.prototype,t.Ha=function(t){this.J=t},t.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():te.g(),this.v=this.o?Nt(this.o):Nt(te),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(s){return void mn(this,s)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!==typeof i.keys||"function"!==typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=a.FormData&&t instanceof a.FormData,!(0<=Array.prototype.indexOf.call(pn,e,void 0))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{bn(this),this.u=!0,this.g.send(t),this.u=!1}catch(s){mn(this,s)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,Ct(this,"complete"),Ct(this,"abort"),yn(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yn(this,!0)),dn.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?vn(this):this.bb())},t.bb=function(){vn(this)},t.isActive=function(){return!!this.g},t.Z=function(){try{return 2<wn(this)?this.g.status:-1}catch(t){return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.Oa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Lt(e)}},t.Ba=function(){return this.m},t.Ka=function(){return"string"===typeof this.l?this.l:String(this.l)},t=En.prototype,t.la=8,t.G=1,t.connect=function(t,e,n,i){qt(0),this.W=t,this.H=e||{},n&&void 0!==i&&(this.H.OSID=n,this.H.OAID=i),this.F=this.X,this.I=Un(this,null,this.W),kn(this)},t.Ga=function(t){if(this.s)if(this.s=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new re(this,this.j,t);let s=this.o;if(this.S&&(s?(s=R(s),V(s,this.S)):s=this.S),null!==this.m||this.O||(r.H=s,s=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var i=this.i[n];if(i="__data__"in i.map&&(i=i.map.__data__,"string"===typeof i)?i.length:void 0,void 0===i)break;if(e+=i,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Dn(this,r,e),n=De(this.I),Re(n,"RID",t),Re(n,"CVER",22),this.D&&Re(n,"X-HTTP-Session-Id",this.D),Ln(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(un(s)))+"&"+e:this.m&&hn(n,this.m,s)),Se(this.h,r),this.Ua&&Re(n,"TYPE","init"),this.P?(Re(n,"$req",e),Re(n,"SID","null"),r.T=!0,ce(r,n,null)):ce(r,n,e),this.G=2}}else 3==this.G&&(t?On(this,t):0==this.i.length||we(this.h)||On(this))},t.Fa=function(){if(this.u=null,Rn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=Kt(S(this.ab,this),t)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,qt(10),Tn(this),Rn(this))},t.Za=function(){null!=this.C&&(this.C=null,Tn(this),Nn(this),qt(19))},t.fb=function(t){t?(this.j.info("Successfully pinged google.com"),qt(2)):(this.j.info("Failed to ping google.com"),qt(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},t=Hn.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){},qn.prototype.g=function(t,e){return new Wn(t,e)},T(Wn,_t),Wn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wn.prototype.close=function(){An(this.g)},Wn.prototype.o=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.u&&(n={},n.__data__=Ot(t),t=n);e.i.push(new ye(e.Ya++,t)),3==e.G&&kn(e)},Wn.prototype.N=function(){this.g.l=null,delete this.j,An(this.g),delete this.g,Wn.aa.N.call(this)},T(Kn,Mt),T(Gn,Vt),T(Qn,Hn),Qn.prototype.ua=function(){Ct(this.g,"a")},Qn.prototype.ta=function(t){Ct(this.g,new Kn(t))},Qn.prototype.sa=function(t){Ct(this.g,new Gn)},Qn.prototype.ra=function(){Ct(this.g,"b")},qn.prototype.createWebChannel=qn.prototype.g,Wn.prototype.send=Wn.prototype.o,Wn.prototype.open=Wn.prototype.m,Wn.prototype.close=Wn.prototype.close,y=w.createWebChannelTransport=function(){return new qn},v=w.getStatEventTarget=function(){return jt()},g=w.Event=Ft,m=w.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ee.NO_ERROR=0,ee.TIMEOUT=8,ee.HTTP_ERROR=6,p=w.ErrorCode=ee,ne.COMPLETE="complete",f=w.EventType=ne,Pt.EventType=Rt,Rt.OPEN="a",Rt.CLOSE="b",Rt.ERROR="c",Rt.MESSAGE="d",_t.prototype.listen=_t.prototype.K,d=w.WebChannel=Pt,w.FetchXmlHttpFactory=sn,dn.prototype.listenOnce=dn.prototype.L,dn.prototype.getLastError=dn.prototype.Ka,dn.prototype.getLastErrorCode=dn.prototype.Ba,dn.prototype.getStatus=dn.prototype.Z,dn.prototype.getResponseJson=dn.prototype.Oa,dn.prototype.getResponseText=dn.prototype.oa,dn.prototype.send=dn.prototype.ea,dn.prototype.setWithCredentials=dn.prototype.Ha,h=w.XhrIo=dn}).apply("undefined"!==typeof b?b:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});const _="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}C.UNAUTHENTICATED=new C(null),C.GOOGLE_CREDENTIALS=new C("google-credentials-uid"),C.FIRST_PARTY=new C("first-party-uid"),C.MOCK_USER=new C("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let S="10.14.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=new a.Vy("@firebase/firestore");function A(){return E.logLevel}function T(t,...e){if(E.logLevel<=a.$b.DEBUG){const n=e.map(x);E.debug(`Firestore (${S}): ${t}`,...n)}}function I(t,...e){if(E.logLevel<=a.$b.ERROR){const n=e.map(x);E.error(`Firestore (${S}): ${t}`,...n)}}function k(t,...e){if(E.logLevel<=a.$b.WARN){const n=e.map(x);E.warn(`Firestore (${S}): ${t}`,...n)}}function x(t){if("string"==typeof t)return t;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t="Unexpected state"){const e=`FIRESTORE (${S}) INTERNAL ASSERTION FAILED: `+t;throw I(e),new Error(e)}function L(t,e){t||O()}function D(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends c.g{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class M{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(C.UNAUTHENTICATED)))}shutdown(){}}class V{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class F{constructor(t){this.t=t,this.currentUser=C.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){L(void 0===this.o);let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new P;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new P,t.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{T("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(T("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new P)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(T("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(L("string"==typeof e.accessToken),new R(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return L(null===t||"string"==typeof t),new C(t)}}class B{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=C.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class j{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new B(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(C.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class U{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class z{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){L(void 0===this.o);const n=t=>{null!=t.error&&T("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,T("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{T("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?i(t):T("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(L("string"==typeof t.token),this.R=t.token,new U(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=H(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function W(t,e){return t<e?-1:t>e?1:0}function K(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new N($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return G.fromMillis(Date.now())}static fromDate(t){return G.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new G(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?W(this.nanoseconds,t.nanoseconds):W(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Q(t)}static min(){return new Q(new G(0,0))}static max(){return new Q(new G(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e,n){void 0===e?e=0:e>t.length&&O(),void 0===n?n=t.length-e:n>t.length-e&&O(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Y.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Y?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class X extends Y{construct(t,e,n){return new X(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new N($.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new X(e)}static emptyPath(){return new X([])}}const J=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Z extends Y{construct(t,e,n){return new Z(t,e,n)}static isValidIdentifier(t){return J.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Z.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Z(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const r=()=>{if(0===n.length)throw new N($.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new N($.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new N($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(s=!s,i++):"."!==e||s?(n+=e,i++):(r(),i++)}if(r(),s)throw new N($.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Z(e)}static emptyPath(){return new Z([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.path=t}static fromPath(t){return new tt(X.fromString(t))}static fromName(t){return new tt(X.fromString(t).popFirst(5))}static empty(){return new tt(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===X.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new tt(new X(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}et.UNKNOWN_ID=-1;function nt(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=Q.fromTimestamp(1e9===i?new G(n+1,0):new G(n,i));return new rt(r,tt.empty(),e)}function it(t){return new rt(t.readTime,t.key,-1)}class rt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new rt(Q.min(),tt.empty(),-1)}static max(){return new rt(Q.max(),tt.empty(),-1)}}function st(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=tt.comparator(t.documentKey,e.documentKey),0!==n?n:W(t.largestBatchId,e.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const ot="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class at{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ct(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==ot)throw t;T("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new lt(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof lt?e:lt.resolve(e)}catch(t){return lt.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):lt.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):lt.reject(e)}static resolve(t){return new lt(((e,n)=>{e(t)}))}static reject(t){return new lt(((e,n)=>{n(t)}))}static waitFor(t){return new lt(((e,n)=>{let i=0,r=0,s=!1;t.forEach((t=>{++i,t.next((()=>{++r,s&&r===i&&e()}),(t=>n(t)))})),s=!0,r===i&&e()}))}static or(t){let e=lt.resolve(!1);for(const n of t)e=e.next((t=>t?lt.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new lt(((n,i)=>{const r=t.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===r&&n(s)}),(t=>i(t)))}}))}static doWhile(t,e){return new lt(((n,i)=>{const r=()=>{!0===t()?e().next((()=>{r()}),i):n()};r()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ht(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ie(t),this.se=t=>e.writeSequenceNumber(t))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}function ft(t){return null==t}function pt(t){return 0===t&&1/t==-1/0}function mt(t){return"number"==typeof t&&Number.isInteger(t)&&!pt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dt.oe=-1;const gt=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],vt=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],yt=vt,bt=[...yt,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wt(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _t(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ct(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t,e){this.comparator=t,this.root=e||At.EMPTY}insert(t,e){return new St(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,At.BLACK,null,null))}remove(t){return new St(this.comparator,this.root.remove(t,this.comparator).copy(null,null,At.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Et(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Et(this.root,t,this.comparator,!1)}getReverseIterator(){return new Et(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Et(this.root,t,this.comparator,!0)}}class Et{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class At{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:At.RED,this.left=null!=i?i:At.EMPTY,this.right=null!=r?r:At.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new At(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return At.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return At.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,At.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,At.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw O();if(this.right.isRed())throw O();const t=this.left.check();if(t!==this.right.check())throw O();return t+(this.isRed()?0:1)}}At.EMPTY=null,At.RED=!0,At.BLACK=!1,At.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,n,i,r){return this}insert(t,e,n){return new At(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tt{constructor(t){this.comparator=t,this.data=new St(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new It(this.data.getIterator())}getIteratorFrom(t){return new It(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Tt))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Tt(this.comparator);return e.data=t,e}}class It{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt{constructor(t){this.fields=t,t.sort(Z.comparator)}static empty(){return new kt([])}unionWith(t){let e=new Tt(Z.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new kt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return K(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ot{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new xt("Invalid base64 string: "+t):t}}(t);return new Ot(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Ot(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return W(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const Lt=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dt(t){if(L(!!t),"string"==typeof t){let e=0;const n=Lt.exec(t);if(L(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:$t(t.seconds),nanos:$t(t.nanos)}}function $t(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Nt(t){return"string"==typeof t?Ot.fromBase64String(t):Ot.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Rt(t){const e=t.mapValue.fields.__previous_value__;return Pt(e)?Rt(e):e}function Mt(t){const e=Dt(t.mapValue.fields.__local_write_time__.timestampValue);return new G(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t,e,n,i,r,s,o,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class Ft{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Ft("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ft&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function jt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Pt(t)?4:ne(t)?9007199254740991:te(t)?10:11:O()}function Ut(t,e){if(t===e)return!0;const n=jt(t);if(n!==jt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Mt(t).isEqual(Mt(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Dt(t.timestampValue),i=Dt(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Nt(t.bytesValue).isEqual(Nt(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return $t(t.geoPointValue.latitude)===$t(e.geoPointValue.latitude)&&$t(t.geoPointValue.longitude)===$t(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return $t(t.integerValue)===$t(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=$t(t.doubleValue),i=$t(e.doubleValue);return n===i?pt(n)===pt(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return K(t.arrayValue.values||[],e.arrayValue.values||[],Ut);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(wt(n)!==wt(i))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===i[r]||!Ut(n[r],i[r])))return!1;return!0}(t,e);default:return O()}}function zt(t,e){return void 0!==(t.values||[]).find((t=>Ut(t,e)))}function Ht(t,e){if(t===e)return 0;const n=jt(t),i=jt(e);if(n!==i)return W(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return W(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=$t(t.integerValue||t.doubleValue),i=$t(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return qt(t.timestampValue,e.timestampValue);case 4:return qt(Mt(t),Mt(e));case 5:return W(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Nt(t),i=Nt(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let r=0;r<n.length&&r<i.length;r++){const t=W(n[r],i[r]);if(0!==t)return t}return W(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=W($t(t.latitude),$t(e.latitude));return 0!==n?n:W($t(t.longitude),$t(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Wt(t.arrayValue,e.arrayValue);case 10:return function(t,e){var n,i,r,s;const o=t.fields||{},a=e.fields||{},c=null===(n=o.value)||void 0===n?void 0:n.arrayValue,l=null===(i=a.value)||void 0===i?void 0:i.arrayValue,u=W((null===(r=null==c?void 0:c.values)||void 0===r?void 0:r.length)||0,(null===(s=null==l?void 0:l.values)||void 0===s?void 0:s.length)||0);return 0!==u?u:Wt(c,l)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===Bt.mapValue&&e===Bt.mapValue)return 0;if(t===Bt.mapValue)return 1;if(e===Bt.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let o=0;o<i.length&&o<s.length;++o){const t=W(i[o],s[o]);if(0!==t)return t;const e=Ht(n[i[o]],r[s[o]]);if(0!==e)return e}return W(i.length,s.length)}(t.mapValue,e.mapValue);default:throw O()}}function qt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return W(t,e);const n=Dt(t),i=Dt(e),r=W(n.seconds,i.seconds);return 0!==r?r:W(n.nanos,i.nanos)}function Wt(t,e){const n=t.values||[],i=e.values||[];for(let r=0;r<n.length&&r<i.length;++r){const t=Ht(n[r],i[r]);if(t)return t}return W(n.length,i.length)}function Kt(t){return Gt(t)}function Gt(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Dt(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return Nt(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return tt.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=Gt(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const r of e)i?i=!1:n+=",",n+=`${r}:${Gt(t.fields[r])}`;return n+"}"}(t.mapValue):O()}function Qt(t){return!!t&&"integerValue"in t}function Yt(t){return!!t&&"arrayValue"in t}function Xt(t){return!!t&&"nullValue"in t}function Jt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Zt(t){return!!t&&"mapValue"in t}function te(t){var e,n;return"__vector__"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ee(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return _t(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=ee(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ee(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ne(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ie{constructor(t){this.value=t}static empty(){return new ie({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Zt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ee(e)}setAll(t){let e=Z.emptyPath(),n={},i=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=ee(t):i.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){const e=this.field(t.popLast());Zt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ut(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Zt(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){_t(e,((e,n)=>t[e]=n));for(const i of n)delete t[i]}clone(){return new ie(ee(this.value))}}function re(t){const e=[];return _t(t.fields,((t,n)=>{const i=new Z([t]);if(Zt(n)){const t=re(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new kt(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class se{constructor(t,e,n,i,r,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=o}static newInvalidDocument(t){return new se(t,0,Q.min(),Q.min(),Q.min(),ie.empty(),0)}static newFoundDocument(t,e,n,i){return new se(t,1,e,Q.min(),n,i,0)}static newNoDocument(t,e){return new se(t,2,e,Q.min(),Q.min(),ie.empty(),0)}static newUnknownDocument(t,e){return new se(t,3,e,Q.min(),Q.min(),ie.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Q.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ie.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ie.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof se&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new se(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(t,e){this.position=t,this.inclusive=e}}function ae(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(i=s.field.isKeyField()?tt.comparator(tt.fromName(o.referenceValue),n.key):Ht(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function ce(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ut(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t,e="asc"){this.field=t,this.dir=e}}function ue(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{}class de extends he{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new we(t,e,n):"array-contains"===e?new Ee(t,n):"in"===e?new Ae(t,n):"not-in"===e?new Te(t,n):"array-contains-any"===e?new Ie(t,n):new de(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new _e(t,n):new Ce(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Ht(e,this.value)):null!==e&&jt(this.value)===jt(e)&&this.matchesComparison(Ht(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fe extends he{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new fe(t,e)}matches(t){return pe(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function pe(t){return"and"===t.op}function me(t){return ge(t)&&pe(t)}function ge(t){for(const e of t.filters)if(e instanceof fe)return!1;return!0}function ve(t){if(t instanceof de)return t.field.canonicalString()+t.op.toString()+Kt(t.value);if(me(t))return t.filters.map((t=>ve(t))).join(",");{const e=t.filters.map((t=>ve(t))).join(",");return`${t.op}(${e})`}}function ye(t,e){return t instanceof de?function(t,e){return e instanceof de&&t.op===e.op&&t.field.isEqual(e.field)&&Ut(t.value,e.value)}(t,e):t instanceof fe?function(t,e){return e instanceof fe&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,i)=>t&&ye(n,e.filters[i])),!0)}(t,e):void O()}function be(t){return t instanceof de?function(t){return`${t.field.canonicalString()} ${t.op} ${Kt(t.value)}`}(t):t instanceof fe?function(t){return t.op.toString()+" {"+t.getFilters().map(be).join(" ,")+"}"}(t):"Filter"}class we extends de{constructor(t,e,n){super(t,e,n),this.key=tt.fromName(n.referenceValue)}matches(t){const e=tt.comparator(t.key,this.key);return this.matchesComparison(e)}}class _e extends de{constructor(t,e){super(t,"in",e),this.keys=Se("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Ce extends de{constructor(t,e){super(t,"not-in",e),this.keys=Se("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Se(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>tt.fromName(t.referenceValue)))}class Ee extends de{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Yt(e)&&zt(e.arrayValue,this.value)}}class Ae extends de{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&zt(this.value.arrayValue,e)}}class Te extends de{constructor(t,e){super(t,"not-in",e)}matches(t){if(zt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!zt(this.value.arrayValue,e)}}class Ie extends de{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Yt(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>zt(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t,e=null,n=[],i=[],r=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.ue=null}}function xe(t,e=null,n=[],i=[],r=null,s=null,o=null){return new ke(t,e,n,i,r,s,o)}function Oe(t){const e=D(t);if(null===e.ue){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>ve(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),ft(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Kt(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Kt(t))).join(",")),e.ue=t}return e.ue}function Le(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ue(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ye(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ce(t.startAt,e.startAt)&&ce(t.endAt,e.endAt)}function De(t){return tt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $e{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Ne(t,e,n,i,r,s,o,a){return new $e(t,e,n,i,r,s,o,a)}function Pe(t){return new $e(t)}function Re(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Me(t){return null!==t.collectionGroup}function Ve(t){const e=D(t);if(null===e.ce){e.ce=[];const t=new Set;for(const r of e.explicitOrderBy)e.ce.push(r),t.add(r.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",i=function(t){let e=new Tt(Z.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);i.forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new le(i,n))})),t.has(Z.keyField().canonicalString())||e.ce.push(new le(Z.keyField(),n))}return e.ce}function Fe(t){const e=D(t);return e.le||(e.le=Be(e,Ve(t))),e.le}function Be(t,e){if("F"===t.limitType)return xe(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new le(t.field,e)}));const n=t.endAt?new oe(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new oe(t.startAt.position,t.startAt.inclusive):null;return xe(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function je(t,e,n){return new $e(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ue(t,e){return Le(Fe(t),Fe(e))&&t.limitType===e.limitType}function ze(t){return`${Oe(Fe(t))}|lt:${t.limitType}`}function He(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>be(t))).join(", ")}]`),ft(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Kt(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Kt(t))).join(",")),`Target(${e})`}(Fe(t))}; limitType=${t.limitType})`}function qe(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):tt.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Ve(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const i=ae(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,Ve(t),e))&&!(t.endAt&&!function(t,e,n){const i=ae(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,Ve(t),e))}(t,e)}function We(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ke(t){return(e,n)=>{let i=!1;for(const r of Ve(t)){const t=Ge(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0}}function Ge(t,e,n){const i=t.field.isKeyField()?tt.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?Ht(i,r):O()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return O()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[i,r]of n)if(this.equalsFn(i,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){_t(this.inner,((e,n)=>{for(const[i,r]of n)t(i,r)}))}isEmpty(){return Ct(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye=new St(tt.comparator);function Xe(){return Ye}const Je=new St(tt.comparator);function Ze(...t){let e=Je;for(const n of t)e=e.insert(n.key,n);return e}function tn(t){let e=Je;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function en(){return rn()}function nn(){return rn()}function rn(){return new Qe((t=>t.toString()),((t,e)=>t.isEqual(e)))}const sn=new St(tt.comparator),on=new Tt(tt.comparator);function an(...t){let e=on;for(const n of t)e=e.add(n);return e}const cn=new Tt(W);function ln(){return cn}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pt(e)?"-0":e}}function hn(t){return{integerValue:""+t}}function dn(t,e){return mt(e)?hn(e):un(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(){this._=void 0}}function pn(t,e,n){return t instanceof vn?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Pt(e)&&(e=Rt(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof yn?bn(t,e):t instanceof wn?_n(t,e):function(t,e){const n=gn(t,e),i=Sn(n)+Sn(t.Pe);return Qt(n)&&Qt(t.Pe)?hn(i):un(t.serializer,i)}(t,e)}function mn(t,e,n){return t instanceof yn?bn(t,e):t instanceof wn?_n(t,e):n}function gn(t,e){return t instanceof Cn?function(t){return Qt(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class vn extends fn{}class yn extends fn{constructor(t){super(),this.elements=t}}function bn(t,e){const n=En(e);for(const i of t.elements)n.some((t=>Ut(t,i)))||n.push(i);return{arrayValue:{values:n}}}class wn extends fn{constructor(t){super(),this.elements=t}}function _n(t,e){let n=En(e);for(const i of t.elements)n=n.filter((t=>!Ut(t,i)));return{arrayValue:{values:n}}}class Cn extends fn{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Sn(t){return $t(t.integerValue||t.doubleValue)}function En(t){return Yt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof yn&&e instanceof yn||t instanceof wn&&e instanceof wn?K(t.elements,e.elements,Ut):t instanceof Cn&&e instanceof Cn?Ut(t.Pe,e.Pe):t instanceof vn&&e instanceof vn}(t.transform,e.transform)}class Tn{constructor(t,e){this.version=t,this.transformResults=e}}class In{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new In}static exists(t){return new In(void 0,t)}static updateTime(t){return new In(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function kn(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class xn{}function On(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Bn(t.key,In.none()):new Pn(t.key,t.data,In.none());{const n=t.data,i=ie.empty();let r=new Tt(Z.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),r=r.add(t)}return new Rn(t.key,i,new kt(r.toArray()),In.none())}}function Ln(t,e,n){t instanceof Pn?function(t,e,n){const i=t.value.clone(),r=Vn(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof Rn?function(t,e,n){if(!kn(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=Vn(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(Mn(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Dn(t,e,n,i){return t instanceof Pn?function(t,e,n,i){if(!kn(t.precondition,e))return n;const r=t.value.clone(),s=Fn(t.fieldTransforms,i,e);return r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,i):t instanceof Rn?function(t,e,n,i){if(!kn(t.precondition,e))return n;const r=Fn(t.fieldTransforms,i,e),s=e.data;return s.setAll(Mn(t)),s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):function(t,e,n){return kn(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function $n(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),r=gn(i.transform,t||null);null!=r&&(null===n&&(n=ie.empty()),n.set(i.field,r))}return n||null}function Nn(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&K(t,e,((t,e)=>An(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Pn extends xn{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Rn extends xn{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Mn(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function Vn(t,e,n){const i=new Map;L(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,mn(o,a,n[r]))}return i}function Fn(t,e,n){const i=new Map;for(const r of t){const t=r.transform,s=n.data.field(r.field);i.set(r.field,pn(t,s,e))}return i}class Bn extends xn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jn extends xn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const e=this.mutations[i];e.key.isEqual(t.key)&&Ln(e,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Dn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Dn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=nn();return this.mutations.forEach((i=>{const r=t.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=e.has(i.key)?null:o;const a=On(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(Q.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),an())}isEqual(t){return this.batchId===t.batchId&&K(this.mutations,t.mutations,((t,e)=>Nn(t,e)))&&K(this.baseMutations,t.baseMutations,((t,e)=>Nn(t,e)))}}class zn{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){L(t.mutations.length===n.length);let i=function(){return sn}();const r=t.mutations;for(let s=0;s<r.length;s++)i=i.insert(r[s].key,n[s].version);return new zn(t,e,n,i)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qn{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wn,Kn;function Gn(t){switch(t){default:return O();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function Qn(t){if(void 0===t)return I("GRPC error has no .code"),$.UNKNOWN;switch(t){case Wn.OK:return $.OK;case Wn.CANCELLED:return $.CANCELLED;case Wn.UNKNOWN:return $.UNKNOWN;case Wn.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Wn.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Wn.INTERNAL:return $.INTERNAL;case Wn.UNAVAILABLE:return $.UNAVAILABLE;case Wn.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Wn.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Wn.NOT_FOUND:return $.NOT_FOUND;case Wn.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Wn.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Wn.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Wn.ABORTED:return $.ABORTED;case Wn.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Wn.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Wn.DATA_LOSS:return $.DATA_LOSS;default:return O()}}(Kn=Wn||(Wn={}))[Kn.OK=0]="OK",Kn[Kn.CANCELLED=1]="CANCELLED",Kn[Kn.UNKNOWN=2]="UNKNOWN",Kn[Kn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Kn[Kn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Kn[Kn.NOT_FOUND=5]="NOT_FOUND",Kn[Kn.ALREADY_EXISTS=6]="ALREADY_EXISTS",Kn[Kn.PERMISSION_DENIED=7]="PERMISSION_DENIED",Kn[Kn.UNAUTHENTICATED=16]="UNAUTHENTICATED",Kn[Kn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Kn[Kn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Kn[Kn.ABORTED=10]="ABORTED",Kn[Kn.OUT_OF_RANGE=11]="OUT_OF_RANGE",Kn[Kn.UNIMPLEMENTED=12]="UNIMPLEMENTED",Kn[Kn.INTERNAL=13]="INTERNAL",Kn[Kn.UNAVAILABLE=14]="UNAVAILABLE",Kn[Kn.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Yn=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=new i([4294967295,4294967295],0);function Zn(t){const e=Xn().encode(t),n=new r;return n.update(e),new Uint8Array(n.digest())}function ti(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new i([n,r],0),new i([s,o],0)]}class ei{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new ni(`Invalid padding: ${e}`);if(n<0)throw new ni(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new ni(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new ni(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=i.fromNumber(this.Ie)}Ee(t,e,n){let r=t.add(e.multiply(i.fromNumber(n)));return 1===r.compare(Jn)&&(r=new i([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.Ie)return!1;const e=Zn(t),[n,i]=ti(e);for(let r=0;r<this.hashCount;r++){const t=this.Ee(n,i,r);if(!this.de(t))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),s=new ei(r,i,e);return n.forEach((t=>s.insert(t))),s}insert(t){if(0===this.Ie)return;const e=Zn(t),[n,i]=ti(e);for(let r=0;r<this.hashCount;r++){const t=this.Ee(n,i,r);this.Ae(t)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class ni extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(t,e,n,i,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,ri.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new ii(Q.min(),i,new St(W),Xe(),an())}}class ri{constructor(t,e,n,i,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new ri(n,e,an(),an(),an())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t,e,n,i){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=i}}class oi{constructor(t,e){this.targetId=t,this.me=e}}class ai{constructor(t,e,n=Ot.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class ci{constructor(){this.fe=0,this.ge=hi(),this.pe=Ot.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=an(),e=an(),n=an();return this.ge.forEach(((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:O()}})),new ri(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=hi()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,L(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class li{constructor(t){this.Le=t,this.Be=new Map,this.ke=Xe(),this.qe=ui(),this.Qe=new St(W)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,(e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:O()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach(((t,n)=>{this.ze(n)&&e(n)}))}He(t){const e=t.targetId,n=t.me.count,i=this.Je(e);if(i){const r=i.target;if(De(r))if(0===n){const t=new tt(r.path);this.Ue(e,t,se.newNoDocument(t,Q.min()))}else L(1===n);else{const i=this.Ye(e);if(i!==n){const n=this.Ze(t),r=n?this.Xe(n,t,i):1;if(0!==r){this.je(e);const t=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,t)}null==Yn||Yn.et(function(t,e,n,i,r){var s,o,a,c,l,u;const h={localCacheCount:t,existenceFilterCount:e.count,databaseId:n.database,projectId:n.projectId},d=e.unchangedNames;return d&&(h.bloomFilter={applied:0===r,hashCount:null!==(s=null==d?void 0:d.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(c=null===(a=null===(o=null==d?void 0:d.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==c?c:0,padding:null!==(u=null===(l=null==d?void 0:d.bits)||void 0===l?void 0:l.padding)&&void 0!==u?u:0,mightContain:t=>{var e;return null!==(e=null==i?void 0:i.mightContain(t))&&void 0!==e&&e}}),h}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i,t.me,this.Le.tt(),n,r))}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:r=0}=e;let s,o;try{s=Nt(n).toUint8Array()}catch(t){if(t instanceof xt)return k("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{o=new ei(s,i,r)}catch(t){return k(t instanceof ni?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===o.Ie?null:o}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let i=0;return n.forEach((n=>{const r=this.Le.tt(),s=`projects/${r.projectId}/databases/${r.database}/documents/${n.path.canonicalString()}`;t.mightContain(s)||(this.Ue(e,n,null),i++)})),i}rt(t){const e=new Map;this.Be.forEach(((n,i)=>{const r=this.Je(i);if(r){if(n.current&&De(r.target)){const e=new tt(r.target.path);null!==this.ke.get(e)||this.it(i,e)||this.Ue(i,e,se.newNoDocument(e,t))}n.be&&(e.set(i,n.ve()),n.Ce())}}));let n=an();this.qe.forEach(((t,e)=>{let i=!0;e.forEachWhile((t=>{const e=this.Je(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(i=!1,!1)})),i&&(n=n.add(t))})),this.ke.forEach(((e,n)=>n.setReadTime(t)));const i=new ii(t,e,this.Qe,this.ke,n);return this.ke=Xe(),this.qe=ui(),this.Qe=new St(W),i}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new ci,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new Tt(W),this.qe=this.qe.insert(t,e)),e}ze(t){const e=null!==this.Je(t);return e||T("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new ci),this.Le.getRemoteKeysForTarget(t).forEach((e=>{this.Ue(t,e,null)}))}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function ui(){return new St(tt.comparator)}function hi(){return new St(tt.comparator)}const di=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),fi=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),pi=(()=>{const t={and:"AND",or:"OR"};return t})();class mi{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function gi(t,e){return t.useProto3Json||ft(e)?e:{value:e}}function vi(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yi(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function bi(t,e){return vi(t,e.toTimestamp())}function wi(t){return L(!!t),Q.fromTimestamp(function(t){const e=Dt(t);return new G(e.seconds,e.nanos)}(t))}function _i(t,e){return Ci(t,e).canonicalString()}function Ci(t,e){const n=function(t){return new X(["projects",t.projectId,"databases",t.database])}(t).child("documents");return void 0===e?n:n.child(e)}function Si(t){const e=X.fromString(t);return L(Wi(e)),e}function Ei(t,e){return _i(t.databaseId,e.path)}function Ai(t,e){const n=Si(e);if(n.get(1)!==t.databaseId.projectId)throw new N($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new N($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new tt(xi(n))}function Ti(t,e){return _i(t.databaseId,e)}function Ii(t){const e=Si(t);return 4===e.length?X.emptyPath():xi(e)}function ki(t){return new X(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function xi(t){return L(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Oi(t,e,n){return{name:Ei(t,e),fields:n.value.mapValue.fields}}function Li(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:O()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(t,e){return t.useProto3Json?(L(void 0===e||"string"==typeof e),Ot.fromBase64String(e||"")):(L(void 0===e||e instanceof Buffer||e instanceof Uint8Array),Ot.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?$.UNKNOWN:Qn(t.code);return new N(e,t.message||"")}(o);n=new ai(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=Ai(t,i.document.name),s=wi(i.document.updateTime),o=i.document.createTime?wi(i.document.createTime):Q.min(),a=new ie({mapValue:{fields:i.document.fields}}),c=se.newFoundDocument(r,s,o,a),l=i.targetIds||[],u=i.removedTargetIds||[];n=new si(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=Ai(t,i.document),s=i.readTime?wi(i.readTime):Q.min(),o=se.newNoDocument(r,s),a=i.removedTargetIds||[];n=new si([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=Ai(t,i.document),s=i.removedTargetIds||[];n=new si([],s,r,null)}else{if(!("filter"in e))return O();{e.filter;const t=e.filter;t.targetId;const{count:i=0,unchangedNames:r}=t,s=new qn(i,r),o=t.targetId;n=new oi(o,s)}}return n}function Di(t,e){let n;if(e instanceof Pn)n={update:Oi(t,e.key,e.value)};else if(e instanceof Bn)n={delete:Ei(t,e.key)};else if(e instanceof Rn)n={update:Oi(t,e.key,e.data),updateMask:qi(e.fieldMask)};else{if(!(e instanceof jn))return O();n={verify:Ei(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof vn)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof yn)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof wn)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Cn)return{fieldPath:e.field.canonicalString(),increment:n.Pe};throw O()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:bi(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:O()}(t,e.precondition)),n}function $i(t,e){return t&&t.length>0?(L(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?wi(t.updateTime):wi(e);return n.isEqual(Q.min())&&(n=wi(e)),new Tn(n,t.transformResults||[])}(t,e)))):[]}function Ni(t,e){return{documents:[Ti(t,e.path)]}}function Pi(t,e){const n={structuredQuery:{}},i=e.path;let r;null!==e.collectionGroup?(r=i,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=Ti(t,r);const s=function(t){if(0!==t.length)return Hi(fe.create(t,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Ui(t.field),direction:Fi(t.dir)}}(t)))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=gi(t,e.limit);return null!==a&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),{_t:n,parent:r}}function Ri(t){let e=Ii(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){L(1===i);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=Vi(t);return e instanceof fe&&me(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new le(zi(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,ft(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new oe(n,e)}(n.startAt));let l=null;return n.endAt&&(l=function(t){const e=!t.before,n=t.values||[];return new oe(n,e)}(n.endAt)),Ne(e,r,o,s,a,"F",c,l)}function Mi(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function Vi(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=zi(t.unaryFilter.field);return de.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=zi(t.unaryFilter.field);return de.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=zi(t.unaryFilter.field);return de.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=zi(t.unaryFilter.field);return de.create(r,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(t):void 0!==t.fieldFilter?function(t){return de.create(zi(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return fe.create(t.compositeFilter.filters.map((t=>Vi(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return O()}}(t.compositeFilter.op))}(t):O()}function Fi(t){return di[t]}function Bi(t){return fi[t]}function ji(t){return pi[t]}function Ui(t){return{fieldPath:t.canonicalString()}}function zi(t){return Z.fromServerFormat(t.fieldPath)}function Hi(t){return t instanceof de?function(t){if("=="===t.op){if(Jt(t.value))return{unaryFilter:{field:Ui(t.field),op:"IS_NAN"}};if(Xt(t.value))return{unaryFilter:{field:Ui(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Jt(t.value))return{unaryFilter:{field:Ui(t.field),op:"IS_NOT_NAN"}};if(Xt(t.value))return{unaryFilter:{field:Ui(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ui(t.field),op:Bi(t.op),value:t.value}}}(t):t instanceof fe?function(t){const e=t.getFilters().map((t=>Hi(t)));return 1===e.length?e[0]:{compositeFilter:{op:ji(t.op),filters:e}}}(t):O()}function qi(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Wi(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(t,e,n,i,r=Q.min(),s=Q.min(),o=Ot.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new Ki(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ki(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ki(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ki(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(t){this.ct=t}}function Qi(t){const e=Ri({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?je(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yi{constructor(){}It(t,e){this.Tt(t,e),e.Et()}Tt(t,e){if("nullValue"in t)this.dt(e,5);else if("booleanValue"in t)this.dt(e,10),e.At(t.booleanValue?1:0);else if("integerValue"in t)this.dt(e,15),e.At($t(t.integerValue));else if("doubleValue"in t){const n=$t(t.doubleValue);isNaN(n)?this.dt(e,13):(this.dt(e,15),pt(n)?e.At(0):e.At(n))}else if("timestampValue"in t){let n=t.timestampValue;this.dt(e,20),"string"==typeof n&&(n=Dt(n)),e.Rt(`${n.seconds||""}`),e.At(n.nanos||0)}else if("stringValue"in t)this.Vt(t.stringValue,e),this.ft(e);else if("bytesValue"in t)this.dt(e,30),e.gt(Nt(t.bytesValue)),this.ft(e);else if("referenceValue"in t)this.yt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.dt(e,45),e.At(n.latitude||0),e.At(n.longitude||0)}else"mapValue"in t?ne(t)?this.dt(e,Number.MAX_SAFE_INTEGER):te(t)?this.wt(t.mapValue,e):(this.St(t.mapValue,e),this.ft(e)):"arrayValue"in t?(this.bt(t.arrayValue,e),this.ft(e)):O()}Vt(t,e){this.dt(e,25),this.Dt(t,e)}Dt(t,e){e.Rt(t)}St(t,e){const n=t.fields||{};this.dt(e,55);for(const i of Object.keys(n))this.Vt(i,e),this.Tt(n[i],e)}wt(t,e){var n,i;const r=t.fields||{};this.dt(e,53);const s="value",o=(null===(i=null===(n=r[s].arrayValue)||void 0===n?void 0:n.values)||void 0===i?void 0:i.length)||0;this.dt(e,15),e.At($t(o)),this.Vt(s,e),this.Tt(r[s],e)}bt(t,e){const n=t.values||[];this.dt(e,50);for(const i of n)this.Tt(i,e)}yt(t,e){this.dt(e,37),tt.fromName(t).path.forEach((t=>{this.dt(e,60),this.Dt(t,e)}))}dt(t,e){t.At(e)}ft(t){t.At(2)}}Yi.vt=new Yi;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xi{constructor(){this.un=new Ji}addToCollectionParentIndex(t,e){return this.un.add(e),lt.resolve()}getCollectionParents(t,e){return lt.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return lt.resolve()}deleteFieldIndex(t,e){return lt.resolve()}deleteAllFieldIndexes(t){return lt.resolve()}createTargetIndexes(t,e){return lt.resolve()}getDocumentsMatchingTarget(t,e){return lt.resolve(null)}getIndexType(t,e){return lt.resolve(0)}getFieldIndexes(t,e){return lt.resolve([])}getNextCollectionGroupToUpdate(t){return lt.resolve(null)}getMinOffset(t,e){return lt.resolve(rt.min())}getMinOffsetFromCollectionGroup(t,e){return lt.resolve(rt.min())}updateCollectionGroup(t,e,n){return lt.resolve()}updateIndexEntries(t,e){return lt.resolve()}}class Ji{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new Tt(X.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new Tt(X.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Zi{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Zi(t,Zi.DEFAULT_COLLECTION_PERCENTILE,Zi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zi.DEFAULT_COLLECTION_PERCENTILE=10,Zi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Zi.DEFAULT=new Zi(41943040,Zi.DEFAULT_COLLECTION_PERCENTILE,Zi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Zi.DISABLED=new Zi(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tr{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new tr(0)}static kn(){return new tr(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class er{constructor(){this.changes=new Qe((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,se.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?lt.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nr{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Dn(n.mutation,t,kt.empty(),G.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,an()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=an()){const i=en();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=Ze();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=en();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,an())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let r=Xe();const s=rn(),o=function(){return rn()}();return e.forEach(((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof Rn)?r=r.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),Dn(o.mutation,e,o.mutation.getFieldMask(),G.now())):s.set(e.key,kt.empty())})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new nr(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=rn();let i=new St(((t,e)=>t-e)),r=an();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||kt.empty();o=r.applyToLocalView(s,o),n.set(t,o);const a=(i.get(r.batchId)||an()).add(t);i=i.insert(r.batchId,a)}))})).next((()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,c=i.value,l=nn();c.forEach((t=>{if(!r.has(t)){const i=On(e.get(t),n.get(t));null!==i&&l.set(t,i),r=r.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,l))}return lt.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,i){return function(t){return tt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Me(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-r.size):lt.resolve(en());let o=-1,a=r;return s.next((e=>lt.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?lt.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,an()))).next((t=>({batchId:o,changes:tn(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new tt(e)).next((t=>{let e=Ze();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const r=e.collectionGroup;let s=Ze();return this.indexManager.getCollectionParents(t,r).next((o=>lt.forEach(o,(o=>{const a=function(t,e){return new $e(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(r));return this.getDocumentsMatchingCollectionQuery(t,a,n,i).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r,i)))).next((t=>{r.forEach(((e,n)=>{const i=n.getKey();null===t.get(i)&&(t=t.insert(i,se.newInvalidDocument(i)))}));let n=Ze();return t.forEach(((t,i)=>{const s=r.get(t);void 0!==s&&Dn(s.mutation,i,kt.empty(),G.now()),qe(e,i)&&(n=n.insert(t,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return lt.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:wi(t.createTime)}}(e)),lt.resolve()}getNamedQuery(t,e){return lt.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(t){return{name:t.name,query:Qi(t.bundledQuery),readTime:wi(t.readTime)}}(e)),lt.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(){this.overlays=new St(tt.comparator),this.Ir=new Map}getOverlay(t,e){return lt.resolve(this.overlays.get(e))}getOverlays(t,e){const n=en();return lt.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.ht(t,e,i)})),lt.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Ir.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.Ir.delete(n)),lt.resolve()}getOverlaysForCollection(t,e,n){const i=en(),r=e.length+1,s=new tt(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===r&&t.largestBatchId>n&&i.set(t.getKey(),t)}return lt.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let r=new St(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=en(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=en(),a=r.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=i)break;return lt.resolve(o)}ht(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.Ir.get(i.largestBatchId).delete(n.key);this.Ir.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Hn(e,n));let r=this.Ir.get(e);void 0===r&&(r=an(),this.Ir.set(e,r)),this.Ir.set(e,r.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(){this.sessionToken=Ot.EMPTY_BYTE_STRING}getSessionToken(t){return lt.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,lt.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this.Tr=new Tt(cr.Er),this.dr=new Tt(cr.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const n=new cr(t,e);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Vr(new cr(t,e))}mr(t,e){t.forEach((t=>this.removeReference(t,e)))}gr(t){const e=new tt(new X([])),n=new cr(e,t),i=new cr(e,t+1),r=[];return this.dr.forEachInRange([n,i],(t=>{this.Vr(t),r.push(t.key)})),r}pr(){this.Tr.forEach((t=>this.Vr(t)))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new tt(new X([])),n=new cr(e,t),i=new cr(e,t+1);let r=an();return this.dr.forEachInRange([n,i],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new cr(t,0),n=this.Tr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class cr{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return tt.comparator(t.key,e.key)||W(t.wr,e.wr)}static Ar(t,e){return W(t.wr,e.wr)||tt.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new Tt(cr.Er)}checkEmpty(t){return lt.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const r=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Un(r,e,n,i);this.mutationQueue.push(s);for(const o of i)this.br=this.br.add(new cr(o.key,r)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return lt.resolve(s)}lookupMutationBatch(t,e){return lt.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.vr(n),r=i<0?0:i;return lt.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return lt.resolve(0===this.mutationQueue.length?-1:this.Sr-1)}getAllMutationBatches(t){return lt.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new cr(e,0),i=new cr(e,Number.POSITIVE_INFINITY),r=[];return this.br.forEachInRange([n,i],(t=>{const e=this.Dr(t.wr);r.push(e)})),lt.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Tt(W);return e.forEach((t=>{const e=new cr(t,0),i=new cr(t,Number.POSITIVE_INFINITY);this.br.forEachInRange([e,i],(t=>{n=n.add(t.wr)}))})),lt.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let r=n;tt.isDocumentKey(r)||(r=r.child(""));const s=new cr(new tt(r),0);let o=new Tt(W);return this.br.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.wr)),!0)}),s),lt.resolve(this.Cr(o))}Cr(t){const e=[];return t.forEach((t=>{const n=this.Dr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){L(0===this.Fr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.br;return lt.forEach(e.mutations,(i=>{const r=new cr(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.br=n}))}On(t){}containsKey(t,e){const n=new cr(e,0),i=this.br.firstAfterOrEqual(n);return lt.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,lt.resolve()}Fr(t,e){return this.vr(t)}vr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t){this.Mr=t,this.docs=function(){return new St(tt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),r=i?i.size:0,s=this.Mr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return lt.resolve(n?n.document.mutableCopy():se.newInvalidDocument(e))}getEntries(t,e){let n=Xe();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():se.newInvalidDocument(t))})),lt.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let r=Xe();const s=e.path,o=new tt(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||st(it(o),n)<=0||(i.has(o.key)||qe(e,o))&&(r=r.insert(o.key,o.mutableCopy()))}return lt.resolve(r)}getAllFromCollectionGroup(t,e,n,i){O()}Or(t,e){return lt.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new hr(this)}getSize(t){return lt.resolve(this.size)}}class hr extends er{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(n)})),lt.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t){this.persistence=t,this.Nr=new Qe((t=>Oe(t)),Le),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ar,this.targetCount=0,this.kr=tr.Bn()}forEachTarget(t,e){return this.Nr.forEach(((t,n)=>e(n))),lt.resolve()}getLastRemoteSnapshotVersion(t){return lt.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return lt.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),lt.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Lr&&(this.Lr=e),lt.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new tr(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,lt.resolve()}updateTargetData(t,e){return this.Kn(e),lt.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,lt.resolve()}removeTargets(t,e,n){let i=0;const r=[];return this.Nr.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Nr.delete(s),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),lt.waitFor(r).next((()=>i))}getTargetCount(t){return lt.resolve(this.targetCount)}getTargetData(t,e){const n=this.Nr.get(e)||null;return lt.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Rr(e,n),lt.resolve()}removeMatchingKeys(t,e,n){this.Br.mr(e,n);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach((e=>{r.push(i.markPotentiallyOrphaned(t,e))})),lt.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),lt.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.yr(e);return lt.resolve(n)}containsKey(t,e){return lt.resolve(this.Br.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t,e){this.qr={},this.overlays={},this.Qr=new dt(0),this.Kr=!1,this.Kr=!0,this.$r=new or,this.referenceDelegate=t(this),this.Ur=new dr(this),this.indexManager=new Xi,this.remoteDocumentCache=function(t){return new ur(t)}((t=>this.referenceDelegate.Wr(t))),this.serializer=new Gi(e),this.Gr=new rr(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new sr,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.qr[t.toKey()];return n||(n=new lr(e,this.referenceDelegate),this.qr[t.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,n){T("MemoryPersistence","Starting transaction:",t);const i=new pr(this.Qr.next());return this.referenceDelegate.zr(),n(i).next((t=>this.referenceDelegate.jr(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Hr(t,e){return lt.or(Object.values(this.qr).map((n=>()=>n.containsKey(t,e))))}}class pr extends at{constructor(t){super(),this.currentSequenceNumber=t}}class mr{constructor(t){this.persistence=t,this.Jr=new ar,this.Yr=null}static Zr(t){return new mr(t)}get Xr(){if(this.Yr)return this.Yr;throw O()}addReference(t,e,n){return this.Jr.addReference(n,e),this.Xr.delete(n.toString()),lt.resolve()}removeReference(t,e,n){return this.Jr.removeReference(n,e),this.Xr.add(n.toString()),lt.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),lt.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach((t=>this.Xr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Xr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return lt.forEach(this.Xr,(n=>{const i=tt.fromPath(n);return this.ei(t,i).next((t=>{t||e.removeEntry(i,Q.min())}))})).next((()=>(this.Yr=null,e.apply(t))))}updateLimboDocument(t,e){return this.ei(t,e).next((t=>{t?this.Xr.delete(e.toString()):this.Xr.add(e.toString())}))}Wr(t){return 0}ei(t,e){return lt.or([()=>lt.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gr{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.$i=n,this.Ui=i}static Wi(t,e){let n=an(),i=an();for(const r of e.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new gr(t,e.fromCache,n,i)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return(0,c.nr)()?8:ut((0,c.ZQ)())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,n,i){const r={result:null};return this.Yi(t,e).next((t=>{r.result=t})).next((()=>{if(!r.result)return this.Zi(t,e,i,n).next((t=>{r.result=t}))})).next((()=>{if(r.result)return;const n=new vr;return this.Xi(t,e,n).next((i=>{if(r.result=i,this.zi)return this.es(t,e,n,i.size)}))})).next((()=>r.result))}es(t,e,n,i){return n.documentReadCount<this.ji?(A()<=a.$b.DEBUG&&T("QueryEngine","SDK will not create cache indexes for query:",He(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),lt.resolve()):(A()<=a.$b.DEBUG&&T("QueryEngine","Query:",He(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Hi*i?(A()<=a.$b.DEBUG&&T("QueryEngine","The SDK decides to create cache indexes for query:",He(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Fe(e))):lt.resolve())}Yi(t,e){if(Re(e))return lt.resolve(null);let n=Fe(e);return this.indexManager.getIndexType(t,n).next((i=>0===i?null:(null!==e.limit&&1===i&&(e=je(e,null,"F"),n=Fe(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const r=an(...i);return this.Ji.getDocuments(t,r).next((i=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.ts(e,i);return this.ns(e,s,r,n.readTime)?this.Yi(t,je(e,null,"F")):this.rs(t,s,e,n)}))))})))))}Zi(t,e,n,i){return Re(e)||i.isEqual(Q.min())?lt.resolve(null):this.Ji.getDocuments(t,n).next((r=>{const s=this.ts(e,r);return this.ns(e,s,n,i)?lt.resolve(null):(A()<=a.$b.DEBUG&&T("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),He(e)),this.rs(t,s,e,nt(i,-1)).next((t=>t)))}))}ts(t,e){let n=new Tt(Ke(t));return e.forEach(((e,i)=>{qe(t,i)&&(n=n.add(i))})),n}ns(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Xi(t,e,n){return A()<=a.$b.DEBUG&&T("QueryEngine","Using full collection scan to execute query:",He(e)),this.Ji.getDocumentsMatchingQuery(t,e,rt.min(),n)}rs(t,e,n,i){return this.Ji.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(t,e,n,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new St(W),this._s=new Qe((t=>Oe(t)),Le),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(n)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ir(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.os)))}}function wr(t,e,n,i){return new br(t,e,n,i)}async function _r(t,e){const n=D(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((r=>(i=r,n.ls(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],s=[];let o=an();for(const t of i){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({hs:t,removedBatchIds:r,addedBatchIds:s})))}))}))}function Cr(t,e){const n=D(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),r=n.cs.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const r=n.batch,s=r.keys();let o=lt.resolve();return s.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);L(null!==s),e.version.compareTo(s)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=an();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,i)))}))}function Sr(t){const e=D(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ur.getLastRemoteSnapshotVersion(t)))}function Er(t,e){const n=D(t),i=e.snapshotVersion;let r=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.cs.newChangeBuffer({trackRemovals:!0});r=n.os;const o=[];e.targetChanges.forEach(((s,a)=>{const c=r.get(a);if(!c)return;o.push(n.Ur.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Ur.addMatchingKeys(t,s.addedDocuments,a))));let l=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?l=l.withResumeToken(Ot.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):s.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(s.resumeToken,i)),r=r.insert(a,l),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,l,s)&&o.push(n.Ur.updateTargetData(t,l))}));let a=Xe(),c=an();if(e.documentUpdates.forEach((i=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))})),o.push(Ar(t,s,e.documentUpdates).next((t=>{a=t.Ps,c=t.Is}))),!i.isEqual(Q.min())){const e=n.Ur.getLastRemoteSnapshotVersion(t).next((e=>n.Ur.setTargetsMetadata(t,t.currentSequenceNumber,i)));o.push(e)}return lt.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.os=r,t)))}function Ar(t,e,n){let i=an(),r=an();return n.forEach((t=>i=i.add(t))),e.getEntries(t,i).next((t=>{let i=Xe();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),s.isNoDocument()&&s.version.isEqual(Q.min())?(e.removeEntry(n,s.readTime),i=i.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),i=i.insert(n,s)):T("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Ps:i,Is:r}}))}function Tr(t,e){const n=D(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Ir(t,e){const n=D(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return n.Ur.getTargetData(t,e).next((r=>r?(i=r,lt.resolve(i)):n.Ur.allocateTargetId(t).next((r=>(i=new Ki(e,r,"TargetPurposeListen",t.currentSequenceNumber),n.Ur.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=n.os.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(t.targetId,t),n._s.set(e,t.targetId)),t}))}async function kr(t,e,n){const i=D(t),r=i.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,(t=>i.persistence.referenceDelegate.removeTarget(t,r)))}catch(t){if(!ht(t))throw t;T("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.os=i.os.remove(e),i._s.delete(r.target)}function xr(t,e,n){const i=D(t);let r=Q.min(),s=an();return i.persistence.runTransaction("Execute query","readwrite",(t=>function(t,e,n){const i=D(t),r=i._s.get(n);return void 0!==r?lt.resolve(i.os.get(r)):i.Ur.getTargetData(e,n)}(i,t,Fe(e)).next((e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,i.Ur.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>i.ss.getDocumentsMatchingQuery(t,e,n?r:Q.min(),n?s:an()))).next((t=>(Or(i,We(e),t),{documents:t,Ts:s})))))}function Or(t,e,n){let i=t.us.get(e)||Q.min();n.forEach(((t,e)=>{e.readTime.compareTo(i)>0&&(i=e.readTime)})),t.us.set(e,i)}class Lr{constructor(){this.activeTargetIds=ln()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Dr{constructor(){this.so=new Lr,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,n){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Lr,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{_o(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){T("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){T("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pr=null;function Rr(){return null===Pr?Pr=function(){return 268435456+Math.round(2147483648*Math.random())}():Pr++,"0x"+Pr.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Mr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr="WebChannelConnection";class Br extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=e+"://"+t.host,this.vo=`projects/${n}/databases/${i}`,this.Co="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${i}`}get Fo(){return!1}Mo(t,e,n,i,r){const s=Rr(),o=this.xo(t,e.toUriEncodedString());T("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(a,i,r),this.No(t,o,a,n).then((e=>(T("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw k("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}Lo(t,e,n,i,r,s){return this.Mo(t,e,n,i,r)}Oo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+S}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}xo(t,e){const n=Mr[t];return`${this.Do}/v1/${e}:${n}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,n,i){const r=Rr();return new Promise(((s,o)=>{const a=new h;a.setWithCredentials(!0),a.listenOnce(f.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case p.NO_ERROR:const e=a.getResponseJson();T(Fr,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(e)),s(e);break;case p.TIMEOUT:T(Fr,`RPC '${t}' ${r} timed out`),o(new N($.DEADLINE_EXCEEDED,"Request time out"));break;case p.HTTP_ERROR:const n=a.getStatus();if(T(Fr,`RPC '${t}' ${r} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(e)>=0?e:$.UNKNOWN}(e.status);o(new N(t,e.message))}else o(new N($.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new N($.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{T(Fr,`RPC '${t}' ${r} completed.`)}}));const c=JSON.stringify(i);T(Fr,`RPC '${t}' ${r} sending request:`,i),a.send(e,"POST",c,n,15)}))}Bo(t,e,n){const i=Rr(),r=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=y(),o=v(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Oo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const l=r.join("");T(Fr,`Creating RPC '${t}' stream ${i}: ${l}`,a);const u=s.createWebChannel(l,a);let h=!1,f=!1;const p=new Vr({Io:e=>{f?T(Fr,`Not sending because RPC '${t}' stream ${i} is closed:`,e):(h||(T(Fr,`Opening RPC '${t}' stream ${i} transport.`),u.open(),h=!0),T(Fr,`RPC '${t}' stream ${i} sending:`,e),u.send(e))},To:()=>u.close()}),b=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return b(u,d.EventType.OPEN,(()=>{f||(T(Fr,`RPC '${t}' stream ${i} transport opened.`),p.yo())})),b(u,d.EventType.CLOSE,(()=>{f||(f=!0,T(Fr,`RPC '${t}' stream ${i} transport closed`),p.So())})),b(u,d.EventType.ERROR,(e=>{f||(f=!0,k(Fr,`RPC '${t}' stream ${i} transport errored:`,e),p.So(new N($.UNAVAILABLE,"The operation could not be completed")))})),b(u,d.EventType.MESSAGE,(e=>{var n;if(!f){const r=e.data[0];L(!!r);const s=r,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){T(Fr,`RPC '${t}' stream ${i} received error:`,o);const e=o.status;let n=function(t){const e=Wn[t];if(void 0!==e)return Qn(e)}(e),r=o.message;void 0===n&&(n=$.INTERNAL,r="Unknown error status: "+e+" with message "+o.message),f=!0,p.So(new N(n,r)),u.close()}else T(Fr,`RPC '${t}' stream ${i} received:`,r),p.bo(r)}})),b(o,g.STAT_EVENT,(e=>{e.stat===m.PROXY?T(Fr,`RPC '${t}' stream ${i} detected buffering proxy`):e.stat===m.NOPROXY&&T(Fr,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{p.wo()}),0),p}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(t){return new mi(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(t,e,n=1e3,i=1.5,r=6e4){this.ui=t,this.timerId=e,this.ko=n,this.qo=i,this.Qo=r,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),i=Math.max(0,e-n);i>0&&T("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,(()=>(this.Uo=Date.now(),t()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){null!==this.$o&&(this.$o.skipDelay(),this.$o=null)}cancel(){null!==this.$o&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(t,e,n,i,r,s,o,a){this.ui=t,this.Ho=n,this.Jo=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new zr(t,e)}n_(){return 1===this.state||5===this.state||this.r_()}r_(){return 2===this.state||3===this.state}start(){this.e_=0,4!==this.state?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&null===this.Zo&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,4!==t?this.t_.reset():e&&e.code===$.RESOURCE_EXHAUSTED?(I(e.toString()),I("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===$.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Yo===e&&this.P_(t,n)}),(e=>{t((()=>{const t=new N($.UNKNOWN,"Fetching auth token failed: "+e.message);return this.I_(t)}))}))}P_(t,e){const n=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo((()=>{n((()=>this.listener.Eo()))})),this.stream.Ro((()=>{n((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((t=>{n((()=>this.I_(t)))})),this.stream.onMessage((t=>{n((()=>1==++this.e_?this.E_(t):this.onNext(t)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(t){return T("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget((()=>this.Yo===t?e():(T("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class qr extends Hr{constructor(t,e,n,i,r,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,s),this.serializer=r}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Li(this.serializer,t),n=function(t){if(!("targetChange"in t))return Q.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Q.min():e.readTime?wi(e.readTime):Q.min()}(t);return this.listener.d_(e,n)}A_(t){const e={};e.database=ki(this.serializer),e.addTarget=function(t,e){let n;const i=e.target;if(n=De(i)?{documents:Ni(t,i)}:{query:Pi(t,i)._t},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=yi(t,e.resumeToken);const i=gi(t,e.expectedCount);null!==i&&(n.expectedCount=i)}else if(e.snapshotVersion.compareTo(Q.min())>0){n.readTime=vi(t,e.snapshotVersion.toTimestamp());const i=gi(t,e.expectedCount);null!==i&&(n.expectedCount=i)}return n}(this.serializer,t);const n=Mi(this.serializer,t);n&&(e.labels=n),this.a_(e)}R_(t){const e={};e.database=ki(this.serializer),e.removeTarget=t,this.a_(e)}}class Wr extends Hr{constructor(t,e,n,i,r,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,s),this.serializer=r}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return L(!!t.streamToken),this.lastStreamToken=t.streamToken,L(!t.writeResults||0===t.writeResults.length),this.listener.f_()}onNext(t){L(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=$i(t.writeResults,t.commitTime),n=wi(t.commitTime);return this.listener.g_(n,e)}p_(){const t={};t.database=ki(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Di(this.serializer,t)))};this.a_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new N($.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,n,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection.Mo(t,Ci(e,n),i,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new N($.UNKNOWN,t.toString())}))}Lo(t,e,n,i,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.Lo(t,Ci(e,n),i,s,o,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new N($.UNKNOWN,t.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class Gr{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){0===this.S_&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(t){"Online"===this.state?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,"Online"===t&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(I(e),this.D_=!1):T("OnlineStateTracker",e)}x_(){null!==this.b_&&(this.b_.cancel(),this.b_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=r,this.k_._o((t=>{n.enqueueAndForget((async()=>{rs(this)&&(T("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=D(t);e.L_.add(4),await Xr(e),e.q_.set("Unknown"),e.L_.delete(4),await Yr(e)}(this))}))})),this.q_=new Gr(n,i)}}async function Yr(t){if(rs(t))for(const e of t.B_)await e(!0)}async function Xr(t){for(const e of t.B_)await e(!1)}function Jr(t,e){const n=D(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),is(n)?ns(n):Ss(n).r_()&&ts(n,e))}function Zr(t,e){const n=D(t),i=Ss(n);n.N_.delete(e),i.r_()&&es(n,e),0===n.N_.size&&(i.r_()?i.o_():rs(n)&&n.q_.set("Unknown"))}function ts(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ss(t).A_(e)}function es(t,e){t.Q_.xe(e),Ss(t).R_(e)}function ns(t){t.Q_=new li({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ss(t).start(),t.q_.v_()}function is(t){return rs(t)&&!Ss(t).n_()&&t.N_.size>0}function rs(t){return 0===D(t).L_.size}function ss(t){t.Q_=void 0}async function os(t){t.q_.set("Online")}async function as(t){t.N_.forEach(((e,n)=>{ts(t,e)}))}async function cs(t,e){ss(t),is(t)?(t.q_.M_(e),ns(t)):t.q_.set("Unknown")}async function ls(t,e,n){if(t.q_.set("Online"),e instanceof ai&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.N_.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.N_.delete(i),t.Q_.removeTarget(i))}(t,e)}catch(n){T("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await us(t,n)}else if(e instanceof si?t.Q_.Ke(e):e instanceof oi?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Q.min()))try{const e=await Sr(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Q_.rt(e);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.N_.get(i);r&&t.N_.set(i,r.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const i=t.N_.get(e);if(!i)return;t.N_.set(e,i.withResumeToken(Ot.EMPTY_BYTE_STRING,i.snapshotVersion)),es(t,e);const r=new Ki(i.target,e,n,i.sequenceNumber);ts(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){T("RemoteStore","Failed to raise snapshot:",e),await us(t,e)}}async function us(t,e,n){if(!ht(e))throw e;t.L_.add(1),await Xr(t),t.q_.set("Offline"),n||(n=()=>Sr(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{T("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Yr(t)}))}function hs(t,e){return e().catch((n=>us(t,n,e)))}async function ds(t){const e=D(t),n=Es(e);let i=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;fs(e);)try{const t=await Tr(e.localStore,i);if(null===t){0===e.O_.length&&n.o_();break}i=t.batchId,ps(e,t)}catch(t){await us(e,t)}ms(e)&&gs(e)}function fs(t){return rs(t)&&t.O_.length<10}function ps(t,e){t.O_.push(e);const n=Es(t);n.r_()&&n.V_&&n.m_(e.mutations)}function ms(t){return rs(t)&&!Es(t).n_()&&t.O_.length>0}function gs(t){Es(t).start()}async function vs(t){Es(t).p_()}async function ys(t){const e=Es(t);for(const n of t.O_)e.m_(n.mutations)}async function bs(t,e,n){const i=t.O_.shift(),r=zn.from(i,e,n);await hs(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await ds(t)}async function ws(t,e){e&&Es(t).V_&&await async function(t,e){if(function(t){return Gn(t)&&t!==$.ABORTED}(e.code)){const n=t.O_.shift();Es(t).s_(),await hs(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await ds(t)}}(t,e),ms(t)&&gs(t)}async function _s(t,e){const n=D(t);n.asyncQueue.verifyOperationInProgress(),T("RemoteStore","RemoteStore received new credentials");const i=rs(n);n.L_.add(3),await Xr(n),i&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Yr(n)}async function Cs(t,e){const n=D(t);e?(n.L_.delete(2),await Yr(n)):e||(n.L_.add(2),await Xr(n),n.q_.set("Unknown"))}function Ss(t){return t.K_||(t.K_=function(t,e,n){const i=D(t);return i.w_(),new qr(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Eo:os.bind(null,t),Ro:as.bind(null,t),mo:cs.bind(null,t),d_:ls.bind(null,t)}),t.B_.push((async e=>{e?(t.K_.s_(),is(t)?ns(t):t.q_.set("Unknown")):(await t.K_.stop(),ss(t))}))),t.K_}function Es(t){return t.U_||(t.U_=function(t,e,n){const i=D(t);return i.w_(),new Wr(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:vs.bind(null,t),mo:ws.bind(null,t),f_:ys.bind(null,t),g_:bs.bind(null,t)}),t.B_.push((async e=>{e?(t.U_.s_(),await ds(t)):(await t.U_.stop(),t.O_.length>0&&(T("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))}))),t.U_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class As{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new P,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new As(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new N($.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ts(t,e){if(I("AsyncQueue",`${e}: ${t}`),ht(t))return new N($.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(t){this.comparator=t?(e,n)=>t(e,n)||tt.comparator(e.key,n.key):(t,e)=>tt.comparator(t.key,e.key),this.keyedMap=Ze(),this.sortedSet=new St(this.comparator)}static emptySet(t){return new Is(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Is))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Is;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(){this.W_=new St(tt.comparator)}track(t){const e=t.doc.key,n=this.W_.get(e);n?0!==t.type&&3===n.type?this.W_=this.W_.insert(e,t):3===t.type&&1!==n.type?this.W_=this.W_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.W_=this.W_.remove(e):1===t.type&&2===n.type?this.W_=this.W_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):O():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class xs{constructor(t,e,n,i,r,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,i,r){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new xs(t,e,Is.emptySet(e),s,n,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ue(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((t=>t.J_()))}}class Ls{constructor(){this.queries=Ds(),this.onlineState="Unknown",this.Y_=new Set}terminate(){!function(t,e){const n=D(t),i=n.queries;n.queries=Ds(),i.forEach(((t,n)=>{for(const i of n.j_)i.onError(e)}))}(this,new N($.ABORTED,"Firestore shutting down"))}}function Ds(){return new Qe((t=>ze(t)),Ue)}async function $s(t,e){const n=D(t);let i=3;const r=e.query;let s=n.queries.get(r);s?!s.H_()&&e.J_()&&(i=2):(s=new Os,i=e.J_()?0:1);try{switch(i){case 0:s.z_=await n.onListen(r,!0);break;case 1:s.z_=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(t){const n=Ts(t,`Initialization of query '${He(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Ms(n)}async function Ns(t,e){const n=D(t),i=e.query;let r=3;const s=n.queries.get(i);if(s){const t=s.j_.indexOf(e);t>=0&&(s.j_.splice(t,1),0===s.j_.length?r=e.J_()?0:1:!s.H_()&&e.J_()&&(r=2))}switch(r){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function Ps(t,e){const n=D(t);let i=!1;for(const r of e){const t=r.query,e=n.queries.get(t);if(e){for(const t of e.j_)t.X_(r)&&(i=!0);e.z_=r}}i&&Ms(n)}function Rs(t,e,n){const i=D(t),r=i.queries.get(e);if(r)for(const s of r.j_)s.onError(n);i.queries.delete(e)}function Ms(t){t.Y_.forEach((t=>{t.next()}))}var Vs,Fs;(Fs=Vs||(Vs={})).ea="default",Fs.Cache="cache";class Bs{constructor(t,e,n){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new xs(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache)return!0;if(!this.J_())return!0;const n="Offline"!==e;return(!this.options._a||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}oa(t){t=xs.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Vs.Cache}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class js{constructor(t){this.key=t}}class Us{constructor(t){this.key=t}}class zs{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=an(),this.mutatedKeys=an(),this.Aa=Ke(t),this.Ra=new Is(this.Aa)}get Va(){return this.Ta}ma(t,e){const n=e?e.fa:new ks,i=e?e.Ra:this.Ra;let r=e?e.mutatedKeys:this.mutatedKeys,s=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,e)=>{const l=i.get(t),u=qe(this.query,e)?e:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.ga(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Aa(u,a)>0||c&&this.Aa(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(s=s.add(u),r=d?r.add(t):r.delete(t)):(s=s.delete(t),r=r.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{Ra:s,fa:n,ns:o,mutatedKeys:r}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const r=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const s=t.fa.G_();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Aa(t.doc,e.doc))),this.pa(n),i=null!=i&&i;const o=e&&!i?this.ya():[],a=0===this.da.size&&this.current&&!i?1:0,c=a!==this.Ea;return this.Ea=a,0!==s.length||c?{snapshot:new xs(this.query,t.Ra,r,s,t.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:o}:{wa:o}}Z_(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new ks,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach((t=>this.Ta=this.Ta.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Ta=this.Ta.delete(t))),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=an(),this.Ra.forEach((t=>{this.Sa(t.key)&&(this.da=this.da.add(t.key))}));const e=[];return t.forEach((t=>{this.da.has(t)||e.push(new Us(t))})),this.da.forEach((n=>{t.has(n)||e.push(new js(n))})),e}ba(t){this.Ta=t.Ts,this.da=an();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return xs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,0===this.Ea,this.hasCachedResults)}}class Hs{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class qs{constructor(t){this.key=t,this.va=!1}}class Ws{constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new Qe((t=>ze(t)),Ue),this.Ma=new Map,this.xa=new Set,this.Oa=new St(tt.comparator),this.Na=new Map,this.La=new ar,this.Ba={},this.ka=new Map,this.qa=tr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return!0===this.Qa}}async function Ks(t,e,n=!0){const i=go(t);let r;const s=i.Fa.get(e);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.Da()):r=await Qs(i,e,n,!0),r}async function Gs(t,e){const n=go(t);await Qs(n,e,!0,!1)}async function Qs(t,e,n,i){const r=await Ir(t.localStore,Fe(e)),s=r.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return i&&(a=await Ys(t,e,s,"current"===o,r.resumeToken)),t.isPrimaryClient&&n&&Jr(t.remoteStore,r),a}async function Ys(t,e,n,i,r){t.Ka=(e,n,i)=>async function(t,e,n,i){let r=e.view.ma(n);r.ns&&(r=await xr(t.localStore,e.query,!1).then((({documents:t})=>e.view.ma(t,r))));const s=i&&i.targetChanges.get(e.targetId),o=i&&null!=i.targetMismatches.get(e.targetId),a=e.view.applyChanges(r,t.isPrimaryClient,s,o);return lo(t,e.targetId,a.wa),a.snapshot}(t,e,n,i);const s=await xr(t.localStore,e,!0),o=new zs(e,s.Ts),a=o.ma(s.documents),c=ri.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState,r),l=o.applyChanges(a,t.isPrimaryClient,c);lo(t,n,l.wa);const u=new Hs(e,n,o);return t.Fa.set(e,u),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),l.snapshot}async function Xs(t,e,n){const i=D(t),r=i.Fa.get(e),s=i.Ma.get(r.targetId);if(s.length>1)return i.Ma.set(r.targetId,s.filter((t=>!Ue(t,e)))),void i.Fa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(r.targetId),i.sharedClientState.isActiveQueryTarget(r.targetId)||await kr(i.localStore,r.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(r.targetId),n&&Zr(i.remoteStore,r.targetId),ao(i,r.targetId)})).catch(ct)):(ao(i,r.targetId),await kr(i.localStore,r.targetId,!0))}async function Js(t,e){const n=D(t),i=n.Fa.get(e),r=n.Ma.get(i.targetId);n.isPrimaryClient&&1===r.length&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),Zr(n.remoteStore,i.targetId))}async function Zs(t,e,n){const i=vo(t);try{const t=await function(t,e){const n=D(t),i=G.now(),r=e.reduce(((t,e)=>t.add(e.key)),an());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Xe(),c=an();return n.cs.getEntries(t,r).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((r=>{s=r;const o=[];for(const t of e){const e=$n(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new Rn(t.key,e,re(e.value.mapValue),In.exists(!0)))}return n.mutationQueue.addMutationBatch(t,i,o,e)})).next((e=>{o=e;const i=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:tn(s)})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.Ba[t.currentUser.toKey()];i||(i=new St(W)),i=i.insert(e,n),t.Ba[t.currentUser.toKey()]=i}(i,t.batchId,n),await fo(i,t.changes),await ds(i.remoteStore)}catch(t){const e=Ts(t,"Failed to persist write");n.reject(e)}}async function to(t,e){const n=D(t);try{const t=await Er(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const i=n.Na.get(e);i&&(L(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.va=!0:t.modifiedDocuments.size>0?L(i.va):t.removedDocuments.size>0&&(L(i.va),i.va=!1))})),await fo(n,t,e)}catch(t){await ct(t)}}function eo(t,e,n){const i=D(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.Fa.forEach(((n,i)=>{const r=i.view.Z_(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=D(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const r of n.j_)r.Z_(e)&&(i=!0)})),i&&Ms(n)}(i.eventManager,e),t.length&&i.Ca.d_(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function no(t,e,n){const i=D(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.Na.get(e),s=r&&r.key;if(s){let t=new St(tt.comparator);t=t.insert(s,se.newNoDocument(s,Q.min()));const n=an().add(s),r=new ii(Q.min(),new Map,new St(W),t,n);await to(i,r),i.Oa=i.Oa.remove(s),i.Na.delete(e),ho(i)}else await kr(i.localStore,e,!1).then((()=>ao(i,e,n))).catch(ct)}async function io(t,e){const n=D(t),i=e.batch.batchId;try{const t=await Cr(n.localStore,e);oo(n,i,null),so(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await fo(n,t)}catch(t){await ct(t)}}async function ro(t,e,n){const i=D(t);try{const t=await function(t,e){const n=D(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(L(null!==e),i=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(i.localStore,e);oo(i,e,n),so(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await fo(i,t)}catch(n){await ct(n)}}function so(t,e){(t.ka.get(e)||[]).forEach((t=>{t.resolve()})),t.ka.delete(e)}function oo(t,e,n){const i=D(t);let r=i.Ba[i.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),i.Ba[i.currentUser.toKey()]=r}}function ao(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Ma.get(e))t.Fa.delete(i),n&&t.Ca.$a(i,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach((e=>{t.La.containsKey(e)||co(t,e)}))}function co(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);null!==n&&(Zr(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),ho(t))}function lo(t,e,n){for(const i of n)i instanceof js?(t.La.addReference(i.key,e),uo(t,i)):i instanceof Us?(T("SyncEngine","Document no longer in limbo: "+i.key),t.La.removeReference(i.key,e),t.La.containsKey(i.key)||co(t,i.key)):O()}function uo(t,e){const n=e.key,i=n.path.canonicalString();t.Oa.get(n)||t.xa.has(i)||(T("SyncEngine","New document in limbo: "+n),t.xa.add(i),ho(t))}function ho(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new tt(X.fromString(e)),i=t.qa.next();t.Na.set(i,new qs(n)),t.Oa=t.Oa.insert(n,i),Jr(t.remoteStore,new Ki(Fe(Pe(n.path)),i,"TargetPurposeLimboResolution",dt.oe))}}async function fo(t,e,n){const i=D(t),r=[],s=[],o=[];i.Fa.isEmpty()||(i.Fa.forEach(((t,a)=>{o.push(i.Ka(a,e,n).then((t=>{var e;if((t||n)&&i.isPrimaryClient){const r=t?!t.fromCache:null===(e=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===e?void 0:e.current;i.sharedClientState.updateQueryState(a.targetId,r?"current":"not-current")}if(t){r.push(t);const e=gr.Wi(a.targetId,t);s.push(e)}})))})),await Promise.all(o),i.Ca.d_(r),await async function(t,e){const n=D(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>lt.forEach(e,(e=>lt.forEach(e.$i,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>lt.forEach(e.Ui,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!ht(t))throw t;T("LocalStore","Failed to update sequence numbers: "+t)}for(const i of e){const t=i.targetId;if(!i.fromCache){const e=n.os.get(t),i=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(i);n.os=n.os.insert(t,r)}}}(i.localStore,s))}async function po(t,e){const n=D(t);if(!n.currentUser.isEqual(e)){T("SyncEngine","User change. New user:",e.toKey());const t=await _r(n.localStore,e);n.currentUser=e,function(t,e){t.ka.forEach((t=>{t.forEach((t=>{t.reject(new N($.CANCELLED,e))}))})),t.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await fo(n,t.hs)}}function mo(t,e){const n=D(t),i=n.Na.get(e);if(i&&i.va)return an().add(i.key);{let t=an();const i=n.Ma.get(e);if(!i)return t;for(const e of i){const i=n.Fa.get(e);t=t.unionWith(i.view.Va)}return t}}function go(t){const e=D(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=to.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mo.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=no.bind(null,e),e.Ca.d_=Ps.bind(null,e.eventManager),e.Ca.$a=Rs.bind(null,e.eventManager),e}function vo(t){const e=D(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=io.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ro.bind(null,e),e}class yo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Ur(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return wr(this.persistence,new yr,t.initialUser,this.serializer)}Ga(t){return new fr(mr.Zr,this.serializer)}Wa(t){return new Dr}async terminate(){var t,e;null===(t=this.gcScheduler)||void 0===t||t.stop(),null===(e=this.indexBackfillerScheduler)||void 0===e||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yo.provider={build:()=>new yo};class bo{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>eo(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=po.bind(null,this.syncEngine),await Cs(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Ls}()}createDatastore(t){const e=Ur(t.databaseInfo.databaseId),n=function(t){return new Br(t)}(t.databaseInfo);return function(t,e,n,i){return new Kr(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,i,r){return new Qr(t,e,n,i,r)}(this.localStore,this.datastore,t.asyncQueue,(t=>eo(this.syncEngine,t,0)),function(){return Nr.D()?new Nr:new $r}())}createSyncEngine(t,e){return function(t,e,n,i,r,s,o){const a=new Ws(t,e,n,i,r,s);return o&&(a.Qa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(t){const e=D(t);T("RemoteStore","RemoteStore shutting down."),e.L_.add(5),await Xr(e),e.k_.shutdown(),e.q_.set("Unknown")}(this.remoteStore),null===(t=this.datastore)||void 0===t||t.terminate(),null===(e=this.eventManager)||void 0===e||e.terminate()}}bo.provider={build:()=>new bo};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wo{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):I("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _o{constructor(t,e,n,i,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=C.UNAUTHENTICATED,this.clientId=q.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(n,(async t=>{T("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(T("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new P;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ts(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Co(t,e){t.asyncQueue.verifyOperationInProgress(),T("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await _r(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function So(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Eo(t);T("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((t=>_s(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>_s(e.remoteStore,n))),t._onlineComponents=e}async function Eo(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){T("FirestoreClient","Using user provided OfflineComponentProvider");try{await Co(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(t){return"FirebaseError"===t.name?t.code===$.FAILED_PRECONDITION||t.code===$.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(n))throw n;k("Error using user provided cache. Falling back to memory cache: "+n),await Co(t,new yo)}}else T("FirestoreClient","Using default OfflineComponentProvider"),await Co(t,new yo);return t._offlineComponents}async function Ao(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(T("FirestoreClient","Using user provided OnlineComponentProvider"),await So(t,t._uninitializedComponentsProvider._online)):(T("FirestoreClient","Using default OnlineComponentProvider"),await So(t,new bo))),t._onlineComponents}function To(t){return Ao(t).then((t=>t.syncEngine))}async function Io(t){const e=await Ao(t),n=e.eventManager;return n.onListen=Ks.bind(null,e.syncEngine),n.onUnlisten=Xs.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Gs.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Js.bind(null,e.syncEngine),n}function ko(t,e,n={}){const i=new P;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,r){const s=new wo({next:a=>{s.Za(),e.enqueueAndForget((()=>Ns(t,o)));const c=a.docs.has(n);!c&&a.fromCache?r.reject(new N($.UNAVAILABLE,"Failed to get document because the client is offline.")):c&&a.fromCache&&i&&"server"===i.source?r.reject(new N($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(a)},error:t=>r.reject(t)}),o=new Bs(Pe(n.path),s,{includeMetadataChanges:!0,_a:!0});return $s(t,o)}(await Io(t),t.asyncQueue,e,n,i))),i.promise}function xo(t,e,n={}){const i=new P;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,r){const s=new wo({next:n=>{s.Za(),e.enqueueAndForget((()=>Ns(t,o))),n.fromCache&&"server"===i.source?r.reject(new N($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:t=>r.reject(t)}),o=new Bs(n,s,{includeMetadataChanges:!0,_a:!0});return $s(t,o)}(await Io(t),t.asyncQueue,e,n,i))),i.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Oo(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Lo=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t,e,n){if(!n)throw new N($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function $o(t,e,n,i){if(!0===e&&!0===i)throw new N($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function No(t){if(!tt.isDocumentKey(t))throw new N($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Po(t){if(tt.isDocumentKey(t))throw new N($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ro(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":O()}function Mo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new N($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ro(t);throw new N($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vo{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new N($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new N($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}$o("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Oo(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new N($.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new N($.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new N($.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Fo{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vo({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new N($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vo(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new M;switch(t.type){case"firstParty":return new j(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new N($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Lo.get(t);e&&(T("ComponentProvider","Removing Datastore"),Lo.delete(t),e.terminate())}(this),Promise.resolve()}}function Bo(t,e,n,i={}){var r;const s=(t=Mo(t,Fo))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&k("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=C.MOCK_USER;else{e=(0,c.Fy)(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new N($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new C(s)}t._authCredentials=new V(new R(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new jo(this.firestore,t,this._query)}}class Uo{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zo(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Uo(this.firestore,t,this._key)}}class zo extends jo{constructor(t,e,n){super(t,e,Pe(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Uo(this.firestore,null,new tt(t))}withConverter(t){return new zo(this.firestore,t,this._path)}}function Ho(t,e,...n){if(t=(0,c.Ku)(t),Do("collection","path",e),t instanceof Fo){const i=X.fromString(e,...n);return Po(i),new zo(t,null,i)}{if(!(t instanceof Uo||t instanceof zo))throw new N($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(X.fromString(e,...n));return Po(i),new zo(t.firestore,null,i)}}function qo(t,e,...n){if(t=(0,c.Ku)(t),1===arguments.length&&(e=q.newId()),Do("doc","path",e),t instanceof Fo){const i=X.fromString(e,...n);return No(i),new Uo(t,null,new tt(i))}{if(!(t instanceof Uo||t instanceof zo))throw new N($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(X.fromString(e,...n));return No(i),new Uo(t.firestore,t instanceof zo?t.converter:null,new tt(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wo{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new zr(this,"async_queue_retry"),this.Vu=()=>{const t=jr();t&&T("AsyncQueue","Visibility state changed to "+t.visibilityState),this.t_.jo()},this.mu=t;const e=jr();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=jr();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise((()=>{}));const e=new P;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Pu.push(t),this.pu())))}async pu(){if(0!==this.Pu.length){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!ht(t))throw t;T("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}gu(t){const e=this.mu.then((()=>(this.du=!0,t().catch((t=>{this.Eu=t,this.du=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw I("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.du=!1,t))))));return this.mu=e,e}enqueueAfterDelay(t,e,n){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=As.createAndSchedule(this,t,e,n,(t=>this.yu(t)));return this.Tu.push(i),i}fu(){this.Eu&&O()}verifyOperationInProgress(){}async wu(){let t;do{t=this.mu,await t}while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then((()=>{this.Tu.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Tu)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.wu()}))}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class Ko extends Fo{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new Wo,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Wo(t),this._firestoreClient=void 0,await t}}}function Go(t,e){const n="object"==typeof t?t:(0,s.Sx)(),i="string"==typeof t?t:e||"(default)",r=(0,s.j6)(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const t=(0,c.yU)("firestore");t&&Bo(r,...t)}return r}function Qo(t){if(t._terminated)throw new N($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Yo(t),t._firestoreClient}function Yo(t){var e,n,i;const r=t._freezeSettings(),s=function(t,e,n,i){return new Vt(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,Oo(i.experimentalLongPollingOptions),i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,r);t._componentsProvider||(null===(n=r.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=r.localCache)||void 0===i?void 0:i._onlineComponentProvider)&&(t._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),t._firestoreClient=new _o(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(t){const e=null==t?void 0:t._online.build();return{_offline:null==t?void 0:t._offline.build(e),_online:e}}(t._componentsProvider))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xo{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Xo(Ot.fromBase64String(t))}catch(t){throw new N($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Xo(Ot.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new N($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Z(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zo{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return W(this._lat,t._lat)||W(this._long,t._long)}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(t){this._values=(t||[]).map((t=>t))}toArray(){return this._values.map((t=>t))}isEqual(t){return function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}(this._values,t._values)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=/^__.*__$/;class ia{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Rn(t,this.data,this.fieldMask,e,this.fieldTransforms):new Pn(t,this.data,e,this.fieldTransforms)}}class ra{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Rn(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function sa(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class oa{constructor(t,e,n,i,r,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===r&&this.vu(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new oa(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Fu({path:n,xu:!1});return i.Ou(t),i}Nu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Fu({path:n,xu:!1});return i.vu(),i}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return wa(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(0===t.length)throw this.Bu("Document fields must not be empty");if(sa(this.Cu)&&na.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class aa{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Ur(t)}Qu(t,e,n,i=!1){return new oa({Cu:t,methodName:e,qu:n,path:Z.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ca(t){const e=t._freezeSettings(),n=Ur(t._databaseId);return new aa(t._databaseId,!!e.ignoreUndefinedProperties,n)}function la(t,e,n,i,r,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,r);ga("Data must be an object, but it was:",o,i);const a=pa(i,o);let c,l;if(s.merge)c=new kt(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const i of s.mergeFields){const r=va(e,i,n);if(!o.contains(r))throw new N($.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);_a(t,r)||t.push(r)}c=new kt(t),l=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,l=o.fieldTransforms;return new ia(new ie(a),c,l)}class ua extends Zo{_toFieldTransform(t){if(2!==t.Cu)throw 1===t.Cu?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ua}}function ha(t,e,n,i){const r=t.Qu(1,e,n);ga("Data must be an object, but it was:",r,i);const s=[],o=ie.empty();_t(i,((t,i)=>{const a=ba(e,t,n);i=(0,c.Ku)(i);const l=r.Nu(a);if(i instanceof ua)s.push(a);else{const t=fa(i,l);null!=t&&(s.push(a),o.set(a,t))}}));const a=new kt(s);return new ra(o,a,r.fieldTransforms)}function da(t,e,n,i,r,s){const o=t.Qu(1,e,n),a=[va(e,i,n)],l=[r];if(s.length%2!=0)throw new N($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let c=0;c<s.length;c+=2)a.push(va(e,s[c])),l.push(s[c+1]);const u=[],h=ie.empty();for(let f=a.length-1;f>=0;--f)if(!_a(u,a[f])){const t=a[f];let e=l[f];e=(0,c.Ku)(e);const n=o.Nu(t);if(e instanceof ua)u.push(t);else{const i=fa(e,n);null!=i&&(u.push(t),h.set(t,i))}}const d=new kt(u);return new ra(h,d,o.fieldTransforms)}function fa(t,e){if(ma(t=(0,c.Ku)(t)))return ga("Unsupported field value:",e,t),pa(t,e);if(t instanceof Zo)return function(t,e){if(!sa(e.Cu))throw e.Bu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Bu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&4!==e.Cu)throw e.Bu("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const r of t){let t=fa(r,e.Lu(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,c.Ku)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return dn(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=G.fromDate(t);return{timestampValue:vi(e.serializer,n)}}if(t instanceof G){const n=new G(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:vi(e.serializer,n)}}if(t instanceof ta)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Xo)return{bytesValue:yi(e.serializer,t._byteString)};if(t instanceof Uo){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.Bu(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:_i(t.firestore._databaseId||e.databaseId,t._key.path)}}if(t instanceof ea)return function(t,e){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:t.toArray().map((t=>{if("number"!=typeof t)throw e.Bu("VectorValues must only contain numeric values.");return un(e.serializer,t)}))}}}}}}(t,e);throw e.Bu(`Unsupported field value: ${Ro(t)}`)}(t,e)}function pa(t,e){const n={};return Ct(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_t(t,((t,i)=>{const r=fa(i,e.Mu(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function ma(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof G||t instanceof ta||t instanceof Xo||t instanceof Uo||t instanceof Zo||t instanceof ea)}function ga(t,e,n){if(!ma(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=Ro(n);throw"an object"===i?e.Bu(t+" a custom object"):e.Bu(t+" "+i)}}function va(t,e,n){if((e=(0,c.Ku)(e))instanceof Jo)return e._internalPath;if("string"==typeof e)return ba(t,e);throw wa("Field path arguments must be of type string or ",t,!1,void 0,n)}const ya=new RegExp("[~\\*/\\[\\]]");function ba(t,e,n){if(e.search(ya)>=0)throw wa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Jo(...e.split("."))._internalPath}catch(i){throw wa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wa(t,e,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new N($.INVALID_ARGUMENT,a+t+c)}function _a(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(t,e,n,i,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Uo(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Sa(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ea("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Sa extends Ca{data(){return super.data()}}function Ea(t,e){return"string"==typeof e?ba(t,e):e instanceof Jo?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new N($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ta{convertValue(t,e="none"){switch(jt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return $t(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Nt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return _t(t,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertVectorValue(t){var e,n,i;const r=null===(i=null===(n=null===(e=t.fields)||void 0===e?void 0:e.value.arrayValue)||void 0===n?void 0:n.values)||void 0===i?void 0:i.map((t=>$t(t.doubleValue)));return new ea(r)}convertGeoPoint(t){return new ta($t(t.latitude),$t(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Rt(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Mt(t));default:return null}}convertTimestamp(t){const e=Dt(t);return new G(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=X.fromString(t);L(Wi(n));const i=new Ft(n.get(1),n.get(3)),r=new tt(n.popFirst(5));return i.isEqual(e)||I(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ka{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class xa extends Ca{constructor(t,e,n,i,r,s){super(t,e,n,i,s),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Oa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Ea("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Oa extends xa{data(t={}){return super.data(t)}}class La{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new ka(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Oa(this._firestore,this._userDataWriter,n.key,n,new ka(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const i=new Oa(t._firestore,t._userDataWriter,n.doc.key,n.doc,new ka(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const i=new Oa(t._firestore,t._userDataWriter,e.doc.key,e.doc,new ka(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,s=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:Da(e.type),doc:i,oldIndex:r,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Da(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $a(t){t=Mo(t,Uo);const e=Mo(t.firestore,Ko);return ko(Qo(e),t._key).then((n=>Ba(e,t,n)))}class Na extends Ta{constructor(t){super(),this.firestore=t}convertBytes(t){return new Xo(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Uo(this.firestore,null,e)}}function Pa(t){t=Mo(t,jo);const e=Mo(t.firestore,Ko),n=Qo(e),i=new Na(e);return Aa(t._query),xo(n,t._query).then((n=>new La(e,i,t,n)))}function Ra(t,e,n,...i){t=Mo(t,Uo);const r=Mo(t.firestore,Ko),s=ca(r);let o;return o="string"==typeof(e=(0,c.Ku)(e))||e instanceof Jo?da(s,"updateDoc",t._key,e,n,i):ha(s,"updateDoc",t._key,e),Fa(r,[o.toMutation(t._key,In.exists(!0))])}function Ma(t){return Fa(Mo(t.firestore,Ko),[new Bn(t._key,In.none())])}function Va(t,e){const n=Mo(t.firestore,Ko),i=qo(t),r=Ia(t.converter,e);return Fa(n,[la(ca(t.firestore),"addDoc",i._key,r,null!==t.converter,{}).toMutation(i._key,In.exists(!1))]).then((()=>i))}function Fa(t,e){return function(t,e){const n=new P;return t.asyncQueue.enqueueAndForget((async()=>Zs(await To(t),e,n))),n.promise}(Qo(t),e)}function Ba(t,e,n){const i=n.docs.get(e._key),r=new Na(t);return new xa(t,r,e._key,i,new ka(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){S=t}(s.MF),(0,s.om)(new o.uA("firestore",((t,{instanceIdentifier:n,options:i})=>{const r=t.getProvider("app").getImmediate(),s=new Ko(new F(t.getProvider("auth-internal")),new z(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new N($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ft(t.options.projectId,e)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),(0,s.KO)(_,"4.7.3",t),(0,s.KO)(_,"4.7.3","esm2017")}()}}]);
//# sourceMappingURL=chunk-vendors.a37a0477.js.map