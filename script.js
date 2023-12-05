let animation = "on";

function navBar() {

    if (animation == "on") {
        document.querySelector('.line1').style.animationName = 'cima'
        document.querySelector('.line2').style.animationName = 'meio'
        document.querySelector('.line3').style.animationName = 'baixo'
        document.querySelector('.menu').style.animationName = 'showBar'
        document.querySelector('.aba1').style.animationName = 'links'
        document.querySelector('.aba2').style.animationName = 'links'
        document.querySelector('.aba3').style.animationName = 'links'
        animation = "off"
        
    } else if (animation == "off") {
        document.querySelector('.line1').style.animationName = 'Vcima'
        document.querySelector('.line2').style.animationName = 'Vmeio'
        document.querySelector('.line3').style.animationName = 'Vbaixo'
        document.querySelector('.menu').style.animationName = 'hiddenBar'
        document.querySelector('.aba1').style.animationName = 'Vlinks'
        document.querySelector('.aba2').style.animationName = 'Vlinks'
        document.querySelector('.aba3').style.animationName = 'Vlinks'
        animation = "on"
    }

};