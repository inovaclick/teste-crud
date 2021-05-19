<template>
  <div>
    <div class="fetchBox">
      <h3>Como deseja realizar a busca?</h3>
      <select v-model="fetchWithId">
        <option :value="true">Id</option>
        <option :value="false">Nome/Todos</option>
      </select>
      <div class="inputs">
        <div v-if="fetchWithId">
          <IdBox v-on:user-id="getUserById($event)" nameButton="Buscar"/>
        </div>
        <div v-else>
          <label for="nameValue">
            Qual o nome do usuário que deseja buscar?
          </label>
          <input type="text" id="nameValue" placeholder="Vazio para pesquisar todos." v-model="userName"/>
        </div>
      </div>
      <button @click="getUserByName()" v-if="!fetchWithId">Buscar</button>
    </div>
    <div class="displayUsers" v-if="users">
      <div v-for="user in users" :key="user.id" class="users">
        <div class="infoUsers">
          <span><strong>Id usuário:</strong> {{ user.id }} </span>
          <span><strong>Nome usuário:</strong> {{ user.name }} </span>
          <span><strong>Endereço usuário:</strong> {{ user.address }} </span>
          <span><strong>Email usuário:</strong> {{ user.email }} </span>
          <span><strong>Cpf usuário:</strong> {{ user.cpf }} </span>
          <br />
        </div>
      </div>
    </div>
    <div v-else-if="!firstRender">
      <h2 class="red">Nenhum usuário encontrado!</h2>
    </div>
  </div>
</template>

<script>
import IdBox from "../components/IdBox";
import EventService from '../services/EventService'

export default {
  name: "Read",
  
  data: function() {
    return {
      fetchWithId: true,
      userName: "",
      users: null,
      firstRender: true
    };
  },
  watch: {},
  components: {
    IdBox
  },
  methods: {
    async getUserById(userId) {
      EventService.getById(userId).then(data => {
        this.users = data;
        this.firstRender = false;
      });
    },

    async getUserByName() {
      EventService.getByName(this.userName).then(data => {
        this.users = data;
        this.firstRender = false;
      });
    }
  }
};
</script>

<style>
h3 {
  padding: 20px;
}

.fetchBox {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
}

.inputs {
  padding: 20px;
}

.infoUsers {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-style: solid;
  padding: 5px;
}

.displayUsers {
  display: flex;
  flex-wrap: wrap;
}

.users {
  width: 49%;
  padding: 5px;
}

.red {
  color: red;
}
</style>