    const body = document.querySelector('body');
    const slide = document.querySelector('.slide');
    const checkBox = document.querySelector(".checkbox");

    const checkNightShift = () => {
        let nightState = JSON.parse(localStorage.getItem('rezaBlueNight'));
        if(nightState)  {
            body.classList.add('night');
            checkBox.checked = nightState;
        }
        else {
            body.classList.remove('night');
            checkBox.checked = nightState;            
        }
    }; 

    checkNightShift(); 

    const nightSlide = (e) =>{
       if(e.target.checked) { 
           localStorage.setItem('rezaBlueNight',true);
           checkNightShift();
        }
       else if(!e.target.checked) {
           localStorage.setItem('rezaBlueNight', false);
           checkNightShift();
       }
    };

    window.addEventListener('click',(e) => {if(e.target === checkBox) nightSlide(e)}); 
