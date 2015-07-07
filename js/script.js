var progress = $('.progress');

progress.each(function() {
	
	var prog = $(this),
		barValue = $(this).find('span').text(),
		bar = $(this).find('.bar');

	bar.animate({width: barValue}, {
		duration: 2500,
		easing: 'easeInOutExpo',
		step: function(value) {
			prog.find('span').text( Math.floor(value) + "%" );
		}
	});
});

