$(function(){
	/*var browserWindow = {
					height : $(window).height(), 
					width : $(window).width() 
				}	
	/*LANDING IMAGE*/
	var viewportHeight = $(window).height();
	console.log(viewportHeight);
	var wh = $(window).height();
	jQuery('#main-landing').css({ 'height' : wh });

	var s = skrollr.init({
                render: function(data) { 
                    $('#offset').text(data.curTop);
                },
                forceHeight : false
            });
});