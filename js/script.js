// FEATURED GAMESHOP
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

// MOBILE MENU 
const hamMenu = document.querySelector('.ham-menu');
const dropMenu = document.querySelector('.drop-menu');
const dropMenuList = document.querySelectorAll('.drop-menu div');
const dropMenuListText = document.querySelectorAll('.drop-menu div a');

hamMenu.addEventListener('click',() => {
  dropMenu.classList.toggle('drop-down');
  hamMenu.children[0].classList.toggle('top');
  hamMenu.children[1].classList.toggle('mid');
  hamMenu.children[2].classList.toggle('bottom');
})

dropMenuList.forEach(li => {

    li.addEventListener('mouseover', (e) => {
    li.style.backgroundImage = "linear-gradient(to right,#EBF5F8,#58A29F)";
    li.children[0].style.color = "white";
  })

    li.addEventListener('mouseleave', (e) => {
    li.style.backgroundImage = "linear-gradient(to right,#EBF5F8,#EBF5F8)";
    li.children[0].style.color = "#58A29F";
  })

})