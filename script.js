$(document).ready(function() {
	$('#header-bar').click(function(e) {
	  $('#header-bar').addClass('header-bar-active1');
	  $('#main-picture').addClass('header-bar-active');
	  $('#category').addClass('category-active');
	  $('#title').addClass('header-bar-active2');
	  $('#header-bar').css({'height':'100px', 'margin-top':'-150px'});
	  $('#main-picture').css({'height':'100px'});
	  $('#title').css({'font-size':'50pt'});
	  $('#category').css({'margin-top':'150px'});
	});
});