function toggleLanguageMenu(){
	var menu = document.getElementsByClassName('language-picker__other-languages');
	menu[0].classList.toggle('enabled');
}

function toggleMainMenu(){
	var menu = document.getElementsByClassName('main-nav');
	menu[0].classList.toggle('enabled');
}

function toggleFooterMenu(id){
	var menu = document.getElementById(id);
	menu.classList.toggle('enabled');
}



//Sliders
$(document).ready(function(){
	$('.categories__list').slick({
		arrows: false,
     	dots: false,
  		mobileFirst: true,
     	responsive: [
     	{
     		breakpoint: 0,
     		settings: {
     			slidesToShow: 2,
     			slidesToScroll: 2
     		}
     	},
     	{
     		breakpoint: 375,
     		settings: {
     			slidesToShow: 3,
     			slidesToScroll: 2
     		}
     	},
     	{
     		breakpoint: 768,
     		settings: {
     			slidesToShow: 6,
     			slidesToScroll: 1
     		}
     	}
     ]
	});

	$('.news__content').slick ({
		arrows: false,
     	dots: false,
  		mobileFirst: true,
     	responsive: [
     	{
     		breakpoint: 0,
     		settings: {
     			slidesToShow: 1,
     			slidesToScroll: 1,
     			arrows: true
     		}
     	},
     	{
     		breakpoint: 375,
     		settings: {
     			slidesToShow: 2,
     			slidesToScroll: 1,
     			arrows: true
     		}
     	},
     	{
     		breakpoint: 768,
     		settings: {
     			slidesToShow: 3,
     			slidesToScroll: 1,
     			arrows: false
     		}
     	}
     ]
	});
});
