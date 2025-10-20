<template>
  <div class="searchbar">
    <input
      type="text"
      v-model="store.liveQuery"
      @keyup.enter="onSearch"
      placeholder="Buscar por nombre de usuario..."
      class="search-input"
    />
    <button class="btn-search" @click="onSearch">Buscar</button>
    <button v-if="store.liveQuery" class="btn-clear" @click="onClear" title="Limpiar">✕</button>
  </div>
</template>

<script setup>
import { useSearchStore } from '../stores/useSearchStore'
const store = useSearchStore()

function onSearch() {
  // Ejecuta la búsqueda: copia liveQuery en query
  store.executeSearch()
}

function onClear() {
  store.clearSearch()
}
</script>

<style scoped>
.searchbar{
  display:flex;
  align-items:center;
  border:30px;
  gap:20px;
}
.search-input{
  padding:8px 12px;
  border-radius:10px;
  border:1px solid #e0dfff;
  min-width:350px;
}
.btn-search{
  padding:8px 12px;
  background:#7c4dff; /* morado parcial */
  color:#fff;
  border:none;
  border-radius:8px;
  cursor:pointer;
}
.btn-search:hover{ filter:brightness(0.95) }
.btn-clear{
  padding:6px 8px;
  background:transparent;
  border:1px solid #eee;
  border-radius:6px;
  cursor:pointer;
}
</style>

