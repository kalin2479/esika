import $ from 'jquery';
//require('../../dist/js/preloadjs.js');

var canvas, preloader, images;

$(document).ready(iniciarApp);

function iniciarApp(){
	var $miCanvas = $('#miCanvas'),
		$html = $('html'),
		$porcentaje = $('#porcentaje'),
		$arrImg = $('body img'),
		preload;

	$arrImg.each(function(index){
		console.log($(this).attr('src'));
	});

	/*

	var preload = new createjs.LoadQueue();
	preload.addEventListener("fileload", handleFileComplete);
	preload.loadFile("assets/preloadjs-bg-center.png");

	function handleFileComplete(event) {
		console.log('hola');
	}
	*/

	canvas = document.getElementById('miCanvas');
	
	$miCanvas.css({
		top : ($html.height() - $porcentaje.height())/2 + 'px',
		left : ($html.width() - $porcentaje.width())/2 + 'px',
	});

}