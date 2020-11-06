jQuery(document).ready(function($){

	// document.querySelector('.content-info#content-1').show();
	$('.content-info#content-1').show();

	$('#lista-itens-praticas a').on('click', function(e){
		e.preventDefault();

		// pegando id do meu conteudo a partir do meu data-id nos links
		let idContent = $(this).data('id');

		// escondendo todos meus conteudos
		$('.content-info').hide();

		$('#'+idContent+'.content-info').show();

		// Ajustando margens dos contents
		if( $('#'+idContent+'.content-info img').length < 1 ){
			$('#'+idContent+'.content-info .content-desc').addClass('p-content-desc');
		}

		$('#'+idContent+'.content-info .content-desc').addClass('fadeInUp');
		$('#'+idContent+'.content-info img').addClass('slideInDown');

		$('#lista-itens-praticas a').removeClass('active');

		if($(this).hasClass('active')){
			$(this).addClass('active');
		}

		$(this).toggleClass('active');

	});

 	// Carousel dos itens de menu melhores praticas
	function stopCarousel() {

		var owl = $('.lista-itens-praticas');
		owl.trigger('destroy.owl.carousel');
		owl.addClass('off');
	}
		
		function startCarousel(){

		$('.lista-itens-praticas').owlCarousel({
			loop:false,
			margin:10,
			nav:false,
			autoWidth: false,
			autoHeight: false,
			responsive:{
				0:{
					items:1,
				},
				500:{
					items:1
				}
			}

		});

		$('#lista-itens-praticas .owl-item').each(function( index ) {
			let larguraInterna = $(this).find('.item-outraspraticas').width()+15;
			$(this).width(larguraInterna);
		});

		$('#.itens-anteriores .owl-item').each(function( index ) {
			let larguraInterna = $(this).find('.itens-anteriores').width()+15;
			$(this).width(larguraInterna);
		});
	}

	//Setando a largura da tela
	$(document).ready(function() {

		let larguraTela = $(window).width();

		if ( larguraTela <= 768 ) {
			startCarousel();
		} else {
			$('.lista-itens-praticas').addClass('off');
		}

	});

	$(document).resize( function(){

		let larguraTela = $(window).width();

		if( larguraTela <= 768 ){

			startCarousel();

		}else{
			stopCarousel();
			// $('#lista-itens-praticas').removeClass('lista-itens-praticas owl-loaded owl-drag'); 
		}		

	});

	//----------Carrosel itens anteriores---------//
	$('.itens-anteriores').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		autoWidth: false,
		autoHeight: false,
		responsive:{
			2560:{
				items:3,
			},
			1440:{
				items:3,
			},
			1024:{
				items:3,
			},
			425:{
				items:2,
			},
			375:{
				items:1,
			},
			320:{
				items:1,
			}
		}

	});

	//Ocultando conteudo da ombusdman
	$('.oculta').slideToggle();
	$('.more').click(function(){
   	$('.oculta').slideToggle(); 
});
});


/* ======================================= OMBUSDMAN ANTERIORES ======================================== */
