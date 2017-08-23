import $ from 'jquery';

import {TweenMax, CSSPlugin, TimelineLite} from "gsap";

//import Draggable from "gsap/Draggable";

var objectSlider;


var $activeSlide = $('.active'),
	$homeSlide = $('.bgSlide'),
	$slideNavPrev = $('.slideNavPrev'), 
	$slideNavNext = $('.slideNavNext'),
	$slideNavPrevA = $('.slideNavPrev a'), 
	$slideNavNextA = $('.slideNavNext a'), 
	$hero = $('.bodySlider');


function init(){
	var tl = new TimelineLite();
	//Ocultar todas los elementos menos el que se encuentra activo
	TweenLite.set($homeSlide.not($activeSlide),{autoAlpha : 0});
	tl.set($activeSlide,{autoAlpha : 1, className : '+=active'});


	//Desactivar la flecha hacia abajo en la carga de la página

	TweenLite.set($slideNavPrev,{autoAlpha : 0.2})

}

// Comenzamos a ejecutar la funcion init
objectSlider = init();

function goToNextSlide(slideOut,slideIn){

	var tl = new TimelineLite(),
		index = slideIn.index(),
		size = $('.bodySlider .bgSlide').length -1;

		if (slideIn.length !== 0){
			// ir al siguiente slide timeline
			// +=active -> significa add la clase active
			// -=active -> significa remove la clase active
			tl.set(slideIn,{className : '+=active'});
			tl.set(slideOut, {className : '-=active'});
			tl.to(slideOut,1,{autoAlpha: 0, ease : Power3.easeInOut}, 0);
			tl.to(slideIn,1,{autoAlpha: 1, ease : Power3.easeInOut}, 0);
		};

		TweenLite.set($slideNavPrev, {autoAlpha : 1});

		console.log(index + ' ' + size);

		if (index === size){
			TweenLite.to($slideNavNext, 0.3 , {autoAlpha : 0.2});
		}
}

// Click a Navigation - ir al siguiente slide

$slideNavNext.click(function(e){
	e.preventDefault();
	console.log(e);

	var slideOut = $('.bgSlide.active'),
		slideIn = $('.bgSlide.active').next('.bgSlide');

	goToNextSlide(slideOut,slideIn);
});


// Ahora haremos para la parte de retroceder

function goToPrevSlide(slideOut,slideIn){

	var tl = new TimelineLite(),
		index = slideIn.index(),
		size = $('.bodySlider .bgSlide').length;

		if (slideIn.length !== 0){

			// ir al siguiente slide timeline

			// +=active -> significa add la clase active
			// -=active -> significa remove la clase active

			tl.set(slideIn,{className : '+=active'});
			tl.set(slideOut, {className : '-=active'});
			tl.to(slideOut,1,{autoAlpha: 0, ease : Power3.easeInOut}, 0);
			tl.to(slideIn,1,{autoAlpha: 1, ease : Power3.easeInOut}, 0);
		};

		TweenLite.set($slideNavNext, {autoAlpha : 1});

		console.log(index + ' , ' + size);

		if (index === 0){
			TweenLite.to($slideNavPrev, 0.3 , {autoAlpha : 0.2});
		}
}

// Click a Navigation - ir hacia atras

$slideNavPrev.click(function(e){
	e.preventDefault();
	console.log(e);

	var slideOut = $('.bgSlide.active'),
		slideIn = $('.bgSlide.active').prev('.bgSlide');

	goToPrevSlide(slideOut,slideIn);
});


$('.wrapperSlider').mousemove(function(event){
	// Detecta la posicion del mouse.

	var xPos = (event.clientX/$('.wrapperSlider').width()) - 0.5;
	var yPos = (event.clientY/$('.wrapperSlider').width()) - 0.5;

	//console.log(xPos + ', ' + yPos);

	//Incline el contenedor del hero

	//TweenLite.to($hero, 0.6,{rotationY : 5 * xPos, rotationX : 5 * yPos, ease : Power1.easeOut, transformPerspective : 600, transformOrigin : 'center'});

	//console.log(event.pageX +', ' + event.pageY);
});



module.exports = objectSlider;

