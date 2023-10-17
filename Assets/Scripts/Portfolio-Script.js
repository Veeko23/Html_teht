

$(document).ready(function() {
    // Animate skill bars
    $('.skill-level').each(function() {
        var width = $(this).width();
        $(this).css('width', '0');
        $(this).animate({ width: width + '%' }, 1000);
    });

    // Add effect to download button
    $('.btn').on('click', function() {
        $(this).addClass('download-clicked');
        
    });
});