(function($) {
	$.fn.listify = function() {
		var $listify = this,
			$tools,
			$list;

		$listify
			.on('mouseenter', 'li', function() {
				$this = $(this);
				if( $this.parent()[0] == $listify[0] ) {
					$tools = $this.data('tools');

					$list = $('<ul class="listify-sublist"></ul>');

					$.each($tools, function(key, value) {
						var $tool = $('[data-tool='+value+']');
						$tool.clone().appendTo($list);
						$tool.hide();
					});

					$this.append($list);
				}

			})
			.on('mouseleave', 'li', function() {
				if($(this).closest('.listify-sublist').length == 0) {
					$('li').each(function() { $(this).show(); });

					$('.listify-sublist').remove();
				}
			});
	};
}(jQuery));