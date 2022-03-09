<template>
  <div class="task">
    <p>
      {{ todo.todo_text }}
    </p>
  </div>
</template>
<script>
export default {
  name: "TodoInstance",
  setup() {},
  props: {
    todo: Object,
  },
};
</script>
<style scoped>
.task {
  display: block;
  text-align: left;
  max-width: 70%;
  overflow-wrap: break-word;
  word-wrap: break-word;
  text-overflow: ellipsis;
}
</style>
