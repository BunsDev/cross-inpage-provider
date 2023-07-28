"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[285],{285:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var s=n(15861),i=n(97685),r=n(67294),d=n(10366),o=n(57069);class a extends o.BX{constructor(e){super(e),this.providerName=d.U.cardano}request(e){return this.bridgeRequest(e)}}var c=n(22519),l=function(e,t,n,s){return new(n||(n=Promise))(function(i,r){function d(e){try{a(s.next(e))}catch(e){r(e)}}function o(e){try{a(s.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?i(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(d,o)}a((s=s.apply(e,t||[])).next())})};let u={connect:"connect",disconnect:"disconnect",accountChanged:"accountChanged",message_low_level:"message_low_level"};class h extends a{constructor(e){super(Object.assign(Object.assign({},e),{bridge:e.bridge||(0,c.R)({timeout:e.timeout})})),this._account=null,this._registerEvents(),this.nami=Object.assign(Object.assign({},this.walletInfo()),{name:"Nami"}),this.onekey=Object.assign({},this.walletInfo())}get account(){return this._account}get isConnected(){return null!==this._account}_registerEvents(){window.addEventListener("onekey_bridge_disconnect",()=>{this._handleDisconnected()}),this.on(u.message_low_level,e=>{var t;let{method:n,params:s}=e;(n===`metamask_${t=u.accountChanged}`||n===`wallet_events_${t}`)&&this._handleAccountChange(s)})}_callBridge(e){return this.bridgeRequest(e)}postMessage(e){return this._callBridge(e)}_handleConnected(e,t){this._account=e,t.emit&&this.isConnectionStatusChanged("connected")&&(this.connectionStatus="connected",this.emit("connect",e),this.emit("accountChanged",e))}_handleDisconnected(e={emit:!0}){e.emit&&this.isConnectionStatusChanged("disconnected")&&(this.connectionStatus="disconnected",this.emit("disconnect"),this.emit("accountChanged",null))}isAccountsChanged(e){return e!==this._account}_handleAccountChange(e){let t=e.accounts.address;if(this.isAccountsChanged(t)&&this.emit("accountChanged",t||null),!t){this._handleDisconnected();return}t&&this._handleConnected(t,{emit:!1})}on(e,t){return super.on(e,t)}emit(e,...t){return super.emit(e,...t)}walletInfo(){return{apiVersion:"0.1.0",name:"OneKey",icon:"https://theme.zdassets.com/theme_assets/10237731/cd8f795ce97bdd7657dd4fb4b19fde3f32b50349.png",isEnabled:()=>Promise.resolve(!0),enable:()=>this.enable()}}enable(){return l(this,void 0,void 0,function*(){let e={getNetworkId:()=>this.getNetworkId(),getUtxos:(e,t)=>this.getUtxos(e,t),getCollateral:()=>this.getCollateral(),getBalance:()=>this.getBalance(),getUsedAddresses:()=>this.getUsedAddresses(),getUnusedAddresses:()=>this.getUnUsedAddress(),getChangeAddress:()=>this.getChangeAddress(),getRewardAddresses:()=>this.getRewardAddresses(),signTx:(e,t)=>this.signTx(e,t),signData:(e,t)=>this.signData(e,t),submitTx:e=>this.submitTx(e),experimental:{on:(e,t)=>this.namiOn(e,t),off:()=>this.namiOff(),getCollateral:()=>this.getCollateral()}};if(!this.account){let t=yield this._callBridge({method:"connect",params:void 0});return this._handleConnected(t.account,{emit:!0}),e}return Promise.resolve(e)})}getNetworkId(){return l(this,void 0,void 0,function*(){return this._callBridge({method:"getNetworkId",params:void 0})})}getUtxos(e,t){return l(this,void 0,void 0,function*(){return this._callBridge({method:"getUtxos",params:{amount:e,paginate:t}})})}getCollateral(){return l(this,void 0,void 0,function*(){return Promise.resolve(null)})}getBalance(){return l(this,void 0,void 0,function*(){return this._callBridge({method:"getBalance",params:void 0})})}getUsedAddresses(){return l(this,void 0,void 0,function*(){return this._callBridge({method:"getUsedAddresses",params:void 0})})}getUnUsedAddress(){return l(this,void 0,void 0,function*(){return this._callBridge({method:"getUnusedAddresses",params:void 0})})}getChangeAddress(){return l(this,void 0,void 0,function*(){return this._callBridge({method:"getChangeAddress",params:void 0})})}getRewardAddresses(){return l(this,void 0,void 0,function*(){return this._callBridge({method:"getRewardAddresses",params:void 0})})}signTx(e,t){return l(this,void 0,void 0,function*(){return this._callBridge({method:"signTx",params:{tx:e,partialSign:t}})})}signData(e,t){return l(this,void 0,void 0,function*(){return this._callBridge({method:"signData",params:{addr:e,payload:t}})})}submitTx(e){return l(this,void 0,void 0,function*(){return this._callBridge({method:"submitTx",params:e})})}namiOn(e,t){let n=e=>t(e.detail),s=window.cardano.nami._events[e]||[];window.cardano.nami._events[e]=[...s,[t,n]],window.addEventListener(`nami-wallet${e}`,n)}namiOff(){}}var g=[{name:"Minswap",url:"https://app.minswap.org/"},{name:"SundaeSwap",url:"https://sundaeswap.finance/"}],f=n(23044),m=n(85893),v=n(48764).Buffer,w=function(){var e=(0,r.useState)(),t=(0,i.Z)(e,2),n=t[0],s=t[1];return(0,r.useEffect)(function(){s(window.cardano||new h({}))},[]),n};function p(){var e,t,n,d=w(),o=(0,r.useState)(!1),a=(0,i.Z)(o,2),c=a[0],l=a[1],u=(0,r.useState)(null),h=(0,i.Z)(u,2),p=h[0],b=h[1],x=(0,r.useState)(null),_=(0,i.Z)(x,2),y=_[0],C=_[1],j=(0,r.useState)([]),A=(0,i.Z)(j,2),k=A[0],S=A[1],B=(0,r.useState)([]),O=(0,i.Z)(B,2),U=O[0],Z=O[1],T=(0,r.useState)([]),I=(0,i.Z)(T,2),N=I[0],E=I[1],D=(0,r.useState)(""),R=(0,i.Z)(D,2),P=R[0],L=R[1],H=(0,r.useState)([]),K=(0,i.Z)(H,2),M=K[0],W=K[1],$=(0,r.useState)(""),q=(0,i.Z)($,2),V=q[0],G=q[1],z=(0,r.useCallback)((0,s.Z)(function*(){var e=yield d.onekey.enable();try{e.getNetworkId().then(function(e){return C(e)}),e.getUtxos().then(function(e){return S(e)}),e.getBalance().then(function(e){return G(e)}),e.getUsedAddresses().then(function(e){return Z(e)}),e.getUnusedAddresses().then(function(e){return E(e)}),e.getRewardAddresses().then(function(e){return W(e)}),e.getChangeAddress().then(function(e){return L(e)})}catch(e){}}),[d]);(0,r.useEffect)(function(){if(d){try{d.on("connect",function(e){console.log("cardanoWallet.on [connect] "+e),z().catch(function(e){return console.error(e)})})}catch(e){console.error(e)}try{d.on("accountChanged",function(e){console.log("cardanoWallet.on [accountChange] "+e),z().catch(function(e){return console.error(e)})})}catch(e){console.error(e)}return function(){}}},[d,z]);var X=(e=(0,s.Z)(function*(){try{var e=yield d.onekey.enable();b(e),l(!0)}catch(e){console.error(e),b(null),l(!1)}}),function(){return e.apply(this,arguments)}),F=(t=(0,s.Z)(function*(){console.log((yield p.signTx("84a300818258200528ed5dd2134534df4d999c9cd712e8b47441a0363cc972bf5d5c72635c3e5100018282583901cd5aa28518568615ed6bd4ad40e6cecd65734373bf578489b02830e38d6dc22f3b6dfd333cf6495e8fb3fffbc2936cc010827b32d92eca1b1a000f424082583901922941c2e490c9f9f8706c66f7f46b5abec243fcb663f02817fb9b83aa618af8973bc5f1fdb9c9db97d1c55f0d4d4a1e633bbb14ab43b4fc1a001449d5021a00029075a0f5f6",!0)))}),function(){return t.apply(this,arguments)}),J=(n=(0,s.Z)(function*(){console.log((yield p.signData(null==U?void 0:U[0],v.from("hello world","utf8").toString("hex"))))}),function(){return n.apply(this,arguments)});return(0,m.jsxs)("div",{children:[(0,m.jsx)(f.p,{dapps:g}),(0,m.jsx)("div",{style:{padding:"20px"},children:"Cardano 返回数据格式大部分为 CBOR 的包装格式，需要对应 SDK 解析。由于本项目不引入第三方 SDK, 所以示例项目直接展示原始字符串"}),!d&&(0,m.jsx)("a",{target:"_blank",href:"https://www.onekey.so/download/",children:"Install OneKey Extension →"}),(0,m.jsx)("main",{children:d&&c?(0,m.jsxs)("div",{children:[(0,m.jsxs)("ul",{children:["walletName: ",(0,m.jsx)("img",{src:d.onekey.icon,style:{height:"24px",width:"24px"}})," ",d.onekey.name]}),(0,m.jsxs)("ul",{children:["apiVersion: ",d.onekey.apiVersion]}),(0,m.jsxs)("ul",{children:["networkId: ",y]}),(0,m.jsxs)("ul",{style:{width:"80%"},children:["Utxos: ",k.map(function(e){return(0,m.jsx)("li",{style:{overflow:"hidden",textOverflow:"ellipsis"},children:e},e)})]}),(0,m.jsxs)("ul",{children:["balance: ",V]}),(0,m.jsxs)("ul",{style:{width:"80%"},children:["UsedAddresses: ",U.map(function(e){return(0,m.jsx)("li",{style:{overflow:"hidden",textOverflow:"ellipsis"},children:e},e)})]}),(0,m.jsxs)("ul",{style:{width:"80%"},children:["UnusedAddresses: ",N.map(function(e){return(0,m.jsx)("li",{style:{overflow:"hidden",textOverflow:"ellipsis"},children:e},e)})]}),(0,m.jsxs)("ul",{style:{width:"80%"},children:["rewardAddresses: ",M.map(function(e){return(0,m.jsx)("li",{style:{overflow:"hidden",textOverflow:"ellipsis"},children:e},e)})]}),(0,m.jsxs)("ul",{children:["changeAddress: ",P]}),(0,m.jsx)("button",{onClick:function(){return F()},children:"SignTransaction"}),(0,m.jsx)("button",{onClick:function(){return J()},children:"SignData"})]}):(0,m.jsx)("button",{onClick:function(){return X()},children:"Connect Wallet"})})]})}},23044:function(e,t,n){n.d(t,{p:function(){return d}}),n(67294);var s=n(99034),i=n.n(s),r=n(85893);function d(e){var t=e.dapps;return(0,r.jsxs)("div",{className:i().container,children:[(0,r.jsx)("h3",{children:"Top DApps"}),(0,r.jsx)("ul",{children:t.map(function(e){return(0,r.jsx)("li",{children:(0,r.jsxs)("a",{href:e.url,target:"_blank",children:[e.name," ↗"]})},e.name)})})]})}},22519:function(e,t,n){n.d(t,{R:function(){return d}});var s=n(57069);let{JS_BRIDGE_MESSAGE_DIRECTION:i,JS_BRIDGE_MESSAGE_EXT_CHANNEL:r}=s.vH;function d(e={}){let t=()=>new a(Object.assign(Object.assign({},e),{receiveHandler:s.gZ})),n=(0,s.Pk)(t);return n}let o=!1;class a extends s.ZN{constructor(e){super(e),this.sendAsString=!1,this.isInjected=!0,function(e={}){let t=e.debugLogger||s.go;o||(o=!0,window.addEventListener("message",n=>{var s,d;if(n.source!==window)return;let o=n.data;if(o.channel===r&&o.direction===i.HOST_TO_INPAGE){t.extInjected("onWindowPostMessage",o);let n=o.payload,i=null!==(s=e.bridge)&&void 0!==s?s:null===(d=null==window?void 0:window.$onekey)||void 0===d?void 0:d.jsBridge;i&&i.receive(n)}},!1))}({debugLogger:this.debugLogger,bridge:this})}sendPayload(e){window.postMessage({channel:r,direction:i.INPAGE_TO_HOST,payload:e})}}}}]);
//# sourceMappingURL=285.6021db7017602695.js.map