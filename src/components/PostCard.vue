<template>
  <article class="post-card">
    <header class="post-header">
      <strong>{{ post.author }}</strong>
      <small class="date">{{ post.date || '' }}</small>
    </header>
    <p class="post-text">{{ post.text }}</p>

    <footer class="post-actions">
      <button @click="$emit('delete', post.id)">Eliminar</button>
    </footer>
  </article>
</template>

<script setup>
defineProps({ post: { type: Object, required: true } })
</script>

<style scoped>
.post-card{
  padding:14px;
  border-radius:10px;
  background:#fff;
  border:1px solid #f0f0f3;
  box-shadow: 0 2px 8px rgba(10,12,20,0.02);
}
.post-header{ display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; }
.post-text{ margin-bottom:10px; color:#222; }
.post-actions button{
  padding:6px 10px; border-radius:8px; border:1px solid #eee; background:#fff; cursor:pointer;
}
.post-header strong {
  color: #f1efee; /* Cambia este color al que prefieras */
  font-weight: bold;
}
.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  background-color: #682dac; /* Cambia a tu color deseado */
  padding: 8px;
  border-radius: 8px;
}

</style>
