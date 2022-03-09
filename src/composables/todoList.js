import axios from "axios";
import { ref } from "vue";
/**
 * ------------------------------------Todo Functions-----------------------
 */

const inputList = ref([]);
let todoList = inputList;

/**
 * ------------------------------------ Get Todo from Database -------------
 * @returns stores data to todoList for display
 */

let getTodo = async () => {
  let response = await axios.get(
    "http://localhost/todoapp/ojt-training-repo/api/read.php"
  );
  return (todoList.value = await response.data);
};

/**
 * -------------------------------Adds New Todo-----------------------
 * @param {*} input from AddTodo
 *
 */

let addTodoList = (input, status) => {
  console.log("Add func() was started.");
  let url = "http://localhost/todoapp/ojt-training-repo/api/create.php";
  let data = new FormData();
  data.append("todo_id", todoList.value.length + 1);
  data.append("todo_text", input);
  data.append("todo_status", status);
  axios.post(url, data).then((response) => {
    console.log(response);
  });
};

/**
 * ------------------------------- Removes Todo Entry -----------------------
 * @param {*} index from todoList for loop
 *
 */

let removeTodoList = async (index) => {
  let wait = await getTodo();
  console.log("Delete Func() was started.");
  if (confirm("Are you sure you want to DELETE entry?")) {
    let url = "http://localhost/todoapp/ojt-training-repo/api/delete.php";
    let data = new FormData();
    data.append("todo_id", wait[index].todo_id);
    axios.post(url, data).then((response) => console.log(response));
  }
};

/**
 *  ------------------------------------Updates Selected Todo using its index----------------------
 * @param {*} index from todoList for loop
 * @param {*} input from updateTextInput in Todos.vue
 * @param {*} status from updateStatus in Todos.vue
 */

let updateTodoList = async (index, input, status) => {
  let wait = await getTodo();
  console.log("Update Func() was started.");
  if (confirm("Are you sure you want to UPDATE entry?")) {
    let url = "http://localhost/todoapp/ojt-training-repo/api/update.php";
    let data = new FormData();
    data.append("todo_id", wait[index].todo_id);
    data.append("todo_text", input);
    data.append("todo_status", status);
    axios.post(url, data).then((response) => console.log(response));
  }
};

export { todoList, getTodo, addTodoList, removeTodoList, updateTodoList };
