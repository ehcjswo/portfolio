(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))b(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&b(h)}).observe(document,{childList:!0,subtree:!0});function x(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function b(e){if(e.ep)return;e.ep=!0;const o=x(e);fetch(e.href,o)}})();function k(){document.querySelectorAll(".page-click").forEach(t=>{t.addEventListener("click",a=>{a.preventDefault();const x=t.getAttribute("href");j(),setTimeout(()=>{window.location.href=x},4200)})})}k();document.querySelectorAll(".split").forEach(t=>{let a=t.innerText.split("").join("</span><span aria-hidden='true'>");t.innerHTML="<span aria-hidden='true'>"+a+"</span>",t.setAttribute("aria-label",t.innerText)});setTimeout(()=>{E()},1500);const D=document.querySelector(".loadLine"),s=document.querySelector("._l1"),r=document.querySelector("._l2"),c=document.querySelector("._l3"),p=document.querySelector("._l4"),i=document.querySelector("._l5"),l=document.querySelector("._l6"),n=document.querySelector("._l7"),y=document.querySelector("._l8"),u=document.querySelector("._l9"),g=document.querySelector("._l10"),d=document.querySelector("._l11"),m=document.querySelector("._l12"),f=document.querySelector("._c1"),q=document.querySelector(".line2"),S=document.querySelector(".line2_full"),_=document.querySelector(".line3"),w=document.querySelector(".line3_full"),L=document.querySelector(".blackBox1"),T=document.querySelector(".blackBox2"),O=document.querySelector(".whiteBox1"),A=document.querySelector(".whiteBox2"),v=document.querySelector("#sub_menu");function E(){gsap.set(".split",{opacity:1}),gsap.set(L,{opacity:0}),gsap.set(T,{opacity:0}),gsap.set(D,{opacity:1}),gsap.set(l,{attr:{x2:1500,y2:0}}),gsap.set(n,{attr:{x2:1920,y2:0}}),gsap.set(g,{attr:{x2:1500,y2:0}}),gsap.set(s,{attr:{x2:0,y2:0}}),gsap.set(r,{attr:{x2:0,y2:0}}),gsap.set(c,{attr:{x2:0,y2:0}}),gsap.set(p,{attr:{x2:0,y2:0}}),gsap.set(i,{attr:{x2:0,y2:0}}),gsap.set(y,{attr:{x2:1860,y2:0}}),gsap.set(u,{attr:{x2:1740,y2:0}}),gsap.set(d,{attr:{x1:0,x2:0}}),gsap.set(m,{attr:{y1:0,y2:0}}),gsap.set(f,{autoAlpha:0}),gsap.to(g,.4,{attr:{x1:0,x2:1500,y1:1500}}),gsap.to(n,.3,{attr:{x1:0,x2:1920,y1:1920},delay:.08}),gsap.to(l,.2,{attr:{x1:0,x2:1500,y1:1500},delay:.16}),gsap.to(s,.2,{attr:{x2:1500,y2:1500},delay:.8}),gsap.to(r,{attr:{x2:1740,y2:1740},delay:1.05}),gsap.to(c,{attr:{x2:1860,y2:1860},delay:1.1}),gsap.to(p,.3,{attr:{x2:1920,y2:1920},delay:.85}),gsap.to(i,.4,{attr:{x2:1500,y2:1500},delay:.92}),gsap.to(y,{attr:{x1:0,x2:1860,y1:1860},delay:1}),gsap.to(u,{attr:{x1:0,x2:1740,y1:1740},delay:1.2}),gsap.to(d,{attr:{x1:0,x2:1920},delay:1.15}),gsap.to(m,{attr:{y1:0,y2:1920},delay:1.1}),gsap.to(f,{autoAlpha:1,delay:1.25}),gsap.to(s,1,{delay:4,opacity:.1}),gsap.to(r,1,{delay:4,opacity:.1}),gsap.to(c,1,{delay:4,opacity:.1}),gsap.to(p,1,{delay:4,opacity:.1}),gsap.to(i,1,{delay:4,opacity:.1}),gsap.to(l,1,{delay:4,opacity:.1}),gsap.to(n,1,{delay:4,opacity:.1}),gsap.to(y,1,{delay:4,opacity:.1}),gsap.to(u,1,{delay:4,opacity:.1}),gsap.to(g,1,{delay:4,opacity:.1}),gsap.to(d,1,{delay:4,opacity:.1}),gsap.to(m,1,{delay:4,opacity:.1}),gsap.to(f,1,{delay:4,opacity:.1}),gsap.set(q,{height:"28.1vw"}),gsap.set(S,{height:"28.1vw",opacity:0}),gsap.set(_,{height:"28.1vw"}),gsap.set(w,{height:"28.1vw",opacity:0}),gsap.to(q,{delay:1.5,duration:2,ease:"power4.inOut",strokeDashoffset:0}),gsap.to(q,{delay:2.1,duration:1,opacity:0,ease:"power4.inOut"}),gsap.to(S,{delay:1.8,duration:1.5,opacity:1,ease:"power4.inOut",strokeDashoffset:0}),gsap.to(S,{delay:3.5,duration:2,opacity:0,ease:"power4.inOut",strokeDashoffset:0}),gsap.to(_,{delay:1.5,duration:2,ease:"power4.inOut",strokeDashoffset:0}),gsap.to(_,{delay:2.1,duration:1,opacity:0,ease:"power4.inOut",strokeDashoffset:0}),gsap.to(w,{delay:1.8,duration:1.5,opacity:1,ease:"power4.inOut",strokeDashoffset:0}),gsap.to(w,{delay:3.5,duration:2,opacity:0,ease:"power4.inOut",strokeDashoffset:0}),gsap.set(".loading .split span",{autoAlpha:0,y:200}),setTimeout(()=>{let t=gsap.timeline();t.to(".loading .split span",{delay:3.5,autoAlpha:1,y:0,duration:1.4,ease:"back.out(4)",stagger:{amount:.4,from:"center"}}),t.to(".loading .split span",{delay:3.5,y:250,duration:1.4,ease:"expo.out",stagger:{amount:.4,from:"center"},delay:1.5}),t.to("#section1 .title",{opacity:1}),t.to("#section1 .img",{opacity:1}),t.to(v,{opacity:1})},2e3)}function j(){let t=gsap.timeline();t.to("#section1 .img",{autoAlpha:0}),t.to("#section1 .title",{autoAlpha:0}),t.to(v,{autoAlpha:0}),t.to(".loading .split span",{y:0,duration:1.4,ease:"expo.out",stagger:{amount:.4,from:"center"}}),t.set(O,{opacity:1,x:-1e3}),t.set(A,{opacity:1,x:1e3}),t.to(O,{x:0,ease:"expo.out"},"e"),t.to(A,{x:"0%",ease:"expo.out"},"e"),gsap.to(s,1,{opacity:0}),gsap.to(r,1,{opacity:0}),gsap.to(c,1,{opacity:0}),gsap.to(p,1,{opacity:0}),gsap.to(i,1,{opacity:0}),gsap.to(l,1,{opacity:0}),gsap.to(n,1,{opacity:0}),gsap.to(y,1,{opacity:0}),gsap.to(u,1,{opacity:0}),gsap.to(g,1,{opacity:0}),gsap.to(d,1,{opacity:0}),gsap.to(m,1,{opacity:0}),gsap.to(f,1,{opacity:0})}new hoverEffect({parent:document.querySelector(".img"),intensity:.5,image1:"images/bgImg_06.jpg",image2:"images/bgImg_02.jpg",displacementImage:"images/10.jpg",hover:!0});
