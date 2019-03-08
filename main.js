$('#service').on('change', function() {var value = $(this).children('option:selected').val()
    if (value == 1) {
        $('#valor').html('<img src="http://confeitando.com.br/wp-content/uploads/2016/12/naked_cake_frutas_vermelhas_trufado_confeitandoblog_um_ano.jpg" style="display:flex; position:relative; justify-content: center; width:30%; height:30%;"/>Preço: R$ 70,00')
    } else if (value == 2) {
        $('#valor').html('<img src="https://tudoela.com/wp-content/uploads/2018/01/Naked-cake-810x452.jpg" style="display:flex; position:relative; width:30%; height:30%;" /> Preço: R$ 100,00')
    } else if (value == 3) {
        $('#valor').html('<img src="https://scontent-gru2-1.cdninstagram.com/vp/d249d2755bb32dab2c2e3f594a07d489/5D134DFD/t51.2885-15/e35/52912038_1173518906155442_8326621776566913622_n.jpg?_nc_ht=scontent-gru2-1.cdninstagram.com" style="display:flex; position:relative; width:30%; height:30%;"/> Preço: R$ 120,00')
    } else if (value == 4) {
        $('#valor').html('<img src="https://www.halfbakedharvest.com/wp-content/uploads/2018/03/Strawberry-Chamomile-Naked-Cake-7-500x500.jpg" style="display:flex; position:relative; width:30%; height:30%;"/> Preço: R$ 160,00')
    }
})