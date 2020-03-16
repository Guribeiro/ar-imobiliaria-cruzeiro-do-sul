
/*
const target = document.querySelectorAll('[data-anime]');

const animationClass = 'animate';

function animeScroll(){
    
    const windowTop = window.pageXOffset + ((window.innerHeight *  3) / 4);
    target.forEach(function(element){
        element.classList.add(animationClass);
    });
    
   
}


window.addEventListener('scroll', function(){
    animeScroll();
})

*/

$(document).ready(function () {

    $('html, body').animate({
        scrollTop: $('#article-anime').offset().top - 230
    }, 2000);

});

$(document).ready(function () {

    $('html, body').animate({
        scrollTop: $('#article-anime-compra').offset().top - 270
    }, 2000);

});


/*
$(document).ready(function(){

});
*/
