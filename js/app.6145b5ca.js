(function(){"use strict";var t={9864:function(t,e,n){var r=n(5130),o=n(6768),i=n(4232);const s={style:{"background-color":"antiquewhite",padding:"16px 16px 16px 16px"}};function a(t,e,n,r,a,l){const c=(0,o.g2)("PriceItem");return(0,o.uX)(),(0,o.CE)("div",s,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.price_list,((t,e)=>((0,o.uX)(),(0,o.Wv)(c,{item:t,style:(0,i.Tr)(e===r.price_list.length-1?"":"margin-bottom: 16px")},null,8,["item","style"])))),256))])}var l=n(1114);class c{static loadCredentials(){return this.table_api_key&&this.table_id&&this.drive_api_key?Promise.resolve():fetch("credentials.json").then((t=>t.json())).then((t=>{this.table_api_key=t.table_api_key,this.table_id=t.table_id,this.drive_api_key=t.drive_api_key})).catch((t=>{throw console.error("Failed to load credentials:",t),t}))}static convertTableToJson(t){const e=t[0];return Promise.all(t.slice(1).map((async t=>{const n={};for(let r=0;r<e.length;r++){const o=e[r];if("photos"===o){const e=t[r]?t[r].split("\n"):[];n[o]=e.map((t=>`https://lh3.googleusercontent.com/d/${this.extractFileId(t)}`))}else n[o]=t[r]||""}return n})))}static extractFileId(t){const e=t.match(/[-\w]{25,}/);return e?e[0]:null}static getData(t){return this.loadCredentials().then((()=>{const e=`https://sheets.googleapis.com/v4/spreadsheets/${this.table_id}/values/${t}?key=${this.table_api_key}`;return fetch(e).then((t=>t.json())).then((t=>this.convertTableToJson(t.values))).catch((t=>{throw console.error("Failed to fetch data from Google Sheets:",t),t}))}))}}(0,l.A)(c,"table_api_key",null),(0,l.A)(c,"table_id",null),(0,l.A)(c,"drive_api_key",null);var u=n(144);const p={style:{padding:"16px","border-radius":"4px","background-color":"white",display:"flex"}},d=["src"],h={key:1,style:{width:"100px",height:"100px",display:"flex","align-items":"center","justify-content":"center","margin-right":"16px","background-color":"rgba(0,0,0,0.2)","border-radius":"4px"}},f={style:{"padding-bottom":"16px","font-size":"16px","font-weight":"bold"}},v={style:{}};function g(t,e,n,r,s,a){return(0,o.uX)(),(0,o.CE)("div",p,[n.item.photos[0]?((0,o.uX)(),(0,o.CE)("img",{key:0,src:n.item.photos[0],alt:"image",width:"100px",height:"100px",style:{"margin-right":"16px","border-radius":"4px"}},null,8,d)):((0,o.uX)(),(0,o.CE)("div",h,"NO IMAGE")),(0,o.Lk)("div",null,[(0,o.Lk)("div",f,(0,i.v_)(t.$props.item.name),1),(0,o.Lk)("div",v,(0,i.v_)(t.$props.item.description),1)])])}var b={name:"PriceItem",props:{item:Object}},_=n(1241);const m=(0,_.A)(b,[["render",g]]);var y=m,x={name:"App",components:{PriceItem:y},setup(){const t=(0,u.KR)([]),e="test!A1:D6";return c.getData(e).then((e=>{t.value=e,console.log("Данные получены:",e)})).catch((t=>{console.error("Ошибка при получении данных:",t)})),{price_list:t}}};const k=(0,_.A)(x,[["render",a]]);var w=k;(0,r.Ef)(w).mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var s=1/0;for(u=0;u<t.length;u++){r=t[u][0],o=t[u][1],i=t[u][2];for(var a=!0,l=0;l<r.length;l++)(!1&i||s>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(a=!1,i<s&&(s=i));if(a){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,s=r[0],a=r[1],l=r[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(l)var u=l(n)}for(e&&e(r);c<s.length;c++)i=s[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(u)},r=self["webpackChunktest_google_docs_bd"]=self["webpackChunktest_google_docs_bd"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(9864)}));r=n.O(r)})();
//# sourceMappingURL=app.6145b5ca.js.map