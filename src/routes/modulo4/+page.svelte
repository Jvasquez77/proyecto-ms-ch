<script>
    import { fade } from 'svelte/transition';
    let userOptions = {}; // Almacena las opciones del usuario por ID de pregunta
    let validationMessages = {}; // Almacena mensajes de validación por ID de pregunta

    const correctAnswers = {
        1: '2',
        2: '3',
        3: '1',
        4: '1',
        5: '1',
        6: '2',
        7: '1',
    };

    // Función para validar respuestas
    function validateAnswer(questionNum) {
        const userResponse = userOptions[questionNum].trim();

        if (userResponse === '') {
            validationMessages[questionNum] = "No se ingresó ninguna opción";
        } else if (correctAnswers[questionNum] === userResponse) {
            validationMessages[questionNum] = "Respuesta correcta";
        } else {
            validationMessages[questionNum] = "Respuesta incorrecta";
        }
    }
</script>

<body>
    <div class="container" in:fade={{ delay: 200, duration: 400 }}>
        <div class="sidebar">
            <div class="card">
                <div class="card">
                    <img src="/logo.png" alt="Descripción de la imagen">   
                </div>
            </div>
            <div class="card">
                <h2>Curiosidades</h2>
                <p>Uno de los hitos históricos más notables que involucran el uso de recurrencias lineales es la creación y desarrollo de la teoría de la computación y los algoritmos, particularmente a través de la contribución de Leonardo de Pisa, conocido como Fibonacci, con su famosa secuencia de Fibonacci. Esta secuencia es un ejemplo clásico de una recurrencia lineal que ha tenido un impacto profundo en diversas áreas como las matemáticas, la ciencia, la ingeniería, y incluso el arte y la naturaleza.</p>
                <div class="card">
                    <img src="/Fibonacci.jpg" alt="Descripción de la imagen">   
                </div>
                <p>la imagen que estas viendo te presenta algunos objetos naturales que exhiben los patrones espirales determinados por esta secuencia.</p>
                <p>Si deseas saber mas del tema, presiona el boton bajo este mensaje, te llevara a un articulo informativo que trata de explicar de manera didactica el tema</p>
                <a href="/pbln" class="button"> Mundo Fibonacci</a>
            </div>
            <div class="card">
                <h4>Usa esta guia de acceso rapido en caso que quieras avanzar entre modulos para buscar informacion especifica</h4>
                <a href="/modulo1" class="button">Modulo 1. Introduccion</a>
                <p></p>
                <a href="/modulo2" class="button">Modulo 2. Homogeneidad</a>
                <p></p>
                <a href="/modulo3" class="button">Modulo 3. Solucion grafica e inducción</a>
                <p></p>
            </div>
        </div>  
        <div class="main-content">
            <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                <h2>Modulo 4: Resolucion Analitica de Recurrencias y Tecnica de Coeficientes Indeterminados</h2>
                <h3>Teoria</h3>
                <p><strong>La resolucion analitica de recurrencias </strong> implica encontrar una expresion cerrada que describa la secuencia completa, permitiendo calcular cualquier termino directamente sin necesidad de calcular todos los anteriores.</p>
                <div class="video-container w-full flex justify-center">
                    <iframe
                        width="750"
                        height="415"
                        class="rounded-lg w-1/2"
                        src="https://www.youtube.com/embed/N6zzUxOAGJ0"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        title="video 2"
                    ></iframe>
                </div> 
                
                <h4>Este video ayudara a manejar ciertas herramientas para poder desarrollar una solucion analitica orientada a las recurrencias lineales no homogeneas (de primer orden)</h4>

                <h3>Consideremos la siguiente recurrencia:</h3>
                <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                    <img src="/ejercicio3.png" alt="Descripción de la imagen">   
                </div>
                <h4> Paso 1. Identificar parte homogénea (que carece de sumas o restas)</h4>
                <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                    <img src="/ejercicio3-1.png" alt="Descripción de la imagen">   
                </div>
                <h4> Paso 2. Solucion de la parte Homogénea (explicacion teorica de porque a<sub>n</sub> = constante x valor<sup> n </sup>)</h4>
                <p> Por lo aprendido en los modulos anteriores, sabemos que la parte homogenea de una recurrencia lineal de primer orden tiene la forma mostrada en la imagen a continuación donde c es una constante, y a su vez sabemos la forma en la que se busca la solucion de la ecuacion, por lo que tenemos: </p>
                <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                    <img src="/ejercicio3-2.png" alt="Descripción de la imagen">   
                </div>
                <p>Si estas afirmaciones las sustituimos en la ecuacion homogenea observaremos que: </p>
                <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                    <img src="/ejercicio3-2-1.png" alt="Descripción de la imagen">   
                </div>
                <p>si dividimos por ambos lados r<sup>n-1</sup> encontraremos que r=c, por lo que la solucion general para la parte homogenea es: </p>
                <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                    <img src="/ejercicio3-3.png" alt="Descripción de la imagen">   
                </div>
                <h4>comprobamos que la parte homogenea de la ecuacion, se denota por la siguiente ecuacion: </h4>
                <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                    <img src="/ejercicio3-4.png" alt="Descripción de la imagen">   
                </div>

                <h3>Paso 3. Resolver la parte no Homogenea</h3>
                <p>Para ello deberemos usar una técnica eficaz para encontrar soluciones particulares a recurrencias lineales no homogéneas, esta es la técnica de coeficientes indeterminados.</p>
                <h2>Conceptos y Herramientas</h2>
                <p>Este concepto implica hallar la forma de la solución particular de la recurrencia no homogénea.</p>
                <p>si tenemos</p>
                <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                    <img src="/ejercicio3.png" alt="Descripción de la imagen">   
                </div>
                <p>el termino no homogéneo es 5. </p>
                <p><strong>1) Suponer la Solucion. </strong> </p>
                <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                    <img src="/tabla1.jpg" alt="Descripción de la imagen">   
                </div>
                <p><strong>De la tabla observada en el video sabemos que nuestra mejor opcion es suponer que la solucion particular tiene la siguiente forma: </strong> </p>
                <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                    <img src="/ejercicio3-6.png" alt="Descripción de la imagen">   
                </div>
                <p>la solucion que se propone es una constante, (b), como lo es el termino no homogeneo f(n), esta es la razon de la suposicion</p>
                <p><strong>2) Sustituir en la recurrencia original. </strong> Sustituir de manera que: </p>
                <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                    <img src="/ejercicio3-7.png" alt="Descripción de la imagen">   
                </div>
                <p>al sustituir en la recurrencia original, se obtiene: </p>
                <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                    <img src="/ejercicio3-8.png" alt="Descripción de la imagen">   
                </div>
                <h4>solucion general: </h4>
                <p>La solución general de a<sub>n</sub> de la recurrencia completa es la suma de la solución homogénea y la solución particular.</p>
                <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                    <img src="/ejercicio3-9.png" alt="Descripción de la imagen">   
                </div>
                <p>despejamos k para hallar su valor, usando la condicion inicial dada a<sub>0</sub>=2</p>
                <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                    <img src="/ejercicio3-10.png" alt="Descripción de la imagen">   
                </div>
                <p>Sustituyendo K en la solucion general: </p>
                <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                    <img src="/ejercicio3-11.png" alt="Descripción de la imagen">   
                </div>
                <p>Si comprobamos esto comparandolo con el metodo interactivo veremos que los resultados coinciden: </p>
                <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                    <img src="/ejercicio3-12.png" alt="Descripción de la imagen">   
                </div>
                <p>Para asegurarnos que esta condición se cumpla para todo n podriamos probar por inducción las condiciones dadas</p>
                <h4>Siguiendo los pasos establecidos de recurrencia: </h4>
                <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                    <img src="/ejercicio3-13.png" alt="Descripción de la imagen">   
                </div>
                <p>Se debe comprobar el paso inductivo, trabajaremos con a<sub>k+1</sub>, podemos hacer referencia a la forma de recurrencia original, que nos indica que siempre el siguiente k, sera el k anterior multiplicado por 3 y sumado 5</p>
                <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                    <img src="/ejercicio3-14.png" alt="Descripción de la imagen">   
                </div>
                <p>Ahora nos deja en funcion de a<sub>k</sub>, la reemplazaremos con nuestra hipotesis, quedando de la forma: </p>
                <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                    <img src="/ejercicio3-15.png" alt="Descripción de la imagen">   
                </div>
                <p>Luego de los calculos correspondientes obtenemos que: </p>
                <div class="card" in:fade={{ delay: 400, duration: 400 }}>
                    <img src="/ejercicio3-16.png" alt="Descripción de la imagen">   
                </div>
                <p>lo que comprueba el paso inductivo, dando por conclusion que la propiedad se cumplira para todo n>0</p>
            </div>
        </div>   
    </div>
<!-- Botón para ir al módulo anterior -->
<a href="/modulo3" class="button-left">Módulo Anterior</a>

<!-- Botón para ir al módulo siguiente -->
<a href="/modulo5" class="button-right">Siguiente Módulo</a>

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
