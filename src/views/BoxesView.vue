<template>
  <section class="boxes-container">
    <div 
      v-for="(img, index) in images" 
      :key="index" 
      class="box-item"
    >
      <img :src="img" alt="Imagen del box">
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const images = ref([])

// Generar imágenes aleatorias al cargar la vista
onMounted(() => {
  const numberOfImages = 8 // Puedes cambiar cuántas quieres mostrar
  images.value = Array.from({ length: numberOfImages }, () => {
    // picsum.photos genera una imagen aleatoria con cada llamada
    return `https://picsum.photos/400/300?random=${Math.floor(Math.random() * 1000)}`
  })
})
</script>

<style scoped>
.boxes-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  padding: 20px;
}

.box-item img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  transition: transform 0.3s ease;
}

.box-item img:hover {
  transform: scale(1.05);
}
</style>
