<script>
    import { fade } from 'svelte/transition';
    
    let userOptions = {}; // Almacena las opciones del usuario por ID de pregunta
    let validationMessages = {}; // Almacena mensajes de validación por ID de pregunta

    const correctAnswers = {
        1: '3',
        2: '2',
        3: '4',
        4: '1',
    };

    // Función para validar respuestas y calcular puntos
    let points = 0; // Puntos actuales
    function validateAnswer(questionNum) {
        const userResponse = userOptions[questionNum].trim();
        if (userResponse === '') {
            validationMessages[questionNum] = "No se ingresó ninguna opción";
        } else if (correctAnswers[questionNum] === userResponse) {
            validationMessages[questionNum] = "Respuesta correcta";
            points++;  // Incrementar puntos si la respuesta es correcta
        } else {
            validationMessages[questionNum] = "Respuesta incorrecta";
            points--;  // Decrementar puntos si la respuesta es incorrecta
        }
    }
    const puntominimo = 4; 

    let initialItems = [
        { id: 4, name: 'a_n = -1.5 * a_(n-1) + 2', type: 'cuarto' },
        { id: 5, name: 'a_n = 0.5 * a_(n-1)', type: 'quinto' },
        { id: 1, name: 'a_n = 5 * a_(n-1) + 3', type: 'primero' },
        { id: 3, name: 'a_n = 2 * a_(n-1)', type: 'terecero' },
        { id: 2, name: 'a_n = 4 * a_(n-1) -5', type: 'segundo' },
    ];

    let targetItems = Array(initialItems.length).fill(null);

    let draggedItem = null;

    function dragStart(event, item) {
        draggedItem = item;
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("text/plain", item.id);
    }

    function drop(event, index) {
        event.preventDefault();
        if (targetItems[index] === null) { // Permitir soltar solo si el contenedor está vacío
            targetItems[index] = draggedItem;
            let removeIndex = initialItems.indexOf(draggedItem);
            initialItems.splice(removeIndex, 1); // Eliminar de la ubicación inicial
        }
    }

    function allowDrop(event) {
        event.preventDefault();
    }

    function checkOrder() {
        // Simplemente verifica si los elementos están en el orden correcto
        const isCorrect = targetItems.every((item, index) => item && item.id === index + 1);
        if (isCorrect) {
            alert("Correcto! Has ordenado correctamente los pasos de inducción.");
            points++;  // Incrementar puntos si la respuesta es correcta
        } else {
            alert("Incorrecto. Si quieres intentarlo nuevamente recarga la pagina (perderas tu progreso en los cuestionarios de la pagina actual).");
            points--;  // decrementa puntos si la respuesta es incorrecta
        }
    }
</script>

<body>
    <div class="container" in:fade={{ delay: 200, duration: 400 }}>
        <div class="sidebar">
            <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                <img src="/logo.png" alt="Descripción de la imagen">   
            </div>
            <div class="card">
                <h4>Usa esta guia de acceso rapido en caso que quieras avanzar entre modulos para buscar informacion especifica</h4>
                <a href="/modulo1" class="button">Modulo 1. Introduccion</a>
                <p></p>
                <a href="/modulo2" class="button">Modulo 2. Homogeneidad</a>
                <p></p>
                <a href="/modulo3" class="button">Modulo 3. Solucion grafica e inducción</a>
                <p></p>
                <a href="/modulo4" class="button">Modulo 4. Solucion Analitica y metodos</a>
                <p></p>
            </div>
        </div>  
        <div class="main-content">
            <div class="card">
                <h2>Modulo 5: Practicas, Evaluacion de conocimientos adquiridos</h2>
                <h4>Felicidades, si llegaste hasta este punto implica que tienes los conocimientos necesarios para poder enfrentar cualquier problema relacionado a recurrencias lineales de primer orden</h4>
                <p>Este modulo esta dirigido a reforzar conocimientos de lo aprendido, con tematicas evaluativas</p>
                <h3>Ejercicio 1</h3>
                <p>veras 5 recurrencias en un orden aleatorio, la idea es que las ordenes en la pila de contenedores abajo, en orden ascendente, de manera que la recurrencia que se acerque en el menor numero de iteraciones al numero 100 este de primera y luego las que le siguen</p>
                <div class="card">
                    {#each initialItems as item (item.id)}
                        <div
                            class="dropzone"
                            role="button"
                            tabindex="0" 
                            on:dragover={allowDrop}
                            on:drop={(event) => drop(event, initialItems.indexOf(item))}
                            draggable="false">
                            {#if item}
                                <div
                                    class="item"
                                    draggable="true"
                                    on:dragstart={(event) => dragStart(event, item)}
                                    role="button"
                                    tabindex="0"> <!-- Add tabindex attribute with value 0 -->
                                    {item.name}
                                </div>
                            {/if}
                        </div>
                    {/each}
                    <p>____________________________________________________________________________________</p>
                    {#each targetItems as item, index}
                        <div
                            class="dropzone"
                            role="button"
                            tabindex="0"
                            on:dragover={allowDrop}
                            on:drop={(event) => drop(event, index)}
                            draggable="false">
                            {#if item}
                                <div class="item">
                                    {item.name}
                                </div>
                            {/if}
                        </div>
                    {/each}
                </div>
                <button on:click={checkOrder} class="button">Verificar Orden</button>

                <h3>Ejercicio 2</h3>
                <h4>Encontrando Soluciones Particulares:</h4>
                <p>Dada la siguiente recurrencia no homogenea: </p>
                <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                    <img src="/ejercicio4.png" alt="Descripción de la imagen">   
                </div>
                <p>.</p>
                <p>Pregunta 2.1) Que forma deberia tener la solucion particular?</p>
                <p>Ingresa el numero de la respuesta correcta:</p>
                <p>opcion 1) a<sub>n</sub><sup>p</sup> = A * n<sup>2n</sup> </p>
                <p>opcion 2) a<sub>n</sub><sup>p</sup> = A * 2<sup>n</sup> </p>
                <p>opcion 3) a<sub>n</sub><sup>p</sup> = A * n *2<sup>n</sup> </p>
                <p>opcion 4) a<sub>n</sub><sup>p</sup> = A * 2 * n </p>
                <form on:submit|preventDefault={() => validateAnswer(1)}>
                    <input type="text" bind:value={userOptions[1]} placeholder="Ingresa tu opción">
                    <button type="submit" class="button">Validar</button>
                    {#if validationMessages[1]}
                        <p>Resultado: {validationMessages[1]}</p>
                    {/if}
                </form>
                <p>.</p>
                <p>Pregunta 2.2) Cual es la solucion general de la recurrencia?</p>
                <p>ingresa el numero de la respuesta correcta:</p>
                <p>opcion 1) a<sub>n</sub> = n<sup>2</sup> + n * 1<sup>n</sup></p>
                <p>opcion 2) a<sub>n</sub> = 2<sup>n</sup> * 2 + n * 2<sup>n</sup></p>
                <p>opcion 3) a<sub>n</sub> = 2 + n * 2<sup>n</sup> </p>
                <p>opcion 4) a<sub>n</sub> = 2<sup>n</sup> * 2 + n * 2 </p>
                <form on:submit|preventDefault={() => validateAnswer(2)}>
                    <input type="text" bind:value={userOptions[2]} placeholder="Ingresa tu opción">
                    <button type="submit" class="button">Validar</button>
                    {#if validationMessages[2]}
                        <p>Resultado: {validationMessages[2]}</p>
                    {/if}
                </form>
                <p>.</p>
                <h3>Ejercicio 3: Aplicacion Practica de Coeficientes Indeterminados</h3>
                <p>Problema) en base a la siguiente recurrencia: </p>
                <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                    <img src="/ejercicio5.png" alt="Descripción de la imagen">   
                </div>
                <p>pregunta 1: Que forma es apropiada para la solucion particular ?</p>
                <p>opcion 1) A * n<sup>2</sup> + B * n</p>
                <p>opcion 2) A * n + B </p>
                <p>opcion 3) A * n<sup>2</sup> </p>
                <p>opcion 4) A </p>
                <form on:submit|preventDefault={() => validateAnswer(3)}>
                    <input type="text" bind:value={userOptions[3]} placeholder="Ingresa tu opción">
                    <button type="submit" class="button">Validar</button>
                    {#if validationMessages[3]}
                        <p>Resultado: {validationMessages[3]}</p>
                    {/if}
                </form>
                <p>.</p>
                <p>pregunta 2: calcula a<sub>30</sub> usando la solucion general que encontraste</p>
                <p>opcion 1) 5.368.709.116</p>
                <p>opcion 2) 5.342.008.586</p>
                <p>opcion 3) 5.377.777.893</p>
                <p>opcion 4) 5.782.456.578</p>
                <form on:submit|preventDefault={() => validateAnswer(4)}>
                    <input type="text" bind:value={userOptions[4]} placeholder="Ingresa tu opción">
                    <button type="submit" class="button">Validar</button>
                    {#if validationMessages[4]}
                        <p>Resultado: {validationMessages[4]}</p>
                    {/if}
                </form>
                <p>Puntos Acumulados en el modulo hasta ahora: {points}</p>
                <p>Debe ser mayor a {puntominimo}, para que se habilite el boton de revision</p>
            </div>
        </div>   
    </div>
<!-- Botón para ir al módulo anterior -->
<a href="/modulo4" class="button-left">Módulo Anterior</a>

<!-- Botón para ir al módulo siguiente -->
{#if points >= puntominimo}
    <a href="/modulo6" class="button-right">revisar test</a>
{/if}
</body>

<style>
    body {
        font-family: 'Arial', sans-serif;
        background-color: #f4f4f9; /* Color de fondo más claro y suave */
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center; /* Centra el contenido horizontalmente */
        min-height: 100vh; /* Establece la altura mínima para cubrir al menos la pantalla completa */
        width: 100%; /* Asegura que el body ocupe el ancho completo */
        overflow-x: hidden; /* Oculta el desplazamiento horizontal innecesario */
        overflow-y: auto; /* Permite desplazamiento vertical si el contenido es más largo que la pantalla */
    }
    
    .container {
        display: grid;
        grid-template-columns: 1fr 3fr; /* Proporción ajustada para sidebar y contenido principal */
        gap: 20px;
        width: 90%; /* Ancho ajustado para mejor visualización */
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15); /* Sombra suave */
        margin: 20px auto; /* Agrega margen arriba y abajo para no pegarse a los bordes de la ventana */
        overflow: hidden; /* Asegura que no haya desplazamiento innecesario dentro del contenedor */
        font-size: 20px; /* Aumenta el tamaño de todas las letras */
    }
    
    .sidebar, .main-content {
        background-color: #1e293b; /* Color de fondo oscuro */
        color: #fff;
        border-radius: 8px;
        padding: 20px;
    }
    
    .card {
        background-color: #243447; /* Color de fondo un poco más claro que el sidebar */
        margin-bottom: 20px;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
    
    .card h2 {
        color: #29b6f6; /* Azul más vibrante */
    }
    
    .card p {
        color: #b0bec5; /* Texto más claro para mejor legibilidad */
    }
    
    
    
    input[type="text"] {
        width: calc(100% - 50px);
        padding: 8px;
        margin-left: 10px;
        border-radius: 4px;
        border: 1px solid #ccc;
    }
    
    .button {
        background-color: #26c6da; /* Azul turquesa para botones */
        color: #17202A;
        padding: 10px 15px;
        text-align: center;
        display: inline-block;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    
    .button:hover {
        background-color: #00acc1; /* Color más oscuro al pasar el ratón */
    }
    
    
    /* Estilos Generales para Imágenes */
    img {
        max-width: 100%; /* Asegura que la imagen no sobrepase el ancho de su contenedor */
        height: auto; /* Mantiene la proporción de las imágenes */
        display: block; /* Evita espacios extra debajo de la imagen */
        margin: 0 auto; /* Centra la imagen horizontalmente si es necesario */
        border-radius: 8px; /* Opcional: añade bordes redondeados a todas las imágenes */
    }
    
    /* Estilos para Imágenes Específicas en Tarjetas */
    
    
    .button-right {
        position: fixed; /* Posición fija en la pantalla */
        bottom: 20px; /* 20px desde el borde inferior */
        right: 20px; /* 20px desde el borde derecho */
        padding: 10px 20px; /* Espaciado interno para hacer el botón más grande */
        background-color: #007BFF; /* Color de fondo azul */
        color: white; /* Texto en color blanco */
        text-decoration: none; /* Sin subrayado de texto */
        border-radius: 5px; /* Bordes redondeados */
        border: none; /* Sin borde */
        cursor: pointer; /* Cursor de mano para indicar que es clickeable */
        outline: none; /* Elimina el contorno cuando se enfoca */
        transition: background-color 0.3s, box-shadow 0.3s; /* Transiciones para el color de fondo y la sombra */
    }
    
    .button-right:hover {
        background-color: #0056b3; /* Cambio de color al pasar el mouse */
        box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2); /* Sombra para dar efecto de elevación */
    }
    
    .button-right:active {
        box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2); /* Sombra más ajustada para efecto de presión */
        transform: translateY(2px); /* Ligeramente hacia abajo para simular el efecto de presión */
    }
    
    .button-left {
        position: fixed; /* Posición fija en la pantalla */
        bottom: 20px; /* 20px desde el borde inferior */
        left: 20px; /* 20px desde el borde izquierdo */
        padding: 10px 20px; /* Espaciado interno para hacer el botón más grande */
        background-color: #007BFF; /* Color de fondo azul */
        color: white; /* Texto en color blanco */
        text-decoration: none; /* Sin subrayado de texto */
        border-radius: 5px; /* Bordes redondeados */
        border: none; /* Sin borde */
        cursor: pointer; /* Cursor de mano para indicar que es clickeable */
        outline: none; /* Elimina el contorno cuando se enfoca */
        transition: background-color 0.3s, box-shadow 0.3s; /* Transiciones para el color de fondo y la sombra */
    }
    
    .button-left:hover {
        background-color: #0056b3; /* Cambio de color al pasar el mouse */
        box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2); /* Sombra para dar efecto de elevación */
    }
    
    .button-left:active {
        box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2); /* Sombra más ajustada para efecto de presión */
        transform: translateY(2px); /* Ligeramente hacia abajo para simular el efecto de presión */
    }
    .dropzone {
        padding: 5px;
        margin: 5px;
        background-color: #29b6f6;
        border: 1px solid #ccc;
        cursor: pointer;
        min-height: 20px;
        width: 45%;
    }
    .item {
        padding: 5px;
        background-color: #29b6f6;
        border: 3px solid #ccc;
        cursor: grab;
    }
</style>