<template>
  <section class="photos-page">
    <h2>Photos</h2>
    <div class="grid-photos">
      <img v-for="(img, i) in images" :key="i" :src="img" alt="foto" />
    </div>
  </section>
</template>

<script setup>
const images = [
  '/Girasol.jpeg',
  '/Helecho.webp',
  '/Voleibol.jpeg',
  '/Girasol.jpeg',
  '/Helecho.webp',
  '/Voleibol.jpeg'
]
</script>

<style scoped>
.grid-photos{ display:grid; grid-template-columns: repeat(3,1fr); gap:10px; margin-top:12px; }
.grid-photos img{ width:100%; height:140px; object-fit:cover; border-radius:8px; }
@media (max-width:720px){ .grid-photos{ grid-template-columns:repeat(2,1fr); } }
</style>
