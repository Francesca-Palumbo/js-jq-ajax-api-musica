//  Con una chiamata ajax, recuperare i dischi musicali restituiti dall'api:
// Ciclare quindi i dischi ottenuti e per ognuno di essi disegnare in pagina una card utilizzando handlebars.

$(document).ready(function() {

    // Con una chiamata ajax, recuperare i dischi musicali restituiti dall'api:
    // faccio la chiamata ajax
    $.ajax({
        'url' : 'https://flynn.boolean.careers/exercises/api/array/music' ,
        'method' : 'GET' ,
        'success' : function(data){

            // recupero i dischi restituiti dall'api. N.B questo è un array
            // creo una variabile per andare a prendere la risposta ajax
            var dischi = data.response;
            console.log(dischi);

            // recupero la struttura html del template di base
            var html_template = $("#cd-template").html();
            // preparo la funzione da utilizzare per utilizzare il template
            var template_function = Handlebars.compile(html_template);

            // Ciclare quindi i dischi ottenuti
            // apro un ciclo for  per accedere a tutte le proprietà dell'oggetto
            for (var i = 0; i < dischi.length ; i++) {

                var disco_corrente = dischi[i];

                // preparo un oggetto con i dati dello studente da inserire nel template
                var context = {
    					poster: disco_corrente.poster,
    					title: disco_corrente.title,
    					author: disco_corrente.author,
    					year: disco_corrente.year,
                        genre: disco_corrente.genre
    				};
                console.log(disco_corrente.author);

                // tramite handlebars preparo l'html finale con i dati dell' album all'interno
                var clone_html = template_function(context);

                // appendo in pagina 
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
