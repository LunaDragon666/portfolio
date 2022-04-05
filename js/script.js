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