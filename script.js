$(document).ready(function() {
	$(window).endlessScroll({
		inflowPixels: 300,
		callback: function() {
			var $site = $('#sites li:nth-last-child(2)').clone();
			$('#sites').append($site);
		}
	});
});
