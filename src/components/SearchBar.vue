<template>
  <div>
    <input class="form-control" v-model="userInput" @keypress.enter="getVideos" type="text">
    <p>{{ $store.state.userInput }}</p>
    <!-- <button @click="testActions">testActions</button> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SearchBar',
  data() {
    return {
      userInput: ''
    }
  },
  methods: {
    ...mapActions(['getVideos']),    // ... == spread
    onInput() {
      // axios요청을 통해 $store.state.videos를 변경시키자
      
      // App.vue에 $emit을 통해 userInput 전달하는 함수
      this.$emit('onInput', this.userInput)

      //Vuex store에 data를 변경
      //mutations함수 호출
      this.$store.commit('setUserInput', this.userInput)
      console.log('vuex store출력 ' + this.$store.state.userInput)
    }
  }

}
</script>

<style>

</style>
