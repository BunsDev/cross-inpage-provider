(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8772],{23044:function(n,e,t){"use strict";t.d(e,{p:function(){return i}}),t(67294);var s=t(99034),r=t.n(s),c=t(85893);function i(n){var e=n.dapps;return(0,c.jsxs)("div",{className:r().container,children:[(0,c.jsx)("h3",{children:"Top DApps"}),(0,c.jsx)("ul",{children:e.map(function(n){return(0,c.jsx)("li",{children:(0,c.jsxs)("a",{href:n.url,target:"_blank",children:[n.name," ↗"]})},n.name)})})]})}},93630:function(n,e,t){"use strict";t.d(e,{H:function(){return l}});var s,r,c=t(84506),i=t(74902),o=t(15861),u=t(90905),a=(s=(0,o.Z)(function*(n,e,t){var s=null,r=[];do{var c=yield n.getCoins({owner:e,coinType:t,cursor:s,limit:50}),o=c.data,u=c.nextCursor;if(!o||!o.length)break;r.push.apply(r,(0,i.Z)(o)),s=u}while(s);return r}),function(n,e,t){return s.apply(this,arguments)}),l=(r=(0,o.Z)(function*(n,e,t,s,r){var i=null==r||""===r?u.uq1:r,o=yield a(n,e,i),l=null==o?void 0:o.filter(function(n){return!n.lockedUntilEpoch}),d=new u.a6g,f=l.filter(function(n){return n.coinType===i}),p=(0,c.Z)(f),h=p[0],g=p.slice(1);if(i===u.uq1){var y=d.splitCoins(d.gas,[d.pure(s)]);d.transferObjects([y],d.pure(t))}else{var x=d.object(h.coinObjectId);g.length&&d.mergeCoins(x,g.map(function(n){return d.object(n.coinObjectId)}));var j=d.splitCoins(x,[d.pure(s)]);d.transferObjects([j],d.pure(t))}return d}),function(n,e,t,s,c){return r.apply(this,arguments)})},66945:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return h}});var s=t(15861),r=t(97685),c=t(67294),i=t(66409),o=t(23044),u=[{name:"Cetus",url:"https://app.cetus.zone/"},{name:"SuiSwap",url:"https://suiswap.app/"},{name:"Sui Names",url:"https://sui-names.com/"}],a=t(90905),l=t(93630),d=t(44489),f=t(85893);function p(){var n,e,t,p,h,g=(0,c.useState)("TestNet"),y=(0,r.Z)(g,2),x=y[0],j=y[1],v=(0,c.useState)(),b=(0,r.Z)(v,2),m=b[0],k=b[1],C=(0,d.o)(),w=C.isConnected,S=C.accounts,N=C.disconnect,T=C.currentAccount,Z=C.signTransactionBlock,A=C.signAndExecuteTransactionBlock,E=C.signMessage;(0,c.useEffect)(function(){var n=(0,r.Z)(S||[],1)[0];n&&k(n.address)},[S]);var O=(0,c.useMemo)(function(){return new a.r6k(new a.ewe("testnet"===x.toLowerCase()?{fullnode:"https://fullnode.testnet.sui.io",faucet:"https://faucet.testnet.sui.io/gas"}:{fullnode:"https://fullnode.mainnet.sui.io",faucet:"https://faucet.testnet.sui.io/gas"}))},[x]),F=(n=(0,s.Z)(function*(){try{var n=(0,r.Z)(S,1)[0],e=yield O.requestSuiFromFaucet(n.address);console.log("[requestSuiFromFaucet] faucet success:",e)}catch(n){console.warn(n),console.log("[error] requestSuiFromFaucet: "+JSON.stringify(n))}}),function(){return n.apply(this,arguments)}),B=(0,c.useCallback)(function(){try{console.log("[getAccounts] accounts:",S)}catch(n){console.warn(n),console.log("[error] getAccounts: "+JSON.stringify(n))}},[S]),J=(e=(0,s.Z)(function*(){try{yield N()}catch(n){console.warn(n),console.log("[error] disconnect: "+JSON.stringify(n))}}),function(){return e.apply(this,arguments)}),q=(t=(0,s.Z)(function*(){try{var n=S[0].address,e=yield(0,l.H)(O,n,"0xe40a5a0133cac4e9059f58f9d2074a3386d631390e40eadb43d2606e8975f3eb","100000"),t=yield A({transactionBlock:e,chain:"sui:testnet"===x.toLowerCase()?"sui:testnet":"sui:mainnet",account:T});console.log("[signAndExecuteTransaction]",t)}catch(n){console.warn(n),console.log("[error] signAndExecuteTransaction: "+JSON.stringify(n))}}),function(){return t.apply(this,arguments)}),M=(p=(0,s.Z)(function*(){try{var n=S[0].address,e=yield(0,l.H)(O,n,"0xe40a5a0133cac4e9059f58f9d2074a3386d631390e40eadb43d2606e8975f3eb","100000"),t=yield Z({transactionBlock:e,chain:"sui:testnet"===x.toLowerCase()?"sui:testnet":"sui:mainnet",account:T});console.log("[signTransaction]",t)}catch(n){console.warn(n),console.log("[error] signTransaction: "+JSON.stringify(n))}}),function(){return p.apply(this,arguments)}),_=(h=(0,s.Z)(function*(){try{var n=yield E({message:(0,i.nr)("010203"),account:T});console.log("[signAndExecuteTransaction]",n)}catch(n){console.warn(n),console.log("[error] signAndExecuteTransaction: "+JSON.stringify(n))}}),function(){return h.apply(this,arguments)});return(0,f.jsxs)("div",{children:[(0,f.jsx)(o.p,{dapps:u}),w&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{children:[(0,f.jsxs)("pre",{children:["Network:"," ",(0,f.jsxs)("select",{value:x,onChange:function(n){return j(n.target.value)},children:[(0,f.jsx)("option",{value:"TestNet",children:"TestNet"}),(0,f.jsx)("option",{value:"MainNet",children:"MainNet"})]})]}),(0,f.jsxs)("pre",{children:["Connected as: ",m]}),(0,f.jsx)("button",{onClick:F,children:"Faucet SUI"})]}),(0,f.jsx)("br",{}),(0,f.jsx)("button",{onClick:B,children:"Get Accounts"}),(0,f.jsx)("button",{onClick:(0,s.Z)(function*(){return yield q()}),children:"Sign & Execute Transaction"}),(0,f.jsx)("button",{onClick:(0,s.Z)(function*(){return yield M()}),children:"Sign Transaction"}),(0,f.jsx)("button",{onClick:(0,s.Z)(function*(){return yield _()}),children:"Sign Message"}),(0,f.jsx)("button",{onClick:function(){return J()},children:"Disconnect"})]})]})}function h(){return(0,f.jsxs)(d.Qm,{features:["sui:signTransactionBlock"],enableUnsafeBurner:!0,children:[(0,f.jsx)(d.NL,{}),(0,f.jsx)(p,{})]})}},55024:function(){}}]);
//# sourceMappingURL=8772.8681c394cf8add90.js.map