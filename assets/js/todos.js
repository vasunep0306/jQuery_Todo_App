$('document').ready(function () {
    // Check Off Specific Todos By Clicking
    $("ul").on("click", "li", function () {
        $(this).toggleClass("completed");
    });

    //Click on X to delete Todo
    $("ul").on("click", "span", function (event) {
        $(this).parent().fadeOut(500, function () {
            $(this).remove();
        })
        event.stopPropagation(); //inorder to prevent other events being triggered.
    });
    
    $("input[type='text']").keypress(function(event){
        if(event.which === 13) {
            //grabbing new todo text from input
            var todoText = $(this).val();
            $(this).val(""); //set the box to empty
            //create a new li and add to ul
            $("ul").append("<li><span>X</span> " + todoText + "</li>");
        }
    });
});
