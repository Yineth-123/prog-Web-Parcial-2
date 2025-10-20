import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSearchStore = defineStore('search', () => {
  const liveQuery = ref('')    // actualización en cada tecla
  const query = ref('')        // valor "ejecutado" por el botón Buscar

  function setLiveQuery(val) { liveQuery.value = val }
  function executeSearch() { query.value = liveQuery.value } // botón Buscar
  function clearSearch() { liveQuery.value = ''; query.value = '' }

  return { liveQuery, query, setLiveQuery, executeSearch, clearSearch }
})
