window.addEventListener(`DOMContentLoaded`, function(){
  `use strict`


  function tabs(){
    let intr = document.querySelectorAll(`.interior-block`),
        inl = document.querySelectorAll(`.inlet-block`),
        inlet = document.querySelectorAll(`.inlet`),
        interior = document.querySelectorAll(`.interior`);

interior[0].addEventListener(`click`,function(){
      for(let i = 0; i < intr.length;i++){
        
          inl[i].classList.remove(`show`);
          inl[i].classList.add(`hide`);
          intr[i].classList.remove(`hide`);
          intr[i].classList.add(`show`);

        console.log(`close`);
      }
});
inlet[0].addEventListener(`click`,function(){
    for(let i = 0; i < intr.length;i++){
      
        intr[i].classList.remove(`show`);
        intr[i].classList.add(`hide`);
        inl[i].classList.remove(`hide`);
        inl[i].classList.add(`show`);
        
        console.log(`open`);
      }
});
}
tabs();
});