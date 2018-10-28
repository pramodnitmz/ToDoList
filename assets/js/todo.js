$("li").click(function(){
    $(this).toggleClass("completed")
})
$("span").click(function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();   
})
$("input").keypress(function(event){
    if(event.which===13){
        //grab input value
        var todoText=$(this).val();
        //add todoText to ul
        $("ul").append("<li><span>X</span> " + todoText+ "</li>")
    }
})