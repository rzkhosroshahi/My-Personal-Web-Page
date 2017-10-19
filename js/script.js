    const body = document.querySelector('body');
    const slide = document.querySelector('.slide');
    const checkBox = document.querySelector(".checkbox");

    const night = (e) =>{
       if(e.target.checked) body.classList.add('night');
       else if(!e.target.checked) body.classList.remove('night');
    };
    window.addEventListener('click',(e) => {if(e.target === checkBox) night(e)}); 