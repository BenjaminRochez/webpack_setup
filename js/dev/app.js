let a = "Salut les gens"

import css from '../../css/app.scss';

document.getElementById('button').addEventListener('click', function() {
   //jQuery ici
    import('jquery').then(($) =>{
        $('body').css('backgroundColor', '#000');
       $('h1').css('color', '#FFF');
    });
});



console.log(a);