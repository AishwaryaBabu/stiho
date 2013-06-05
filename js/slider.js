// JavaScript Document

$(function ready(){
	var timeoutID = null;
	var size = $(".slider img").size();
	
	function Show(image){
		clearTimeout(timeoutID);
		$(".slider img").hide("slide",{direction:"left"}, 500);
		$(".slider #"+image).delay(500).show("slide", {direction:"right"},500);
		
		timeoutID = setTimeout(function(){
			Show((image+1) % size);
		}, 4000);
	}
	
	function foo(x){
		return function(){Show(x);
		}
	}
	
	for(var i=0; i<size; i++) {
		$("<img src= images/bullet.png>")
		.click(foo(i))
		.appendTo("#buttons_area");
	}
	
	Show(0);
	
});

