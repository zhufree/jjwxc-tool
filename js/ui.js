// alert("!");
function removeRawCss(){
	$('link').remove();
	$('style').remove();
	addCss()
}
function addCss() {
	$('*').removeAttr("style","");
	$('body').addClass('font-sans container w-full max-w-full p-4 mx-auto max-w-screen-xl');
	$('p, span, td, a, strong').addClass('font-sans text-base');
	$('a:link').css('font-family', 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"');
	
	// 首页
	$('.time').css('width', 'auto');
	$('#overlay').remove();
	$('csbox_2, #ad, #logo, span.readerid>img').hide();
	$('#top').addClass('flex flex-col space-x-2');
	$('.time ul').addClass('flex pt-2 pb-2');
	$('.time ul li').addClass('flex-1 text-base');
	$('#t_user_signin').addClass('items-center bg-gray-200 rounded mr-4');
	$('#t_user_info, #t_user_sms').addClass('w-auto flex');
	$('#t_user_signin, #t_user_info, #t_user_sms').addClass('p-2');
	$('#t_user_sms>img').addClass('self-center').css('width', '14').css('height', '10');
	$('ul.cssMenu').addClass('flex');
	$('ul.cssMenu>li>ul').hide().addClass('absolute bg-green-400 rounded text-white');
	$('ul.cssMenu>li').addClass('p-2 mr-4').hover(function(){
		$(this).children('ul').show();
	},function() {
		$(this).children('ul').hide();
	});
	$('ul.cssMenu>li>a').addClass('rounded p-2 hover:bg-green-400 hover:text-white');
	$('ul.cssMenu>li>ul>li').addClass('p-2 hover:bg-green-200 hover:text-white');

	//主页
	$('#sitetop').addClass('w-full flex')
		.css('height', '4rem');
	$('#serverTime').parent().addClass('mr-4')
		.css('float', 'none');
	$('*').css('float', 'none');
	$('.toplogin').removeClass('toplogin');
	$('.top_right').addClass('flex space-x-2');
	$('span.readerid').attr('onClick', $('span.readerid>img').attr('onClick'));

	$('#main').css('height', 'auto')
		.css('background', 'url(http://static.jjwxc.net/images/mainbg.jpg)')
		.css('background-size', 'cover')
		.css('background-repeat', 'no-repeat');
	$('.concent_list').css('height', 'auto')
		.css('background', 'url(http://www.jjwxc.net/images/indexListBg.gif)')
		.css('background-size', 'cover')
		.css('background-repeat', 'no-repeat');
	$('.l1, .l2, .l3').css('background', 'none');

	$('.concent_list>div>p').addClass('text-base');
	$('a.novelnamestype').addClass('text-base');
}
removeRawCss();