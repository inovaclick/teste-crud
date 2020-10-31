<template>
  <div>
    <h3>Entre com os dados do novo usuário.</h3>
    <FieldBox buttonName="Criar" v-on:user-form="createNewUser(...$event)"/>
    <div v-if="returnPost" class="message"><h2>Usuário criado com sucesso!</h2></div>
  </div>
</template>

<script>
import FieldBox from '../components/FieldBox';
import EventService from '../services/EventService'

export default {
  data: function() {
    return {
      returnPost: null
    }
  },
  
  components: {
    FieldBox
  },

  methods: {
    async createNewUser(userName, userAddress, userCpf, userEmail) {
      EventService.createUser(userName, userAddress, userCpf, userEmail).then(data => {
        this.returnPost = data;
      })
    }
  }
};
</script>

<style>
  .message {
    padding: 20px;
    color: black;
  }
</style>  