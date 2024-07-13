$(document).ready(function() {
    $('.image').show();

    $('.filters button').click(function() {
        var filter = $(this).data('filter');
        if (filter === 'all') {
            $('.image').fadeIn();
        } else {
            $('.image').hide();
            $('.' + filter).fadeIn();
        }
    });

    $('.image img').click(function() {
        var src = $(this).attr('src');
        $('.lightbox-content').attr('src', src);
        $('.lightbox').fadeIn();
    });

    $('.close').click(function() {
        $('.lightbox').fadeOut();
    });
});


