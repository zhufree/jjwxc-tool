// alert("!");
function addCss() {
	$('body').addClass('font-sans');
	$('p').addClass('font-sans');
	$('span').addClass('font-sans');
	$('td').addClass('font-sans');
	$('a:link').css('font-family', 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"');
	$('#sitetop').addClass('h-20');
	$('#main').css('height', 'auto')
		.css('background', 'url(http://static.jjwxc.net/images/mainbg.jpg)')
		.css('background-size', 'cover')
		.css('background-repeat', 'no-repeat');
	$('.concent_list').css('height', 'auto')
		.css('background', 'url(http://www.jjwxc.net/images/indexListBg.gif)')
		.css('background-size', 'cover')
		.css('background-repeat', 'no-repeat');
	$('.concent_list>div>p').addClass('text-sm');
	$('a.novelnamestype').addClass('text-sm');
	$('#serverTime').addClass('text-base');
}
addCss();