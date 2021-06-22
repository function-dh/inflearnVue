<template>
  <div id="app">
    <div id="header">
      <TodoHeader />
    </div>
    <div id="container">
      <TodoInput />
      <TodoList />
      <TodoClear />
    </div>
    <div id="footer">
      <p>footer 테스트</p>
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoClear from './components/TodoClear'

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoClear
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/common";

</style>
