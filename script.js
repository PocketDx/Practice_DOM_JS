// 🟢 DESAFÍO 1: Cambiar el texto de un párrafo al hacer clic en el botón
document.getElementById("btnTexto").addEventListener("click", function () {
    // TODO: Seleccionar el párrafo con id "texto" y cambiar su contenido a "¡Texto cambiado!"
    document.getElementById("texto").textContent = "Nuevo Texto, Facilito"
});

// 🟢 DESAFÍO 2: Alternar el color de fondo de la página al hacer clic
document.getElementById("btnColor").addEventListener("click", function () {
    // Lectura recomendada: https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
    // TODO: Usar classList.toggle() para alternar un fondo diferente en el body
    const body = document.querySelector("body");
    const clase = body.classList;

    body.addEventListener("click",() =>{
        const resultado = clase.toggle("bg-green-500");
    })
});

// 🟢 DESAFÍO 3: Agregar tareas dinámicamente a la lista
document.getElementById("btnAgregar").addEventListener("click", function () {
    // TODO: Leer el valor del input "inputTarea"
    let tarea = document.getElementById("inputTarea").value;
    // TODO: Crear un nuevo <li> y agregarle el texto ingresado
    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = tarea;
    // TODO: Agregar un botón dentro del <li> para eliminar la tarea
    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "- Eliminar";
    btnEliminar.addEventListener("click", function(){
        nuevaTarea.remove();
    });
    nuevaTarea.appendChild(btnEliminar);
    // TODO: Agregar el <li> a la lista "listaTareas"
    document.getElementById("listaTareas").appendChild(nuevaTarea);
});

// 🟢 DESAFÍO 4: Cargar datos de usuarios desde una API pública
document.getElementById("btnUsuarios").addEventListener("click", function () {
    // Lectura recomendada: https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch
    // TODO: Hacer una petición a "https://jsonplaceholder.typicode.com/users"
    // TODO: Mostrar solo los nombres y correos electrónicos en "listaUsuarios"
    // TODO: Si la petición falla, mostrar un mensaje de error en consola
});

// 🟢 DESAFÍO 5 (Extra): Guardar y cargar la lista de tareas usando localStorage
// Lectura recomendada: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
// TODO: Guardar las tareas en localStorage cada vez que se agregue o elimine una
// TODO: Cargar las tareas desde localStorage cuando la página se recargue

// 🟢 DESAFÍO 6 (Extra): Filtrar usuarios con correos que contengan "biz"
// Lectura recomendada: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// TODO: Modificar el código del desafío 4 para mostrar solo usuarios con "@biz" en su email
