const iconoMenu = document.querySelector('#iconoMenu');
    menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e)=>{
    //donde llamamos los eventos
    menu.classList.toggle('active');
    
});

