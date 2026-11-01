"use strict";
const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('#primary-nav');
if(menu && nav){
 const close=()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Открыть меню');};
 menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Закрыть меню':'Открыть меню');});
 nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){close();menu.focus();}});
}
const link=document.querySelector('[data-registration]');
if(link?.getAttribute('href')==='#registration')link.addEventListener('click',e=>e.preventDefault());else link?.removeAttribute('aria-disabled');
const progress=document.querySelector('.progress');
function update(){const max=document.documentElement.scrollHeight-innerHeight;if(progress)progress.style.width=(max>0?scrollY/max*100:0)+'%';}
addEventListener('scroll',update,{passive:true});addEventListener('resize',update);update();
