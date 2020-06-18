import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // data 저장소 ~= data
    userInput: '',
    videos: [],
    selectedVideo: null
  },
  getters: {
    // data에 대한 getter(조회) ~= computed
    videos(state){
      return state.videos
    }
  },
  mutations: {
    // data를 변경 ~= methods(동기적)
    // mutations 함수를 호출하는 방법 = $store.commit(함수명)
    // 첫번째 인자로 state가 들어온다
    setUserInput(state, data){
      console.log('setUserInput 함수입니다 : ', state);
      state.userInput = data
    },
    setVideos(state, data){
      // state.userInput 가지고 axios 요청 보내기
      // state.videos 데이터 변경시킨다
      state.videos = data
    },
    setSelectedVideo(){

    }
  },
  actions: {
    //data를 변경(mutations) + 비동기적 ~= methods  ex)axios
    getVideos(context, event) {
      context.commit('setUserInput', event.target.value)
      // 1. 입력된 검색어를 가지고,
      const baseURL = 'https://www.googleapis.com/youtube/v3/search'
      const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY

      // 2. Youtube API에 요청을 보내어
      axios.get(baseURL, {
        params: {
          // key, part, q
          key: API_KEY,
          part: 'snippet',
          type: 'video',
          q: context.state.userInput,
          maxResults: 10
        }
      })
        .then(response => {
          console.log(response.data.items)
          context.commit('setVideos', response.data.items)
        })
      // 3. 검색어로 검색한 결과를 가져옴
      console.log('검색어 입력 되었음')
    },
  },
  modules: {
  }
})
