//  Con una chiamata ajax, recuperare i dischi musicali restituiti dall'api:
// Ciclare quindi i dischi ottenuti e per ognuno di essi disegnare in pagina una card utilizzando handlebars.

$(document).ready(function() {

    // Con una chiamata ajax, recuperare i dischi musicali restituiti dall'api:
    // faccio la chiamata ajax
    $.ajax({
        'url' : 'https://flynn.boolean.careers/exercises/api/array/music' ,
        'method' : 'GET' ,
        'success' : function(data){

            // creo una variabile per andare a prendere la risposta ajax
            var album = data.response;
            console.log(album);

            var html_template   = $("#cd-template").html();
            var template_function = Handlebars.compile(html_template);

            // Ciclare quindi i dischi e ottenuti
            // apro un ciclo for-in  per accedere a tutte le proprietà dell'oggetto
            for (var i = 0; i < album.length ; i++) {
                var album_corrente = album[i];
                var context = {
    					poster: album_corrente.poster,
    					title: album_corrente.title,
    					author: album_corrente.author,
    					year: album_corrente.year,
                        genre: album_corrente.genre
    				};
                console.log(album_corrente.author);

                var clone_html = template_function(context);
                $('.cds-container').append(clone_html);

            }
        },

        'error' : function(){
            console.log('si è verificato un errore');
        }
    });

    // siccome voglio visualizzare la variabile 'album' in pagina, creo una funzione che richiama dall'esterno la risposta ajax
    function stampa_album(album){
        // console.log(album);
        // $('template-cards').append(album);
    }
});
