<template>
  <form @submit.prevent="addTodo()">
    <input v-model="newTodo" type="text" placeholder="Create a new to-do..." />
  </form>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.length > 0) {
        this.$emit("on-new-todo", this.newTodo);
      }
      this.newTodo = "";
    },
  },
};
</script>

<style></style>
