<template>
  <div class="cadastro-container">
    <div class="header-form">
        <h2>Cadastro de Cliente</h2>
        <h2 class="close" @click="fecharFormulario"> x </h2>
    </div>
    <form @submit.prevent="cadastrarCliente" class="cadastro-form">
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
      <button type="submit" class="submit-button">Cadastrar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
        clienteId: '',
        nome: '',
        telefone: '',
        email: ''
        
    };
  },
  methods: {
    fecharFormulario() {
        this.$emit('fecharFormulario');
    },

    cadastrarCliente() {
      const novoCliente = {
        nome: this.nome,
        telefone: this.telefone,
        email: this.email
        
    };

      axios.post('http://localhost:3000/api/cliente', novoCliente)
        .then(response => {
            console.log('Cliente cadastrado com sucesso:', response.data);
            alert("Cliente cadastrado com sucesso");
        })

        .catch(error => {
            console.error('Erro ao cadastrar cliente:', error);
        });


      this.nome = '';
      this.telefone = '';
      this.email = '';    
    },
  },
};
</script>


<style>
.cadastro-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 100px;
}

.cadastro-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
}

input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: calc(100% - 20px);
}

.submit-button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 40px;
  margin-bottom: 20px;
}

.submit-button:hover {
  background-color: #0056b3;
}

.header-form {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    max-height: 80px;
    margin-bottom: 40px;

}

.close {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 
    'Helvetica Neue', sans-serif;
    font-size: 2rem;
    line-height: 100%;
    height: max-content;
    width: max-content;

    color: rgb(14, 14, 14);
    margin-right: 8px;
    padding: 0px;
    cursor: pointer;
}

.close:hover {
    color: rgb(168, 1, 1);
}
</style>