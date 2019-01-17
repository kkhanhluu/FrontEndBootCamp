"use strict"
$(function () {
    // blink type
    var typed = new Typed('#type', {
        stringsElement: '#typed-strings', 
        typeSpeed: 40,
        backSpeed: 40,
        fadeout: true, 
        loop: true
    });

    // add event handler for button add TODO
    $("#btn-add").click(function (e) {
        const todo = $("#user-input").val();
        if (todo.length <= 0) {
            alert("Please enter your TODO!!!");
        } else {
            addNewTodo(todo);
            $("#user-input").val("").focus();
        }
    })
    // add event handler for button remove all 
    $("#btn-remove").click(function () {
        $("#list").children().remove();
    })
})

function addNewTodo(todo) {
    let li = $("<li class=\"my-2\">" + todo + "<button class=\"btn btn-danger close btn-remove\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></li>").appendTo("#list");
    // add event handler for button remove this 
    $(".btn-remove").click(function () {
        $(this).parent().remove();
    })
}