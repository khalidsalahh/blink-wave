var V={l:t=>t,i1:t=>1-Math.cos(t*Math.PI/2),o1:t=>Math.sin(t*Math.PI/2),io1:t=>-(Math.cos(Math.PI*t)-1)/2,i2:t=>Math.pow(t,2),o2:t=>1-(1-t)*(1-t),io2:t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,i3:t=>Math.pow(t,3),o3:t=>1-Math.pow(1-t,3),io3:t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,i4:t=>Math.pow(t,4),o4:t=>1-Math.pow(1-t,4),io4:t=>t<.5?8*t*t*t*t:1-Math.pow(-2*t+2,4)/2,i5:t=>Math.pow(t,5),o5:t=>1-Math.pow(1-t,5),io5:t=>t<.5?16*Math.pow(t,5):1-Math.pow(-2*t+2,5)/2,i6:t=>0===t?0:Math.pow(2,10*t-10),o6:t=>1===t?1:1-Math.pow(2,-10*t),io6:t=>0===t?0:1===t?1:t<.5?Math.pow(2,20*t-10)/2:(2-Math.pow(2,-20*t+10))/2,i7:t=>1-Math.sqrt(1-Math.pow(t,2)),o7:t=>sqrt(1-Math.pow(t-1,2)),io7:t=>t<.5?(1-Math.sqrt(1-Math.pow(2*t,2)))/2:(Math.sqrt(1-Math.pow(-2*t+2,2))+1)/2},g=(t,s,e)=>Math.min(Math.max(t,e),s),y=(t,s,e)=>(1-e)*t+e*s,R=(t,s,e)=>g(0,1,(e-t)/(s-t)),et=(t,s,e,i,h)=>R(t,s,h)*(i-e)+e,st=(t,s)=>{s=s?Math.pow(10,s):100;return Math.round(t*s)/s},it=(t,s)=>window.hasOwnProperty.call(t,s),x=t=>{t=t.getBoundingClientRect();return{w:t.width,h:t.height,t:t.top,b:t.bottom,l:t.left,r:t.right}},N=t=>window.getComputedStyle(t),D=t=>{let s,e,i;if("object"!=typeof t||null===t)return t;for(i in s=Array.isArray(t)?[]:{},t)e=t[i],s[i]=D(e);return s},M={o:(t,s)=>t.style.opacity=s,d:(t,s)=>t.style.display=s,p:(t,s)=>t.style.pointerEvents=s,id:t=>document.getElementById(t),el:t=>document.querySelector(t),els:t=>document.querySelectorAll(t)},Y=class{constructor(){this.store=new Map}set(t,s){this.store.set(t,s)}get(t){return this.store.get(t)}},q=Y,X=class{constructor(){this.subs={}}obs(t){return this.subs[t]={items:[]},{cb:function(){var s=this[t],e=Array.prototype.slice.call(arguments);for(let t=0;t<s.items.length;t++)s.items[t].cb(...e)}.bind(this.subs),name:t}}add(t,s){let e=this.subs[t].items;return e.push({cb:s,id:e.length+1}),{r:(t=>{for(;0<e.length;e++)e[0].id===t&&e.splice(e,1)}).bind({},e.length)}}check(t){return!!this.subs[t]}},c=new X,k=class{constructor({late:t,cb:s}){this.late=1e3*t,this.cb=s,this.time=0}run(){clearTimeout(this.time),this.time=setTimeout(this.cb,this.late)}},O=class{constructor({late:t,o:s,cb:e}){this.d=t||0,this.o=s,this.cb=e,this.on=!1,this.stop=!1}play(){this.on=!0,this.stop=!1,0==this.d?this.Elp():(this.id=S.push({cb:this.run.bind(this)}),this.f=performance.now()+1e3*this.d)}kill(){this.stop=!0,this.on=!1}run(t){t>this.f&&(S.kill(this.id),this.Elp())}Elp(){this.stop||(this.on=!1,S.push(this.o),this.cb&&this.cb())}},L=class{constructor(){this.items=[],this.on=!1,this.id=-1}push(t){return 0==t.d?void t.cb(1):(t.id=++this.id,this.items.push(t),this.on||this.loop(),t.id)}update(s){for(let t=0;t<this.items.length;t++){var e,i=this.items[t];i.d?(i.st||(i.st=s),e=(s-i.st)/(1e3*i.d),e=g(0,1,e),!i.cb(e)&&1!=e||this.kill(i.id)):i.cb(s)}this.loop()}kill(e){this.items.map((t,s)=>{t.id===e&&(t.id=null,t.st=null,this.items.splice(s,1))})}loop(){0===this.items.length?(this.on=!1,window.cancelAnimationFrame(this.raf)):(this.on=!0,this.raf=window.requestAnimationFrame(this.update.bind(this)))}},S=new L;async function rt(t){try{var s="json"==t.type,e=new Request(t.url,{headers:new Headers({"Content-type":s?"text/html":"application/x-ww-form-urlencodeed"}),method:s?"POST":"GET",mode:"same-origin"}),i=(t.body&&(e.body=t.body),await(await fetch(e))[s?"json":"text"]());t.cb({url:t.url,parser:i})}catch(t){console.error(t.message)}}var ht=rt;function lt(t,s){for(var e in s)e.match(/^on/)?t.addEventListener(e.match(/[A-Z](.*)/)[0].toLowerCase(),s[e]):t.setAttribute(e,s[e])}function P(t){let s;return"string"==typeof t||"number"==typeof t?s=document.createTextNode(t):(s=document.createElement(t.type),t.props&&lt(s,t.props),t.content&&("string"==typeof t.content||"number"==typeof t.content?s.appendChild(P(t.content)):t.content.map(P).forEach(s.appendChild.bind(s)))),s}function ot(t,s={}){return t.appendChild(P(s))}var at=ot,T={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},nt=/([astvzqmhlc])([^astvzqmhlc]*)/gi,pt=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;function J(t){let h=[];return t.replace(nt,function(t,s,e){let i=s.toLowerCase();for(e=dt(e),"m"==i&&2<e.length&&(h.push([s].concat(e.splice(0,2))),i="l",s="m"==s?"l":"L");;){if(e.length==T[i])return e.unshift(s),h.push(e);if(e.length<T[i])throw new Error("malformed path data");h.push([s].concat(e.splice(0,T[i])))}}),h}function dt(t){t=t.match(pt);return t?t.map(Number):[]}var W=t=>{var s=[],e=t.split(" "),i=e.length;for(let t=0;t<i;t++){var h=e[t].split(","),r=h.length;for(let t=0;t<r;t++){var o=h[t];s.push(isNaN(o)?o:+o)}}return s},ft={t:(t,s,e,i,h,r,o)=>{let a,l,n,p,d,c,u=o.transform,m;return 6<u.length&&(m=u.match(/\((.+)\)$/)[1].split(", ")),p=m?(a={s:!t||"px"===t[1]?+m[4]:+m[4]/parseFloat(o.width)*100,e:t?t[0]:+m[4],unit:t[1]||"px"},l={s:!s||"px"===s[1]?+m[5]:+m[5]/parseFloat(o.height)*100,e:s?s[0]:+m[5],unit:s[1]||"px"},n={s:+m[0],e:e?e[0]:+m[0]},{s:+m[3],e:i?i[0]:+m[3]}):(a={s:0,e:t[0]||0,unit:t[1]||"px"},l={s:0,e:s[0]||0,unit:s[1]||"px"},n={s:1,e:e?e[0]:1},{s:1,e:i?i[0]:1}),d={s:h?h[0]:0,e:h?h[1]:0},c={s:r?r[0]:0,e:r?r[1]:0},a.lerp=a.e-a.s,l.lerp=l.e-l.s,n.lerp=n.e-n.s,p.lerp=p.e-p.s,d.lerp=d.e-d.s,c.lerp=c.e-c.s,h||r?t=>{return`translate(${""+(a.s+a.lerp*t)+a.unit}, ${""+(l.s+l.lerp*t)+l.unit}) scale(${""+(n.s+n.lerp*t)}, ${""+(p.s+p.lerp*t)}) rotateX(${d.s+d.lerp*t+"deg"}) rotateY(${c.s+c.lerp*t+"deg"})`}:t=>{return`translate(${""+(a.s+a.lerp*t)+a.unit}, ${""+(l.s+l.lerp*t)+l.unit}) scale(${""+(n.s+n.lerp*t)}, ${""+(p.s+p.lerp*t)})`}},o:(t,s)=>{let e={s:+s.opacity,e:t[0]};return e.lerp=e.e-e.s,t=>""+(e.s+e.lerp*t)},dash:(t,s)=>{let e={s:parseFloat(s.strokeDashoffset),e:t[0]};return e.lerp=e.e-e.s,t=>""+(e.s+e.lerp*t)},points(t,s){let h=W(s.el.getAttribute("points")),r=W(t[0]);return s=>{let e="",i="";for(let t=0;t<h.length;t++)e+=y(h[t],r[t],s)+" ",i=e.trim();return i}},d:(t,s)=>{let o=J(s.el.getAttribute("d")),a=J(t[0]);return s=>{let e="",i="";for(let t=0;t<o.length;t++){var h=o[t],r=a[t];for(let t=0;t<h.length;t++)e+=(isNaN(h[t])?h[t]:y(h[t],r[t],s))+" ";i=e.trim()}return i}},top:(t,s)=>{let e;var i;return(e="auto"==s.top?{s:0,e:t[0],unit:t[1]||"px"}:(i=parseFloat(s.top),{s:"px"==t[1]?i:i/x(s.pa).h*100,e:t[0],unit:t[1]||"px"})).lerp=e.e-e.s,t=>""+(e.s+e.lerp*t)+e.unit}},$=ft;function v(s,t,e){var i=[];if(t)for(var h in e){let t=e[h],s={s:t[0],lerp:t[1]-t[0]};i.push({name:h,cb:t=>s.s+s.lerp*t})}else{var r,o,a,l,n,p,d,c,u,m,w,t=N(s);t.el=s,t.pa=s.parentNode,r=e.x||!1,o=e.y||!1,l=e.sx||!1,n=e.sy||!1,p=e.rx||!1,d=e.ry||!1,a=e.o||!1,c=e.dash||!1,u=e.points||!1,m=e.d||!1,w=e.t||!1,(r||o||l||n||p||d)&&i.push({setV:t=>s.style.transform=t,cb:$.t(r,o,l,n,p,d,t)}),a&&i.push({setV:t=>s.style.opacity=t,cb:$.o(a,t)}),c&&i.push({setV:t=>s.style.strokeDashoffset=t,cb:$.dash(c,t)}),u&&i.push({setV:t=>s.setAttribute("points",t),cb:$.points(u,t)}),m&&i.push({setV:t=>s.setAttribute("d",t),cb:$.d(m,t)}),w&&i.push({setV:t=>s.style.top=t,cb:$.top(w,t)})}return i}function j(t){this.obj=!1,"string"==typeof t?this.target=M.el(t):(t instanceof Node||(this.obj=!0),this.target=t)}var B=class{constructor(t,s){j.call(this,t),this.o=s,this.mode,this.prog=0,this.elp=0,this.to()}to(){this.d=this.o.d,this.late=this.o.late,this.ease=V[this.o.ease]||V.l,this.ps=this.o.p,this.cbO={cb:this.run.bind(this),d:this.d},this.late=new O({late:this.late,o:this.cbO}),this.results=v(this.target,this.obj,this.ps)}run(t){if(this.on=!0,this.ti=this.prog+t,this.elp=g(0,1,this.ti),this.e=Math.abs(this.dir-this.ease(this.elp)),this.results.map(t=>{var s=t.cb(this.e);this.obj?this.target[t.name]=s:t.setV(s)}),this.raf&&this.raf(this.e,this.target),1===this.elp)return this.kill()}control(t,s){this.late.on&&this.mode!=t&&(this.mode=t,this.late.kill()),this.mode==t&&!this.obj||("r"==(this.mode=t)?(this.dir=1,this.late.cb=null):(this.dir=0,this.late.cb=()=>this.start&&this.start(this.target)),this.late.on)||(this.on?(this.cbO.st=null,this.prog=s?0:1-this.elp):this.late.play())}reverse(t){this.late.d="number"==typeof t?t:this.late.d,this.control("r")}kill(){return this.on=!1,this.prog=0,this.completed&&"p"==this.mode&&this.completed(this.target),!0}play(t){this.start=t.start,this.completed=t.completed,this.raf=t.raf,JSON.stringify(this.ps)!=JSON.stringify(t.p)?(this.late.d=t.late||0,this.cbO.d=t.d,this.ease=V[t.ease]||this.ease,this.ps=t.p,this.results=v(this.target,this.obj,this.ps),this.mode="r",this.control("p",!0)):this.control("p")}},G=B,Z=new q;function _(t,s){let e=Z.get(t),i=e;return e||(i=new G(t,s),Z.set(t,i)),{reverse:t=>i.reverse(t),play:t=>i.play(t),item:t,tween:i,obj:s}}function ut(t,h){if(t instanceof NodeList||Array.isArray(t)){let s=[...t].map((t,s)=>{s=(h.late||0)+(h.stagger||0)*s;return _(t,{...h,late:s})}),i=(s.map(({play:t,obj:s},e)=>{e=0==e;t({...s,start:e&&h.start,raf:e&&h.raf,completed:e&&h.completed})}),s.map(t=>t.tween.late.d));return{reverse:(t=0)=>{let e=(h.late||0)-t;s.reverse().map(({reverse:t},s)=>t(i[s]-e))},play:()=>s.map(({play:t})=>t(h))}}return(t=_(t,h)).play(h),t}var E=ut;function ct(t,s,e,i){var h=this.its[this.id-1],h=h?(h.late||0)+h.d:0,h=(s.late||0)+h+e,t=E(t,{...s,late:h},i);0==this.id&&(this.fl=s.late),this.its.push({tween:t,late:h,d:s.d,t:e})}var I=class{constructor(){this.its=[],this.id=-1,this.fl=0}to(t,s,e=0){if(t&&s)return++this.id,ct.call(this,t,s,e),this}reverse(){this.id=-1;let i=this.its.length-1;this.its.map(({tween:t,t:s},e)=>{t.reverse(this.its[i-e].late-this.fl-s)}),this.its=[]}},mt=I,F=class{constructor(t,s,e,i){this.sub=e,this.id=c.add(e,this.raf.bind(this)),this.iresize=c.add("resize",this.resize.bind(this)),this.o=s,this.el=t,this.dir=i,this.d=i?"y":"x",s.t&&(this.ps=v(s.t,!1,s.o.p)),this.resize()}raf(t){var s,e,i;this.ps?(e=("number"==typeof this.o.s?this.o.s:.2)*this.l,s=t[this.d]+this.l,i=this.p-e,e=this.si+e+this.l,this.scroll(R(i,e,s)),i<=s&&(this.in=!0),e<=s&&(this.in=!1)):(i=t[this.d]+this.l,(this.o.s||0)/100*this.l+this.p<=i&&this.fire())}fire(){E(this.o.t||this.el,this.o.o),this.o.cb&&this.o.cb(),this.id.r()}scroll(s){this.in&&(this.o.raf&&this.o.raf(s),this.ps.map(t=>this.o.t.style[t.name]=t.cb(s)))}resize(){this.b=x(this.el),this.dir?(this.p=this.b.t,this.si=this.b.b):(this.p=this.b.l,this.si=this.b.r),this.l=this.dir?window.innerHeight:window.innerWidth}},K=F;function Q(t,s){return t.prev=t.e,t.e=s,-(t.e-t.s)}var H=class{constructor(t,s={}){history.scrollRestoration="manual",this.el=t,this.target=s.target||window,this.d=s.type,this.ease=s.ease||.1,this.dir=null==s.dir,this.dragOn=s.drag||!0,this.wheelOn=s.wheel||!0,this.lerp={x:0,y:0},this.plerp={x:0,y:0},this.wheel={x:0,y:0},this.dist={x:0,y:0},this.distance={x:0,y:0},this.drag={x:{s:0,e:0,sp:0,ep:0},y:{s:0,e:0,sp:0,ep:0}},this.target instanceof Node?(s.drag&&(this.target.onpointerdown=this.down.bind(this),this.target.onpointermove=this.move.bind(this),this.target.onpointerup=this.up.bind(this)),s.wheel&&(this.target.onwheel=this.ewheel.bind(this))):(this.dragOn&&(this.ipointerdown=c.add("pointerdown",this.down.bind(this)),this.ipointermove=c.add("pointermove",this.move.bind(this)),this.ipointerup=c.add("pointerup",this.up.bind(this))),this.wheelOn&&(this.iwheel=c.add("wheel",this.ewheel.bind(this)))),this.iresize=c.add("resize",this.resize.bind(this)),this.iraf=c.add("raf",this.raf.bind(this)),this.iscroll=c.obs("scroll"),this.idist=c.obs("idist"),this.all=document.getElementById("all"),this.throttle=new k({late:.3,cb:()=>M.p(this.all,"none")}),this.resize()}ewheel(t){this.lerp.x+=t.deltaY*this.ease*7,this.lerp.y+=t.deltaY*this.ease*7,M.p(this.all,"all"),this.throttle.run()}down(t){this.drag.y.s=t.pageY,this.drag.x.s=t.pageX,this.dn=!0,this.plerp.y=this.lerp.y,this.plerp.x=this.lerp.x}move(t){this.dn&&(M.p(this.all,"all"),this.throttle.run(),this.dir?this.lerp.y=Q(this.drag.y,t.pageY)+this.plerp.y:this.lerp.x=Q(this.drag.x,t.pageX)+this.plerp.x)}up(){this.dn=!1}add(t,s){new K(t,s,this.iscroll.name,this.dir)}raf(){var t=this.bounds.w-window.innerWidth,s=this.bounds.h-window.innerHeight;this.dist.x=this.lerp.x,this.dist.y=this.lerp.x,this.lerp.x=g(0,t<0?0:t,this.lerp.x),this.lerp.y=g(0,s<0?0:s,this.lerp.y),this.distance.x=y(this.distance.x,this.dist.x,this.ease),this.distance.y=y(this.distance.x,this.dist.x,this.ease),this.wheel.x=y(this.wheel.x,this.lerp.x,this.ease),this.wheel.y=y(this.wheel.y,this.lerp.y,this.ease),this.dir?this.el.style.transform=`translateY(${-this.wheel.y}px)`:this.el.style.transform=`translateX(${-this.wheel.x}px)`,this.iscroll.cb(this.wheel),this.idist.cb(this.distance)}resize(){this.bounds=x(this.el)}destroy(){this.iresize.r(),this.iraf.r(),this.iscroll.r(),this.idist.r(),this.target instanceof Node?(this.dragOn&&(this.target.onmousedown=null,this.target.onmousemove=null,this.target.onmouseup=null),this.wheelOn&&(this.target.onwheel=null)):(this.dragOn&&(this.ipointerdown.r(),this.ipointermove.r(),this.ipointerup.r()),this.wheelOn&&this.iwheel.r())}},wt=H;export{x as Bounds,g as Clamp,N as Computed,V as Ease,it as Has,O as Late,y as Lerp,at as Mount,v as Props,S as Raf,R as Remap,st as Round,ht as Route,wt as Scroll,q as Store,c as Sub,mt as TL,k as Throttle,E as Tween,D as deepCopy,et as iRemap,M as iSet};