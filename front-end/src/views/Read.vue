<template>
  <div>
    <h3>Como deseja realizar a busca?</h3>
    <select v-model="fetchWithId">
        <option disabled value="">Selecione uma opção</option>
        <option :value="0">Id</option>
        <option :value="1">Nome/Todos</option>
    </select>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            fetchWithId: -1
        }
    },
    watch: {
        fetchWithId(newValue) {
            if(newValue === 1) {
                //APARECER BUSCA COM NOME
            } else if(newValue === 0) {
                // APARECER BUSCA COM ID
            }
        }
    }
}
</script>

<style>
</style>