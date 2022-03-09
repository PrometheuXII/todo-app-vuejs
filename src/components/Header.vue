<template>
  <header>
    <h1>{{ title }}</h1>
    <ButtonTask
      @toggle-add-todo="$emit('toggle-add-todo')"
      :text="toggleAddTodoView ? 'Close' : 'Add Todo'"
      :color="toggleAddTodoView ? 'red' : '#69e231'"
    />
  </header>
</template>
<script>
import ButtonTask from "./Button.vue";

export default {
  name: "HeaderView",
  setup() {},
  props: {
    title: {
      type: String,
      default: "To-do's Tracker",
    },
    /**
     * ------------------- prop used to toggle between button states ---------------
     */
    toggleAddTodoView: Boolean,
  },
  components: {
    ButtonTask,
  },
};
</script>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
