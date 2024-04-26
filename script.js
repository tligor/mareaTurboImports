$(document).ready(function(){
    $('#carrousel-images').slick({
        autoplay:true
    });
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#phone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })
    $('form').validate({
        rules: {
            nome: {
                required:true
            },
            email: {
                required:true,
                email:true,
            },
            telefone: {
                required:true
            },mensagem: {
                required:true
            }, carbuy: {
                required:false
            },
        },
        messages:{
            nome: 'Por favor, insira o seu nome',
            telefone: 'Por favor, insira o seu telefone',
            email: 'Por favor, insira o seu E-mail',
            mensagem: 'Por favor, nos envie a sua dúvida',
            carbuy: 'Escolha seu veículo de interesse'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento,validador){
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos);
        }
    })
})