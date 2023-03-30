import { createStore } from 'vuex'
import {Task} from "@/entities/Task";

export default createStore({
  state: {
    tasks: []
  },
  getters: {
    getTasks: (state) => {
      return state.tasks;
    }
  },
  mutations: {

  },
  actions: {

  },
  modules: {
  }
})
