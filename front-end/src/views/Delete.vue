<template>
  <div class="deleteBox">
    <IdBox nameButton="Deletar" v-on:user-id="deleteWithId($event)"/>
    <div>
      <h3 v-if="returnDelete">
        Usuário deletado com sucesso!
      </h3>
      <h3 class="red" v-else-if="!firstRender">
        Erro ao deletar o usuário
      </h3>
    </div>
  </div>
</template>

<script>
import IdBox from "../components/IdBox";
import EventService from '../services/EventService';

export default {
  data: function() {
    return {
      returnDelete: null,
      firstRender: true
    }
  },

  components: {
    IdBox
  },

  methods: {
    async deleteWithId(userId) {
      EventService.deleteUser(userId).then(data => {
        this.returnDelete = data;
        this.firstRender = false;
      })
    }
  }


};
</script>

<style>
  .deleteBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h3 {
    padding: 15px;
    color: black;
  }

  .red {
    color: red;
  }

</style>