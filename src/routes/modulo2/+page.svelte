<script>
    import { fade } from 'svelte/transition';
    let userOptions = {}; // Almacena las opciones del usuario por ID de pregunta
    let validationMessages = {}; // Almacena mensajes de validación por ID de pregunta

    const correctAnswers = {
        1: '1',
        2: '2',
        3: '1',
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
                <img src="../homogeneidad.jpg" alt="Interpretacion Grafica" class="card-img">
                <p>de manera grafica, podriamos interpretar la homogeneidad como una fila de dominos, el equipo homogeneo cumple un patron facilmente predecible, mientras que el equipo no homogeneo, dependientes a crecimientos o decrecimientos adicionales, puede ser mas variable, a nivel grafico comparable a que un obstaculo se presente en el camino de los dominos, cambiando su trayectoria</p>
            </div>
            <div class="card">
                <h4>Usa esta guia de acceso rapido en caso que quieras avanzar entre modulos para buscar informacion especifica</h4>
                <a href="/modulo1" class="button">Modulo 1. Introducción</a>
                <p></p>
            </div>
        </div>  
        <div class="main-content">
            <div class="card">
                <h2>Modulo 2: Homogeneidad</h2>
                <h2>Diferencia entre Homogéneas y No Homogéneas </h2>
                <p>Imagina que tienes dos equipos jugando con estas reglas: </p>
                <h3>Equipo Homogéneo:</h3>
                <p>Este equipo decide que es más simple si solo multiplican por un número cada vez, sin sumar nada extra. Así, si empiezan con 2 y siempre multiplican por 3, tendrán 2, 6, 18, 54, etc.</p>
                <h3>Equipo No Homogéneo:</h3>
                <p>Este otro equipo piensa en sumar algo extra cada vez que multiplican. Entonces, si también empiezan con 2 y multiplican por 3, pero siempre suman 1, tendrán 2, 7, 22, 67, etc.</p>
                <p>Por ejemplo, 𝑎𝑛=5𝑎𝑛−1+3an​=5an−1​+3 incluye un crecimiento adicional constante en cada paso.</p>
                <h1>Practiquemos !</h1>
                <h2>Ejercicio 1: El detective secuencias</h2>
                <h3>instrucciones:</h3>
                <p>te damos los primeros terminos de una secuencia. Identifica si es Homogenea o no Homogenea</p>
                <h4>Secuencia A: 4, 12, 36, 108, 324</h4>
                <p>Opcion 1) Homogenea</p>
                <p>Opcion 2) No Homogenea</p>
                <form on:submit|preventDefault={() => validateAnswer(1)}>
                    <input type="text" bind:value={userOptions[1]} placeholder="Ingresa tu opción">
                    <button type="submit" class="button">Validar</button>
                    {#if validationMessages[1]}
                        <p>Resultado: {validationMessages[1]}</p>
                    {/if}
                </form>

                <h4>Secuencia B: 2, 7, 17, 35, 59</h4>
                <p>Opcion 1) Homogenea</p>
                <p>Opcion 2) No Homogenea</p>
                <form on:submit|preventDefault={() => validateAnswer(2)}>
                    <input type="text" bind:value={userOptions[2]} placeholder="Ingresa tu opción">
                    <button type="submit" class="button">Validar</button>
                    {#if validationMessages[2]}
                        <p>Resultado: {validationMessages[2]}</p>
                    {/if}
                </form>

                <h2>Ejemplo Interactivo de uso de secuencias no Homogeneas: </h2>
                <h3>Amortizacion de un Prestamo</h3>
                <p><b>Contexto:</b> Considera que has tomado un préstamo de $1000 con un interés simple que se calcula mensualmente al 10%, pero además, decides pagar una cantidad fija de $200 cada mes para reducir el saldo.</p>
                <b>Secuencia no Homogenea</b>
                <p>Primer Termino: a1 = 1000 (el saldo inicial del prestamo)</p>
                <p>Regla: an = an-1 * 1.1 - 200</p>
                <p>El prestamo crece un 10% cada mes y luego se reduce en 200$ debido al pago mensual</p>
                <h3>De manera que si calculamos interactivamente</h3>
                <p>Primer mes: A2 = 1000 * 1.1 - 200 = 900</p>
                <p>Segundo mes: A3 = 900 * 1.1 - 200 = 790</p>
                <h4>Actividad: Simulando cuantos meses tardaras en pagar completamente el prestamo y observa como el saldo decrece cada mes</h4>
                <p>Selecciona la opcion correcta del mes en el que se termina de pagar la deuda</p>
                <p>Opción 1) mes 9</p>    
                <p>Opción 2) mes 6</p> 
                <p>Opción 3) mes 7</p> 
                <p>Opción 4) mes 8</p> 
                <form on:submit|preventDefault={() => validateAnswer(3)}>
                    <input type="text" bind:value={userOptions[3]} placeholder="Ingresa tu opción">
                    <button type="submit" class="button">Validar</button>
                    {#if validationMessages[3]}
                        <p>Resultado: {validationMessages[3]}</p>
                    {/if}
                </form>
                <p>Puntos Acumulados en el modulo hasta ahora: {points}</p>
                <p>Debe ser mayor a {puntominimo}, para que se habilite el siguiente modulo</p>
            </div>
        </div>   
    </div>
<!-- Botón para ir al módulo anterior -->
<a href="/modulo1" class="button-left">Módulo Anterior</a>

<!-- Botón para ir al módulo siguiente -->
{#if points >= puntominimo}
    <a href="/modulo3" class="button-right">Pagina Siguiente</a>
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
    
</style>
