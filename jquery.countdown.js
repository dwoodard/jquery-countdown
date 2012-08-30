//------------------
// jquery countdown 
// -----------------


// ------------------
// Usage 
// -----------------
/*
	SCRIPT
	$(function(){
		$('.countdown').countdown({})
	})

-------------------------------------
	HTML
	<span class="countdown">3600</span>
	<br>
	<span class="countdown">100</span>

*/



;(function ($, window, document, undefined) {
	
	var countdownClass = function(elem,time){
		var time = time;
		
		var timerId = setInterval(function() { timer(elem); },1000)


		var timer = function(){
			if(time > 0){
				time--;
			}
			else{
				time = 0
				clearInterval(timerId);
				$.fn.countdown.no_time_left()
			}
			
			$.fn.countdown.show_time_left(elem,time)
		}
	}


	 $.fn.countdown = function (options) {

		options = $.extend({}, $.fn.countdown.options, options);

		function isNumber(n) {
			return !isNaN(parseFloat(n)) && isFinite(n);
		}



		return this.each(function () {
			
			var elem = $(this); //countdown container
			
			if (isNumber(elem.html())) {
				time = Number(elem.html());
			}

			new countdownClass($(this), time)
			

		});
	};
	

	//-------------------
	// Countdown Objects
	//-------------------

	$.fn.countdown.options = {};
	$.fn.countdown.time = {};

	//-------------------
	// Countdown Methods
	//-------------------

	$.fn.countdown.init = function (elem) {
		console.log(elem,time);

	};

	$.fn.countdown.add_leading_zero = function (n) {
		if (n.toString().length < 2) {
			return '0' + n;
		} else {
			return n;
		}
	};

	$.fn.countdown.format_output = function (time_left) {
		var hours, minutes, seconds;
		seconds = time_left % 60;
		minutes = Math.floor(time_left / 60) % 60;
		hours = Math.floor(time_left / 3600);

		seconds = $.fn.countdown.add_leading_zero(seconds);
		minutes = $.fn.countdown.add_leading_zero(minutes);
		hours = $.fn.countdown.add_leading_zero(hours);

		return hours + ':' + minutes + ':' + seconds;
	};

	$.fn.countdown.show_time_left = function (elem,time) {
		$(elem).html($.fn.countdown.format_output(time))
	};

	$.fn.countdown.no_time_left = function () {
		console.log('no time left');
	};

	

})(jQuery, window, document);