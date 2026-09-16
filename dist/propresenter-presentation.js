var ProPresenterPresentationCard=(function(y){"use strict";var Qe=Object.defineProperty;var Ge=(y,g,b)=>g in y?Qe(y,g,{enumerable:!0,configurable:!0,writable:!0,value:b}):y[g]=b;var c=(y,g,b)=>Ge(y,typeof g!="symbol"?g+"":g,b);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ve;const g=globalThis,b=g.ShadowRoot&&(g.ShadyCSS===void 0||g.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,z=Symbol(),J=new WeakMap;let Y=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(b&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=J.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&J.set(e,t))}return t}toString(){return this.cssText}};const we=n=>new Y(typeof n=="string"?n:n+"",void 0,z),Pe=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((i,s,r)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new Y(e,n,z)},xe=(n,t)=>{if(b)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=g.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)}},X=b?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return we(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ae,defineProperty:Se,getOwnPropertyDescriptor:Ue,getOwnPropertyNames:Te,getOwnPropertySymbols:Ee,getPrototypeOf:Ce}=Object,v=globalThis,ee=v.trustedTypes,Re=ee?ee.emptyScript:"",B=v.reactiveElementPolyfillSupport,C=(n,t)=>n,D={toAttribute(n,t){switch(t){case Boolean:n=n?Re:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},te=(n,t)=>!Ae(n,t),ie={attribute:!0,type:String,converter:D,reflect:!1,useDefault:!1,hasChanged:te};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),v.litPropertyMetadata??(v.litPropertyMetadata=new WeakMap);let U=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ie){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Se(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=Ue(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:s,set(a){const l=s==null?void 0:s.call(this);r==null||r.call(this,a),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ie}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const t=Ce(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const e=this.properties,i=[...Te(e),...Ee(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(X(s))}else t!==void 0&&e.push(X(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xe(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){var r;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const a=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:D).toAttribute(e,i.type);this._$Em=t,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(t,e){var r,a;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const l=i.getPropertyOptions(s),o=typeof l.converter=="function"?{fromAttribute:l.converter}:((r=l.converter)==null?void 0:r.fromAttribute)!==void 0?l.converter:D;this._$Em=s;const d=o.fromAttribute(e,l.type);this[s]=d??((a=this._$Ej)==null?void 0:a.get(s))??d,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){var a;if(t!==void 0){const l=this.constructor;if(s===!1&&(r=this[t]),i??(i=l.getPropertyOptions(t)),!((i.hasChanged??te)(r,e)||i.useDefault&&i.reflect&&r===((a=this._$Ej)==null?void 0:a.get(t))&&!this.hasAttribute(l._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},a){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,a??e??this[t]),r!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,a]of this._$Ep)this[r]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,a]of s){const{wrapped:l}=a,o=this[r];l!==!0||this._$AL.has(r)||o===void 0||this.C(r,void 0,a,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var r;return(r=s.hostUpdate)==null?void 0:r.call(s)}),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};U.elementStyles=[],U.shadowRootOptions={mode:"open"},U[C("elementProperties")]=new Map,U[C("finalized")]=new Map,B==null||B({ReactiveElement:U}),(v.reactiveElementVersions??(v.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,se=n=>n,N=R.trustedTypes,ne=N?N.createPolicy("lit-html",{createHTML:n=>n}):void 0,re="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,ae="?"+$,qe=`<${ae}>`,w=document,q=()=>w.createComment(""),M=n=>n===null||typeof n!="object"&&typeof n!="function",K=Array.isArray,Me=n=>K(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",V=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,oe=/-->/g,le=/>/g,P=RegExp(`>|${V}(?:([^\\s"'>=/]+)(${V}*=${V}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),de=/'/g,he=/"/g,ce=/^(?:script|style|textarea|title)$/i,ke=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),_=ke(1),T=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),ue=new WeakMap,x=w.createTreeWalker(w,129);function pe(n,t){if(!K(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ne!==void 0?ne.createHTML(t):t}const Ie=(n,t)=>{const e=n.length-1,i=[];let s,r=t===2?"<svg>":t===3?"<math>":"",a=k;for(let l=0;l<e;l++){const o=n[l];let d,u,h=-1,m=0;for(;m<o.length&&(a.lastIndex=m,u=a.exec(o),u!==null);)m=a.lastIndex,a===k?u[1]==="!--"?a=oe:u[1]!==void 0?a=le:u[2]!==void 0?(ce.test(u[2])&&(s=RegExp("</"+u[2],"g")),a=P):u[3]!==void 0&&(a=P):a===P?u[0]===">"?(a=s??k,h=-1):u[1]===void 0?h=-2:(h=a.lastIndex-u[2].length,d=u[1],a=u[3]===void 0?P:u[3]==='"'?he:de):a===he||a===de?a=P:a===oe||a===le?a=k:(a=P,s=void 0);const f=a===P&&n[l+1].startsWith("/>")?" ":"";r+=a===k?o+qe:h>=0?(i.push(d),o.slice(0,h)+re+o.slice(h)+$+f):o+$+(h===-2?l:f)}return[pe(n,r+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class I{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,a=0;const l=t.length-1,o=this.parts,[d,u]=Ie(t,e);if(this.el=I.createElement(d,i),x.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=x.nextNode())!==null&&o.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(re)){const m=u[a++],f=s.getAttribute(h).split($),S=/([.?@])?(.*)/.exec(m);o.push({type:1,index:r,name:S[2],strings:f,ctor:S[1]==="."?Oe:S[1]==="?"?Ne:S[1]==="@"?He:H}),s.removeAttribute(h)}else h.startsWith($)&&(o.push({type:6,index:r}),s.removeAttribute(h));if(ce.test(s.tagName)){const h=s.textContent.split($),m=h.length-1;if(m>0){s.textContent=N?N.emptyScript:"";for(let f=0;f<m;f++)s.append(h[f],q()),x.nextNode(),o.push({type:2,index:++r});s.append(h[m],q())}}}else if(s.nodeType===8)if(s.data===ae)o.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf($,h+1))!==-1;)o.push({type:7,index:r}),h+=$.length-1}r++}}static createElement(t,e){const i=w.createElement("template");return i.innerHTML=t,i}}function E(n,t,e=n,i){var a,l;if(t===T)return t;let s=i!==void 0?(a=e._$Co)==null?void 0:a[i]:e._$Cl;const r=M(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==r&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),r===void 0?s=void 0:(s=new r(n),s._$AT(n,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=E(n,s._$AS(n,t.values),s,i)),t}class Le{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??w).importNode(e,!0);x.currentNode=s;let r=x.nextNode(),a=0,l=0,o=i[0];for(;o!==void 0;){if(a===o.index){let d;o.type===2?d=new L(r,r.nextSibling,this,t):o.type===1?d=new o.ctor(r,o.name,o.strings,this,t):o.type===6&&(d=new je(r,this,t)),this._$AV.push(d),o=i[++l]}a!==(o==null?void 0:o.index)&&(r=x.nextNode(),a++)}return x.currentNode=w,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class L{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),M(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==T&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Me(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(w.createTextNode(t)),this._$AH=t}$(t){var r;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=I.createElement(pe(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(e);else{const a=new Le(s,this),l=a.u(this.options);a.p(e),this.T(l),this._$AH=a}}_$AC(t){let e=ue.get(t.strings);return e===void 0&&ue.set(t.strings,e=new I(t)),e}k(t){K(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new L(this.O(q()),this.O(q()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t!==this._$AB;){const s=se(t).nextSibling;se(t).remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}_$AI(t,e=this,i,s){const r=this.strings;let a=!1;if(r===void 0)t=E(this,t,e,0),a=!M(t)||t!==this._$AH&&t!==T,a&&(this._$AH=t);else{const l=t;let o,d;for(t=r[0],o=0;o<r.length-1;o++)d=E(this,l[i+o],e,o),d===T&&(d=this._$AH[o]),a||(a=!M(d)||d!==this._$AH[o]),d===p?t=p:t!==p&&(t+=(d??"")+r[o+1]),this._$AH[o]=d}a&&!s&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Oe extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class Ne extends H{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class He extends H{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??p)===T)return;const i=this._$AH,s=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==p&&(i===p||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class je{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const W=R.litHtmlPolyfillSupport;W==null||W(I,L),(R.litHtmlVersions??(R.litHtmlVersions=[])).push("3.3.3");const ze=(n,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const r=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new L(t.insertBefore(q(),r),r,void 0,e??{})}return s._$AI(n),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=globalThis;class O extends U{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ze(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return T}}O._$litElement$=!0,O.finalized=!0,(ve=A.litElementHydrateSupport)==null||ve.call(A,{LitElement:O});const F=A.litElementPolyfillSupport;F==null||F({LitElement:O}),(A.litElementVersions??(A.litElementVersions=[])).push("4.2.2");const Q={grid:{label:"Grid",tokens:{"--pp-card-radius":"18px","--pp-card-padding":"14px","--pp-gap":"10px","--pp-tile-radius":"12px","--pp-accent":"var(--primary-color, #03a9f4)","--pp-muted":"var(--secondary-text-color, #727272)","--pp-surface":"var(--card-background-color, var(--ha-card-background, #fff))","--pp-tile-surface":"color-mix(in srgb, var(--pp-surface) 92%, var(--pp-accent))"}}};function Be(n){const t=Q[n??"grid"]??Q.grid;return Object.entries(t.tokens).map(([e,i])=>`${e}: ${i};`).join(" ")}const G="Home Assistant could not complete the request",j={media_player_entity:null,design:"grid",columns:"auto",browser_height:560,internal_scroll:!0,thumbnail_quality:400,show_group_labels:!0,show_slide_labels:!0,show_slide_numbers:!0,show_notes:!1,read_only:!1,confirm_trigger:!1,follow_live:!0};function De(n){if(!n||typeof n.entity!="string"||!n.entity)throw new Error("You must select a ProPresenter active-presentation sensor");const t=typeof n.browser_height=="number"&&Number.isFinite(n.browser_height)?Math.min(1200,Math.max(240,Math.round(n.browser_height))):j.browser_height;return{...j,...n,design:n.design&&n.design in{grid:!0}?n.design:"grid",browser_height:t,internal_scroll:n.internal_scroll!==!1,media_player_entity:typeof n.media_player_entity=="string"&&n.media_player_entity.trim()?n.media_player_entity.trim():null}}function _e(n){var e;const t=(e=n==null?void 0:n.state)==null?void 0:e.toLowerCase();return t==="playing"||t==="paused"?t:null}function me(n){var i,s;if(!_e(n))return!1;const t=(i=n==null?void 0:n.attributes)==null?void 0:i.media_content_type;if(typeof t=="string"&&t.trim())return t.toLowerCase()==="video";const e=(s=n==null?void 0:n.attributes)==null?void 0:s.media_title;return typeof e=="string"&&!!e.trim()}function ge(n){const t=typeof n=="number"?n:Number(n);if(!Number.isFinite(t)||t<0)return null;const e=Math.floor(t),i=Math.floor(e/3600),s=Math.floor(e%3600/60),r=e%60;return i?`${i}:${String(s).padStart(2,"0")}:${String(r).padStart(2,"0")}`:`${s}:${String(r).padStart(2,"0")}`}function fe(n){const t=(n==null?void 0:n.attributes)??{};return[t.presentation_uuid??"",t.metadata_revision??"",t.metadata_available??!1].join("|")}function Ke(n,t,e,i,s){return`/api/propresenter/thumbnail/${encodeURIComponent(n)}/${encodeURIComponent(t)}/${e}?quality=${encodeURIComponent(i)}&revision=${encodeURIComponent(s)}`}function Ve(n,t,e,i){if(!e||!i)throw new Error("A current presentation UUID and metadata revision are required");return{entity_id:n,slide_index:t,expected_presentation_uuid:e,expected_metadata_revision:i}}function We(n,t,e,i,s,r){if(!t||!e||i===null||i<0||!s||!r)throw new Error("A current playlist UUID, item key, item index, presentation UUID, and playlist revision are required");return{entity_id:n,playlist_uuid:t,item_key:e,item_index:i,presentation_uuid:s,expected_playlist_revision:r}}function ye(n){if(n instanceof Error&&n.message)return n.message;if(typeof n=="string"&&n.trim())return n;if(!n||typeof n!="object")return G;const t=n;if(t.error&&t.error!==n){const s=ye(t.error);if(s!==G)return s}const e=[t.message,t.detail,t.reason].find(s=>typeof s=="string"&&s.trim().length>0),i=[t.code,t.error_code].find(s=>typeof s=="string"&&s.trim().length>0);return e&&i&&!e.toLowerCase().startsWith(i.toLowerCase())?`${i}: ${e}`:e||i||G}class Z extends O{constructor(){super(...arguments);c(this,"_config",{entity:"",...j});c(this,"_hass");c(this,"_metadata",null);c(this,"_metadataPromise",null);c(this,"_metadataRequestKey","");c(this,"_metadataRequestSequence",0);c(this,"_playlists",[]);c(this,"_playlistPromise",null);c(this,"_playlistRequestKey","__initial__");c(this,"_playlistRequestSequence",0);c(this,"_playlistRevision",null);c(this,"_lastPlaylistStatePointer","__initial__");c(this,"_selectedPlaylistUuid",null);c(this,"_selectedItemKey",null);c(this,"_selectedPresentationUuid",null);c(this,"_thumbnailUrls",new Map);c(this,"_thumbnailStates",new Map);c(this,"_thumbnailQueue",[]);c(this,"_thumbnailActive",0);c(this,"_thumbnailControllers",new Set);c(this,"_intersectionObserver");c(this,"_followingLive",!0);c(this,"_pendingIndex",null);c(this,"_pendingTimer");c(this,"_pendingPlaylistPresentationUuid",null);c(this,"_playlistPendingTimer");c(this,"_mediaPendingCommand",null);c(this,"_mediaCommandTimer");c(this,"_error",null);c(this,"_statusMessage","");c(this,"_lastStatePointer","");c(this,"_lastCurrentIndex",null);c(this,"_refresh",()=>{Promise.all([this._loadPlaylists(!0),this._loadMetadata(!0)])});c(this,"_handlePlaylistChange",e=>{const i=e.target.value;this._selectedPlaylistUuid=i||null,this._selectedItemKey=null,this._selectedPresentationUuid&&(this._selectedPresentationUuid=null,this._metadataRequestSequence+=1,this._metadata=null,this._metadataRequestKey="",this._clearThumbnailUrls(),this._followingLive=!0,this._loadMetadata(!1)),this._error=null,this._statusMessage="",this.requestUpdate()});c(this,"_handleItemChange",e=>{const i=e.target.value,s=this._playlists.find(a=>a.uuid===this._selectedPlaylistUuid),r=s==null?void 0:s.items.find(a=>a.key===i);r&&(this._selectedItemKey=r.key,this._selectedPresentationUuid=r.presentation_uuid,this._followingLive=!1,this._metadataRequestSequence+=1,this._metadata=null,this._metadataRequestKey="",this._clearThumbnailUrls(),this._error=null,this._statusMessage="",this._loadMetadata(!1),this.requestUpdate())});c(this,"_returnToLive",()=>{this._selectedPlaylistUuid=null,this._selectedItemKey=null,this._selectedPresentationUuid=null,this._followingLive=!0,this._metadataRequestSequence+=1,this._metadata=null,this._metadataRequestKey="",this._clearThumbnailUrls(),this._loadMetadata(!1),this.requestUpdate()});c(this,"_toggleFollow",()=>{this._followingLive=!this._followingLive,this._followingLive&&this._scrollToActive(),this.requestUpdate()})}set hass(e){var h;const i=this._state(),s=this._mediaPlayerState();this._hass=e;const r=this._state(),a=this._mediaPlayerState(),l=this._playlistPointer(r);l!==this._lastPlaylistStatePointer&&(this._lastPlaylistStatePointer=l,(l!==this._playlistRequestKey||!this._playlists.length)&&!this._playlistPromise&&this._loadPlaylists(!1));const o=fe(r);o!==this._lastStatePointer&&(this._lastStatePointer=o,this._selectedPresentationUuid?this.requestUpdate():(this._metadata=null,this._clearThumbnailUrls(),this._loadMetadata(!1)));const d=this._currentIndex(r),u=this._stringAttribute((h=r==null?void 0:r.attributes)==null?void 0:h.presentation_uuid);this._pendingPlaylistPresentationUuid&&u===this._pendingPlaylistPresentationUuid&&this._confirmPlaylistSwitch(),d!==this._lastCurrentIndex&&(this._lastCurrentIndex=d,this._pendingIndex===d&&this._clearPending("Live cue confirmed"),this._followingLive&&this._scrollToActive()),(i!==r||s!==a)&&this.requestUpdate()}get hass(){return this._hass}setConfig(e){this._config=De(e),this._followingLive=this._config.follow_live??!0,this._metadataRequestSequence+=1,this._playlistRequestSequence+=1,this._metadataRequestKey="",this._playlistRequestKey="__initial__",this._playlistRevision=null,this._lastPlaylistStatePointer="__initial__",this._playlists=[],this._selectedPlaylistUuid=null,this._selectedItemKey=null,this._selectedPresentationUuid=null,this._pendingPlaylistPresentationUuid=null,this._playlistPendingTimer!==void 0&&(window.clearTimeout(this._playlistPendingTimer),this._playlistPendingTimer=void 0),this._clearMediaCommandTimer(),this._mediaPendingCommand=null,this._clearThumbnailUrls(),this._error=null,this.requestUpdate()}getCardSize(){return 5}static getConfigForm(){return{schema:[{name:"entity",required:!0,selector:{entity:{domain:"sensor",integration:"propresenter"}}},{name:"media_player_entity",selector:{entity:{domain:"media_player",integration:"propresenter"}}},{name:"design",selector:{select:{options:Object.entries(Q).map(([e,i])=>({value:e,label:i.label}))}}},{name:"columns",selector:{select:{options:[{value:"auto",label:"Responsive"},{value:2,label:"2 columns"},{value:3,label:"3 columns"},{value:4,label:"4 columns"},{value:5,label:"5 columns"}]}}},{name:"browser_height",selector:{number:{min:240,max:1200,step:20,mode:"box"}}},{name:"internal_scroll",selector:{boolean:{}}},{name:"thumbnail_quality",selector:{select:{options:[{value:200,label:"Fast (200)"},{value:400,label:"Balanced (400)"},{value:800,label:"Detailed (800)"}]}}},{name:"show_group_labels",selector:{boolean:{}}},{name:"show_slide_labels",selector:{boolean:{}}},{name:"show_slide_numbers",selector:{boolean:{}}},{name:"show_notes",selector:{boolean:{}}},{name:"read_only",selector:{boolean:{}}},{name:"confirm_trigger",selector:{boolean:{}}},{name:"follow_live",selector:{boolean:{}}}]}}static getStubConfig(){return{type:"custom:propresenter-presentation",entity:""}}connectedCallback(){super.connectedCallback(),this._intersectionObserver=new IntersectionObserver(e=>{for(const i of e)if(i.isIntersecting){const s=Number(i.target.dataset.slideIndex);Number.isInteger(s)&&this._queueThumbnail(s)}})}disconnectedCallback(){var e;(e=this._intersectionObserver)==null||e.disconnect(),this._clearThumbnailUrls(),this._pendingTimer!==void 0&&window.clearTimeout(this._pendingTimer),this._playlistPendingTimer!==void 0&&window.clearTimeout(this._playlistPendingTimer),this._clearMediaCommandTimer(),super.disconnectedCallback()}updated(e){super.updated(e),this._intersectionObserver&&(this.renderRoot.querySelectorAll("[data-slide-index]").forEach(i=>{var s;(s=this._intersectionObserver)==null||s.observe(i)}),this._followingLive&&this._scrollToActive())}render(){var u,h,m,f,S;const e=this._state(),i=(e==null?void 0:e.attributes)??{},s=typeof i.slide_layer_active=="boolean"?i.slide_layer_active:((u=this._metadata)==null?void 0:u.slide_layer_active)??!0,r=((h=this._metadata)==null?void 0:h.presentation_name)??(e!=null&&e.state&&!["unknown","unavailable"].includes(e.state)?e.state:this._stringAttribute(i.presentation_name)??this._stringAttribute(i.friendly_name)??"ProPresenter"),a=((m=this._metadata)==null?void 0:m.groups)??[],l=this._config.columns==="auto"||this._config.columns===void 0?"auto-fit":String(this._config.columns),o=this._config.browser_height??j.browser_height,d=`${Be(this._config.design)} --pp-columns: ${l}; --pp-browser-height: ${o}px;`;return _`
      <article class="card" style=${d}>
        <div class="toolbar">
          <div class="heading">
            <h2>${r}</h2>
            <p class="subtitle">${this._subtitle(i)}</p>
          </div>
          <div class="toolbar-actions">
            <button @click=${this._toggleFollow} title="Follow the live cue">
              ${this._followingLive?"Following":"Browse"}
            </button>
            <button @click=${this._refresh} title="Refresh presentation metadata">↻</button>
          </div>
        </div>
        ${this._renderMediaHeader()}
        ${s?p:_`<div class="banner warning">Output cleared · the active cue is still shown below</div>`}
        ${this._error?_`<div class="banner error">${this._error.message}</div>`:p}
        ${this._statusMessage?_`<div class="banner">${this._statusMessage}</div>`:p}
        ${this._renderPlaylistPicker()}
        ${this._selectedPresentationUuid?_`<div class="banner browse-note">
              <span>Browsing playlist item · live output is unchanged</span>
              <button @click=${this._returnToLive}>Live</button>
            </div>`:p}
        ${((f=this._metadata)==null?void 0:f.protocol_version)!==void 0&&this._metadata.protocol_version!==1?_`<div class="banner error">This card needs a newer integration protocol.</div>`:p}
        ${a.length?_`<div
              class=${this._config.internal_scroll===!1?"slide-browser no-scroll":"slide-browser"}
              role="region"
              aria-label="Presentation slides"
            ><div class="groups">${a.map($e=>_`
              <section>
                ${this._config.show_group_labels?_`<h3 class="group-title">${$e.label}</h3>`:p}
                <div class="grid">
                  ${$e.slides.map(Fe=>this._renderSlide(Fe))}
                </div>
              </section>
            `)}</div></div>`:_`<p class="muted">${((S=this._metadata)==null?void 0:S.metadata_available)===!1||!this._metadata?"Loading presentation slides…":"No active presentation"}</p>`}
      </article>
    `}_renderMediaHeader(){const e=this._mediaPlayerState();if(!me(e))return p;const i=_e(e),s=(e==null?void 0:e.attributes)??{},r=this._stringAttribute(s.media_title)??"Video",a=ge(s.media_position),l=ge(s.media_duration),o=a&&l?`${a} / ${l}`:a??l,d=this._mediaPendingCommand,u=!this._config.read_only&&!this._isEditorPreview();return _`
      <section class="media-header" aria-label="ProPresenter video playback">
        <div class="media-heading">
          <p class="media-kicker">Video playback</p>
          <strong class="media-title">${r}</strong>
          <p class="media-meta">${d?d==="media_play"?"Sending play…":"Sending pause…":i==="playing"?"Playing":"Paused"}${o?` · ${o}`:""}</p>
        </div>
        ${u?_`<div class="media-actions">
              <button
                class=${i==="playing"?"active":""}
                @click=${()=>this._mediaPlayerCommand("media_play")}
                ?disabled=${!!d||i==="playing"}
                title="Play the ProPresenter video"
              >▶ Play</button>
              <button
                class=${i==="paused"?"active":""}
                @click=${()=>this._mediaPlayerCommand("media_pause")}
                ?disabled=${!!d||i!=="playing"}
                title="Pause the ProPresenter video"
              >⏸ Pause</button>
            </div>`:p}
      </section>
    `}_renderSlide(e){const i=!this._selectedPresentationUuid&&this._currentIndex(this._state())===e.index,s=e.enabled===!1,r=!this._selectedPresentationUuid&&!this._config.read_only&&!s&&!this._isEditorPreview(),a=`tile ${i?"active":""} ${s?"disabled":""}`,l=_`
      <div class="thumbnail" data-slide-index=${e.index}>
        ${this._thumbnailUrls.has(e.index)?_`<img src=${this._thumbnailUrls.get(e.index)} alt=${e.label} />`:_`<span>${this._thumbnailPlaceholder(e.index)}</span>`}
      </div>
      <div class="tile-content">
        ${this._config.show_slide_labels?_`<span class="tile-label">${e.label}</span>`:p}
        ${this._config.show_slide_numbers?_`<span class="tile-index">Slide ${e.index+1}${s?" · disabled":""}</span>`:p}
        ${this._config.show_notes&&e.notes?_`<span class="notes">${e.notes}</span>`:p}
      </div>
      ${this._pendingIndex===e.index?_`<span class="pending">Pending</span>`:p}
    `;return r?_`<button id=${this._slideId(e.index)} class=${a} @click=${()=>this._trigger(e)}>${l}</button>`:_`<div id=${this._slideId(e.index)} class=${a} aria-disabled="true">${l}</div>`}async _loadMetadata(e){if(!this._hass||!this._config.entity)return;const i=this._state(),s=this._selectedPresentationUuid,r=s?`selected|${s}`:fe(i);if(r===this._metadataRequestKey&&this._metadataPromise)return this._metadataPromise;if(!e&&r===this._metadataRequestKey)return;this._metadataRequestKey=r;const a=++this._metadataRequestSequence,l=(async()=>{try{const o={type:s?"propresenter/get_presentation":"propresenter/get_active_presentation",entity_id:this._config.entity,refresh:e};s&&(o.presentation_uuid=s);const d=await this._hass.callWS(o);if(a!==this._metadataRequestSequence)return;if(d.protocol_version!==1){this._error={message:"The integration and card protocol versions do not match"};return}this._clearThumbnailUrls(),this._metadata=d,this._error=null,this._statusMessage="",this.requestUpdate()}catch(o){if(a!==this._metadataRequestSequence)return;this._error={message:this._errorMessage(o)},this.requestUpdate()}})();this._metadataPromise=l;try{await l}finally{this._metadataPromise===l&&(this._metadataPromise=null)}}_queueThumbnail(e){var i;!((i=this._metadata)!=null&&i.metadata_available)||this._thumbnailUrls.has(e)||this._thumbnailStates.get(e)==="loading"||this._thumbnailStates.get(e)==="loaded"||(this._thumbnailStates.set(e,"loading"),this._thumbnailQueue.push(e),this._drainThumbnailQueue())}_drainThumbnailQueue(){for(;this._thumbnailActive<4&&this._thumbnailQueue.length;){const e=this._thumbnailQueue.shift();this._thumbnailActive+=1,this._fetchThumbnail(e).finally(()=>{this._thumbnailActive-=1,this._drainThumbnailQueue()})}}async _fetchThumbnail(e){const i=this._metadata;if(!(i!=null&&i.metadata_available)||!i.presentation_uuid||!i.metadata_revision){this._thumbnailStates.set(e,"error");return}const s=Ke(this._config.entity,i.presentation_uuid,e,this._config.thumbnail_quality??400,i.metadata_revision),r=`${i.presentation_uuid}|${i.metadata_revision}`,a=new AbortController;this._thumbnailControllers.add(a);try{const l=await this._hass.callWS({type:"auth/sign_path",path:s,expires:60}),o=l.path??l.signed_path;if(!o)throw new Error("Home Assistant did not return a signed thumbnail path");const d=await fetch(this._hass.hassUrl(o),{credentials:"same-origin",signal:a.signal});if(d.status===401||d.status===403){const u=await this._hass.callWS({type:"auth/sign_path",path:s,expires:60}),h=u.path??u.signed_path;if(!h)throw new Error("Thumbnail authorization expired");const m=await fetch(this._hass.hassUrl(h),{credentials:"same-origin",signal:a.signal});if(!m.ok)throw new Error(`Thumbnail request failed (${m.status})`);this._setThumbnailUrl(e,URL.createObjectURL(await m.blob()),r);return}if(!d.ok)throw d.status===409&&await this._loadMetadata(!0),new Error(`Thumbnail request failed (${d.status})`);this._setThumbnailUrl(e,URL.createObjectURL(await d.blob()),r)}catch(l){if(a.signal.aborted)return;this._thumbnailStates.set(e,"error"),this._error={message:this._errorMessage(l)},this.requestUpdate()}finally{this._thumbnailControllers.delete(a)}}_setThumbnailUrl(e,i,s){const r=this._metadata?`${this._metadata.presentation_uuid}|${this._metadata.metadata_revision}`:"";if(!this.isConnected||r!==s){URL.revokeObjectURL(i);return}const a=this._thumbnailUrls.get(e);a&&URL.revokeObjectURL(a),this._thumbnailUrls.set(e,i),this._thumbnailStates.set(e,"loaded"),this.requestUpdate()}async _trigger(e){if(this._config.read_only||e.enabled===!1||this._isEditorPreview()||!this._hass||this._config.confirm_trigger&&!window.confirm(`Trigger “${e.label}”?`))return;const i=this._metadata;if(!(i!=null&&i.presentation_uuid)||!i.metadata_revision){this._error={message:"Refresh the presentation before triggering a slide"},this.requestUpdate();return}this._pendingIndex=e.index,this._statusMessage="Command pending · waiting for live confirmation",this._error=null,this.requestUpdate();try{await this._hass.callService("propresenter","trigger_slide",Ve(this._config.entity,e.index,i.presentation_uuid,i.metadata_revision)),this._pendingTimer=window.setTimeout(()=>{this._pendingIndex===e.index&&(this._pendingIndex=null,this._statusMessage="Trigger sent, but live confirmation is unavailable",this.requestUpdate())},5e3)}catch(s){this._pendingIndex=null,this._statusMessage="";const r=this._errorMessage(s),a=/stale|changed|revision|uuid/i.test(r);this._error={message:a?"The presentation changed; refreshing slides":`Trigger failed: ${r}`,stale:a},this.requestUpdate(),a&&await this._loadMetadata(!0)}}async _mediaPlayerCommand(e){const i=this._config.media_player_entity;if(!(!i||this._config.read_only||this._isEditorPreview()||!this._hass||!me(this._mediaPlayerState()))){this._clearMediaCommandTimer(),this._mediaPendingCommand=e,this._error=null,this._statusMessage=e==="media_play"?"Video play command pending":"Video pause command pending",this.requestUpdate();try{await this._hass.callService("media_player",e,{entity_id:i});const s=e==="media_play"?"Video play command sent":"Video pause command sent";this._statusMessage=s,this._mediaCommandTimer=window.setTimeout(()=>{this._statusMessage===s&&(this._statusMessage="",this.requestUpdate()),this._mediaCommandTimer=void 0},2500)}catch(s){this._statusMessage="",this._error={message:`Video command failed: ${this._errorMessage(s)}`}}finally{this._mediaPendingCommand=null,this.requestUpdate()}}}_renderPlaylistPicker(){var l,o;if(!this._playlists.length)return p;const e=this._playlists.find(d=>d.uuid===this._selectedPlaylistUuid),i=(e==null?void 0:e.items)??[],s=i.find(d=>d.key===this._selectedItemKey),r=this._stringAttribute((o=(l=this._state())==null?void 0:l.attributes)==null?void 0:o.presentation_uuid),a=!!(s&&s.presentation_uuid!==r&&!this._config.read_only&&!this._isEditorPreview());return _`
      <div class="playlist-picker">
        <select
          aria-label="ProPresenter playlist"
          .value=${this._selectedPlaylistUuid??""}
          @change=${this._handlePlaylistChange}
        >
          <option value="">Choose playlist…</option>
          ${this._playlists.map(d=>_`<option value=${d.uuid}>${d.name}</option>`)}
        </select>
        <select
          aria-label="ProPresenter playlist item"
          .value=${this._selectedItemKey??""}
          ?disabled=${!e}
          @change=${this._handleItemChange}
        >
          <option value="">Choose presentation…</option>
          ${i.map(d=>_`<option value=${d.key}>
              ${d.path?`${d.path} · `:""}${d.name}${d.presentation_uuid===r?" · LIVE":""}
            </option>`)}
        </select>
      </div>
      ${a?_`<div class="playlist-actions">
            <button
              @click=${this._makeSelectedPlaylistItemLive}
              ?disabled=${!!this._pendingPlaylistPresentationUuid}
              title="Enter this playlist item in ProPresenter"
            >
              ${this._pendingPlaylistPresentationUuid?"Entering…":"Enter"}
            </button>
          </div>`:p}
    `}async _makeSelectedPlaylistItemLive(){var a,l;if(this._config.read_only||this._isEditorPreview()||!this._hass||!this._selectedPlaylistUuid||!this._selectedItemKey)return;const e=this._playlists.find(o=>o.uuid===this._selectedPlaylistUuid),i=e==null?void 0:e.items.find(o=>o.key===this._selectedItemKey);if(!i)return;const s=this._stringAttribute((l=(a=this._state())==null?void 0:a.attributes)==null?void 0:l.presentation_uuid);if(i.presentation_uuid===s)return;if(!this._playlistRevision){this._error={message:"Refresh the playlist before switching live items"},this.requestUpdate();return}if(this._config.confirm_trigger&&!window.confirm(`Make “${i.name}” live in ProPresenter?`))return;const r=i.presentation_uuid;this._pendingPlaylistPresentationUuid=r,this._statusMessage="Playlist switch pending · waiting for live confirmation",this._error=null,this.requestUpdate();try{if(await this._hass.callService("propresenter","trigger_playlist_item",We(this._config.entity,this._selectedPlaylistUuid,i.key,i.index,r,this._playlistRevision)),this._pendingPlaylistPresentationUuid!==r)return;this._returnToLive(),this._statusMessage="Playlist switch sent · waiting for live confirmation",this._playlistPendingTimer=window.setTimeout(()=>{this._pendingPlaylistPresentationUuid===r&&(this._pendingPlaylistPresentationUuid=null,this._playlistPendingTimer=void 0,this._statusMessage="Playlist switch sent, but live confirmation is unavailable",this.requestUpdate())},5e3),this.requestUpdate()}catch(o){this._pendingPlaylistPresentationUuid=null,this._playlistPendingTimer!==void 0&&(window.clearTimeout(this._playlistPendingTimer),this._playlistPendingTimer=void 0),this._statusMessage="";const d=this._errorMessage(o),u=/stale|changed|revision|playlist|item/i.test(d);this._error={message:u?"The playlist changed; refreshing playlist items":`Playlist switch failed: ${d}`,stale:u},this.requestUpdate(),u&&await this._loadPlaylists(!0)}}async _loadPlaylists(e){if(!this._hass||!this._config.entity)return;if(this._playlistPromise)return this._playlistPromise;const i=this._playlistPointer(this._state());if(!e&&this._playlists.length&&i===this._playlistRequestKey)return;const s=++this._playlistRequestSequence,r=(async()=>{try{const a=await this._hass.callWS({type:"propresenter/get_presentation_playlists",entity_id:this._config.entity,refresh:e});if(s!==this._playlistRequestSequence)return;if(!a||a.protocol_version!==1){this._error={message:"The integration and card protocol versions do not match"};return}this._playlists=Array.isArray(a.playlists)?a.playlists.filter(l=>!!(l!=null&&l.uuid)&&Array.isArray(l.items)):[],this._playlistRevision=a.playlist_revision,this._playlistRequestKey=a.playlist_revision??i,this._selectedPresentationUuid&&!this._playlists.some(l=>l.items.some(o=>o.presentation_uuid===this._selectedPresentationUuid))&&this._returnToLive(),this.requestUpdate()}catch(a){if(s!==this._playlistRequestSequence)return;this._error={message:this._errorMessage(a)},this._playlistRequestKey="",this._playlistRevision=null,this.requestUpdate()}})();this._playlistPromise=r;try{await r}finally{this._playlistPromise===r&&(this._playlistPromise=null)}}_scrollToActive(){const e=this._currentIndex(this._state());e!==null&&queueMicrotask(()=>{const i=this.renderRoot.querySelector(`#${this._slideId(e)}`);if(!i)return;const s=this.renderRoot.querySelector(".slide-browser");if(!s||this._config.internal_scroll===!1){i.scrollIntoView({behavior:"smooth",block:"nearest"});return}const r=s.getBoundingClientRect(),a=i.getBoundingClientRect(),l=a.top-r.top+s.scrollTop,o=l+a.height,d=s.scrollTop,u=d+s.clientHeight,h=12;l<d?s.scrollTo({top:Math.max(0,l-h),behavior:"smooth"}):o>u&&s.scrollTo({top:Math.min(s.scrollHeight-s.clientHeight,o-s.clientHeight+h),behavior:"smooth"})})}_clearPending(e){this._pendingIndex=null,this._statusMessage=e,this._pendingTimer!==void 0&&window.clearTimeout(this._pendingTimer),this._pendingTimer=void 0,this.requestUpdate()}_confirmPlaylistSwitch(){this._pendingPlaylistPresentationUuid&&(this._pendingPlaylistPresentationUuid=null,this._playlistPendingTimer!==void 0&&(window.clearTimeout(this._playlistPendingTimer),this._playlistPendingTimer=void 0),this._returnToLive(),this._statusMessage="Live playlist item confirmed",this.requestUpdate())}_clearThumbnailUrls(){for(const e of this._thumbnailControllers)e.abort();this._thumbnailControllers.clear();for(const e of this._thumbnailUrls.values())URL.revokeObjectURL(e);this._thumbnailUrls.clear(),this._thumbnailStates.clear(),this._thumbnailQueue=[]}_clearMediaCommandTimer(){this._mediaCommandTimer!==void 0&&(window.clearTimeout(this._mediaCommandTimer),this._mediaCommandTimer=void 0)}_mediaPlayerState(){var i,s;const e=this._config.media_player_entity;return e?(s=(i=this._hass)==null?void 0:i.states)==null?void 0:s[e]:void 0}_state(){var e,i;return(i=(e=this._hass)==null?void 0:e.states)==null?void 0:i[this._config.entity]}_currentIndex(e){var s;const i=(s=e==null?void 0:e.attributes)==null?void 0:s.current_index;return typeof i=="number"?i:Number.isInteger(Number(i))?Number(i):null}_stringAttribute(e){return typeof e=="string"&&e?e:null}_subtitle(e){var l,o,d,u;if(this._selectedPresentationUuid){const h=this._stringAttribute((l=this._state())==null?void 0:l.state),m=(o=this._metadata)==null?void 0:o.slide_count;return["Browsing playlist item",m?`${m} slides`:"",h?`Live: ${h}`:""].filter(Boolean).join(" · ")}const i=this._currentIndex(this._state()),s=typeof((d=this._metadata)==null?void 0:d.slide_count)=="number"?this._metadata.slide_count:typeof e.slide_count=="number"?e.slide_count:null,r=this._stringAttribute(e.current_label)??((u=this._metadata)==null?void 0:u.current_slide_label);return[i!==null&&s!==null?`${i+1} / ${s}`:"",r].filter(Boolean).join(" · ")||"Waiting for ProPresenter"}_thumbnailPlaceholder(e){return this._thumbnailStates.get(e)==="error"?"Thumbnail unavailable":"Loading thumbnail…"}_playlistPointer(e){var i;return this._stringAttribute((i=e==null?void 0:e.attributes)==null?void 0:i.playlist_revision)??""}_slideId(e){return`propresenter-slide-${e}`}_isEditorPreview(){let e=this;for(;e;){if(e instanceof Element){const i=e.localName;if(i.includes("preview")||i.includes("editor"))return!0}e instanceof ShadowRoot?e=e.host:e=e.parentNode}return!1}_errorMessage(e){return ye(e)}}c(Z,"styles",Pe`
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

    .media-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin: 0 0 12px;
      padding: 10px 12px;
      border: 1px solid color-mix(in srgb, var(--pp-accent) 25%, transparent);
      border-radius: 12px;
      background: color-mix(in srgb, var(--pp-accent) 10%, var(--pp-surface));
    }

    .media-heading {
      display: grid;
      min-width: 0;
      gap: 2px;
    }

    .media-kicker {
      color: var(--pp-accent);
      font-size: 0.68rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    .media-title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 0.88rem;
    }

    .media-meta {
      color: var(--pp-muted);
      font-size: 0.75rem;
    }

    .media-actions {
      display: flex;
      flex: 0 0 auto;
      gap: 6px;
    }

    .media-actions button {
      min-width: 72px;
    }

    .media-actions button.active {
      color: var(--text-primary-color, white);
      background: var(--pp-accent);
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
  `),customElements.get("propresenter-presentation")||customElements.define("propresenter-presentation",Z);const be=window.customCards??(window.customCards=[]);return be.some(n=>n.type==="propresenter-presentation")||be.push({type:"propresenter-presentation",name:"ProPresenter Presentation",description:"A dynamic, guarded ProPresenter slide browser",preview:!0,documentationURL:"https://github.com/media-dotcom/lovelace-propresenter-presentation"}),y.ProPresenterPresentationCard=Z,Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}),y})({});
