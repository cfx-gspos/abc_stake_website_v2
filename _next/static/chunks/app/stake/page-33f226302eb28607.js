(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9831],{67869:function(e,t,s){Promise.resolve().then(s.bind(s,60907))},60907:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return w}});var l=s(57437),r=s(72e3),a=s(2265),n=s(88726),i=s(42921),c=s(93191),d=s(75304),o=s(61954),u=s(34954),m=s(62121),x=s(98286),h=s(94956),b=s(38128),f=s(26735),g=s(53860),N=s(25937),j=s(33628),v=s(79320),p=s(762);function y(e,t){return t&&0!==e.length?e.map(e=>{let s=(Number(e.endBlock)-Number(t))*1e3;return{votePower:Number(e.votePower)*j.t,endBlock:Number(e.endBlock),endTime:(0,p.mr)(s+Date.now())}}):[]}function w(){let e="The amount must be an integer multiple of ".concat(j.t),t=function(){var e,t;let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{query:l={},watch:r}=s,n=(0,h.Z)(s),i=(0,c.NL)(),f=(0,x.x)({config:n}),g=null!==(e=s.chainId)&&void 0!==e?e:f,N=function(e,t={}){return{gcTime:0,async queryFn({queryKey:t}){let{scopeKey:s,...l}=t[1];return await function(e,t={}){let{chainId:s,...l}=t,r=e.getClient({chainId:s});return(0,o.s)(r,d.z,"getBlockNumber")(l)}(e,l)??null},queryKey:function(e={}){return["blockNumber",(0,u.O)(e)]}(t)}}(n,{...s,chainId:g});return!function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{enabled:s=!0,onBlockNumber:l,config:r,...n}=t,i=(0,h.Z)(t),c=(0,x.x)({config:i}),d=null!==(e=t.chainId)&&void 0!==e?e:c;(0,a.useEffect)(()=>{if(s&&l)return function(e,t){let s,l;let{syncConnectedChain:r=e._internal.syncConnectedChain,...a}=t,n=t=>{s&&s();let l=e.getClient({chainId:t});return s=(0,o.s)(l,b.q,"watchBlockNumber")(a)},i=n(t.chainId);return r&&!t.chainId&&(l=e.subscribe(({chainId:e})=>e,async e=>n(e))),()=>{i?.(),l?.()}}(i,{...n,chainId:d,onBlockNumber:l})},[d,i,s,l,n])}({...{config:s.config,chainId:s.chainId,..."object"==typeof r?r:{}},enabled:!!((null===(t=l.enabled)||void 0===t||t)&&("object"==typeof r?r.enabled:r)),onBlockNumber(e){i.setQueryData(N.queryKey,e)}}),(0,m.aM)({...l,...N})}(),{address:s}=(0,f.m)(),[w,k]=(0,a.useState)({}),{data:C}=(0,g.K)({address:s}),S=(0,a.useMemo)(()=>C?Number((0,i.b)(C.value,C.decimals)):0,[C]),{data:B}=(0,N.Kx)("userSummary",[s]),[P,I]=(0,a.useState)(0);(0,a.useEffect)(()=>{B?I(Number(B.available)*j.t):I(0)},[B]);let[Z,T]=(0,a.useState)(0);(0,a.useEffect)(()=>{B?T(Number(B.unlocked)*j.t):T(0)},[B]);let[$,E]=(0,a.useState)([]),{data:M}=(0,N.Kx)("userInQueue",[s]);(0,a.useEffect)(()=>{M?E(M):E([])},[M]);let{data:F}=(0,N.Kx)("userOutQueue",[s]),[Q,X]=(0,a.useState)([]);(0,a.useEffect)(()=>{F?X(F):X([])},[F]);let[_,K]=(0,a.useState)(!1),[A,U]=(0,a.useState)(""),q="inQueue"===A?y($,t.data):"outQueue"===A?y(Q,t.data):[],[D,L]=(0,a.useState)(!1),[O,W]=(0,a.useState)(""),z=(0,a.useMemo)(()=>Math.floor(S/j.t)*j.t,[S]),H=(0,N.Xv)(),R=async()=>{if(Number(O)>z){n.ZP.error("The maximum available balance is ".concat(z)),W(String(z));return}let t=Number(O)/j.t;if(!Number.isInteger(t)||t<=0){n.ZP.error(e),W("");return}L(!0);try{let e=Number(O)/j.t,t=await H(function(e,t){let[s,l="0"]=e.split("."),r=s.startsWith("-");if(r&&(s=s.slice(1)),l=l.replace(/(0+)$/,""),0===t)1===Math.round(Number(`.${l}`))&&(s=`${BigInt(s)+1n}`),l="";else if(l.length>t){let[e,r,a]=[l.slice(0,t-1),l.slice(t-1,t),l.slice(t)],n=Math.round(Number(`${r}.${a}`));(l=n>9?`${BigInt(e)+BigInt(1)}0`.padStart(e.length+1,"0"):`${e}${n}`).length>t&&(l=l.slice(1),s=`${BigInt(s)+1n}`),l=l.slice(0,t)}else l=l.padEnd(t,"0");return BigInt(`${r?"-":""}${s}${l}`)}(O,C.decimals),e);L(!1),W(""),k({show:!0,type:"success",content:"交易已提交，请等待确认",scanHash:t})}catch(e){console.log(e),n.ZP.error(e.details),L(!1)}},[V,G]=(0,a.useState)(!1),[J,Y]=(0,a.useState)(""),ee=(0,N.aw)(),et=async()=>{if(Number(J)>P){n.ZP.error("The maximum available amount is ".concat(P)),Y(String(P));return}let t=Number(J)/j.t;if(!Number.isInteger(t)||t<=0){n.ZP.error(e),Y("");return}G(!0);try{let e=Number(J)/j.t,t=await ee(e);G(!1),Y(""),k({show:!0,type:"success",content:"交易已提交，请等待确认",scanHash:t})}catch(e){console.log(e),n.ZP.error(e.details),G(!1)}},[es,el]=(0,a.useState)(!1),[er,ea]=(0,a.useState)(""),en=(0,N.A4)(),ei=async()=>{if(Number(er)>Z){n.ZP.error("The maximum available amount is ".concat(Z)),Y(String(Z));return}let t=Number(er)/j.t;if(!Number.isInteger(t)||t<=0){n.ZP.error(e),ea("");return}el(!0);try{let e=Number(er)/j.t,t=await en(e);el(!1),k({show:!0,type:"success",content:"交易已提交，请等待确认",scanHash:t})}catch(e){console.log(e),n.ZP.error(e.details),el(!1)}},ec=e=>{1===e&&W(String(z)),2===e&&Y(String(P)),3===e&&ea(String(Z))},ed=e=>{K(!0),U(e)};return(0,a.useEffect)(()=>{_?document.body.classList.add("lock"):document.body.classList.remove("lock")},[_]),(0,l.jsxs)("div",{className:"pb-5",children:[(0,l.jsx)(r.Z,{}),(0,l.jsx)("h2",{className:"slogan",children:"ABC Pool V2"}),(0,l.jsxs)("div",{className:"mx-auto px-5 grid gap-y-5 md:max-w-5xl md:grid-cols-2 md:gap-x-6",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{className:"text-sky-400 text-2xl",children:"Stake CFX"}),(0,l.jsxs)("div",{className:"layout",children:[(0,l.jsxs)("div",{className:"layout-row",children:[(0,l.jsx)("div",{children:"Balance"}),(0,l.jsxs)("div",{className:"text-newBlue",children:[(0,p.qz)(S,5)," CFX"]})]}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"layout-row",children:[(0,l.jsx)("div",{children:"Amount"}),(0,l.jsx)("input",{value:O,type:"number",min:j.t,step:j.t,placeholder:"Please enter",className:"w-full mx-4 text-right text-sm text-newBlue bg-transparent outline-none",onChange:e=>W(e.target.value)}),(0,l.jsx)("button",{className:"text-newBlue",onClick:()=>ec(1),children:"Max"})]}),(0,l.jsx)("div",{className:"text-xs text-red-500 text-right mt-1",children:e})]})]}),(0,l.jsxs)("button",{disabled:D,className:"w-full bg-newBlue text-white px-2 h-9 mt-5 rounded-full flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-65",onClick:R,children:[D?(0,l.jsx)("i",{className:"ri-loader-2-fill animate-spin mr-1"}):"","Stake"]})]}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"flex justify-between items-center text-yellow-600",children:[(0,l.jsx)("h2",{className:"text-2xl",children:"Unstakeable CFX"}),(0,l.jsx)("button",{className:"border border-yellow-700 px-2 rounded",onClick:()=>ed("inQueue"),children:"Details"})]}),(0,l.jsxs)("div",{className:"layout",children:[(0,l.jsxs)("div",{className:"layout-row",children:[(0,l.jsx)("div",{children:"Unstakeable"}),(0,l.jsxs)("div",{className:"text-newBlue",children:[P," CFX"]})]}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"layout-row",children:[(0,l.jsx)("div",{children:"Amount"}),(0,l.jsx)("input",{value:J,type:"number",min:j.t,step:j.t,placeholder:"Please enter",className:"w-full mx-4 text-right text-sm text-yellow-600 bg-transparent outline-none",onChange:e=>Y(e.target.value)}),(0,l.jsx)("button",{className:"text-newBlue",onClick:()=>ec(2),children:"Max"})]}),(0,l.jsx)("div",{className:"text-xs text-red-500 text-right mt-1",children:e})]})]}),(0,l.jsxs)("button",{disabled:V,className:"w-full bg-yellow-600 text-white px-2 h-10 mt-5 rounded-full flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-65",onClick:et,children:[V?(0,l.jsx)("i",{className:"ri-loader-2-fill animate-spin mr-1"}):"","Unstake"]})]}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"flex justify-between items-center text-green-600",children:[(0,l.jsx)("h2",{className:"text-2xl",children:"Withdraw CFX"}),(0,l.jsx)("button",{className:"border border-green-700 px-2 rounded",onClick:()=>ed("outQueue"),children:"Details"})]}),(0,l.jsxs)("div",{className:"layout",children:[(0,l.jsxs)("div",{className:"layout-row",children:[(0,l.jsx)("div",{children:"Withdrawable"}),(0,l.jsxs)("div",{className:"text-newBlue",children:[Z," CFX"]})]}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"layout-row",children:[(0,l.jsx)("div",{children:"Amount"}),(0,l.jsx)("input",{value:er,type:"number",min:j.t,step:j.t,placeholder:"Please enter",className:"w-full mx-4 text-right text-sm text-green-600 bg-transparent outline-none",onChange:e=>ea(e.target.value)}),(0,l.jsx)("button",{className:"text-newBlue",onClick:()=>ec(3),children:"Max"})]}),(0,l.jsx)("div",{className:"text-xs text-red-500 text-right mt-1",children:e})]})]}),(0,l.jsxs)("button",{disabled:es,className:"w-full bg-green-600 text-white px-2 h-10 mt-5 rounded-full flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-65",onClick:ei,children:[es?(0,l.jsx)("i",{className:"ri-loader-2-fill animate-spin mr-1"}):"","Withdraw"]})]})]}),(0,l.jsxs)("div",{className:"mx-auto mt-6 mb-10 px-5 md:max-w-5xl",children:[(0,l.jsx)("h2",{className:"text-stone-200 text-xl",children:"Stake Rules"}),(0,l.jsxs)("div",{className:"text-slate-400 leading-6 mt-2",children:[(0,l.jsx)("p",{children:"1. The lock period of Stake/Unstake is 15+2 day(May need another 2~3 hours)."}),(0,l.jsx)("p",{children:"2. The reward will updated every hour."}),(0,l.jsx)("p",{children:"3. The Stake/Unstake CFX amount must be multiple of 1000."}),(0,l.jsx)("p",{children:"4. Performance fee is 8% of the PoS reward."}),(0,l.jsx)("p",{children:"5. The reward can be claimed any time."})]})]}),(0,l.jsx)(v.Z,{setModal:e=>k(e),modalConfig:w}),_?(0,l.jsx)("div",{className:"fixed top-0 bottom-0 left-0 right-0 z-10 bg-[rgba(0,0,0,0.8)] flex justify-center items-center",children:(0,l.jsxs)("div",{className:"bg-gradient-to-tl from-green-900 to-yellow-300 w-full mx-3 px-3 py-8 md:p-8 rounded-xl relative md:w-4/5 max-w-2xl",children:[(0,l.jsx)("button",{className:"absolute top-2 right-2",onClick:()=>K(!1),children:(0,l.jsx)("i",{className:"ri-close-line text-2xl text-white"})}),(0,l.jsxs)("div",{className:"text-xl font-bold text-center md:text-left",children:["inQueue"===A?"Locking":"outQueue"===A?"Unlocking":""," votes"]}),(0,l.jsxs)("div",{className:"mt-5 text-white border-b border-gray-200/60 text-sm md:text-base",children:[(0,l.jsxs)("div",{className:"grid grid-cols-[130px_1fr] md:grid-cols-2 border-t border-l border-gray-200/60",children:[(0,l.jsx)("div",{className:"px-4 py-2 border-r border-gray-200/60",children:"Amount (CFX)"}),(0,l.jsx)("div",{className:"px-4 py-2 border-r border-gray-200/60",children:"EndTime"})]}),(0,l.jsxs)("div",{className:"max-h-96 md:max-h-[600px] overflow-y-auto thin-scrollbar",children:[q.map(e=>(0,l.jsxs)("div",{className:"grid grid-cols-[130px_1fr] md:grid-cols-2 border-t border-l border-gray-200/60",children:[(0,l.jsx)("div",{className:"px-4 py-2 border-r border-gray-200/60 h-full",children:e.votePower}),(0,l.jsx)("div",{className:"px-4 py-2 border-r border-gray-200/60",children:e.endTime})]},e.endBlock)),0===q.length?(0,l.jsx)("div",{className:"text-center py-3 border border-b-0 border-gray-200/60",children:"No data"}):null]})]})]})}):null]})}}},function(e){e.O(0,[9472,6440,554,289,2971,7023,1744],function(){return e(e.s=67869)}),_N_E=e.O()}]);