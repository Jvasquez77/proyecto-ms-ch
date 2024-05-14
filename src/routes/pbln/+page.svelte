<script>
  function goBack() {
    window.history.back();
  }
</script>

<style>
  .fibonacci-page {
  min-height: 100vh; /* Cambiado de height a min-height */
  display: flex;
  flex-direction: column; /* Alineación vertical de los contenedores */
  justify-content: flex-start; /* Cambiado de center a flex-start */
  align-items: center;
  background-color: #fafafa;
  font-family: 'Arial', sans-serif;
  padding: 10px; /* Espacio alrededor de los contenedores */
  overflow: auto; /* Asegurarse de que el desplazamiento está habilitado */
}

.fibonacci-container {
  width: 90%;
  max-width: 960px;
  margin-bottom: 20px; /* Añadido margen para separar contenedores */
  padding: 20px;
  background: linear-gradient(to right, #6db9ef, #7ce08a);
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  color: white;
  text-align: center;
  transition: transform 0.3s ease;
}

.fibonacci-container:hover {
  transform: scale(1.05);
}

.back-button {
  padding: 10px 20px;
  font-size: 1em;
  color: white;
  background-color: #0077cc;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s, transform 0.2s;
}

.back-button:hover {
  background-color: #005fa3;
  transform: translateY(-2px);
}

.back-button:active {
  transform: translateY(1px);
}

</style>

<div class="fibonacci-page">
  <div class="fibonacci-container">
    <h1>La Secuencia de Fibonacci</h1>
    <p>Descubre cómo la naturaleza calcula belleza y armonía.</p>
    <h2>Un poco de historia</h2>
    <h3><strong>Leonardo de Pisa (Fibonacci):</strong>Aunque las matemáticas de la secuencia ya eran conocidas por matemáticos indios mucho antes, la secuencia fue introducida en Europa por Leonardo de Pisa en su libro "Liber Abaci" publicado en 1202. Fibonacci no descubrió esta secuencia, pero fue uno de los primeros en introducir este concepto matemático en Europa, donde planteó un problema sobre la reproducción de conejos que llevaba a esta secuencia.</h3>
    <div class="fibonacci-container">
      <img src="/Leonardo.jpg" alt="Descripción de la imagen">   
    </div>
  </div>
  <div class="fibonacci-container">
    <h1>Aplicaciones y Observaciones</h1>
    <h2>Patrones en la Naturaleza: </h2>
    <h3> La secuencia y el número áureo aparecen en diversos patrones biológicos. Por ejemplo, la disposición de las hojas en un tallo, los frutos de una piña, el florecimiento de un alcachofa, y la disposición de una piña.</h3>
    <div class="fibonacci-container">
      <img src="/f1.jpg" alt="Descripción de la imagen">   
    </div>
  </div>
  <div class="fibonacci-container">
    <h1>Influencia Cultural</h1>
    <h2>Arte y Arquitectura: </h2>
    <h3> Muchos artistas y arquitectos, desde el Renacimiento hasta la actualidad, han utilizado las proporciones de la secuencia de Fibonacci y el número áureo para diseñar obras que se perciben como naturalmente bellas. El Partenón en Atenas y la Gran Pirámide de Giza se consideran ejemplos de la aplicación del número áureo.</h3>
    <div class="fibonacci-container">
      <img src="/arqit.jpg" alt="Descripción de la imagen">   
    </div>
  </div>
  <div class="fibonacci-container">
    <h1>Desarrollo Matematico</h1>
    <h2>Teoría de Números y Matemáticas Modernas: </h2>
    <h3>La secuencia de Fibonacci ha sido objeto de numerosos estudios en teoría de números y matemáticas computacionales. También se utiliza en algoritmos, como aquellos que se encuentran en las técnicas de búsqueda y ordenamiento en informática.</h3>
  </div>
  <div class="fibonacci-container">
    <h1>Desarrollo Matematico</h1>
    <h2>Teoría de Números y Matemáticas Modernas: </h2>
    <h3>La secuencia de Fibonacci ha sido objeto de numerosos estudios en teoría de números y matemáticas computacionales. También se utiliza en algoritmos, como aquellos que se encuentran en las técnicas de búsqueda y ordenamiento en informática.</h3>
    <h2>Computacion</h2>
    <h3>Computación: En ciencias de la computación, la secuencia se utiliza para desarrollar algoritmos eficientes para una variedad de problemas, incluyendo técnicas para la multiplicación rápida de matrices y la optimización de ciertos tipos de algoritmos recursivos.</h3>
  </div>
  <div class="fibonacci-container">
    <h1>Secuencia de Fibonacci</h1>
    <h2>La secuencia de Fibonacci es definida por la recurrencia lineal: </h2>
    <div class="fibonacci-container">
      <img src="/formula2.png" alt="Descripción de la imagen">   
    </div>
    <h3>Con las condiciones iniciales: .</h3>
    <div class="fibonacci-container">
      <img src="/formula2-1.png" alt="Descripción de la imagen">   
      <h3>Cada término de la secuencia es la suma de los dos términos anteriores. Esta simple regla produce una secuencia de números que aparece sorprendentemente en numerosos contextos dentro y fuera de las matemáticas.</h3>
    </div>
    <h3>Incluimos un resumen oficial de BBC mundo muy interesante que nos hace un recorrido historico</h3>
    <div class="fibonacci-container">
      <iframe
        width="750"
        height="415"
        class="rounded-lg w-1/2"
        src="https://www.youtube.com/embed/B6ztvqvZTsk"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        title="video 2"
      ></iframe>  
    </div>
    <p>Esperamos que haya sido de tu agrado este bloque informativo, ahora puedes volver a la clase para seguir aprendiendo</p>
  </div>
  <button class="back-button" on:click={goBack}>Regresa a la clase</button>
</div>
