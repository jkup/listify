(function($) {
	'use strict';

	$.fn.listify = function() {
		var $listify = this;

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
	};
})(jQuery);