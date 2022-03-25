<template>
  <div class="container my-5">
    <div class="row bg-warning text-center my-3">
      <headercomponent :branchname="branch">
        <!-- <p>this is for default slot</p> -->
        <!-- <template v-slot:top>
         <p>This is from wrapper</p>
        </template> -->
      </headercomponent>
    </div>
    <div class="row text-center my-3">
      <div class="col-4 border border-2">
        <sidecomponent/>
      </div>
      <div class="col-8">
        <bodycomponent/>
      </div>
    </div>

    <div class="row bg-warning text-center my-3">
      <footercomponent/>
    </div>

  </div>
</template>

<script>

import headercomponent from './components/headercomponent.vue'
import footercomponent from './components/footercomponent.vue'
import sidecomponent from './components/sidecomponent.vue'
import bodycomponent from './components/bodycomponent.vue'

export default {
  name: 'App',
  components: {
    headercomponent,
    footercomponent,
    sidecomponent,
    bodycomponent,
  },
  data(){
    return {
      branch:{id:1,name:"mansoura"}
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
