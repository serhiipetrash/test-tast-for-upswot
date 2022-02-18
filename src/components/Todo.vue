<template>
  <li>
    <button
      class="todo-description"
      :class="{ completed }"
      @click="$emit('on-toggle')"
      v-if="!isEditing"
    >
      <span>{{ description }}</span>
    </button>
    <form v-else @submit.prevent="finishEditing()">
      <input
        type="text"
        v-model="newTodoDescription"
        @blur="finishEditing()"
        ref="newTodo"
      />
    </form>
    <button class="todo-edit" @click="startEditing()">
      <span class="fa fa-edit"></span>
    </button>
    <button class="todo-delete" @click="$emit('on-delete')">
      <span class="fa fa-trash"></span>
    </button>
  </li>
</template>

<script>
export default {
  data() {
    return {
      isEditing: false,
      newTodoDescription: "",
    };
  },
  props: {
    description: String,
    completed: Boolean,
  },
  methods: {
    startEditing() {
      if (this.isEditing) {
        this.finishEditing();
      } else {
        this.newTodoDescription = this.description;
        this.isEditing = true;
        this.$nextTick(() => this.$refs.newTodo.focus());
      }
    },
    finishEditing() {
      this.isEditing = false;
      this.$emit("on-edit", this.newTodoDescription);
    },
  },
};
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>
