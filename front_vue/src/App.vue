<template>
  <div>
    <PrimeiroComponente/>
  </div>
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue'
  import CadastroCliente from './components/CadastroCliente.vue'

  export default {
    name: 'App',
    components: {
      PrimeiroComponente,
      CadastroCliente
    }
  }
</script>
