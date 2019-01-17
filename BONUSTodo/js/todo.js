"use strict"
$(function() {
    $("#btn-add").click(function(e) {
        const todo = $("#user-input").val(); 
        if (todo.length <= 0) {
            alert("Please enter your TODO!!!"); 
        }
        else {
            addNewTodo(todo); 
            $("#user-input").val("").focus(); 
        }
    })
})

function addNewTodo(todo) {
    let li = $("li").text(todo);
    $("#list").append(li);
}