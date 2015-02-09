(function($) {
	'use strict';

	$.fn.listify = function(options) {
		var effect = (options.effect === 'append') ? 'append' : 'toggle',
		attribute = (typeof options.attribute !== 'undefined') ? options.attribute : 'tool',
		attributes = (typeof options.attribute !== 'undefined') ? options.attribute+'s' : 'tools',
		$listify = this;

		$listify.on('mouseenter', 'li', function() {
			var $this = $(this),
				$list = $('<ul class="listify-sublist"></ul>'),
				tools = $this.data(attributes);

			if ($this.parent().get(0) !== $listify.get(0)) { return; }

			$.each(tools, function(key, value) {
				var $tool = $('[data-'+attribute+'='+value+']');
				if (effect === 'append') {
					$tool.clone().appendTo($list);
					$tool.hide();
				} else {
					$tool.stop().animate({opacity: '0.0'}, 200);
				}
			});

			if (effect === 'append') { $this.append($list); }
		});

		$listify.on('mouseleave', 'li', function() {
			var $this = $(this);

			if (effect === 'append') {
				if ($this.closest('.listify-sublist').get().length !== 0) { return; }
				$('li').each(function() { $(this).show(); });
				$('.listify-sublist').remove();
			} else {
				var tools = $this.data(attributes);

				$.each(tools, function(key, item) {
					$('[data-'+attribute+'='+item+']').stop().animate({opacity: '1.0'}, 200);
				});
			}
		});
	};
})(jQuery);
