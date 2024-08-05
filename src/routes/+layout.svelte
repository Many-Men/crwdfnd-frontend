<header class="header">
  <div class="header__container">
    <h1>logoo</h1>
  </div>
</header>
<slot />

<style>
  @import url('https://fonts.googleapis.com/css2?family=Kalnia+Glaze:wght@100..700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

  :global(*){
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }

  .header {
    width: 100%;
    margin-bottom: 20px;
    background-color: #f2f2f2;
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .header__container {
    max-width: 800px;
    width: 100%;
    height: 80px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>