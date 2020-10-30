<template>
  <div>
    <label for="idValue">Qual o id do usuário?</label>
    <input type="text" id="idValue" :numberId="userId">
  </div>
</template>

<script>
export default {
  name: 'IdBox',
  data: function () {
    return {
      userId: null
    }
  }
}
</script>

<style>
  label {
    /* font-weight: 0; */
    font-size: 300;
    padding: 10px;
  }
</style>