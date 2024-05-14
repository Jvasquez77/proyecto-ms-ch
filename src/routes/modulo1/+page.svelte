<script>
    import { fade } from 'svelte/transition';
    let nmenos1 = '';
    let multiplicador = '';
    let sumador = '';
    let processedData = '';
    let nextDataResult= '';

    function processData() {  
        
        processedData = parseInt(nmenos1) * parseInt(multiplicador) + parseInt(sumador);
    }
    function nextData() {
        if (processedData !== undefined && multiplicador !== undefined && sumador !== undefined) {
            nextDataResult =  parseInt(multiplicador) *  parseInt(processedData) +  parseInt(sumador);
        }
    }

    let userOptions = {}; // Almacena las opciones del usuario por ID de pregunta
    let validationMessages = {}; // Almacena mensajes de validación por ID de pregunta

    const correctAnswers = {
        1: '2',
        2: '3',
        3: '1',
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
    const puntominimo = 3;   
</script>

<body>
    <div class="container" in:fade={{ delay: 400, duration: 400 }}>
        <div class="sidebar">
            <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                <img src="/logo.png" alt="Descripción de la imagen">   
            </div>
            <div class="card">
                <img src="/formula1.png" alt="Descripción de la imagen">
                <p>Parámetros: 𝑐 y 𝑑 son constantes, donde 𝑐 afecta la tasa de cambio entre términos y 𝑑 es un término constante que se añade.</p>
            </div>
            <div class="card">
                
            </div>
        </div>  
        <div class="main-content">
            <div class="card">
                <h2>Modulo 1: Fundamentos</h2>
                <h2>Que son las secuencias ?</h2>
                <p>Piensa en una secuencia como una fila de dominós colocados uno tras otro. Cada ficha representa un número, y cada número sigue al anterior según una regla específica.</p>
                <h2>Recurrencias Lineales</h2>
                <p>Esta regla puede hacer que el valor siguiente, incremente, disminuya o se mantenga igual, estos cambios dependeran de operaciones matematicas que se le realicen a ese numero anterior, como sumas o multiplicaciones de algun elemento</p>
                <h2>Probemos Una regresión lineal sencilla</h2>
                <div class="card">
                    <img src="/formula1.png" alt="Descripción de la imagen">
                </div>
                <form on:submit|preventDefault={processData}>
                    <p>Ingresa los datos en los siguientes recuadros: </p>
                    <input type="int" bind:value={multiplicador} placeholder=" ingresa C aqui"><span>  x </span>
                    <input type="int" bind:value={nmenos1} placeholder="ingresa An-1 aqui:"><span>  + </span>
                    <input type="int" bind:value={sumador} placeholder="ingresa d aqui">
                    <button type="submit" class="button">Procesar</button>
                </form>
                <!-- Mostrar los datos procesados -->
                {#if processedData}
                    <h3>Resultado: a<sub>n</sub> =  {parseInt(multiplicador)} * {parseInt(nmenos1)} + {parseInt(sumador)} = {processedData}</h3>
                {/if}
                <p></p>
                <button on:click={nextData} class="button">Siguiente</button>
                {#if nextData}
                    <h3>Recurrencia Siguiente a<sub>n+1</sub> = {parseInt(multiplicador)} *  {parseInt(processedData)} + {parseInt(sumador)} = {nextDataResult}</h3>
                {/if}
    
                <h2>Practiquemos!</h2>
                <h2>Ejercicio 1: La carrera de las secuencias!</h2>
                <p>Instrucciones: Te damos el primer término de la secuencia y una regla de recurrencia, tu tarea es calcular los siguientes cuatro términos.</p>
                <h3>Secuencia A.</h3>
                <p>Primer término: 2</p>
                <p>Regla: Multiplica el término anterior por 2</p>
                <p>Opción 1) 4,8,15,31</p>    
                <p>Opción 2) 4,8,16,32</p> 
                <p>Opción 3) 2,4,8,16</p> 
                <p>Opción 4) 2,5,19,31</p>
                <form on:submit|preventDefault={() => validateAnswer(1)}>
                    <input type="text" bind:value={userOptions[1]} placeholder="Ingresa tu opción">
                    <button type="submit" class="button">Validar</button>
                    {#if validationMessages[1]}
                        <p>Resultado: {validationMessages[1]}</p>
                    {/if}
                </form>
                
                <h3>Secuencia B.</h3>
                <p>Primer término: 3</p>
                <p>Regla: Multiplica el término anterior por 3 y suma 1</p>
                <p>Opción 1) 10,40,45,222</p>    
                <p>Opción 2) 3,10,31,94</p> 
                <p>Opción 3) 10,31,94,283</p> 
                <p>Opción 4) 10,30,93,280</p> 
                <form on:submit|preventDefault={() => validateAnswer(2)}>
                    <input type="text" bind:value={userOptions[2]} placeholder="Ingresa tu opción1">
                    <button type="submit" class="button">Validar</button>
                    {#if validationMessages[2]}
                        <p>Resultado: {validationMessages[2]}</p>
                    {/if}
                </form>
                <h2>Ejercicio 2: Quien llega Primero ?.</h2>
                <h3>Instrucciones: Dadas las siguientes secuencias, calcula cual llega primero a un termino mayor que 100</h3>
                <p>Opción 1) Secuencia C</p>    
                <p> -Primer termino: 5</p> 
                <p> -Regla: Multiplica el termino anterior por 2 y suma 10</p> 
                <p>Opción 2) Secuencia D</p> 
                <p> -Primer termino: 10</p> 
                <p> -Regla: Multiplica el termino anterior por 2</p> 
                <form on:submit|preventDefault={() => validateAnswer(3)}>
                    <input type="text" bind:value={userOptions[3]} placeholder="Ingresa tu opción">
                    <button type="submit" class="button">Validar</button>
                    {#if validationMessages[3]}
                        <p>Resultado: {validationMessages[3]}</p>
                    {/if}
                </form>
    
                <h2>Ejemplo Interactivo de Uso de Secuencias: Crecimiento Poblacional.</h2>
                <h3>Contexto:</h3>
                <p>Imagina que estás estudiando una colonia de bacterias que se duplica cada hora. Si comienzas con una sola bacteria, ¿Cómo crecerá la población a lo largo del tiempo bajo condiciones ideales (sin limitaciones de espacio o recursos)?</p>
                <h4>Secuencia</h4>    
                <p> -Primer termino: A1 = 1</p> 
                <p> -Regla de recurrencia: An = 2 * An-1</p> 
                <h4>Calculo Interactivo</h4>
                <p>en 1 hora, tendras 2^1 =2 bacterias</p> 
                <p>en 2 horas, tendras 2^2 =4 bacterias</p>
                <p>en 3 horas, tendras 2^3 =8 bacterias</p>
                <h4>Calculando el crecimiento para 24 horas tendrias un total de bacterias:</h4> 
                <p>Opción 1) 16777216</p>    
                <p>Opción 2) 8388608</p> 
                <p>Opción 3) 20971522</p> 
                <p>Opción 4) 100000000</p> 
                <form on:submit|preventDefault={() => validateAnswer(4)}>
                    <input type="text" bind:value={userOptions[4]} placeholder="Ingresa tu opción">
                    <button type="submit" class="button">Validar</button>
                    {#if validationMessages[4]}
                        <p>Resultado: {validationMessages[4]}</p>
                    {/if}
                </form>
                <p>Puntos Acumulados en el modulo hasta ahora: {points}</p>
                <p>Debe ser mayor a {puntominimo}, para que se habilite el siguiente modulo</p>
            </div>
        </div>
        {#if points >= puntominimo}
        <a href="/modulo2" class="button-right">Pagina Siguiente</a>
        {/if}
    </div>
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
