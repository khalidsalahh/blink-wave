/* @khalidvsalah | Stabraq | v1.0.0 | MIT License | https://github.com/khalidvsalah/stabraq | https://www.khalidsalah.com */var yt={l:e=>e,i1:e=>1-Math.cos(e*Math.PI/2),o1:e=>Math.sin(e*Math.PI/2),io1:e=>-(Math.cos(Math.PI*e)-1)/2,i2:e=>Math.pow(e,2),o2:e=>1-(1-e)*(1-e),io2:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,i3:e=>Math.pow(e,3),o3:e=>1-Math.pow(1-e,3),io3:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,i4:e=>Math.pow(e,4),o4:e=>1-Math.pow(1-e,4),io4:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,i5:e=>Math.pow(e,5),o5:e=>1-Math.pow(1-e,5),io5:e=>e<.5?16*Math.pow(e,5):1-Math.pow(-2*e+2,5)/2,i6:e=>e===0?0:Math.pow(2,10*e-10),o6:e=>e===1?1:1-Math.pow(2,-10*e),io6:e=>e===0?0:e===1?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,i7:e=>1-Math.sqrt(1-Math.pow(e,2)),o7:e=>sqrt(1-Math.pow(e-1,2)),io7:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2},m=yt;var Y=(e,t)=>Math.max(e,t),u=(e,t,s)=>Math.min(Math.max(e,s),t),c=(e,t,s)=>(1-s)*e+s*t,P=(e,t,s)=>u(0,1,(s-e)/(t-e)),wt=(e,t,s,i,r)=>P(e,t,r)*(i-s)+s,M=(e,t)=>{let s=t?Math.pow(10,t):100;return Math.round(e*s)/s};var xt=(e,t)=>window.hasOwnProperty.call(e,t),_=e=>{let t=e.getBoundingClientRect();return{w:t.width,h:t.height,x:t.x,y:t.y,xE:t.right,yE:t.bottom}},z=e=>window.getComputedStyle(e),b={alpha:(e,t)=>e.style.opacity=t,display:(e,t)=>e.style.display=t,pointer:(e,t)=>e.style.pointerEvents=t,position:(e,t)=>e.style.position=t,visible:(e,t)=>e.style.visibility=t,form:(e,t,s,i)=>e.style.transform=`translate3d(${s+t},${i+t},0)`},d={id:e=>document.getElementById(e),el:e=>document.querySelector(e),els:e=>[...document.querySelectorAll(e)],sEl:(e,t)=>e.querySelector(t),sEls:(e,t)=>[...e.querySelectorAll(t)],node:e=>document.createElement(e),text:e=>document.createTextNode(e)},g={get size(){return{w:window.innerWidth,h:window.innerHeight}},string:e=>JSON.stringify(e)},V=class{constructor({late:t,cb:s}){this.late=t*1e3,this.cb=s,this.time=0}run(){clearTimeout(this.time),this.time=setTimeout(this.cb,this.late)}};var vt=(e,t)=>{let s={s:+t.opacity,e:e[0]};return s.lerp=s.e-s.s,i=>`${s.s+s.lerp*i}`},$t=(e,t)=>e.style.opacity=t,R={cb:vt,setValue:$t};var T={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},Et=/([astvzqmhlc])([^astvzqmhlc]*)/gi,Mt=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;function Vt(e){let t=e.match(Mt);return t?t.map(Number):[]}function B(e){let t=[];return e.replace(Et,function(s,i,r){let o=i.toLowerCase();for(r=Vt(r),o==="m"&&r.length>2&&(t.push([i].concat(r.splice(0,2))),o="l",i=i==="m"?"l":"L");;){if(r.length===T[o])return r.unshift(i),t.push(r);if(r.length<T[o])throw new Error("malformed path data");t.push([i].concat(r.splice(0,T[o])))}}),t}var _t=(e,t)=>{let s=B(t.el.getAttribute("d")),i=B(e[0]);return r=>{let o="",l="";for(let n=0;n<s.length;n++){let h=s[n],f=i[n];for(let p=0;p<h.length;p++)o+=(isNaN(h[p])?h[p]:c(h[p],f[p],r))+" ";l=o.trim()}return l}},zt=(e,t)=>e.setAttribute("d",t),G={cb:_t,setValue:zt};var kt=(e,t)=>{let s=t.el.getTotalLength();t.el.style.strokeDasharray=s;let i={s:e[0]*s,e:e[1]*s};return i.lerp=i.e-i.s,r=>`${i.s+i.lerp*r}`},St=(e,t)=>e.style.strokeDashoffset=t,J={cb:kt,setValue:St};var K=e=>{let t=[],s=e.split(" "),i=s.length;for(let r=0;r<i;r++){let o=s[r].split(","),l=o.length;for(let n=0;n<l;n++){let h=o[n];t.push(isNaN(h)?h:+h)}}return t},Pt=(e,t)=>{let s=K(t.el.getAttribute("points")),i=K(e[0]);return r=>{let o="",l="";for(let n=0;n<s.length;n++)o+=c(s[n],i[n],r)+" ",l=o.trim();return l}},qt=(e,t)=>e.setAttribute("points",t),Q={cb:Pt,setValue:qt};var Ct=(e,t)=>{let s;if(t.top==="auto")s={s:0,e:e[0],unit:e[1]||"px"};else{let i=parseFloat(t.top);s={s:e[1]==="px"?i:i/_(t.pa).h*100,e:e[0],unit:e[1]||"px"}}return s.lerp=s.e-s.s,i=>`${s.s+s.lerp*i}${s.unit}`},Yt=(e,t)=>e.style.top=t,U={cb:Ct,setValue:Yt};var Tt=(e,t,s)=>{let i=e.x,r=t?+t[4]:0,o;return t?o={s:i?i[1]==="px"?r:r/parseFloat(s)*100:r,e:i?i[0]:r}:o={s:0,e:i?i[0]:0},o.lerp=o.e-o.s,o.unit=i&&i[1]?i[1]:"px",o},At=(e,t,s)=>{let i=e.y,r=t?+t[5]:0,o;return t?o={s:i?i[1]==="px"?r:r/parseFloat(s)*100:r,e:i?i[0]:r}:o={s:0,e:i?i[0]:0},o.lerp=o.e-o.s,o.unit=i&&i[1]?i[1]:"px",o},Ot=(e,t)=>{let s=e.sx,i;return t?i={s:+t[0],e:s?s[0]:+t[0]}:i={s:1,e:s?s[0]:1},i.lerp=i.e-i.s,i},Nt=(e,t)=>{let s=e.sy,i;return t?i={s:+t[3],e:s?s[0]:+t[3]}:i={s:1,e:s?s[0]:1},i.lerp=i.e-i.s,i},Lt=e=>{let t=e.rx,s={s:t?t[0]:0,e:t?t[1]:0};return s.lerp=s.e-s.s,s},Xt=e=>{let t=e.ry,s={s:t?t[0]:0,e:t?t[1]:0};return s.lerp=s.e-s.s,s},jt=e=>{let t=e.match(/^matrix3d\((.+)\)$/),s=e.match(/\((.+)\)$/);return t?(s=t[1].split(", "),s=[s[0],s[1],s[4],s[5],s[12],s[13]]):s&&(s=s[1].split(", ")),s},Ft=(e,{transform:t,width:s,height:i})=>{let r=e[0],o=jt(t),l=Tt(r,o,s),n=At(r,o,i),h=Ot(r,o),f=Nt(r,o),p=Lt(r,o),E=Xt(r,o);return w=>{let ct=`${l.s+l.lerp*w}${l.unit}`,dt=`${n.s+n.lerp*w}${n.unit}`,ut=`${h.s+h.lerp*w}`,mt=`${f.s+f.lerp*w}`,gt=`${p.s+p.lerp*w}deg`,bt=`${E.s+E.lerp*w}deg`;return`translate3d(${ct}, ${dt}, 0) scale(${ut}, ${mt}) rotateX(${gt}) rotateY(${bt})`}},Ht=(e,t)=>e.style.transform=t,Z={cb:Ft,setValue:Ht};var It=(e,t)=>{let s;return t.filter==="none"?s={s:0,e:e[0]}:s={s:+t.filter.match(/(\d.*)px/)[1],e:e[0]},s.lerp=s.e-s.s,i=>s.s+s.lerp*i},Wt=(e,t)=>e.style.filter=`blur(${t}px)`,tt={cb:It,setValue:Wt};var Dt=(e,t)=>{let s=parseFloat(t.width),i={s:e[1]==="px"?s:s/t.pa.clientWidth*100,e:e[0],unit:e[1]==="px"?"px":"%"};return i.lerp=i.e-i.s,r=>`${i.s+i.lerp*r}${i.unit}`},Rt=(e,t)=>e.style.width=t,et={cb:Dt,setValue:Rt};var Bt=(e,t)=>{let s=parseFloat(t.height),i={s:e[1]==="px"?s:s/t.pa.clientHeight*100,e:e[0],unit:e[1]==="px"?"px":"%"};return i.lerp=i.e-i.s,r=>`${i.s+i.lerp*r}${i.unit}`},Gt=(e,t)=>e.style.height=t,st={cb:Bt,setValue:Gt};var Jt=[[/^(form)$/,Z],[/^(a)$/,R],[/^(dash)$/,J],[/^(points)$/,Q],[/^(d)$/,G],[/^(top)$/,U],[/^(blur)$/,tt],[/^(width)$/,et],[/^(height)$/,st]],A=Jt;function O(e){let t=A.length;for(let s=0;s<t;s++){let i=A[s];if(e.match(i[0]))return i[1]}}function Kt(e,t){let s=[],i=z(e),r=t.dir==-1,o=t.ease;i.el=e,i.pa=e.parentNode;for(let l of Object.entries(t)){if(l[0]=="dir"||l[0]=="ease")continue;let n=O(l[0]),h=n.cb(l[1],i),f=l[1].length,p=l[1][f-1];typeof p=="object"&&p.ease&&(o=m[p.ease]),s.push({setV:n.setValue,cb:E=>h(o(r?1-E:E))})}return r&&s.map(({setV:l,cb:n})=>l(e,n(0))),s}function Qt(e,t){let s=[];for(let i in t){let r={s:e[i]};r.lerp=t[i][0]-r.s,s.push({setV:(o,l)=>o[i]=l,cb:o=>r.s+r.lerp*o})}return s}function Ut(e,t,s){return t?Qt(e,s):Kt(e,s)}var x=Ut;var N=class{constructor(){this.items=[],this.id=-1}push(t){return t.id=++this.id,this.items.push(t),this.on||this.loop(),t.id}update(t){for(let s=0;s<this.items.length;s++){let i=this.items[s];if(i.d){i.st||(i.st=t);let r=(t-i.st)/(i.d*1e3),o=u(0,1,r);(i.cb(o)||o===1)&&this.kill(i.id)}else i.cb(t)}this.loop()}kill(t){this.items.map((s,i)=>{s.id===t&&(s.id=null,s.st=null,this.items.splice(i,1))})}loop(){this.items.length===0?(this.on=!1,window.cancelAnimationFrame(this.raf)):(this.on=!0,this.raf=window.requestAnimationFrame(this.update.bind(this)))}},y=new N;var L=class{constructor(){this.observers={}}obs(t){this.observers[t]={items:[],id:0};function s(){let r=this[t],o=Array.prototype.slice.call(arguments);for(let l=0;l<r.items.length;l++)r.items[l].cb(...o)}let i=r=>{this.observers[r].items=[]};return{cb:s.bind(this.observers),name:t,r:i.bind(this,t)}}add(t,s){this.observers[t]||console.error(t);let i=this.observers[t].items,r=this.observers[t].id++,o={cb:s,id:r,on:!0};return i.push(o),{item:o,r:(n=>{for(let h=0;h<i.length;h++)i[h].id==n.id&&(i[h].on=!1,i.splice(h,1))}).bind({},o)}}check(t){return!!this.observers[t]}},a=new L;function it(e){let t=document.createElement("section"),s={start:0,end:0,lerp:.75};t.style.cssText=` position: fixed; height: 32px; width: 32px; display: flex; align-items: center; justify-content: center; font-size: 12px; background: #333; color: #fff; border-radius: 50%; pointer-events: none; `,a.add("pointermove",i=>{let r=M(i.pageX/g.size.w);t.style.top=i.pageY+-30+"px",t.style.left=i.pageX+-30*r+"px",t.textContent=r,s.start=u(0,.99999,r)}),a.add("raf",()=>{s.end=c(s.start,s.end,s.lerp),e(s.end)}),document.body.appendChild(t)}var v=class{constructor({late:t,o:s,cb:i}){this.d=t||0,this.o=s,this.cb=i,this.on=!1,this.stop=!1}play(){this.on=!0,this.stop=!1,this.d==0?this.Elp():(this.id=y.push({cb:this.loop.bind(this)}),this.f=performance.now()+this.d*1e3)}destroy(){this.stop=!0,this.on=!1}loop(t){t>this.f&&(y.kill(this.id),this.Elp())}Elp(){this.stop||(this.on=!1,y.push(this.o),this.cb&&this.cb())}};function X(e){this.obj=!1,e instanceof Node?this.target=e:typeof e=="string"?this.target=d.el(e):(this.obj=!0,this.target=e)}var rt=new Map;function j(e){let t=rt.get(e);return t||(rt.set(e,this),!1)}var F=class{constructor(t,s){let i=j.call(this,t);if(!i)X.call(this,t),this.init(s);else return i}init(t){this.o=t,this.mode,this.prog=0,this.elapsed=0,this.dir=0,this.d=t.d,this.late=t.late,this.ease=m[t.ease||"l"],this.oProps=t.p,this.lateO={cb:this.run.bind(this),d:this.d},this.late=new v({late:this.late,o:this.lateO}),this.props=x(this.target,this.obj,{...this.oProps,ease:this.ease})}run(t){this.on=!0,this.elapsed=u(0,1,this.prog+t);let s=Math.abs(this.dir-this.elapsed);if(this.props.map(({setV:i,cb:r})=>i(this.target,r(s))),this.raf&&this.raf(s,this.target),this.elapsed==1)return this.destroy()}control(t,s){this.late.on&&this.mode!==t&&(this.mode=t,this.late.destroy()),this.mode!==t&&(this.mode=t,t==="r"?this.dir=1:this.dir=0,this.late.cb=()=>this.start&&this.start(this.target),!this.late.on&&(this.on?(this.lateO.st=null,s?this.prog=0:this.prog=1-this.elapsed):this.late.play()))}reverse(t){this.late.d=t.late||this.late.d,this.index===0&&(this.start=t.start,this.completed=t.completed,this.raf=t.raf),this.control("r")}play(t,s){this.index=s,this.index===0&&(this.start=t.start,this.completed=t.completed,this.raf=t.raf),g.string(this.oProps)!=g.string(t.p)?(this.late.d=t.late||0,this.lateO.d=t.d,this.oProps=t.p,this.props=x(this.target,this.obj,{...this.oProps,ease:m[t.ease]||this.ease}),this.mode="r",this.control("p",!0)):this.control("p")}destroy(){return this.on=!1,this.prog=0,this.completed&&this.completed(this.target),!0}},ot=F;function Zt(e,t){let s;e instanceof NodeList||Array.isArray(e)?s=[...e]:s=[e];let i=s.map((o,l)=>{let n=(t.late||0)+(t.space*l||0);return new ot(o,{...t,late:n})});i.map((o,l)=>o.play(t,l));let r=i.map(o=>o.late.d);return{reverse:(o={})=>{let l=(t.late||0)-o.late;i.map((n,h)=>{o.late=r[h]-l,n.reverse(o)})},play:()=>i.map((o,l)=>o.play(t,l))}}var H=Zt;var $=(e,t)=>{let s=e.match(/(\+|\-)(.*)/);if(s){if(s[1]=="+")return t+ +s[2];if(s[1]=="-")return t-+s[2]}else return+e},I=class{constructor(t,s,i){this.el=t,this.target=s.target,this.o=s,this.dir=i,this.dirE=i=="y"?"yE":"xE",this.Init(s)}Init(t){t.target||(this.target=this.el),t.scroll&&(this.ps=x(this.target,!1,{...t.p,ease:m[t.ease||"l"]})),t.pin&&(this.pin=t.pin,this.pin.target=t.pin.target||this.target),this.iresize=a.add("resize",this.resize.bind(this)),this.resize(),this.iraf=a.add(t.obsname,this.raf.bind(this))}resize(){let t=this.el.length?this.el[0]:this.el,s={y:t.offsetTop,yE:t.offsetTop+t.offsetHeight,x:t.offsetLeft,xE:t.offsetLeft+t.offsetWidth};this.o.scroll?(this.startpint=$(this.o.scroll.start||"+0",s[this.dir]),this.endpoint=$(this.o.scroll.end||"+0",s[this.dirE])):(this.startpint=$(this.o.start||"+0",s[this.dir]),this.endpoint=$(this.o.end||"+0",s[this.dirE])),this.o.pin&&(this.pin.start=$(this.pin.a||"+0",s[this.dir]),this.pin.end=$(this.pin.z||"+0",s[this.dirE]))}raf(t){this.coord=t;let s=this.startpint,i=this.endpoint;this.o.scroll?(this.scroll(P(s,i,this.coord)),this.o.pin&&this.piner(),this.o.raf&&this.o.raf(this.target,this.coord)):s<=this.coord&&this.fire()}scroll(t){this.ps.map(s=>{this.target.length?this.target.forEach(i=>s.setV(i,s.cb(t))):s.setV(this.target,s.cb(t))})}fire(){this.o.tween&&H(this.target,this.o.tween),this.o.completed&&this.o.completed(this.target),this.destroy()}piner(){if(this.pined&&!(this.coord>=this.pin.end)){let t=Y(0,this.coord-this.pin.pxS);this.pin.target.style.transform=`translate3d(${this.dir?"0px,"+t+"px":t+"px,0px"},0px)`}this.coord<this.pin.start?this.pined=!1:this.coord>=this.pin.start&&!this.pined&&(this.pin.pxS=this.coord,this.pined=!0)}destroy(){this.iraf.r(),this.iresize.r()}},lt=I;var nt=!1;function W(){if(!nt){history.scrollRestoration="manual",window.onpointerdown=a.obs("pointerdown").cb,window.onpointermove=a.obs("pointermove").cb,window.onpointerup=a.obs("pointerup").cb,window.onkeydown=a.obs("keydown").cb,window.onwheel=a.obs("wheel").cb,window.onresize=a.obs("resize").cb,y.push({cb:a.obs("raf").cb}),nt=!0;let e=d.node("div");e.setAttribute("data-overlay",""),e.style.cssText=` height: 100%; width: 100%; position: fixed; top: 0; left: 0; z-index: 999; `,document.body.appendChild(e)}}var k=class{constructor(t,s){this.target=t,this.rafCb=s.rafCb,this.ePage=s.dir=="y"?"pageY":"pageX",W(),this._init(s),this.chokeEl=d.el("[data-overlay]"),this.choke=new V({late:.3,cb:()=>b.pointer(this.chokeEl,"none")})}_init(t){Object.is(this.target,window)?(t.drag!==!1&&(this.ipointerdown=a.add("pointerdown",this._down.bind(this)),this.ipointermove=a.add("pointermove",this._move.bind(this))),t.key!==!1&&(this.ikey=a.add("keydown",this._onkey.bind(this))),t.wheel!==!1&&(this.iwheel=a.add("wheel",this._wheel.bind(this))),this.globalScroll=!0):(t.wheel!==!1&&(this.target.onwheel=this._wheel.bind(this)),t.drag!==!1&&(this.target.onpointerdown=this._down.bind(this),this.target.onpointermove=this._move.bind(this))),this.ipointerup=a.add("pointerup",this._up.bind(this)),this.dist=0,this.scroll=0,this.virtual={value:0,dir:1},this.speed={value:0,lerp:0},this.roll={value:0,virtual:0}}_wheel(t){this.rafCb();let s=t.deltaMode==1?.83:.55,i=t.wheelDeltaY*s;this.scroll-=i,this.roll.value-=i,this.virtual.dir=Math.sign(i)}_onkey(t){if(t.keyCode==40||t.keyCode==38){this.rafCb();let s=0;t.keyCode==40?s=-66.6:t.keyCode==38&&(s=66.6),this.scroll-=s,this.roll.value-=s}}_down(t){this.globalScroll&&b.pointer(this.chokeEl,"all"),this.mousedown=!0,this.dist=t[this.ePage]}_move(t){if(this.mousedown){this.rafCb();let s=t[this.ePage]-this.dist;this.scroll-=s,this.roll.value-=s,this.dist=t[this.ePage],this.virtual.dir=Math.sign(s)}}_up(){this.mousedown=!1,this.choke.run()}_destroy(){Object.is(this.target,window)?(this.ipointerdown&&(this.ipointerdown.r(),this.ipointermove.r()),this.ikey&&this.ikey.r(),this.iwheel&&this.iwheel.r()):this.o.drag!==!1&&(this.target.onpointerdown=null,this.target.onpointermove=null),this.ipointerup.r()}};var q=(e,t,s)=>{s?b.form(e,"px",0,t):b.form(e,"px",t,0)},ht=(e,t,s,i,r,o)=>{e<=s.z&&t>=s.a?(q(i,-o,r),s.out=!1):s.out||(q(i,-o,r),s.out=!0)},D=class{constructor(t,s){this.target=s.target,this.ease=s.ease||.09,this.dir=s.dir?s.dir:"y",this.isY=this.dir=="y",this.infinite=s.infinite,this.sub=a.obs(s.obs||Symbol("foo")),this.speedEase=s.speed,s.dir=this.dir,s.rafCb=this.loop.bind(this),this.time=performance.now(),this.offset=0,this.speed=0,this._$E=new k(t,s),this.iresize=a.add("resize",this.resize.bind(this)),this.iraf=a.add("raf",this.raf.bind(this)),this.resize()}loop(){this.iraf.item.on||(this.iraf=a.add("raf",this.raf.bind(this)))}add(t,s){s.obsname=this.sub.name;let i=new lt(t,s,this.dir);return this.loop(),i}raf(t){this.kids||(this._$E.scroll=u(0,this.dim,this._$E.scroll)),this._$E.virtual.value=c(this._$E.virtual.value,this._$E.scroll,this.ease),this._$E.roll.virtual=c(this._$E.roll.virtual,this._$E.roll.value,this.ease);let s=this._$E.virtual.value,i=t-this.time,r=s-this.offset;this.speed=c(this.speed,r/i,this.speedEase),this.kids?(s>this.dim?(this._$E.scroll=this._$E.scroll-this.dim,this._$E.virtual.value=s-this.dim):s<0&&(this._$E.scroll=this.dim+this._$E.scroll,this._$E.virtual.value=this.dim+s),this.kids.map(([o,l])=>{let n=s,h=n+this.s;if(s>this.dim-this.s){let f=s-(this.dim-this.s)-this.s,p=f+this.s;f<=l.z&&p>=l.a?q(o,this.s-p,this.isY):ht(n,h,l,o,this.isY,s)}else ht(n,h,l,o,this.isY,s)})):q(this.target,-s,this.isY),this.time=t,this.offset=s,this.sub&&this.sub.cb(s),M(this._$E.roll.virtual,2)==this._$E.roll.value&&this.iraf.r()}resize(){if(this.bs=_(this.target),this.infinite){let s=[...this.target.children];this.kids=s.map(i=>{let r=this.isY?i.offsetTop:i.offsetLeft,o=this.isY?i.offsetHeight:i.offsetWidth;return[i,{a:r,z:r+o}]})}let t=this.isY?"h":"w";this.s=g.size[t],this.dim=this.bs[t]-(this.kids?0:this.s),this.loop()}destroy(){this.iraf.r(),this.sub.r(),this.iresize.r(),this._$E._destroy()}},te=D;var C=" ";function ee(e,t){document.body.append(e),e.style.visibility="hidden",e.style.position="absolute",e.style.whiteSpace="nowrap",e.style.fontFamily=t.getPropertyValue("font-family"),e.style.fontSize=t.getPropertyValue("font-size"),e.style.fontWeight=t.getPropertyValue("font-weight"),e.style.textTransform=t.getPropertyValue("text-transform"),e.style.letterSpacing=t.getPropertyValue("letter-spacing"),e.style.lineHeight=t.getPropertyValue("line-height")}function at(e){let t=e.childNodes,s=[];for(let i=0;i<t.length;i++)s.push(se(t[i]));return s}function se(e){let t;return e.nodeType===3?t={value:e.nodeValue.split(" "),type:3}:t={value:at(e),type:1,node:e},t}function pt(e){for(let t=0;t<e.length;t++){let s=e[t];if(s.type===3){let i=[];for(let r=0;r<s.value.length;r++)s.value[r]=s.value[r].replace(/\n/g,""),s.value[r]!==""&&i.push(s.value[r]);s.value=i}else pt(s.value)}}function ft(e,t,s){if(s.words){let i=e.words.length,r;s.ltrs?r=e.words.reduce((o,l,n)=>{let h="";for(let f=0;f<l.length;f++)h+=S(l[f],3);return o+S(h+(n==i-1?"":C),2)},""):r=e.words.reduce((o,l,n)=>o+S(l+(n==i-1?"":C),2),""),t.push({line:S(r,1)})}else t.push({line:S(e.value,1)})}function S(e,t){if(t===1)return`<div class="tfx"><span>${e}</span></div>`;if(t===2)return`<span class="word">${e}</span>`;if(t===3)return`<span class="ltr">${e}</span>`}function ie(e,t,s,i,r,o){for(let l=0;l<e.length;l++){let n=e[l];t.value+=n,s.innerHTML=t.value,t.words.push(n),s.offsetWidth>i&&(t.words.pop(),ft(t,r,o),t.value=n,t.words=[n+C]),t.value+=C}}function re(e,t,s,i){let r={value:"",words:[]},o=[];for(let l=0;l<e.length;l++){let n=e[l];n.type===3&&ie(n.value,r,t,s,o,i)}return ft(r,o,i),o}function oe(e,t){let s=z(e),i=document.createElement("div");t.ltrs&&(t.words=!0),ee(i,s);let r=e.offsetWidth,o=at(e);pt(o);let l=re(o,i,r,t);return e.innerHTML="",document.body.removeChild(i),l.map(({line:n})=>e.innerHTML+=n),{lines:d.sEls(e,".tfx"),words:d.sEls(e,".word"),ltrs:d.sEls(e,".ltr")}}var le=oe;export{_ as bounds,V as choke,u as clamp,z as computed,b as cssSet,m as ease,xt as has,g as iSet,v as late,c as lerp,le as line,P as map,x as props,d as query,y as raf,wt as remap,M as round,te as scroll,it as scrub,a as sub,H as tween,Y as zero};
