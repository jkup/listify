(function($) {
	'use strict';

	$.fn.listify = function(options) {
		//get display effect, defaulting to toggle
		var effect = (options === 'append') ? 'append' : 'toggle';

		var $listify = this;
		if(effect === 'append') {
			$listify
				.on('mouseenter', 'li', function() {
					var $this = $(this),
						$list = $('<ul class="listify-sublist"></ul>'),
						tools = $this.data('tools');

					if ($this.parent()[0] !== $listify[0]) {
						return;
					}

					$.each(tools, function(key, value) {
						var $tool = $('[data-tool='+value+']');
						$tool.clone().appendTo($list);
						$tool.hide();
					});

					$this.append($list);
				})
				.on('mouseleave', 'li', function() {
					if ($(this).closest('.listify-sublist').get().length !== 0) {
						return;
					}

					$('li').each(function() {
						$(this).show();
					});

					$('.listify-sublist').remove();
			});
		} else {

			$listify
				.on('mouseenter', 'li', function() {
					var $this = $(this),
					tools = $this.data('tools');

					$.each(tools, function(key, item) {
						var $tool = $('[data-tool='+item+']');
						$tool.animate({opacity: '0.0'});
					});
				})
				.on('mouseleave', 'li', function() {
					var $this = $(this),
					tools = $this.data('tools');

					$.each(tools, function(key, item) {
						var $tool = $('[data-tool='+item+']');
						$tool.animate({opacity: '1.0'});
					});
				});
		}
	};
})(jQuery);