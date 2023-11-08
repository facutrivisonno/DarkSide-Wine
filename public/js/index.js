window.addEventListener('load', function(){
	
	/*------ CARROUSEL POR BODEGA ------*/ 

	new Glider(document.querySelector('.glider'), {
		slidesToShow: 5,
		slidesToScroll: 1,
		draggable: true,
		dots: '.dots',
		arrows: {
		  prev: '.glider-prev',
		  next: '.glider-next'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 5,
				slidesToScroll: 1
			  }
			}
		]
	  });
	
	
	/*------ CARROUSEL POR OFERTA ------*/ 
	
	new Glider(document.querySelector('.carrousel-list-offer'), {
		slidesToScroll: 1,
		slidesToShow: 1,
		dots: '.carrousel-indicadores',
		arrows: {
			prev: '.carrousel-anterior',
			next: '.carrousel-siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 5,
				slidesToScroll: 1
			  }
			}
		]
	});

	/*------ CARROUSEL DESTACADO ------*/ 
	
	new Glider(document.querySelector('.carrousel-list-featured'), {
		slidesToScroll: 1,
		slidesToShow: 1,
		dots: '.carrousel-indicadores',
		arrows: {
			prev: '.carrousel-anterior',
			next: '.carrousel-siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 5,
				slidesToScroll: 1
			  }
			}
		]
	});



});