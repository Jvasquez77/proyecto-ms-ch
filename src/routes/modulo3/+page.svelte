<script>
    import { fade } from 'svelte/transition';
    
    let userOptions = {}; // Almacena las opciones del usuario por ID de pregunta
    let validationMessages = {}; // Almacena mensajes de validación por ID de pregunta

    const correctAnswers = {
        1: '4',
        2: '3',
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
    const puntominimo = 3; 

    let initialItems = [
        { id: 3, name: '(a_0 = 1)', type: 'base' },
        { id: 2, name: 'Supongamos que a_k = k + 1 para algún k ≥ 0', type: 'hipotesis' },
        { id: 1, name: 'Demostrar que a_k+1 sigue cumpliendo la relación', type: 'inductivo' }
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
            points--;  // Decrementar puntos si la respuesta es incorrecta
        }
    }
</script>

<body>
    <div class="container" in:fade={{ delay: 200, duration: 400 }}>
        <div class="sidebar">
            <div class="card">
                <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                    <img src="/logo.png" alt="Descripción de la imagen">   
                </div>
            </div>
            <div class="card">
                <a href="https://www.youtube.com/watch?v=8Ag507fO62w&list=PLmGNSxrYSXDJX96hcxq-4MhwLk6dQ3xyY&index=1&start=1280" target="_blank">
                    <button class="button">Ver video</button>
                </a>
                <p>Por si no te queda muy claro el tema de inducción, tenemos una clase preparada para ti para que puedas entender mas a fondo del tema</p>
            </div>
            <div class="card">
                <h4>Usa esta guia de acceso rapido en caso que quieras avanzar entre modulos para buscar informacion especifica</h4>
                <a href="/modulo1" class="button">Modulo 1. Introduccion</a>
                <p></p>
                <a href="/modulo2" class="button">Modulo 2. Homogeneidad</a>
                <p></p>
            </div>
        </div>  
        <div class="main-content">
            <div class="card">
                <h2>Modulo 3: Solucion grafica de recurrencias analiticas y comprobacion por metodo de induccion</h2>
                <h3>Teoria</h3>
                <p>Esta resolucion implica deducir una expresión cerrada que pueda describir la secuencia completa, permitiendo calcular cualquier término directamente sin necesidad de calcular todos los anteriores, al ser deducida se debe comprobar con el metodo de induccion para saber si en efecto cumple la propiedad para todo el universo de esta recurrencia con el valor inicial especifico.</p>
                <div class="video-container w-full flex justify-center">
                    <iframe
                        width="750"
                        height="415"
                        class="rounded-lg w-1/2"
                        src="https://www.youtube.com/embed/-zyZbd6n4_g"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        title="video 1"
                    ></iframe>
                </div> 
                
                <h4>Este video nos ilustra graficamente la idea de una resolucion analitica y su comprobacion por el metodo de la induccion completa</h4>
                <p></p>
                <h3>Consideremos la siguiente recurrencia:</h3>
                <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                    <img src="/ejercicio1.png" alt="Descripción de la imagen">   
                </div>
                <p>En base a lo aprendido tenemos los siguientes pasos para hallar y confirmar la solucion analitica</p>
                <h3>Paso 1: Deducción de la expresión cerrada</h3>
                <p>Para deducir la expresión cerrada, primero se debe resolver la recurrencia para los primeros términos y buscar un patrón que permita generalizar la fórmula.</p>
                <h3>Paso 2: Comprobación por inducción</h3>
                <p>Una vez deducida la expresión cerrada, se debe comprobar que cumple con la recurrencia original para todo n ≥ 0. Esto se hace mediante el método de inducción matemática.</p>
                <h3>Paso 1: Deducción de la expresión cerrada</h3>
                <p>Resuelve la recurrencia para los primeros términos y busca un patrón.</p>
                <div class="card">
                    <img src="/ejercicio1-1.png" alt="Descripción de la imagen"> 
                    <p>...</p>
                </div>
                <p>Patrón: a<sub>n</sub> = n + 1</p>
                <h3>Paso 2: Comprobación por inducción</h3>
                <p>Usa el método de inducción para demostrar que a<sub>n</sub> = n + 1 para todo n ≥ 0.</p>
                <div class="card">
                    <h3>1) Paso Base:</h3> 
                    <p> Para n = 0,</p>
                    <p> a<sub>0</sub> = 1 </p>
                    <p>n + 1 = 0 + 1 = 1.</p>
                    <h3>2) Hipótesis de Inducción:<h3> 
                    <p>Supongamos que a<sub>k</sub> = k + 1 para algún k ≥ 0.</p>
                    <h3>3) Paso Inductivo:</h3>
                    <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                        <img src="/ejercicio1-2.png" alt="Descripción de la imagen">   
                    </div>
                    <p>recordemos que  a<sub>k+1</sub> es en escencia la definicion inicial de nuestra recurrencia a<sub>n</sub>, por lo que:</p>
                    <h4>a<sub>k+1</sub> = 2a<sub>k</sub> - a<sub>k-1</sub> </h4>
                    <p>hacemos uso de nuestra hipotesis de induccion cambiando a<sub>k</sub> = k + 1</p> <p>lo que implica a<sub>k-1</sub> = k + 1 - 1 = k</p>
                    <h3>Sustituimos:</h3>
                    <p>= 2(k + 1) - k</p> 
                    <p>= Resolviendo </p>
                    <p>2k + 2 - k = k + 2 + 1 = k + 1 + 1.</p> 
                    <p>Por lo tanto:</p>
                    <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                        <img src="/ejercicio1-3.png" alt="Descripción de la imagen">   
                    </div>
                </div>
                <h3>Resultado:</h3>
                <p>La solución analítica de la recurrencia es a<sub>n</sub> = n + 1, y se ha comprobado por inducción que es válida para todo n ≥ 0.</p>
                <h3>¡Excelente trabajo!</h3>
                <p>Has aprendido a deducir la expresión cerrada de una recurrencia y a comprobarla por inducción. ¡Sigue practicando para mejorar tus habilidades!</p>
                <h2>Practiquemos!</h2>
                <p>Resuelve los siguientes ejercicios para poner en práctica lo aprendido.</p>
                <h3>Ejercicio 1</h3>
                <p>Considera la recurrencia</p>
                <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                    <img src="/ejercicio1-4.png" alt="Descripción de la imagen">   
                </div>
                <p>Encuentra la solución analítica de la recurrencia</p>
                <p>Selecciona la respuesta correcta:</p>
                <p>opcion 1) 4+1<sup>n</sup> </p>
                <p>opcion 2) n<sup>4</sup></p>
                <p>opcion 3) 44<sup>n</sup></p>
                <p>opcion 4) 4<sup>n</sup></p>
                <form on:submit|preventDefault={() => validateAnswer(1)}>
                    <input type="text" bind:value={userOptions[1]} placeholder="Ingresa tu opción">
                    <button type="submit" class="button">Validar</button>
                    {#if validationMessages[1]}
                        <p>Resultado: {validationMessages[1]}</p>
                    {/if}
                </form>
                <h3>Ejercicio 2</h3>
                <p>A continuacion veras 6 contenedores, 3 de ellos estan ocupados con una tarjeta, cada tarjeta pertenece a un paso inductivo, la idea es que selecciones una tarjeta, la arrastes con tu mouse y la sueltes en el contenedor que corresponda, al tener los 3 contenedores llenos valida si lo hiciste correctamente</p>
                <div class="card">
                    {#each initialItems as item (item.id)}
                        <div
                            class="dropzone"
                            on:dragover={allowDrop}
                            on:drop={(event) => drop(event, initialItems.indexOf(item))}
                            draggable="false">
                            {#if item}
                                <div
                                    class="item"
                                    draggable="true"
                                    on:dragstart={(event) => dragStart(event, item)}>
                                    {item.name}
                                </div>
                            {/if}
                        </div>
                    {/each}
                    <p>____________________________________________________________________________________</p>
                    <p>contenedor 1 -> arrasta hasta aca la tarjeta que consideres que contiene el Paso Inductivo</p>
                    <p>contenedor 2 -> arrasta hasta aca la tarjeta que consideres que contiene la Hipotesis de Induccion</p>
                    <p>contenedor 3 -> arrasta hasta aca la tarjeta que consideres que contiene el Paso Base</p>
                    {#each targetItems as item, index}
                        <div
                            class="dropzone"
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
                <h2>Verificacion de una recurrencia lineal sin valor inicial a<sub>0</sub> dado:</h2>
                <p>Si no se nos entregara el valor inicial, pero se entregara un valor correspondiente a la recurrencia, es decir, un v<sub>n</sub> debemos hallar el v<sub>0</sub>, esto se hace de la siguiente manera: </p>
                <h4>dada la siguiente recurrencia</h4>
                <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                    <img src="/ejercicio2.png" alt="Descripción de la imagen">   
                </div>
                <p>en el caso de que estuvieramos ante un valor inicial a<sub>0</sub> podriamos deducir por los ejercicios realizados anteriormente que:</p>
                <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                    <img src="/ejercicio2-1.png" alt="Descripción de la imagen">   
                </div>
                <p>sin embargo, al estar ante un valor a<sub>n</sub>, debemos encontrar el valor inicial para poder realacionar bien una ecuacion analitica de recurrencia </p>
                <p>la manera de hacerlo es proponer una constante que multiplique nuestra deduccion actual</p>
                <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                    <img src="/ejercicio2-2.png" alt="Descripción de la imagen">   
                </div>
                <p>usando la informacion que tenemos (a<sub>2</sub> = 3) igualamos para poder obtener el valor de c </p>
                <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                    <img src="/ejercicio2-3.png" alt="Descripción de la imagen">   
                </div>
                <p>teniendo el valor de c, obtenemos a<sub>0</sub></p>
                <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                    <img src="/ejercicio2-4-1.png" alt="Descripción de la imagen">   
                </div>
                <p>teniendo el valor de a<sub>0</sub> podemos comprobar iterativamente desde nuestra recurrencia original que esto correspondera a nuestra suposicion inicial</p>
                <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                    <img src="/ejercicio2-4-2.png" alt="Descripción de la imagen">   
                </div>
                <p>podemos tambien comprobar que nuestra formula deducida cumple con los parametros establecidos</p>
                <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                    <img src="/ejercicio2-5.png" alt="Descripción de la imagen">   
                </div>
                <h2>Ejercicio 1</h2>
                <p>Considera la recurrencia</p>
                <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                    <img src="/ejercicio2-6.png" alt="Descripción de la imagen">   
                </div>
                <p>Encuentra la solución analítica de la recurrencia</p>
                <p>Selecciona la respuesta correcta:</p>
                <p>opcion 1) a<sub>n</sub> = 5<sup>n</sup>+2 -----> con a<sub>0</sub> = 8 </p>
                <p>opcion 2) a<sub>n</sub> = 2<sup>n</sup>-2 -----> con a<sub>0</sub> = 2 </p>
                <p>opcion 3) a<sub>n</sub> = 2<sup>n</sup>+2 -----> con a<sub>0</sub> = 3 </p>
                <p>opcion 4) a<sub>n</sub> = 22<sup>n</sup>+1 -----> con a<sub>0</sub> = 5 </p>
                <form on:submit|preventDefault={() => validateAnswer(2)}>
                    <input type="text" bind:value={userOptions[2]} placeholder="Ingresa tu opción">
                    <button type="submit" class="button">Validar</button>
                    {#if validationMessages[2]}
                        <p>Resultado: {validationMessages[2]}</p>
                    {/if}
                </form>
                <p>Puntos Acumulados en el modulo hasta ahora: {points}</p>
                <p>Debe ser mayor a {puntominimo}, para que se habilite el siguiente modulo</p>
            </div>
        </div>   
    </div>
<!-- Botón para ir al módulo anterior -->
<a href="/modulo2" class="button-left">Módulo Anterior</a>

<!-- Botón para ir al módulo siguiente -->
{#if points >= puntominimo}
    <a href="/modulo4" class="button-right">Pagina Siguiente</a>
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
    
    .card p, .card label {
        color: #b0bec5; /* Texto más claro para mejor legibilidad */
    }
    
    .input-group {
        margin-bottom: 20px;
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
    
    #result {
        margin-top: 20px;
        padding: 10px;
        background-color: #f5f5f5; /* Fondo claro para resultados */
        color: #333;
        border-radius: 4px;
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
    .card-img {
        width: 100%;
        height: auto;
        display: block;
        margin: 0 auto; /* Centra la imagen horizontalmente dentro de la tarjeta */
    }
    
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
        padding: 10px;
        margin: 5px;
        background-color: #29b6f6;
        border: 1px solid #ccc;
        cursor: pointer;
        min-height: 50px;
        width: 45%;
    }
    .item {
        padding: 10px;
        background-color: #29b6f6;
        border: 3px solid #ccc;
        cursor: grab;
    }
</style>
