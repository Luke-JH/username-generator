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
          <input class="input  is-rounded column is-one-third" type="text" v-model="this.name">
        </div>
      </div>
      <button class="level-right button is-rounded is-primary" @click="this.nameGen(this.name, this.additions)">
        Generate Alternatives
      </button>
      <div class="tile is-vertical is-light">
        <li v-for="item in this.newNames">{{ item }}</li>
      </div>
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
export default {
    data(){
      return {
        name: '',
        additions: ['.','-','_'],
        newNames: []
      }
    },
    methods: {
      nameGen(name, additions){
        this.newNames = []
        additions.forEach((item) => {
          let newName = name.concat(item)
          this.newNames = [...this.newNames, newName]
        })
        console.log(this.newNames)
      }
    }
}
</script>
