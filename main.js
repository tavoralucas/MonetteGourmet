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
                breakpoint: 900,
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
                breakpoint: 900,
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