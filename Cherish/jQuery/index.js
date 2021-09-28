$("h1").addClass("big-title"); 
$(document).on("click",function(event){
    $("h1").slideUp().slideDown().animate({opacity:0.5}).css("color","purple");
});