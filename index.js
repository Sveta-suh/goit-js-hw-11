import{a as g,S as l,i as a}from"./assets/vendor-BKUPnic7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y="51652157-5fef3e71e0507c5b488fe07e7",h="https://pixabay.com/api/";async function b(s){const o={key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await g.get(h,{params:o})).data}catch(r){throw new Error(r.message)}}const u=document.querySelector(".gallery"),f=document.querySelector(".loader");let L=new l(".gallery a",{captionsData:"alt",captionDelay:250});function w(s){const o=s.map(({largeImageURL:r,webformatURL:n,tags:e,likes:t,views:i,comments:d,downloads:m})=>`
      <li class="gallery-item">
        <a href="${r}">
          <img src="${n}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${i}</p>
          <p><b>Comments:</b> ${d}</p>
          <p><b>Downloads:</b> ${m}</p>
        </div>
      </li>
    `).join("");u.insertAdjacentHTML("beforeend",o),L.refresh()}function S(){u.innerHTML=""}function $(){f.classList.remove("hidden")}function v(){f.classList.add("hidden")}const p=document.querySelector(".form"),q=p.elements["search-text"];let c=null;p.addEventListener("submit",async s=>{s.preventDefault();const o=q.value.trim();if(!o){a.warning({title:"Warning",message:"Please enter a search term.",position:"topRight"});return}S(),$();try{const r=await b(o);r.hits.length===0?a.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(w(r.hits),c?c.refresh():c=new l(".gallery a",{captionsData:"alt",captionDelay:250}))}catch(r){a.error({title:"Error",message:`Something went wrong: ${r.message}`,position:"topRight"})}finally{v()}});
//# sourceMappingURL=index.js.map
