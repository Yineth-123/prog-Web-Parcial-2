<template>
  <header class="header-bar">
    <img src="/LogoCompleto.png" alt="Logo" class="logo">
    <SearchBar />
    <nav class="nav-buttons">
      <NavButton to="/">Muro</NavButton>
      <NavButton to="/info">Info</NavButton>
      <NavButton to="/photos">Photos</NavButton>
      <NavButton to="/boxes">Boxes</NavButton>
    </nav>
  </header>
</template>

<script setup>
import SearchBar from './SearchBar.vue'

import NavButton from './NavButton.vue'
</script>

<style scoped>
.header-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #4b1786; /* Puedes cambiarlo para que se parezca al original */
}

.logo {
  height: 50px;
  gap: 15px;
}

.nav-buttons {
  display: flex;
  gap: 15px;
}
</style>

