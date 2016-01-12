jQuery(function($){

    'use strict';

    $('#gallery-slideshow').featherlightGallery({
        filter: 'a',
        afterContent: function() {
            var $slideshow = this,
                $gallery = $(this.$currentTarget).parents('#gallery-slideshow'),
                $thumbs = $('> a', $gallery),
                $navigation = this.$navigation || $('<div>', {class:'navigation'});

            if (!this.$navigation) {
                // Navigation
                $thumbs.each(function(){
                    var $thumb = $('<a>', {alt:$(this).attr('alt'), href:'#'});
                    $thumb.on('click', function(e){
                        e.preventDefault();
                        $slideshow.navigateTo($(this).index());
                    });
                    $navigation.append($thumb);
                });
                $('a:eq(0)', $navigation).addClass('active');
                this.$content.after($navigation);
            }

            this.$navigation = $navigation;
        },
        afterNavigateTo: function(index){
            var $navigation = $('.navigation', this.$content.parent()),
                $thumb = $('> a:eq('+index+')', $navigation);
            $thumb.addClass('active');
            $thumb.siblings().removeClass('active');
        }
    });

});

