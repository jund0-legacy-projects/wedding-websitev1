/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

$(function(){

$(window).load(function(){
	$('#content-overlay').fadeOut(2000, function(){
		$('#wDate').animate({ opacity : 1, top: 0 }, 1000, function(){
			$('#groom, #bride').animate({opacity : 1}, 1000, function(){
				$('#wedding-piece').animate({opacity: 1}, 1000, function(){
					$('#center-heart').animate({opacity:0}, 400, function(){
						$('#center-flower').addClass('flower-animate');
						$('#wMsg').animate({opacity: 1, top:0}, 1000);
					});
				});
			});
		});
	});
});

$('[data-toggle=offcanvas]').click(function() {
	console.log('toggle');
    $('.row-offcanvas').toggleClass('active');
  });

$('#nav-content > a').click(function(){
	$('html, body').animate({
                        scrollTop: $("#intro").offset().top+5
                    }, 1000);
});

	/*
#####################################
	Initial Animation
#####################################
	*/

//console.log($.browser.mobile);	




	/*var browserWindow = {
					height : $(window).height(), 
					width : $(window).width() 
				}	
	/*LANDING IMAGE*/
	var viewportHeight = $(window).height();
	console.log(viewportHeight);
	var wh = $(window).height();
	$('#main-landing').css({ 'height' : wh });
	$(window).resize(function(){
		$('#main-landing').css({ 'height' : $(window).height() });
		/*var s = skrollr.init({
                render: function(data) { 
                    $('#offset').text(data.curTop);
                },
                forceHeight : false
            });*/
	});
	var s = skrollr.init({
                render: function(data) { 
                    $('#offset').text(data.curTop);
                },
                forceHeight : false
            });
	
$('#wMsg').on('click', function(e){
	$('body').animate({"scrollTop": $('#intro').scrollTop()}, 1000);
	e.preventDefault();
});
	/*
#####################################
	MENU
#####################################
	*/	
if(!$.browser.mobile){
	$('.menu-container').hover(
		function(){
			//console.log('hover in');
			if(!$('.nav-wrapper').hasClass('nav-open')){
				$(this).css({
					height:50, 
					width:500,
					borderTopLeftRadius: 25, 
		    		borderTopRightRadius: 25, 
		    		borderBottomLeftRadius: 25, 
		    		borderBottomRightRadius: 25
				});
				
				$('#menu-icon').css({height:50, width:50});
			}
		}, function(){
			//console.log('hover out');
			if(!$('.nav-wrapper').hasClass('nav-open')){
				$(this).css({
					height:40, 
					width:40,
					borderTopLeftRadius: 20, 
		    		borderTopRightRadius: 20, 
		    		borderBottomLeftRadius: 20, 
		    		borderBottomRightRadius: 20
				});
				
				$('#menu-icon').css({height:40, width:40});
			}	
			
		});
	var landingSrollBottom = $('#main-landing').scrollTop() + $('#main-landing').height();
	console.log('landingSrollBottom: '+landingSrollBottom);
	$(window).scroll(function(){
		var scroll = $(this).scrollTop();
		if(scroll > landingSrollBottom){
			$('.nav-wrapper').addClass('nav-open');		
		}
		else{
			$('.nav-wrapper').removeClass('nav-open');
			
		}
		//console.log(scroll);
	});
}
	/*
#####################################
	MAP
#####################################
	*/	
    var markers = [];  
    
    $('.map-nav a').click(function(e){
    	console.log($(this).data('loc'));
    	
    	removeMarkers();
    	var loc, image;
    	var bounds = new google.maps.LatLngBounds();
    	switch($(this).data('loc')){
    		case 2:
    			loc = new google.maps.LatLng(33.8013603,-117.8762543);
    			image = 'img/map-icons/hotel.png';
    			break;
    		default:
    			//church
    			loc = new google.maps.LatLng(33.642531,-117.58336);		
    			image = 'img/map-icons/church.png';
    	}
    	 

    	marker = new google.maps.Marker({
		    map: map,
		    animation: google.maps.Animation.DROP,
		    position: loc,
		    icon: image
		  });
    	/*marker.setIcon(({
		      url: maps.icon,
		      size: new google.maps.Size(71, 71),
		      origin: new google.maps.Point(0, 0),
		      anchor: new google.maps.Point(17, 34),
		      scaledSize: new google.maps.Size(35, 35)
		    }));*/
    	//bounds.extend(loc);
		//map.fitBounds(bounds);

    	/*map.panTo(loc);
    	setTimeout(function(){
    		zoomFluid = map.getZoom();
    		zoomTo();
    	}, 1000);*/
    	markers.push(marker);
    	calcRoute(loc);
    	$('#map-overlay').fadeIn(800, function(){ $('.map-nav').fadeIn(); });
    	e.preventDefault();
    	
    });
    /*$('.map-controls a').click(function(e){
    	removeMarkers();
    	setTimeout(function(){
    		map.setZoom(9);	
    	}, 1000);
    	var mapcenter = new google.maps.LatLng(33.6839473,-117.7946942);
    	map.panTo(mapcenter);
    	//$('#map-overlay').fadeIn(800, function(){ $('.map-nav').fadeIn(); });
    	e.preventDefault();
    });*/

    function removeMarkers(){
    	console.log('removeMarkers');
    	console.log(markers);
    	for(var i = 0; i < markers.length; i++){
    		markers[i].setMap(null);
    	}
    }

    var zoomFluid;  
    function zoomTo(){
    	if(zoomFluid == 11){
    		$('.map-nav').fadeOut(800, function(){
    			$('#map-overlay').fadeOut();
    		});
    		return 0;
    	} 
    	else{
    		zoomFluid++;
    		map.setZoom(zoomFluid);
    		setTimeout(function(){ zoomTo(); }, 500);
    	}
    }



        
    var map;
    var geocoder;
    var markers = [];
    var directionsDisplay;
	var directionsService
	var smarker;
    function init() {
    	directionsService = new google.maps.DirectionsService();
    	directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 9,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(33.6839473,-117.7946942), // Irvine, CA
            //setMapType: 'G_NORMAL_MAP',
            mapTypeId: google.maps.MapTypeId.ROADMAP
            // This is where you would paste any style found on Snazzy Maps.
            // styles: [{featureType:"administrative",stylers:[{visibility:"off"}]},{featureType:"poi",stylers:[{visibility:"simplified"}]},{featureType:"road",stylers:[{visibility:"simplified"}]},{featureType:"water",stylers:[{visibility:"simplified"}]},{featureType:"transit",stylers:[{visibility:"simplified"}]},{featureType:"landscape",stylers:[{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{visibility:"on"}]},{featureType:"road.local",stylers:[{visibility:"on"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{visibility:"on"}]},{featureType:"road.arterial",stylers:[{visibility:"off"}]},{featureType:"water",stylers:[{color:"#5f94ff"},{lightness:26},{gamma:5.86}]},{},{featureType:"road.highway",stylers:[{weight:0.6},{saturation:-85},{lightness:61}]},{featureType:"road"},{},{featureType:"landscape",stylers:[{hue:"#0066ff"},{saturation:74},{lightness:100}]}]
        }; 
		geocoder = new google.maps.Geocoder();
        map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var input = document.getElementById('starting-loc');

       	/*var types = document.getElementById('type-selector');
		map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
		map.controls[google.maps.ControlPosition.TOP_LEFT].push(types);        
      	*/
        var autocomplete = new google.maps.places.Autocomplete(input);
  		autocomplete.bindTo('bounds', map);

  		directionsDisplay.setMap(map);
  		directionsDisplay.setPanel(document.getElementById('directions-panel'));

  		var infowindow = new google.maps.InfoWindow();
		var smarker = new google.maps.Marker({
			map: map,
			//anchorPoint: new google.maps.Point(0, -29),
			animation: google.maps.Animation.DROP
		 });
		

		google.maps.event.addListener(autocomplete, 'place_changed', function() {
    	
    		infowindow.close();
    		smarker.setVisible(false);
		    var place = autocomplete.getPlace();
		    if (!place.geometry) {
		      return;
		    }

		    // If the place has a geometry, then present it on a map.
		    /*if (place.geometry.viewport) {
		      map.fitBounds(place.geometry.viewport);
		    } else {
		      map.setCenter(place.geometry.location);
		      //map.setZoom(17);  // Why 17? Because it looks good.
		    }*/
		    /** @type {google.maps.Icon} 
		    marker.setIcon(({
		      url: maps.icon,
		      size: new google.maps.Size(71, 71),
		      origin: new google.maps.Point(0, 0),
		      anchor: new google.maps.Point(17, 34),
		      scaledSize: new google.maps.Size(35, 35)
		    }));*/

		    smarker.setPosition(place.geometry.location);
		    smarker.setVisible(true);

		    var address = '';
		    if (place.address_components) {
		      address = [
		        (place.address_components[0] && place.address_components[0].short_name || ''),
		        (place.address_components[1] && place.address_components[1].short_name || ''),
		        (place.address_components[2] && place.address_components[2].short_name || '')
		      ].join(' ');
		    }

		    infowindow.setContent('<div><strong>Starting Location</strong><br>' + address);
		    infowindow.open(map, smarker);
		  });

		  
		  /*List of Marchers*/
		  // San Francisco Solano
		  var church = new google.maps.LatLng(33.642531,-117.58336); 
		  // Anaheim Hilton Hilton
		  var reception = new google.maps.LatLng(33.8013603,-117.8762543);
		  var test = new google.maps.LatLng(33.6512807,-117.5924019);    
    }

    function calcRoute(endDestination) {
	  //var start = document.getElementById('start').value;
	  //var end = document.getElementById('end').value;

	  console.log('input: '+ document.getElementById('starting-loc').value);
	  var address = document.getElementById('starting-loc').value;
	  geocoder.geocode({ address: address }, function(results, status){
	  	if(status == google.maps.GeocoderStatus.OK){
	  		console.log(address + ' was found');

			  var request = {
			    origin: address,
			    destination: endDestination,
			    travelMode: google.maps.TravelMode.DRIVING
			  };
			  directionsService.route(request, function(response, status) {
			    if (status == google.maps.DirectionsStatus.OK) {
			      console.log(response);
			      directionsDisplay.setDirections(response);
			      $('.map-nav, .map-input').fadeOut(800, function(){
		    			$('#map-overlay').fadeOut();
		    		});

			    }
			  });

	  	}else{
	  		console.log(address + ' was not found');
	  	}			 
	  });
	  

	}
    google.maps.event.addDomListener(window, 'load', init);
    //google.maps.event.addDomListener(window, 'load', init);



});