function wt(n,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}
/*!
 * Splide.js
 * Version  : 3.1.6
 * License  : MIT
 * Copyright: 2021 Naotoshi Fujita
 */
var n,t;n=this,t=function(){"use strict";var m="splide",a="data-"+m,n={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,DESTROYED:5},P=10;function _(n){n.length=0}function W(n){return!u(n)&&"object"==typeof n}function r(n){return Array.isArray(n)}function D(n){return"string"==typeof n}function M(n){return void 0===n}function u(n){return null===n}function y(n){return n instanceof HTMLElement}function w(n){return r(n)?n:[n]}function b(n,t){w(n).forEach(t)}function x(n,t){return-1<n.indexOf(t)}function k(n,t){return n.push.apply(n,w(t)),n}var o=Array.prototype;function s(n,t,i){return o.slice.call(n,t,i)}function A(t,n,i){t&&b(n,function(n){n&&t.classList[i?"add":"remove"](n)})}function L(n,t){A(n,D(t)?t.split(" "):t,!0)}function E(n,t){b(t,n.appendChild.bind(n))}function z(n,i){b(n,function(n){var t=i.parentNode;t&&t.insertBefore(n,i)})}function S(n,t){return(n.msMatchesSelector||n.matches).call(n,t)}function R(n,t){return n?s(n.children).filter(function(n){return S(n,t)}):[]}function O(n,t){return t?R(n,t)[0]:n.firstElementChild}function e(n,t){if(n)for(var i=Object.keys(n),r=0;r<i.length;r++){var u=i[r];if("__proto__"!==u&&!1===t(n[u],u))break}return n}function T(r){return s(arguments,1).forEach(function(i){e(i,function(n,t){r[t]=i[t]})}),r}function l(i,n){return e(n,function(n,t){r(n)?i[t]=n.slice():W(n)?i[t]=l(W(i[t])?i[t]:{},n):i[t]=n}),i}function F(t,n){t&&b(n,function(n){t.removeAttribute(n)})}function I(i,n,t){W(n)?e(n,function(n,t){I(i,t,n)}):u(t)?F(i,n):i.setAttribute(n,String(t))}function j(n,t,i){n=document.createElement(n);return t&&(D(t)?L:I)(n,t),i&&E(i,n),n}function C(n,t,i){if(M(i))return getComputedStyle(n)[t];u(i)||(n=n.style)[t]!==(i=""+i)&&(n[t]=i)}function N(n,t){C(n,"display",t)}function X(n,t){return n.getAttribute(t)}function B(n,t){return n&&n.classList.contains(t)}function G(n){return n.getBoundingClientRect()}function H(n){b(n,function(n){n&&n.parentNode&&n.parentNode.removeChild(n)})}function Y(n){return O((new DOMParser).parseFromString(n,"text/html").body)}function U(n,t){n.preventDefault(),t&&(n.stopPropagation(),n.stopImmediatePropagation())}function q(n,t){return n&&n.querySelector(t)}function J(n,t){return s(n.querySelectorAll(t))}function K(n,t){A(n,t,!1)}function V(n){return D(n)?n:n?n+"px":""}function Q(n,t){if(void 0===t&&(t=""),!n)throw new Error("["+m+"] "+t)}function c(n){setTimeout(n)}function Z(){}function v(n){return requestAnimationFrame(n)}var $=Math.min,nn=Math.max,tn=Math.floor,rn=Math.ceil,un=Math.abs;function on(n,t,i,r){var u=$(t,i),i=nn(t,i);return r?u<n&&n<i:u<=n&&n<=i}function en(n,t,i){var r=$(t,i),i=nn(t,i);return $(nn(r,n),i)}function cn(n){return(0<n)-(n<0)}function fn(t,n){return b(n,function(n){t=t.replace("%s",""+n)}),t}function an(n){return n<10?"0"+n:""+n}var sn={};function f(){var o={};function r(n,r){t(n,function(n,t){var i=o[n];o[n]=i&&i.filter(function(n){return n.n?n.n!==r:r||n.t!==t})})}function t(n,t){w(n).join(" ").split(" ").forEach(function(n){n=n.split(".");t(n[0],n[1])})}return{on:function(n,i,r,u){void 0===u&&(u=P),t(n,function(n,t){o[n]=o[n]||[],k(o[n],{i:n,r:i,t:t,u:u,n:r}).sort(function(n,t){return n.u-t.u})})},off:r,offBy:function(i){e(o,function(n,t){r(t,i)})},emit:function(n){var t=arguments;(o[n]||[]).forEach(function(n){n.r.apply(n,s(t,1))})},destroy:function(){o={}}}}var ln="mounted",dn="move",vn="moved",hn="click",pn="active",gn="inactive",mn="visible",yn="hidden",wn="slide:keydown",_n="refresh",bn="updated",xn="resize",kn="resized",An="repositioned",Ln="scrolled",d="destroy",p="lazyload:loaded";function En(n){var r=n.event,u={},o=[];function t(n,t,r){e(n,t,function(t,i){o=o.filter(function(n){return!!(n[0]!==t||n[1]!==i||r&&n[2]!==r)||(t.removeEventListener(i,n[2],n[3]),!1)})})}function e(n,t,i){b(n,function(n){n&&t.split(" ").forEach(i.bind(null,n))})}function i(){o=o.filter(function(n){return t(n[0],n[1])}),r.offBy(u)}return r.on(d,i,u),{on:function(n,t,i){r.on(n,t,u,i)},off:function(n){r.off(n,u)},emit:r.emit,bind:function(n,t,i,r){e(n,t,function(n,t){o.push([n,t,i,r]),n.addEventListener(t,i,r)})},unbind:t,destroy:i}}function zn(t,i,r,u){var o,n,e=Date.now,c=0,f=!0,a=0;function s(){if(!f){var n=e()-o;if(t<=n?(c=1,o=e()):c=n/t,r&&r(c),1===c&&(i(),u&&++a>=u))return l();v(s)}}function l(){f=!0}function d(){cancelAnimationFrame(n),f=!(n=c=0)}return{start:function(n){n||d(),o=e()-(n?c*t:0),f=!1,v(s)},rewind:function(){o=e(),c=0,r&&r(c)},pause:l,cancel:d,isPaused:function(){return f}}}function h(n){var t=n;return{set:function(n){t=n},is:function(n){return x(w(n),t)}}}function Sn(i,r){var u;return function(){var n=arguments,t=this;u||(u=zn(r||0,function(){i.apply(t,n),u=null},null,1)).start()}}var g={marginRight:["marginBottom","marginLeft"],autoWidth:["autoHeight"],fixedWidth:["fixedHeight"],paddingLeft:["paddingTop","paddingRight"],paddingRight:["paddingBottom","paddingLeft"],width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:["ArrowUp","ArrowRight"],ArrowRight:["ArrowDown","ArrowLeft"]};var Rn=m,Pn=m+"__slider",Dn=m+"__track",Mn=m+"__list",On=m+"__slide",Tn=On+"--clone",Fn=On+"__container",In=m+"__arrows",t=m+"__arrow",jn=t+"--prev",Wn=t+"--next",i=m+"__pagination",Cn=m+"__progress",Nn=Cn+"__bar",Xn=m+"__autoplay",Bn=m+"__play",Gn=m+"__pause",Hn="is-active",Yn="is-prev",Un="is-next",qn="is-visible",Jn="is-loading",Kn=[Hn,qn,Yn,Un,Jn];var Vn="role",Qn="aria-controls",Zn="aria-current",$n="aria-label",nt="aria-hidden",tt="tabindex",it="aria-orientation",rt=[Vn,Qn,Zn,$n,nt,it,tt,"disabled"],ut="slide",ot="loop",et="fade";function ct(u,r,i,o){var e,n=En(u),c=n.on,f=n.emit,a=n.bind,t=n.destroy,s=u.Components,l=u.root,d=u.options,v=d.isNavigation,h=d.updateOnMove,p=s.Direction.resolve,g=X(o,"style"),m=-1<i,y=O(o,"."+Fn),w=d.focusableNodes&&J(o,d.focusableNodes);function _(){var n;e||(n=u.index,b.call(this,x()),function(n){var t=!n&&!x();I(o,nt,t||null),I(o,tt,!t&&d.slideFocus?0:null),w&&w.forEach(function(n){I(n,tt,t?-1:null)});n!==B(o,qn)&&(A(o,qn,n),f(n?mn:yn,this))}.call(this,function(){if(u.is(et))return x();var n=G(s.Elements.track),t=G(o),i=p("left"),r=p("right");return tn(n[i])<=rn(t[i])&&tn(t[r])<=rn(n[r])}()),A(o,Yn,r===n-1),A(o,Un,r===n+1))}function b(n){n!==B(o,Hn)&&(A(o,Hn,n),v&&I(o,Zn,n||null),f(n?pn:gn,this))}function x(){return u.index===r}return{index:r,slideIndex:i,slide:o,container:y,isClone:m,mount:function(){var t=this;!function(){m||(o.id=l.id+"-slide"+an(r+1));{var n,t;v&&(t=m?i:r,n=fn(d.i18n.slideX,t+1),t=u.splides.map(function(n){return n.root.id}).join(" "),I(o,$n,n),I(o,Qn,t),I(o,Vn,"menuitem"))}}(),a(o,"click keydown",function(n){f("click"===n.type?hn:wn,t,n)}),c([_n,An,vn,Ln],_.bind(this)),h&&c(dn,function(n,t,i){e||(_.call(this),i===r&&b.call(this,!0))}.bind(this))},destroy:function(){e=!0,t(),K(o,Kn),F(o,rt),I(o,"style",g)},style:function(n,t,i){C(i&&y||o,n,t)},isWithin:function(n,t){return n=un(n-r),(n=!u.is(ut)&&!m?$(n,u.length-n):n)<=t}}}var ft="touchmove mousemove",at="touchend touchcancel mouseup";var st=["Left","Right","Up","Down"];var lt=a+"-lazy",dt=lt+"-srcset",vt="["+lt+"], ["+dt+"]";var ht=[" ","Enter","Spacebar"];var pt=Object.freeze({__proto__:null,Options:function(t,n,r){var u,o,i,e=Sn(f);function c(n){n&&removeEventListener("resize",e)}function f(){var n,n=(n=function(n){return n[1].matches},s(o).filter(n)[0]||[]);n[0]!==i&&function(n){n=r.breakpoints[n]||u;n.destroy?(t.options=u,t.destroy("completely"===n.destroy)):(t.state.is(5)&&(c(!0),t.mount()),t.options=n)}(i=n[0])}return{setup:function(){try{l(r,JSON.parse(X(t.root,a)))}catch(n){Q(!1,n.message)}u=l({},r);var i,n=r.breakpoints;n&&(i="min"===r.mediaQuery,o=Object.keys(n).sort(function(n,t){return i?+t-+n:+n-+t}).map(function(n){return[n,matchMedia("("+(i?"min":"max")+"-width:"+n+"px)")]}),f())},mount:function(){o&&addEventListener("resize",e)},destroy:c}},Direction:function(n,t,r){return{resolve:function(n,t){var i=r.direction;return g[n]["rtl"!==i||t?"ttb"===i?0:-1:1]||n},orient:function(n){return n*("rtl"===r.direction?1:-1)}}},Elements:function(n,t,i){var r,u,o,e,c=En(n).on,f=n.root,a={},s=[];function l(){var n;!function(){u=O(f,"."+Pn),o=q(f,"."+Dn),e=O(o,"."+Mn),Q(o&&e,"A track/list element is missing."),k(s,R(e,"."+On+":not(."+Tn+")"));var n=p("."+Xn),t=p("."+In);T(a,{root:f,slider:u,track:o,list:e,slides:s,arrows:t,autoplay:n,prev:q(t,"."+jn),next:q(t,"."+Wn),bar:q(p("."+Cn),"."+Nn),play:q(n,"."+Bn),pause:q(n,"."+Gn)})}(),n=f.id||function(n){return""+n+an(sn[n]=(sn[n]||0)+1)}(m),f.id=n,o.id=o.id||n+"-track",e.id=e.id||n+"-list",L(f,r=g())}function d(){[f,o,e].forEach(function(n){F(n,"style")}),_(s),K(f,r)}function v(){d(),l()}function h(){K(f,r),L(f,r=g())}function p(n){return O(f,n)||O(u,n)}function g(){return[Rn+"--"+i.type,Rn+"--"+i.direction,i.drag&&Rn+"--draggable",i.isNavigation&&Rn+"--nav",Hn]}return T(a,{setup:l,mount:function(){c(_n,v,P-2),c(bn,h)},destroy:d})},Slides:function(r,u,o){var n=En(r),t=n.on,e=n.emit,c=n.bind,f=(n=u.Elements).slides,a=n.list,s=[];function i(){f.forEach(function(n,t){v(n,t,-1)})}function l(){p(function(n){n.destroy()}),_(s)}function d(){l(),i()}function v(n,t,i){n=ct(r,t,i,n);n.mount(),s.push(n)}function h(n){return n?g(function(n){return!n.isClone}):s}function p(n,t){h(t).forEach(n)}function g(t){return s.filter("function"==typeof t?t:function(n){return D(t)?S(n.slide,t):x(w(t),n.index)})}return{mount:function(){i(),t(_n,d),t([ln,_n],function(){s.sort(function(n,t){return n.index-t.index})})},destroy:l,register:v,get:h,getIn:function(n){var t=u.Controller,i=t.toIndex(n),r=t.hasFocus()?1:o.perPage;return g(function(n){return on(n.index,i,i+r-1)})},getAt:function(n){return g(n)[0]},add:function(n,u){b(n,function(n){var t,i,r;y(n=D(n)?Y(n):n)&&((t=f[u])?z(n,t):E(a,n),L(n,o.classes.slide),n=n,i=e.bind(null,xn),n=J(n,"img"),(r=n.length)?n.forEach(function(n){c(n,"load error",function(){--r||i()})}):i())}),e(_n)},remove:function(n){H(g(n).map(function(n){return n.slide})),e(_n)},forEach:p,filter:g,style:function(t,i,r){p(function(n){n.style(t,i,r)})},getLength:function(n){return(n?f:s).length},isEnough:function(){return s.length>o.perPage}}},Layout:function(n,t,i){var r,u=En(n),o=u.on,e=u.bind,c=u.emit,f=t.Slides,a=t.Direction.resolve,s=(t=t.Elements).track,l=t.list,d=f.getAt;function v(){r="ttb"===i.direction,C(n.root,"maxWidth",V(i.width)),C(s,a("paddingLeft"),p(!1)),C(s,a("paddingRight"),p(!0)),h()}function h(){C(s,"height",function(){var n="";r&&(Q(n=g(),"height or heightRatio is missing."),n="calc("+n+" - "+p(!1)+" - "+p(!0)+")");return n}()),f.style(a("marginRight"),V(i.gap)),f.style("width",(i.autoWidth?"":V(i.fixedWidth)||(r?"":m()))||null),f.style("height",V(i.fixedHeight)||(r?i.autoHeight?"":m():g())||null,!0),c(kn)}function p(n){var t=i.padding,n=a(n?"right":"left",!0);return t&&V(t[n]||(W(t)?0:t))||"0px"}function g(){return V(i.height||G(l).width*i.heightRatio)}function m(){var n=V(i.gap);return"calc((100%"+(n&&" + "+n)+")/"+(i.perPage||1)+(n&&" - "+n)+")"}function y(n,t){var i=d(n);if(i){n=G(i.slide)[a("right")],i=G(l)[a("left")];return un(n-i)+(t?0:w())}return 0}function w(){var n=d(0);return n&&parseFloat(C(n.slide,a("marginRight")))||0}return{mount:function(){v(),e(window,"resize load",Sn(c.bind(this,xn))),o([bn,_n],v),o(xn,h)},listSize:function(){return G(l)[a("width")]},slideSize:function(n,t){return(n=d(n||0))?G(n.slide)[a("width")]+(t?0:w()):0},sliderSize:function(){return y(n.length-1,!0)-y(-1,!0)},totalSize:y,getPadding:function(n){return parseFloat(C(s,a("padding"+(n?"Right":"Left"),!0)))||0}}},Clones:function(c,n,f){var t,i=En(c),r=i.on,u=i.emit,a=n.Elements,s=n.Slides,o=n.Direction.resolve,l=[];function e(){(t=p())&&(function(u){var o=s.get().slice(),e=o.length;if(e){for(;o.length<u;)k(o,o);k(o.slice(-u),o.slice(0,u)).forEach(function(n,t){var i=t<u,r=function(n,t){n=n.cloneNode(!0);return L(n,f.classes.clone),n.id=c.root.id+"-clone"+an(t+1),n}(n.slide,t);i?z(r,o[0].slide):E(a.list,r),k(l,r),s.register(r,t-u+(i?0:e),n.index)})}}(t),u(xn))}function d(){H(l),_(l)}function v(){d(),e()}function h(){t<p()&&u(_n)}function p(){var n,t,i=f.clones;return c.is(ot)?i||(n=a.list,D(t=f[o("fixedWidth")])&&(t=G(n=j("div",{style:"width: "+t+"; position: absolute;"},n)).width,H(n)),i=((t=t)&&rn(G(a.track)[o("width")]/t)||f[o("autoWidth")]&&c.length||f.perPage)*(f.drag?(f.flickMaxPages||1)+1:2)):i=0,i}return{mount:function(){e(),r(_n,v),r([bn,xn],h)},destroy:d}},Move:function(c,f,a){var s,n=En(c),t=n.on,l=n.emit,r=(n=f.Layout).slideSize,i=n.getPadding,u=n.totalSize,o=n.listSize,e=n.sliderSize,d=(n=f.Direction).resolve,v=n.orient,h=(n=f.Elements).list,p=n.track;function g(){f.Scroll.cancel(),m(c.index),l(An)}function m(n){y(_(n,!0))}function y(n,t){c.is(et)||(h.style.transform="translate"+d("X")+"("+(t?n:function(n){{var t,i;!s&&c.is(ot)&&(i=v(n-b()),t=A(!1,n)&&i<0,i=A(!0,n)&&0<i,(t||i)&&(n=w(n,i)))}return n}(n))+"px)")}function w(n,t){var i=n-x(t),t=e();return n-=cn(i)*t*rn(un(i)/t)}function _(n,t){var i,i=v(u(n-1)-(i=n,"center"===(n=a.focus)?(o()-r(i,!0))/2:+n*r(i)||0));return t?function(n){a.trimSpace&&c.is(ut)&&(n=en(n,0,v(e()-o())));return n}(i):i}function b(){var n=d("left");return G(h)[n]-G(p)[n]+v(i(!1))}function x(n){return _(n?f.Controller.getEnd():0,!!a.trimSpace)}function k(){return!!s}function A(n,t){t=M(t)?b():t;var i=!0!==n&&v(t)<v(x(!1)),t=!1!==n&&v(t)>v(x(!0));return i||t}return{mount:function(){t([ln,kn,bn,_n],g)},destroy:function(){F(h,"style")},move:function(n,t,i,r){var u,o,e;s||(u=c.state.set,o=b(),s=(e=n!==t)||a.waitForTransition,u(4),l(dn,t,i,n),f.Transition.start(n,function(){e&&m(t),s=!1,u(3),l(vn,t,i,n),"move"===a.trimSpace&&n!==i&&o===b()?f.Controller.go(i<n?">":"<",!1,r):r&&r()}))},jump:m,translate:y,shift:w,cancel:function(){s=!1,y(b()),f.Transition.cancel()},toIndex:function(n){for(var t=f.Slides.get(),i=0,r=1/0,u=0;u<t.length;u++){var o=t[u].index,e=un(_(o,!0)-n);if(!(e<=r))break;r=e,i=o}return i},toPosition:_,getPosition:b,getLimit:x,isBusy:k,exceededLimit:A}},Controller:function(n,e,u){var o,c,f,t=En(n).on,a=e.Move,s=a.getPosition,l=a.getLimit,i=e.Slides,d=i.isEnough,r=i.getLength,v=n.is(ot),h=n.is(ut),p=u.start||0,g=p;function m(){o=r(!0),c=u.perMove,f=u.perPage,p=en(p,0,o-1)}function y(n,t,i,r,u){var o=t?n:z(n);e.Scroll.scroll(t||i?a.toPosition(o,!0):n,r,function(){S(a.toIndex(a.getPosition())),u&&u()})}function w(n){return b(!1,n)}function _(n){return b(!0,n)}function b(n,t){var i,r,u=c||(R()?1:f),o=x(p+u*(n?-1:1),p);return-1!==o||!h||(i=s(),r=l(!n),u=1,un(i-r)<u)?t?o:A(o):n?0:k()}function x(n,t,i){var r;return d()?(r=k(),n<0||r<n?n=on(0,n,t,!0)||on(r,t,n,!0)?L(E(n)):v?c?n:n<0?-(o%f||f):o:u.rewind?n<0?r:0:-1:v||i||n===t||(n=c?n:L(E(t)+(n<t?-1:1)))):n=-1,n}function k(){var n=o-f;return(R()||v&&c)&&(n=o-1),nn(n,0)}function A(n){return v?d()?n%o+(n<0?o:0):-1:n}function L(n){return en(R()?n:f*n,0,k())}function E(n){return R()||(n=on(n,o-f,o-1)?o-1:n,n=tn(n/f)),n}function z(n){n=a.toIndex(n);return h?en(n,0,k()):n}function S(n){n!==p&&(g=p,p=n)}function R(){return!M(u.focus)||u.isNavigation}return{mount:function(){m(),t([bn,_n],m,P-1)},go:function(n,t,i){var r=function(n){var t=p;{var i,r;D(n)?(r=n.match(/([+\-<>])(\d+)?/)||[],i=r[1],r=r[2],"+"===i||"-"===i?t=x(p+ +(""+i+(+r||1)),p,!0):">"===i?t=r?L(+r):w(!0):"<"===i&&(t=_(!0))):t=v?en(n,-f,o+f-1):en(n,0,k())}return t}(n);u.useScroll?y(r,!0,!0,u.speed,i):-1<(n=A(r))&&!a.isBusy()&&(t||n!==p)&&(S(n),a.move(r,n,g,i))},scroll:y,getNext:w,getPrev:_,getEnd:k,setIndex:S,getIndex:function(n){return n?g:p},toIndex:L,toPage:E,toDest:z,hasFocus:R}},Arrows:function(u,n,i){var r,t=En(u),o=t.on,e=t.bind,c=t.emit,f=i.classes,a=i.i18n,s=n.Elements,l=n.Controller,d=s.arrows,v=s.prev,h=s.next,p={};function g(){var n,t;i.arrows&&(v&&h||(d=j("div",f.arrows),v=m(!0),h=m(!1),r=!0,E(d,[v,h]),z(d,O("slider"===i.arrows&&s.slider||u.root)))),v&&h&&(p.prev?N(d,!1===i.arrows?"none":""):(n=s.track.id,I(v,Qn,n),I(h,Qn,n),p.prev=v,p.next=h,t=l.go,o([ln,vn,bn,_n,Ln],y),e(h,"click",function(){t(">",!0)}),e(v,"click",function(){t("<",!0)}),c("arrows:mounted",v,h)))}function m(n){return Y('<button class="'+f.arrow+" "+(n?f.prev:f.next)+'" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d="'+(i.arrowPath||"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z")+'" />')}function y(){var n=u.index,t=l.getPrev(),i=l.getNext(),r=-1<t&&n<t?a.last:a.prev,n=-1<i&&i<n?a.first:a.next;v.disabled=t<0,h.disabled=i<0,I(v,$n,r),I(h,$n,n),c("arrows:updated",v,h,t,i)}return{arrows:p,mount:function(){g(),o(bn,g)},destroy:function(){r?H(d):(F(v,rt),F(h,rt))}}},Autoplay:function(n,t,r){var i,u,o,e=En(n),c=e.on,f=e.bind,a=e.emit,s=t.Elements,l=zn(r.interval,n.go.bind(n,">"),function(n){var t=s.bar;t&&C(t,"width",100*n+"%");a("autoplay:playing",n)}),d=l.isPaused;function v(n){var t=n?"pause":"play",i=s[t];i&&(I(i,Qn,s.track.id),I(i,$n,r.i18n[t]),f(i,"click",n?p:h))}function h(){d()&&t.Slides.isEnough()&&(l.start(!r.resetProgress),u=i=o=!1,a("autoplay:play"))}function p(n){void 0===n&&(n=!0),d()||(l.pause(),a("autoplay:pause")),o=n}function g(){o||(i||u?p(!1):h())}return{mount:function(){var n=r.autoplay;n&&(v(!0),v(!1),function(){var n=s.root;r.pauseOnHover&&f(n,"mouseenter mouseleave",function(n){i="mouseenter"===n.type,g()});r.pauseOnFocus&&f(n,"focusin focusout",function(n){u="focusin"===n.type,g()});c([dn,"scroll",_n],l.rewind)}(),"pause"!==n&&h())},destroy:l.cancel,play:h,pause:p,isPaused:d}},Cover:function(n,t,i){var r=En(n).on;function u(i){t.Slides.forEach(function(n){var t=O(n.container||n.slide,"img");t&&t.src&&o(i,t,n)})}function o(n,t,i){i.style("background",n?'center/cover no-repeat url("'+t.src+'")':"",!0),N(t,n?"none":"")}return{mount:function(){i.cover&&(r(p,function(n,t){o(!0,n,t)}),r([ln,bn,_n],u.bind(null,!0)))},destroy:function(){u(!1)}}},Scroll:function(c,n,f){var a,s,t=En(c),i=t.on,l=t.emit,d=n.Move,v=d.getPosition,h=d.getLimit,p=d.exceededLimit;function g(r,n,t,u){var i,o=v(),e=1;n=n||(i=un(r-o),nn(i/1.5,800)),s=t,y(),a=zn(n,m,function(n){var t=v(),i=(o+(r-o)*(i=n,(n=f.easingFunc)?n(i):1-Math.pow(1-i,4))-v())*e;d.translate(t+i),c.is(ut)&&!u&&p()&&(e*=.6,un(i)<10&&(i=p(!1),g(h(!i),600,null,!0)))},1),l("scroll"),a.start()}function m(){var n=v(),t=d.toIndex(n);on(t,0,c.length-1)||d.translate(d.shift(n,0<t),!0),s&&s(),l(Ln)}function y(){a&&a.cancel()}function r(){a&&!a.isPaused()&&(y(),m())}return{mount:function(){i(dn,y),i([bn,_n],r)},destroy:y,scroll:g,cancel:r}},Drag:function(r,u,o){var e,c,f,a,s,l,d,i,v,n=En(r),t=n.on,h=n.emit,p=n.bind,g=n.unbind,m=u.Move,y=u.Scroll,w=u.Controller,_=u.Elements.track,b=(n=u.Direction).resolve,x=n.orient,k=m.getPosition,A=m.exceededLimit,L={passive:!1,capture:!0},E=!1;function z(){var n=o.drag;j(!n),s="free"===n}function S(n){var t;i||(!(t=F(n))&&n.button||(m.isBusy()?U(n,!0):(v=t?_:window,a=f=null,d=!1,p(v,ft,R,L),p(v,at,P,L),m.cancel(),y.cancel(),D(n))))}function R(n){var t,i;a||h("drag"),(a=n).cancelable&&(l?(t=200<I(n)-I(c),i=E!==(E=A()),(t||i)&&D(n),m.translate(e+(T(n)-T(c))/(E&&r.is(ut)?5:1)),h("dragging"),d=!0,U(n)):(t=un(T(n)-T(c)),i=W(i=o.dragMinThreshold)?i:{mouse:0,touch:+i||10},l=t>(F(n)?i.touch:i.mouse),O()&&U(n)))}function P(n){var t,i;g(v,ft,R),g(v,at,P),a&&((l||n.cancelable&&O())&&(t=function(n){if(r.is(ot)||!E){var t=c===a&&f||c,i=T(a)-T(t),t=I(n)-I(t),n=I(n)-I(a)<200;if(t&&n)return i/t}return 0}(n),i=t,i=k()+cn(i)*$(un(i)*(o.flickPower||600),s?1/0:u.Layout.listSize()*(o.flickMaxPages||1)),s?w.scroll(i):r.is(et)?w.go(r.index+x(cn(t))):w.go(w.toDest(i),!0),U(n)),h("dragged")),l=!1}function D(n){f=c,c=n,e=k()}function M(n){!i&&d&&U(n,!0)}function O(){var n=un(T(a)-T(c));return un(T(a,!0)-T(c,!0))<n}function T(n,t){return(F(n)?n.touches[0]:n)["page"+b(t?"Y":"X")]}function F(n){return"undefined"!=typeof TouchEvent&&n instanceof TouchEvent}function I(n){return n.timeStamp}function j(n){i=n}return{mount:function(){p(_,ft,Z,L),p(_,at,Z,L),p(_,"touchstart mousedown",S,L),p(_,"click",M,{capture:!0}),p(_,"dragstart",U),t([ln,bn],z)},disable:j}},Keyboard:function(t,n,i){var r,u=En(t),o=u.on,e=u.bind,c=u.unbind,f=n.Elements.root,a=n.Direction.resolve;function s(){var n=i.keyboard,n=void 0===n?"global":n;n&&("focused"===n?I(r=f,tt,0):r=window,e(r,"keydown",d))}function l(){c(r,"keydown"),y(r)&&F(r,tt)}function d(n){n=n.key,n=x(st,n)?"Arrow"+n:n;n===a("ArrowLeft")?t.go("<"):n===a("ArrowRight")&&t.go(">")}return{mount:function(){s(),o(bn,function(){l(),s()})},destroy:l}},LazyLoad:function(t,n,o){var i=En(t),r=i.on,u=i.off,e=i.bind,c=i.emit,f="sequential"===o.lazyLoad,a=[],s=0;function l(){s=0,a=[]}function d(){(a=a.filter(function(n){return!n.o.isWithin(t.index,o.perPage*((o.preloadPages||1)+1))||v(n)})).length||u(vn)}function v(t){var i=t.e;L(t.o.slide,Jn),e(i,"load error",function(n){!function(n,t){var i=n.o;K(i.slide,Jn),t||(H(n.c),N(n.e,""),c(p,n.e,i),c(xn));f&&h()}(t,"error"===n.type)}),["src","srcset"].forEach(function(n){t[n]&&(I(i,n,t[n]),F(i,"src"===n?lt:dt))})}function h(){s<a.length&&v(a[s++])}return{mount:function(){o.lazyLoad&&(r([ln,_n],function(){l(),n.Slides.forEach(function(u){J(u.slide,vt).forEach(function(n){var t,i=X(n,lt),r=X(n,dt);i===n.src&&r===n.srcset||(I(t=j("span",o.classes.spinner,n.parentElement),Vn,"presentation"),a.push({e:n,o:u,src:i,srcset:r,c:t}),N(n,"none"))})}),f&&h()}),f||r([ln,_n,vn],d))},destroy:l}},Pagination:function(l,n,d){var v,t=En(l),i=t.on,r=t.emit,h=t.bind,u=t.unbind,p=n.Slides,g=n.Elements,o=n.Controller,m=o.hasFocus,e=o.getIndex,y=[];function c(){f(),d.pagination&&p.isEnough()&&(function(){var n=l.length,t=d.classes,i=d.i18n,r=d.perPage,u="slider"===d.pagination&&g.slider||g.root,o=m()?n:rn(n/r);v=j("ul",t.pagination,u);for(var e=0;e<o;e++){var c=j("li",null,v),f=j("button",{class:t.page,type:"button"},c),a=p.getIn(e).map(function(n){return n.slide.id}),s=!m()&&1<r?i.pageX:i.slideX;h(f,"click",w.bind(null,e)),I(f,Qn,a.join(" ")),I(f,$n,fn(s,e+1)),y.push({li:c,button:f,page:e})}}(),r("pagination:mounted",{list:v,items:y},a(l.index)),s())}function f(){v&&(H(v),y.forEach(function(n){u(n.button,"click")}),_(y),v=null)}function w(t){o.go(">"+t,!0,function(){var n=p.getAt(o.toIndex(t));n&&n.slide.focus()})}function a(n){return y[o.toPage(n)]}function s(){var n=a(e(!0)),t=a(e());n&&(K(n.button,Hn),F(n.button,Zn)),t&&(L(t.button,Hn),I(t.button,Zn,!0)),r("pagination:updated",{list:v,items:y},n,t)}return{items:y,mount:function(){c(),i([bn,_n],c),i([dn,Ln],s)},destroy:f,getAt:a}},Sync:function(i,n,r){var u=i.splides,e=n.Elements.list;function c(){I(e,it,"ttb"!==r.direction?"horizontal":null)}function f(n){i.go(n.index)}function a(n,t){x(ht,t.key)&&(f(n),U(t))}return{mount:function(){var o,n,t;r.isNavigation?(n=En(i),t=n.on,n=n.emit,t(hn,f),t(wn,a),t([ln,bn],c),I(e,Vn,"menu"),n("navigation:mounted",i.splides)):(o=[],u.concat(i).forEach(function(r,n,u){En(r).on(dn,function(t,n,i){u.forEach(function(n){n===r||x(o,r)||(o.push(n),n.go(n.is(ot)?i:t))}),_(o)})}))},destroy:function(){F(e,rt)}}},Wheel:function(i,n,t){var r=En(i).bind;function u(n){var t=n.deltaY;t&&(i.go(t<0?"<":">"),U(n))}return{mount:function(){t.wheel&&r(n.Elements.track,"wheel",u,{passive:!1,capture:!0})}}}}),gt={type:"slide",speed:400,waitForTransition:!0,perPage:1,arrows:!0,pagination:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",slideFocus:!0,trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",classes:{slide:On,clone:Tn,arrows:In,arrow:t,prev:jn,next:Wn,pagination:i,page:i+"__page",spinner:m+"__spinner"},i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay"}};function mt(n,r,t){var i=En(n).on;return{mount:function(){i([ln,_n],function(){c(function(){r.Slides.style("transition","opacity "+t.speed+"ms "+t.easing)})})},start:function(n,t){var i=r.Elements.track;C(i,"height",V(G(i).height)),c(function(){t(),C(i,"height","")})},cancel:Z}}function yt(o,n,e){var c,t=En(o).bind,f=n.Move,a=n.Controller,i=n.Elements.list;function r(){s("")}function s(n){C(i,"transition",n)}return{mount:function(){t(i,"transitionend",function(n){n.target===i&&c&&(r(),c())})},start:function(n,t){var i=f.toPosition(n,!0),r=f.getPosition(),u=function(n){var t=e.rewindSpeed;if(o.is(ut)&&t){var i=a.getIndex(!0),r=a.getEnd();if(0===i&&r<=n||r<=i&&0===n)return t}return e.speed}(n);1<=un(i-r)&&1<=u?(s("transform "+u+"ms "+e.easing),f.translate(i,!0),c=t):(f.jump(n),t())},cancel:r}}i=function(){function i(n,t){this.event=f(),this.Components={},this.state=h(1),this.splides=[],this.f={},this.a={};n=D(n)?q(document,n):n;Q(n,n+" is invalid."),this.root=n,l(gt,i.defaults),l(l(this.f,gt),t||{})}var n,t,r=i.prototype;return r.mount=function(n,t){var i=this,r=this.state,u=this.Components;return Q(r.is([1,5]),"Already mounted!"),r.set(1),this.s=u,this.l=t||this.l||(this.is(et)?mt:yt),this.a=n||this.a,e(T({},pt,this.a,{Transition:this.l}),function(n,t){n=n(i,u,i.f);(u[t]=n).setup&&n.setup()}),e(u,function(n){n.mount&&n.mount()}),this.emit(ln),L(this.root,"is-initialized"),r.set(3),this.emit("ready"),this},r.sync=function(n){return this.splides.push(n),n.splides.push(this),this},r.go=function(n){return this.s.Controller.go(n),this},r.on=function(n,t){return this.event.on(n,t,null,20),this},r.off=function(n){return this.event.off(n),this},r.emit=function(n){var t;return(t=this.event).emit.apply(t,[n].concat(s(arguments,1))),this},r.add=function(n,t){return this.s.Slides.add(n,t),this},r.remove=function(n){return this.s.Slides.remove(n),this},r.is=function(n){return this.f.type===n},r.refresh=function(){return this.emit(_n),this},r.destroy=function(t){void 0===t&&(t=!0);var n=this.event,i=this.state;return i.is(1)?n.on("ready",this.destroy.bind(this,t),this):(e(this.s,function(n){n.destroy&&n.destroy(t)}),n.emit(d),n.destroy(),t&&_(this.splides),i.set(5)),this},n=i,(r=[{key:"options",get:function(){return this.f},set:function(n){var t=this.f;l(t,n),this.state.is(1)||this.emit(bn,t)}},{key:"length",get:function(){return this.s.Slides.getLength(!0)}},{key:"index",get:function(){return this.s.Controller.getIndex()}}])&&wt(n.prototype,r),t&&wt(n,t),i}();return i.defaults={},i.STATES=n,i},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).Splide=t();



/*!
 * @splidejs/splide-extension-grid
 * Version  : 0.3.18
 * License  : MIT
 * Copyright: 2021 Naotoshi Fujita
 */
!function(n){"function"==typeof define&&define.amd?define(n):n()}(function(){"use strict";function n(n){return t=n,Array.isArray(t)?n:[n];var t}var t="visible",i="hidden",o="refresh",r="updated",e="destroy";function u(t){var i=t.event,o={},r=[];function u(n,t,i){c(n,t,function(n,t){r=r.filter(function(o){return!!(o[0]!==n||o[1]!==t||i&&o[2]!==i)||(n.removeEventListener(t,o[2],o[3]),!1)})})}function c(t,i,o){!function(t,i){n(t).forEach(i)}(t,function(n){n&&i.split(" ").forEach(o.bind(null,n))})}function f(){r=r.filter(function(n){return u(n[0],n[1])}),i.offBy(o)}return i.on(e,f,o),{on:function(n,t,r){i.on(n,t,o,r)},off:function(n){i.off(n,o)},emit:i.emit,bind:function(n,t,i,o){c(n,t,function(n,t){r.push([n,t,i,o]),n.addEventListener(t,i,o)})},unbind:u,destroy:f}}var c="splide",f="splide__slide",s=f+"__container";function a(n){n.length=0}function l(n){return Array.isArray(n)}function d(n){return"string"==typeof n}function v(n){return null===n}function h(n){return l(n)?n:[n]}function p(n,t){h(n).forEach(t)}function g(n,t){return n.push.apply(n,h(t)),n}var m=Array.prototype;function y(n,t,i){return m.slice.call(n,t,i)}function E(n,t,i){n&&p(t,function(t){t&&n.classList[i?"add":"remove"](t)})}function w(n,t){E(n,d(t)?t.split(" "):t,!0)}function b(n,t){p(t,n.appendChild.bind(n))}function A(n,t){return n instanceof HTMLElement&&(n.msMatchesSelector||n.matches).call(n,t)}function _(n,t){return t?function(n,t){return n?y(n.children).filter(function(n){return A(n,t)}):[]}(n,t)[0]:n.firstElementChild}function x(n,t,i){if(n){var o=Object.keys(n);o=i?o.reverse():o;for(var r=0;r<o.length;r++){var e=o[r];if("__proto__"!==e&&!1===t(n[e],e))break}}return n}function C(n){return y(arguments,1).forEach(function(t){x(t,function(i,o){n[o]=t[o]})}),n}function M(n,t){n&&p(t,function(t){n.removeAttribute(t)})}function L(n,t,i){var o;v(o=t)||"object"!=typeof o?v(i)?M(n,t):n.setAttribute(t,String(i)):x(t,function(t,i){L(n,i,t)})}function S(n,t,i){var o=document.createElement(n);return t&&(d(t)?w(o,t):L(o,t)),i&&b(i,o),o}function k(n,t,i){if(void 0===i)return getComputedStyle(n)[t];if(!v(i)){var o=n.style;i=""+i,o[t]!==i&&(o[t]=i)}}function N(n,t){return y(n.querySelectorAll(t))}function j(n,t){E(n,t,!1)}function B(n){return d(n)?n:n?n+"px":""}var I="splide";var q=Math.min;Math.max,Math.floor,Math.ceil,Math.abs;var D=f+"__row",F=f+"--col",G={rows:1,cols:1,dimensions:[],gap:{}};function H(n){function t(){var t=n.rows,i=n.cols,o=n.dimensions;return l(o)&&o.length?o:[[t,i]]}return{get:function(n){var i=t();return i[q(n,i.length-1)]},getAt:function(n){for(var i,o,r=t(),e=0,u=0;u<r.length;u++){var c=r[u];if(n<(e+=(i=c[0]||1)*(o=c[1]||1)))break}return function(n,t){if(void 0===t&&(t=""),!n)throw new Error("["+I+"] "+t)}(i&&o,"Invalid dimension"),[i,o]}}}function O(n,o,r){var e=u(n),c=e.on,f=e.destroy,a=n.Components,l=n.options,d=a.Direction.resolve,v=a.Slides.forEach;function h(n,t){var i=_(n,"."+s),o=_(i||n,"img");o&&o.src&&(k(i||n,"background",t?"":'center/cover no-repeat url("'+o.src+'")'),k(o,"display",t?"":"none"))}function p(n){return N(n,"."+D)}function g(n){return N(n,"."+F)}function m(n,t){g(n).forEach(function(n){L(n,"tabindex",t?0:null)})}function y(n){m(n.slide,!0)}function E(n){m(n.slide,!1)}return{mount:function(){v(function(t){var i=t.slide,e=r.get(t.isClone?t.slideIndex:t.index),u=e[0],c=e[1];!function(n,t){var i=o.gap.row,r="calc("+100/n+"%"+(i?" - "+B(i)+" * "+(n-1)/n:"")+")";p(t).forEach(function(n,t,o){k(n,"height",r),k(n,"display","flex"),k(n,"margin","0 0 "+B(i)+" 0"),k(n,"padding",0),t===o.length-1&&k(n,"marginBottom",0)})}(u,i),function(n,t){var i=o.gap.col,r="calc("+100/n+"%"+(i?" - "+B(i)+" * "+(n-1)/n:"")+")";g(t).forEach(function(n,t,o){k(n,"width",r),t!==o.length-1&&k(n,d("marginRight"),B(i))})}(c,i),g(t.slide).forEach(function(i,o){var r;i.id=t.slide.id+"-col"+((r=o+1)<10?"0"+r:""+r),n.options.cover&&h(i)})}),l.slideFocus&&(c(t,y),c(i,E))},destroy:function(){v(function(n){var t=n.slide;m(t,!1),p(t).forEach(function(n){M(n,"style")}),g(t).forEach(function(n){h(n,!0),M(n,"style")})}),f()}}}"undefined"!=typeof window&&(window.splide=window.splide||{},window.splide.Extensions=window.splide.Extensions||{},window.splide.Extensions.Grid=function(n,t,i){var e=u(n),s=e.on,d=e.off,v=t.Elements,h={},m=H(h),y=O(n,h,m),E=c+"--grid",A=[];function _(){var t,r,e,u,c;C(h,i.grid||G),function(){if(i.grid){var n=h.rows,t=h.cols,o=h.dimensions;return n>1||t>1||l(o)&&o.length>0}return!1}()?(x(),g(A,v.slides),w(n.root,E),b(v.list,(e=[],u=0,c=0,A.forEach(function(n,i){var o=m.getAt(i),s=o[0],a=o[1];c||(u||(t=S(n.tagName,f),e.push(t)),r=function(n,t,i){return S("li"===t.tagName.toLowerCase()?"ul":"div",D,i)}(0,n,t)),function(n,t,i){w(t,F),b(i,t)}(0,n,r),++c>=a&&(c=0,u=++u>=s?0:u)}),e)),s(o,L),M()):k()&&(x(),M())}function x(){if(k()){var t=v.slides;y.destroy(),A.forEach(function(n){j(n,F),b(v.list,n)}),p(t,function(n){n&&n.parentNode&&n.parentNode.removeChild(n)}),j(n.root,E),a(t),g(t,A),a(A),d(o)}}function M(){n.refresh()}function L(){k()&&y.mount()}function k(){return t=n.root,i=E,t&&t.classList.contains(i);var t,i}return{setup:function(){i.grid=C({},G,i.grid||{})},mount:function(){_(),s(r,_)},destroy:x}})});

var currentDate = new Date();
let firstSlide = 0;

function hideOldDate(callback) {
	let oldDatesArray = [];
	$('.date-label time').each(function() {
		var data_time = new Date($(this).attr('datetime')); //get data-attr
		//compare
		if (data_time < currentDate) {
			let oldSlide = $(this).closest('.splide__slide')
			oldSlide.addClass('old-date');
			oldDatesArray.push(oldSlide);
		}
	});
	if (oldDatesArray.length > 3) {
           firstSlide =  Math.floor(oldDatesArray.length/3);
	}
	callback()
}

function sliderPrimery () {
	var primary = new Splide( '.important-dates', {
		arrows: true,
		pagination: true,
		grid: {
			rows: 3,
			cols: 1,
			gap : {
				row: '1rem',
				col: '1rem',
			},
		},
		perMove: 1,
		perPage: 1,
	});
	primary.mount( window.splide.Extensions );
	primary.go(firstSlide);
}

function nextStepSlider () {
	var thirdSlider = new Splide('.next-steps-slider', {
		perMove: 1,
		perPage: 4,
		arrows: false,
		gap: '20px',
		breakpoints: {
			991.98: {
				perPage: 3,
				arrows: false,
			},
			767.98: {
				perPage: 2,
				arrows: false,
			},
			575.98: {
				perPage: 1,
				arrows: false,
			},
		}
	});

	thirdSlider.mount();
}

function sliderSecondary () {
	var secondary = new Splide('.stats_widg', {
		perMove: 1,
		perPage: 3,
		arrows: false,
		pagination: false,
		breakpoints: {
			991.98: {
				perPage: 2,
				arrows: true,
				pagination: false,
			},
			575.98: {
				perPage: 1,
				arrows: true,
				pagination: false,
			},
		}
	});

	secondary.mount();
}


function checkIfElementExist (selector, callback) {
	const element = document.querySelector(selector);
	if(element) {
		callback(element)
	}
}

function seeMoreAnimation () {
	const seeMore = document.querySelector('#seeMoreCollapsed');
	let seeMoreHeight;
	let height = 0;

	function seeMoreGrow() {
		if (height < seeMoreHeight) {
			height++;
			seeMore.style.height = `${height}px`
			setTimeout(seeMoreGrow, 1);
		}
	}

	function seeMoreDown() {
		if (height > 0) {
			height--;
			seeMore.style.height = `${height}px`
			setTimeout(seeMoreDown, 1);
		}
	}

	const btn = document.querySelector('#collapse');
	btn.addEventListener('click', (e) => {
		seeMoreHeight = seeMore.scrollHeight;
		e.preventDefault();
		if (height === 0) {
			seeMoreGrow();
			btn.textContent = ('See less');
		}
		if (height === seeMoreHeight) {
			seeMoreDown();
			btn.textContent = ('See more');
		}
	})

}

let windowWidth = window.innerWidth;

function setMArginToAccordion (selector) {
	const element = document.querySelectorAll(selector);
		element.forEach(item => {
			let style = window.getComputedStyle(item);
			item.style.marginBottom = `-${style.getPropertyValue('height')}`
		})
}

function addOptionToSelect(select, value, text) {
	option = document.createElement('option');
	option.value = value;
	option.innerHTML = text;
	select.append(option)
}
function clearStyleForTabs() {
	let mainParent = document.querySelector('#content');
	mainParent.classList.remove('admissions');
	mainParent.classList.remove('admissionsApplicant');
	mainParent.classList.remove('finaid');
	mainParent.classList.remove('competition');
	mainParent.classList.remove('early_commit');
	mainParent.classList.remove('enrollment');
	mainParent.classList.remove('checklist');
	mainParent.classList.remove('itwenty');
}
window.addEventListener('DOMContentLoaded', () => {
	checkIfElementExist('.important-dates', (el) => { hideOldDate(sliderPrimery)});
	checkIfElementExist('.stats_widg', (el) => { sliderSecondary()});
	checkIfElementExist('#seeMoreCollapsed', (el) => { seeMoreAnimation()});
	checkIfElementExist('.widget-decision-accepted h3', (el) => { el.textContent = 'Your Admission Status: Accepted'});
	checkIfElementExist('.widget-decision-denied h3', (el) => { el.textContent = 'Your Admission Status: Denied'});
	checkIfElementExist('.widget-decision-decided h3', (el) => { el.textContent = 'Your Admission Status: Decided'});
	checkIfElementExist('.accordion', (el) => {
		window.addEventListener("resize", () => {
			let newWindowWidth = window.innerWidth;
			if (newWindowWidth !== windowWidth) {
				windowWidth = newWindowWidth;
				setMArginToAccordion('.accordion .accordion-content');
			}
		});
	});
	checkIfElementExist('.part.accordion-element .accordion-content', (el) => {
		setMArginToAccordion('.part.accordion-element .accordion-content')
	})
	checkIfElementExist('.widget-nursing h3', (el) => { el.textContent = 'You have been accepted into the nursing program'});
	checkIfElementExist('.fin-aid-package-insert h3', (el) => {
		const customText = document.querySelector('.part.fin-aid-package-custom .fin-aid-package__parent');
		const element = document.querySelector('.fin-aid-package-insert > div');
		element.prepend(customText)
	});
	checkIfElementExist('.part.music-portfolio', (el) => {
		const custom = document.querySelector('#music-portfolio__container');
		el.prepend(custom)
	});
	checkIfElementExist('.widget-honors h3', (el) => { el.textContent = 'Honors program'; });
	checkIfElementExist('.part.forms-list-checklist h3', (el) => { const element = document.querySelector('.part.forms-list-checklist'); element.classList.add('forms-list-checklist-ok')});
	checkIfElementExist('.part.adm_list.adm_list-selector.open-admission h3', (el) => {
		el.textContent = 'Admissions Checklist';
	});
	checkIfElementExist('.part.forms-list-checklist.container h3', (el) => {
		el.textContent = 'Forms Checklist';
	});
})

window.addEventListener('DOMContentLoaded', () => {

	checkIfElementExist('.part.checklist-tabs .checklist-tabs__container', (el) => {
		let count = 0;
		let mainParent = document.querySelector('#content');
		let selector = document.querySelector('#select-for-tabs');
		let tabsBase = document.querySelector('.part.checklist-tabs');
		let tabs = document.querySelector('.part.checklist-tabs > div');
		const admission = document.querySelector('#part_checklist_Material');
		const admissionApplicant = document.querySelector('#part_admissions');
		const finAid = document.querySelector('#part_checklist_FinancialAid');
		const scholCompet = document.querySelector('#part_checklist_ScholarshipCompetition');
		const earlyCommit = document.querySelector('#part_checklist_EarlyCommitTrack');
		const enroll = document.querySelector('#part_checklist_Enrollment');
		const formChecklist = document.querySelector('.open-form-checklist h3');
		const formitwenty = document.querySelector('.open-itwenty h3'); 
		!admission ? tabsBase.classList.add('adm-hide') : (count += 1, addOptionToSelect(selector, 'admissions', 'Admissions Checklist'));
		!admissionApplicant ? tabsBase.classList.add('adm-app-hide') : (count += 1, addOptionToSelect(selector, 'admissionsApplicant', 'Admissions Checklist'));
		!finAid ? tabsBase.classList.add('fin-hide') : (count += 1, addOptionToSelect(selector, 'finaid', 'Financial Aid'));
		!scholCompet ? tabsBase.classList.add('com-hide') : (count += 1, addOptionToSelect(selector, 'competition', 'Scholarship Competition'));
		!earlyCommit ? tabsBase.classList.add('earl-hide') : (count += 1, addOptionToSelect(selector, 'early_commit', 'Early Commit Track'));
		!enroll ? tabsBase.classList.add('enr-hide') : (count += 1, addOptionToSelect(selector, 'enrollment', 'Enrollment'));
		!formChecklist ? tabsBase.classList.add('list-hide') : (count += 1, addOptionToSelect(selector, 'checklist', 'Forms to Complete'));
		!formitwenty ? tabsBase.classList.add('itwenty-hide') : (count += 1, addOptionToSelect(selector, 'itwenty', 'Form I-20 Checklist'));
		if (count > 0) {
			  if (admission) {
			    mainParent.classList.add('admissions');
			  } else if (admissionApplicant) {
			    mainParent.classList.add('admissionsApplicant');
			  } else if (scholCompet) {
			    mainParent.classList.add('competition');
			  } else if (earlyCommit) {
			    mainParent.classList.add('early_commit');
			  } else if (enroll) {
			    mainParent.classList.add('enrollment');
			  } else if (formitwenty) { 
			    mainParent.classList.add('itwenty');
			  } else if (finAid) {
			    mainParent.classList.add('finaid');
			  } else if (formChecklist) { 
			    mainParent.classList.add('checklist');
			  }
			}

		if (count < 2) {
			document.querySelector('.part.checklist-tabs').classList.add('checklist-tabs__hide')
		}
		if (count > 0) {checkIfElementExist('.part.widget_uploader h3', (el) => { let parent = document.querySelector('.part.widget_uploader'); parent.classList.add('widget_uploader__upper');});}
		tabs.addEventListener('click', (e) => {
			if (e.target.classList.contains('checklist-tabs__tab')) {
				clearStyleForTabs();
				mainParent.classList.add(e.target.id);
			}
		})
		selector.addEventListener('change', (e) => {
			clearStyleForTabs();
			mainParent.classList.add(selector.value);
		})
	})
})

window.addEventListener('DOMContentLoaded', () => {
	function addTargetBlank () {
		const parentContainer = document.querySelector('.part_rows_container')
		const widgetLinks = parentContainer.querySelectorAll('a');
		widgetLinks.forEach((item) => {
			if (/http/.test(item.href) && !/\w\#\w/.test(item.href)) {
				item.target = `_blank`
			}
		})
	}

	addTargetBlank ()
})

window.addEventListener('load', () => {
	checkIfElementExist('.apply-now-new-link p a', (el) => { el.textContent = 'Apply Now'; el.href = 'https://www.jbu.edu/academics/art/scholarship'});
})

window.addEventListener('load', () => {
	checkIfElementExist('.widget-event-above__container', (el) => {
		checkIfElementExist('.portal_datepicker_sidebar', (events) => {
			document.querySelector('.part.widget-event-under').append(el) });
	});
})
