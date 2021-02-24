$(document).ready(function(){
    //Navigation
    $('.sidenav').sidenav();
    //Dropdown
    $('.dropdown-trigger').dropdown();
    //Collapse
    $('.collapsible').collapsible();
    //Multiple Select
    $('select').formSelect();

    //Confirm password
    $("#password").on("focusout", function (e) {
        if ($(this).val() != $("#passwordConfirm").val()) {
            $("#passwordConfirm").removeClass("valid").addClass("invalid");
        } else {
            $("#passwordConfirm").removeClass("invalid").addClass("valid");
        }
    });
    $("#passwordConfirm").on("keyup", function (e) {
        if ($("#password").val() != $(this).val()) {
            $(this).removeClass("valid").addClass("invalid");
        } else {
            $(this).removeClass("invalid").addClass("valid");
        }
    });
});
