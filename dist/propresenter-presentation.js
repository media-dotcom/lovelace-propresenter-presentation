var ProPresenterPresentationCard=(function(b){"use strict";var Dt=Object.defineProperty;var Bt=(b,g,$)=>g in b?Dt(b,g,{enumerable:!0,configurable:!0,writable:!0,value:$}):b[g]=$;var d=(b,g,$)=>Bt(b,typeof g!="symbol"?g+"":g,$);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mt;const g=globalThis,$=g.ShadowRoot&&(g.ShadyCSS===void 0||g.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,z=Symbol(),Z=new WeakMap;let J=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if($&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=Z.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Z.set(t,e))}return e}toString(){return this.cssText}};const ft=n=>new J(typeof n=="string"?n:n+"",void 0,z),bt=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((s,i,a)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[a+1],n[0]);return new J(t,n,z)},$t=(n,e)=>{if($)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=g.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,n.appendChild(s)}},Y=$?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return ft(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:yt,defineProperty:vt,getOwnPropertyDescriptor:wt,getOwnPropertyNames:At,getOwnPropertySymbols:xt,getPrototypeOf:Pt}=Object,y=globalThis,X=y.trustedTypes,St=X?X.emptyScript:"",D=y.reactiveElementPolyfillSupport,T=(n,e)=>n,B={toAttribute(n,e){switch(e){case Boolean:n=n?St:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},tt=(n,e)=>!yt(n,e),et={attribute:!0,type:String,converter:B,reflect:!1,useDefault:!1,hasChanged:tt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),y.litPropertyMetadata??(y.litPropertyMetadata=new WeakMap);let U=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=et){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&vt(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:a}=wt(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:i,set(r){const o=i==null?void 0:i.call(this);a==null||a.call(this,r),this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??et}static _$Ei(){if(this.hasOwnProperty(T("elementProperties")))return;const e=Pt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(T("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T("properties"))){const t=this.properties,s=[...At(t),...xt(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(Y(i))}else e!==void 0&&t.push(Y(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $t(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var a;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const r=(((a=s.converter)==null?void 0:a.toAttribute)!==void 0?s.converter:B).toAttribute(t,s.type);this._$Em=e,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){var a,r;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((a=o.converter)==null?void 0:a.fromAttribute)!==void 0?o.converter:B;this._$Em=i;const h=l.fromAttribute(t,o.type);this[i]=h??((r=this._$Ej)==null?void 0:r.get(i))??h,this._$Em=null}}requestUpdate(e,t,s,i=!1,a){var r;if(e!==void 0){const o=this.constructor;if(i===!1&&(a=this[e]),s??(s=o.getPropertyOptions(e)),!((s.hasChanged??tt)(a,t)||s.useDefault&&s.reflect&&a===((r=this._$Ej)==null?void 0:r.get(e))&&!this.hasAttribute(o._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:a},r){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,r??t??this[e]),a!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,r]of this._$Ep)this[a]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[a,r]of i){const{wrapped:o}=r,l=this[a];o!==!0||this._$AL.has(a)||l===void 0||this.C(a,void 0,r,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(i=>{var a;return(a=i.hostUpdate)==null?void 0:a.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};U.elementStyles=[],U.shadowRootOptions={mode:"open"},U[T("elementProperties")]=new Map,U[T("finalized")]=new Map,D==null||D({ReactiveElement:U}),(y.reactiveElementVersions??(y.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,st=n=>n,N=R.trustedTypes,it=N?N.createPolicy("lit-html",{createHTML:n=>n}):void 0,rt="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,nt="?"+v,Ut=`<${nt}>`,w=document,q=()=>w.createComment(""),k=n=>n===null||typeof n!="object"&&typeof n!="function",K=Array.isArray,Et=n=>K(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",W=`[ 	
\f\r]`,M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,at=/-->/g,ot=/>/g,A=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),lt=/'/g,ht=/"/g,ct=/^(?:script|style|textarea|title)$/i,Ct=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),_=Ct(1),E=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),dt=new WeakMap,x=w.createTreeWalker(w,129);function ut(n,e){if(!K(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return it!==void 0?it.createHTML(e):e}const Tt=(n,e)=>{const t=n.length-1,s=[];let i,a=e===2?"<svg>":e===3?"<math>":"",r=M;for(let o=0;o<t;o++){const l=n[o];let h,p,c=-1,m=0;for(;m<l.length&&(r.lastIndex=m,p=r.exec(l),p!==null);)m=r.lastIndex,r===M?p[1]==="!--"?r=at:p[1]!==void 0?r=ot:p[2]!==void 0?(ct.test(p[2])&&(i=RegExp("</"+p[2],"g")),r=A):p[3]!==void 0&&(r=A):r===A?p[0]===">"?(r=i??M,c=-1):p[1]===void 0?c=-2:(c=r.lastIndex-p[2].length,h=p[1],r=p[3]===void 0?A:p[3]==='"'?ht:lt):r===ht||r===lt?r=A:r===at||r===ot?r=M:(r=A,i=void 0);const f=r===A&&n[o+1].startsWith("/>")?" ":"";a+=r===M?l+Ut:c>=0?(s.push(h),l.slice(0,c)+rt+l.slice(c)+v+f):l+v+(c===-2?o:f)}return[ut(n,a+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class I{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let a=0,r=0;const o=e.length-1,l=this.parts,[h,p]=Tt(e,t);if(this.el=I.createElement(h,s),x.currentNode=this.el.content,t===2||t===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=x.nextNode())!==null&&l.length<o;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(rt)){const m=p[r++],f=i.getAttribute(c).split(v),S=/([.?@])?(.*)/.exec(m);l.push({type:1,index:a,name:S[2],strings:f,ctor:S[1]==="."?qt:S[1]==="?"?kt:S[1]==="@"?Mt:H}),i.removeAttribute(c)}else c.startsWith(v)&&(l.push({type:6,index:a}),i.removeAttribute(c));if(ct.test(i.tagName)){const c=i.textContent.split(v),m=c.length-1;if(m>0){i.textContent=N?N.emptyScript:"";for(let f=0;f<m;f++)i.append(c[f],q()),x.nextNode(),l.push({type:2,index:++a});i.append(c[m],q())}}}else if(i.nodeType===8)if(i.data===nt)l.push({type:2,index:a});else{let c=-1;for(;(c=i.data.indexOf(v,c+1))!==-1;)l.push({type:7,index:a}),c+=v.length-1}a++}}static createElement(e,t){const s=w.createElement("template");return s.innerHTML=e,s}}function C(n,e,t=n,s){var r,o;if(e===E)return e;let i=s!==void 0?(r=t._$Co)==null?void 0:r[s]:t._$Cl;const a=k(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==a&&((o=i==null?void 0:i._$AO)==null||o.call(i,!1),a===void 0?i=void 0:(i=new a(n),i._$AT(n,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=i:t._$Cl=i),i!==void 0&&(e=C(n,i._$AS(n,e.values),i,s)),e}class Rt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=((e==null?void 0:e.creationScope)??w).importNode(t,!0);x.currentNode=i;let a=x.nextNode(),r=0,o=0,l=s[0];for(;l!==void 0;){if(r===l.index){let h;l.type===2?h=new O(a,a.nextSibling,this,e):l.type===1?h=new l.ctor(a,l.name,l.strings,this,e):l.type===6&&(h=new It(a,this,e)),this._$AV.push(h),l=s[++o]}r!==(l==null?void 0:l.index)&&(a=x.nextNode(),r++)}return x.currentNode=w,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class O{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=C(this,e,t),k(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==E&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Et(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==u&&k(this._$AH)?this._$AA.nextSibling.data=e:this.T(w.createTextNode(e)),this._$AH=e}$(e){var a;const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=I.createElement(ut(s.h,s.h[0]),this.options)),s);if(((a=this._$AH)==null?void 0:a._$AD)===i)this._$AH.p(t);else{const r=new Rt(i,this),o=r.u(this.options);r.p(t),this.T(o),this._$AH=r}}_$AC(e){let t=dt.get(e.strings);return t===void 0&&dt.set(e.strings,t=new I(e)),t}k(e){K(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const a of e)i===t.length?t.push(s=new O(this.O(q()),this.O(q()),this,this.options)):s=t[i],s._$AI(a),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e!==this._$AB;){const i=st(e).nextSibling;st(e).remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,a){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}_$AI(e,t=this,s,i){const a=this.strings;let r=!1;if(a===void 0)e=C(this,e,t,0),r=!k(e)||e!==this._$AH&&e!==E,r&&(this._$AH=e);else{const o=e;let l,h;for(e=a[0],l=0;l<a.length-1;l++)h=C(this,o[s+l],t,l),h===E&&(h=this._$AH[l]),r||(r=!k(h)||h!==this._$AH[l]),h===u?e=u:e!==u&&(e+=(h??"")+a[l+1]),this._$AH[l]=h}r&&!i&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class qt extends H{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}}class kt extends H{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}}class Mt extends H{constructor(e,t,s,i,a){super(e,t,s,i,a),this.type=5}_$AI(e,t=this){if((e=C(this,e,t,0)??u)===E)return;const s=this._$AH,i=e===u&&s!==u||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,a=e!==u&&(s===u||i);i&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class It{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){C(this,e)}}const F=R.litHtmlPolyfillSupport;F==null||F(I,O),(R.litHtmlVersions??(R.litHtmlVersions=[])).push("3.3.3");const Ot=(n,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let i=s._$litPart$;if(i===void 0){const a=(t==null?void 0:t.renderBefore)??null;s._$litPart$=i=new O(e.insertBefore(q(),a),a,void 0,t??{})}return i._$AI(n),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis;class L extends U{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ot(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return E}}L._$litElement$=!0,L.finalized=!0,(mt=P.litElementHydrateSupport)==null||mt.call(P,{LitElement:L});const V=P.litElementPolyfillSupport;V==null||V({LitElement:L}),(P.litElementVersions??(P.litElementVersions=[])).push("4.2.2");const Q={grid:{label:"Grid",tokens:{"--pp-card-radius":"18px","--pp-card-padding":"14px","--pp-gap":"10px","--pp-tile-radius":"12px","--pp-accent":"var(--primary-color, #03a9f4)","--pp-muted":"var(--secondary-text-color, #727272)","--pp-surface":"var(--card-background-color, var(--ha-card-background, #fff))","--pp-tile-surface":"color-mix(in srgb, var(--pp-surface) 92%, var(--pp-accent))"}}};function Lt(n){const e=Q[n??"grid"]??Q.grid;return Object.entries(e.tokens).map(([t,s])=>`${t}: ${s};`).join(" ")}const j={design:"grid",columns:"auto",browser_height:560,internal_scroll:!0,thumbnail_quality:400,show_group_labels:!0,show_slide_labels:!0,show_slide_numbers:!0,show_notes:!1,read_only:!1,confirm_trigger:!1,follow_live:!0};function Nt(n){if(!n||typeof n.entity!="string"||!n.entity)throw new Error("You must select a ProPresenter active-presentation sensor");const e=typeof n.browser_height=="number"&&Number.isFinite(n.browser_height)?Math.min(1200,Math.max(240,Math.round(n.browser_height))):j.browser_height;return{...j,...n,design:n.design&&n.design in{grid:!0}?n.design:"grid",browser_height:e,internal_scroll:n.internal_scroll!==!1}}function pt(n){const e=(n==null?void 0:n.attributes)??{};return[e.presentation_uuid??"",e.metadata_revision??"",e.metadata_available??!1].join("|")}function Ht(n,e,t,s,i){return`/api/propresenter/thumbnail/${encodeURIComponent(n)}/${encodeURIComponent(e)}/${t}?quality=${encodeURIComponent(s)}&revision=${encodeURIComponent(i)}`}function jt(n,e,t,s){if(!t||!s)throw new Error("A current presentation UUID and metadata revision are required");return{entity_id:n,slide_index:e,expected_presentation_uuid:t,expected_metadata_revision:s}}class G extends L{constructor(){super(...arguments);d(this,"_config",{entity:"",...j});d(this,"_hass");d(this,"_metadata",null);d(this,"_metadataPromise",null);d(this,"_metadataRequestKey","");d(this,"_metadataRequestSequence",0);d(this,"_playlists",[]);d(this,"_playlistPromise",null);d(this,"_playlistRequestKey","__initial__");d(this,"_playlistRequestSequence",0);d(this,"_selectedPlaylistUuid",null);d(this,"_selectedItemKey",null);d(this,"_selectedPresentationUuid",null);d(this,"_thumbnailUrls",new Map);d(this,"_thumbnailStates",new Map);d(this,"_thumbnailQueue",[]);d(this,"_thumbnailActive",0);d(this,"_thumbnailControllers",new Set);d(this,"_intersectionObserver");d(this,"_followingLive",!0);d(this,"_pendingIndex",null);d(this,"_pendingTimer");d(this,"_error",null);d(this,"_statusMessage","");d(this,"_lastStatePointer","");d(this,"_lastCurrentIndex",null);d(this,"_refresh",()=>{Promise.all([this._loadPlaylists(!0),this._loadMetadata(!0)])});d(this,"_handlePlaylistChange",t=>{const s=t.target.value;this._selectedPlaylistUuid=s||null,this._selectedItemKey=null,this.requestUpdate()});d(this,"_handleItemChange",t=>{const s=t.target.value,i=this._playlists.find(r=>r.uuid===this._selectedPlaylistUuid),a=i==null?void 0:i.items.find(r=>r.key===s);a&&(this._selectedItemKey=a.key,this._selectedPresentationUuid=a.presentation_uuid,this._followingLive=!1,this._metadataRequestSequence+=1,this._metadata=null,this._metadataRequestKey="",this._clearThumbnailUrls(),this._error=null,this._statusMessage="",this._loadMetadata(!1),this.requestUpdate())});d(this,"_returnToLive",()=>{this._selectedPlaylistUuid=null,this._selectedItemKey=null,this._selectedPresentationUuid=null,this._followingLive=!0,this._metadataRequestSequence+=1,this._metadata=null,this._metadataRequestKey="",this._clearThumbnailUrls(),this._loadMetadata(!1),this.requestUpdate()});d(this,"_toggleFollow",()=>{this._followingLive=!this._followingLive,this._followingLive&&this._scrollToActive(),this.requestUpdate()})}set hass(t){const s=this._state();this._hass=t;const i=this._state();this._playlistPointer(i)!==this._playlistRequestKey&&!this._playlistPromise&&this._loadPlaylists(!1);const r=pt(i);r!==this._lastStatePointer&&(this._lastStatePointer=r,this._selectedPresentationUuid?this.requestUpdate():(this._metadata=null,this._clearThumbnailUrls(),this._loadMetadata(!1)));const o=this._currentIndex(i);o!==this._lastCurrentIndex&&(this._lastCurrentIndex=o,this._pendingIndex===o&&this._clearPending("Live cue confirmed"),this._followingLive&&this._scrollToActive()),s!==i&&this.requestUpdate()}get hass(){return this._hass}setConfig(t){this._config=Nt(t),this._followingLive=this._config.follow_live??!0,this._metadataRequestSequence+=1,this._playlistRequestSequence+=1,this._metadataRequestKey="",this._playlistRequestKey="__initial__",this._playlists=[],this._selectedPlaylistUuid=null,this._selectedItemKey=null,this._selectedPresentationUuid=null,this._clearThumbnailUrls(),this._error=null,this.requestUpdate()}getCardSize(){return 5}static getConfigForm(){return{schema:[{name:"entity",required:!0,selector:{entity:{domain:"sensor",integration:"propresenter"}}},{name:"design",selector:{select:{options:Object.entries(Q).map(([t,s])=>({value:t,label:s.label}))}}},{name:"columns",selector:{select:{options:[{value:"auto",label:"Responsive"},{value:2,label:"2 columns"},{value:3,label:"3 columns"},{value:4,label:"4 columns"},{value:5,label:"5 columns"}]}}},{name:"browser_height",selector:{number:{min:240,max:1200,step:20,mode:"box"}}},{name:"internal_scroll",selector:{boolean:{}}},{name:"thumbnail_quality",selector:{select:{options:[{value:200,label:"Fast (200)"},{value:400,label:"Balanced (400)"},{value:800,label:"Detailed (800)"}]}}},{name:"show_group_labels",selector:{boolean:{}}},{name:"show_slide_labels",selector:{boolean:{}}},{name:"show_slide_numbers",selector:{boolean:{}}},{name:"show_notes",selector:{boolean:{}}},{name:"read_only",selector:{boolean:{}}},{name:"confirm_trigger",selector:{boolean:{}}},{name:"follow_live",selector:{boolean:{}}}]}}static getStubConfig(){return{type:"custom:propresenter-presentation",entity:""}}connectedCallback(){super.connectedCallback(),this._intersectionObserver=new IntersectionObserver(t=>{for(const s of t)if(s.isIntersecting){const i=Number(s.target.dataset.slideIndex);Number.isInteger(i)&&this._queueThumbnail(i)}})}disconnectedCallback(){var t;(t=this._intersectionObserver)==null||t.disconnect(),this._clearThumbnailUrls(),this._pendingTimer!==void 0&&window.clearTimeout(this._pendingTimer),super.disconnectedCallback()}updated(t){super.updated(t),this._intersectionObserver&&(this.renderRoot.querySelectorAll("[data-slide-index]").forEach(s=>{var i;(i=this._intersectionObserver)==null||i.observe(s)}),this._followingLive&&this._scrollToActive())}render(){var p,c,m,f,S;const t=this._state(),s=(t==null?void 0:t.attributes)??{},i=typeof s.slide_layer_active=="boolean"?s.slide_layer_active:((p=this._metadata)==null?void 0:p.slide_layer_active)??!0,a=((c=this._metadata)==null?void 0:c.presentation_name)??(t!=null&&t.state&&!["unknown","unavailable"].includes(t.state)?t.state:this._stringAttribute(s.presentation_name)??this._stringAttribute(s.friendly_name)??"ProPresenter"),r=((m=this._metadata)==null?void 0:m.groups)??[],o=this._config.columns==="auto"||this._config.columns===void 0?"auto-fit":String(this._config.columns),l=this._config.browser_height??j.browser_height,h=`${Lt(this._config.design)} --pp-columns: ${o}; --pp-browser-height: ${l}px;`;return _`
      <article class="card" style=${h}>
        <div class="toolbar">
          <div class="heading">
            <h2>${a}</h2>
            <p class="subtitle">${this._subtitle(s)}</p>
          </div>
          <div class="toolbar-actions">
            <button @click=${this._toggleFollow} title="Follow the live cue">
              ${this._followingLive?"Following":"Browse"}
            </button>
            <button @click=${this._refresh} title="Refresh presentation metadata">↻</button>
          </div>
        </div>
        ${i?u:_`<div class="banner warning">Output cleared · the active cue is still shown below</div>`}
        ${this._error?_`<div class="banner error">${this._error.message}</div>`:u}
        ${this._statusMessage?_`<div class="banner">${this._statusMessage}</div>`:u}
        ${this._renderPlaylistPicker()}
        ${this._selectedPresentationUuid?_`<div class="banner browse-note">
              <span>Browsing playlist item · live output is unchanged</span>
              <button @click=${this._returnToLive}>Live</button>
            </div>`:u}
        ${((f=this._metadata)==null?void 0:f.protocol_version)!==void 0&&this._metadata.protocol_version!==1?_`<div class="banner error">This card needs a newer integration protocol.</div>`:u}
        ${r.length?_`<div
              class=${this._config.internal_scroll===!1?"slide-browser no-scroll":"slide-browser"}
              role="region"
              aria-label="Presentation slides"
            ><div class="groups">${r.map(gt=>_`
              <section>
                ${this._config.show_group_labels?_`<h3 class="group-title">${gt.label}</h3>`:u}
                <div class="grid">
                  ${gt.slides.map(zt=>this._renderSlide(zt))}
                </div>
              </section>
            `)}</div></div>`:_`<p class="muted">${((S=this._metadata)==null?void 0:S.metadata_available)===!1||!this._metadata?"Loading presentation slides…":"No active presentation"}</p>`}
      </article>
    `}_renderSlide(t){const s=!this._selectedPresentationUuid&&this._currentIndex(this._state())===t.index,i=t.enabled===!1,a=!this._selectedPresentationUuid&&!this._config.read_only&&!i&&!this._isEditorPreview(),r=`tile ${s?"active":""} ${i?"disabled":""}`,o=_`
      <div class="thumbnail" data-slide-index=${t.index}>
        ${this._thumbnailUrls.has(t.index)?_`<img src=${this._thumbnailUrls.get(t.index)} alt=${t.label} />`:_`<span>${this._thumbnailPlaceholder(t.index)}</span>`}
      </div>
      <div class="tile-content">
        ${this._config.show_slide_labels?_`<span class="tile-label">${t.label}</span>`:u}
        ${this._config.show_slide_numbers?_`<span class="tile-index">Slide ${t.index+1}${i?" · disabled":""}</span>`:u}
        ${this._config.show_notes&&t.notes?_`<span class="notes">${t.notes}</span>`:u}
      </div>
      ${this._pendingIndex===t.index?_`<span class="pending">Pending</span>`:u}
    `;return a?_`<button id=${this._slideId(t.index)} class=${r} @click=${()=>this._trigger(t)}>${o}</button>`:_`<div id=${this._slideId(t.index)} class=${r} aria-disabled="true">${o}</div>`}async _loadMetadata(t){if(!this._hass||!this._config.entity)return;const s=this._state(),i=this._selectedPresentationUuid,a=i?`selected|${i}`:pt(s);if(a===this._metadataRequestKey&&this._metadataPromise)return this._metadataPromise;if(!t&&a===this._metadataRequestKey)return;this._metadataRequestKey=a;const r=++this._metadataRequestSequence,o=(async()=>{try{const l={type:i?"propresenter/get_presentation":"propresenter/get_active_presentation",entity_id:this._config.entity,refresh:t};i&&(l.presentation_uuid=i);const h=await this._hass.callWS(l);if(r!==this._metadataRequestSequence)return;if(h.protocol_version!==1){this._error={message:"The integration and card protocol versions do not match"};return}this._clearThumbnailUrls(),this._metadata=h,this._error=null,this._statusMessage="",this.requestUpdate()}catch(l){if(r!==this._metadataRequestSequence)return;this._error={message:this._errorMessage(l)},this.requestUpdate()}})();this._metadataPromise=o;try{await o}finally{this._metadataPromise===o&&(this._metadataPromise=null)}}_queueThumbnail(t){var s;!((s=this._metadata)!=null&&s.metadata_available)||this._thumbnailUrls.has(t)||this._thumbnailStates.get(t)==="loading"||this._thumbnailStates.get(t)==="loaded"||(this._thumbnailStates.set(t,"loading"),this._thumbnailQueue.push(t),this._drainThumbnailQueue())}_drainThumbnailQueue(){for(;this._thumbnailActive<4&&this._thumbnailQueue.length;){const t=this._thumbnailQueue.shift();this._thumbnailActive+=1,this._fetchThumbnail(t).finally(()=>{this._thumbnailActive-=1,this._drainThumbnailQueue()})}}async _fetchThumbnail(t){const s=this._metadata;if(!(s!=null&&s.metadata_available)||!s.presentation_uuid||!s.metadata_revision){this._thumbnailStates.set(t,"error");return}const i=Ht(this._config.entity,s.presentation_uuid,t,this._config.thumbnail_quality??400,s.metadata_revision),a=`${s.presentation_uuid}|${s.metadata_revision}`,r=new AbortController;this._thumbnailControllers.add(r);try{const o=await this._hass.callWS({type:"auth/sign_path",path:i,expires:60}),l=o.path??o.signed_path;if(!l)throw new Error("Home Assistant did not return a signed thumbnail path");const h=await fetch(this._hass.hassUrl(l),{credentials:"same-origin",signal:r.signal});if(h.status===401||h.status===403){const p=await this._hass.callWS({type:"auth/sign_path",path:i,expires:60}),c=p.path??p.signed_path;if(!c)throw new Error("Thumbnail authorization expired");const m=await fetch(this._hass.hassUrl(c),{credentials:"same-origin",signal:r.signal});if(!m.ok)throw new Error(`Thumbnail request failed (${m.status})`);this._setThumbnailUrl(t,URL.createObjectURL(await m.blob()),a);return}if(!h.ok)throw h.status===409&&await this._loadMetadata(!0),new Error(`Thumbnail request failed (${h.status})`);this._setThumbnailUrl(t,URL.createObjectURL(await h.blob()),a)}catch(o){if(r.signal.aborted)return;this._thumbnailStates.set(t,"error"),this._error={message:this._errorMessage(o)},this.requestUpdate()}finally{this._thumbnailControllers.delete(r)}}_setThumbnailUrl(t,s,i){const a=this._metadata?`${this._metadata.presentation_uuid}|${this._metadata.metadata_revision}`:"";if(!this.isConnected||a!==i){URL.revokeObjectURL(s);return}const r=this._thumbnailUrls.get(t);r&&URL.revokeObjectURL(r),this._thumbnailUrls.set(t,s),this._thumbnailStates.set(t,"loaded"),this.requestUpdate()}async _trigger(t){if(this._config.read_only||t.enabled===!1||this._isEditorPreview()||!this._hass||this._config.confirm_trigger&&!window.confirm(`Trigger “${t.label}”?`))return;const s=this._metadata;if(!(s!=null&&s.presentation_uuid)||!s.metadata_revision){this._error={message:"Refresh the presentation before triggering a slide"},this.requestUpdate();return}this._pendingIndex=t.index,this._statusMessage="Command pending · waiting for live confirmation",this._error=null,this.requestUpdate();try{await this._hass.callService("propresenter","trigger_slide",jt(this._config.entity,t.index,s.presentation_uuid,s.metadata_revision)),this._pendingTimer=window.setTimeout(()=>{this._pendingIndex===t.index&&(this._pendingIndex=null,this._statusMessage="Trigger sent, but live confirmation is unavailable",this.requestUpdate())},5e3)}catch(i){this._pendingIndex=null,this._statusMessage="";const a=this._errorMessage(i),r=/stale|changed|revision|uuid/i.test(a);this._error={message:r?"The presentation changed; refreshing slides":`Trigger failed: ${a}`,stale:r},this.requestUpdate(),r&&await this._loadMetadata(!0)}}_renderPlaylistPicker(){var a,r;if(!this._playlists.length)return u;const t=this._playlists.find(o=>o.uuid===this._selectedPlaylistUuid),s=(t==null?void 0:t.items)??[],i=this._stringAttribute((r=(a=this._state())==null?void 0:a.attributes)==null?void 0:r.presentation_uuid);return _`
      <div class="playlist-picker">
        <select
          aria-label="ProPresenter playlist"
          .value=${this._selectedPlaylistUuid??""}
          @change=${this._handlePlaylistChange}
        >
          <option value="">Choose playlist…</option>
          ${this._playlists.map(o=>_`<option value=${o.uuid}>${o.name}</option>`)}
        </select>
        <select
          aria-label="ProPresenter playlist item"
          .value=${this._selectedItemKey??""}
          ?disabled=${!t}
          @change=${this._handleItemChange}
        >
          <option value="">Choose presentation…</option>
          ${s.map(o=>_`<option value=${o.key}>
              ${o.path?`${o.path} · `:""}${o.name}${o.presentation_uuid===i?" · LIVE":""}
            </option>`)}
        </select>
      </div>
    `}async _loadPlaylists(t){if(!this._hass||!this._config.entity)return;if(this._playlistPromise)return this._playlistPromise;const s=this._playlistPointer(this._state());if(!t&&this._playlists.length&&s===this._playlistRequestKey)return;const i=++this._playlistRequestSequence,a=(async()=>{try{const r=await this._hass.callWS({type:"propresenter/get_presentation_playlists",entity_id:this._config.entity,refresh:t});if(i!==this._playlistRequestSequence)return;if(r.protocol_version!==1){this._error={message:"The integration and card protocol versions do not match"};return}this._playlists=Array.isArray(r.playlists)?r.playlists:[],this._playlistRequestKey=r.playlist_revision??s,this._selectedPresentationUuid&&!this._playlists.some(o=>o.items.some(l=>l.presentation_uuid===this._selectedPresentationUuid))&&this._returnToLive(),this.requestUpdate()}catch(r){if(i!==this._playlistRequestSequence)return;this._error={message:this._errorMessage(r)},this._playlistRequestKey="",this.requestUpdate()}})();this._playlistPromise=a;try{await a}finally{this._playlistPromise===a&&(this._playlistPromise=null)}}_scrollToActive(){const t=this._currentIndex(this._state());t!==null&&queueMicrotask(()=>{const s=this.renderRoot.querySelector(`#${this._slideId(t)}`);if(!s)return;const i=this.renderRoot.querySelector(".slide-browser");if(!i||this._config.internal_scroll===!1){s.scrollIntoView({behavior:"smooth",block:"nearest"});return}const a=i.getBoundingClientRect(),r=s.getBoundingClientRect(),o=r.top-a.top+i.scrollTop,l=o+r.height,h=i.scrollTop,p=h+i.clientHeight,c=12;o<h?i.scrollTo({top:Math.max(0,o-c),behavior:"smooth"}):l>p&&i.scrollTo({top:Math.min(i.scrollHeight-i.clientHeight,l-i.clientHeight+c),behavior:"smooth"})})}_clearPending(t){this._pendingIndex=null,this._statusMessage=t,this._pendingTimer!==void 0&&window.clearTimeout(this._pendingTimer),this._pendingTimer=void 0,this.requestUpdate()}_clearThumbnailUrls(){for(const t of this._thumbnailControllers)t.abort();this._thumbnailControllers.clear();for(const t of this._thumbnailUrls.values())URL.revokeObjectURL(t);this._thumbnailUrls.clear(),this._thumbnailStates.clear(),this._thumbnailQueue=[]}_state(){var t,s;return(s=(t=this._hass)==null?void 0:t.states)==null?void 0:s[this._config.entity]}_currentIndex(t){var i;const s=(i=t==null?void 0:t.attributes)==null?void 0:i.current_index;return typeof s=="number"?s:Number.isInteger(Number(s))?Number(s):null}_stringAttribute(t){return typeof t=="string"&&t?t:null}_subtitle(t){var o,l,h,p;if(this._selectedPresentationUuid){const c=this._stringAttribute((o=this._state())==null?void 0:o.state),m=(l=this._metadata)==null?void 0:l.slide_count;return["Browsing playlist item",m?`${m} slides`:"",c?`Live: ${c}`:""].filter(Boolean).join(" · ")}const s=this._currentIndex(this._state()),i=typeof((h=this._metadata)==null?void 0:h.slide_count)=="number"?this._metadata.slide_count:typeof t.slide_count=="number"?t.slide_count:null,a=this._stringAttribute(t.current_label)??((p=this._metadata)==null?void 0:p.current_slide_label);return[s!==null&&i!==null?`${s+1} / ${i}`:"",a].filter(Boolean).join(" · ")||"Waiting for ProPresenter"}_thumbnailPlaceholder(t){return this._thumbnailStates.get(t)==="error"?"Thumbnail unavailable":"Loading thumbnail…"}_playlistPointer(t){var s;return this._stringAttribute((s=t==null?void 0:t.attributes)==null?void 0:s.playlist_revision)??""}_slideId(t){return`propresenter-slide-${t}`}_isEditorPreview(){let t=this;for(;t;){if(t instanceof Element){const s=t.localName;if(s.includes("preview")||s.includes("editor"))return!0}t instanceof ShadowRoot?t=t.host:t=t.parentNode}return!1}_errorMessage(t){return t instanceof Error?t.message:typeof t=="string"?t:"Home Assistant could not complete the request"}}d(G,"styles",bt`
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
  `),customElements.get("propresenter-presentation")||customElements.define("propresenter-presentation",G);const _t=window.customCards??(window.customCards=[]);return _t.some(n=>n.type==="propresenter-presentation")||_t.push({type:"propresenter-presentation",name:"ProPresenter Presentation",description:"A dynamic, guarded ProPresenter slide browser",preview:!0,documentationURL:"https://github.com/media-dotcom/lovelace-propresenter-presentation"}),b.ProPresenterPresentationCard=G,Object.defineProperty(b,Symbol.toStringTag,{value:"Module"}),b})({});
