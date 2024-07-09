<template>
  <div>
    <!-- يمكننا هنا بدلاً من كتابة toDos من كتابة $store.state.toDos من دون كتابة this  -->
    <TodoVue v-for="(todo, index) in toDos" :key="index" :todo="todo"  />
  </div>
</template>

<script>
import { mapState } from "vuex";
import TodoVue from "./TodoVue.vue";
export default {
  name: "TodoList",
  components: { TodoVue },
  computed: {
    ...mapState({
      toDos: "toDos"
    })
    // toDos() {
    //   return this.$store.state.toDos;
    // },
  },
};
</script>

<style></style>
