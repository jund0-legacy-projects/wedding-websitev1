"use strict"

var controllers = angular.module('alj.controllers', []);

controllers.controller('MainCtrl', function($scope, $window, $location, $route, $log){



	/*SideMenu*/
	$scope.showmenu=false;
	$scope.toggleMenu = function(url){
		
		$scope.showmenu=($scope.showmenu) ? false : true;
		if(typeof url != 'undefined'){
			console.log(url);	
		}
	}

	$scope.isActive = function (viewLocation) {
	    var active = (viewLocation === $location.path());
	    return active;
	};

	/*** Loading */
	$scope.$on('$viewContentLoaded', function(){
    	//Here your view content is fully loaded !!
    	//console.log('content loaded');
    	//$('#content-overlay').fadeOut();
    	//$('html,body').css({ 'overflow' : 'hidden', 'height' : '100%' });
    	$('#content-overlay').fadeOut(2000, function(){
		$('#wDate').animate({ opacity : 1, top: 0 }, 1000, function(){
			$('#groom, #bride').animate({opacity : 1}, 1000, function(){
				$('#wedding-piece').animate({opacity: 1}, 1000, function(){
					$('#center-heart').animate({opacity:0}, 400, function(){
						$('#center-flower').addClass('flower-animate');
						$('#wMsg').animate({opacity: 1, top:0}, 1000, function(){
							//$('html,body').css({ 'overflow' : 'auto', 'height' : 'auto' });
						});
					});
				});
			});
		});
	});
  	});
	
  	//$scope.loading = true;
  	
  	//* //Important design pattern
  	/*myService.get().then(function ( response ){
  		$scope.loading = false;
  	}, function( response ){
  		$scope.loading = false
  	} );//*/
	
	$scope.$on("$locationChangeStart", function(event, next, current) {  
        //$scope.loading = true;
        //console.log('locationstart');
        //console.log(event);
        //console.log(next);
        //console.log(current);

        //$('#main-view').fadeOut(4000);
	//$('#content-overlay').fadeOut(2000);
		//$('#main-content').animate({ opacity: 0 },1000, function(){
			//$('#content-overlay').fadeIn(100);
			//console.log($scope, $route, $location);
		//});
      });
	$scope.$on("$locationChangeSuccess", function(event, next, current) { 
        $log.info("location success"); 
        //$log.info("location changing to:" + next); 
        //$scope.loading = false;
        //$('#main-view').fadeIn(4000);
        $scope .$watch(function(){return $window.innerHeight;}, function(value){ console.log('height: '+value); })
      });
	
	/*** Loading */
	//$scope.$on("")
});