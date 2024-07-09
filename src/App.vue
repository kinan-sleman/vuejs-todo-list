<template>
  <div class="container">
    <h1>Todo List</h1>
    <h1>Completed: {{ todoCompleted }}</h1>
    <h1>Pending: {{ todoPending }}</h1>
    <TodoList/>
    <TodoForm />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TodoList from "./components/TodoList.vue";
import TodoForm from "./components/TodoForm.vue";
export default {
  name: "App",
  components: {
    TodoList,
    TodoForm,
  },
  computed: {
    ...mapGetters({
      todoCompleted: "todoCompleted",
      todoPending: "todoPending",
    })
    // todoCompleted() {
    //   return this.$store.getters.todoCompleted;
    // },
    // todoPending() {
    //   return this.$store.getters.todoPending;
    // },
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  max-width: 500px;
  min-width: 500px;
  margin: auto;
  background-color: #09a3df;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #2c3e50;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
