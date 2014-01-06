$('.posts').wrap('<div class="post-container"></div>');

$('.side.left header h2').wrap('<a href="https://news.layervault.com/" target="_blank"></a>');
$('.side.right header h2').wrap('<a href="https://news.ycombinator.com/" target="_blank"></a>');

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
