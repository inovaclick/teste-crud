<template>
  <nav id="nav">
    <router-link to="/" class="logo">Sistema CRUD</router-link>
    <router-link to="/" class="link">Home</router-link>
    <router-link to="/createUser" class="link">Criar usuário</router-link>
    <router-link to="/readUser" class="link">Buscar usuário</router-link>
    <router-link to="/updateUser" class="link">Atualizar usuário</router-link>
    <router-link to="/deleteUser" class="link">Deletar usuário</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
#nav {
  padding: 30px;
  display: flex;
  justify-content: space-around;
}

#nav .logo {
  font-weight: bold;
  font-size: 1.3rem;
}

#nav a {
  color: #2c3e50;

  text-decoration: none;
  color: black;
}

#nav .link.router-link-exact-active {
  color: #42b983;
}

</style>