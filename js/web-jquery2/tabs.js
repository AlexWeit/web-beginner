$(document).ready(function () {

	$('.tab__link').on('click', function (e) {
		e.preventDefault();

		var $this = $(this),
			tabItem = $this.closest('.tab__item'),
			otherTabItems = tabItem.siblings(),
			reqTabIndex = tabItem.index(),
			contentItemsArray = $('.tab__content-item'),
			contentItem = contentItemsArray.eq(reqTabIndex);
			otherContentItems = contentItem.siblings();

		console.log(reqTabIndex);
		console.log(contentItemsArray);

		tabItem.addClass('active');
		contentItem.addClass('active');
		otherTabItems.removeClass('active');
		otherContentItems.removeClass('active');
	});
});