import{a as d,S as g,i as n}from"./assets/vendor-91164e01.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function h(t){const s="49429251-c344791abe1bae313073c39aa",o="https://pixabay.com/api/",a={key:s,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40};return d.get(o,{params:a}).then(e=>e.data).catch(()=>{throw new Error("Failed to fetch images from Pixabay")})}let l=null;function y(t,s){const o=t.map(({webformatURL:a,largeImageURL:e,tags:r,likes:i,views:m,comments:p,downloads:u})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${e}">
                <img 
                    class="gallery-image loading" 
                    src="${a}" 
                    alt="${r}"
                    loading="lazy"
                    onload="this.classList.remove('loading')"
                />
                <div class="image-info">
                    <p class="info-item">
                        <b>Likes</b>
                        <span>${i}</span>
                    </p>
                    <p class="info-item">
                        <b>Views</b>
                        <span>${m}</span>
                    </p>
                    <p class="info-item">
                        <b>Comments</b>
                        <span>${p}</span>
                    </p>
                    <p class="info-item">
                        <b>Downloads</b>
                        <span>${u}</span>
                    </p>
                </div>
            </a>
        </li>
    `).join("");s.innerHTML=o,l||(l=new g(".gallery a",{captionsData:"alt",captionDelay:250})),l.refresh()}function b(t){t.innerHTML=""}const L=document.querySelector(".form"),c=document.querySelector(".gallery"),f=document.querySelector(".loader");L.addEventListener("submit",t=>{t.preventDefault();const s=t.target.elements["search-text"].value.trim();if(!s){n.show({message:"Please enter a search query",messageColor:"#fff",backgroundColor:"#EF4040",position:"topRight"});return}b(c),f.classList.remove("is-hidden"),h(s).then(o=>{if(o.hits.length===0){n.show({message:"Sorry, there are no images matching your search query. Please try again.",messageColor:"#fff",backgroundColor:"#EF4040",position:"topRight"});return}y(o.hits,c)}).catch(o=>{n.show({message:"An error occurred while fetching images. Please try again later.",messageColor:"#fff",backgroundColor:"#EF4040",position:"topRight"})}).finally(()=>{f.classList.add("is-hidden"),t.target.reset()})});
//# sourceMappingURL=index.js.map
