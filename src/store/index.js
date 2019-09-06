import Vuex from "vuex";
import vue from 'vue';

vue.use(Vuex);


const state = {
  userId:"",
  token:"",
  serverVersion:"",
  version: '',
  giveForm:{
    cmNum:0,
    phone:"",
    sendPeopleId:"",
    payPassword: ""
  }
}

const getters = {
  serverVersion: (state) => {
    return state.serverVersion
  }
}

const mutations = {
  changeUserId(state,userId){
    state.userId = userId
  },
  changeToken(state,token){
    state.token = token;
  },
  changeGiveForm(state,form){
    state.giveForm = form;
  },
  changeVersion(state, version) {
    state.version = version;
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations
})

export default store;
