$(document).ready(function(){
    //Navigation
    $('.sidenav').sidenav({
        edge: "right"
    });
    //Dropdown
    $('.dropdown-trigger').dropdown();
    //Collapse
    $('.collapsible').collapsible();
    //Multiple Select
    $('select').formSelect();
    //Modal
    $('.modal').modal();
    //Textarea (check if div is visible in page before executing below)
    if( $('#recipe_how_to').length ) {
      M.textareaAutoResize($('#recipe_how_to'));
    }
    if( $('#recipe_ingredients').length ) {
      M.textareaAutoResize($('#recipe_ingredients'));
    }

  //Toggle see more text
  $('.collapsible').on('click', function(){
    let $activeLi = $(this).find('li').hasClass('active');
    let $chevron = $(this).find('i');
    let $seeMore = $(this).find('span');
        if( $activeLi ) {
            $chevron.removeClass('fa-chevron-down');
            $chevron.addClass('fa-chevron-up');
            $seeMore.html('See less...')
        }
        else {
            $chevron.removeClass('fa-chevron-up');
            $chevron.addClass('fa-chevron-down');
            $seeMore.html('See more...')
        }
  });
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

    //Category filter
    let $filters = $("input:checkbox[name='category']");
    let $categoryContent = $('.recipe');
    let filters = [];

    $filters.on('change', function(e){
        filters = [];
        $("input:checkbox[name='category']:checked").each(function(index, checkbox){
            filters.push(checkbox.value);
        });
        if (filters.length > 0) {
            $categoryContent.hide();
        }
        else {
            $categoryContent.show();
        }
        filters.forEach(function(filter){
            $(`[data-recipe-category="${filter}"]`).show();
        });
    });


    //Modal delete recipe
    $('.modal-recipe-delete').on('click', function(){
        let deleteUrl = $(this).attr('data-recipeid');
        $('.modal-delete-recipe').attr('href', deleteUrl);
    });
});
