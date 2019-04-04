$(document).ready(function(){
    $('.car').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                adaptiveHeight: true
                }
            },
            {
                breakpoint: 920,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
            ]
});
});

$(document).ready(function(){
    $('.carBrigadeiros').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                }
            },
            {
                breakpoint: 920,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
            ]
});
});

$('.border-box-contact').on('change', function() {var value = $(this).children('option:selected').val()
    if (value == 1) {
        $('#valor').html('<img src="https://scontent-gru2-1.cdninstagram.com/vp/14bfe8fdd6edc955f0ad94114199a319/5D1C7ACB/t51.2885-15/fr/e15/s1080x1080/51583005_299873010883291_9010529138987292155_n.jpg?_nc_ht=scontent-gru2-1.cdninstagram.com" style="display:flex; position:relative; justify-content: center; width:30%; height:30%;"/>Preço: R$ 70,00')
    } else if (value == 2) {
        $('#valor').html('<img src="https://scontent-gru2-1.cdninstagram.com/vp/1d6b612046e9372ca62364a2852751b6/5D137229/t51.2885-15/e35/51852457_423299508211929_5023579258565186520_n.jpg?_nc_ht=scontent-gru2-1.cdninstagram.com" style="display:flex; position:relative; width:30%; height:30%;" /> Preço: R$ 100,00')
    } else if (value == 3) {
        $('#valor').html('<img src="https://scontent-gru2-1.cdninstagram.com/vp/d249d2755bb32dab2c2e3f594a07d489/5D134DFD/t51.2885-15/e35/52912038_1173518906155442_8326621776566913622_n.jpg?_nc_ht=scontent-gru2-1.cdninstagram.com" style="display:flex; position:relative; width:30%; height:30%;"/> Preço: R$ 120,00')
    } else if (value == 4) {
        $('#valor').html('<img src="https://scontent-gru2-1.cdninstagram.com/vp/b2619904ba268701c751e4e6092899aa/5D1FC9C5/t51.2885-15/e35/49748601_386989912068303_3528618349585401466_n.jpg?_nc_ht=scontent-gru2-1.cdninstagram.com" style="display:flex; position:relative; width:30%; height:30%;"/> Preço: R$ 160,00')
    }
})

$(function(){ //animação menu hambúrguer
	$('#burger-header').on('click', function(){
		$('#burger-menu').slideToggle(300);
		$('#burger-menu').css('display', 'flex');
	});
});

$(function(){ //recolher hambúrguer
	$('.smoothscroll').on('click', function(){
		$('#burger-menu').slideUp(300);
	});
});

$(window).scroll(function() { //menu dinâmico
    var height = $(window).scrollTop();

    var bolosH;
    var monteH;
    var brigH;
    var cardH;
    var contH;

    if($(window).width()>900){
        bolosH = 578;
        monteH = 1260;
        brigH = 2000;
        cardH = 2388;
        contH = 3170;
    }
    if($(window).width()<=900 && $(window).width()>600){
        bolosH = 456;
        monteH = 1140;
        brigH = 1600;
        cardH = 2268;
        contH = 3050;
    }
    if($(window).width()<=600){
        bolosH = 389;
        monteH = 1069;
        brigH = 1400;
        cardH = 2197;
        contH = 3401;
    }
    if($(window).width()<=500){
        contH = 3180;
    }
    if($(window).width()<=450){
        bolosH = 360;
        monteH = 1040;
        contH = 3150;
    }
    if($(window).width()<=400){
        bolosH = 320;
        monteH = 1000;
        cardH = 2160;
        contH = 3132;
    }

    if(height < bolosH){
        $('[data-secname="banner"]').css('fontWeight', 300);
        $('[data-secname="bolos"]').css('fontWeight', 300);
        $('[data-secname="monte_seu_bolo"]').css('fontWeight', 300);
        $('[data-secname="brigadeiros"]').css('fontWeight', 300);
        $('[data-secname="cardapio"]').css('fontWeight', 300);
        $('[data-secname="contact-section"]').css('fontWeight', 300);
    }

    if(height >= bolos && height < monteH){
        $('[data-secname="banner"]').css('fontWeight', 300);
        $('[data-secname="bolos"]').css('fontWeight', 300);
        $('[data-secname="monte_seu_bolo"]').css('fontWeight', 300);
        $('[data-secname="brigadeiros"]').css('fontWeight', 300);
        $('[data-secname="cardapio"]').css('fontWeight', 300);
        $('[data-secname="contact-section"]').css('fontWeight', 300);
    }

    if(height >=monteH && height < cardH){
        $('[data-secname="banner"]').css('fontWeight', 300);
        $('[data-secname="bolos"]').css('fontWeight', 300);
        $('[data-secname="monte_seu_bolo"]').css('fontWeight', 300);
        $('[data-secname="brigadeiros"]').css('fontWeight', 300);
    	$('[data-secname="cardapio"]').css('fontWeight', 300);
    	$('[data-secname="contact-section"]').css('fontWeight', 300);
    }

    if(height >=cardH && height < brigH){
        $('[data-secname="banner"]').css('fontWeight', 300);
        $('[data-secname="bolos"]').css('fontWeight', 300);
        $('[data-secname="monte_seu_bolo"]').css('fontWeight', 300);
        $('[data-secname="brigadeiros"]').css('fontWeight', 300);
    	$('[data-secname="cardapio"]').css('fontWeight', 300);
    	$('[data-secname="contact-section"]').css('fontWeight', 300);
    }

    if(height >= brigH && height < contH){
        $('[data-secname="banner"]').css('fontWeight', 300);
        $('[data-secname="bolos"]').css('fontWeight', 300);
        $('[data-secname="monte_seu_bolo"]').css('fontWeight', 300);
        $('[data-secname="brigadeiros"]').css('fontWeight', 300);
    	$('[data-secname="cardapio"]').css('fontWeight', 300);
    	$('[data-secname="contact-section"]').css('fontWeight', 300);
    }
    if(height >= contH){
        $('[data-secname="banner"]').css('fontWeight', 300);
        $('[data-secname="bolos"]').css('fontWeight', 300);
        $('[data-secname="monte_seu_bolo"]').css('fontWeight', 300);
        $('[data-secname="brigadeiros"]').css('fontWeight', 300);
    	$('[data-secname="cardapio"]').css('fontWeight', 300);
    	$('[data-secname="contact-section"]').css('fontWeight', 300);
    }
});

$(document).ready(function(){ //animação scroll
	$('.smoothscroll').on('click', function(e){
		e.preventDefault();
		var sec = $(this).attr('data-secname');
        var heightFix;
        if($(window).width()>900){
            heightFix = 70;
        }
        if($(window).width()<=900){
            heightFix = 60;
        }
		$('body, html').animate({
			scrollTop: ($('#' + sec).offset().top - Number(heightFix))
		}, 500);
	});
});

$(window).click(function(e){ // recolher hambúrguer 2
    if(e.target.id !== 'burger-menu' && e.target.id !== 'burger-header'){
        $('#burger-menu').slideUp(300);
    }
});
            
$(window).scroll(function(){ //header aparecendo
    var headerHeight;
    if($(window).width() > 900){
        headerHeight = 585;
    }
    if($(window).width() <= 900 && $(window).width() > 600){
        headerHeight = 460;
    }
    if($(window).width() <= 600 && $(window).width() > 450){
        headerHeight = 390;
    }
    if($(window).width() <= 450 && $(window).width() > 400){
        headerHeight = 360;
    }
    if($(window).width() <= 400){
        headerHeight = 315;
    }
    if($(window).scrollTop()>40){
        $('header').fadeIn(700);
    }
    if($(window).scrollTop()<40){
        $('header').fadeOut(200);
    }
});                 