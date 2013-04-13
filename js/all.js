setTimeout(function(){
	var preAud = $('#pre-audio');
	var aud = $('<audio>');
	aud.attr('src', preAud.attr('data-src'));
	aud.attr('preload', 'none');
	aud.attr('controls', 'true');
	preAud.replaceWith(aud);
 }, 0);

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});
