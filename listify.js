(function($) {
	'use strict';

	$.fn.listify = function(options) {
		var effect = (options.effect === 'append') ? 'append' : 'toggle',
		attribute = (typeof options.attribute !== 'undefined') ? options.attribute : 'tool',
		$listify = this;

		$listify
			.on('mouseenter', 'li', function() {
				var $this = $(this),
					$list = $('<ul class="listify-sublist"></ul>'),
					tools = $this.data('tools');

				if ($this.parent().get(0) !== $listify.get(0)) {
					return;
				}

				$.each(tools, function(key, value) {
					var $tool = $('[data-'+attribute+'='+value+']');
					if(effect === 'append') {
						$tool.clone().appendTo($list);
						$tool.hide();
					} else {
						$tool.animate({opacity: '0.0'}, 200);
					}
				});

				if(effect === 'append') {
					$this.append($list);
				}
			})
			.on('mouseleave', 'li', function() {
				if(effect === 'append') {
					if ($(this).closest('.listify-sublist').get().length !== 0) { return; }
					$('li').each(function() { $(this).show(); });
					$('.listify-sublist').remove();
				} else {
					var $this = $(this),
					tools = $this.data('tools');

					$.each(tools, function(key, item) {
						var $tool = $('[data-'+attribute+'='+item+']');
						$tool.animate({opacity: '1.0'}, 200);
					});
				}
		});
	};
})(jQuery);