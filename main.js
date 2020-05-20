$(document).ready(function() {

    // faccio la chiamata ajax
    $.ajax({
        'url' : 'https://flynn.boolean.careers/exercises/api/array/music' ,
        'method' : 'GET' ,
        'success' : function(data){

            // creo una variabile per andare a prendere la risposta ajax
            var album = data.response;
            console.log(album);

            // apro un ciclo for-in  per accedere a tutte le proprietà dell'oggetto
            for (var key in album ){
                console.log(album [key]);
                $(album).text();
            };
        };

        'error' : function(){
            console.log('si è verificato un errore');
        }
    });

});

// HANDLEBARS-Template
// disegnare in pagina una card utilizzando handlebars.

var html_template   = $("#template-cards").html();
var template_function = Handlebars.compile(html_template);

function
