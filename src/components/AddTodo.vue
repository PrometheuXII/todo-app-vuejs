<template>
  <div class="form">
    <div class="form-control">
      <div>
        <label>Todo</label>
        <input type="text" v-model="textInput" placeholder="Add Todo" />
      </div>
      <div class="select-status">
        <label>Set Status</label>
        <select name="todoStatus" id="todoStatus" v-model="todoStatus" required>
          <option value="1">Pending</option>
          <option value="2">In Progress</option>
          <option value="3">Done</option>
        </select>
      </div>
    </div>
    <button
      @click="
        addTodoList(textInput, todoStatus);
        clearInput();
      "
      class="btn btn-block"
    >
      Save Todo
    </button>
    <hr />
  </div>
</template>
<script>
import { ref } from "@vue/reactivity";
import { addTodoList } from "../composables/todoList";

export default {
  name: "AddTodo",
  setup() {
    let textInput = ref("");
    /**
     * ---------Sets Default todoStatus to pending------------
     */
    let todoStatus = ref(1);
    let clearInput = () => {
      textInput.value = "";
    };
    return {
      /**
       * @returns textInput to todoList to add to DB
       */
      textInput,
      todoStatus,
      addTodoList,
      clearInput,
    };
  },
};
</script>
<style scoped>
.form {
  margin-bottom: 20px;
}
.form button {
  margin-bottom: 20px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form .select-status select {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
</style>
