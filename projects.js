<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/Flip.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/ScrollTrigger.min.js"></script>
<script>
/*!
 * ScrollSmoother 3.11.1
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GreenSock and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GreenSock membership. See https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function q(){return"undefined"!=typeof window}function r(){return I||q()&&(I=window.gsap)&&I.registerPlugin&&I}var I,M,B,D,L,O,U,N,V,j,Y,G,J,t=(ScrollSmoother.register=function register(e){return M||(I=e||r(),q()&&window.document&&(B=window,D=document,L=D.documentElement,O=D.body),I&&(U=I.utils.toArray,N=I.utils.clamp,Y=I.parseEase("expo"),V=I.core.globals().ScrollTrigger,I.core.globals("ScrollSmoother",ScrollSmoother),O&&V&&(G=V.core._getVelocityProp,J=V.core._inputObserver,ScrollSmoother.refresh=V.refresh,M=1))),M},function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(ScrollSmoother,[{key:"progress",get:function get(){return this.scrollTrigger?this.scrollTrigger.animation._time/100:0}}]),ScrollSmoother);function ScrollSmoother(e){var o=this;M||ScrollSmoother.register(I)||console.warn("Please gsap.registerPlugin(ScrollSmoother)"),e=this.vars=e||{},j&&j.kill(),j=this;function ua(){return z.update(-A)}function wa(){return n.style.overflow="visible"}function ya(e){e.update();var t=e.getTween();t&&(t.pause(),t._time=t._dur,t._tTime=t._tDur),h=!1,e.animation.progress(e.progress,!0)}function za(e,t){(e!==A&&!u||t)&&(P&&(n.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+e+", 0, 1)",n._gsap.y=e+"px"),R=e-A,A=e,V.isUpdating||V.update())}function Aa(e){return arguments.length?(e<0&&(e=0),H.y=-e,h=!0,u?A=-e:za(-e),k(e),this):-A}function Ca(e){m.scrollTop=0,e.target.contains&&e.target.contains(m)||S&&!1===S(o,e)||(V.isInViewport(e.target)||e.target===g||o.scrollTo(e.target,!1,"center center"),g=e.target)}function Da(e){var r,n,o,i;b.forEach(function(t){r=t.pins,i=t.markers,e.forEach(function(e){t.trigger&&e.trigger&&t!==e&&(e.trigger===t.trigger||e.pinnedContainer===t.trigger||t.trigger.contains(e.trigger))&&(n=e.start,o=(n-t.start-t.offset)/t.ratio-(n-t.start),r.forEach(function(e){return o-=e.distance/t.ratio-e.distance}),e.setPositions(n+o,e.end+o),e.markerStart&&i.push(I.quickSetter([e.markerStart,e.markerEnd],"y","px")),e.pin&&0<e.end&&(o=e.end-e.start,r.push({start:e.start,end:e.end,distance:o,trig:e}),t.setPositions(t.start,t.end+o),t.vars.onRefresh(t)))})})}function Ea(){wa(),requestAnimationFrame(wa),b&&(b.forEach(function(e){var t=e.start,r=e.auto?Math.min(V.maxScroll(e.scroller),e.end):t+(e.end-t)/e.ratio,n=(r-e.end)/2;t-=n,r-=n,e.offset=n||1e-4,e.pins.length=0,e.setPositions(Math.min(t,r),Math.max(t,r)),e.vars.onRefresh(e)}),Da(V.sort())),z.reset()}function Fa(){return V.addEventListener("refresh",Ea)}function Ga(){return b&&b.forEach(function(e){return e.vars.onRefresh(e)})}function Ha(){return b&&b.forEach(function(e){return e.vars.onRefreshInit(e)}),Ga}function Ia(t,r,n,o){return function(){var e="function"==typeof r?r(n,o):r;return e||0===e||(e=o.getAttribute("data-"+C+t)||("speed"===t?1:0)),o.setAttribute("data-"+C+t,e),"auto"===e?e:parseFloat(e)}}function Ja(r,e,t,n){function xb(){e=s(),t=f(),o=parseFloat(e)||1,c=(a="auto"===e)?0:.5,l&&l.kill(),l=t&&I.to(r,{ease:Y,overwrite:!1,y:"+=0",duration:t}),i&&(i.ratio=o,i.autoSpeed=a)}function yb(){g.y=h+"px",g.renderTransform(1),xb()}function Cb(e){if(a){yb();var t=function _autoDistance(e,t){var r,n,o=e.parentNode||L,i=e.getBoundingClientRect(),s=o.getBoundingClientRect(),a=s.top-i.top,l=s.bottom-i.bottom,c=(Math.abs(a)>Math.abs(l)?a:l)/(1-t),u=-c*t;return 0<c&&(n=.5==(r=s.height/(B.innerHeight+s.height))?2*s.height:2*Math.min(s.height,-c*r/(2*r-1))*(t||1),u+=t?-n*t:-n/2,c+=n),{change:c,offset:u}}(r,N(0,1,-e.start/(e.end-e.start)));v=t.change,u=t.offset}else v=(e.end-e.start)*(1-o),u=0;d.forEach(function(e){return v-=e.distance*(1-o)}),e.vars.onUpdate(e),l&&l.progress(1)}var o,i,a,l,c,u,s=Ia("speed",e,n,r),f=Ia("lag",t,n,r),h=I.getProperty(r,"y"),g=r._gsap,d=[],p=[],v=0;return xb(),(1!==o||a||l)&&(Cb(i=V.create({trigger:a?r.parentNode:r,scroller:m,scrub:!0,refreshPriority:-999,onRefreshInit:yb,onRefresh:Cb,onKill:function onKill(e){var t=b.indexOf(e);0<=t&&b.splice(t,1),yb()},onUpdate:function onUpdate(e){var t,r,n,o=h+v*(e.progress-c),i=d.length,s=0;if(e.offset){if(i){for(r=-A,n=e.end;i--;){if((t=d[i]).trig.isActive||r>=t.start&&r<=t.end)return void(l&&(t.trig.progress+=t.trig.direction<0?.001:-.001,t.trig.update(0,0,1),l.resetTo("y",parseFloat(g.y),-R,!0),_&&l.progress(1)));r>t.end&&(s+=t.distance),n-=t.distance}o=h+s+v*((I.utils.clamp(e.start,e.end,r)-e.start-s)/(n-e.start)-c)}o=function _round(e){return Math.round(1e5*e)/1e5||0}(o+u),p.length&&!a&&p.forEach(function(e){return e(o-s)}),l?(l.resetTo("y",o,-R,!0),_&&l.progress(1)):(g.y=o+"px",g.renderTransform(1))}}})),I.core.getCache(i.trigger).stRevert=Ha,i.startY=h,i.pins=d,i.markers=p,i.ratio=o,i.autoSpeed=a,r.style.willChange="transform"),i}var n,m,t,i,b,s,a,l,c,u,r,f,h,g,d=e.smoothTouch,p=e.onUpdate,v=e.onStop,w=e.smooth,S=e.onFocusIn,T=e.normalizeScroll,x=this,E="undefined"!=typeof ResizeObserver&&new ResizeObserver(function(){return i.refresh()}),C=e.effectsPrefix||"",k=V.getScrollFunc(B),P=1===V.isTouch?!0===d?.8:parseFloat(d)||0:0===w||!1===w?0:parseFloat(w)||.8,A=0,R=0,_=1,z=G(0),H={y:0};function refreshHeight(){return t=n.clientHeight,n.style.overflow="visible",O.style.height=t+"px",t-B.innerHeight}Fa(),V.addEventListener("killAll",Fa),I.delayedCall(.5,function(){return _=0}),this.scrollTop=Aa,this.scrollTo=function(e,t,r){var n=I.utils.clamp(0,V.maxScroll(B),isNaN(e)?o.offset(e,r):+e);t?u?I.to(o,{duration:P,scrollTop:n,overwrite:"auto",ease:Y}):k(n):Aa(n)},this.offset=function(e,t){var r,n=(e=U(e)[0]).style.cssText,o=V.create({trigger:e,start:t||"top top"});return b&&Da([o]),r=o.start,o.kill(!1),e.style.cssText=n,I.core.getCache(e).uncache=1,r},this.content=function(e){if(arguments.length){var t=U(e||"#smooth-content")[0]||O.children[0];return t!==n&&(c=(n=t).getAttribute("style")||"",E&&E.observe(n),I.set(n,{overflow:"visible",width:"100%",boxSizing:"border-box",y:"+=0"}),P||I.set(n,{clearProps:"transform"})),this}return n},this.wrapper=function(e){return arguments.length?(m=U(e||"#smooth-wrapper")[0]||function _wrap(e){var t=D.querySelector(".ScrollSmoother-wrapper");return t||((t=D.createElement("div")).classList.add("ScrollSmoother-wrapper"),e.parentNode.insertBefore(t,e),t.appendChild(e)),t}(n),l=m.getAttribute("style")||"",refreshHeight(),I.set(m,P?{overflow:"hidden",position:"fixed",height:"100%",width:"100%",top:0,left:0,right:0,bottom:0}:{overflow:"visible",position:"relative",width:"100%",height:"auto",top:"auto",bottom:"auto",left:"auto",right:"auto"}),this):m},this.effects=function(e,t){if(b=b||[],!e)return b.slice(0);(e=U(e)).forEach(function(e){for(var t=b.length;t--;)b[t].trigger===e&&b[t].kill()});t=t||{};var r,n,o=t.speed,i=t.lag,s=[];for(r=0;r<e.length;r++)(n=Ja(e[r],o,i,r))&&s.push(n);return b.push.apply(b,s),s},this.sections=function(e,t){if(s=s||[],!e)return s.slice(0);var r=U(e).map(function(t){return V.create({trigger:t,start:"top 120%",end:"bottom -20%",onToggle:function onToggle(e){t.style.opacity=e.isActive?"1":"0",t.style.pointerEvents=e.isActive?"all":"none"}})});return t&&t.add?s.push.apply(s,r):s=r.slice(0),r},this.content(e.content),this.wrapper(e.wrapper),this.render=function(e){return za(e||0===e?e:A)},this.getVelocity=function(){return z.getVelocity(-A)},V.scrollerProxy(m,{scrollTop:Aa,scrollHeight:function scrollHeight(){return refreshHeight()&&O.scrollHeight},fixedMarkers:!1!==e.fixedMarkers&&!!P,content:n,getBoundingClientRect:function getBoundingClientRect(){return{top:0,left:0,width:B.innerWidth,height:B.innerHeight}}}),V.defaults({scroller:m});var F=V.getAll().filter(function(e){return e.scroller===B||e.scroller===m});F.forEach(function(e){return e.revert(!0)}),i=V.create({animation:I.fromTo(H,{y:0},{y:function y(){return-refreshHeight()},immediateRender:!1,ease:"none",data:"ScrollSmoother",duration:100,onUpdate:function onUpdate(){if(this._dur){var e=h;e&&(ya(i),H.y=A),za(H.y,e),ua(),p&&!u&&p(x)}}}),onRefreshInit:function onRefreshInit(){if(b){var e=V.getAll().filter(function(e){return!!e.pin});b.forEach(function(r){r.vars.pinnedContainer||e.forEach(function(e){if(e.pin.contains(r.trigger)){var t=r.vars;t.pinnedContainer=e.pin,r.vars=null,r.init(t,r.animation)}})})}f=A,H.y=m.scrollTop=0},id:"ScrollSmoother",scroller:B,invalidateOnRefresh:!0,start:0,refreshPriority:-9999,end:refreshHeight,onScrubComplete:function onScrubComplete(){z.reset(),v&&v(o)},scrub:P||!0,onRefresh:function onRefresh(e){ya(e),H.y=-k(),za(H.y),_||e.animation.progress(I.utils.clamp(0,1,f/-e.end))}}),this.smooth=function(e){return arguments.length&&(P=e||0),arguments.length?i.scrubDuration(e):i.getTween()?i.getTween().duration():0},i.getTween()&&(i.getTween().vars.ease=e.ease||Y),this.scrollTrigger=i,e.effects&&this.effects(!0===e.effects?"[data-"+C+"speed], [data-"+C+"lag]":e.effects,{}),e.sections&&this.sections(!0===e.sections?"[data-section]":e.sections),F.forEach(function(e){e.vars.scroller=m,e.init(e.vars,e.animation)}),this.paused=function(e,t){return arguments.length?(!!u!==e&&(e?(i.getTween()&&i.getTween().pause(),k(-A),z.reset(),(r=V.normalizeScroll())&&r.disable(),(u=V.observe({preventDefault:!0,type:"wheel,touch,scroll",debounce:!1,allowClicks:!0,onChangeY:function onChangeY(){return Aa(-A)}})).nested=J(L,"wheel,touch,scroll",!0,!1!==t)):(u.nested.kill(),u.kill(),u=0,r&&r.enable(),i.progress=(-A-i.start)/(i.end-i.start),ya(i))),this):!!u},this.kill=function(){o.paused(!1),ya(i),i.kill();for(var e=(b||[]).concat(s||[]),t=e.length;t--;)e[t].kill();V.scrollerProxy(m),V.removeEventListener("killAll",Fa),V.removeEventListener("refresh",Ea),O.style.removeProperty("height"),m.style.cssText=l,n.style.cssText=c;var r=V.defaults({});r&&r.scroller===m&&V.defaults({scroller:B}),o.normalizer&&V.normalizeScroll(!1),clearInterval(a),j=null,E&&E.disconnect(),B.removeEventListener("focusin",Ca)},this.refresh=function(e,t){return i.refresh(e,t)},T&&(this.normalizer=V.normalizeScroll(!0===T?{debounce:!0,content:!P&&n}:T)),V.config(e),"overscrollBehavior"in B.getComputedStyle(O)&&I.set([O,L],{overscrollBehavior:"none"}),"scrollBehavior"in B.getComputedStyle(O)&&I.set([O,L],{scrollBehavior:"auto"}),B.addEventListener("focusin",Ca),a=setInterval(ua,250),"loading"===D.readyState||requestAnimationFrame(function(){return V.refresh()})}t.version="3.11.1",t.create=function(e){return j&&e&&j.content()===U(e.content)[0]?j:new t(e)},t.get=function(){return j},r()&&I.registerPlugin(t),e.ScrollSmoother=t,e.default=t;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});
</script>

<script>
// create smooth scrolling
let smoother = ScrollSmoother.create({
  smooth: 2
});

// Projects Interactions
$(".projects_link").each(function (index) {
  // vars
  let relatedPopupItem = $(".popup_item").eq(index);
  let projectImg = $(this).find(".projects_img");
  let popupImg = relatedPopupItem.find(".projects_img");
  projectImg.attr("data-flip-id", index);
  popupImg.attr("data-flip-id", index);
  // initial states
  gsap.set(relatedPopupItem.find(".popup_heading"), { yPercent: -100 });

  // Popup Interaction
  let openPopup = gsap
    .timeline({
      paused: true,
      onStart: () => {
        smoother.paused(true);
      },
      onReverseComplete: () => {
        smoother.paused(false);
      },
      defaults: {
        duration: 0.7,
        ease: "power1.inOut"
      }
    })
    .to($(this).find(".projects_heading"), { yPercent: 100 })
    .to($(this).find(".projects_p"), { yPercent: 100, opacity: 0 }, "<")
    .to($(this).parent().siblings(), { opacity: 0, duration: 0.5 }, "<")
    .to(relatedPopupItem.find(".popup_heading"), { yPercent: 0 })
    .from(relatedPopupItem.find(".popup_p"), { yPercent: 30, opacity: 0 }, "<");

  function toggleOpenClasses() {
    $("body").toggleClass("popup-open");
    relatedPopupItem.toggleClass("current");
    projectImg.toggleClass("current");
  }

  // Open Popup
  $(this).on("click", function () {
    // record states
    const state = Flip.getState(projectImg, { props: "backgroundPosition" });
    // toggle between states
    toggleOpenClasses();
    // animate between states
    Flip.from(state, {
      targets: popupImg,
      duration: 1,
      absolute: true,
      toggleClass: "flipping",
      ease: "power1.inOut"
    });

    openPopup.restart();
  });

  // Close Popup
  relatedPopupItem.find(".popup_back").on("click", function () {
    // record states
    const state = Flip.getState(popupImg, { props: "backgroundPosition" });
    // toggle between states
    toggleOpenClasses();
    // animate between states
    Flip.from(state, {
      targets: projectImg,
      duration: 1,
      absolute: true,
      toggleClass: "flipping",
      ease: "power1.inOut"
    });

    openPopup.reverse();
  });

  // Parallax Image Interaction
  gsap
    .timeline({
      scrollTrigger: {
        trigger: $(this),
        scrub: true
      },
      defaults: {
        ease: "none"
      }
    })
    .fromTo($(this).find(".projects_img"), { backgroundPosition: "50% 100%" }, { backgroundPosition: "50% 0%" })
    .fromTo($(this).find(".projects_content-wrap"), { yPercent: 30 }, { yPercent: -30 }, 0);
});
</script>
