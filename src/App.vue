<template>
  <div id="app">
    <header id="header">
      <TodoHeader />
    </header>
    <div id="container">
      <TodoInput />
      <TodoList />
      <TodoClear />
    </div>

    <!-- modal -->
    <Modal />
  </div>
</template>

<script>
import TodoHeader from './components/todo/TodoHeader'
import TodoInput from './components/todo/TodoInput'
import TodoList from './components/todo/TodoList'
import TodoClear from './components/todo/TodoClear'
import Modal from './components/common/Modal'

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoClear,
    Modal
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/common";

  body{
    background: $BACKGROUND;
  }
  .inner{
    max-width: 768px;
    margin: 0 auto;
    padding: 0 16px;
  }
</style>
