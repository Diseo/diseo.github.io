$(document).ready(function(){

	$('img.mt').each(function(){
		var $obj = $(this);
 		var mtin = parseInt($obj.css("margin-top"));
		$(window).scroll(function() {
			var yPos = mtin -((  (($(window).scrollTop()+$(window).height())/$(document).height()) * $obj.parent().height()) / $obj.data('speed'));
 			var mtpos = yPos + 'px';
			$obj.css('margin-top', mtpos);
		});
	});

	$(window).scroll(function() {
		if(parseInt($(window).scrollTop())>=100){
			$('header').css('width', '50px').css('margin', '10px');
			$('h1').text('LA');
			$('h1').css('padding-left', '10px').css('padding-right', '10px');

		}else{
			$('header').css('width', '100%').css('margin', '0px');
			$('h1').text('Leonardo Akamatsu');
		}
	});
});
