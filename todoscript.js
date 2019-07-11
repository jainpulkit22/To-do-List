/*$("li").click(function(){
	$(this).toggleClass("list");
});*/
//to add the listener to the newly added li we have to use the on() functionality
$("ul").on("click", "li", function()
{
	$(this).toggleClass("list");
});
$("ul").on("click", "span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropogation();
});
$("input[type='text'").keypress(function(event){
	if(event.which === 13)
	{
		var item=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i>  </span>"  + item +"</li>");
	}
});
$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle(500);
});