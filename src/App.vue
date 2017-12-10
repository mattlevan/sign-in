<template>
  <div class="container">
    <div id="app">
      </br>
      <h1 class="text-center">Welcome!</h1>
      <center>
        <router-link to="/">Sign In</router-link>
        <router-link to="admin">Admin</router-link>
      </center>
      </br>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>
