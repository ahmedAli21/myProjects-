/*global $*/


// make your own plugin


/* $(document).ready(function () {

    'use strict';

    // making our own custom project (first project )


    $.prototype.myProject1 = function () {

        $(this).css('color', 'red');

        return $(this);

    };

    // making our own custom project (second project)

    $.fn.myProject2 = function () {

        $(this).css({

            position: 'absolute',
            left: ($(window).width() - $(this).width()) / 2,
            top: ($(window).height() - $(this).height()) / 2


        });

    };

    $('.ourTest').myProject1(); // executing 1st pro
    $('.ourTest').myProject2(); // executing 2nd pro

});
*/

// calculate letters remaining in the textarea :)


/* $(document).ready(function () {

    'use strict';
    $('textarea').bind('keyup', function () {

        $('.count').text('letters allowed : ' + ($(this).attr('maxlength') - $(this).val().trim().length));



    });

}); */




// showing and hiding password



/*$(document).ready(function () {

    'use strict';

    $('input[type=checkbox]').on('click', function () {

        var myPassowrd = $('.password');

        if ($(this).is(':checked')) {

            $(myPassowrd).attr('type', 'text');
        } else {


            $(myPassowrd).attr('type', 'password');
        }


    });



});*/


// countdown

/* $(document).ready(function () {

    'use strict';

    var coutDown = setInterval(function count() {

        var myNumber = parseInt($('.count').text());

        if (myNumber === 0) {

            clearInterval(coutDown);

        } else {

            $('.count').text(myNumber - 1);

        }

    }, 1000);

}); */


// infinite animation


/*$(document).ready(function () {

    'use strict';
    (function myAnimate() {

        $('button').animate({

            width: '400px'
        }, 1000, function () {

            $(this).animate({

                width: '200px'

            });

            myAnimate();

        });


    }());






});*/

// creating select box with jquery


/* $(document).ready(function () {

    'use strict';


    var i = 1991;

    for (i = 1991; i < 2018; i = i + 1) {

        $('<option>', {value: i, text: i }).appendTo($('#select'));

    }



});*/

// scroll top button

/* $(document).ready(function () {

    'use strict';

    $(window).on('scroll', function showButton() {

        if ($(window).scrollTop() >= 2000) {

            $('.fas').show();

        } else {

            $('.fas').hide();


        }

    });



    $('.fas').on('click', function () {

        $('html, body').animate({

            scrollTop : '0px'

        }, 1000);


    });

}); */


/* $(document).ready(function () {

    'use strict';

    $('.item').on('click', function () {

        $(this).next().animate({



            width: '100px'


        }).siblings('.info').animate({
            width: '0px'

        });



    });


});
*/


/* var typed = new Typed(".type", {
    strings: ["Hello this is me ahmed ali from typed.js", 'fuck every one who is rude to me'],

    backSpeed: 20,
    typeSpeed: 20,


    // Default value
}); */



$(document).ready(function () {

    'use strict';
    //$('input[type=checkbox]').css({opacity:'0.0'})

    $('.switch').on('click', function (){

        if ($('.check').is(':checked')) {
            
            $('span').animate({left: '40px'}, 200).css({backgroundColor:'#20772c'})
            $('.info').text('this is on').css({
                fontSize: '25px',
                color: 'green',
                textAlign: 'center',
                padding: '5px'
            })

        } else { 

            $('span').animate({left:'2px'}, 200).css({backgroundColor:'rgb(219, 6, 6)'})
            $('.info').text('this is off :( ').css({
                fontSize: '25px',
                color: 'red',
                textAlign: 'center',
                padding: '5px'
            })
        }

   });

});