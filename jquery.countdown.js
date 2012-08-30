<!-- jquery countdown -->

;(function ($, window, document, undefined) {
	var time; ///number of seconds for countdown
	 $.fn.countdown = function (options) {

		// Here's a best practice for overriding 'defaults'
		// with specified options. Note how, rather than a
		// regular defaults object being passed as the second
		// parameter, we instead refer to $.fn.countdown.options
		// explicitly, merging it with the options passed directly
		// to the plugin. This allows us to override options both
		// globally and on a per-call level.

		options = $.extend({}, $.fn.countdown.options, options);

		function isNumber(n) {
			return !isNaN(parseFloat(n)) && isFinite(n);
		}



		return this.each(function () {

			var elem = $(this); //countdown container

			if (isNumber(elem.html()) && time == null) {
				time = Number(elem.html());
			}
			if (time == undefined) {
				time = options.time;
			}

			setInterval(function() { timer(elem); },1000)

		});
	};
	/*
	 Globally overriding options
	 Here are our publicly accessible default plugin options
	 that are available in case the user doesn't pass in all
	 of the values expected. The user is given a default
	 experience but can also override the values as necessary.
	 eg. $fn.countdown.key ='otherval';
	 */
	$.fn.countdown.options = {
		time:3600
	};

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

	$.fn.countdown.show_time_left = function (elem) {
		$(elem).html($.fn.countdown.format_output(time))
	};
	$.fn.countdown.no_time_left = function () {
	};

	var timer = function(elem){
		time--;
		$.fn.countdown.show_time_left(elem)
	}



})(jQuery, window, document);