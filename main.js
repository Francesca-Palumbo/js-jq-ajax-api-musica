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

            // recupero la struttura html del template di base
            var html_template   = $("#cd-template").html();
            // preparo la funzione da utilizzare per utilizzare il template
            var template_function = Handlebars.compile(html_template);

            // Ciclare quindi i dischi e ottenuti
            // apro un ciclo for  per accedere a tutte le proprietà dell'oggetto
            for (var i = 0; i < album.length ; i++) {

                var album_corrente = album[i];

                // preparo un oggetto con i dati dello studente da inserire nel template
                var context = {
    					poster: album_corrente.poster,
    					title: album_corrente.title,
    					author: album_corrente.author,
    					year: album_corrente.year,
                        genre: album_corrente.genre
    				};
                console.log(album_corrente.author);

                // tramite handlebars preparo l'html finale con i dati dello studente all'interno
                var clone_html = template_function(context);

                // appendo in pagina una card con i dati dello studente
                $('.cds-container').append(clone_html);
            // for chiuso
            }
        // chiudo 'success'
        },

        'error' : function(){
            console.log('si è verificato un errore');
        }
    // chiudo ajax chiamata
    });
// chiudo (document).ready
});
