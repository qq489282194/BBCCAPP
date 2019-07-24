import Vuex from "vuex";
import vue from 'vue';

vue.use(Vuex);


const state = {
  userId:"00002bdec93744fca2bdduue948867",
  token:"",
  giveForm:{
    cmNum:0,
    phone:"",
    sendPeopleId:"",
    payPassword: ""
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
  }
}

const store = new Vuex.Store({
  state,
  mutations
})

export default store;
