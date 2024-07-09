<template>
  <div class="form-container">
      <input type="text" v-model="newTodoItem" name="" id="" />
      <button @click="AddNewItem(newTodoItem)">Submit</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "TodoForm",
  data() {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    ...mapActions({
      AddNewItem: "AddNewItem",
    })
    // AddNewItem() {
    //   this.$store.dispatch("AddNewItem", this.newTodoItem);
    // },
  },
};
</script>

<style scoped>
  .form-container {
    width: 250px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  .form-container input {
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    transition: .2s;
  }
  .form-container input:focus,
  .form-container input:hover
   {
    border: 1px solid #32a2ec;
  }
</style>
