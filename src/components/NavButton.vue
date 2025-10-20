<template>
  <router-link :to="to" class="nav-button">
    <slot></slot> <!-- Aquí se mostrará el texto como Muro, Info, etc -->
  </router-link>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.nav-button {
  text-decoration: none;
  padding: 10px 10px;
  font-weight: 650; /* Peso moderado, más profesional */
  font-family: 'Poppins', sans-serif; /* Fuente estilizada */
  border-radius: 5px;
  transition: all 0.3s ease;
  cursor: pointer;
  display: inline-block;
  color: #ffffff; /* Color de texto original */
  background-color: #5e15be6e; /* Morado original */
}


.nav-button:hover {
  background-color: #6b1bbb;
  transform: scale(1.05);
}
</style>

