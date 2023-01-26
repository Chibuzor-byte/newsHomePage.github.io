const menu = document.querySelector(".header__menu");
const close = document.querySelector(".modal__close");

const modalBox = document.querySelector('.modal__box');


menu.addEventListener('click', () => {
   console.log('love') 
    modalBox.style.display = "block";
   modalBox.style.width = "70%";

})


close.addEventListener('click', () => {
   console.log('love') 
   modalBox.style.display = "none";
   modalBox.style.width = "0%";

})