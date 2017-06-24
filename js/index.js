'use strict';

$(document).ready(function() {
    //$('#first').css('background-color', 'blue').hide('slow').show(3000);
    
    // Manipulowanie obiektami
    //$('p').css('font-size', '16px');
    //$('#first p').css('font-size', '16px');
    //console.log($('p').text());
    //$('p').text('Hello World!');
    console.log($('p').html()); // Zwraca tylko pierwszy element
    $('p').html('Hello <b>World!</b>'); // Z parametrem zwraca wszystkie
    
    // Dodawanie treści
    $('.pierwszy').append(' 123');
    $('.pierwszy').prepend('456 ');
    $('.pierwszy').after('<h3>Zostałem dodany</h3>');
    $('.pierwszy').before('<h4> class="drugi" Jestem przed wszyskimi</h4>');
    
    // Usuwanie treści
    $('.drugi').remove();   // Usuwa cały elementi elementy wewnatrz
    //$('.drugi span').remove();
    //$('#first p').empty();  // Usuwa treść, ale nie usuwa elementu
    
    $('#first p').css({
        'font-size':'16px',
        'background-color':'yellow',
        'color':'red'
    });
    
    // Metoda val()
    var zmiennaVal = $('#formularz input').val(); // Złapie 1
    console.log(zmiennaVal);
    
    $('#formularz input').val('To jest test'); // Wrzuci tę wartość do inputa
    
    // Dodawanie / usuwanie klas
    $('.trzeci').addClass('czwarty').removeClass('trzeci');
    
    // Metody find i each
    $('#znajdz').find('.find').css({
        'background-color':'blue',
        'color':'ffffff',
        'font-size':'30px'
    });
    
    $('#kazdy ul li').each(function(index){
        console.log(this);
       $(this).addClass('list-item-' + index); 
    });
    
//    // Eventy
//    $('#eventy button').each(function(){
//        $(this).click(function() {
//            console.log('Przycisk został wciśnięty');
//        })
//    })
    // Metoda altenatywna
//    $('#eventy button').each(function() {
//        $(this).on({    // Na on możemy podpiąć kilka zdarzeń - nie tylko click
//            'click': function() {
//                console.log('Przycisk został wciśnięty');
//            },
//            'mouseover': function() {
//                console.log('Jestem nad przyciskiem');
//            }
//        })
//    })
    clickMouseover(); // Wywołanie za pomoca funkcji zewnętrznej
    
    //showHide();
    //fades();
    //slides();
    toggleDiv();
    animacja();
});

$(window).resize(function()  {
    changeColor();
});

$(window).scroll(function() {
    changePosition();
});

function clickMouseover() {
     $('#eventy button').each(function() {
        $(this).on({    // Na on możemy podpiąć kilka zdarzeń - nie tylko click
            'click': function() {
                console.log('Przycisk został wciśnięty');
            },
            'mouseover': function() {
                console.log('Jestem nad przyciskiem');
            }
        })
    })   
}

function changeColor() {
    $('#first').css('background-color', 'blue');
}

function changePosition() {
    var parent = $('#main-nav'); // Aby nie odwoływać się ciągle do #main-nava
    var wysokosc = $(parent).height();
    var offset = $(window).scrollTop();
    console.log(wysokosc);
    
    console.log($(window).scrollTop());
    if (offset >= wysokosc) {
        $(parent).css({
            'position': 'fixed',
            'width': '100%' // Bo element fixed rozciąga sie tylko do swojego contentu
        });
    }
    else {
        $(parent).css('position', 'static');
    }
}

function showHide() {
    var parent = $('#showHide');
    // show i hide steruje wys., szer., opacity, marginesami, paddingami i kończy -> display: none
    $(parent).hide(5000).show(3000);
}

function fades () {
    var parent = $('#showHide');
    // Steruje tylko opacity - na końcu -> display: none
    $(parent).fadeOut(3000).fadeIn(1000);
}

function slides() {
    var parent = $('#showHide');
    // Steruje tylko wysokością,  paddingiem -> dislay: none
    $(parent).slideUp(5000).slideDown(2000);
}

function toggleDiv() {
    var parent = $('#showHide');
    
    $(parent).click(function() {
        $(this).find('h1').toggle();
    })
}

function animacja() {
    var parent = $('#animacja');
    $(parent).find('button').click(function(){
        $(parent).find('#animowany').animate({width: '100%'}, 'slow', function() { // callback
            $(this).animate({width: '200px'}, 'slow');
        });
    })
}
