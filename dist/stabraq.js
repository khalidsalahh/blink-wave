/* @khalidvsalah | Stabraq | v1.0.0 | MIT License | https://github.com/khalidvsalah/stabraq | https://www.khalidsalah.com */var L=Object.defineProperty;var Ot=Object.getOwnPropertyDescriptor;var Yt=Object.getOwnPropertyNames;var Ct=Object.prototype.hasOwnProperty;var Ft=(t,e)=>{for(var s in e)L(t,s,{get:e[s],enumerable:!0})},Lt=(t,e,s,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Yt(e))!Ct.call(t,r)&&r!==s&&L(t,r,{get:()=>e[r],enumerable:!(i=Ot(e,r))||i.enumerable});return t};var Nt=t=>Lt(L({},"__esModule",{value:!0}),t);var Me={};Ft(Me,{bounds:()=>k,choke:()=>$,clamp:()=>m,computed:()=>z,cssSet:()=>w,damp:()=>rt,dist:()=>it,ease:()=>h,has:()=>ot,iSet:()=>g,late:()=>x,lerp:()=>d,line:()=>_t,map:()=>P,props:()=>E,query:()=>u,raf:()=>b,remap:()=>st,round:()=>V,scroll:()=>St,scrub:()=>B,sub:()=>p,tween:()=>Y,zero:()=>O});module.exports=Nt(Me);var M=t=>3*t,Z=(t,e)=>1-M(e)+M(t),tt=(t,e)=>M(e)-6*t,_=(t,e,s)=>((Z(e,s)*t+tt(e,s))*t+M(e))*t;function et(t,e,s){return M(Z(e,s))*Math.pow(t,2)+2*tt(e,s)*t+M(e)}var jt=(t,e,s,i,r)=>{let o=0,n=0,l=0;do n=e+(s-e)/2,o=_(n,i,r)-t,o>0?s=n:e=n;while(Math.abs(o)>1e-7&&++l<10);return n},Ht=(t,e,s,i)=>{for(let r=0;r<4;++r){let o=et(e,s,i);if(o===0)return e;e-=(_(e,s,i)-t)/o}return e},It=t=>{let e=t[0],s=t[1],i=t[2],r=t[3];if(e===s&&i===r)return N.l;let o=new Float32Array(11);for(let l=0;l<11;++l)o[l]=_(l*.1,e,i);function n(l){let a=0,c=1;for(;c!==10&&o[c]<=l;++c)a+=.1;--c;let y=(l-o[c])/(o[c+1]-o[c]),v=a+y*.1,f=et(v,e,i);return f>=.001?Ht(l,v,e,i):f===0?v:jt(l,a,a+.1,e,i)}return l=>l===0||l===1?l:_(n(l),s,r)},N={custom:It,l:t=>t,i1:t=>1-Math.cos(t*Math.PI/2),o1:t=>Math.sin(t*Math.PI/2),io1:t=>-(Math.cos(Math.PI*t)-1)/2,i2:t=>Math.pow(t,2),o2:t=>1-(1-t)*(1-t),io2:t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,i3:t=>Math.pow(t,3),o3:t=>1-Math.pow(1-t,3),io3:t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,i4:t=>Math.pow(t,4),o4:t=>1-Math.pow(1-t,4),io4:t=>t<.5?8*t*t*t*t:1-Math.pow(-2*t+2,4)/2,i5:t=>Math.pow(t,5),o5:t=>1-Math.pow(1-t,5),io5:t=>t<.5?16*Math.pow(t,5):1-Math.pow(-2*t+2,5)/2,i6:t=>t===0?0:Math.pow(2,10*t-10),o6:t=>t===1?1:1-Math.pow(2,-10*t),io6:t=>t===0?0:t===1?1:t<.5?Math.pow(2,20*t-10)/2:(2-Math.pow(2,-20*t+10))/2,i7:t=>1-Math.sqrt(1-Math.pow(t,2)),o7:t=>sqrt(1-Math.pow(t-1,2)),io7:t=>t<.5?(1-Math.sqrt(1-Math.pow(2*t,2)))/2:(Math.sqrt(1-Math.pow(-2*t+2,2))+1)/2},h=t=>typeof t=="object"?N.custom(t):N[t];var O=(t,e)=>Math.max(t,e),m=(t,e,s)=>Math.min(Math.max(t,s),e),d=(t,e,s)=>(1-s)*t+s*e,P=(t,e,s)=>m(0,1,(s-t)/(e-t)),st=(t,e,s,i,r)=>P(t,e,r)*(i-s)+s,V=(t,e)=>{let s=e?Math.pow(10,e):100;return Math.round(t*s)/s},it=(t,e)=>Math.sqrt(t**2+e**2),rt=(t,e,s,i=.50399)=>d(t,e,1-Math.exp(-s*i));var ot=(t,e)=>window.hasOwnProperty.call(t,e),k=t=>{let e=t.getBoundingClientRect();return{w:e.width,h:e.height,x:e.x,y:e.y,xE:e.right,yE:e.bottom}},z=t=>window.getComputedStyle(t),w={alpha:(t,e)=>t.style.opacity=e,display:(t,e)=>t.style.display=e,pointer:(t,e)=>t.style.pointerEvents=e,position:(t,e)=>t.style.position=e,visible:(t,e)=>t.style.visibility=e,form:(t,e,s,i)=>t.style.transform=`translate3d(${s+e},${i+e},0)`},u={id:t=>document.getElementById(t),el:t=>document.querySelector(t),els:t=>[...document.querySelectorAll(t)],sEl:(t,e)=>t.querySelector(e),sEls:(t,e)=>[...t.querySelectorAll(e)],node:t=>document.createElement(t),text:t=>document.createTextNode(t)},g={get size(){return{w:window.innerWidth,h:window.innerHeight}},string:t=>JSON.stringify(t)},$=class{constructor({d:e,cb:s}){this.d=e*1e3,this.cb=s,this.time=0}run(){clearTimeout(this.time),this.time=setTimeout(this.cb,this.d)}};var Dt=(t,{opacity:e,easing:s})=>{let i={s:+e,e:t[0],ease:t[1]?h(t[1]):s};return i.lerp=i.e-i.s,r=>`${i.s+i.lerp*i.ease(r)}`},Wt=(t,e)=>t.style.opacity=e,nt={cb:Dt,setValue:Wt};var At=(t,{filter:e,easing:s})=>{let i;return e==="none"?i={s:0,e:t[0]}:i={s:+e.match(/(\d.*)px/)[1],e:t[0]},i.lerp=i.e-i.s,i.ease=t[1]?h(t[1]):s,r=>i.s+i.lerp*i.ease(r)},Bt=(t,e)=>t.style.filter=`blur(${e}px)`,lt={cb:At,setValue:Bt};var j={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},Xt=/([astvzqmhlc])([^astvzqmhlc]*)/gi,Gt=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;function Rt(t){let e=t.match(Gt);return e?e.map(Number):[]}function ht(t){let e=[];return t.replace(Xt,function(s,i,r){let o=i.toLowerCase();for(r=Rt(r),o==="m"&&r.length>2&&(e.push([i].concat(r.splice(0,2))),o="l",i=i==="m"?"l":"L");;){if(r.length===j[o])return r.unshift(i),e.push(r);if(r.length<j[o])throw new Error("malformed path data");e.push([i].concat(r.splice(0,j[o])))}}),e}var Jt=(t,{el:e,easing:s})=>{let i=ht(e.getAttribute("d")),r=ht(t[0]),o=t[1]?h(t[1]):s;return n=>{let l="",a="";for(let c=0;c<i.length;c++){let y=i[c],v=r[c];for(let f=0;f<y.length;f++)l+=(isNaN(y[f])?y[f]:d(y[f],v[f],o(n)))+" ";a=l.trim()}return a}},Kt=(t,e)=>t.setAttribute("d",e),at={cb:Jt,setValue:Kt};var Qt=(t,{el:e,easing:s})=>{let i=e.getTotalLength(),r={s:t[0]*i,e:t[1]*i,ease:t[2]?h(t[2]):s};return r.lerp=r.e-r.s,o=>`${r.s+r.lerp*r.ease(o)}`},Ut=(t,e)=>t.style.strokeDasharray=e,pt={cb:Qt,setValue:Ut};var Zt=(t,{el:e,easing:s})=>{let i=e.getTotalLength();e.style.strokeDasharray=i;let r={s:t[1]*i,e:t[0]*i,ease:t[2]?h(t[2]):s};return r.lerp=r.e-r.s,o=>`${r.s+r.lerp*r.ease(o)}`},te=(t,e)=>t.style.strokeDashoffset=e,ct={cb:Zt,setValue:te};var ft=t=>{let e=[],s=t.split(" "),i=s.length;for(let r=0;r<i;r++){let o=s[r].split(","),n=o.length;for(let l=0;l<n;l++){let a=o[l];e.push(isNaN(a)?a:+a)}}return e},ee=(t,{el:e,easing:s})=>{let i=ft(e.getAttribute("points")),r=ft(t[0]),o=t[1]?ease(t[1]):s;return n=>{let l="",a="";for(let c=0;c<i.length;c++)l+=d(i[c],r[c],o(n))+" ",a=l.trim();return a}},se=(t,e)=>t.setAttribute("points",e),dt={cb:ee,setValue:se};var ut=(t,e,s,i)=>{let r={s:t?t[1]=="px"?e:e/parseFloat(s)*100:e,e:t?t[0]:e,unit:t&&t[1]?t[1]:"px"};return r.lerp=r.e-r.s,t?r.ease=t[2]?h(t[2]):i:r.ease=h("l"),o=>`${r.s+r.lerp*r.ease(o)}${r.unit}`},mt=(t,e,s)=>{let i={s:e,e:t?t[0]:e};return i.lerp=i.e-i.s,t?i.ease=t[1]?h(t[1]):s:i.ease=h("l"),r=>`${i.s+i.lerp*i.ease(r)}`},gt=(t,e)=>{let s={s:t?t[0]:0,e:t?t[1]:0};return s.lerp=s.e-s.s,t?s.ease=t[1]?h(t[1]):e:s.ease=h("l"),i=>`${s.s+s.lerp*s.ease(i)}deg`},ie=t=>{let e=t.match(/^matrix3d\((.+)\)$/),s=t.match(/\((.+)\)$/);return e?(s=e[1].split(", "),s=[s[0],s[1],s[4],s[5],s[12],s[13]]):s&&(s=s[1].split(", ")),s},re=(t,{transform:e,width:s,height:i,easing:r})=>{let o=ie(e),n=ut(t.x,o?+o[4]:0,s,r),l=ut(t.y,o?+o[5]:0,i,r),a=mt(t.sx,o?+o[0]:1,r),c=mt(t.sy,o?+o[3]:1,r),y=gt(t.rx,r),v=gt(t.ry,r);return f=>`translate3d(${n(f)}, ${l(f)}, 0) scale(${a(f)}, ${c(f)}) rotateX(${y(f)}) rotateY(${v(f)})`},oe=(t,e)=>t.style.transform=e,bt={cb:re,setValue:oe};var ne=(t,{parent:e,top:s,easing:i})=>{let r;if(s==="auto")r={s:0,e:t[0],unit:t[1]||"px"};else{let o=parseFloat(s);r={s:t[1]==="px"?o:o/k(e).h*100,e:t[0],unit:t[1]||"px"}}return r.lerp=r.e-r.s,r.ease=t[2]?h(t[2]):i,o=>`${r.s+r.lerp*r.ease(o)}${r.unit}`},le=(t,e)=>t.style.top=e,yt={cb:ne,setValue:le};var he=(t,{parent:e,width:s,easing:i})=>{let r=parseFloat(s),o={s:t[1]==="px"?r:r/e.clientWidth*100,e:t[0],unit:t[1]==="px"?"px":"%",ease:t[2]?h(t[2]):i};return o.lerp=o.e-o.s,n=>`${o.s+o.lerp*o.ease(n)}${o.unit}`},ae=(t,e)=>t.style.width=e,wt={cb:he,setValue:ae};var pe=(t,{parent:e,height:s,easing:i})=>{let r=parseFloat(s),o={s:t[1]==="px"?r:r/e.clientHeight*100,e:t[0],unit:t[1]==="px"?"px":"%",ease:t[2]?h(t[2]):i};return o.lerp=o.e-o.s,n=>`${o.s+o.lerp*o.ease(n)}${o.unit}`},ce=(t,e)=>t.style.height=e,vt={cb:pe,setValue:ce};var fe=[[/^(form)$/,bt],[/^(a)$/,nt],[/^(draw)$/,ct],[/^(dash)$/,pt],[/^(points)$/,dt],[/^(d)$/,at],[/^(top)$/,yt],[/^(blur)$/,lt],[/^(width)$/,wt],[/^(height)$/,vt]],H=fe;function I(t){let e=H.length;for(let s=0;s<e;s++){let i=H[s];if(t.match(i[0]))return i[1]}}function de(t,e,s,i){let r=z(t);r.el=t,r.parent=t.parentNode,r.easing=i;for(let o of Object.entries(e)){let n=I(o[0]),l=n.cb(o[1],r);s.push({setV:n.setValue,cb:l})}}function ue(t,e,s,i){for(let r in e){let o={s:t[r],e:e[r][0],ease:e[r][1]?h(e[r][1]):i};o.lerp=o.e-o.s,s.push({setV:(n,l)=>n[r]=l,cb:n=>o.s+o.lerp*o.ease(n)})}}function me(t,e,s,i){let r=[];return e?ue(t,s,r,i):de(t,s,r,i),r}var E=me;var D=class{constructor(e){document.addEventListener("visibilitychange",this.change.bind(this)),this.raf=e}change(){let e=performance.now();document.hidden?this.hide=e:this.raf.items.map(s=>s.st+=e-this.hide)}},xt=D;var W=class{constructor(){this.items=[],this.id=-1}push(e){return e.id=++this.id,this.items.push(e),this.on||this.loop(),e.id}update(e){for(let s=0;s<this.items.length;s++){let i=this.items[s];if(i.d){i.st||(i.st=e);let r=(e-i.st)/(i.d*1e3),o=m(0,1,r);i.cb(o),o===1&&this.kill(i.id)}else i.cb(e)}this.loop()}kill(e){this.items.map((s,i)=>{s.id===e&&(s.id=null,s.st=null,this.items.splice(i,1))})}loop(){this.items.length===0?(this.on=!1,window.cancelAnimationFrame(this.raf)):(this.on=!0,this.raf=window.requestAnimationFrame(this.update.bind(this)))}},Mt=new W;new xt(Mt);var b=Mt;var A=class{constructor(){this.observers={}}obs(e){this.observers[e]={items:[],id:0};function s(){let r=this[e],o=Array.prototype.slice.call(arguments);for(let n=0;n<r.items.length;n++)r.items[n].cb(...o)}let i=r=>{this.observers[r].items=[]};return{cb:s.bind(this.observers),name:e,r:i.bind(this,e)}}add(e,s){this.observers[e]||console.error(e);let i=this.observers[e].items,r=this.observers[e].id++,o={cb:s,id:r,on:!0};return i.push(o),{item:o,r:(l=>{for(let a=0;a<i.length;a++)i[a].id==l.id&&(i[a].on=!1,i.splice(a,1))}).bind({},o)}}check(e){return!!this.observers[e]}},p=new A;function B(t){let e=document.createElement("section"),s={start:0,end:0,lerp:.75};e.style.cssText=` position: fixed; height: 32px; width: 32px; display: flex; align-items: center; justify-content: center; font-size: 12px; background: #333; color: #fff; border-radius: 50%; pointer-events: none; `,p.add("pointermove",i=>{let r=V(i.pageX/g.size.w);e.style.top=i.pageY+-30+"px",e.style.left=i.pageX+-30*r+"px",e.textContent=r,s.start=m(0,.99999,r)}),p.add("raf",()=>{s.end=d(s.start,s.end,s.lerp),t(s.end)}),document.body.appendChild(e)}var x=class{constructor({d:e,o:s,cb:i}){this.d=e||0,this.o=s,this.cb=i,this.on=!1}play(){this.on=!0,this.d===0?this.Elp():this.id=b.push({cb:this.loop.bind(this),d:this.d})}destroy(){b.kill(this.id),this.on=!1}loop(e){e===1&&this.Elp()}Elp(){this.on=!1,this.o&&b.push(this.o),this.cb&&this.cb()}};function X(t){this.isObj=!1,t instanceof Node?this.target=t:typeof t=="string"?this.target=u.el(t):(this.isObj=!0,this.target=t)}var Vt=new Map;function G(t,e){let s=Vt.get(t);return s||(Vt.set(t,e),!1)}var R=class{constructor(e,s){let i=G(e,this);i?i.play(s):(X.call(this,e),this.init(),this.play(s))}init(){this.elapsed=0,this.dur=.5,this.prog=0,this.props=[],this.late=new x({cb:this.push.bind(this)})}run(e){this.on=!0,this.elapsed=m(0,1,this.prog+e);let s=Math.abs(this.dir-this.elapsed);this.props.map(({setV:i,cb:r})=>i(this.target,r(s))),this.raf&&this.raf(s,this.target),this.elapsed===1&&this.finished()}push(){this.started&&this.started(this.target),this.oProps&&(this.props=E(this.target,this.isObj,this.oProps,this.ease)),this.rafObj={cb:this.run.bind(this),d:this.dur},this.id=b.push(this.rafObj)}control(e,s){this.mode!==e?(this.mode=e,e==="r"?this.dir=1:this.dir=0,this.late.on?this.late.destroy():this.on?s?(this.late.play(),this.prog=0):(this.rafObj.st=null,this.prog=1-this.elapsed):(this.late.play(),this.prog=0)):s&&(this.late.on&&this.late.destroy(),this.late.play())}play(e,s){e.late&&(this.late.d=e.late),e.ease&&(this.ease=h(e.ease)),e.d&&(this.dur=e.d),console.log(e),e.p&&g.string(this.oProps)!==g.string(e.p)?(this.oProps=e.p,this.control("p",!0)):(this.oProps=e.p,this.control(s,!1))}finished(){this.on=!1,b.kill(this.id),this.completed&&this.completed(this.target)}},$t=R;var J=(t,e,s)=>{let i=typeof e.space=="number"?e.space:t.space||0;return(typeof e.late=="number"?e.late:t.late)+i*s};function ge(t,e){let s;Array.isArray(t)&&!e.obj?s=t:s=[t];let i=s.map((r,o)=>new $t(r,{...e,late:J(e,{},o)}));return{reverse:(r={})=>{let o=i.length;for(let n=0;n<o;n++){let l=o-n-1;i[n].play({late:J(e,r,l),d:r.d},"r")}},play:(r={})=>{i.map((o,n)=>{o.play({late:J(e,r,n),d:r.d},"p")})}}}var Y=ge;var S=(t,e)=>{let s=t.match(/(\+|\-)(.*)/);if(s){if(s[1]=="+")return e+ +s[2];if(s[1]=="-")return e-+s[2]}else return+t},K=class{constructor(e,s,i){this.el=e,this.target=s.target,this.o=s,this.from=s.from,this.dir=i,this.dirE=i=="y"?"yE":"xE",this.Init(s)}Init(e){e.target||(this.target=this.el),e.scroll&&(this.ps=e.p?E(this.target,!1,e.p):[]),e.pin&&(this.pin=e.pin,this.pin.target=e.pin.target||this.target),this.iresize=p.add("resize",this.resize.bind(this)),this.resize(),this.iraf=p.add(e.obsname,this.raf.bind(this))}resize(){let e=this.el.length?this.el[0]:this.el,s={y:e.offsetTop,yE:e.offsetTop+e.offsetHeight,x:e.offsetLeft,xE:e.offsetLeft+e.offsetWidth};this.o.scroll?(this.startpint=S(this.o.scroll.start||"+0",s[this.dir]),this.endpoint=S(this.o.scroll.end||"+0",s[this.dirE])):(this.startpint=S(this.o.start||"+0",s[this.dir]),this.endpoint=S(this.o.end||"+0",s[this.dirE])),this.o.pin&&(this.pin.start=S(this.pin.a||"+0",s[this.dir]),this.pin.end=S(this.pin.z||"+0",s[this.dirE]))}raf(e){if(this.coord=e,this.o.scroll){let s=P(this.startpint,this.endpoint,this.coord);this.scroll(s),this.o.pin&&this.piner(),this.o.raf&&this.o.raf(s,this.target,this.coord)}else this.startpint<=this.coord&&this.fire()}scroll(e){let s=this.from?1-e:e;this.ps.map(i=>{this.target.length?this.target.forEach(r=>i.setV(r,i.cb(s))):i.setV(this.target,i.cb(s))})}fire(){this.o.tween&&Y(this.target,this.o.tween),this.o.completed&&this.o.completed(this.target),this.destroy()}piner(){if(this.pined&&!(this.coord>=this.pin.end)){let e=O(0,this.coord-this.pin.pxS);this.pin.target.style.transform=`translate3d(${this.dir?"0px,"+e+"px":e+"px,0px"},0px)`}this.coord<this.pin.start?this.pined=!1:this.coord>=this.pin.start&&!this.pined&&(this.pin.pxS=this.coord,this.pined=!0)}destroy(){this.iraf.r(),this.iresize.r()}},kt=K;var zt=!1;function Q(){if(!zt){history.scrollRestoration="manual",window.onpointerdown=p.obs("pointerdown").cb,window.onpointermove=p.obs("pointermove").cb,window.onpointerup=p.obs("pointerup").cb,window.onkeydown=p.obs("keydown").cb,window.onwheel=p.obs("wheel").cb,zt=!0;let t=u.node("div");t.setAttribute("data-overlay",""),t.style.cssText=` height: 100%; width: 100%; position: fixed; top: 0; left: 0; z-index: 999; pointer-events: none; `,document.body.appendChild(t)}}var q=class{constructor(e,s){this.options=s,this.attacher=e,this.target=s.target,this.dir=s.dir?s.dir:"y",this.isY=this.dir=="y",this.ePage=this.dir=="y"?"pageY":"pageX",this._init(s),this.chokeEl=u.el("[data-overlay]"),this.choke=new $({d:.3,cb:()=>w.pointer(this.chokeEl,"none")})}_init(e){Q(),Object.is(this.attacher,window)?(e.drag!==!1&&(this.ipointerdown=p.add("pointerdown",this._down.bind(this)),this.ipointermove=p.add("pointermove",this._move.bind(this))),e.key!==!1&&(this.ikey=p.add("keydown",this._onkey.bind(this))),e.wheel!==!1&&(this.iwheel=p.add("wheel",this._wheel.bind(this))),this.globalevents=p.obs("globalevents").cb):(e.wheel!==!1&&(this.attacher.onwheel=this._wheel.bind(this)),e.drag!==!1&&(this.attacher.onpointerdown=this._down.bind(this),this.attacher.onpointermove=this._move.bind(this))),this.ipointerup=p.add("pointerup",this._up.bind(this)),this.dist=0,this.scroll={value:0,lerp:0,dir:1},this.speed={value:0,lerp:0}}_wheel(e){this.loop();let s=e.deltaMode==1?.83:.55,i=e.wheelDeltaY*s;this.scroll.value-=i,this.scroll.dir=Math.sign(i),this.globalevents&&this.globalevents(e,i)}_onkey(e){if(e.key==="Tab")e.preventDefault();else if(e.keyCode==40||e.keyCode==38){this.loop();let s=0;e.keyCode==40?s=-66.6:e.keyCode==38&&(s=66.6),this.scroll.value-=s,this.globalevents&&this.globalevents(e,s)}}_down(e){this.mousedown=!0,this.dist=e[this.ePage]}_move(e){if(this.mousedown){this.loop();let s=e[this.ePage]-this.dist;this.scroll.value-=s,this.dist=e[this.ePage],this.scroll.dir=Math.sign(s),this.globalevents&&(w.pointer(this.chokeEl,"all"),this.globalevents(e,s))}}_up(){this.mousedown=!1,this.choke.run()}_destroy(){this.iraf.r(),this.sub.r(),this.iresize.r(),Object.is(this.attacher,window)?(this.ipointerdown&&(this.ipointerdown.r(),this.ipointermove.r()),this.ikey&&this.ikey.r(),this.iwheel&&this.iwheel.r()):this.options!==!1&&(this.attacher.onpointerdown=null,this.attacher.onpointermove=null),this.ipointerup.r()}};var C=(t,e,s)=>{s?w.form(t,"px",0,e):w.form(t,"px",e,0)},Et=(t,e,s,i,r,o)=>{t<=s.z&&e>=s.a?(C(i,-o,r),s.out=!1):s.out||(C(i,-o,r),s.out=!0)},U=class extends q{constructor(e,s){super(e,s),this.ease=s.ease||.09,this.infinite=s.infinite,this.sub=p.obs(s.obs||Symbol("foo")),this.speed={time:performance.now(),offset:0,value:0,ease:s.speed||.3},this.iresize=p.add("resize",this.resize.bind(this)),this.iraf=p.add("raf",this.raf.bind(this)),this.resize()}loop(){this.iraf.item.on||(this.iraf=p.add("raf",this.raf.bind(this)))}add(e,s){s.obsname=this.sub.name;let i=new kt(e,s,this.dir);return this.loop(),i}raf(e){this.kids||(this.scroll.value=m(0,this.dim,this.scroll.value)),this.scroll.lerp=d(this.scroll.lerp,this.scroll.value,this.ease);let s=V(this.scroll.lerp);this.speed.time=e-this.speed.time,this.speed.offset=s-this.speed.offset,this.speed.value=d(this.speed.value,this.speed.offset/this.speed.time,this.speed.ease),this.kids?(s>this.dim?(this.scroll.value=this.scroll.value-this.dim,this.scroll.lerp=s-this.dim):s<0&&(this.scroll.value=this.dim+this.scroll.value,this.scroll.lerp=this.dim+s),this.kids.map(([i,r])=>{let o=s,n=o+this.s;if(s>this.dim-this.s){let l=s-(this.dim-this.s)-this.s,a=l+this.s;l<=r.z&&a>=r.a?C(i,this.s-a,this.isY):Et(o,n,r,i,this.isY,s)}else Et(o,n,r,i,this.isY,s)})):C(this.target,-s,this.isY),this.speed.time=e,this.speed.offset=s,this.sub&&this.sub.cb(s),s==this.scroll.value&&this.iraf.r()}resize(){if(this.bs=k(this.target),this.infinite){let s=[...this.target.children];this.kids=s.map(i=>{let r=this.isY?i.offsetTop:i.offsetLeft,o=this.isY?i.offsetHeight:i.offsetWidth;return[i,{a:r,z:r+o}]})}let e=this.isY?"h":"w";this.s=g.size[e],this.dim=this.bs[e]-(this.kids?0:this.s),this.loop()}},St=U;var F=" ";function be(t,e){document.body.append(t),t.style.visibility="hidden",t.style.position="absolute",t.style.whiteSpace="nowrap",t.style.fontFamily=e.getPropertyValue("font-family"),t.style.fontSize=e.getPropertyValue("font-size"),t.style.fontWeight=e.getPropertyValue("font-weight"),t.style.textTransform=e.getPropertyValue("text-transform"),t.style.letterSpacing=e.getPropertyValue("letter-spacing"),t.style.lineHeight=e.getPropertyValue("line-height")}function Pt(t){let e=t.childNodes,s=[];for(let i=0;i<e.length;i++)s.push(ye(e[i]));return s}function ye(t){let e;return t.nodeType===3?e={value:t.nodeValue.split(" "),type:3}:e={value:Pt(t),type:1,node:t},e}function qt(t){for(let e=0;e<t.length;e++){let s=t[e];if(s.type===3){let i=[];for(let r=0;r<s.value.length;r++)s.value[r]=s.value[r].replace(/\n/g,""),s.value[r]!==""&&i.push(s.value[r]);s.value=i}else qt(s.value)}}function Tt(t,e,s){if(s.words){let i=t.words.length,r;s.ltrs?r=t.words.reduce((o,n,l)=>{let a="";for(let c=0;c<n.length;c++)a+=T(n[c],3);return o+T(a+(l==i-1?"":F),2)},""):r=t.words.reduce((o,n,l)=>o+T(n+(l==i-1?"":F),2),""),e.push({line:T(r,1)})}else e.push({line:T(t.value,1)})}function T(t,e){if(e===1)return`<div class="tfx"><span>${t}</span></div>`;if(e===2)return`<span class="word">${t}</span>`;if(e===3)return`<span class="ltr">${t}</span>`}function we(t,e,s,i,r,o){for(let n=0;n<t.length;n++){let l=t[n];e.value+=l,s.innerHTML=e.value,e.words.push(l),s.offsetWidth>i&&(e.words.pop(),Tt(e,r,o),e.value=l,e.words=[l+F]),e.value+=F}}function ve(t,e,s,i){let r={value:"",words:[]},o=[];for(let n=0;n<t.length;n++){let l=t[n];l.type===3&&we(l.value,r,e,s,o,i)}return Tt(r,o,i),o}function xe(t,e){let s=z(t),i=document.createElement("div");e.ltrs&&(e.words=!0),be(i,s);let r=t.offsetWidth,o=Pt(t);qt(o);let n=ve(o,i,r,e);return t.innerHTML="",document.body.removeChild(i),n.map(({line:l})=>t.innerHTML+=l),{lines:u.sEls(t,".tfx"),words:u.sEls(t,".word"),ltrs:u.sEls(t,".ltr")}}var _t=xe;
