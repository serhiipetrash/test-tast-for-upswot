<template>
  <div>
    <div class="todo-create">
      <CreateTodo @on-new-todo="addTodo($event)" />
    </div>
    <div>
      <ul class="todo-list">
        <Todo
          v-for="(todo, index) in todos"
          :key="index"
          :description="todo.description"
          :completed="todo.completed"
          @on-toggle="toggleTodo(todo)"
          @on-delete="deleteTodo(todo)"
          @on-edit="editTodo(todo, $event)"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import Todo from "./Todo.vue";
import CreateTodo from "./CreateTodo.vue";

export default {
  data() {
    return {
      todos: [
        { description: "Скласти резюме", completed: false },
        { description: "Створити портфоліо", completed: false },
        { description: "Пройти співбесіду", completed: false },
      ],
    };
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push({ description: newTodo, completed: false });
    },
    toggleTodo(todo) {
      todo.completed = !todo.completed;
    },
    deleteTodo(deletedTodo) {
      this.todos = this.todos.filter((todo) => todo !== deletedTodo);
    },
    editTodo(todo, newTodoDescription) {
      todo.description = newTodoDescription;
    },
  },
  components: { Todo, CreateTodo },
};
</script>

<style>
ul.todo-list {
  list-style-type: none;
  padding-inline-start: 0;
  padding: 0 1rem;
}
.todo-list li {
  border-bottom: 1px solid #333333;
  padding: 1rem;
}
.todo-list button {
  background: inherit;
  border: none;
}
.todo-list form {
  display: block;
  width: 92%;
  float: left;
  margin-bottom: 0.5rem;
}
.todo-list form input {
  width: 100%;
  color: #333333;
  background: transparent;
}

.todo-description {
  width: 92%;
  color: #333333;
}
.todo-create {
  padding: 1rem;
}
.todo-create input {
  width: 100%;
  padding: 1rem;
  /* background: transparent; */
}
.todo-edit span:hover {
  color: green;
  cursor: pointer;
}
.todo-delete span:hover {
  color: red;
  cursor: pointer;
}
</style>
