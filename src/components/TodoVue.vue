<template>
  <div class="todo-container">
    <div>
      <div :class="{completed : todo.completed}" @click="setCompleted(todo)">{{ todo.title }}</div>
      <button @click="deleteTodo(todo)">Delete</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "TodoVue",
  props: ["todo"],
  methods: {
    ...mapActions({
      deleteTodo: "deleteTodo",
      setCompleted: "setCompleted",
    })
    // deleteTodo() {
    //   this.$store.dispatch('deleteTodo', this.todo);
    // },
    // setCompleted () {
    //   this.$store.dispatch('setCompleted', this.todo);
    // }
  }
};
</script>

<style scoped>
 .todo-container {
  border: 1px solid #ccc;
  width: 250px;
  margin: 5px auto;
  padding: 5px;
  border-radius: 10px
 }
 .todo-container>div {
  display: flex;
  justify-content: space-between;
 }
 .todo-container>div>div {
  font-size: 1.4rem;
 }
 .todo-container>div>div:hover {
  cursor: pointer;
 }
 .todo-container>div button{
  all: unset;
  background-color: rgb(240, 98, 98);
  color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  opacity: .5;
  transition: .2s;
  padding: 2px 3px;
 }
 .todo-container>div button:hover{
  background-color: rgb(245, 73, 73);
  cursor: pointer;
  opacity: 1;
 }

 .completed {
  text-decoration: line-through;
 }
</style>
