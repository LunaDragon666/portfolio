import { portfolio } from "./settings/data.js";

const portfolioContainer = document.querySelector(".portfolio-container");

portfolio.forEach(work => {
  portfolioContainer.innerHTML += `
    <figure class="sample">
      <div class="sample-photo">
        <a>
          <img src="${work.image}" alt="${work.image}" class="sample-img">
        </a>
      </div>
      <div class="sample-content">
        <h3 class="sample-heading">${work.name}</h3>
        <div class="sample-title">
          <div class="year-tag">${work.year}</div>
          <div class="category">${work.category}</div>
        </div>
        <p class="sample-description">${work.description}</p>
        <div class="btn-wrap">
        <a class="work-link" id="main" href="${work.prototype}" target="_blank">Prototype</a>
        <a class="work-link" href="${work.github}" target="_blank">GitHub</a>
        </div>
      </div> 
    </figure>  
  <hr>     
  `;
});