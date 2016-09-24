$(function(){
    transfer();
});

$('.follow-text').load(function(){
    transfer();
});

$('.unfollow-text').load(function(){
    transfer();
});

$('.following-text').load(function(){
    transfer();
});

$('.block-text').load(function(){
    transfer();
});

$('.mute-user-item').load(function(){
    transfer();
});

function transfer(){
    $('.follow-text').each(function(i,elem) {
        if ($(elem).html().match(/フォローする/)) {
            $(elem).html('<span class="Icon Icon--follow"></span> 博士課程に送る');
        }
    });
    $('.unfollow-text').each(function(i,elem) {
        if ($(elem).html().match(/解除/)) {
            $(elem).html("学位を与える");
        }
    });
    $('.following-text').each(function(i,elem) {
        if ($(elem).html().match(/フォロー中/)) {
            $(elem).html("博士課程に在学中");
        }
    });
    $('.block-text').each(function(i,elem) {
        $(elem).html('<button type="button" class="dropdown-link">博士課程を退学する</button>');
    });
    $('.mute-user-item').each(function(i,elem) {
        $(elem).html('<button type="button" class="dropdown-link">博士課程を休学する</button>');
    });
}

