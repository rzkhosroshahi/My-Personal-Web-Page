(function() {
    const body = document.querySelector('body');
    const slide = document.querySelector('.slide');
    const checkBox = document.querySelector(".checkbox");
    let initialState = JSON.parse(localStorage.getItem('rezaBlueNight')) || localStorage.setItem('rezaBlueNight', false);
    const className = 'night';
    
    // window load make night shift theme
    if(initialState) {
        body.classList.add(`${className}`);
        checkBox.checked = initialState;
    }

    // night slide 
    const nightSlide = () => {
        const currentState = !JSON.parse(localStorage.getItem('rezaBlueNight'));
        localStorage.setItem('rezaBlueNight', currentState);

        if (currentState !== initialState) {
            body.classList.toggle(`${className}`);
            checkBox.checked = currentState;
        }
    };

    checkBox.addEventListener('change', (e) => e.target === checkBox && nightSlide()); 
}());