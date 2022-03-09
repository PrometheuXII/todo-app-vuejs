<template>
  <div v-for="(todo, index) in todoList" :key="index">
    <div class="todos">
      <TodoInstance :todo="todo" />
      <span>
        <button
          :style="
            showUpdateDiv && todoCount == index
              ? { background: 'grey' }
              : { background: '#f0d71d' }
          "
          @click="toggleUpdateDiv(index)"
          class="edit"
        >
          Edit
        </button>
        <button @click="removeTodoList(index)" class="delete">Delete</button>
      </span>
    </div>
    <div class="todo-status">
      <div v-if="todo.todo_status == 2" class="in-progress">
        <span>
          <i class="fa-solid fa-circle"> In Progress</i>
        </span>
      </div>
      <div v-else-if="todo.todo_status == 3" class="done">
        <span>
          <i class="fa-solid fa-circle"> Done</i>
        </span>
      </div>
      <div v-else class="pending">
        <span>
          <i class="fa-solid fa-circle"> Pending</i>
        </span>
      </div>
    </div>
    <div v-if="showUpdateDiv && todoCount == index" class="div-update">
      <input type="text" v-model="updateTextInput" placeholder="Update Todo" />
      <select
        name="updateStatus"
        id="updateStatus"
        v-model="updateStatus"
        required
      >
        <option value="" disabled selected>Select Status</option>
        <option value="1">Pending</option>
        <option value="2">In Progress</option>
        <option value="3">Done</option>
      </select>
      <button
        @click="
          updateTodoList(index, updateTextInput, updateStatus);
          clearInput();
          clearSelect();
          toggleUpdateDiv(index);
        "
        class="btn btn-block"
      >
        Update
      </button>
    </div>
  </div>
</template>
<script>
import TodoInstance from "./Todo.vue";
import {
  todoList,
  getTodo,
  removeTodoList,
  updateTodoList,
} from "../composables/todoList";
import { ref } from "@vue/reactivity";
import { watchEffect } from "@vue/runtime-core";

export default {
  name: "TodosView",
  setup() {
    let todoCount = ref(null);
    let updateTextInput = ref("");
    let showUpdateDiv = ref(false);
    let updateStatus = ref("");

    watchEffect(() => {
      todoList.value;

      getTodo();
    });
    let clearInput = () => {
      updateTextInput.value = "";
    };
    let clearSelect = () => {
      updateStatus.value = "";
    };

    return {
      todoCount,
      showUpdateDiv,
      updateTextInput,
      todoList,
      updateTodoList,
      getTodo,
      removeTodoList,
      clearInput,
      updateStatus,
      clearSelect,
    };
  },
  props: {
    tasks: Array,
  },
  components: {
    TodoInstance,
  },
  methods: {
    /**
     * ----------------------------Method to display/toggle update----------------
     */
    toggleUpdateDiv(index) {
      this.todoCount = index;
      this.showUpdateDiv = !this.showUpdateDiv;
    },
  },
};
</script>
<style scoped>
.todos {
  background: #f4f4f4;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.todo-status {
  background: #e2e2e2;
  margin-bottom: 10px;
  border-bottom-right-radius: 20px;
  padding: 0 5px;
  text-align: left;
}
.div-update input {
  width: 70%;
  height: 40px;
  padding: 3px 7px;
  font-size: 17px;
}
.div-update select {
  width: 25%;
  height: 40px;
  margin-left: 5px;
  padding: 3px 7px;
  font-size: 11px;
}
.div-update button {
  background: #2a8ed1;
}
.todos button {
  color: #fff;
  border: none;
  margin: 2px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
  padding: 5px;
}
.todos button.delete {
  background: red;
}
.todo-status .fa-solid {
  color: grey;
}
.todo-status .in-progress .fa-solid {
  color: orange;
}
.todo-status .done .fa-solid {
  color: green;
}
</style>
