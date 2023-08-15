<template>

  <div>
    <EditarCliente v-if="clienteEditando" :cliente="clienteEditando" 
    @clienteAtualizado="atualizarClienteEditado" @fecharEdicao="fecharEdicao"/>
    <div class="header-form lista">
        <h2>Lista de Clientes</h2>
        <button class="atualizar" @click="atualizarLista"> Atualizar tabela</button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>Código</th>
          <th>Nome</th>
          <th>Telefone</th>
          <th>Email</th>
          <th colspan="2">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cliente in clientes" :key="cliente.codigo">
          <td>{{ cliente.codigo }}</td>
          <td>{{ cliente.nome }}</td>
          <td>{{ cliente.telefone }}</td>
          <td>{{ cliente.email }}</td>
          <td class="edrow"><button class="editar" @click="editarCliente(cliente)">Editar</button></td>
          <td class="edrow"><button class="excluir" @click="excluirCliente(cliente.codigo)" @fecharEdicao="mostrarEdicao">Excluir</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import EditarCliente from './EditarClientes.vue'

export default {

  data() {
    return {
      clientes: [],
      clienteEditando: null,
    };
  },

  created() {
    this.listarClientes();
  },

  methods: {

    listarClientes() {
      axios.get('http://localhost:3000/api/clientes')
        .then(response => {
          this.clientes = response.data.result;
          this.listarClientes();
        })
        .catch(error => {
          console.error('Erro ao listar clientes:', error);
        });
    },

    editarCliente(cliente) {
      this.clienteEditando = cliente;
    },

    atualizarClienteEditado(clienteAtualizado) {
      const index = this.clientes.findIndex(cliente => cliente.codigo === clienteAtualizado.codigo);
      if (index !== -1) {
        this.clientes[index] = clienteAtualizado;
      }
      this.clienteEditando = null;
    },

    fecharEdicao() {
        this.clienteEditando = null;
    },

    atualizarLista() {
        this.$emit('atualizarLista');
    },

    excluirCliente(codigo) {
        axios.delete(`http://localhost:3000/api/cliente/${codigo}`)
        .then(() => {
            // Atualize a lista de clientes após a exclusão
            this.listarClientes();
        })
        .catch(error => {
            console.error('Erro ao excluir cliente:', error);
        });
    },

  },

  components: {
    EditarCliente,
  },

};
</script>

<style>
/* Estilos para a tabela */
.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.table th,
.table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

.table th {
  background-color: #004fa3;
}

.edrow {
    width: 20px;
}

table .editar {
    background-color: #007bff;
    color: #000000;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 0px;
    margin-bottom: 0px;
    background-color: #f3d13c;
}

table .excluir {
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 0px;
    margin-bottom: 0px;
    background-color: #ff3333;
}

.atualizar {
    display: block;
    float: right;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    margin-right: 30px;
}

.atualizar:hover {
  background-color: #0056b3;
}

.lista {
    align-items: center;
    margin-bottom: 0px;
}

.lista h2 {
    font-family: "Poppins", roboto;
    font-weight: 500;
    font-size: 3rem;
    margin-left: 30px;
}

thead {
    font-size: 1rem;
    color: white;
}

tbody {
    font-size: 1.1rem
}

body button {
    font-weight: 500;
    color: rgb(133, 31, 31);
}
</style>
