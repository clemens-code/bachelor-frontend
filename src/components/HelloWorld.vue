<template>
  <div class="hello">
    <h1>Joke App</h1>
    <button @click="showJoke()"> Show Joke</button>
    <div v-for="joke in jokes" :key="joke.id">
      <p>{{joke.information}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      jokes: ''
    }
  },
  methods: {
    async showJoke(){
      let config={
        headers: {
          'Accept': 'application/json'
        }
      }
        this.$http.get("http://localhost:8090/infos", config).then(function (response) {
        this.jokes = response.data
      }.bind(this))
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
