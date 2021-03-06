jQuery(function($) {
	$.fn.magicselect = function(settings) {

		$(this).each(function() {
		var html = '';
		var class_name = $(this).attr('class');
		var id = $(this).attr('name');
		var options = $('[name='+id+']').find('option');
		
		// initialize
		options.each(function() {
			html+= '<div class="option" id="'+$(this).val()+'">'+$(this).text()+'</div>';
		})
		$(this).hide();
		if ($('.magic_select_box#'+id).length <= 0) {
		$(this).after('<div class="magic_select_box" id="'+id+'"><div class="current_select"><span>'+options.first().text()+'</span></div><div class="magic_list hidden">'+html+'</div></div>');
		}
		// change selection
		var magic_select = $('.magic_select_box#'+id);
		
		$(document).on('click', '.magic_select_box#'+id+' .current_select', function() {
			
			// Close other selectbox
			var list = '.magic_list';
			
			$('.magic_select_box').not('.magic_select_box#'+id).find(list).fadeOut(300);

			var element = $(this).parent().find(list);
			element.stop().fadeToggle(300);
			

			// Outside click close select list when its open
			
		});
		
		
		$(document).on('click', '.magic_select_box#'+id+' .option', function() {
			var val = $(this).attr('id');
			var text = $(this).text();
			$(this).addClass('selected');
			magic_select.find('.current_select').html('<span>'+text+'</span>');
			$('[name='+id+']').val(val);
			$('[name='+id+']').trigger('change');
			magic_select.find('.magic_list').stop().fadeToggle(300);
		})
		


		}) // end each function
		
	
} // end of magicselect fuunction
})