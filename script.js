/**
 * Created by jeanella on 3/22/2015.
 */

$(document).ready(function(){
    var logo = $('.logo');

    function floatAnimation(){
        setInterval(function(){
            logo.animate({
                top: '+=10'
            },
            {
                duration: 1000
            });

            logo.animate({
                top: '-=10'
            },
            {
                duration: 1000
            });
        });
    }

    floatAnimation();
});