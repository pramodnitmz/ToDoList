$("ul").on("click" ,"li", function(){
    $(this).toggleClass("completed")
})
$("ul").on("click","span", function(event){
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
        // $("ul").html("<li><span>X</span> " + todoText+ "</li>") it will remove previous and all and will add new
    }
})