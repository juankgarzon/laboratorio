const form = document.getElementById('agregarForm');
const tareasLista = document.getElementById('tareasLista');
const eliminarCompletadas = document.getElementById('eliminarCompletadas');

form.addEventListener('submit', function (event){
    event.preventDefault();

    const nuevaTarea = document.getElementById('tarea').value;

    const nuevaTareaLi = document.createElement('li')
    nuevaTareaLi.innerText= nuevaTarea;

    nuevaTareaLi.addEventListener('click', function(){
        nuevaTareaLi.classList.toggle('completada');
    })

    tareasLista.appendChild(nuevaTareaLi);

    document.getElementById('tarea').value = ' ';

    eliminarCompletadas.addEventListener('click', function(){
        const tareasCompletadas = document.querySelectorAll('li')
        console.log(tareasLista);
                           
        tareasCompletadas.forEach(function(tareasCompletadas){
        tareasCompletadas.remove();                                              
        });    
    });

})