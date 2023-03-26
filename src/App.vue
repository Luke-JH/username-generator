<template>

  <header>
    <nav class="hero is-light">
        <img class="container image is-128x128" src="src\assets\logo.png">
    </nav>

  </header>

  <main>
    <section class="section">
      <div class="title">Welcome to the Username Generator!</div>
      <div class="field">
        <div class="subtitle">Please input your username</div>
        <div class="control">
          <input class="input  is-rounded column is-one-third" type="text">
        </div>
      </div>
      <button class="level-right button is-rounded is-primary" @click="this.myfunc()">Generate Alternatives</button>
    </section>
  </main>

  <section class="section is-large"></section>
  <footer class="footer">
    <div class="content has-text-centered">
      <p><strong>copyright © 2023</strong></p>
      <p>Thank you for using the username generator :)</p>
    </div>
  </footer>
</template>

<script>
</script>
