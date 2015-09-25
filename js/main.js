//question 1
$('.signin')
	.on('click', function(){

		$('.modal').fadeIn(1000);	
	});

//question 2
$('.close')
	.on('click', function(){
		
		$('.modal').fadeOut(1000);
	}); 

//question 3
$('.submit')
	.on('click', function(){

		$('input').addClass('error');	
	});

//question 4
$('.submit')
	.on('mouseover', function(){

		$('input').removeClass('error');	
	});
