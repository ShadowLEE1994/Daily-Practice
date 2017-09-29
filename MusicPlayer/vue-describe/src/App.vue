<template>
  <div id="app">
    <m-header></m-header>
    <describe></describe>
    <case></case>
  </div>
</template>

<script>
import MHeader from './components/m-header'
import Describe from './components/describe'
import Case from './components/case'

export default {
  components: {
    MHeader,
    Describe,
    Case
  }
}
</script>

<style>
</style>
