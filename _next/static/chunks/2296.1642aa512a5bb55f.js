(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2296],{63047:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return F}});var r,o,a,i,s,c,u,l,d,f=t(15861),p=t(97685),m=t(67294),g=t(44050),h=t.n(g),y=t(54630),x=t(13632),v=t.n(x),w=((r={}).MainNet="mainnet",r.TestNet="testnet",r),b=new(h()).Algodv2("","https://mainnet-api.algonode.cloud",""),T=new(h()).Algodv2("","https://testnet-api.algonode.cloud","");function A(n){switch(n){case w.MainNet:return b;case w.TestNet:return T;default:throw Error("Unknown chain type: "+n)}}function k(n){return S.apply(this,arguments)}function S(){return(S=(0,f.Z)(function*(n){return yield A(n).getTransactionParams().do()})).apply(this,arguments)}function j(){return(j=(0,f.Z)(function*(n,e){var t=(yield A(n).sendRawTransaction(e).do()).txId;return yield function(n,e){return C.apply(this,arguments)}(n,t)})).apply(this,arguments)}function C(){return(C=(0,f.Z)(function*(n,e){for(var t=A(n),r=yield t.status().do(),o=r["last-round"];;){var a=yield t.pendingTransactionInformation(e).do();if(a["pool-error"])throw Error("Transaction Pool Error: "+a["pool-error"]);if(a["confirmed-round"])return a["confirmed-round"];o=(r=yield t.statusAfterBlock(o+1).do())["last-round"]}})).apply(this,arguments)}var Z=t(48764).Buffer,U=[h().mnemonicToSecretKey("cannon scatter chest item way pulp seminar diesel width tooth enforce fire rug mushroom tube sustain glide apple radar chronic ask plastic brown ability badge"),h().mnemonicToSecretKey("person congress dragon morning road sweet horror famous bomb engine eager silent home slam civil type melt field dry daring wheel monitor custom above term"),h().mnemonicToSecretKey("faint protect home drink journey humble tube clinic game rough conduct sell violin discover limit lottery anger baby leaf mountain peasant rude scene abstract casual")];function N(n){if(n===w.MainNet)return 31566704;if(n===w.TestNet)return 10458941;throw Error("Asset not defined for chain "+n)}function E(n){if(n===w.MainNet)return 305162725;if(n===w.TestNet)return 22314999;throw Error("App not defined for chain "+n)}var M=[{name:"1. Sign pay txn",scenario:(o=(0,f.Z)(function*(n,e){var t=yield k(n);return[[{txn:h().makePaymentTxnWithSuggestedParamsFromObject({from:e,to:e,amount:1e5,note:new Uint8Array(Z.from("example note value")),suggestedParams:t}),message:"This is a payment transaction that sends 0.1 Algos to yourself."}]]}),function(n,e){return o.apply(this,arguments)})},{name:"2. Sign asset opt-in txn",scenario:(a=(0,f.Z)(function*(n,e){var t=yield k(n),r=N(n);return[[{txn:h().makeAssetTransferTxnWithSuggestedParamsFromObject({from:e,to:e,amount:0,assetIndex:r,note:new Uint8Array(Z.from("example note value")),suggestedParams:t}),message:"This transaction opts you into the USDC asset if you have not already opted in."}]]}),function(n,e){return a.apply(this,arguments)})},{name:"3. Sign asset transfer txn",scenario:(i=(0,f.Z)(function*(n,e){var t=yield k(n),r=N(n);return[[{txn:h().makeAssetTransferTxnWithSuggestedParamsFromObject({from:e,to:e,amount:1e6,assetIndex:r,note:new Uint8Array(Z.from("example note value")),suggestedParams:t}),message:"This transaction will send 1 USDC to yourself."}]]}),function(n,e){return i.apply(this,arguments)})},{name:"4. Sign asset close out txn",scenario:(s=(0,f.Z)(function*(n,e){var t=yield k(n),r=N(n);return[[{txn:h().makeAssetTransferTxnWithSuggestedParamsFromObject({from:e,to:function(n){if(n===w.MainNet)return"2UEQTE5QDNXPI7M3TU44G6SYKLFWLPQO7EBZM7K7MHMQQMFI4QJPLHQFHM";if(n===w.TestNet)return"UJBZPEMXLD6KZOLUBUDSZ3DXECXYDADZZLBH6O7CMYXHE2PLTCW44VK5T4";throw Error("Asset reserve not defined for chain "+n)}(n),amount:0,assetIndex:r,note:new Uint8Array(Z.from("example note value")),closeRemainderTo:U[1].addr,suggestedParams:t}),message:"This transaction will opt you out of the USDC asset. DO NOT submit this to MainNet if you have more than 0 USDC."}]]}),function(n,e){return s.apply(this,arguments)})},{name:"5. Sign app opt-in txn",scenario:(c=(0,f.Z)(function*(n,e){var t=yield k(n),r=E(n);return[[{txn:h().makeApplicationOptInTxnFromObject({from:e,appIndex:r,note:new Uint8Array(Z.from("example note value")),appArgs:[Uint8Array.from([0]),Uint8Array.from([0,1])],suggestedParams:t}),message:"This transaction will opt you into a test app."}]]}),function(n,e){return c.apply(this,arguments)})},{name:"6. Sign app call txn",scenario:(u=(0,f.Z)(function*(n,e){var t=yield k(n),r=E(n);return[[{txn:h().makeApplicationNoOpTxnFromObject({from:e,appIndex:r,note:new Uint8Array(Z.from("example note value")),appArgs:[Uint8Array.from([0]),Uint8Array.from([0,1])],suggestedParams:t}),message:"This transaction will invoke an app call on a test app."}]]}),function(n,e){return u.apply(this,arguments)})},{name:"7. Sign app close out txn",scenario:(l=(0,f.Z)(function*(n,e){var t=yield k(n),r=E(n);return[[{txn:h().makeApplicationCloseOutTxnFromObject({from:e,appIndex:r,note:new Uint8Array(Z.from("example note value")),appArgs:[Uint8Array.from([0]),Uint8Array.from([0,1])],suggestedParams:t}),message:"This transaction will opt you out of the test app."}]]}),function(n,e){return l.apply(this,arguments)})},{name:"8. Sign app clear state txn",scenario:(d=(0,f.Z)(function*(n,e){var t=yield k(n),r=E(n);return[[{txn:h().makeApplicationClearStateTxnFromObject({from:e,appIndex:r,note:new Uint8Array(Z.from("example note value")),appArgs:[Uint8Array.from([0]),Uint8Array.from([0,1])],suggestedParams:t}),message:"This transaction will forcibly opt you out of the test app."}]]}),function(n,e){return d.apply(this,arguments)})}],P=t(23044),D=[{name:"Tiny Man",url:"https://app.tinyman.org/#/swap?asset_in=0"},{name:"Humble Swap",url:"https://app.humble.sh/pool"},{name:"Folks Finnce",url:"https://app.folks.finance/markets"},{name:"Algofi",url:"https://app.algofi.org/"}],I=t(85893),O=t(48764).Buffer;function F(){var n,e=(0,m.useState)(),t=(0,p.Z)(e,2),r=t[0],o=t[1],a=(0,m.useState)(),i=(0,p.Z)(a,2),s=(i[0],i[1]),c=(0,m.useState)(),u=(0,p.Z)(c,2),l=u[0],d=u[1],g=(0,m.useState)(!1),x=(0,p.Z)(g,2),b=x[0],T=x[1],A=(0,m.useState)(w.TestNet),k=(0,p.Z)(A,2),S=k[0],C=k[1],Z=(0,m.useState)(),N=(0,p.Z)(Z,2),E=N[0],F=N[1],_=(0,m.useState)(),K=(0,p.Z)(_,2),B=K[0],L=K[1],Q=(0,m.useCallback)(function(n){var e=n[0];s(n),d(e)},[]),W=(0,m.useCallback)(function(n){var e=n.params[0].accounts,t=e[0];s(e),d(t),T(!0)},[]),H=(0,m.useCallback)(function(){d(""),s([]),o(null),T(!1)},[]),R=(0,m.useCallback)(function(){H()},[H]),X=(0,m.useCallback)(function(n){if(n){if(n.on("session_update",function(n,e){if(console.log('algo connector.on("session_update")',e),n)throw n;Q(e.params[0].accounts)}),n.on("connect",function(n,e){if(console.log('algo connector.on("connect")',e),n)throw n;W(e)}),n.on("disconnect",function(n){if(console.log('algo connector.on("disconnect")'),n)throw n;R()}),n.connected){var e=n.accounts,t=e[0];s(e),d(t),T(!0),Q(e)}o(n)}},[W,R,Q]),J=(0,m.useCallback)((0,f.Z)(function*(){var n=new y.Z({storageId:"walletconnect_algo",bridge:"https://bridge.walletconnect.org",qrcodeModal:v()});window.wcConnector=n,o(n),n.connected||(yield n.createSession({network:"algo"})),X(n)}),[X]),Y=(0,m.useCallback)((n=(0,f.Z)(function*(n){if(r)try{var e=yield n(S,l),t=e.reduce(function(n,e){return n.concat(e)},[]).map(function(n){var e=n.txn,t=n.signers,r=n.authAddr,o=n.message;return{txn:O.from(h().encodeUnsignedTransaction(e)).toString("base64"),signers:t,authAddr:r,message:o}}),a=yield r.sendCustomRequest({method:"algo_signTxn",params:[t]});console.log("Raw response:",a);var i=function(n){for(var t=0;t<e.length;t++){var r=e[t].length;if(n<r)return[t,n];n-=r}throw Error("Index too large for groups: "+n)},s=e.map(function(){return[]});a.forEach(function(n,t){var r,o,a=i(t),c=(0,p.Z)(a,2),u=c[0],l=c[1],d=e[u][l];if(null==n){if(void 0!==d.signers&&(null==(o=d.signers)?void 0:o.length)<1){s[u].push(null);return}throw Error("Transaction at index "+t+": was not signed when it should have been")}if(void 0!==d.signers&&(null==(r=d.signers)?void 0:r.length)<1)throw Error("Transaction at index "+t+" was signed when it should not have been");var f=O.from(n,"base64");s[u].push(new Uint8Array(f))});var c=s.map(function(n,t){return n.map(function(n,r){return n||function(n){var e=h().encodeAddress(n.from.publicKey);for(var t of U)if(t.addr===e)return n.signTxn(t.sk);throw Error("Cannot sign transaction from unknown test account: "+e)}(e[t][r].txn)})}),u=s.map(function(n,t){return n.map(function(n,r){if(null==n)return null;var o=h().decodeSignedTransaction(n),a=o.txn.txID(),i=e[t][r].txn.txID();if(a!==i)throw Error("Signed transaction at index "+r+" differs from unsigned transaction. Got "+a+", expected "+i);if(!o.sig)throw Error("Signature not present on transaction at index "+r);return{txID:a,signingAddress:o.sgnr?h().encodeAddress(o.sgnr):void 0,signature:O.from(o.sig).toString("base64")}})});o(r),L(c),F({method:"algo_signTxn",body:u})}catch(n){console.error(n),o(r),F(null)}}),function(e){return n.apply(this,arguments)}),[l,S,r]),q=(0,m.useCallback)((0,f.Z)(function*(){if(null==B)throw Error("Transactions to submit are null");for(var n=0;n<B.length;n++)try{var e=yield function(n,e){return j.apply(this,arguments)}(S,B[n]);console.log("Transaction confirmed at round "+e)}catch(e){console.error("Error submitting transaction at index "+n+":",e)}}),[B,S]),G=(0,m.useCallback)((0,f.Z)(function*(){yield r.killSession(),H()}),[r,H]);return(0,I.jsxs)("div",{children:[(0,I.jsx)(P.p,{dapps:D}),(0,I.jsxs)("main",{children:[b&&(0,I.jsxs)("p",{children:["Connected to ",(0,I.jsxs)("select",{onChange:function(n){return C(function(n){switch(n){case w.MainNet.toString():return w.MainNet;case w.TestNet.toString():return w.TestNet;default:throw Error("Unknown chain selected: "+n)}}(n.target.value))},value:S,children:[(0,I.jsx)("option",{value:w.TestNet,children:"Algorand TestNet"}),(0,I.jsx)("option",{value:w.MainNet,children:"Algorand MainNet"})]})]}),b?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)("div",{children:[(0,I.jsxs)("pre",{children:["Connected as: ",l]}),(0,I.jsx)("button",{onClick:G,children:"Disconnect"})]}),E&&(0,I.jsxs)("div",{children:[(0,I.jsxs)("pre",{children:["formattedResult: ",JSON.stringify(E)]}),(0,I.jsx)("button",{onClick:q,children:"Submit transaction to network."})]}),M.map(function(n){var e=n.name,t=n.scenario;return(0,I.jsx)("button",{onClick:function(){return Y(t)},children:e},e)}),(0,I.jsx)("button",{onClick:function(){return r.killSession()},children:"Disconnect"})]}):(0,I.jsx)(I.Fragment,{children:(0,I.jsx)("button",{onClick:J,children:"Connect Wallet"})})]})]})}},23044:function(n,e,t){"use strict";t.d(e,{p:function(){return i}}),t(67294);var r=t(99034),o=t.n(r),a=t(85893);function i(n){var e=n.dapps;return(0,a.jsxs)("div",{className:o().container,children:[(0,a.jsx)("h3",{children:"Top DApps"}),(0,a.jsx)("ul",{children:e.map(function(n){return(0,a.jsx)("li",{children:(0,a.jsxs)("a",{href:n.url,target:"_blank",children:[n.name," ↗"]})},n.name)})})]})}},36563:function(){}}]);
//# sourceMappingURL=2296.1642aa512a5bb55f.js.map