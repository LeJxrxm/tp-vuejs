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
      addTask(state, task: Task) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        state.tasks.push(task);
      }
  },
  actions: {

  },
  modules: {
  }
})
