$(document).ready(function(){
	main();

	// owl
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:2,
	            nav:true
	        },
	        600:{
	            items:4,
	            nav:false
	        },
	        1000:{
	            items:6,
	            nav:true,
	            loop:true
	        }
	    }
	})
	// owl

});

// FUNCTION MAIN

function main(){
	menu_scroll();
	listener_contact();
	slider_buttons();
	back_btn();
	// galery();
	counter();
	menu_mobile();
	mobile_button();

	$('#aktywny_przycisk').click();
}

function back_btn(){
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.scroll_up_btn').fadeIn();
		} else {
			$('.scroll_up_btn').fadeOut();
		}
	})
	$(".scroll_up_btn").on('click',function(){

			$("html, body").animate({
				scrollTop: 0
			}, 600);

	});
}

// start menu functions----------------------------------------------------------
var menu_scrolling=false;

function menu_scroll(){

	$(window).scroll(function(){
	 	w_top=$(document).scrollTop()+150;
		if(w_top > 150){
				if(!menu_scrolling){
						// console.log('fixed');
						menu_scrolling=true;
						$('#menu_scroll').addClass('menu_bar_scroll');
						$('.menu_block').addClass('menu_block_scroll');
						$('#logo_img').addClass('m-t-10');
						$('#logo_img').removeClass('m-t-20');
						$('#logo_logo').addClass('m-t-5');
						$('#logo_logo').removeClass('m-t-20');
						$('#menu_mobile_btn').removeClass('m-t-10');
						$('#menu-mob').css('top','70px');
				}
		}else{
				if(menu_scrolling){
						// console.log('menudziala');
						menu_scrolling=false;
						$('#menu_scroll').removeClass('menu_bar_scroll');
						$('.menu_block').removeClass('menu_block_scroll');
						$('#logo_img').removeClass('m-t-10');
						$('#logo_img').addClass('m-t-20');
						$('#logo_logo').removeClass('m-t-5');
						$('#logo_logo').addClass('m-t-20');
						$('#menu_mobile_btn').addClass('m-t-10');
						$('#menu-mob').css('top','150px');
				}
		}

	});


}

			// start menu mobile functions



			// end menu mobile functions

// end menu functions----------------------------------------------------------


// start galery functions
// function galery(){
// 		$('.galery_btn').on('click',function(){
// 			kat = $(this).data('kat');
// 			$('.galery_photos').hide();
// 			$.ajax({
// 				type: "POST",
// 				dataType: 'json',
// 				url: "/galery.php",
// 				data:{ kat: kat }
// 			}).done(function(data) {
// 				if(data.type=='success'){
// 					$('.galery-photos').html(''); //czyszcze
// 					$.each(data.code, function(k,v){
// 						txt = '<div class="pokaz_obrazek" href="img/galerie/'+kat+'/'+v+'"></div>';
// 						$('.galery-photos').append(txt);
// 					});
// 					setTimeout(function() {
// 							$('.galery_photos').show('slide',{direction:'up'},2000);
// 					},1000)
// 				}else if(data.type=='error'){
// 					alert('nie odnaleziono katalogu');
// 				}
// 			});
// 		});
// 	}

// end galery functions


// start slider functions----------------------------------------------------------

function slider_buttons(){
	$('#button_left').hover(function(){
		$('#button_left').addClass('slide_button_mouse');
		$('#button_left').html('<i class="fa fa-arrow-left" style="margin-top:17px;"></i><span class="slide_button_txt m-t-10 m-r-20" style="float:right;">POPRZEDNI</span>');
	},

	function(){
		$('#button_left').removeClass('slide_button_mouse');
		$('#button_left').html('<i class="fa fa-arrow-left" style="margin-top:17px;"></i>');
	},);

	// // -------------------------------------

	$('#button_right').hover(function(){
		$('#button_right').addClass('slide_button_mouse');
		$('#button_right').html('<span class="slide_button_txt m-t-10 m-l-20" style="float:left;">NASTęPNY</span><i class="fa fa-arrow-right" style="margin-top:17px;"></i>');
	},

	function(){
		$('#button_right').removeClass('slide_button_mouse');
		$('#button_right').html('<i class="fa fa-arrow-right" style="margin-top:17px;"></i>');
	},);
}




// end slider functions----------------------------------------------------------

// start counter functions-------------------------------------------------------
function counter() {

	var a = 0;
	$(window).scroll(function() {

	  var oTop = $('#counter').offset().top - window.innerHeight;
	  if (a == 0 && $(window).scrollTop() > oTop) {
			console.log('dziala');
	    $('.counter-value').each(function() {
	      var $this = $(this),
	        countTo = $this.attr('data-count');
	      $({
	        countNum: $this.text()
	      }).animate({
	          countNum: countTo
	        },

	        {

	          duration: 5000,
	          easing: 'swing',
	          step: function() {
	            $this.text(Math.floor(this.countNum));
	          },
	          complete: function() {
	            $this.text(this.countNum);
	            //alert('finished');
	          }

	        });
	    });
	    a = 1;
	  }

	});
}
// end counter functions-------------------------------------------------------

// start form functions----------------------------------------------------------

function listener_contact(){
	$('.send_button').on('click', function(){
		$('.error').css('display','none');

		$.ajax({
			type:"POST",
			dataType:'json',
			url:'send.php',
			data:{
				name: $('#c_name').val(),
				email: $('#c_email').val(),
				topic: $('#c_topic').val(),
				text: $('#c_text').val()
			}
		}).done(function(data){
			if(data.type=='error'){
				$.each(data.code, function(k,v){
					$('.err_c_'+k).html(v).css('display','block');
				});
			}else{
				$('.form_box').css('display','none');
				$('.form_box_sended').css('display','block').html(data.code);
			}
		});


	});
}

// end form functions----------------------------------------------------------


// start menu mobile----------------------------------------------------

var display_mode='normal';
function menu_mobile(){
	// console.log('sprawdzam');
	if($(window).width()>1200){
		if(display_mode=='mobile'){
			display_mode='normal';
			console.log('Przełącz na normal');
			$('#menu-desktop').css('display','block');
			$('#logo-desktop').removeClass('col-md-11').addClass('col-md-3').addClass('col-md-offset-1');
			$('#menu_mobile_btn').css('display','none');
		}
	}else{
		if(display_mode=='normal'){
			display_mode='mobile';
			console.log('Przełącz na mobile');
				$('#menu-desktop').css('display','none');
				$('#logo-desktop').removeClass('col-md-3').removeClass('col-md-offset-1').addClass('col-md-11');
				$('#menu_mobile_btn').css('display','block');
		}
	}
}

function mobile_button() {
	var menu_stan='schowane';
	$('#menu_mobile_btn').on('click',function() {
		if(menu_stan=='schowane'){
			menu_stan='wysuniete';
			console.log('chowam menu');
			$('.menu_mobile').css('left','0%');
		}else{
			menu_stan='schowane';
			$('.menu_mobile').css('left','-100%');
		}
	})
}






// end menu mobile ------------------------------------------------------
