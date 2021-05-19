<template>
  <div>
    <label for="idValue">Qual o id do usuário?</label>
    <input type="text" id="idValue" v-model="userId" />
    <button v-on:click="$emit('user-id', userId)">{{ nameButton }}</button>
  </div>
</template>

<script>
export default {
  name: "IdBox",
  data: function() {
    return {
      userId: null
    };
  },
  props: ["nameButton"],
  watch: {
    userId() {
      this.$emit("idValue");
    }
  }
};
</script>

<style>
  label {
    font-size: 300;
    padding: 10px;
  }

  button {
    margin: 20px;
  }
  
  input {
    height: 26px;
  }
</style>