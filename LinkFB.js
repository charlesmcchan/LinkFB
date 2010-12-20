jQuery.noConflict();
jQuery(document).ready( function($) {	
	var span_pattern = 'span[class="UIActionLinks UIActionLinks_bottom"]';
	
    $('li[id^="stream_story_"]').live('mouseover', function() {
        var data_ft = $.parseJSON( $(this).attr('data-ft') );
        var tag = $(this).find( span_pattern );
        if ( !tag.hasClass('FBbookmarkEnable') &&
			isdigit( data_ft.actrs ) && isdigit( data_ft.fbid ) ) {
			tag.append(' · <span><a class="FBbookmark" href="http://www.facebook.com/' + 
				+ data_ft.actrs + '/posts/' + data_ft.fbid + '">Link</a></span>');
            tag.addClass('FBbookmarkEnable');
        }
    });
	
	$('li > .UIImageBlock.clearfix').live('mouseover', function() {
		var data_ft = $.parseJSON( $(this).attr('data-ft') );
		var tag = $(this).find( span_pattern );
		// issue: Uncaught TypeError: Cannot read property 'actrs' of null
		if ( !tag.hasClass('FBbookmarkEnable') ) {
            tag.append(' · <span><a class="FBbookmark" href="http://www.facebook.com/' + 
				+ data_ft.actrs + '/posts/' + data_ft.fbid + '">Link</a></span>');
            tag.addClass('FBbookmarkEnable');
        }
    });
    
    $('div[id^="div_story_"]').live('mouseover', function() {
        var data_ft = $.parseJSON( $(this).attr('data-ft') );
        var url = 'http://www.facebook.com/' + data_ft.actrs + '/posts/' + data_ft.fbid;
		// UIActionLinks UIActionLinks_bottom UIIntentionalStory_Info
        //var tag = $(this).find('.UIActionLinks').find('.UIImageBlock_Content');
        var tag = $(this).find('.comment_link').find('.UIImageBlock_Content');
        if ( !tag.hasClass('FBbookmarkEnable') ) {
            tag.append(' · <span><a class="FBbookmark" href="' + url + '">Link</a></span>');
            tag.addClass('FBbookmarkEnable');
        }
    });

	function isdigit( s ){
		return ( s % ( parseInt(s) / Number(s) ) ) === 0;
	}
});