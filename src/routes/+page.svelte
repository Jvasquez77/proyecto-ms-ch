<script>
    import { onMount } from 'svelte';
  
    function navigateToModule() {
      // Redirige al usuario al primer módulo
      window.location.href = '/modulo1';
    }
  
    onMount(() => {
      const line = document.querySelector('.sliding-line');
      line.style.transition = 'transform 2s ease-in-out';
      line.style.transform = 'translateX(100vw) translateY(100vh)';
    });
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
  
    .logo {
      max-width: 200px;
    }
  
    .sliding-line {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #0077cc;
      transform: translateX(-100vw);
    }
  
    button {
      margin-top: 20px;
      padding: 10px 20px;
      font-size: 16px;
      color: white;
      background-color: #0077cc;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #005fa3;
    }
  </style>
  
  <div class="container">
    <img class="logo" src="logo.png" alt="Linear Leap Logo">
    <h1>Bienvenido a Linear Leap</h1>
    <p>Salta al futuro de las matematicas lineales profundads</p>
    <button on:click={navigateToModule}>Comenzar</button>
    <div class="sliding-line"></div>
  </div>
  