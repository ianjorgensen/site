var hoverfy = function(sel, selIn, selOut) {
	var lis = $(sel);

	lis.each(function(i, li) {
		var _in = $(this).find(selIn || '.in');
		var _out = $(this).find(selOut || '.out');


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