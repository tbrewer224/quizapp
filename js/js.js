$(document).ready(function(){

/*Disable submit button*/

$(function(){
    $("input[type='radio']").change(function(){
        $("input[type='submit']").prop("disabled", false);
    });
});



});