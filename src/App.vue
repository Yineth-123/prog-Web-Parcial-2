<template>
  <div id="app">
    <HeaderBar />
    <main class="main-container">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import HeaderBar from './components/HeaderBar.vue'
</script>

<style>
/* pequeño ajuste global */
:root{
  --bg: #f5f7fb;
}
#app{
  min-height:100vh;
  background:var(--bg);
  font-family: 'Inter', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}
.main-container{
  max-width:1100px;
  margin: 24px auto;
  padding: 0 16px;
}
</style>
