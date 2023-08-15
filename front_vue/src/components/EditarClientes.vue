<template>
  <div class="editar-cliente-container">
    <div class="header-form">
      <h2>Editar Cliente</h2> 
      <h2 class="close" @click="fecharEdicao"> x </h2>
    </div>
    <form @submit.prevent="editarCliente" class="editar-cliente-form">
      <!-- Campos para edição -->
      <div class="form-group">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" v-model="nome" required>
      </div>
      <div class="form-group">
        <label for="telefone">Telefone:</label>
        <input type="tel" id="telefone" v-model="telefone" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <button type="submit" class="submit-button">Salvar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['cliente'], // Recebe o cliente a ser editado como prop

  data() {
    return {
      nome: this.cliente.nome,
      telefone: this.cliente.telefone,
      email: this.cliente.email,
    };
  },
  
  methods: {
    fecharEdicao() {
      this.$emit('fecharEdicao');
    },

    editarCliente() {
      const clienteAtualizado = {
        nome: this.nome,
        telefone: this.telefone,
        email: this.email,
      };

      axios.put(`http://localhost:3000/api/cliente/${this.cliente.codigo}`, clienteAtualizado)
        .then(response => {
          console.log('Cliente atualizado com sucesso:', response.data);
          this.$emit('clienteAtualizado', response.data.result);
        })
        .catch(error => {
          console.error('Erro ao atualizar cliente:', error);
        });
    },
  },
};
</script>


<style>
  input {
    max-width: 300px;
  }

  .form-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .editar-cliente-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 100px;
  }

  .submit-button {
    width: 100%;
  }
</style>