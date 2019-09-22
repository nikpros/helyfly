jQuery(document).ready(function($) {
    let buttonShowmore = $('.comments__show-more');
    let hideComments = $('.comments__item').filter('.hide');
    let extraString = '<img class="mr-2" src="/assets/images/arrow.svg"></img>'
    let newString = $(buttonShowmore).text() + ` (${hideComments.length}) `;

    $(buttonShowmore).html(extraString + newString + extraString);

    $(buttonShowmore).on('click', function(e) {
        $(hideComments).removeClass('hide');
        $(this).fadeOut()
    })
})