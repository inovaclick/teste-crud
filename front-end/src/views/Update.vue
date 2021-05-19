<template>
  <div class="updateBox">
    <!-- We don't need to check if the id passed through the "IdBox" exists in the database, the api checks that for us
      alredy, I made this way just to look prettier
    -->
    <IdBox nameButton="Próximo" v-if="!findId" v-on:user-id="getUserById($event)"/>
    <div v-else>
      <h2>Editando usuário de id: {{ findId }}</h2>
      <FieldBox buttonName="Editar" v-on:user-form="updateUserById(findId, ...$event)"/>
      <div v-if="returnUpdate"><h2>Usuário atualizado com sucesso</h2></div>
    </div>
    <h2 v-if="!firstRender && !findId" class="red">Usuário não econtrado!</h2>
  </div>
</template>

<script>
import IdBox from "../components/IdBox";
import FieldBox from '../components/FieldBox'
import EventService from '../services/EventService'


export default {
  data: function() {
    return {
      findId: false,
      returnUpdate: null,
      firstRender: true
    }
  },
  
  components: {
    IdBox,
    FieldBox
  },

  methods: {
    async getUserById(userId) {
      EventService.getById(userId).then(data => {
        if(data != null)
          this.findId = data[0].id;
        this.firstRender = false;
      });
    },

    async updateUserById(id ,userName, userAddress, userCpf, userEmail) {
      EventService.updateUser(id, userName, userAddress, userCpf, userEmail).then(data => {
        this.returnUpdate = data;
      })
    }
  }
};
</script>

<style>
  .updateBox {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  h2 {
    color: black;
  }

  .red {
    color: red;
  }
</style>