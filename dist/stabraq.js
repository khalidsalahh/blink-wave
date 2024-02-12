/* @khalidvsalah | Stabraq | v1.0.0 | MIT License | https://github.com/khalidvsalah/stabraq | https://www.khalidsalah.com */var A=Object.defineProperty;var Et=Object.getOwnPropertyDescriptor;var Mt=Object.getOwnPropertyNames;var Vt=Object.prototype.hasOwnProperty;var _t=(e,t)=>{for(var s in t)A(e,s,{get:t[s],enumerable:!0})},zt=(e,t,s,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Mt(t))!Vt.call(e,r)&&r!==s&&A(e,r,{get:()=>t[r],enumerable:!(i=Et(t,r))||i.enumerable});return e};var kt=e=>zt(A({},"__esModule",{value:!0}),e);var ue={};_t(ue,{bounds:()=>M,choke:()=>E,clamp:()=>u,computed:()=>V,cssSet:()=>g,ease:()=>m,has:()=>J,iSet:()=>b,late:()=>x,lerp:()=>c,line:()=>bt,map:()=>k,props:()=>w,query:()=>d,raf:()=>y,remap:()=>G,round:()=>$,scroll:()=>ct,scrub:()=>F,sub:()=>h,tween:()=>C,zero:()=>q});module.exports=kt(ue);var St={l:e=>e,i1:e=>1-Math.cos(e*Math.PI/2),o1:e=>Math.sin(e*Math.PI/2),io1:e=>-(Math.cos(Math.PI*e)-1)/2,i2:e=>Math.pow(e,2),o2:e=>1-(1-e)*(1-e),io2:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,i3:e=>Math.pow(e,3),o3:e=>1-Math.pow(1-e,3),io3:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,i4:e=>Math.pow(e,4),o4:e=>1-Math.pow(1-e,4),io4:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,i5:e=>Math.pow(e,5),o5:e=>1-Math.pow(1-e,5),io5:e=>e<.5?16*Math.pow(e,5):1-Math.pow(-2*e+2,5)/2,i6:e=>e===0?0:Math.pow(2,10*e-10),o6:e=>e===1?1:1-Math.pow(2,-10*e),io6:e=>e===0?0:e===1?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,i7:e=>1-Math.sqrt(1-Math.pow(e,2)),o7:e=>sqrt(1-Math.pow(e-1,2)),io7:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2},m=St;var q=(e,t)=>Math.max(e,t),u=(e,t,s)=>Math.min(Math.max(e,s),t),c=(e,t,s)=>(1-s)*e+s*t,k=(e,t,s)=>u(0,1,(s-e)/(t-e)),G=(e,t,s,i,r)=>k(e,t,r)*(i-s)+s,$=(e,t)=>{let s=t?Math.pow(10,t):100;return Math.round(e*s)/s};var J=(e,t)=>window.hasOwnProperty.call(e,t),M=e=>{let t=e.getBoundingClientRect();return{w:t.width,h:t.height,x:t.x,y:t.y,xE:t.right,yE:t.bottom}},V=e=>window.getComputedStyle(e),g={alpha:(e,t)=>e.style.opacity=t,display:(e,t)=>e.style.display=t,pointer:(e,t)=>e.style.pointerEvents=t,position:(e,t)=>e.style.position=t,visible:(e,t)=>e.style.visibility=t,form:(e,t,s,i)=>e.style.transform=`translate3d(${s+t},${i+t},0)`},d={id:e=>document.getElementById(e),el:e=>document.querySelector(e),els:e=>[...document.querySelectorAll(e)],sEl:(e,t)=>e.querySelector(t),sEls:(e,t)=>[...e.querySelectorAll(t)],node:e=>document.createElement(e),text:e=>document.createTextNode(e)},b={get size(){return{w:window.innerWidth,h:window.innerHeight}},string:e=>JSON.stringify(e)},E=class{constructor({late:t,cb:s}){this.late=t*1e3,this.cb=s,this.time=0}run(){clearTimeout(this.time),this.time=setTimeout(this.cb,this.late)}};var Pt=(e,t)=>{let s={s:+t.opacity,e:e[0]};return s.lerp=s.e-s.s,i=>`${s.s+s.lerp*i}`},qt=(e,t)=>e.style.opacity=t,K={cb:Pt,setValue:qt};var O={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},Ct=/([astvzqmhlc])([^astvzqmhlc]*)/gi,Yt=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;function Tt(e){let t=e.match(Yt);return t?t.map(Number):[]}function Q(e){let t=[];return e.replace(Ct,function(s,i,r){let o=i.toLowerCase();for(r=Tt(r),o==="m"&&r.length>2&&(t.push([i].concat(r.splice(0,2))),o="l",i=i==="m"?"l":"L");;){if(r.length===O[o])return r.unshift(i),t.push(r);if(r.length<O[o])throw new Error("malformed path data");t.push([i].concat(r.splice(0,O[o])))}}),t}var At=(e,t)=>{let s=Q(t.el.getAttribute("d")),i=Q(e[0]);return r=>{let o="",l="";for(let n=0;n<s.length;n++){let a=s[n],f=i[n];for(let p=0;p<a.length;p++)o+=(isNaN(a[p])?a[p]:c(a[p],f[p],r))+" ";l=o.trim()}return l}},Ot=(e,t)=>e.setAttribute("d",t),U={cb:At,setValue:Ot};var Nt=(e,t)=>{let s=t.el.getTotalLength();t.el.style.strokeDasharray=s;let i={s:e[0]*s,e:e[1]*s};return i.lerp=i.e-i.s,r=>`${i.s+i.lerp*r}`},Lt=(e,t)=>e.style.strokeDashoffset=t,Z={cb:Nt,setValue:Lt};var tt=e=>{let t=[],s=e.split(" "),i=s.length;for(let r=0;r<i;r++){let o=s[r].split(","),l=o.length;for(let n=0;n<l;n++){let a=o[n];t.push(isNaN(a)?a:+a)}}return t},Xt=(e,t)=>{let s=tt(t.el.getAttribute("points")),i=tt(e[0]);return r=>{let o="",l="";for(let n=0;n<s.length;n++)o+=c(s[n],i[n],r)+" ",l=o.trim();return l}},jt=(e,t)=>e.setAttribute("points",t),et={cb:Xt,setValue:jt};var Ft=(e,t)=>{let s;if(t.top==="auto")s={s:0,e:e[0],unit:e[1]||"px"};else{let i=parseFloat(t.top);s={s:e[1]==="px"?i:i/M(t.pa).h*100,e:e[0],unit:e[1]||"px"}}return s.lerp=s.e-s.s,i=>`${s.s+s.lerp*i}${s.unit}`},Ht=(e,t)=>e.style.top=t,st={cb:Ft,setValue:Ht};var It=(e,t,s)=>{let i=e.x,r=t?+t[4]:0,o;return t?o={s:i?i[1]==="px"?r:r/parseFloat(s)*100:r,e:i?i[0]:r}:o={s:0,e:i?i[0]:0},o.lerp=o.e-o.s,o.unit=i&&i[1]?i[1]:"px",o},Wt=(e,t,s)=>{let i=e.y,r=t?+t[5]:0,o;return t?o={s:i?i[1]==="px"?r:r/parseFloat(s)*100:r,e:i?i[0]:r}:o={s:0,e:i?i[0]:0},o.lerp=o.e-o.s,o.unit=i&&i[1]?i[1]:"px",o},Dt=(e,t)=>{let s=e.sx,i;return t?i={s:+t[0],e:s?s[0]:+t[0]}:i={s:1,e:s?s[0]:1},i.lerp=i.e-i.s,i},Rt=(e,t)=>{let s=e.sy,i;return t?i={s:+t[3],e:s?s[0]:+t[3]}:i={s:1,e:s?s[0]:1},i.lerp=i.e-i.s,i},Bt=e=>{let t=e.rx,s={s:t?t[0]:0,e:t?t[1]:0};return s.lerp=s.e-s.s,s},Gt=e=>{let t=e.ry,s={s:t?t[0]:0,e:t?t[1]:0};return s.lerp=s.e-s.s,s},Jt=e=>{let t=e.match(/^matrix3d\((.+)\)$/),s=e.match(/\((.+)\)$/);return t?(s=t[1].split(", "),s=[s[0],s[1],s[4],s[5],s[12],s[13]]):s&&(s=s[1].split(", ")),s},Kt=(e,{transform:t,width:s,height:i})=>{let r=e[0],o=Jt(t),l=It(r,o,s),n=Wt(r,o,i),a=Dt(r,o),f=Rt(r,o),p=Bt(r,o),z=Gt(r,o);return v=>{let gt=`${l.s+l.lerp*v}${l.unit}`,yt=`${n.s+n.lerp*v}${n.unit}`,wt=`${a.s+a.lerp*v}`,xt=`${f.s+f.lerp*v}`,vt=`${p.s+p.lerp*v}deg`,$t=`${z.s+z.lerp*v}deg`;return`translate3d(${gt}, ${yt}, 0) scale(${wt}, ${xt}) rotateX(${vt}) rotateY(${$t})`}},Qt=(e,t)=>e.style.transform=t,it={cb:Kt,setValue:Qt};var Ut=(e,t)=>{let s;return t.filter==="none"?s={s:0,e:e[0]}:s={s:+t.filter.match(/(\d.*)px/)[1],e:e[0]},s.lerp=s.e-s.s,i=>s.s+s.lerp*i},Zt=(e,t)=>e.style.filter=`blur(${t}px)`,rt={cb:Ut,setValue:Zt};var te=(e,t)=>{let s=parseFloat(t.width),i={s:e[1]==="px"?s:s/t.pa.clientWidth*100,e:e[0],unit:e[1]==="px"?"px":"%"};return i.lerp=i.e-i.s,r=>`${i.s+i.lerp*r}${i.unit}`},ee=(e,t)=>e.style.width=t,ot={cb:te,setValue:ee};var se=(e,t)=>{let s=parseFloat(t.height),i={s:e[1]==="px"?s:s/t.pa.clientHeight*100,e:e[0],unit:e[1]==="px"?"px":"%"};return i.lerp=i.e-i.s,r=>`${i.s+i.lerp*r}${i.unit}`},ie=(e,t)=>e.style.height=t,lt={cb:se,setValue:ie};var re=[[/^(form)$/,it],[/^(a)$/,K],[/^(dash)$/,Z],[/^(points)$/,et],[/^(d)$/,U],[/^(top)$/,st],[/^(blur)$/,rt],[/^(width)$/,ot],[/^(height)$/,lt]],N=re;function L(e){let t=N.length;for(let s=0;s<t;s++){let i=N[s];if(e.match(i[0]))return i[1]}}function oe(e,t){let s=[],i=V(e),r=t.dir==-1,o=t.ease;i.el=e,i.pa=e.parentNode;for(let l of Object.entries(t)){if(l[0]=="dir"||l[0]=="ease")continue;let n=L(l[0]),a=n.cb(l[1],i),f=l[1].length,p=l[1][f-1];typeof p=="object"&&p.ease&&(o=m[p.ease]),s.push({setV:n.setValue,cb:z=>a(o(r?1-z:z))})}return r&&s.map(({setV:l,cb:n})=>l(e,n(0))),s}function le(e,t){let s=[];for(let i in t){let r={s:e[i]};r.lerp=t[i][0]-r.s,s.push({setV:(o,l)=>o[i]=l,cb:o=>r.s+r.lerp*o})}return s}function ne(e,t,s){return t?le(e,s):oe(e,s)}var w=ne;var X=class{constructor(){this.items=[],this.id=-1}push(t){return t.id=++this.id,this.items.push(t),this.on||this.loop(),t.id}update(t){for(let s=0;s<this.items.length;s++){let i=this.items[s];if(i.d){i.st||(i.st=t);let r=(t-i.st)/(i.d*1e3),o=u(0,1,r);(i.cb(o)||o===1)&&this.kill(i.id)}else i.cb(t)}this.loop()}kill(t){this.items.map((s,i)=>{s.id===t&&(s.id=null,s.st=null,this.items.splice(i,1))})}loop(){this.items.length===0?(this.on=!1,window.cancelAnimationFrame(this.raf)):(this.on=!0,this.raf=window.requestAnimationFrame(this.update.bind(this)))}},y=new X;var j=class{constructor(){this.observers={}}obs(t){this.observers[t]={items:[],id:0};function s(){let r=this[t],o=Array.prototype.slice.call(arguments);for(let l=0;l<r.items.length;l++)r.items[l].cb(...o)}let i=r=>{this.observers[r].items=[]};return{cb:s.bind(this.observers),name:t,r:i.bind(this,t)}}add(t,s){this.observers[t]||console.error(t);let i=this.observers[t].items,r=this.observers[t].id++,o={cb:s,id:r,on:!0};return i.push(o),{item:o,r:(n=>{for(let a=0;a<i.length;a++)i[a].id==n.id&&(i[a].on=!1,i.splice(a,1))}).bind({},o)}}check(t){return!!this.observers[t]}},h=new j;function F(e){let t=document.createElement("section"),s={start:0,end:0,lerp:.75};t.style.cssText=` position: fixed; height: 32px; width: 32px; display: flex; align-items: center; justify-content: center; font-size: 12px; background: #333; color: #fff; border-radius: 50%; pointer-events: none; `,h.add("pointermove",i=>{let r=$(i.pageX/b.size.w);t.style.top=i.pageY+-30+"px",t.style.left=i.pageX+-30*r+"px",t.textContent=r,s.start=u(0,.99999,r)}),h.add("raf",()=>{s.end=c(s.start,s.end,s.lerp),e(s.end)}),document.body.appendChild(t)}var x=class{constructor({late:t,o:s,cb:i}){this.d=t||0,this.o=s,this.cb=i,this.on=!1,this.stop=!1}play(){this.on=!0,this.stop=!1,this.d==0?this.Elp():(this.id=y.push({cb:this.loop.bind(this)}),this.f=performance.now()+this.d*1e3)}destroy(){this.stop=!0,this.on=!1}loop(t){t>this.f&&(y.kill(this.id),this.Elp())}Elp(){this.stop||(this.on=!1,y.push(this.o),this.cb&&this.cb())}};function H(e){this.obj=!1,e instanceof Node?this.target=e:typeof e=="string"?this.target=d.el(e):(this.obj=!0,this.target=e)}var nt=new Map;function I(e){let t=nt.get(e);return t||(nt.set(e,this),!1)}var W=class{constructor(t,s){let i=I.call(this,t);if(!i)H.call(this,t),this.init(s);else return i}init(t){this.o=t,this.mode,this.prog=0,this.elapsed=0,this.dir=0,this.d=t.d,this.late=t.late,this.ease=m[t.ease||"l"],this.oProps=t.p,this.lateO={cb:this.run.bind(this),d:this.d},this.late=new x({late:this.late,o:this.lateO}),this.props=w(this.target,this.obj,{...this.oProps,ease:this.ease})}run(t){this.on=!0,this.elapsed=u(0,1,this.prog+t);let s=Math.abs(this.dir-this.elapsed);if(this.props.map(({setV:i,cb:r})=>i(this.target,r(s))),this.raf&&this.raf(s,this.target),this.elapsed==1)return this.destroy()}control(t,s){this.late.on&&this.mode!==t&&(this.mode=t,this.late.destroy()),this.mode!==t&&(this.mode=t,t==="r"?this.dir=1:this.dir=0,this.late.cb=()=>this.start&&this.start(this.target),!this.late.on&&(this.on?(this.lateO.st=null,s?this.prog=0:this.prog=1-this.elapsed):this.late.play()))}reverse(t){this.late.d=t.late||this.late.d,this.index===0&&(this.start=t.start,this.completed=t.completed,this.raf=t.raf),this.control("r")}play(t,s){this.index=s,this.index===0&&(this.start=t.start,this.completed=t.completed,this.raf=t.raf),b.string(this.oProps)!=b.string(t.p)?(this.late.d=t.late||0,this.lateO.d=t.d,this.oProps=t.p,this.props=w(this.target,this.obj,{...this.oProps,ease:m[t.ease]||this.ease}),this.mode="r",this.control("p",!0)):this.control("p")}destroy(){return this.on=!1,this.prog=0,this.completed&&this.completed(this.target),!0}},ht=W;function he(e,t){let s;e instanceof NodeList||Array.isArray(e)?s=[...e]:s=[e];let i=s.map((o,l)=>{let n=(t.late||0)+(t.space*l||0);return new ht(o,{...t,late:n})});i.map((o,l)=>o.play(t,l));let r=i.map(o=>o.late.d);return{reverse:(o={})=>{let l=(t.late||0)-o.late;i.map((n,a)=>{o.late=r[a]-l,n.reverse(o)})},play:()=>i.map((o,l)=>o.play(t,l))}}var C=he;var _=(e,t)=>{let s=e.match(/(\+|\-)(.*)/);if(s){if(s[1]=="+")return t+ +s[2];if(s[1]=="-")return t-+s[2]}else return+e},D=class{constructor(t,s,i){this.el=t,this.target=s.target,this.o=s,this.dir=i,this.dirE=i=="y"?"yE":"xE",this.Init(s)}Init(t){t.target||(this.target=this.el),t.scroll&&(this.ps=w(this.target,!1,{...t.p,ease:m[t.ease||"l"]})),t.pin&&(this.pin=t.pin,this.pin.target=t.pin.target||this.target),this.iresize=h.add("resize",this.resize.bind(this)),this.resize(),this.iraf=h.add(t.obsname,this.raf.bind(this))}resize(){let t=this.el.length?this.el[0]:this.el,s={y:t.offsetTop,yE:t.offsetTop+t.offsetHeight,x:t.offsetLeft,xE:t.offsetLeft+t.offsetWidth};this.o.scroll?(this.startpint=_(this.o.scroll.start||"+0",s[this.dir]),this.endpoint=_(this.o.scroll.end||"+0",s[this.dirE])):(this.startpint=_(this.o.start||"+0",s[this.dir]),this.endpoint=_(this.o.end||"+0",s[this.dirE])),this.o.pin&&(this.pin.start=_(this.pin.a||"+0",s[this.dir]),this.pin.end=_(this.pin.z||"+0",s[this.dirE]))}raf(t){this.coord=t;let s=this.startpint,i=this.endpoint;this.o.scroll?(this.scroll(k(s,i,this.coord)),this.o.pin&&this.piner(),this.o.raf&&this.o.raf(this.target,this.coord)):s<=this.coord&&this.fire()}scroll(t){this.ps.map(s=>{this.target.length?this.target.forEach(i=>s.setV(i,s.cb(t))):s.setV(this.target,s.cb(t))})}fire(){this.o.tween&&C(this.target,this.o.tween),this.o.completed&&this.o.completed(this.target),this.destroy()}piner(){if(this.pined&&!(this.coord>=this.pin.end)){let t=q(0,this.coord-this.pin.pxS);this.pin.target.style.transform=`translate3d(${this.dir?"0px,"+t+"px":t+"px,0px"},0px)`}this.coord<this.pin.start?this.pined=!1:this.coord>=this.pin.start&&!this.pined&&(this.pin.pxS=this.coord,this.pined=!0)}destroy(){this.iraf.r(),this.iresize.r()}},at=D;var pt=!1;function R(){if(!pt){history.scrollRestoration="manual",window.onpointerdown=h.obs("pointerdown").cb,window.onpointermove=h.obs("pointermove").cb,window.onpointerup=h.obs("pointerup").cb,window.onkeydown=h.obs("keydown").cb,window.onwheel=h.obs("wheel").cb,window.onresize=h.obs("resize").cb,y.push({cb:h.obs("raf").cb}),pt=!0;let e=d.node("div");e.setAttribute("data-overlay",""),e.style.cssText=` height: 100%; width: 100%; position: fixed; top: 0; left: 0; z-index: 999; `,document.body.appendChild(e)}}var S=class{constructor(t,s){this.target=t,this.rafCb=s.rafCb,this.ePage=s.dir=="y"?"pageY":"pageX",R(),this._init(s),this.chokeEl=d.el("[data-overlay]"),this.choke=new E({late:.3,cb:()=>g.pointer(this.chokeEl,"none")})}_init(t){Object.is(this.target,window)?(t.drag!==!1&&(this.ipointerdown=h.add("pointerdown",this._down.bind(this)),this.ipointermove=h.add("pointermove",this._move.bind(this))),t.key!==!1&&(this.ikey=h.add("keydown",this._onkey.bind(this))),t.wheel!==!1&&(this.iwheel=h.add("wheel",this._wheel.bind(this))),this.globalScroll=!0,this.globalevents=h.obs("globalevents").cb):(t.wheel!==!1&&(this.target.onwheel=this._wheel.bind(this)),t.drag!==!1&&(this.target.onpointerdown=this._down.bind(this),this.target.onpointermove=this._move.bind(this))),this.ipointerup=h.add("pointerup",this._up.bind(this)),this.dist=0,this.scroll=0,this.virtual={value:0,dir:1},this.speed={value:0,lerp:0},this.roll={value:0,virtual:0}}_wheel(t){this.rafCb();let s=t.deltaMode==1?.83:.55,i=t.wheelDeltaY*s;this.scroll-=i,this.roll.value-=i,this.virtual.dir=Math.sign(i),this.globalevents(t,i)}_onkey(t){if(t.keyCode==40||t.keyCode==38){this.rafCb();let s=0;t.keyCode==40?s=-66.6:t.keyCode==38&&(s=66.6),this.scroll-=s,this.roll.value-=s,this.globalevents(t,s)}}_down(t){this.mousedown=!0,this.dist=t[this.ePage]}_move(t){if(this.mousedown){this.globalScroll&&g.pointer(this.chokeEl,"all"),this.rafCb();let s=t[this.ePage]-this.dist;this.scroll-=s,this.roll.value-=s,this.dist=t[this.ePage],this.virtual.dir=Math.sign(s),this.globalevents(t,s)}}_up(){this.mousedown=!1,this.choke.run()}_destroy(){Object.is(this.target,window)?(this.ipointerdown&&(this.ipointerdown.r(),this.ipointermove.r()),this.ikey&&this.ikey.r(),this.iwheel&&this.iwheel.r()):this.o.drag!==!1&&(this.target.onpointerdown=null,this.target.onpointermove=null),this.ipointerup.r()}};var Y=(e,t,s)=>{s?g.form(e,"px",0,t):g.form(e,"px",t,0)},ft=(e,t,s,i,r,o)=>{e<=s.z&&t>=s.a?(Y(i,-o,r),s.out=!1):s.out||(Y(i,-o,r),s.out=!0)},B=class{constructor(t,s){this.target=s.target,this.ease=s.ease||.09,this.dir=s.dir?s.dir:"y",this.isY=this.dir=="y",this.infinite=s.infinite,this.sub=h.obs(s.obs||Symbol("foo")),this.speedEase=s.speed,s.dir=this.dir,s.rafCb=this.loop.bind(this),this.time=performance.now(),this.offset=0,this.speed=0,this._$E=new S(t,s),this.iresize=h.add("resize",this.resize.bind(this)),this.iraf=h.add("raf",this.raf.bind(this)),this.resize()}loop(){this.iraf.item.on||(this.iraf=h.add("raf",this.raf.bind(this)))}add(t,s){s.obsname=this.sub.name;let i=new at(t,s,this.dir);return this.loop(),i}raf(t){this.kids||(this._$E.scroll=u(0,this.dim,this._$E.scroll)),this._$E.virtual.value=c(this._$E.virtual.value,this._$E.scroll,this.ease),this._$E.roll.virtual=c(this._$E.roll.virtual,this._$E.roll.value,this.ease);let s=this._$E.virtual.value,i=t-this.time,r=s-this.offset;this.speed=c(this.speed,r/i,this.speedEase),this.kids?(s>this.dim?(this._$E.scroll=this._$E.scroll-this.dim,this._$E.virtual.value=s-this.dim):s<0&&(this._$E.scroll=this.dim+this._$E.scroll,this._$E.virtual.value=this.dim+s),this.kids.map(([o,l])=>{let n=s,a=n+this.s;if(s>this.dim-this.s){let f=s-(this.dim-this.s)-this.s,p=f+this.s;f<=l.z&&p>=l.a?Y(o,this.s-p,this.isY):ft(n,a,l,o,this.isY,s)}else ft(n,a,l,o,this.isY,s)})):Y(this.target,-s,this.isY),this.time=t,this.offset=s,this.sub&&this.sub.cb(s),$(this._$E.roll.virtual,2)==this._$E.roll.value&&this.iraf.r()}resize(){if(this.bs=M(this.target),this.infinite){let s=[...this.target.children];this.kids=s.map(i=>{let r=this.isY?i.offsetTop:i.offsetLeft,o=this.isY?i.offsetHeight:i.offsetWidth;return[i,{a:r,z:r+o}]})}let t=this.isY?"h":"w";this.s=b.size[t],this.dim=this.bs[t]-(this.kids?0:this.s),this.loop()}destroy(){this.iraf.r(),this.sub.r(),this.iresize.r(),this._$E._destroy()}},ct=B;var T=" ";function ae(e,t){document.body.append(e),e.style.visibility="hidden",e.style.position="absolute",e.style.whiteSpace="nowrap",e.style.fontFamily=t.getPropertyValue("font-family"),e.style.fontSize=t.getPropertyValue("font-size"),e.style.fontWeight=t.getPropertyValue("font-weight"),e.style.textTransform=t.getPropertyValue("text-transform"),e.style.letterSpacing=t.getPropertyValue("letter-spacing"),e.style.lineHeight=t.getPropertyValue("line-height")}function dt(e){let t=e.childNodes,s=[];for(let i=0;i<t.length;i++)s.push(pe(t[i]));return s}function pe(e){let t;return e.nodeType===3?t={value:e.nodeValue.split(" "),type:3}:t={value:dt(e),type:1,node:e},t}function ut(e){for(let t=0;t<e.length;t++){let s=e[t];if(s.type===3){let i=[];for(let r=0;r<s.value.length;r++)s.value[r]=s.value[r].replace(/\n/g,""),s.value[r]!==""&&i.push(s.value[r]);s.value=i}else ut(s.value)}}function mt(e,t,s){if(s.words){let i=e.words.length,r;s.ltrs?r=e.words.reduce((o,l,n)=>{let a="";for(let f=0;f<l.length;f++)a+=P(l[f],3);return o+P(a+(n==i-1?"":T),2)},""):r=e.words.reduce((o,l,n)=>o+P(l+(n==i-1?"":T),2),""),t.push({line:P(r,1)})}else t.push({line:P(e.value,1)})}function P(e,t){if(t===1)return`<div class="tfx"><span>${e}</span></div>`;if(t===2)return`<span class="word">${e}</span>`;if(t===3)return`<span class="ltr">${e}</span>`}function fe(e,t,s,i,r,o){for(let l=0;l<e.length;l++){let n=e[l];t.value+=n,s.innerHTML=t.value,t.words.push(n),s.offsetWidth>i&&(t.words.pop(),mt(t,r,o),t.value=n,t.words=[n+T]),t.value+=T}}function ce(e,t,s,i){let r={value:"",words:[]},o=[];for(let l=0;l<e.length;l++){let n=e[l];n.type===3&&fe(n.value,r,t,s,o,i)}return mt(r,o,i),o}function de(e,t){let s=V(e),i=document.createElement("div");t.ltrs&&(t.words=!0),ae(i,s);let r=e.offsetWidth,o=dt(e);ut(o);let l=ce(o,i,r,t);return e.innerHTML="",document.body.removeChild(i),l.map(({line:n})=>e.innerHTML+=n),{lines:d.sEls(e,".tfx"),words:d.sEls(e,".word"),ltrs:d.sEls(e,".ltr")}}var bt=de;
