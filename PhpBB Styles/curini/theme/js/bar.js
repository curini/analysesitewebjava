$( document ).ready(function(){
	 // Construction et ajout progress bar
	var $progressBarContainer = $('<div/>').attr('class', 'bar-progression-container');
	$progressBarContainer.append($('<div/>').attr('class', 'bar-progression'));
	$progressBarContainer.appendTo($('body'));
	
	var width = 0;
	var id = setInterval(move, 10);

	function move(){
		width++; 
		$('.bar-progression').css( "width",width+"%"); 
	}
		
});



$( window).on("load",function(){

	function cacher(){
		$('.bar-progression-container').fadeOut('200');
	}
	setTimeout(cacher,1000);
	
});
