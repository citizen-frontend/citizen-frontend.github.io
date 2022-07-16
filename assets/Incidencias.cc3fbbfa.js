import{o as w,c as _,e as B,f as D,a as V,g as Xe,h as me,i as Ye,j as Je,k as $e,C as Ze,L as et,F as tt,l as le,S as nt,m as rt,q as st,w as Z,s as it,t as ee,u as te,r as ge,v as ot,x as at,p as ut,d as ct,b as lt,y as ye,n as ht,z as dt}from"./index.ece2d941.js";import{_ as ft}from"./plugin-vue_export-helper.21dcd24c.js";var Le={name:"Card"};const pt={class:"p-card p-component"},mt={key:0,class:"p-card-header"},gt={class:"p-card-body"},yt={key:0,class:"p-card-title"},wt={key:1,class:"p-card-subtitle"},_t={class:"p-card-content"},vt={key:2,class:"p-card-footer"};function bt(n,e,t,r,s,i){return w(),_("div",pt,[n.$slots.header?(w(),_("div",mt,[B(n.$slots,"header")])):D("",!0),V("div",gt,[n.$slots.title?(w(),_("div",yt,[B(n.$slots,"title")])):D("",!0),n.$slots.subtitle?(w(),_("div",wt,[B(n.$slots,"subtitle")])):D("",!0),V("div",_t,[B(n.$slots,"content")]),n.$slots.footer?(w(),_("div",vt,[B(n.$slots,"footer")])):D("",!0)])])}function St(n,e){e===void 0&&(e={});var t=e.insertAt;if(!(!n||typeof document=="undefined")){var r=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",t==="top"&&r.firstChild?r.insertBefore(s,r.firstChild):r.appendChild(s),s.styleSheet?s.styleSheet.cssText=n:s.appendChild(document.createTextNode(n))}}var Tt=`
.p-card-header img {
    width: 100%;
}
`;St(Tt);Le.render=bt;/**
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
 */class y{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}y.UNAUTHENTICATED=new y(null),y.GOOGLE_CREDENTIALS=new y("google-credentials-uid"),y.FIRST_PARTY=new y("first-party-uid"),y.MOCK_USER=new y("mock-user");/**
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
 */let x="9.9.0";/**
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
 */const L=new et("@firebase/firestore");function W(n,...e){if(L.logLevel<=le.DEBUG){const t=e.map(de);L.debug(`Firestore (${x}): ${n}`,...t)}}function he(n,...e){if(L.logLevel<=le.ERROR){const t=e.map(de);L.error(`Firestore (${x}): ${n}`,...t)}}function Et(n,...e){if(L.logLevel<=le.WARN){const t=e.map(de);L.warn(`Firestore (${x}): ${n}`,...t)}}function de(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
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
*/var e}/**
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
 */function k(n="Unexpected state"){const e=`FIRESTORE (${x}) INTERNAL ASSERTION FAILED: `+n;throw he(e),new Error(e)}function m(n,e){n||k()}function Y(n,e){return n}/**
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
 */const we="ok",At="cancelled",q="unknown",h="invalid-argument",It="deadline-exceeded",Vt="not-found",Ct="permission-denied",re="unauthenticated",Nt="resource-exhausted",O="failed-precondition",Dt="aborted",Ft="out-of-range",Oe="unimplemented",kt="internal",Pt="unavailable";class c extends tt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Rt{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $t{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(y.UNAUTHENTICATED))}shutdown(){}}class Lt{constructor(e){this.auth=null,e.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(m(typeof e.accessToken=="string"),new Rt(e.accessToken,new y(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class Ot{constructor(e,t,r){this.type="FirstParty",this.user=y.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class Ut{constructor(e,t,r){this.t=e,this.i=t,this.o=r}getToken(){return Promise.resolve(new Ot(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable(()=>t(y.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xt{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bt{constructor(e){this.u=e,this.appCheck=null,e.onInit(t=>{this.appCheck=t})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(m(typeof e.token=="string"),new xt(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}/**
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
 */class qt{constructor(e,t,r,s,i,o,a,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class U{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new U("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof U&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class z{constructor(e,t,r){t===void 0?t=0:t>e.length&&k(),r===void 0?r=e.length-t:r>e.length-t&&k(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return z.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof z?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class p extends z{construct(e,t,r){return new p(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new c(h,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new p(t)}static emptyPath(){return new p([])}}const Mt=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class E extends z{construct(e,t,r){return new E(e,t,r)}static isValidIdentifier(e){return Mt.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),E.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new E(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new c(h,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new c(h,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new c(h,"Path has invalid escape sequence: "+e);r+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new c(h,"Unterminated ` in path: "+e);return new E(t)}static emptyPath(){return new E([])}}/**
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
 */class v{constructor(e){this.path=e}static fromPath(e){return new v(p.fromString(e))}static fromName(e){return new v(p.fromString(e).popFirst(5))}static empty(){return new v(p.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&p.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return p.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new v(new p(e.slice()))}}/**
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
 */function Ue(n,e,t){if(!t)throw new c(h,`Function ${n}() cannot be called with an empty ${e}.`)}function _e(n){if(!v.isDocumentKey(n))throw new c(h,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ve(n){if(v.isDocumentKey(n))throw new c(h,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function jt(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":k()}function xe(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new c(h,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=jt(n);throw new c(h,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function zt(n){return n==null}function be(n){return n===0&&1/n==-1/0}/**
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
 */const Gt={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */var Se,l;function Te(n){if(n===void 0)return he("RPC_ERROR","HTTP error has no status"),q;switch(n){case 200:return we;case 400:return O;case 401:return re;case 403:return Ct;case 404:return Vt;case 409:return Dt;case 416:return Ft;case 429:return Nt;case 499:return At;case 500:return q;case 501:return Oe;case 503:return Pt;case 504:return It;default:return n>=200&&n<300?we:n>=400&&n<500?O:n>=500&&n<600?kt:q}}/**
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
 */(l=Se||(Se={}))[l.OK=0]="OK",l[l.CANCELLED=1]="CANCELLED",l[l.UNKNOWN=2]="UNKNOWN",l[l.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",l[l.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",l[l.NOT_FOUND=5]="NOT_FOUND",l[l.ALREADY_EXISTS=6]="ALREADY_EXISTS",l[l.PERMISSION_DENIED=7]="PERMISSION_DENIED",l[l.UNAUTHENTICATED=16]="UNAUTHENTICATED",l[l.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",l[l.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",l[l.ABORTED=10]="ABORTED",l[l.OUT_OF_RANGE=11]="OUT_OF_RANGE",l[l.UNIMPLEMENTED=12]="UNIMPLEMENTED",l[l.INTERNAL=13]="INTERNAL",l[l.UNAVAILABLE=14]="UNAVAILABLE",l[l.DATA_LOSS=15]="DATA_LOSS";class Kt extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.h=t+"://"+e.host,this.l="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}m(e,t,r,s,i){const o=this.p(e,t);W("RestConnection","Sending: ",o,r);const a={};return this.g(a,s,i),this.v(e,o,a,r).then(u=>(W("RestConnection","Received: ",u),u),u=>{throw Et("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",r),u})}T(e,t,r,s,i,o){return this.m(e,t,r,s,i)}g(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+x,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}p(e,t){const r=Gt[e];return`${this.h}/v1/${t}:${r}`}}{constructor(e,t){super(e),this.I=t}A(e,t){throw new Error("Not supported by FetchConnection")}async v(e,t,r,s){const i=JSON.stringify(s);let o;try{o=await this.I(t,{method:"POST",headers:r,body:i})}catch(a){throw new c(Te(a.status),"Request failed with error: "+a.statusText)}if(!o.ok)throw new c(Te(o.status),"Request failed with error: "+o.statusText);return o.json()}}/**
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
 *//**
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
 */function Qt(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Ht{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Qt(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function G(n,e){return n<e?-1:n>e?1:0}function Wt(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class C{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new c(h,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new c(h,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new c(h,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new c(h,"Timestamp seconds out of range: "+e)}static now(){return C.fromMillis(Date.now())}static fromDate(e){return C.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new C(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?G(this.nanoseconds,e.nanoseconds):G(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class S{constructor(e){this.timestamp=e}static fromTimestamp(e){return new S(e)}static min(){return new S(new C(0,0))}static max(){return new S(new C(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function Ee(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function fe(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}/**
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
 *//**
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
 */class N{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new N(t)}static fromUint8Array(e){const t=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new N(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return G(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}N.EMPTY_BYTE_STRING=new N("");const Xt=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function K(n){if(m(!!n),typeof n=="string"){let e=0;const t=Xt.exec(n);if(m(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:g(n.seconds),nanos:g(n.nanos)}}function g(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function se(n){return typeof n=="string"?N.fromBase64String(n):N.fromUint8Array(n)}/**
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
 */function Be(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function qe(n){const e=n.mapValue.fields.__previous_value__;return Be(e)?qe(e):e}function ie(n){const e=K(n.mapValue.fields.__local_write_time__.timestampValue);return new C(e.seconds,e.nanos)}function oe(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Be(n)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(n)?9007199254740991:10:k()}function ae(n,e){if(n===e)return!0;const t=oe(n);if(t!==oe(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ie(n).isEqual(ie(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=K(r.timestampValue),o=K(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,s){return se(r.bytesValue).isEqual(se(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,s){return g(r.geoPointValue.latitude)===g(s.geoPointValue.latitude)&&g(r.geoPointValue.longitude)===g(s.geoPointValue.longitude)}(n,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return g(r.integerValue)===g(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=g(r.doubleValue),o=g(s.doubleValue);return i===o?be(i)===be(o):isNaN(i)&&isNaN(o)}return!1}(n,e);case 9:return Wt(n.arrayValue.values||[],e.arrayValue.values||[],ae);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Ee(i)!==Ee(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!ae(i[a],o[a])))return!1;return!0}(n,e);default:return k()}}function Ae(n){return!!n&&"nullValue"in n}function Ie(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ne(n){return!!n&&"mapValue"in n}function M(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return fe(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=M(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=M(n.arrayValue.values[t]);return e}return Object.assign({},n)}class A{constructor(e){this.value=e}static empty(){return new A({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ne(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=M(t)}setAll(e){let t=E.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=M(o):s.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ne(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ae(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ne(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){fe(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new A(M(this.value))}}/**
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
 */class T{constructor(e,t,r,s,i,o){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new T(e,0,S.min(),S.min(),A.empty(),0)}static newFoundDocument(e,t,r){return new T(e,1,t,S.min(),r,0)}static newNoDocument(e,t){return new T(e,2,t,S.min(),A.empty(),0)}static newUnknownDocument(e,t){return new T(e,3,t,S.min(),A.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=A.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=A.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=S.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof T&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new T(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yt{constructor(e,t=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function Ve(n,e=null,t=[],r=[],s=null,i=null,o=null){return new Yt(n,e,t,r,s,i,o)}class Ce{constructor(e,t){this.position=e,this.inclusive=t}}class H{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
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
 */class Jt{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.$=null,this.F=null,this.startAt,this.endAt}}function Zt(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function en(n){for(const e of n.filters)if(e.D())return e.field;return null}function Ne(n){const e=Y(n);if(e.$===null){e.$=[];const t=en(e),r=Zt(e);if(t!==null&&r===null)t.isKeyField()||e.$.push(new H(t)),e.$.push(new H(E.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.$.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.$.push(new H(E.keyField(),i))}}}return e.$}function tn(n){const e=Y(n);if(!e.F)if(e.limitType==="F")e.F=Ve(e.path,e.collectionGroup,Ne(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Ne(e)){const o=i.dir==="desc"?"asc":"desc";t.push(new H(i.field,o))}const r=e.endAt?new Ce(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Ce(e.startAt.position,e.startAt.inclusive):null;e.F=Ve(e.path,e.collectionGroup,t,e.filters,e.limit,r,s)}return e.F}/**
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
 */const nn=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),rn=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class sn{constructor(e,t){this.databaseId=e,this.S=t}}function ue(n){return m(!!n),S.fromTimestamp(function(e){const t=K(e);return new C(t.seconds,t.nanos)}(n))}function Me(n,e){return function(t){return new p(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function on(n,e){return Me(n.databaseId,e.path)}function ce(n,e){const t=function(s){const i=p.fromString(s);return m(je(i)),i}(e);if(t.get(1)!==n.databaseId.projectId)throw new c(h,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new c(h,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new v((m((r=t).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function De(n,e){return Me(n.databaseId,e)}function an(n){return new p(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function un(n,e){return"found"in e?function(t,r){m(!!r.found),r.found.name,r.found.updateTime;const s=ce(t,r.found.name),i=ue(r.found.updateTime),o=new A({mapValue:{fields:r.found.fields}});return T.newFoundDocument(s,i,o)}(n,e):"missing"in e?function(t,r){m(!!r.missing),m(!!r.readTime);const s=ce(t,r.missing),i=ue(r.readTime);return T.newNoDocument(s,i)}(n,e):k()}function cn(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=De(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=De(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(u){if(u.length===0)return;const d=u.map(b=>function(f){if(f.op==="=="){if(Ie(f.value))return{unaryFilter:{field:$(f.field),op:"IS_NAN"}};if(Ae(f.value))return{unaryFilter:{field:$(f.field),op:"IS_NULL"}}}else if(f.op==="!="){if(Ie(f.value))return{unaryFilter:{field:$(f.field),op:"IS_NOT_NAN"}};if(Ae(f.value))return{unaryFilter:{field:$(f.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$(f.field),op:hn(f.op),value:f.value}}}(b));return d.length===1?d[0]:{compositeFilter:{op:"AND",filters:d}}}(e.filters);s&&(t.structuredQuery.where=s);const i=function(u){if(u.length!==0)return u.map(d=>function(b){return{field:$(b.field),direction:ln(b.dir)}}(d))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const o=function(u,d){return u.S||zt(d)?d:{value:d}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),t}function ln(n){return nn[n]}function hn(n){return rn[n]}function $(n){return{fieldPath:n.canonicalString()}}function je(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */function dn(n){return new sn(n,!0)}/**
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
 */class fn extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.H=r,this.q=s,this.J=!1}X(){if(this.J)throw new c(O,"The client has already been terminated.")}m(e,t,r){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.H.m(e,t,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===re&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new c(q,s.toString())})}T(e,t,r,s){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.H.T(e,t,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===re&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new c(q,i.toString())})}terminate(){this.J=!0}}async function pn(n,e){const t=Y(n),r=an(t.q)+"/documents",s={documents:e.map(u=>on(t.q,u))},i=await t.T("BatchGetDocuments",r,s,e.length),o=new Map;i.forEach(u=>{const d=un(t.q,u);o.set(d.key.toString(),d)});const a=[];return e.forEach(u=>{const d=o.get(u.toString());m(!!d),a.push(d)}),a}async function mn(n,e){const t=Y(n),r=cn(t.q,tn(e));return(await t.T("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(i,o,a){const u=ce(i,o.name),d=ue(o.updateTime),b=new A({mapValue:{fields:o.fields}}),f=T.newFoundDocument(u,d,b);return a&&f.setHasCommittedMutations(),a?f.setHasCommittedMutations():f}(t.q,s.document,void 0))}/**
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
 */const j=new Map;function ze(n){if(n._terminated)throw new c(O,"The client has already been terminated.");if(!j.has(n)){W("ComponentProvider","Initializing Datastore");const i=function(u){return new Kt(u,fetch.bind(null))}((e=n._databaseId,t=n.app.options.appId||"",r=n._persistenceKey,s=n._freezeSettings(),new qt(e,t,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams))),o=dn(n._databaseId),a=function(u,d,b,f){return new fn(u,d,b,f)}(n._authCredentials,n._appCheckCredentials,i,o);j.set(n,a)}var e,t,r,s;/**
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
*/return j.get(n)}class Fe{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new c(h,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new c(h,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(r,s,i,o){if(s===!0&&o===!0)throw new c(h,`${r} and ${i} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class pe{constructor(e,t,r){this._authCredentials=t,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fe({}),this._settingsFrozen=!1,e instanceof U?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new c(h,'"projectId" not provided in firebase.initializeApp.');return new U(s.options.projectId)}(e))}get app(){if(!this._app)throw new c(O,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new c(O,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fe(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new $t;switch(t.type){case"gapi":const r=t.client;return m(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new Ut(r,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new c(h,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=j.get(e);t&&(W("ComponentProvider","Removing Datastore"),j.delete(e),t.terminate())}(this),Promise.resolve()}}function gn(n=Je()){return Ye(n,"firestore/lite").getImmediate()}/**
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
 *//**
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
 */class I{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new F(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new I(this.firestore,e,this._key)}}class J{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new J(this.firestore,e,this._query)}}class F extends J{constructor(e,t,r){super(e,t,new Jt(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new I(this.firestore,null,new v(e))}withConverter(e){return new F(this.firestore,e,this._path)}}function ke(n,e,...t){if(n=$e(n),Ue("collection","path",e),n instanceof pe){const r=p.fromString(e,...t);return ve(r),new F(n,null,r)}{if(!(n instanceof I||n instanceof F))throw new c(h,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(p.fromString(e,...t));return ve(r),new F(n.firestore,null,r)}}function yn(n,e,...t){if(n=$e(n),arguments.length===1&&(e=Ht.R()),Ue("doc","path",e),n instanceof pe){const r=p.fromString(e,...t);return _e(r),new I(n,null,new v(r))}{if(!(n instanceof I||n instanceof F))throw new c(h,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(p.fromString(e,...t));return _e(r),new I(n.firestore,n instanceof F?n.converter:null,new v(r))}}/**
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
 */class Ge{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new c(h,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new E(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class X{constructor(e){this._byteString=e}static fromBase64String(e){try{return new X(N.fromBase64String(e))}catch(t){throw new c(h,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new X(N.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class wn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new c(h,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new c(h,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return G(this._lat,e._lat)||G(this._long,e._long)}}const _n=new RegExp("[~\\*/\\[\\]]");function vn(n,e,t){if(e.search(_n)>=0)throw Pe(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ge(...e.split("."))._internalPath}catch{throw Pe(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Pe(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new c(h,a+n+u)}/**
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
 */class Ke{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new I(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Qe(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Sn("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Qe extends Ke{data(){return super.data()}}class bn{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,t){this._docs.forEach(e,t)}}function Sn(n,e){return typeof e=="string"?vn(n,e):e instanceof Ge?e._internalPath:e._delegate._internalPath}class He extends class{convertValue(e,t="none"){switch(oe(e)){case 0:return null;case 1:return e.booleanValue;case 2:return g(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(se(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw k()}}convertObject(e,t){const r={};return fe(e.fields,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertGeoPoint(e){return new wn(g(e.latitude),g(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=qe(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ie(e));default:return null}}convertTimestamp(e){const t=K(e);return new C(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=p.fromString(e);m(je(r));const s=new U(r.get(1),r.get(3)),i=new v(r.popFirst(5));return s.isEqual(t)||he(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new X(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new I(this.firestore,null,t)}}function Tn(n){const e=ze((n=xe(n,I)).firestore),t=new He(n.firestore);return pn(e,[n._key]).then(r=>{m(r.length===1);const s=r[0];return new Ke(n.firestore,t,n._key,s.isFoundDocument()?s:null,n.converter)})}function Re(n){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new c(Oe,"limitToLast() queries require specifying at least one orderBy() clause")})((n=xe(n,J))._query);const e=ze(n.firestore),t=new He(n.firestore);return mn(e,n._query).then(r=>{const s=r.map(i=>new Qe(n.firestore,t,i.key,i,n.converter));return n._query.limitType==="L"&&s.reverse(),new bn(n,s)})}(function(n){x=n})(`${nt}_lite`),Xe(new Ze("firestore/lite",(n,{options:e})=>{const t=n.getProvider("app").getImmediate(),r=new pe(t,new Lt(n.getProvider("auth-internal")),new Bt(n.getProvider("app-check-internal")));return e&&r._setSettings(e),r},"PUBLIC")),me("firestore-lite","3.4.12",""),me("firestore-lite","3.4.12","esm2017");const En=n=>(ut("data-v-11bf3b30"),n=n(),ct(),n),An={class:"muniform"},In={class:"container"},Vn={key:0},Cn={key:1},Nn=En(()=>V("span",{style:{}},null,-1)),Dn={class:"logged",style:{"margin-left":"auto"}},Fn={key:1,class:"pi pi-check",style:{color:"green","font-weight":"600"}},kn={class:"container"},Pn=["onClick"],Rn={class:"middle-center"},$n={__name:"Incidencias",async setup(n){let e,t;const r=rt(),s=r.appContext.config.globalProperties.$firebaseApp,i=gn(s),o=P=>{ge.push({name:"S003",params:{incidentType:P}})},a=st({currentWidth:100,registeredUser:null});let u=ke(i,"IncidentTypes"),d=ke(i,"RegisteredUsers"),b=localStorage.getItem("storedUserId");if(b){let P=yn(i,"RegisteredUsers",b),Q=([e,t]=Z(()=>Tn(P)),e=await e,t(),e);a.registeredUser=Q.data(),r.appContext.config.globalProperties.$user=a.registeredUser}let f=([e,t]=Z(()=>Re(u)),e=await e,t(),e);[e,t]=Z(()=>Re(d)),e=await e,t();const We=f.docs.map(P=>P.data());return it(async()=>{a.currentWidth=(document.getElementsByClassName("container")[0].clientWidth-30)/2}),(P,Q)=>(w(),_("main",An,[V("div",In,[a.registeredUser==null?(w(),_("h4",Vn,"Usuario no registrado")):D("",!0),a.registeredUser!=null?(w(),_("h4",Cn,ee(a.registeredUser.name)+" "+ee(a.registeredUser.lastName),1)):D("",!0),Nn,V("div",Dn,[a.registeredUser==null?(w(),_("a",{key:0,onClick:Q[0]||(Q[0]=R=>te(ge).push({name:"S004"}))},"Identificarme")):D("",!0),a.registeredUser!=null?(w(),_("i",Fn)):D("",!0)])]),V("div",kn,[(w(!0),_(ot,null,at(te(We),R=>(w(),_("a",{onClick:Ln=>o(R.id),key:"name"},[lt(te(Le),{style:ht({width:`${a.currentWidth}px`,backgroundColor:R.backgroundColor,color:R.foregroundColor})},{content:ye(()=>[V("div",Rn,[V("i",{class:dt(R.icon),style:{"font-size":"6rem"}},null,2)])]),footer:ye(()=>[V("h2",null,ee(R.name),1)]),_:2},1032,["style"])],8,Pn))),128))])]))}};var xn=ft($n,[["__scopeId","data-v-11bf3b30"]]);export{xn as default};
