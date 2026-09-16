var ProPresenterPresentationCard=(function(y){"use strict";var Wt=Object.defineProperty;var Ft=(y,g,b)=>g in y?Wt(y,g,{enumerable:!0,configurable:!0,writable:!0,value:b}):y[g]=b;var d=(y,g,b)=>Ft(y,typeof g!="symbol"?g+"":g,b);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ft;const g=globalThis,b=g.ShadowRoot&&(g.ShadyCSS===void 0||g.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,z=Symbol(),J=new WeakMap;let Y=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(b&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=J.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&J.set(t,e))}return e}toString(){return this.cssText}};const bt=n=>new Y(typeof n=="string"?n:n+"",void 0,z),vt=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,s,a)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[a+1],n[0]);return new Y(t,n,z)},$t=(n,e)=>{if(b)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=g.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)}},X=b?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return bt(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:wt,defineProperty:Pt,getOwnPropertyDescriptor:At,getOwnPropertyNames:xt,getOwnPropertySymbols:Ut,getPrototypeOf:St}=Object,v=globalThis,tt=v.trustedTypes,Tt=tt?tt.emptyScript:"",D=v.reactiveElementPolyfillSupport,C=(n,e)=>n,B={toAttribute(n,e){switch(e){case Boolean:n=n?Tt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},et=(n,e)=>!wt(n,e),it={attribute:!0,type:String,converter:B,reflect:!1,useDefault:!1,hasChanged:et};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),v.litPropertyMetadata??(v.litPropertyMetadata=new WeakMap);let S=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=it){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Pt(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:a}=At(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:s,set(r){const l=s==null?void 0:s.call(this);a==null||a.call(this,r),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??it}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const e=St(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const t=this.properties,i=[...xt(t),...Ut(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(X(s))}else e!==void 0&&t.push(X(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $t(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var a;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const r=(((a=i.converter)==null?void 0:a.toAttribute)!==void 0?i.converter:B).toAttribute(t,i.type);this._$Em=e,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(e,t){var a,r;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const l=i.getPropertyOptions(s),o=typeof l.converter=="function"?{fromAttribute:l.converter}:((a=l.converter)==null?void 0:a.fromAttribute)!==void 0?l.converter:B;this._$Em=s;const h=o.fromAttribute(t,l.type);this[s]=h??((r=this._$Ej)==null?void 0:r.get(s))??h,this._$Em=null}}requestUpdate(e,t,i,s=!1,a){var r;if(e!==void 0){const l=this.constructor;if(s===!1&&(a=this[e]),i??(i=l.getPropertyOptions(e)),!((i.hasChanged??et)(a,t)||i.useDefault&&i.reflect&&a===((r=this._$Ej)==null?void 0:r.get(e))&&!this.hasAttribute(l._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:a},r){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,r??t??this[e]),a!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,r]of this._$Ep)this[a]=r;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[a,r]of s){const{wrapped:l}=r,o=this[a];l!==!0||this._$AL.has(a)||o===void 0||this.C(a,void 0,r,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var a;return(a=s.hostUpdate)==null?void 0:a.call(s)}),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[C("elementProperties")]=new Map,S[C("finalized")]=new Map,D==null||D({ReactiveElement:S}),(v.reactiveElementVersions??(v.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,st=n=>n,N=R.trustedTypes,nt=N?N.createPolicy("lit-html",{createHTML:n=>n}):void 0,rt="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,at="?"+$,Et=`<${at}>`,w=document,q=()=>w.createComment(""),k=n=>n===null||typeof n!="object"&&typeof n!="function",K=Array.isArray,Ct=n=>K(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",W=`[ 	
\f\r]`,M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ot=/-->/g,lt=/>/g,P=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ht=/'/g,dt=/"/g,ct=/^(?:script|style|textarea|title)$/i,Rt=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),p=Rt(1),T=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),ut=new WeakMap,A=w.createTreeWalker(w,129);function _t(n,e){if(!K(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return nt!==void 0?nt.createHTML(e):e}const qt=(n,e)=>{const t=n.length-1,i=[];let s,a=e===2?"<svg>":e===3?"<math>":"",r=M;for(let l=0;l<t;l++){const o=n[l];let h,u,c=-1,m=0;for(;m<o.length&&(r.lastIndex=m,u=r.exec(o),u!==null);)m=r.lastIndex,r===M?u[1]==="!--"?r=ot:u[1]!==void 0?r=lt:u[2]!==void 0?(ct.test(u[2])&&(s=RegExp("</"+u[2],"g")),r=P):u[3]!==void 0&&(r=P):r===P?u[0]===">"?(r=s??M,c=-1):u[1]===void 0?c=-2:(c=r.lastIndex-u[2].length,h=u[1],r=u[3]===void 0?P:u[3]==='"'?dt:ht):r===dt||r===ht?r=P:r===ot||r===lt?r=M:(r=P,s=void 0);const f=r===P&&n[l+1].startsWith("/>")?" ":"";a+=r===M?o+Et:c>=0?(i.push(h),o.slice(0,c)+rt+o.slice(c)+$+f):o+$+(c===-2?l:f)}return[_t(n,a+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class I{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let a=0,r=0;const l=e.length-1,o=this.parts,[h,u]=qt(e,t);if(this.el=I.createElement(h,i),A.currentNode=this.el.content,t===2||t===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=A.nextNode())!==null&&o.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(rt)){const m=u[r++],f=s.getAttribute(c).split($),U=/([.?@])?(.*)/.exec(m);o.push({type:1,index:a,name:U[2],strings:f,ctor:U[1]==="."?Mt:U[1]==="?"?It:U[1]==="@"?Lt:H}),s.removeAttribute(c)}else c.startsWith($)&&(o.push({type:6,index:a}),s.removeAttribute(c));if(ct.test(s.tagName)){const c=s.textContent.split($),m=c.length-1;if(m>0){s.textContent=N?N.emptyScript:"";for(let f=0;f<m;f++)s.append(c[f],q()),A.nextNode(),o.push({type:2,index:++a});s.append(c[m],q())}}}else if(s.nodeType===8)if(s.data===at)o.push({type:2,index:a});else{let c=-1;for(;(c=s.data.indexOf($,c+1))!==-1;)o.push({type:7,index:a}),c+=$.length-1}a++}}static createElement(e,t){const i=w.createElement("template");return i.innerHTML=e,i}}function E(n,e,t=n,i){var r,l;if(e===T)return e;let s=i!==void 0?(r=t._$Co)==null?void 0:r[i]:t._$Cl;const a=k(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==a&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),a===void 0?s=void 0:(s=new a(n),s._$AT(n,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=E(n,s._$AS(n,e.values),s,i)),e}class kt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??w).importNode(t,!0);A.currentNode=s;let a=A.nextNode(),r=0,l=0,o=i[0];for(;o!==void 0;){if(r===o.index){let h;o.type===2?h=new L(a,a.nextSibling,this,e):o.type===1?h=new o.ctor(a,o.name,o.strings,this,e):o.type===6&&(h=new Ot(a,this,e)),this._$AV.push(h),o=i[++l]}r!==(o==null?void 0:o.index)&&(a=A.nextNode(),r++)}return A.currentNode=w,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class L{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=E(this,e,t),k(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==T&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ct(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==_&&k(this._$AH)?this._$AA.nextSibling.data=e:this.T(w.createTextNode(e)),this._$AH=e}$(e){var a;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=I.createElement(_t(i.h,i.h[0]),this.options)),i);if(((a=this._$AH)==null?void 0:a._$AD)===s)this._$AH.p(t);else{const r=new kt(s,this),l=r.u(this.options);r.p(t),this.T(l),this._$AH=r}}_$AC(e){let t=ut.get(e.strings);return t===void 0&&ut.set(e.strings,t=new I(e)),t}k(e){K(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const a of e)s===t.length?t.push(i=new L(this.O(q()),this.O(q()),this,this.options)):i=t[s],i._$AI(a),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e!==this._$AB;){const s=st(e).nextSibling;st(e).remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,a){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=_}_$AI(e,t=this,i,s){const a=this.strings;let r=!1;if(a===void 0)e=E(this,e,t,0),r=!k(e)||e!==this._$AH&&e!==T,r&&(this._$AH=e);else{const l=e;let o,h;for(e=a[0],o=0;o<a.length-1;o++)h=E(this,l[i+o],t,o),h===T&&(h=this._$AH[o]),r||(r=!k(h)||h!==this._$AH[o]),h===_?e=_:e!==_&&(e+=(h??"")+a[o+1]),this._$AH[o]=h}r&&!s&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Mt extends H{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}}class It extends H{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}}class Lt extends H{constructor(e,t,i,s,a){super(e,t,i,s,a),this.type=5}_$AI(e,t=this){if((e=E(this,e,t,0)??_)===T)return;const i=this._$AH,s=e===_&&i!==_||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==_&&(i===_||s);s&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ot{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){E(this,e)}}const F=R.litHtmlPolyfillSupport;F==null||F(I,L),(R.litHtmlVersions??(R.litHtmlVersions=[])).push("3.3.3");const Nt=(n,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const a=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new L(e.insertBefore(q(),a),a,void 0,t??{})}return s._$AI(n),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=globalThis;class O extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Nt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return T}}O._$litElement$=!0,O.finalized=!0,(ft=x.litElementHydrateSupport)==null||ft.call(x,{LitElement:O});const V=x.litElementPolyfillSupport;V==null||V({LitElement:O}),(x.litElementVersions??(x.litElementVersions=[])).push("4.2.2");const Q={grid:{label:"Grid",tokens:{"--pp-card-radius":"18px","--pp-card-padding":"14px","--pp-gap":"10px","--pp-tile-radius":"12px","--pp-accent":"var(--primary-color, #03a9f4)","--pp-muted":"var(--secondary-text-color, #727272)","--pp-surface":"var(--card-background-color, var(--ha-card-background, #fff))","--pp-tile-surface":"color-mix(in srgb, var(--pp-surface) 92%, var(--pp-accent))"}}};function Ht(n){const e=Q[n??"grid"]??Q.grid;return Object.entries(e.tokens).map(([t,i])=>`${t}: ${i};`).join(" ")}const G="Home Assistant could not complete the request",j={design:"grid",columns:"auto",browser_height:560,internal_scroll:!0,thumbnail_quality:400,show_group_labels:!0,show_slide_labels:!0,show_slide_numbers:!0,show_notes:!1,read_only:!1,confirm_trigger:!1,follow_live:!0};function jt(n){if(!n||typeof n.entity!="string"||!n.entity)throw new Error("You must select a ProPresenter active-presentation sensor");const e=typeof n.browser_height=="number"&&Number.isFinite(n.browser_height)?Math.min(1200,Math.max(240,Math.round(n.browser_height))):j.browser_height;return{...j,...n,design:n.design&&n.design in{grid:!0}?n.design:"grid",browser_height:e,internal_scroll:n.internal_scroll!==!1}}function pt(n){const e=(n==null?void 0:n.attributes)??{};return[e.presentation_uuid??"",e.metadata_revision??"",e.metadata_available??!1].join("|")}function zt(n,e,t,i,s){return`/api/propresenter/thumbnail/${encodeURIComponent(n)}/${encodeURIComponent(e)}/${t}?quality=${encodeURIComponent(i)}&revision=${encodeURIComponent(s)}`}function Dt(n,e,t,i){if(!t||!i)throw new Error("A current presentation UUID and metadata revision are required");return{entity_id:n,slide_index:e,expected_presentation_uuid:t,expected_metadata_revision:i}}function Bt(n,e,t,i,s,a){if(!e||!t||i===null||i<0||!s||!a)throw new Error("A current playlist UUID, item key, item index, presentation UUID, and playlist revision are required");return{entity_id:n,playlist_uuid:e,item_key:t,item_index:i,presentation_uuid:s,expected_playlist_revision:a}}function mt(n){if(n instanceof Error&&n.message)return n.message;if(typeof n=="string"&&n.trim())return n;if(!n||typeof n!="object")return G;const e=n;if(e.error&&e.error!==n){const s=mt(e.error);if(s!==G)return s}const t=[e.message,e.detail,e.reason].find(s=>typeof s=="string"&&s.trim().length>0),i=[e.code,e.error_code].find(s=>typeof s=="string"&&s.trim().length>0);return t&&i&&!t.toLowerCase().startsWith(i.toLowerCase())?`${i}: ${t}`:t||i||G}class Z extends O{constructor(){super(...arguments);d(this,"_config",{entity:"",...j});d(this,"_hass");d(this,"_metadata",null);d(this,"_metadataPromise",null);d(this,"_metadataRequestKey","");d(this,"_metadataRequestSequence",0);d(this,"_playlists",[]);d(this,"_playlistPromise",null);d(this,"_playlistRequestKey","__initial__");d(this,"_playlistRequestSequence",0);d(this,"_playlistRevision",null);d(this,"_lastPlaylistStatePointer","__initial__");d(this,"_selectedPlaylistUuid",null);d(this,"_selectedItemKey",null);d(this,"_selectedPresentationUuid",null);d(this,"_thumbnailUrls",new Map);d(this,"_thumbnailStates",new Map);d(this,"_thumbnailQueue",[]);d(this,"_thumbnailActive",0);d(this,"_thumbnailControllers",new Set);d(this,"_intersectionObserver");d(this,"_followingLive",!0);d(this,"_pendingIndex",null);d(this,"_pendingTimer");d(this,"_pendingPlaylistPresentationUuid",null);d(this,"_playlistPendingTimer");d(this,"_error",null);d(this,"_statusMessage","");d(this,"_lastStatePointer","");d(this,"_lastCurrentIndex",null);d(this,"_refresh",()=>{Promise.all([this._loadPlaylists(!0),this._loadMetadata(!0)])});d(this,"_handlePlaylistChange",t=>{const i=t.target.value;this._selectedPlaylistUuid=i||null,this._selectedItemKey=null,this._selectedPresentationUuid&&(this._selectedPresentationUuid=null,this._metadataRequestSequence+=1,this._metadata=null,this._metadataRequestKey="",this._clearThumbnailUrls(),this._followingLive=!0,this._loadMetadata(!1)),this._error=null,this._statusMessage="",this.requestUpdate()});d(this,"_handleItemChange",t=>{const i=t.target.value,s=this._playlists.find(r=>r.uuid===this._selectedPlaylistUuid),a=s==null?void 0:s.items.find(r=>r.key===i);a&&(this._selectedItemKey=a.key,this._selectedPresentationUuid=a.presentation_uuid,this._followingLive=!1,this._metadataRequestSequence+=1,this._metadata=null,this._metadataRequestKey="",this._clearThumbnailUrls(),this._error=null,this._statusMessage="",this._loadMetadata(!1),this.requestUpdate())});d(this,"_returnToLive",()=>{this._selectedPlaylistUuid=null,this._selectedItemKey=null,this._selectedPresentationUuid=null,this._followingLive=!0,this._metadataRequestSequence+=1,this._metadata=null,this._metadataRequestKey="",this._clearThumbnailUrls(),this._loadMetadata(!1),this.requestUpdate()});d(this,"_toggleFollow",()=>{this._followingLive=!this._followingLive,this._followingLive&&this._scrollToActive(),this.requestUpdate()})}set hass(t){var h;const i=this._state();this._hass=t;const s=this._state(),a=this._playlistPointer(s);a!==this._lastPlaylistStatePointer&&(this._lastPlaylistStatePointer=a,(a!==this._playlistRequestKey||!this._playlists.length)&&!this._playlistPromise&&this._loadPlaylists(!1));const r=pt(s);r!==this._lastStatePointer&&(this._lastStatePointer=r,this._selectedPresentationUuid?this.requestUpdate():(this._metadata=null,this._clearThumbnailUrls(),this._loadMetadata(!1)));const l=this._currentIndex(s),o=this._stringAttribute((h=s==null?void 0:s.attributes)==null?void 0:h.presentation_uuid);this._pendingPlaylistPresentationUuid&&o===this._pendingPlaylistPresentationUuid&&this._confirmPlaylistSwitch(),l!==this._lastCurrentIndex&&(this._lastCurrentIndex=l,this._pendingIndex===l&&this._clearPending("Live cue confirmed"),this._followingLive&&this._scrollToActive()),i!==s&&this.requestUpdate()}get hass(){return this._hass}setConfig(t){this._config=jt(t),this._followingLive=this._config.follow_live??!0,this._metadataRequestSequence+=1,this._playlistRequestSequence+=1,this._metadataRequestKey="",this._playlistRequestKey="__initial__",this._playlistRevision=null,this._lastPlaylistStatePointer="__initial__",this._playlists=[],this._selectedPlaylistUuid=null,this._selectedItemKey=null,this._selectedPresentationUuid=null,this._pendingPlaylistPresentationUuid=null,this._playlistPendingTimer!==void 0&&(window.clearTimeout(this._playlistPendingTimer),this._playlistPendingTimer=void 0),this._clearThumbnailUrls(),this._error=null,this.requestUpdate()}getCardSize(){return 5}static getConfigForm(){return{schema:[{name:"entity",required:!0,selector:{entity:{domain:"sensor",integration:"propresenter"}}},{name:"design",selector:{select:{options:Object.entries(Q).map(([t,i])=>({value:t,label:i.label}))}}},{name:"columns",selector:{select:{options:[{value:"auto",label:"Responsive"},{value:2,label:"2 columns"},{value:3,label:"3 columns"},{value:4,label:"4 columns"},{value:5,label:"5 columns"}]}}},{name:"browser_height",selector:{number:{min:240,max:1200,step:20,mode:"box"}}},{name:"internal_scroll",selector:{boolean:{}}},{name:"thumbnail_quality",selector:{select:{options:[{value:200,label:"Fast (200)"},{value:400,label:"Balanced (400)"},{value:800,label:"Detailed (800)"}]}}},{name:"show_group_labels",selector:{boolean:{}}},{name:"show_slide_labels",selector:{boolean:{}}},{name:"show_slide_numbers",selector:{boolean:{}}},{name:"show_notes",selector:{boolean:{}}},{name:"read_only",selector:{boolean:{}}},{name:"confirm_trigger",selector:{boolean:{}}},{name:"follow_live",selector:{boolean:{}}}]}}static getStubConfig(){return{type:"custom:propresenter-presentation",entity:""}}connectedCallback(){super.connectedCallback(),this._intersectionObserver=new IntersectionObserver(t=>{for(const i of t)if(i.isIntersecting){const s=Number(i.target.dataset.slideIndex);Number.isInteger(s)&&this._queueThumbnail(s)}})}disconnectedCallback(){var t;(t=this._intersectionObserver)==null||t.disconnect(),this._clearThumbnailUrls(),this._pendingTimer!==void 0&&window.clearTimeout(this._pendingTimer),this._playlistPendingTimer!==void 0&&window.clearTimeout(this._playlistPendingTimer),super.disconnectedCallback()}updated(t){super.updated(t),this._intersectionObserver&&(this.renderRoot.querySelectorAll("[data-slide-index]").forEach(i=>{var s;(s=this._intersectionObserver)==null||s.observe(i)}),this._followingLive&&this._scrollToActive())}render(){var u,c,m,f,U;const t=this._state(),i=(t==null?void 0:t.attributes)??{},s=typeof i.slide_layer_active=="boolean"?i.slide_layer_active:((u=this._metadata)==null?void 0:u.slide_layer_active)??!0,a=((c=this._metadata)==null?void 0:c.presentation_name)??(t!=null&&t.state&&!["unknown","unavailable"].includes(t.state)?t.state:this._stringAttribute(i.presentation_name)??this._stringAttribute(i.friendly_name)??"ProPresenter"),r=((m=this._metadata)==null?void 0:m.groups)??[],l=this._config.columns==="auto"||this._config.columns===void 0?"auto-fit":String(this._config.columns),o=this._config.browser_height??j.browser_height,h=`${Ht(this._config.design)} --pp-columns: ${l}; --pp-browser-height: ${o}px;`;return p`
      <article class="card" style=${h}>
        <div class="toolbar">
          <div class="heading">
            <h2>${a}</h2>
            <p class="subtitle">${this._subtitle(i)}</p>
          </div>
          <div class="toolbar-actions">
            <button @click=${this._toggleFollow} title="Follow the live cue">
              ${this._followingLive?"Following":"Browse"}
            </button>
            <button @click=${this._refresh} title="Refresh presentation metadata">↻</button>
          </div>
        </div>
        ${s?_:p`<div class="banner warning">Output cleared · the active cue is still shown below</div>`}
        ${this._error?p`<div class="banner error">${this._error.message}</div>`:_}
        ${this._statusMessage?p`<div class="banner">${this._statusMessage}</div>`:_}
        ${this._renderPlaylistPicker()}
        ${this._selectedPresentationUuid?p`<div class="banner browse-note">
              <span>Browsing playlist item · live output is unchanged</span>
              <button @click=${this._returnToLive}>Live</button>
            </div>`:_}
        ${((f=this._metadata)==null?void 0:f.protocol_version)!==void 0&&this._metadata.protocol_version!==1?p`<div class="banner error">This card needs a newer integration protocol.</div>`:_}
        ${r.length?p`<div
              class=${this._config.internal_scroll===!1?"slide-browser no-scroll":"slide-browser"}
              role="region"
              aria-label="Presentation slides"
            ><div class="groups">${r.map(yt=>p`
              <section>
                ${this._config.show_group_labels?p`<h3 class="group-title">${yt.label}</h3>`:_}
                <div class="grid">
                  ${yt.slides.map(Kt=>this._renderSlide(Kt))}
                </div>
              </section>
            `)}</div></div>`:p`<p class="muted">${((U=this._metadata)==null?void 0:U.metadata_available)===!1||!this._metadata?"Loading presentation slides…":"No active presentation"}</p>`}
      </article>
    `}_renderSlide(t){const i=!this._selectedPresentationUuid&&this._currentIndex(this._state())===t.index,s=t.enabled===!1,a=!this._selectedPresentationUuid&&!this._config.read_only&&!s&&!this._isEditorPreview(),r=`tile ${i?"active":""} ${s?"disabled":""}`,l=p`
      <div class="thumbnail" data-slide-index=${t.index}>
        ${this._thumbnailUrls.has(t.index)?p`<img src=${this._thumbnailUrls.get(t.index)} alt=${t.label} />`:p`<span>${this._thumbnailPlaceholder(t.index)}</span>`}
      </div>
      <div class="tile-content">
        ${this._config.show_slide_labels?p`<span class="tile-label">${t.label}</span>`:_}
        ${this._config.show_slide_numbers?p`<span class="tile-index">Slide ${t.index+1}${s?" · disabled":""}</span>`:_}
        ${this._config.show_notes&&t.notes?p`<span class="notes">${t.notes}</span>`:_}
      </div>
      ${this._pendingIndex===t.index?p`<span class="pending">Pending</span>`:_}
    `;return a?p`<button id=${this._slideId(t.index)} class=${r} @click=${()=>this._trigger(t)}>${l}</button>`:p`<div id=${this._slideId(t.index)} class=${r} aria-disabled="true">${l}</div>`}async _loadMetadata(t){if(!this._hass||!this._config.entity)return;const i=this._state(),s=this._selectedPresentationUuid,a=s?`selected|${s}`:pt(i);if(a===this._metadataRequestKey&&this._metadataPromise)return this._metadataPromise;if(!t&&a===this._metadataRequestKey)return;this._metadataRequestKey=a;const r=++this._metadataRequestSequence,l=(async()=>{try{const o={type:s?"propresenter/get_presentation":"propresenter/get_active_presentation",entity_id:this._config.entity,refresh:t};s&&(o.presentation_uuid=s);const h=await this._hass.callWS(o);if(r!==this._metadataRequestSequence)return;if(h.protocol_version!==1){this._error={message:"The integration and card protocol versions do not match"};return}this._clearThumbnailUrls(),this._metadata=h,this._error=null,this._statusMessage="",this.requestUpdate()}catch(o){if(r!==this._metadataRequestSequence)return;this._error={message:this._errorMessage(o)},this.requestUpdate()}})();this._metadataPromise=l;try{await l}finally{this._metadataPromise===l&&(this._metadataPromise=null)}}_queueThumbnail(t){var i;!((i=this._metadata)!=null&&i.metadata_available)||this._thumbnailUrls.has(t)||this._thumbnailStates.get(t)==="loading"||this._thumbnailStates.get(t)==="loaded"||(this._thumbnailStates.set(t,"loading"),this._thumbnailQueue.push(t),this._drainThumbnailQueue())}_drainThumbnailQueue(){for(;this._thumbnailActive<4&&this._thumbnailQueue.length;){const t=this._thumbnailQueue.shift();this._thumbnailActive+=1,this._fetchThumbnail(t).finally(()=>{this._thumbnailActive-=1,this._drainThumbnailQueue()})}}async _fetchThumbnail(t){const i=this._metadata;if(!(i!=null&&i.metadata_available)||!i.presentation_uuid||!i.metadata_revision){this._thumbnailStates.set(t,"error");return}const s=zt(this._config.entity,i.presentation_uuid,t,this._config.thumbnail_quality??400,i.metadata_revision),a=`${i.presentation_uuid}|${i.metadata_revision}`,r=new AbortController;this._thumbnailControllers.add(r);try{const l=await this._hass.callWS({type:"auth/sign_path",path:s,expires:60}),o=l.path??l.signed_path;if(!o)throw new Error("Home Assistant did not return a signed thumbnail path");const h=await fetch(this._hass.hassUrl(o),{credentials:"same-origin",signal:r.signal});if(h.status===401||h.status===403){const u=await this._hass.callWS({type:"auth/sign_path",path:s,expires:60}),c=u.path??u.signed_path;if(!c)throw new Error("Thumbnail authorization expired");const m=await fetch(this._hass.hassUrl(c),{credentials:"same-origin",signal:r.signal});if(!m.ok)throw new Error(`Thumbnail request failed (${m.status})`);this._setThumbnailUrl(t,URL.createObjectURL(await m.blob()),a);return}if(!h.ok)throw h.status===409&&await this._loadMetadata(!0),new Error(`Thumbnail request failed (${h.status})`);this._setThumbnailUrl(t,URL.createObjectURL(await h.blob()),a)}catch(l){if(r.signal.aborted)return;this._thumbnailStates.set(t,"error"),this._error={message:this._errorMessage(l)},this.requestUpdate()}finally{this._thumbnailControllers.delete(r)}}_setThumbnailUrl(t,i,s){const a=this._metadata?`${this._metadata.presentation_uuid}|${this._metadata.metadata_revision}`:"";if(!this.isConnected||a!==s){URL.revokeObjectURL(i);return}const r=this._thumbnailUrls.get(t);r&&URL.revokeObjectURL(r),this._thumbnailUrls.set(t,i),this._thumbnailStates.set(t,"loaded"),this.requestUpdate()}async _trigger(t){if(this._config.read_only||t.enabled===!1||this._isEditorPreview()||!this._hass||this._config.confirm_trigger&&!window.confirm(`Trigger “${t.label}”?`))return;const i=this._metadata;if(!(i!=null&&i.presentation_uuid)||!i.metadata_revision){this._error={message:"Refresh the presentation before triggering a slide"},this.requestUpdate();return}this._pendingIndex=t.index,this._statusMessage="Command pending · waiting for live confirmation",this._error=null,this.requestUpdate();try{await this._hass.callService("propresenter","trigger_slide",Dt(this._config.entity,t.index,i.presentation_uuid,i.metadata_revision)),this._pendingTimer=window.setTimeout(()=>{this._pendingIndex===t.index&&(this._pendingIndex=null,this._statusMessage="Trigger sent, but live confirmation is unavailable",this.requestUpdate())},5e3)}catch(s){this._pendingIndex=null,this._statusMessage="";const a=this._errorMessage(s),r=/stale|changed|revision|uuid/i.test(a);this._error={message:r?"The presentation changed; refreshing slides":`Trigger failed: ${a}`,stale:r},this.requestUpdate(),r&&await this._loadMetadata(!0)}}_renderPlaylistPicker(){var l,o;if(!this._playlists.length)return _;const t=this._playlists.find(h=>h.uuid===this._selectedPlaylistUuid),i=(t==null?void 0:t.items)??[],s=i.find(h=>h.key===this._selectedItemKey),a=this._stringAttribute((o=(l=this._state())==null?void 0:l.attributes)==null?void 0:o.presentation_uuid),r=!!(s&&s.presentation_uuid!==a&&!this._config.read_only&&!this._isEditorPreview());return p`
      <div class="playlist-picker">
        <select
          aria-label="ProPresenter playlist"
          .value=${this._selectedPlaylistUuid??""}
          @change=${this._handlePlaylistChange}
        >
          <option value="">Choose playlist…</option>
          ${this._playlists.map(h=>p`<option value=${h.uuid}>${h.name}</option>`)}
        </select>
        <select
          aria-label="ProPresenter playlist item"
          .value=${this._selectedItemKey??""}
          ?disabled=${!t}
          @change=${this._handleItemChange}
        >
          <option value="">Choose presentation…</option>
          ${i.map(h=>p`<option value=${h.key}>
              ${h.path?`${h.path} · `:""}${h.name}${h.presentation_uuid===a?" · LIVE":""}
            </option>`)}
        </select>
      </div>
      ${r?p`<div class="playlist-actions">
            <button
              @click=${this._makeSelectedPlaylistItemLive}
              ?disabled=${!!this._pendingPlaylistPresentationUuid}
              title="Switch ProPresenter to this playlist item"
            >
              ${this._pendingPlaylistPresentationUuid?"Switching…":"Go live"}
            </button>
          </div>`:_}
    `}async _makeSelectedPlaylistItemLive(){var r,l;if(this._config.read_only||this._isEditorPreview()||!this._hass||!this._selectedPlaylistUuid||!this._selectedItemKey)return;const t=this._playlists.find(o=>o.uuid===this._selectedPlaylistUuid),i=t==null?void 0:t.items.find(o=>o.key===this._selectedItemKey);if(!i)return;const s=this._stringAttribute((l=(r=this._state())==null?void 0:r.attributes)==null?void 0:l.presentation_uuid);if(i.presentation_uuid===s)return;if(!this._playlistRevision){this._error={message:"Refresh the playlist before switching live items"},this.requestUpdate();return}if(this._config.confirm_trigger&&!window.confirm(`Make “${i.name}” live in ProPresenter?`))return;const a=i.presentation_uuid;this._pendingPlaylistPresentationUuid=a,this._statusMessage="Playlist switch pending · waiting for live confirmation",this._error=null,this.requestUpdate();try{if(await this._hass.callService("propresenter","trigger_playlist_item",Bt(this._config.entity,this._selectedPlaylistUuid,i.key,i.index,a,this._playlistRevision)),this._pendingPlaylistPresentationUuid!==a)return;this._returnToLive(),this._statusMessage="Playlist switch sent · waiting for live confirmation",this._playlistPendingTimer=window.setTimeout(()=>{this._pendingPlaylistPresentationUuid===a&&(this._pendingPlaylistPresentationUuid=null,this._playlistPendingTimer=void 0,this._statusMessage="Playlist switch sent, but live confirmation is unavailable",this.requestUpdate())},5e3),this.requestUpdate()}catch(o){this._pendingPlaylistPresentationUuid=null,this._playlistPendingTimer!==void 0&&(window.clearTimeout(this._playlistPendingTimer),this._playlistPendingTimer=void 0),this._statusMessage="";const h=this._errorMessage(o),u=/stale|changed|revision|playlist|item/i.test(h);this._error={message:u?"The playlist changed; refreshing playlist items":`Playlist switch failed: ${h}`,stale:u},this.requestUpdate(),u&&await this._loadPlaylists(!0)}}async _loadPlaylists(t){if(!this._hass||!this._config.entity)return;if(this._playlistPromise)return this._playlistPromise;const i=this._playlistPointer(this._state());if(!t&&this._playlists.length&&i===this._playlistRequestKey)return;const s=++this._playlistRequestSequence,a=(async()=>{try{const r=await this._hass.callWS({type:"propresenter/get_presentation_playlists",entity_id:this._config.entity,refresh:t});if(s!==this._playlistRequestSequence)return;if(!r||r.protocol_version!==1){this._error={message:"The integration and card protocol versions do not match"};return}this._playlists=Array.isArray(r.playlists)?r.playlists.filter(l=>!!(l!=null&&l.uuid)&&Array.isArray(l.items)):[],this._playlistRevision=r.playlist_revision,this._playlistRequestKey=r.playlist_revision??i,this._selectedPresentationUuid&&!this._playlists.some(l=>l.items.some(o=>o.presentation_uuid===this._selectedPresentationUuid))&&this._returnToLive(),this.requestUpdate()}catch(r){if(s!==this._playlistRequestSequence)return;this._error={message:this._errorMessage(r)},this._playlistRequestKey="",this._playlistRevision=null,this.requestUpdate()}})();this._playlistPromise=a;try{await a}finally{this._playlistPromise===a&&(this._playlistPromise=null)}}_scrollToActive(){const t=this._currentIndex(this._state());t!==null&&queueMicrotask(()=>{const i=this.renderRoot.querySelector(`#${this._slideId(t)}`);if(!i)return;const s=this.renderRoot.querySelector(".slide-browser");if(!s||this._config.internal_scroll===!1){i.scrollIntoView({behavior:"smooth",block:"nearest"});return}const a=s.getBoundingClientRect(),r=i.getBoundingClientRect(),l=r.top-a.top+s.scrollTop,o=l+r.height,h=s.scrollTop,u=h+s.clientHeight,c=12;l<h?s.scrollTo({top:Math.max(0,l-c),behavior:"smooth"}):o>u&&s.scrollTo({top:Math.min(s.scrollHeight-s.clientHeight,o-s.clientHeight+c),behavior:"smooth"})})}_clearPending(t){this._pendingIndex=null,this._statusMessage=t,this._pendingTimer!==void 0&&window.clearTimeout(this._pendingTimer),this._pendingTimer=void 0,this.requestUpdate()}_confirmPlaylistSwitch(){this._pendingPlaylistPresentationUuid&&(this._pendingPlaylistPresentationUuid=null,this._playlistPendingTimer!==void 0&&(window.clearTimeout(this._playlistPendingTimer),this._playlistPendingTimer=void 0),this._returnToLive(),this._statusMessage="Live playlist item confirmed",this.requestUpdate())}_clearThumbnailUrls(){for(const t of this._thumbnailControllers)t.abort();this._thumbnailControllers.clear();for(const t of this._thumbnailUrls.values())URL.revokeObjectURL(t);this._thumbnailUrls.clear(),this._thumbnailStates.clear(),this._thumbnailQueue=[]}_state(){var t,i;return(i=(t=this._hass)==null?void 0:t.states)==null?void 0:i[this._config.entity]}_currentIndex(t){var s;const i=(s=t==null?void 0:t.attributes)==null?void 0:s.current_index;return typeof i=="number"?i:Number.isInteger(Number(i))?Number(i):null}_stringAttribute(t){return typeof t=="string"&&t?t:null}_subtitle(t){var l,o,h,u;if(this._selectedPresentationUuid){const c=this._stringAttribute((l=this._state())==null?void 0:l.state),m=(o=this._metadata)==null?void 0:o.slide_count;return["Browsing playlist item",m?`${m} slides`:"",c?`Live: ${c}`:""].filter(Boolean).join(" · ")}const i=this._currentIndex(this._state()),s=typeof((h=this._metadata)==null?void 0:h.slide_count)=="number"?this._metadata.slide_count:typeof t.slide_count=="number"?t.slide_count:null,a=this._stringAttribute(t.current_label)??((u=this._metadata)==null?void 0:u.current_slide_label);return[i!==null&&s!==null?`${i+1} / ${s}`:"",a].filter(Boolean).join(" · ")||"Waiting for ProPresenter"}_thumbnailPlaceholder(t){return this._thumbnailStates.get(t)==="error"?"Thumbnail unavailable":"Loading thumbnail…"}_playlistPointer(t){var i;return this._stringAttribute((i=t==null?void 0:t.attributes)==null?void 0:i.playlist_revision)??""}_slideId(t){return`propresenter-slide-${t}`}_isEditorPreview(){let t=this;for(;t;){if(t instanceof Element){const i=t.localName;if(i.includes("preview")||i.includes("editor"))return!0}t instanceof ShadowRoot?t=t.host:t=t.parentNode}return!1}_errorMessage(t){return mt(t)}}d(Z,"styles",vt`
    :host {
      display: block;
      color: var(--primary-text-color);
    }

    .card {
      box-sizing: border-box;
      padding: var(--pp-card-padding);
      border-radius: var(--pp-card-radius);
      background: var(--pp-surface);
      overflow: hidden;
    }

    .toolbar,
    .status-row {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .toolbar {
      justify-content: space-between;
      margin-bottom: 12px;
    }

    .heading {
      min-width: 0;
    }

    h2,
    p {
      margin: 0;
    }

    h2 {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 1.05rem;
    }

    .subtitle,
    .muted,
    .notes {
      color: var(--pp-muted);
      font-size: 0.78rem;
    }

    .toolbar-actions {
      display: flex;
      flex: 0 0 auto;
      gap: 6px;
    }

    .playlist-picker {
      display: grid;
      grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
      gap: 8px;
      margin-bottom: 12px;
    }

    .playlist-actions {
      display: flex;
      gap: 8px;
      margin: -4px 0 12px;
    }

    select {
      min-width: 0;
      border: 1px solid color-mix(in srgb, var(--primary-text-color) 18%, transparent);
      border-radius: 10px;
      color: var(--primary-text-color);
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.14));
      font: inherit;
      padding: 8px 10px;
    }

    .browse-note {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      margin: 0 0 10px;
    }

    button {
      border: 0;
      border-radius: 999px;
      color: var(--primary-text-color);
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.14));
      cursor: pointer;
      font: inherit;
      padding: 7px 10px;
    }

    button:hover {
      background: color-mix(in srgb, var(--pp-accent) 18%, transparent);
    }

    button:disabled {
      cursor: wait;
      opacity: 0.62;
    }

    .banner {
      border-radius: 10px;
      margin: 0 0 10px;
      padding: 8px 10px;
      font-size: 0.8rem;
    }

    .banner.warning {
      background: color-mix(in srgb, #ffb300 22%, transparent);
    }

    .banner.error {
      background: color-mix(in srgb, #f44336 18%, transparent);
    }

    .groups {
      display: grid;
      gap: 14px;
    }

    .slide-browser {
      max-height: var(--pp-browser-height);
      overflow-x: hidden;
      overflow-y: auto;
      padding-right: 4px;
      overscroll-behavior: contain;
      scrollbar-gutter: stable;
      -webkit-overflow-scrolling: touch;
    }

    .slide-browser.no-scroll {
      max-height: none;
      overflow: visible;
      padding-right: 0;
    }

    .group-title {
      margin: 0 0 7px;
      color: var(--pp-muted);
      font-size: 0.78rem;
      font-weight: 600;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(var(--pp-columns), minmax(0, 1fr));
      gap: var(--pp-gap);
    }

    .tile {
      position: relative;
      min-width: 0;
      padding: 0;
      border: 2px solid transparent;
      border-radius: var(--pp-tile-radius);
      overflow: hidden;
      text-align: left;
      background: var(--pp-tile-surface);
    }

    .tile.active {
      border-color: var(--pp-accent);
      box-shadow: 0 0 0 1px color-mix(in srgb, var(--pp-accent) 35%, transparent);
    }

    .tile.disabled {
      cursor: not-allowed;
      filter: grayscale(0.5);
      opacity: 0.52;
    }

    .thumbnail {
      aspect-ratio: 16 / 9;
      display: grid;
      place-items: center;
      background: var(--secondary-background-color, #e8e8e8);
      color: var(--pp-muted);
      font-size: 0.75rem;
    }

    .thumbnail img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .tile-content {
      display: grid;
      gap: 2px;
      padding: 8px;
    }

    .tile-label {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 0.82rem;
      font-weight: 600;
    }

    .tile-index {
      color: var(--pp-muted);
      font-size: 0.7rem;
    }

    .pending {
      position: absolute;
      top: 7px;
      right: 7px;
      border-radius: 999px;
      padding: 3px 6px;
      background: var(--pp-accent);
      color: var(--text-primary-color, white);
      font-size: 0.68rem;
    }

    @media (max-width: 520px) {
      .playlist-picker {
        grid-template-columns: 1fr;
      }

      .grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
  `),customElements.get("propresenter-presentation")||customElements.define("propresenter-presentation",Z);const gt=window.customCards??(window.customCards=[]);return gt.some(n=>n.type==="propresenter-presentation")||gt.push({type:"propresenter-presentation",name:"ProPresenter Presentation",description:"A dynamic, guarded ProPresenter slide browser",preview:!0,documentationURL:"https://github.com/media-dotcom/lovelace-propresenter-presentation"}),y.ProPresenterPresentationCard=Z,Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}),y})({});
