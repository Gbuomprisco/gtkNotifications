(function( $ ){

  $.fn.notify = function(options) {

    var default_options = {
        'position': {'top': '5%', 'left': '75%'},
        'type': 'default',
        'duration': 2500
    }

    element = this;

    var types = ['error', 'default', 'success'];
    

    var methods = {
        
        getType: function(){
            if(options === undefined){
                null;
            } else {
                if((options['type'] != undefined) && ($.inArray(options['type'], types) < 0)){
                    console.log($.inArray(options['type'], types));
                    console.log(types)
                    throw "Choice a type among 'success', 'default' or 'error', or leave blank the variable"
                }
            }
        },

        init : function() {

            this.getType();

            try {
                if(options['type']){
                    element.removeClass().addClass('notify ' + options['type']);
                }
            } catch(e){
                null;
            }

            var settings = $.extend(default_options, options);

            element.addClass('notify-' + default_options['type']);

            element.css({
                'left': default_options['position']['left']
            });

            element.css('visibility', 'visible');
            element.animate({
                top: "0%",
                opacity: 0.2
            }, { duration: 300 }
            ).animate({
                opacity: 0.4,
                top: default_options['position']['top']
            }, { duration: 150 }
            ).animate({
                opacity: 0.8
            }, { duration: 150 }
            ).animate({
                opacity: 1
            }, { duration: 300 } 
            ).animate({
                opacity: 1
            }, { duration: default_options['duration'] }
            ).animate({
                opacity: 0.8
            }, { duration: 150 }
            ).animate({
                opacity: 0.4
            }, { duration: 100 }
            ).animate({
                opacity: 0.2
            }, { duration: 50 }
            ).animate({
                opacity: 0,
            }, { duration: 10, complete: function() {
                element.css({'visibility':'hidden', 'top':'0%'});
            }
            });
 
         }
    }

    return methods.init();
  };
})( jQuery );
$(document).ready(function(){
	$('#myButton').click(function(){
		$('#notification').notify({
		    'type': 'success',
		    'position': {'top': "40%", 'left': "35%"},
		    'duration': 5000
		});
	});
});