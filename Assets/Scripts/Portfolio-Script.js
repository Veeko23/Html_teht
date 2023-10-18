

$(document).ready(function() {

    $('.skill-level').each(function() {
        var width = $(this).width();
        $(this).css('width', '0');
        $(this).animate({ width: width + '%' }, 1000);
    });

    $('.btn').on('click', function() {
        $(this).addClass('download-clicked');
        
    });
});