/*RED EYES*/

    var sourceSwap = function () {
        var $this = $(this);
        var newSource = $this.data('alt-src');
        $this.data('alt-src', $this.attr('src'));
        $this.attr('src', newSource);
    }

    $(function() {
        $('img[data-alt-src]').each(function() { 
            new Image().src = $(this).data('alt-src'); 
        }).hover(sourceSwap, sourceSwap); 
    });

/*END RED EYES*/

/*STACKING ANIMATION

$(document).ready(function () {

    showDiv($('div:first'));

    function showDiv(div) {
        div.transition({
            opacity: 1
        }, 1000, function () {
            //call back
            showDiv(div.next("div"));
        });
    }
});

END STACKING ANIMATION*/

/*BOTTOM TOGGLE*/

$(document).ready(function() {
    $(".toggle-content").hide();
    $(".toggle-title").click(function() {
        $(this).next(".toggle-content").slideToggle("normal");
        $(this).toggleClass('active');
    });
});

/*END BOTTOM TOGGLE*/

