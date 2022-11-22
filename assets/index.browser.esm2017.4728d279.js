import{e as Ft,f as $e,h as Dt,i as xt,j as $,C as Pt,L as Rt,F as Ot,k as _e,S as Lt}from"./index.eeda083e.js";/**
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
 */class I{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}I.UNAUTHENTICATED=new I(null),I.GOOGLE_CREDENTIALS=new I("google-credentials-uid"),I.FIRST_PARTY=new I("first-party-uid"),I.MOCK_USER=new I("mock-user");/**
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
 */let z="9.9.0";/**
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
 */const M=new Rt("@firebase/firestore");function oe(n,...e){if(M.logLevel<=_e.DEBUG){const t=e.map(Ve);M.debug(`Firestore (${z}): ${n}`,...t)}}function Ie(n,...e){if(M.logLevel<=_e.ERROR){const t=e.map(Ve);M.error(`Firestore (${z}): ${n}`,...t)}}function Ct(n,...e){if(M.logLevel<=_e.WARN){const t=e.map(Ve);M.warn(`Firestore (${z}): ${n}`,...t)}}function Ve(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
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
 */function m(n="Unexpected state"){const e=`FIRESTORE (${z}) INTERNAL ASSERTION FAILED: `+n;throw Ie(e),new Error(e)}function T(n,e){n||m()}function ee(n,e){return n}/**
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
 */const Me="ok",qt="cancelled",K="unknown",h="invalid-argument",$t="deadline-exceeded",Mt="not-found",Ut="permission-denied",be="unauthenticated",jt="resource-exhausted",U="failed-precondition",Bt="aborted",zt="out-of-range",it="unimplemented",Kt="internal",Gt="unavailable";class c extends Ot{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Qt{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Yt{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(I.UNAUTHENTICATED))}shutdown(){}}class Wt{constructor(e){this.auth=null,e.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(T(typeof e.accessToken=="string"),new Qt(e.accessToken,new I(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class Ht{constructor(e,t,r){this.type="FirstParty",this.user=I.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class Xt{constructor(e,t,r){this.t=e,this.i=t,this.o=r}getToken(){return Promise.resolve(new Ht(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable(()=>t(I.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Jt{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Zt{constructor(e){this.u=e,this.appCheck=null,e.onInit(t=>{this.appCheck=t})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(T(typeof e.token=="string"),new Jt(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}/**
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
 */class en{constructor(e,t,r,s,i,o,a,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class j{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new j("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof j&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class W{constructor(e,t,r){t===void 0?t=0:t>e.length&&m(),r===void 0?r=e.length-t:r>e.length-t&&m(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return W.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof W?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class y extends W{construct(e,t,r){return new y(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new c(h,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new y(t)}static emptyPath(){return new y([])}}const tn=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class S extends W{construct(e,t,r){return new S(e,t,r)}static isValidIdentifier(e){return tn.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),S.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new S(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new c(h,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new c(h,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new c(h,"Path has invalid escape sequence: "+e);r+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new c(h,"Unterminated ` in path: "+e);return new S(t)}static emptyPath(){return new S([])}}/**
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
 */class b{constructor(e){this.path=e}static fromPath(e){return new b(y.fromString(e))}static fromName(e){return new b(y.fromString(e).popFirst(5))}static empty(){return new b(y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&y.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return y.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new b(new y(e.slice()))}}/**
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
 */function ot(n,e,t){if(!t)throw new c(h,`Function ${n}() cannot be called with an empty ${e}.`)}function Ue(n){if(!b.isDocumentKey(n))throw new c(h,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function je(n){if(b.isDocumentKey(n))throw new c(h,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function pe(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":m()}function ke(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new c(h,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=pe(n);throw new c(h,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function nn(n){return n==null}function ae(n){return n===0&&1/n==-1/0}/**
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
 */const rn={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */var Be,d;function ze(n){if(n===void 0)return Ie("RPC_ERROR","HTTP error has no status"),K;switch(n){case 200:return Me;case 400:return U;case 401:return be;case 403:return Ut;case 404:return Mt;case 409:return Bt;case 416:return zt;case 429:return jt;case 499:return qt;case 500:return K;case 501:return it;case 503:return Gt;case 504:return $t;default:return n>=200&&n<300?Me:n>=400&&n<500?U:n>=500&&n<600?Kt:K}}/**
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
 */(d=Be||(Be={}))[d.OK=0]="OK",d[d.CANCELLED=1]="CANCELLED",d[d.UNKNOWN=2]="UNKNOWN",d[d.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",d[d.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",d[d.NOT_FOUND=5]="NOT_FOUND",d[d.ALREADY_EXISTS=6]="ALREADY_EXISTS",d[d.PERMISSION_DENIED=7]="PERMISSION_DENIED",d[d.UNAUTHENTICATED=16]="UNAUTHENTICATED",d[d.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",d[d.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",d[d.ABORTED=10]="ABORTED",d[d.OUT_OF_RANGE=11]="OUT_OF_RANGE",d[d.UNIMPLEMENTED=12]="UNIMPLEMENTED",d[d.INTERNAL=13]="INTERNAL",d[d.UNAVAILABLE=14]="UNAVAILABLE",d[d.DATA_LOSS=15]="DATA_LOSS";class sn extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.h=t+"://"+e.host,this.l="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}m(e,t,r,s,i){const o=this.p(e,t);oe("RestConnection","Sending: ",o,r);const a={};return this.g(a,s,i),this.v(e,o,a,r).then(u=>(oe("RestConnection","Received: ",u),u),u=>{throw Ct("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",r),u})}T(e,t,r,s,i,o){return this.m(e,t,r,s,i)}g(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+z,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}p(e,t){const r=rn[e];return`${this.h}/v1/${t}:${r}`}}{constructor(e,t){super(e),this.I=t}A(e,t){throw new Error("Not supported by FetchConnection")}async v(e,t,r,s){const i=JSON.stringify(s);let o;try{o=await this.I(t,{method:"POST",headers:r,body:i})}catch(a){throw new c(ze(a.status),"Request failed with error: "+a.statusText)}if(!o.ok)throw new c(ze(o.status),"Request failed with error: "+o.statusText);return o.json()}}/**
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
 */function on(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class an{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=on(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function w(n,e){return n<e?-1:n>e?1:0}function at(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class E{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new c(h,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new c(h,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new c(h,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new c(h,"Timestamp seconds out of range: "+e)}static now(){return E.fromMillis(Date.now())}static fromDate(e){return E.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new E(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?w(this.nanoseconds,e.nanoseconds):w(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class V{constructor(e){this.timestamp=e}static fromTimestamp(e){return new V(e)}static min(){return new V(new E(0,0))}static max(){return new V(new E(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function Ke(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function me(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}/**
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
 */class ue{constructor(e,t){this.comparator=e,this.root=t||v.EMPTY}insert(e,t){return new ue(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,v.BLACK,null,null))}remove(e){return new ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,v.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new re(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new re(this.root,e,this.comparator,!1)}getReverseIterator(){return new re(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new re(this.root,e,this.comparator,!0)}}class re{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class v{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r!=null?r:v.RED,this.left=s!=null?s:v.EMPTY,this.right=i!=null?i:v.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new v(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return v.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return v.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,v.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,v.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw m();const e=this.left.check();if(e!==this.right.check())throw m();return e+(this.isRed()?0:1)}}v.EMPTY=null,v.RED=!0,v.BLACK=!1;v.EMPTY=new class{constructor(){this.size=0}get key(){throw m()}get value(){throw m()}get color(){throw m()}get left(){throw m()}get right(){throw m()}copy(n,e,t,r,s){return this}insert(n,e,t){return new v(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class le{constructor(e){this.comparator=e,this.data=new ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ge(this.data.getIterator())}getIteratorFrom(e){return new Ge(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof le)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new le(this.comparator);return t.data=e,t}}class Ge{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class H{constructor(e){this.fields=e,e.sort(S.comparator)}static empty(){return new H([])}unionWith(e){let t=new le(S.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new H(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return at(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class P{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new P(t)}static fromUint8Array(e){const t=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new P(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return w(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}P.EMPTY_BYTE_STRING=new P("");const un=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function L(n){if(T(!!n),typeof n=="string"){let e=0;const t=un.exec(n);if(T(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:g(n.seconds),nanos:g(n.nanos)}}function g(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function X(n){return typeof n=="string"?P.fromBase64String(n):P.fromUint8Array(n)}/**
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
 */function ut(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function lt(n){const e=n.mapValue.fields.__previous_value__;return ut(e)?lt(e):e}function J(n){const e=L(n.mapValue.fields.__local_write_time__.timestampValue);return new E(e.seconds,e.nanos)}/**
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
 */const se={fields:{__type__:{stringValue:"__max__"}}};function C(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ut(n)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(n)?9007199254740991:10:m()}function ce(n,e){if(n===e)return!0;const t=C(n);if(t!==C(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return J(n).isEqual(J(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=L(r.timestampValue),o=L(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,s){return X(r.bytesValue).isEqual(X(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,s){return g(r.geoPointValue.latitude)===g(s.geoPointValue.latitude)&&g(r.geoPointValue.longitude)===g(s.geoPointValue.longitude)}(n,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return g(r.integerValue)===g(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=g(r.doubleValue),o=g(s.doubleValue);return i===o?ae(i)===ae(o):isNaN(i)&&isNaN(o)}return!1}(n,e);case 9:return at(n.arrayValue.values||[],e.arrayValue.values||[],ce);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Ke(i)!==Ke(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!ce(i[a],o[a])))return!1;return!0}(n,e);default:return m()}}function Z(n,e){return(n.values||[]).find(t=>ce(t,e))!==void 0}function he(n,e){if(n===e)return 0;const t=C(n),r=C(e);if(t!==r)return w(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return w(n.booleanValue,e.booleanValue);case 2:return function(s,i){const o=g(s.integerValue||s.doubleValue),a=g(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Qe(n.timestampValue,e.timestampValue);case 4:return Qe(J(n),J(e));case 5:return w(n.stringValue,e.stringValue);case 6:return function(s,i){const o=X(s),a=X(i);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=w(o[u],a[u]);if(l!==0)return l}return w(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,i){const o=w(g(s.latitude),g(i.latitude));return o!==0?o:w(g(s.longitude),g(i.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=he(o[u],a[u]);if(l)return l}return w(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===se&&i===se)return 0;if(s===se)return 1;if(i===se)return-1;const o=s.fields||{},a=Object.keys(o),u=i.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let p=0;p<a.length&&p<l.length;++p){const f=w(a[p],l[p]);if(f!==0)return f;const A=he(o[a[p]],u[l[p]]);if(A!==0)return A}return w(a.length,l.length)}(n.mapValue,e.mapValue);default:throw m()}}function Qe(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return w(n,e);const t=L(n),r=L(e),s=w(t.seconds,r.seconds);return s!==0?s:w(t.nanos,r.nanos)}function Ye(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ct(n){return!!n&&"arrayValue"in n}function We(n){return!!n&&"nullValue"in n}function He(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ve(n){return!!n&&"mapValue"in n}function G(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return me(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=G(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=G(n.arrayValue.values[t]);return e}return Object.assign({},n)}class k{constructor(e){this.value=e}static empty(){return new k({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ve(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=G(t)}setAll(e){let t=S.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=G(o):s.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ve(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ce(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ve(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){me(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new k(G(this.value))}}/**
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
 */class F{constructor(e,t,r,s,i,o){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new F(e,0,V.min(),V.min(),k.empty(),0)}static newFoundDocument(e,t,r){return new F(e,1,t,V.min(),r,0)}static newNoDocument(e,t){return new F(e,2,t,V.min(),k.empty(),0)}static newUnknownDocument(e,t){return new F(e,3,t,V.min(),k.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=k.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=k.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=V.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof F&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new F(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ln{constructor(e,t=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function Xe(n,e=null,t=[],r=[],s=null,i=null,o=null){return new ln(n,e,t,r,s,i,o)}class D extends class{}{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.V(e,t,r):new cn(e,t,r):t==="array-contains"?new fn(e,r):t==="in"?new pn(e,r):t==="not-in"?new mn(e,r):t==="array-contains-any"?new gn(e,r):new D(e,t,r)}static V(e,t,r){return t==="in"?new hn(e,r):new dn(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.N(he(t,this.value)):t!==null&&C(this.value)===C(t)&&this.N(he(t,this.value))}N(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return m()}}D(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class cn extends D{constructor(e,t,r){super(e,t,r),this.key=b.fromName(r.referenceValue)}matches(e){const t=b.comparator(e.key,this.key);return this.N(t)}}class hn extends D{constructor(e,t){super(e,"in",t),this.keys=ht("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class dn extends D{constructor(e,t){super(e,"not-in",t),this.keys=ht("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ht(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>b.fromName(r.referenceValue))}class fn extends D{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ct(t)&&Z(t.arrayValue,this.value)}}class pn extends D{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Z(this.value.arrayValue,t)}}class mn extends D{constructor(e,t){super(e,"not-in",t)}matches(e){if(Z(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Z(this.value.arrayValue,t)}}class gn extends D{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ct(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Z(this.value.arrayValue,r))}}class Je{constructor(e,t){this.position=e,this.inclusive=t}}class ie{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
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
 */class dt{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.$=null,this.F=null,this.startAt,this.endAt}}function ft(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function pt(n){for(const e of n.filters)if(e.D())return e.field;return null}function yn(n){return n.collectionGroup!==null}function Ze(n){const e=ee(n);if(e.$===null){e.$=[];const t=pt(e),r=ft(e);if(t!==null&&r===null)t.isKeyField()||e.$.push(new ie(t)),e.$.push(new ie(S.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.$.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.$.push(new ie(S.keyField(),i))}}}return e.$}function wn(n){const e=ee(n);if(!e.F)if(e.limitType==="F")e.F=Xe(e.path,e.collectionGroup,Ze(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Ze(e)){const o=i.dir==="desc"?"asc":"desc";t.push(new ie(i.field,o))}const r=e.endAt?new Je(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Je(e.startAt.position,e.startAt.inclusive):null;e.F=Xe(e.path,e.collectionGroup,t,e.filters,e.limit,r,s)}return e.F}/**
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
 */function vn(n,e){return function(t){return typeof t=="number"&&Number.isInteger(t)&&!ae(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?function(t){return{integerValue:""+t}}(e):function(t,r){if(t.S){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ae(r)?"-0":r}}(n,e)}/**
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
 */class ge{constructor(){this._=void 0}}class mt extends ge{}class bn extends ge{constructor(e){super(),this.elements=e}}class Tn extends ge{constructor(e){super(),this.elements=e}}class Sn extends ge{constructor(e,t){super(),this.q=e,this.O=t}}/**
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
 */class En{constructor(e,t){this.field=e,this.transform=t}}class Q{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Q}static exists(e){return new Q(void 0,e)}static updateTime(e){return new Q(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class ye{}class gt extends ye{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class yt extends ye{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class _n extends ye{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class In extends ye{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const Vn=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),kn=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class An{constructor(e,t){this.databaseId=e,this.S=t}}function Te(n,e){return n.S?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Nn(n,e){return n.S?e.toBase64():e.toUint8Array()}function Fn(n,e){return Te(n,e.toTimestamp())}function Se(n){return T(!!n),V.fromTimestamp(function(e){const t=L(e);return new E(t.seconds,t.nanos)}(n))}function Ae(n,e){return function(t){return new y(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function de(n,e){return Ae(n.databaseId,e.path)}function Ee(n,e){const t=function(s){const i=y.fromString(s);return T(vt(i)),i}(e);if(t.get(1)!==n.databaseId.projectId)throw new c(h,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new c(h,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new b((T((r=t).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function et(n,e){return Ae(n.databaseId,e)}function wt(n){return new y(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function tt(n,e,t){return{name:de(n,e),fields:t.value.mapValue.fields}}function Dn(n,e){return"found"in e?function(t,r){T(!!r.found),r.found.name,r.found.updateTime;const s=Ee(t,r.found.name),i=Se(r.found.updateTime),o=new k({mapValue:{fields:r.found.fields}});return F.newFoundDocument(s,i,o)}(n,e):"missing"in e?function(t,r){T(!!r.missing),T(!!r.readTime);const s=Ee(t,r.missing),i=Se(r.readTime);return F.newNoDocument(s,i)}(n,e):m()}function xn(n,e){let t;if(e instanceof gt)t={update:tt(n,e.key,e.value)};else if(e instanceof _n)t={delete:de(n,e.key)};else if(e instanceof yt)t={update:tt(n,e.key,e.data),updateMask:Ln(e.fieldMask)};else{if(!(e instanceof In))return m();t={verify:de(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof mt)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof bn)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Tn)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Sn)return{fieldPath:i.field.canonicalString(),increment:o.O};throw m()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:Fn(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:m()}(n,e.precondition)),t}function Pn(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=et(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=et(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(u){if(u.length===0)return;const l=u.map(p=>function(f){if(f.op==="=="){if(He(f.value))return{unaryFilter:{field:q(f.field),op:"IS_NAN"}};if(We(f.value))return{unaryFilter:{field:q(f.field),op:"IS_NULL"}}}else if(f.op==="!="){if(He(f.value))return{unaryFilter:{field:q(f.field),op:"IS_NOT_NAN"}};if(We(f.value))return{unaryFilter:{field:q(f.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:q(f.field),op:On(f.op),value:f.value}}}(p));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);s&&(t.structuredQuery.where=s);const i=function(u){if(u.length!==0)return u.map(l=>function(p){return{field:q(p.field),direction:Rn(p.dir)}}(l))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const o=function(u,l){return u.S||nn(l)?l:{value:l}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),t}function Rn(n){return Vn[n]}function On(n){return kn[n]}function q(n){return{fieldPath:n.canonicalString()}}function Ln(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function vt(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */function Ne(n){return new An(n,!0)}/**
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
 */class Cn extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.H=r,this.q=s,this.J=!1}X(){if(this.J)throw new c(U,"The client has already been terminated.")}m(e,t,r){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.H.m(e,t,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===be&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new c(K,s.toString())})}T(e,t,r,s){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.H.T(e,t,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===be&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new c(K,i.toString())})}terminate(){this.J=!0}}async function qn(n,e){const t=ee(n),r=wt(t.q)+"/documents",s={writes:e.map(i=>xn(t.q,i))};await t.m("Commit",r,s)}async function $n(n,e){const t=ee(n),r=wt(t.q)+"/documents",s={documents:e.map(u=>de(t.q,u))},i=await t.T("BatchGetDocuments",r,s,e.length),o=new Map;i.forEach(u=>{const l=Dn(t.q,u);o.set(l.key.toString(),l)});const a=[];return e.forEach(u=>{const l=o.get(u.toString());T(!!l),a.push(l)}),a}async function Mn(n,e){const t=ee(n),r=Pn(t.q,wn(e));return(await t.T("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(i,o,a){const u=Ee(i,o.name),l=Se(o.updateTime),p=new k({mapValue:{fields:o.fields}}),f=F.newFoundDocument(u,l,p);return a&&f.setHasCommittedMutations(),a?f.setHasCommittedMutations():f}(t.q,s.document,void 0))}/**
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
 */const Y=new Map;function Fe(n){if(n._terminated)throw new c(U,"The client has already been terminated.");if(!Y.has(n)){oe("ComponentProvider","Initializing Datastore");const i=function(u){return new sn(u,fetch.bind(null))}((e=n._databaseId,t=n.app.options.appId||"",r=n._persistenceKey,s=n._freezeSettings(),new en(e,t,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams))),o=Ne(n._databaseId),a=function(u,l,p,f){return new Cn(u,l,p,f)}(n._authCredentials,n._appCheckCredentials,i,o);Y.set(n,a)}var e,t,r,s;/**
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
*/return Y.get(n)}class nt{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new c(h,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new c(h,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(r,s,i,o){if(s===!0&&o===!0)throw new c(h,`${r} and ${i} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class De{constructor(e,t,r){this._authCredentials=t,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nt({}),this._settingsFrozen=!1,e instanceof j?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new c(h,'"projectId" not provided in firebase.initializeApp.');return new j(s.options.projectId)}(e))}get app(){if(!this._app)throw new c(U,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new c(U,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nt(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new Yt;switch(t.type){case"gapi":const r=t.client;return T(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new Xt(r,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new c(h,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Y.get(e);t&&(oe("ComponentProvider","Removing Datastore"),Y.delete(e),t.terminate())}(this),Promise.resolve()}}function nr(n=xt()){return Dt(n,"firestore/lite").getImmediate()}/**
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
 */class _{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new x(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _(this.firestore,e,this._key)}}class te{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new te(this.firestore,e,this._query)}}class x extends te{constructor(e,t,r){super(e,t,new dt(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _(this.firestore,null,new b(e))}withConverter(e){return new x(this.firestore,e,this._path)}}function rr(n,e,...t){if(n=$(n),ot("collection","path",e),n instanceof De){const r=y.fromString(e,...t);return je(r),new x(n,null,r)}{if(!(n instanceof _||n instanceof x))throw new c(h,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(y.fromString(e,...t));return je(r),new x(n.firestore,null,r)}}function Un(n,e,...t){if(n=$(n),arguments.length===1&&(e=an.R()),ot("doc","path",e),n instanceof De){const r=y.fromString(e,...t);return Ue(r),new _(n,null,new b(r))}{if(!(n instanceof _||n instanceof x))throw new c(h,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(y.fromString(e,...t));return Ue(r),new _(n.firestore,n instanceof x?n.converter:null,new b(r))}}/**
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
 */class xe{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new c(h,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new S(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class B{constructor(e){this._byteString=e}static fromBase64String(e){try{return new B(P.fromBase64String(e))}catch(t){throw new c(h,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new B(P.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Pe{constructor(e){this._methodName=e}}/**
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
 */class Re{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new c(h,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new c(h,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return w(this._lat,e._lat)||w(this._long,e._long)}}/**
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
 */const jn=/^__.*__$/;class Bn{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new yt(e,this.data,this.fieldMask,t,this.fieldTransforms):new gt(e,this.data,t,this.fieldTransforms)}}function bt(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw m()}}class Oe{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.q=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Z(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get tt(){return this.settings.tt}et(e){return new Oe(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.q,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}nt(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.et({path:r,rt:!1});return s.st(e),s}it(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.et({path:r,rt:!1});return s.Z(),s}ot(e){return this.et({path:void 0,rt:!0})}ut(e){return fe(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.at)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Z(){if(this.path)for(let e=0;e<this.path.length;e++)this.st(this.path.get(e))}st(e){if(e.length===0)throw this.ut("Document fields must not be empty");if(bt(this.tt)&&jn.test(e))throw this.ut('Document fields cannot begin and end with "__"')}}class zn{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.q=r||Ne(e)}ht(e,t,r,s=!1){return new Oe({tt:e,methodName:t,at:r,path:S.emptyPath(),rt:!1,ct:s},this.databaseId,this.q,this.ignoreUndefinedProperties)}}function Tt(n){const e=n._freezeSettings(),t=Ne(n._databaseId);return new zn(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Kn(n,e,t,r,s,i={}){const o=n.ht(i.merge||i.mergeFields?2:0,e,t,s);_t("Data must be an object, but it was:",o,r);const a=St(r,o);let u,l;if(i.merge)u=new H(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const p=[];for(const f of i.mergeFields){const A=Qn(e,f,t);if(!o.contains(A))throw new c(h,`Field '${A}' is specified in your field mask but missing from your input data.`);Wn(p,A)||p.push(A)}u=new H(p),l=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,l=o.fieldTransforms;return new Bn(new k(a),u,l)}class Le extends Pe{_toFieldTransform(e){return new En(e.path,new mt)}isEqual(e){return e instanceof Le}}function Gn(n,e,t,r=!1){return Ce(t,n.ht(r?4:3,e))}function Ce(n,e){if(Et(n=$(n)))return _t("Unsupported field value:",e,n),St(n,e);if(n instanceof Pe)return function(t,r){if(!bt(r.tt))throw r.ut(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ut(`${t._methodName}() is not currently supported inside arrays`);const s=t._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.rt&&e.tt!==4)throw e.ut("Nested arrays are not supported");return function(t,r){const s=[];let i=0;for(const o of t){let a=Ce(o,r.ot(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(n,e)}return function(t,r){if((t=$(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return vn(r.q,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const s=E.fromDate(t);return{timestampValue:Te(r.q,s)}}if(t instanceof E){const s=new E(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Te(r.q,s)}}if(t instanceof Re)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof B)return{bytesValue:Nn(r.q,t._byteString)};if(t instanceof _){const s=r.databaseId,i=t.firestore._databaseId;if(!i.isEqual(s))throw r.ut(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ae(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r.ut(`Unsupported field value: ${pe(t)}`)}(n,e)}function St(n,e){const t={};return function(r){for(const s in r)if(Object.prototype.hasOwnProperty.call(r,s))return!1;return!0}(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):me(n,(r,s)=>{const i=Ce(s,e.nt(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Et(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof E||n instanceof Re||n instanceof B||n instanceof _||n instanceof Pe)}function _t(n,e,t){if(!Et(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=pe(t);throw r==="an object"?e.ut(n+" a custom object"):e.ut(n+" "+r)}}function Qn(n,e,t){if((e=$(e))instanceof xe)return e._internalPath;if(typeof e=="string")return It(n,e);throw fe("Field path arguments must be of type string or ",n,!1,void 0,t)}const Yn=new RegExp("[~\\*/\\[\\]]");function It(n,e,t){if(e.search(Yn)>=0)throw fe(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new xe(...e.split("."))._internalPath}catch{throw fe(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function fe(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new c(h,a+n+u)}function Wn(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Vt{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new kt(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(At("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class kt extends Vt{data(){return super.data()}}class Hn{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,t){this._docs.forEach(e,t)}}function At(n,e){return typeof e=="string"?It(n,e):e instanceof xe?e._internalPath:e._delegate._internalPath}/**
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
 */class Xn{}function sr(n,...e){for(const t of e)n=t._apply(n);return n}class Jn extends Xn{constructor(e,t,r){super(),this.dt=e,this.wt=t,this.yt=r,this.type="where"}_apply(e){const t=Tt(e.firestore),r=function(s,i,o,a,u,l,p){let f;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new c(h,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){st(p,l);const R=[];for(const N of p)R.push(rt(a,s,N));f={arrayValue:{values:R}}}else f=rt(a,s,p)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||st(p,l),f=Gn(o,i,p,l==="in"||l==="not-in");const A=D.create(u,l,f);return function(R,N){if(N.D()){const O=pt(R);if(O!==null&&!O.isEqual(N.field))throw new c(h,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${O.toString()}' and '${N.field.toString()}'`);const ne=ft(R);ne!==null&&Zn(R,N.field,ne)}const we=function(O,ne){for(const qe of O.filters)if(ne.indexOf(qe.op)>=0)return qe.op;return null}(R,function(O){switch(O){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(N.op));if(we!==null)throw we===N.op?new c(h,`Invalid query. You cannot use more than one '${N.op.toString()}' filter.`):new c(h,`Invalid query. You cannot use '${N.op.toString()}' filters with '${we.toString()}' filters.`)}(s,A),A}(e._query,"where",t,e.firestore._databaseId,this.dt,this.wt,this.yt);return new te(e.firestore,e.converter,function(s,i){const o=s.filters.concat([i]);return new dt(s.path,s.collectionGroup,s.explicitOrderBy.slice(),o,s.limit,s.limitType,s.startAt,s.endAt)}(e._query,r))}}function ir(n,e,t){const r=e,s=At("where",n);return new Jn(s,r,t)}function rt(n,e,t){if(typeof(t=$(t))=="string"){if(t==="")throw new c(h,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!yn(e)&&t.indexOf("/")!==-1)throw new c(h,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(y.fromString(t));if(!b.isDocumentKey(r))throw new c(h,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ye(n,new b(r))}if(t instanceof _)return Ye(n,t._key);throw new c(h,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pe(t)}.`)}function st(n,e){if(!Array.isArray(n)||n.length===0)throw new c(h,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(n.length>10)throw new c(h,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Zn(n,e,t){if(!t.isEqual(e))throw new c(h,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}/**
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
 */function er(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Nt extends class{convertValue(e,t="none"){switch(C(e)){case 0:return null;case 1:return e.booleanValue;case 2:return g(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(X(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw m()}}convertObject(e,t){const r={};return me(e.fields,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertGeoPoint(e){return new Re(g(e.latitude),g(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=lt(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(J(e));default:return null}}convertTimestamp(e){const t=L(e);return new E(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=y.fromString(e);T(vt(r));const s=new j(r.get(1),r.get(3)),i=new b(r.popFirst(5));return s.isEqual(t)||Ie(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new B(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new _(this.firestore,null,t)}}function or(n){const e=Fe((n=ke(n,_)).firestore),t=new Nt(n.firestore);return $n(e,[n._key]).then(r=>{T(r.length===1);const s=r[0];return new Vt(n.firestore,t,n._key,s.isFoundDocument()?s:null,n.converter)})}function ar(n){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new c(it,"limitToLast() queries require specifying at least one orderBy() clause")})((n=ke(n,te))._query);const e=Fe(n.firestore),t=new Nt(n.firestore);return Mn(e,n._query).then(r=>{const s=r.map(i=>new kt(n.firestore,t,i.key,i,n.converter));return n._query.limitType==="L"&&s.reverse(),new Hn(n,s)})}function ur(n,e){const t=Un(n=ke(n,x)),r=er(n.converter,e),s=Kn(Tt(n.firestore),"addDoc",t._key,r,t.converter!==null,{});return qn(Fe(n.firestore),[s.toMutation(t._key,Q.exists(!1))]).then(()=>t)}function lr(){return new Le("serverTimestamp")}(function(n){z=n})(`${Lt}_lite`),Ft(new Pt("firestore/lite",(n,{options:e})=>{const t=n.getProvider("app").getImmediate(),r=new De(t,new Wt(n.getProvider("auth-internal")),new Zt(n.getProvider("app-check-internal")));return e&&r._setSettings(e),r},"PUBLIC")),$e("firestore-lite","3.4.12",""),$e("firestore-lite","3.4.12","esm2017");export{or as A,ur as D,ar as R,Un as g,sr as i,nr as l,ir as u,lr as x,rr as y};
