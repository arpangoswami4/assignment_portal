$(document).ready(function(){
    $(".r2r1c1r2c1r4").mouseover(function(){
        $(this).css("background-color","red");
    })
    .mouseout(function(){
        $(this).css("background-color","#EF4C4D");
    });
    $(".new a,.r2r1c1r2c1r6 a").mouseover(function(){
        $(this).css("color","red");
    })
    .mouseout(function(){
        $(this).css("color","#EF4C4D");
    });
    $(".black").mouseover(function(){
        $(this).css("color","black");
    })
    .mouseout(function(){
        $(this).css("color","#373737");
    });
});