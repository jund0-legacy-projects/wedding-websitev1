'use strict';
var directives = angular.module('alj.directives',[])
/**** Skrollr */
directives.directive('skrollr', function() {
	var directiveDefinitionObject = {
	  link: function() {
	    skrollr.init();
	  }
	};

return directiveDefinitionObject;
});
directives.directive('mainNav', function(){
	return {
		link: function(scope,element, attributes){

			var mainNavLinks = element.find('a');
			mainNavLinks.bind('click', function(){
				var mainLanding = angular.element('#main-view');
				
				$('html, body').animate({
                        scrollTop: mainLanding.offset().top+5
                    }, 1000);
			});

			element.bind('mouseenter', function(){
				//console.log('mouseenter main nav');
				scope.style = function () {
					return { 
	                 	'height': '50px', 
						'width': '500px',
						'border-radius' : '25px'
	                };
				};
				//console.log(element.find('#menu-icon'));
				element.find('#menu-icon').css({ 'height' : 50, 'width' : 50});
				scope.$apply(); 
			});
			element.bind('mouseleave', function(){
				scope.style = function () {
					return { 
	                 	'height': '40px', 
						'width': '40px',
						'border-radius' : '20px'
	                };
				};
				element.find('#menu-icon').css({ 'height' : 40, 'width' : 40});
				scope.$apply();
				//console.log(element.firstChild);
				//console.log('mouseenter main leave');
			});
		}
	}
});
directives.directive('scrollToContent', function(){
	return {
		link: function(scope,element,attributes){
			if(attributes.ngClick || attributes.href === '' || attributes.href === '#'){
                element.bind('click', function(e){
                    var mainLanding = angular.element('#main-view');
                    console.log('test content');
                    e.preventDefault();
                    $('html, body').animate({ scrollTop: mainLanding.offset().top+5}, 1000);
                });
            }
		}
	}
});

directives.directive('resize', function ($window) {
	return function (scope, element) {
		var w = angular.element($window);
		scope.getWindowDimensions = function () {
			return { 'h': w.height(), 'w': w.width() };
		};
		scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
			scope.windowHeight = newValue.h;
            scope.windowWidth = newValue.w;
            
            scope.style = function () {
				return { 
                    'height': (newValue.h ) + 'px'
                };
			};
            
		}, true);
	
		w.bind('resize', function () {
			scope.$apply();
		});
	}
});

directives.directive('skrollrTag', [ 'skrollrService', 
    function(skrollrService){
        return {
            link: function(scope, element, attrs){
                skrollrService.skrollr().then(function(skrollr){
                    skrollr.refresh();
                });

               /*This will watch for any new elements being added as children 
               to whatever element this directive is placed on. If new elements are added, 
               Skrollr will be refreshed (pulling in the new elements
               */
               
               scope.$watch(
                   function () { return element[0].childNodes.length; },
                   function (newValue, oldValue) {
                   if (newValue !== oldValue) {
                       skrollrService.skrollr().then(function(skrollr){
                           skrollr.refresh();
                       });
                   }
               });
				
            }
        };
    }
]);

/* Fixed Navigation */
directives.directive("fixScrollNav", function ($window) {
    return function (scope, element, attrs) {
 
        function getScrollOffsets(w) {
 
            // Use the specified window or the current window if no argument 
            w = w || window;
 
            // This works for all browsers except IE versions 8 and before
            if (w.pageXOffset != null) return {
                x: w.pageXOffset,
                y: w.pageYOffset
            };
 
            // For IE (or any browser) in Standards mode
            var d = w.document;
            if (document.compatMode == "CSS1Compat") {
                return {
                    x: d.documentElement.scrollLeft,
                    y: d.documentElement.scrollTop
                };
            }
 
            // For browsers in Quirks mode
            return {
                x: d.body.scrollLeft,
                y: d.body.scrollTop
            };
        }
        
        //console.log(element);
        angular.element($window).bind("scroll", function () {
            var offset = getScrollOffsets($window);
            var mainLanding = angular.element('#main-view').offset();
            //console.log('mainLanding: ');
            //console.log(mainLanding.top);
            //console.log(offset);
            if (offset.y > mainLanding.top ) {
                 //scope.boolChangeClass = true;
                 
                 element.addClass('nav-open');
             } else {
                 //scope.boolChangeClass = false;
                 element.removeClass('nav-open');
             }
            
            scope.$apply();
        });

        	
    };
});

directives.directive('activeLink',['$location', function(){
	return {
		restrict: 'A',
		link: function(scope,element,attributes){
			var activeClass = attributes.activeLink;
			var path = attributes.href;

			path = $(element).children("a")[0].hash.substring(1);

			scope.location = location;
			scope.$watch('location.path()', function(newPath){
				if(path === newPath){
					element.addClass(activeClass);
				}else{
					element.removeClass(activeClass);
				}
			});
		}
	};

}]);


directives.directive('mySlideController', ['$swipe',
	function($swipe) {
		return {
			restrict: 'EA',
			link: function(scope, ele, attrs, ctrl) {
			var startX, pointX;
			$swipe.bind(ele, {
				'start': function(coords) {
				startX = coords.x;
				pointX = coords.y;
				},
				'move': function(coords) {
				var delta = coords.x - pointX;
				// ...
				},
				'end': function(coords) {
				// ...
				},
				'cancel': function(coords) {
				// ...
				}
			});
		}
	}
}]);


directives.directive("loader", function ($rootScope) {
    return function ($scope, element, attrs) {
        $scope.$on("loader_show", function () {
            //return element.css({'opacity': '1'}).show();
            return element.fadeIn(500);
        });
        return $scope.$on("loader_hide", function () {
            //return element.css({'opacity': '0'}).hide();
            return element.fadeOut(500);
        });
    };
}
)
