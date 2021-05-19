<template>
  <div class="inputForm">
    <div>
      <div class="inputField">
        <label for="nameValue">Qual o nome do usuário?</label>
        <input type="text" id="nameValue" v-model="userName" />
      </div>
      <div class="inputField">
        <label for="addressValue">Qual o endereço do usuário?</label>
        <input type="text" id="addressValue" v-model="userAddress" />
      </div>
      <div class="inputField">
        <label for="cpfValue">Qual o cpf do usuário?</label>
        <input type="text" id="cpfValue" v-model="userCpf" />
      </div>
      <div class="inputField">
        <label for="emailValue">Qual o email do usuário?</label>
        <input type="text" id="emailValue" v-model="userEmail" />
      </div>
      <div class="buttons">
        <button v-on:click="$emit('user-form', [userName, userAddress, userCpf, userEmail])">{{ buttonName }}</button>
        <button v-on:click="clearInputs()">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FieldBox",
  props: ['buttonName'],
  data: function() {
    return {
      userName: null,
      userAddress: null,
      userCpf: null,
      userEmail: null
    }
  },
  methods: {
    clearInputs() {
      this.userName = null;
      this.userAddress = null;
      this.userCpf = null;
      this.userEmail = null;
    }
  }
}
</script>

<style>
  .inputForm {
    display: flex;
    justify-content: center;
  }

  .inputField input {
    padding: 10px;
    height: 8px;
  }

  .inputField {
    display: flex;
  }

  .inputForm label {
    width: 50%;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
  }

  .buttons button {
    width: 25%;
    margin: 5px;
  }

  .fields {
    display: flex;
    flex-direction: column;
  }

</style>