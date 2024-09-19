$(document).ready(function() {
 
   $('form').on('submit', function(e) {
        e.preventDefault();
        const tarefa = $('#tarefa').val();
        const listaT = $('#lista-tarefas');

        const novoItem = (`<li>${tarefa}</li>`);

        $(novoItem).appendTo(listaT);


        $('li').on('click', function()  {
            $(this).addClass('teste')
        })

       

        $('#tarefa').val('');

        

   })

   
})