<template>
  <aside class="profile-card">
    <img class="avatar" src="/Girasol.jpeg" alt="avatar" />
    <h3 class="name">{{ name }}</h3>
    <p class="bio">{{ bio }}</p>
  </aside>
</template>

<script setup>
const name = 'Karen_09'
const bio = 'Estudiante - universitaria - 39023232- Me gusta viajar'

</script>

<style scoped>
.profile-card{
  padding:30px;
  border-radius:5px;
  background:#fff;
  box-shadow: 0 4px 12px rgba(12,15,30,0.03);
  text-align:center;
}
.avatar{ width:100%; height:160px; object-fit:cover; border-radius:8px; margin-bottom:12px; }
.name{ margin:6px 0 4px; font-size:1.05rem; }
.bio{ color:#666; font-size:0.9rem; }
</style>
