<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <so-top></so-top>
    <router-view/>
    <account></account>
  </div>
</template>

<script>
  import soTop from '@/components/top/index'
  import account from '@/components/account/index'

  export default {
    components: {soTop, account},
    name: 'App'
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
    height: 100%;
    position: relative;
  }

  ul, li {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

</style>
