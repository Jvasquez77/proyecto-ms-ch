<script>
    import { onMount } from 'svelte';
  
    let showButton = false;
  
    onMount(() => {
      setTimeout(() => {
        showButton = true;
      }, 5000); // Asegura que este tiempo coincida con la duración de las animaciones
    });
  
    function navigateToModule() {
      window.location.href = '../';
    }
  </script>
  
  <style>
    :global(body) {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background-color: #192841;
      overflow: hidden;
    }
  
    .container {
      position: relative;
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: white;
    }
  
    .line {
      position: absolute;
      width: 100vw;
      height: 2px;
      background-color: #0077cc;
      animation: slide 5s linear forwards;
    }
  
    .line:nth-child(odd) {
      top: 0;
      left: 0;
      animation-name: slide-diagonal1;
    }
  
    .line:nth-child(even) {
      top: 0;
      right: 0;
      animation-name: slide-diagonal2;
    }
  
    .confetti {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: #ffcc00;
      animation: confetti-rise 1s ease-out forwards;
      animation-delay: 5s; 
    }
  
    @keyframes slide-diagonal1 {
      to { transform: translateX(100vw) translateY(100vh); }
    }
  
    @keyframes slide-diagonal2 {
      to { transform: translateX(-100vw) translateY(100vh); }
    }
  
    @keyframes confetti-rise {
      from { bottom: 0; }
      to { bottom: 100vh; opacity: 0; }
    }
  
    button {
      display: block;
      margin-top: 20px;
      padding: 10px 20px;
      font-size: 16px;
      color: white;
      background-color: #0077cc;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
      z-index: 1000; /* Asegúrate de que está visible */
    }
  
    button:hover {
      background-color: #005fa3;
    }
  </style>
  
  <div class="container">
    <h1>Felicidades!</h1>
    <p>Has completado el test final con éxito.</p>
    {#each Array(6) as _, i (i)}
      <div class="line" style="animation-delay: {i * 0.5}s;"></div>
    {/each}
    {#each Array(3) as _, i (i)}
      <div class="confetti" style="animation-delay: {5.5 + i * 0.1}s;"></div>
    {/each}
    {#if showButton}
      <button on:click={navigateToModule}>Iniciar El programa nuevamente</button>
    {/if}
  </div>
  