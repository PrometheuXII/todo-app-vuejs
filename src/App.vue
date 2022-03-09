<template>
  <div class="container">
    <HeaderView
      @toggle-add-todo="toggleAddTodo()"
      title="To-do's"
      :toggleAddTodoView="toggleAddTodoView"
    />
    <div v-if="toggleAddTodoView">
      <AddTodo />
    </div>
    <TodosView />
  </div>
</template>

<script>
import HeaderView from "../src/components/Header.vue";
import TodosView from "../src/components/Todos.vue";
import AddTodo from "../src/components/AddTodo.vue";
import { ref } from "@vue/reactivity";

export default {
  name: "App",
  components: {
    HeaderView,
    AddTodo,
    TodosView,
  },
  setup() {
    /**
     *  ---------------------- Toggles View ------------------------
     */
    let toggleAddTodoView = ref(false);
    return {
      toggleAddTodoView,
    };
  },
  methods: {
    toggleAddTodo() {
      this.toggleAddTodoView = !this.toggleAddTodoView;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
#app {
  text-align: center;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
.container {
  background: #fff;
  max-width: 500px;
  margin: 100px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid rgb(0, 0, 0);
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
