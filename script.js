
const svgImg = document.querySelector('#svg-bg');
const emailInput = document.querySelector('#email-input');
var emailstore;
emailInput.addEventListener('input', function() {
   localStorage.setItem('emailstore', emailInput.value);
    });
    
window.onresize =  function (event)  {
    
    if (window.innerWidth > 577 ) {
            svgImg.src = "./assets/images/illustration-sign-up-desktop.svg";
    } else {
        svgImg.src = "./assets/images/illustration-sign-up-mobile.svg";
        }
    
}


if (window.innerWidth > 577 ) {
        svgImg.src = "./assets/images/illustration-sign-up-desktop.svg";
    } else {
        svgImg.src = "./assets/images/illustration-sign-up-mobile.svg";
    }


