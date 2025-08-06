import{a as m,S as g,i as a}from"./assets/vendor-CJl_eA7O.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y="51652157-5fef3e71e0507c5b488fe07e7",h="https://pixabay.com/api/";async function b(s){const o={key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await m.get(h,{params:o})).data}catch(r){throw new Error(r.message)}}const l=document.querySelector(".gallery"),u=document.querySelector(".loader");let c=null;function L(s){const o=s.map(({largeImageURL:r,webformatURL:n,tags:e,likes:t,views:i,comments:d,downloads:p})=>`
      <li class="gallery-item">
        <a href="${r}">
          <img src="${n}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${i}</p>
          <p><b>Comments:</b> ${d}</p>
          <p><b>Downloads:</b> ${p}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",o),c?c.refresh():c=new g(".gallery a",{captionsData:"alt",captionDelay:250})}function w(){l.innerHTML=""}function S(){u.classList.remove("hidden")}function v(){u.classList.add("hidden")}const f=document.querySelector(".form"),$=f.elements["search-text"];f.addEventListener("submit",async s=>{s.preventDefault();const o=$.value.trim();if(!o){a.warning({title:"Warning",message:"Please enter a search term.",position:"topRight"});return}w(),S();try{const r=await b(o);r.hits.length===0?a.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):L(r.hits)}catch(r){a.error({title:"Error",message:`Something went wrong: ${r.message}`,position:"topRight"})}finally{v()}});
//# sourceMappingURL=index.js.map
