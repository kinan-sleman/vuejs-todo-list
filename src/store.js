import { createStore } from "vuex";

export default createStore({
  state: {
    toDos: [
      {
        title: "Todo Item A",
        completed: false,
      },
      {
        title: "Todo Item B",
        completed: false,
      },
    ],
  },
  getters: {
    todoCompleted(state) {
      return state.toDos.filter((todo) => todo.completed === true).length;
    },
    todoPending(state) {
      return state.toDos.filter((todo) => todo.completed === false).length;
    },
  },
  mutations: {
    NEW_TODO(state, todoItem) {
      state.toDos.push({
        title: todoItem,
        completed: false,
      });
    },
    DELETE_TODO(state, todoItem) {
      let index = state.toDos.indexOf(todoItem);
      state.toDos.splice(index, 1);
    },
    COMPLETE_TODO(state, todoItem) {
      todoItem.completed = !todoItem.completed;
    },
  },
  actions: {
    AddNewItem({ commit }, todoItem) {
      commit("NEW_TODO", todoItem);
    },
    deleteTodo({ commit }, todoItem) {
      commit("DELETE_TODO", todoItem);
    },
    setCompleted({ commit }, todoItem) {
      commit("COMPLETE_TODO", todoItem);
    },
  },
});
