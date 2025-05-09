$('h1').click(function(){
    $(this).text('I was changed');
    $(this).css('color','green');
})

$('#special').dblclick(function(){
    $(this).text('Hello');
    $(this).css('color','red');
})


$('input').eq(0).keypress(function(event){
    if (event.which===13){
        $('h3').toggleClass('turnBlue');
    }
})


$('h1').on('mouseenter',function(){
    $(this).toggleClass('turnRed');
})


$('input').eq(1).on('click',function(){
    $('.container').slideUp(3000);
})