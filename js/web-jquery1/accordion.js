$(document).ready(function () {

	$('.acco__trigger').on('click', function (e) {
		e.preventDefault();

		var $this = $(this),
			item = $this.closest('.acco__item'),
			textBlock = item.find('.acco__content-text'); // блок с текстом
			reqHeight = textBlock.outerHeight(true);
			contentBlock = item.find('.acco__content');
			otherItems = item.siblings();
			otherItemsContentBlocks = otherItems.find('.acco__content');

		if (item.hasClass('active')) {
			contentBlock.css('height', 0);
			item.removeClass('active');
		} else {
			item.addClass('active')
			contentBlock.css('height', reqHeight);
			otherItems.removeClass('active');
			otherItemsContentBlocks.css('height', 0);
		}
	});
});