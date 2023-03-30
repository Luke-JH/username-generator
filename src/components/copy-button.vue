<template>

    <section class="section">
        <div class="columns">
          <div class="column is-one-third">
            <input class="input is-rounded"
                v-on:focus="$event.target.select()" 
                ref="clone" 
                readonly 
                :value="text"/>
          </div>
          <div class="column">
            <button class="button is-rounded is-primary" @click="copy">Copy</button>
          </div>
        </div>
    </section>

</template>
  
  <script>

  export default {
    data() {
      return {
        text: 'This will get copied!'
      }
    },
    methods: {
      copy() {
        this.$refs.clone.focus();
        document.execCommand('copy');
      }
    }
  }
  </script>