var hoverfy = function(sel, selIn, selOut) {
	var lis = $(sel);

	lis.each(function(i, li) {
		var _in = $(this).find(selIn || '.out');
		var _out = $(this).find(selOut || '.in');


		$(this).hover(
			function() {
			_out.css('display','none');
			_in.css('display','block');
			},
			function() {
			_in.css('display','none');
			_out.css('display','block');
		});
	});
};

var slideify = function(sel) {
	var lis = $(sel);
	var delay = 3000;
	var fade = 1000;

	lis.each(function(i, li) {
		$(li).attr('id',i);
	});

	var start = function(index) {
		if(index >= lis.length) {
			index = 0;
		}

		console.log(index);

		//$(lis).css('display', 'none');
		
		$(lis).each(function(i, li) {
			if(i != index) {
				$(li).fadeOut(fade);
			} else {
				$(li).fadeIn(fade);
			}
		}); 

		//$(lis[index]).css('display', 'block');

		setTimeout(function() {
			start(index + 1);
		}, delay);
	};

	start(0);
}