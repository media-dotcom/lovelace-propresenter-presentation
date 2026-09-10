var ProPresenterPresentationCard=(function(b){"use strict";var zt=Object.defineProperty;var Dt=(b,g,$)=>g in b?zt(b,g,{enumerable:!0,configurable:!0,writable:!0,value:$}):b[g]=$;var u=(b,g,$)=>Dt(b,typeof g!="symbol"?g+"":g,$);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mt;const g=globalThis,$=g.ShadowRoot&&(g.ShadyCSS===void 0||g.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,j=Symbol(),G=new WeakMap;let J=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==j)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if($&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=G.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&G.set(t,e))}return e}toString(){return this.cssText}};const gt=r=>new J(typeof r=="string"?r:r+"",void 0,j),ft=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((s,i,a)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[a+1],r[0]);return new J(t,r,j)},bt=(r,e)=>{if($)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=g.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,r.appendChild(s)}},Z=$?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return gt(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$t,defineProperty:vt,getOwnPropertyDescriptor:yt,getOwnPropertyNames:wt,getOwnPropertySymbols:At,getPrototypeOf:xt}=Object,v=globalThis,Y=v.trustedTypes,St=Y?Y.emptyScript:"",z=v.reactiveElementPolyfillSupport,T=(r,e)=>r,D={toAttribute(r,e){switch(e){case Boolean:r=r?St:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},X=(r,e)=>!$t(r,e),tt={attribute:!0,type:String,converter:D,reflect:!1,useDefault:!1,hasChanged:X};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),v.litPropertyMetadata??(v.litPropertyMetadata=new WeakMap);let P=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=tt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&vt(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:a}=yt(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:i,set(n){const l=i==null?void 0:i.call(this);a==null||a.call(this,n),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??tt}static _$Ei(){if(this.hasOwnProperty(T("elementProperties")))return;const e=xt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(T("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T("properties"))){const t=this.properties,s=[...wt(t),...At(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(Z(i))}else e!==void 0&&t.push(Z(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return bt(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var a;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const n=(((a=s.converter)==null?void 0:a.toAttribute)!==void 0?s.converter:D).toAttribute(t,s.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){var a,n;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const l=s.getPropertyOptions(i),o=typeof l.converter=="function"?{fromAttribute:l.converter}:((a=l.converter)==null?void 0:a.fromAttribute)!==void 0?l.converter:D;this._$Em=i;const h=o.fromAttribute(t,l.type);this[i]=h??((n=this._$Ej)==null?void 0:n.get(i))??h,this._$Em=null}}requestUpdate(e,t,s,i=!1,a){var n;if(e!==void 0){const l=this.constructor;if(i===!1&&(a=this[e]),s??(s=l.getPropertyOptions(e)),!((s.hasChanged??X)(a,t)||s.useDefault&&s.reflect&&a===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(l._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:a},n){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??t??this[e]),a!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,n]of this._$Ep)this[a]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[a,n]of i){const{wrapped:l}=n,o=this[a];l!==!0||this._$AL.has(a)||o===void 0||this.C(a,void 0,n,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(i=>{var a;return(a=i.hostUpdate)==null?void 0:a.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};P.elementStyles=[],P.shadowRootOptions={mode:"open"},P[T("elementProperties")]=new Map,P[T("finalized")]=new Map,z==null||z({ReactiveElement:P}),(v.reactiveElementVersions??(v.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,et=r=>r,L=R.trustedTypes,st=L?L.createPolicy("lit-html",{createHTML:r=>r}):void 0,it="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,rt="?"+y,Et=`<${rt}>`,w=document,M=()=>w.createComment(""),O=r=>r===null||typeof r!="object"&&typeof r!="function",B=Array.isArray,Pt=r=>B(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",W=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nt=/-->/g,at=/>/g,A=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ot=/'/g,lt=/"/g,ht=/^(?:script|style|textarea|title)$/i,Ut=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),_=Ut(1),U=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),ct=new WeakMap,x=w.createTreeWalker(w,129);function dt(r,e){if(!B(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return st!==void 0?st.createHTML(e):e}const Ct=(r,e)=>{const t=r.length-1,s=[];let i,a=e===2?"<svg>":e===3?"<math>":"",n=k;for(let l=0;l<t;l++){const o=r[l];let h,p,c=-1,m=0;for(;m<o.length&&(n.lastIndex=m,p=n.exec(o),p!==null);)m=n.lastIndex,n===k?p[1]==="!--"?n=nt:p[1]!==void 0?n=at:p[2]!==void 0?(ht.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=A):p[3]!==void 0&&(n=A):n===A?p[0]===">"?(n=i??k,c=-1):p[1]===void 0?c=-2:(c=n.lastIndex-p[2].length,h=p[1],n=p[3]===void 0?A:p[3]==='"'?lt:ot):n===lt||n===ot?n=A:n===nt||n===at?n=k:(n=A,i=void 0);const f=n===A&&r[l+1].startsWith("/>")?" ":"";a+=n===k?o+Et:c>=0?(s.push(h),o.slice(0,c)+it+o.slice(c)+y+f):o+y+(c===-2?l:f)}return[dt(r,a+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class I{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let a=0,n=0;const l=e.length-1,o=this.parts,[h,p]=Ct(e,t);if(this.el=I.createElement(h,s),x.currentNode=this.el.content,t===2||t===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=x.nextNode())!==null&&o.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(it)){const m=p[n++],f=i.getAttribute(c).split(y),E=/([.?@])?(.*)/.exec(m);o.push({type:1,index:a,name:E[2],strings:f,ctor:E[1]==="."?Rt:E[1]==="?"?Mt:E[1]==="@"?Ot:H}),i.removeAttribute(c)}else c.startsWith(y)&&(o.push({type:6,index:a}),i.removeAttribute(c));if(ht.test(i.tagName)){const c=i.textContent.split(y),m=c.length-1;if(m>0){i.textContent=L?L.emptyScript:"";for(let f=0;f<m;f++)i.append(c[f],M()),x.nextNode(),o.push({type:2,index:++a});i.append(c[m],M())}}}else if(i.nodeType===8)if(i.data===rt)o.push({type:2,index:a});else{let c=-1;for(;(c=i.data.indexOf(y,c+1))!==-1;)o.push({type:7,index:a}),c+=y.length-1}a++}}static createElement(e,t){const s=w.createElement("template");return s.innerHTML=e,s}}function C(r,e,t=r,s){var n,l;if(e===U)return e;let i=s!==void 0?(n=t._$Co)==null?void 0:n[s]:t._$Cl;const a=O(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==a&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),a===void 0?i=void 0:(i=new a(r),i._$AT(r,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=i:t._$Cl=i),i!==void 0&&(e=C(r,i._$AS(r,e.values),i,s)),e}class Tt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=((e==null?void 0:e.creationScope)??w).importNode(t,!0);x.currentNode=i;let a=x.nextNode(),n=0,l=0,o=s[0];for(;o!==void 0;){if(n===o.index){let h;o.type===2?h=new q(a,a.nextSibling,this,e):o.type===1?h=new o.ctor(a,o.name,o.strings,this,e):o.type===6&&(h=new kt(a,this,e)),this._$AV.push(h),o=s[++l]}n!==(o==null?void 0:o.index)&&(a=x.nextNode(),n++)}return x.currentNode=w,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class q{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=C(this,e,t),O(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==U&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Pt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==d&&O(this._$AH)?this._$AA.nextSibling.data=e:this.T(w.createTextNode(e)),this._$AH=e}$(e){var a;const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=I.createElement(dt(s.h,s.h[0]),this.options)),s);if(((a=this._$AH)==null?void 0:a._$AD)===i)this._$AH.p(t);else{const n=new Tt(i,this),l=n.u(this.options);n.p(t),this.T(l),this._$AH=n}}_$AC(e){let t=ct.get(e.strings);return t===void 0&&ct.set(e.strings,t=new I(e)),t}k(e){B(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const a of e)i===t.length?t.push(s=new q(this.O(M()),this.O(M()),this,this.options)):s=t[i],s._$AI(a),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e!==this._$AB;){const i=et(e).nextSibling;et(e).remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,a){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(e,t=this,s,i){const a=this.strings;let n=!1;if(a===void 0)e=C(this,e,t,0),n=!O(e)||e!==this._$AH&&e!==U,n&&(this._$AH=e);else{const l=e;let o,h;for(e=a[0],o=0;o<a.length-1;o++)h=C(this,l[s+o],t,o),h===U&&(h=this._$AH[o]),n||(n=!O(h)||h!==this._$AH[o]),h===d?e=d:e!==d&&(e+=(h??"")+a[o+1]),this._$AH[o]=h}n&&!i&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Rt extends H{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}}class Mt extends H{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}}class Ot extends H{constructor(e,t,s,i,a){super(e,t,s,i,a),this.type=5}_$AI(e,t=this){if((e=C(this,e,t,0)??d)===U)return;const s=this._$AH,i=e===d&&s!==d||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,a=e!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class kt{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){C(this,e)}}const F=R.litHtmlPolyfillSupport;F==null||F(I,q),(R.litHtmlVersions??(R.litHtmlVersions=[])).push("3.3.3");const It=(r,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let i=s._$litPart$;if(i===void 0){const a=(t==null?void 0:t.renderBefore)??null;s._$litPart$=i=new q(e.insertBefore(M(),a),a,void 0,t??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=globalThis;class N extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=It(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return U}}N._$litElement$=!0,N.finalized=!0,(mt=S.litElementHydrateSupport)==null||mt.call(S,{LitElement:N});const V=S.litElementPolyfillSupport;V==null||V({LitElement:N}),(S.litElementVersions??(S.litElementVersions=[])).push("4.2.2");const Q={grid:{label:"Grid",tokens:{"--pp-card-radius":"18px","--pp-card-padding":"14px","--pp-gap":"10px","--pp-tile-radius":"12px","--pp-accent":"var(--primary-color, #03a9f4)","--pp-muted":"var(--secondary-text-color, #727272)","--pp-surface":"var(--card-background-color, var(--ha-card-background, #fff))","--pp-tile-surface":"color-mix(in srgb, var(--pp-surface) 92%, var(--pp-accent))"}}};function qt(r){const e=Q[r??"grid"]??Q.grid;return Object.entries(e.tokens).map(([t,s])=>`${t}: ${s};`).join(" ")}const ut={design:"grid",columns:"auto",thumbnail_quality:400,show_group_labels:!0,show_slide_labels:!0,show_slide_numbers:!0,show_notes:!1,read_only:!1,confirm_trigger:!1,follow_live:!0};function Nt(r){if(!r||typeof r.entity!="string"||!r.entity)throw new Error("You must select a ProPresenter active-presentation sensor");return{...ut,...r,design:r.design&&r.design in{grid:!0}?r.design:"grid"}}function pt(r){const e=(r==null?void 0:r.attributes)??{};return[e.presentation_uuid??"",e.metadata_revision??"",e.metadata_available??!1].join("|")}function Lt(r,e,t,s,i){return`/api/propresenter/thumbnail/${encodeURIComponent(r)}/${encodeURIComponent(e)}/${t}?quality=${encodeURIComponent(s)}&revision=${encodeURIComponent(i)}`}function Ht(r,e,t,s){if(!t||!s)throw new Error("A current presentation UUID and metadata revision are required");return{entity_id:r,slide_index:e,expected_presentation_uuid:t,expected_metadata_revision:s}}class K extends N{constructor(){super(...arguments);u(this,"_config",{entity:"",...ut});u(this,"_hass");u(this,"_metadata",null);u(this,"_metadataPromise",null);u(this,"_metadataRequestKey","");u(this,"_metadataRequestSequence",0);u(this,"_thumbnailUrls",new Map);u(this,"_thumbnailStates",new Map);u(this,"_thumbnailQueue",[]);u(this,"_thumbnailActive",0);u(this,"_thumbnailControllers",new Set);u(this,"_intersectionObserver");u(this,"_followingLive",!0);u(this,"_pendingIndex",null);u(this,"_pendingTimer");u(this,"_error",null);u(this,"_statusMessage","");u(this,"_lastStatePointer","");u(this,"_lastCurrentIndex",null);u(this,"_refresh",()=>{this._loadMetadata(!0)});u(this,"_toggleFollow",()=>{this._followingLive=!this._followingLive,this._followingLive&&this._scrollToActive(),this.requestUpdate()})}set hass(t){const s=this._state();this._hass=t;const i=this._state(),a=pt(i);a!==this._lastStatePointer&&(this._lastStatePointer=a,this._metadata=null,this._clearThumbnailUrls(),this._loadMetadata(!1));const n=this._currentIndex(i);n!==this._lastCurrentIndex&&(this._lastCurrentIndex=n,this._pendingIndex===n&&this._clearPending("Live cue confirmed"),this._followingLive&&this._scrollToActive()),s!==i&&this.requestUpdate()}get hass(){return this._hass}setConfig(t){this._config=Nt(t),this._followingLive=this._config.follow_live??!0,this._metadataRequestKey="",this._clearThumbnailUrls(),this._error=null,this.requestUpdate()}getCardSize(){return 5}static getConfigForm(){return{schema:[{name:"entity",required:!0,selector:{entity:{domain:"sensor",integration:"propresenter"}}},{name:"design",selector:{select:{options:Object.entries(Q).map(([t,s])=>({value:t,label:s.label}))}}},{name:"columns",selector:{select:{options:[{value:"auto",label:"Responsive"},{value:2,label:"2 columns"},{value:3,label:"3 columns"},{value:4,label:"4 columns"},{value:5,label:"5 columns"}]}}},{name:"thumbnail_quality",selector:{select:{options:[{value:200,label:"Fast (200)"},{value:400,label:"Balanced (400)"},{value:800,label:"Detailed (800)"}]}}},{name:"show_group_labels",selector:{boolean:{}}},{name:"show_slide_labels",selector:{boolean:{}}},{name:"show_slide_numbers",selector:{boolean:{}}},{name:"show_notes",selector:{boolean:{}}},{name:"read_only",selector:{boolean:{}}},{name:"confirm_trigger",selector:{boolean:{}}},{name:"follow_live",selector:{boolean:{}}}]}}static getStubConfig(){return{type:"custom:propresenter-presentation",entity:""}}connectedCallback(){super.connectedCallback(),this._intersectionObserver=new IntersectionObserver(t=>{for(const s of t)if(s.isIntersecting){const i=Number(s.target.dataset.slideIndex);Number.isInteger(i)&&this._queueThumbnail(i)}})}disconnectedCallback(){var t;(t=this._intersectionObserver)==null||t.disconnect(),this._clearThumbnailUrls(),this._pendingTimer!==void 0&&window.clearTimeout(this._pendingTimer),super.disconnectedCallback()}updated(t){super.updated(t),this._intersectionObserver&&(this.renderRoot.querySelectorAll("[data-slide-index]").forEach(s=>{var i;(i=this._intersectionObserver)==null||i.observe(s)}),this._followingLive&&this._scrollToActive())}render(){var h,p,c,m,f;const t=this._state(),s=(t==null?void 0:t.attributes)??{},i=typeof s.slide_layer_active=="boolean"?s.slide_layer_active:((h=this._metadata)==null?void 0:h.slide_layer_active)??!0,a=t!=null&&t.state&&!["unknown","unavailable"].includes(t.state)?t.state:((p=this._metadata)==null?void 0:p.presentation_name)??this._stringAttribute(s.presentation_name)??this._stringAttribute(s.friendly_name)??"ProPresenter",n=((c=this._metadata)==null?void 0:c.groups)??[],l=this._config.columns==="auto"||this._config.columns===void 0?"auto-fit":String(this._config.columns),o=`${qt(this._config.design)} --pp-columns: ${l};`;return _`
      <article class="card" style=${o}>
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
        ${i?d:_`<div class="banner warning">Output cleared · the active cue is still shown below</div>`}
        ${this._error?_`<div class="banner error">${this._error.message}</div>`:d}
        ${this._statusMessage?_`<div class="banner">${this._statusMessage}</div>`:d}
        ${((m=this._metadata)==null?void 0:m.protocol_version)!==void 0&&this._metadata.protocol_version!==1?_`<div class="banner error">This card needs a newer integration protocol.</div>`:d}
        ${n.length?_`<div class="groups">${n.map(E=>_`
              <section>
                ${this._config.show_group_labels?_`<h3 class="group-title">${E.label}</h3>`:d}
                <div class="grid">
                  ${E.slides.map(jt=>this._renderSlide(jt))}
                </div>
              </section>
            `)}</div>`:_`<p class="muted">${((f=this._metadata)==null?void 0:f.metadata_available)===!1||!this._metadata?"Loading presentation slides…":"No active presentation"}</p>`}
      </article>
    `}_renderSlide(t){const s=this._currentIndex(this._state())===t.index,i=t.enabled===!1,a=!this._config.read_only&&!i&&!this._isEditorPreview(),n=`tile ${s?"active":""} ${i?"disabled":""}`,l=_`
      <div class="thumbnail" data-slide-index=${t.index}>
        ${this._thumbnailUrls.has(t.index)?_`<img src=${this._thumbnailUrls.get(t.index)} alt=${t.label} />`:_`<span>${this._thumbnailPlaceholder(t.index)}</span>`}
      </div>
      <div class="tile-content">
        ${this._config.show_slide_labels?_`<span class="tile-label">${t.label}</span>`:d}
        ${this._config.show_slide_numbers?_`<span class="tile-index">Slide ${t.index+1}${i?" · disabled":""}</span>`:d}
        ${this._config.show_notes&&t.notes?_`<span class="notes">${t.notes}</span>`:d}
      </div>
      ${this._pendingIndex===t.index?_`<span class="pending">Pending</span>`:d}
    `;return a?_`<button id=${this._slideId(t.index)} class=${n} @click=${()=>this._trigger(t)}>${l}</button>`:_`<div id=${this._slideId(t.index)} class=${n} aria-disabled="true">${l}</div>`}async _loadMetadata(t){if(!this._hass||!this._config.entity)return;if(this._metadataPromise)return this._metadataPromise;const s=this._state(),i=pt(s);if(!t&&i===this._metadataRequestKey)return;this._metadataRequestKey=i;const a=++this._metadataRequestSequence,n=(async()=>{try{const l=await this._hass.callWS({type:"propresenter/get_active_presentation",entity_id:this._config.entity,refresh:t});if(a!==this._metadataRequestSequence)return;if(l.protocol_version!==1){this._error={message:"The integration and card protocol versions do not match"};return}this._clearThumbnailUrls(),this._metadata=l,this._error=null,this._statusMessage="",this.requestUpdate()}catch(l){if(a!==this._metadataRequestSequence)return;this._error={message:this._errorMessage(l)},this.requestUpdate()}})();this._metadataPromise=n;try{await n}finally{this._metadataPromise===n&&(this._metadataPromise=null)}}_queueThumbnail(t){var s;!((s=this._metadata)!=null&&s.metadata_available)||this._thumbnailUrls.has(t)||this._thumbnailStates.get(t)==="loading"||this._thumbnailStates.get(t)==="loaded"||(this._thumbnailStates.set(t,"loading"),this._thumbnailQueue.push(t),this._drainThumbnailQueue())}_drainThumbnailQueue(){for(;this._thumbnailActive<4&&this._thumbnailQueue.length;){const t=this._thumbnailQueue.shift();this._thumbnailActive+=1,this._fetchThumbnail(t).finally(()=>{this._thumbnailActive-=1,this._drainThumbnailQueue()})}}async _fetchThumbnail(t){const s=this._metadata;if(!(s!=null&&s.metadata_available)||!s.presentation_uuid||!s.metadata_revision){this._thumbnailStates.set(t,"error");return}const i=Lt(this._config.entity,s.presentation_uuid,t,this._config.thumbnail_quality??400,s.metadata_revision),a=`${s.presentation_uuid}|${s.metadata_revision}`,n=new AbortController;this._thumbnailControllers.add(n);try{const l=await this._hass.callWS({type:"auth/sign_path",path:i,expires:60}),o=l.path??l.signed_path;if(!o)throw new Error("Home Assistant did not return a signed thumbnail path");const h=await fetch(this._hass.hassUrl(o),{credentials:"same-origin",signal:n.signal});if(h.status===401||h.status===403){const p=await this._hass.callWS({type:"auth/sign_path",path:i,expires:60}),c=p.path??p.signed_path;if(!c)throw new Error("Thumbnail authorization expired");const m=await fetch(this._hass.hassUrl(c),{credentials:"same-origin",signal:n.signal});if(!m.ok)throw new Error(`Thumbnail request failed (${m.status})`);this._setThumbnailUrl(t,URL.createObjectURL(await m.blob()),a);return}if(!h.ok)throw h.status===409&&await this._loadMetadata(!0),new Error(`Thumbnail request failed (${h.status})`);this._setThumbnailUrl(t,URL.createObjectURL(await h.blob()),a)}catch(l){if(n.signal.aborted)return;this._thumbnailStates.set(t,"error"),this._error={message:this._errorMessage(l)},this.requestUpdate()}finally{this._thumbnailControllers.delete(n)}}_setThumbnailUrl(t,s,i){const a=this._metadata?`${this._metadata.presentation_uuid}|${this._metadata.metadata_revision}`:"";if(!this.isConnected||a!==i){URL.revokeObjectURL(s);return}const n=this._thumbnailUrls.get(t);n&&URL.revokeObjectURL(n),this._thumbnailUrls.set(t,s),this._thumbnailStates.set(t,"loaded"),this.requestUpdate()}async _trigger(t){if(this._config.read_only||t.enabled===!1||this._isEditorPreview()||!this._hass||this._config.confirm_trigger&&!window.confirm(`Trigger “${t.label}”?`))return;const s=this._metadata;if(!(s!=null&&s.presentation_uuid)||!s.metadata_revision){this._error={message:"Refresh the presentation before triggering a slide"},this.requestUpdate();return}this._pendingIndex=t.index,this._statusMessage="Command pending · waiting for live confirmation",this._error=null,this.requestUpdate();try{await this._hass.callService("propresenter","trigger_slide",Ht(this._config.entity,t.index,s.presentation_uuid,s.metadata_revision)),this._pendingTimer=window.setTimeout(()=>{this._pendingIndex===t.index&&(this._pendingIndex=null,this._statusMessage="Trigger sent, but live confirmation is unavailable",this.requestUpdate())},5e3)}catch(i){this._pendingIndex=null,this._statusMessage="";const a=this._errorMessage(i),n=/stale|changed|revision|uuid/i.test(a);this._error={message:n?"The presentation changed; refreshing slides":`Trigger failed: ${a}`,stale:n},this.requestUpdate(),n&&await this._loadMetadata(!0)}}_scrollToActive(){const t=this._currentIndex(this._state());t!==null&&queueMicrotask(()=>{var s;(s=this.renderRoot.querySelector(`#${this._slideId(t)}`))==null||s.scrollIntoView({behavior:"smooth",block:"nearest"})})}_clearPending(t){this._pendingIndex=null,this._statusMessage=t,this._pendingTimer!==void 0&&window.clearTimeout(this._pendingTimer),this._pendingTimer=void 0,this.requestUpdate()}_clearThumbnailUrls(){for(const t of this._thumbnailControllers)t.abort();this._thumbnailControllers.clear();for(const t of this._thumbnailUrls.values())URL.revokeObjectURL(t);this._thumbnailUrls.clear(),this._thumbnailStates.clear(),this._thumbnailQueue=[]}_state(){var t,s;return(s=(t=this._hass)==null?void 0:t.states)==null?void 0:s[this._config.entity]}_currentIndex(t){var i;const s=(i=t==null?void 0:t.attributes)==null?void 0:i.current_index;return typeof s=="number"?s:Number.isInteger(Number(s))?Number(s):null}_stringAttribute(t){return typeof t=="string"&&t?t:null}_subtitle(t){var l,o;const s=this._currentIndex(this._state()),i=typeof((l=this._metadata)==null?void 0:l.slide_count)=="number"?this._metadata.slide_count:typeof t.slide_count=="number"?t.slide_count:null,a=this._stringAttribute(t.current_label)??((o=this._metadata)==null?void 0:o.current_slide_label);return[s!==null&&i!==null?`${s+1} / ${i}`:"",a].filter(Boolean).join(" · ")||"Waiting for ProPresenter"}_thumbnailPlaceholder(t){return this._thumbnailStates.get(t)==="error"?"Thumbnail unavailable":"Loading thumbnail…"}_slideId(t){return`propresenter-slide-${t}`}_isEditorPreview(){let t=this;for(;t;){if(t instanceof Element){const s=t.localName;if(s.includes("preview")||s.includes("editor"))return!0}t instanceof ShadowRoot?t=t.host:t=t.parentNode}return!1}_errorMessage(t){return t instanceof Error?t.message:typeof t=="string"?t:"Home Assistant could not complete the request"}}u(K,"styles",ft`
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
      .grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
  `),customElements.get("propresenter-presentation")||customElements.define("propresenter-presentation",K);const _t=window.customCards??(window.customCards=[]);return _t.some(r=>r.type==="propresenter-presentation")||_t.push({type:"propresenter-presentation",name:"ProPresenter Presentation",description:"A dynamic, guarded ProPresenter slide browser",preview:!0,documentationURL:"https://github.com/BenJamesAndo/lovelace-propresenter-presentation"}),b.ProPresenterPresentationCard=K,Object.defineProperty(b,Symbol.toStringTag,{value:"Module"}),b})({});
