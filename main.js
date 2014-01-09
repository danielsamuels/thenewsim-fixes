// Wrap the posts in a container so we can target it with CSS.
$('.posts').wrap('<div class="post-container"></div>');

// Add links to each site.
$('.side.left header h2').wrap('<a href="https://news.layervault.com/" target="_blank"></a>');
$('.side.right header h2').wrap('<a href="https://news.ycombinator.com/" target="_blank"></a>');

// Fix the numbering of the posts.
$('.left .posts .post').each(function(index, element) { $('.num', element).html(index+1); });
$('.right .posts .post').each(function(index, element) { $('.num', element).html(index+1); });

// Restore a switched state.
if (localStorage['thenews_switch'] == 'true') {
    $('.side + .side').insertBefore('.side:first-of-type');
}

$(window).on('keypress', function(e) {
    if (e.keyCode == 115) {
        $('.side + .side').insertBefore('.side:first-of-type');

        // Save the switch.
        localStorage['thenews_switch'] = $('.side + .side').hasClass('left');
    }
});
