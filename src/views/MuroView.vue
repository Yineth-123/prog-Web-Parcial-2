<template>
  <section class="muro-container">
    <aside class="left-column">
      <ProfileCard />
    </aside>

    <main class="right-column">
      <div class="create-post">
        <input v-model="newText" placeholder="¿Qué estás pensando?" />
        <button @click="addPost">Publicar</button>
      </div>

      <div class="posts-list">
        <PostCard
          v-for="p in filteredPosts"
          :key="p.id"
          :post="p"
          @delete="removePost"
        />
      </div>
    </main>
  </section>
</template>


<script setup>
import { ref, onMounted, computed } from 'vue'
import ProfileCard from '../components/ProfileCard.vue'
import PostCard from '../components/PostCard.vue'
import { useSearchStore } from '../stores/useSearchStore'

const posts = ref([])
const newText = ref('')
const searchStore = useSearchStore()

onMounted(() => {
  posts.value = [
    { id: 1, author: 'Karen', text: '¡Hola! 💡 “No tengas miedo de empezar de nuevo, porque quizá esta vez construyas algo mejor.”.', date: 'Hoy' },
    { id: 2, author: 'Maria', text: 'hermosa puesta de sol.🌞 “Siempre hay un nuevo amanecer para quienes no se rinden.”', date: 'Ayer' },
    { id: 3, author: 'Juan', text: '🌹 El amor no se busca, se reconoce como el alma reconoce a su reflejo en otro ser.', date: 'Hace 2 días' }
  ]
})

// Usa searchStore.query (valor ejecutado) para filtrar cuando se presione Buscar.
// Si prefieres filtrado en vivo, cambia query.value por liveQuery.value
const filteredPosts = computed(() => {
  const q = (searchStore.query || '').toLowerCase().trim()
  if (!q) return posts.value
  return posts.value.filter(p => p.author.toLowerCase().includes(q))
})

function addPost(){
  const text = newText.value && newText.value.trim()
  if(!text) return
  posts.value.unshift({ id: Date.now(), author: 'Karen', text, date: 'Ahora' })
  newText.value = ''
}

function removePost(id){
  posts.value = posts.value.filter(p => p.id !== id)
}
</script>


<style scoped>
.muro-grid{ display:grid; grid-template-columns: 280px 1fr; gap:18px; align-items:start; }

/* feed */
.create-post{ display:flex; gap:8px; margin-bottom:14px; }
.create-post input{
  flex:1; padding:10px; border-radius:10px; border:1px solid #e9eef7;
}
.create-post button{ padding:10px 14px; border-radius:10px; border:none; background:#5b6df6; color:#fff; cursor:pointer; }

.posts-list{ display:flex; flex-direction:column; gap:12px; }

/* responsive */
@media (max-width:880px){
  .muro-grid{ grid-template-columns: 1fr; }
}

.muro-container {
  display: grid;
  grid-template-columns: 280px 1fr; /* izquierda fijo, derecha flexible */
  gap: 30px;
  padding: 30px;
  align-items: start;
}

/* Columna izquierda */
.left-column {
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  padding: 15px;
}

/* Columna derecha */
.right-column {
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  padding: 15px;
}

/* Crear publicación */
.create-post {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.create-post input {
  flex: 1;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #5b3291;
}

.create-post button {
  background-color: #853ff7;
  color: rgb(255, 255, 255);
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
}

.create-post button:hover {
  filter: brightness(0.9);
}

/* Lista de publicaciones */
.posts-list {
  display: flex;
  flex-direction: column;
  gap: 20px;

}

/* Responsivo para pantallas pequeñas */
@media (max-width: 800px) {
  .muro-container {
    grid-template-columns: 1fr;
  }

  .left-column {
    order: 2;
  }

  .right-column {
    order: 1;
  }
}

</style>
