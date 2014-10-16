$(function(){
	/*
#####################################
	Initial Animation
#####################################
	*/
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
		$('#main-landing').css({ 'height' : wh });
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
	/*
#####################################
	MENU
#####################################
	*/	

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
		//$('.nav-wrapper').css({ background: '#ccc'});
	}
	else{
		$('.nav-wrapper').removeClass('nav-open');
		//$('.nav-wrapper').css({ background: 'none'});
	}
	console.log(scroll);
});
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