let a = "Salut les gens"


document.getElementById('button').addEventListener('click', function() {
   //jQuery ici
    import('jquery').then(($) =>{
        $('body').css('backgroundColor', '#000');
       $('h1').css('color', '#FFF');
    });
});



console.log(a);