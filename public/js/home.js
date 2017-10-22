$(document).ready(function() {
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('.modal').modal();
    console.log("hello");

    $(".save-btn").on("click", function (event) {
    	event.preventDefault();
    	
    	var id = $(this).attr("artId");
    	console.log(id);

    	$.ajax({
    		type : "PUT",
    		url : `/api/save-article`,
    		data : {id : id},
    		success : function (data) {
    			Materialize.toast('Saved', 3000);
    			$(`#${id}`).remove();

    		}
    	});

    });

    $(".delete-btn").on("click", function (event) {
    	event.preventDefault();
    	
    	var id = $(this).attr("artId");
    	console.log(id);

    	$.ajax({
    		type : "PUT",
    		url : `/api/unsave-article`,
    		data : {id : id},
    		success : function (data) {
    			Materialize.toast('Delete From Saved', 1500);
    			$(`#${id}`).remove();
    			

    		}
    	});
    });

    $(".add-btn").on("click", function (event) {
    	
    	var id = $(this).attr("artId");
    	console.log(id);

    	
    });



});