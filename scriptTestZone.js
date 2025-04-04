// 🟢 DESAFÍO 1: Cambiar el texto de un párrafo al hacer clic en el botón
document.getElementById("btnTexto").addEventListener("click", function () {
    // TODO: Seleccionar el párrafo con id "texto" y cambiar su contenido a "¡Texto cambiado!"
    document.getElementById("texto").textContent = "Texto Cambiado Con Exito !!!"
});

// 🟢 DESAFÍO 2: Alternar el color de fondo de la página al hacer clic
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btnColor").addEventListener("click", function () {
        // Alternar entre dos clases de fondo en el body
        document.body.classList.toggle("bg-blue-300"); // Agrega o quita el fondo azul
        document.body.classList.toggle("bg-white"); // Agrega o quita el fondo blanco
    });
});

// 🟢 DESAFÍO 3: Agregar tareas dinámicamente a la lista
document.getElementById("btnAgregar").addEventListener("click", function () {
    // TODO: Leer el valor del input "inputTarea"
    // TODO: Crear un nuevo <li> y agregarle el texto ingresado
    // TODO: Agregar un botón dentro del <li> para eliminar la tarea
    // TODO: Agregar el <li> a la lista "listaTareas"
    // Obtener el valor del input
    let inputTarea = document.getElementById("inputTarea").value;
    
    if (inputTarea.trim() !== "") {
        // Crear un nuevo elemento <li> y toma el valor de InputTarea
        let nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = inputTarea;
        
        // Crear un botón para eliminar la tarea
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.style.marginLeft = "10px";
        
        // Agregar evento para eliminar la tarea
        btnEliminar.addEventListener("click", function () {
            nuevaTarea.remove();
        });
        
        // Agregar el botón al <li>
        nuevaTarea.appendChild(btnEliminar);
        
        // Agregar el <li> a la lista
        document.getElementById("listaTareas").appendChild(nuevaTarea);
        
        // Limpiar el input
        document.getElementById("inputTarea").value = "";
    } else {
        alert("Por favor, ingrese una tarea válida.");
    }
});

// 🟢 DESAFÍO 4: Cargar datos de usuarios desde una API pública
document.getElementById("btnUsuarios").addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error en la petición");
            }
            return response.json();
        })
        .then(data => {
            let listaUsuarios = document.getElementById("listaUsuarios");
            listaUsuarios.innerHTML = "";

            // Filtrar usuarios cuyo email termine en ".biz"
            let usuariosFiltrados = data.filter(usuario => usuario.email.endsWith(".biz"));

            if (usuariosFiltrados.length === 0) {
                let mensaje = document.createElement("li");
                mensaje.textContent = "No se encontraron usuarios con correo .biz";
                listaUsuarios.appendChild(mensaje);
            } else {
                usuariosFiltrados.forEach(usuario => {
                    let itemUsuario = document.createElement("li");
                    itemUsuario.textContent = `${usuario.name} - ${usuario.email}`;
                    listaUsuarios.appendChild(itemUsuario);
                });
            }
        })
        .catch(error => {
            console.error("Hubo un error al obtener los usuarios:", error);
        });
});

// 🟢 DESAFÍO 5 (Extra): Guardar y cargar la lista de tareas usando localStorage
// Lectura recomendada: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
// TODO: Guardar las tareas en localStorage cada vez que se agregue o elimine una
// TODO: Cargar las tareas desde localStorage cuando la página se recargue
// Seleccionar elementos
const listaTareas = document.getElementById("listaTareas");
const inputTarea = document.getElementById("inputTarea");
const btnAgregarTarea = document.getElementById("btnAgregarTarea");

// Cargar tareas desde localStorage al iniciar
document.addEventListener("DOMContentLoaded", cargarTareas);

// Función para cargar tareas
function cargarTareas() {
    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    listaTareas.innerHTML = ""; // Limpiar la lista antes de agregar elementos

    tareas.forEach((tarea, index) => {
        let itemTarea = document.createElement("li");
        itemTarea.textContent = tarea;

        // Crear botón eliminar
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.style.marginLeft = "10px";

        // Evento para eliminar tarea
        btnEliminar.addEventListener("click", function () {
            eliminarTarea(index);
        });

        itemTarea.appendChild(btnEliminar);
        listaTareas.appendChild(itemTarea);
    });
}

// Función para guardar tareas en localStorage
function guardarTareas(tareas) {
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

// Agregar nueva tarea
btnAgregarTarea.addEventListener("click", function () {
    let tarea = inputTarea.value.trim();
    if (tarea) {
        let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
        tareas.push(tarea);
        guardarTareas(tareas);
        cargarTareas(); // Recargar la lista en pantalla
        inputTarea.value = ""; // Limpiar el input
    } else {
        alert("Por favor, ingrese una tarea válida.");
    }
});

// Función para eliminar tarea
function eliminarTarea(index) {
    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas.splice(index, 1); // Eliminar tarea de la lista
    guardarTareas(tareas);
    cargarTareas();
}

// 🟢 DESAFÍO 6 (Extra): Filtrar usuarios con correos que contengan "biz"
// Lectura recomendada: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// TODO: Modificar el código del desafío 4 para mostrar solo usuarios con "@biz" en su email