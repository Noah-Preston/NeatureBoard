<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light container-fluid">
    <router-link class="navbar-brand " :to="{ name: 'boards' }">
      <img src="../assets/logo.png" class="logo" />
      <h5 class="logoFont"><strong>NeatureBoard</strong></h5>
    </router-link>
    <div class="col-6 col-md-10 justify-content-center d-flex mx-auto logoFont neat"> "That's pretty neat!"</div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarText">
      <span class="navbar-text ">
        <button class="btn btn-success" @click="login" v-if="!$auth.isAuthenticated">Login</button>
        <button class="btn btn-danger" @click="logout" v-else>logout</button>
      </span>
    </div>
  </nav>
</template>

<script>
  import axios from "axios";

  let _api = axios.create({
    baseURL: "https://localhost:3000",
    withCredentials: true
  });
  export default {
    name: "Navbar",
    methods: {
      async logout() {
        await this.$auth.logout();
        this.$store.dispatch("resetBearer");
        this.$router.push({ name: "home" });
      }
    }
  };
</script>

<style>
  .logo {
    max-width: 4vw;
  }

  .logoFont {
    font-family: 'Amatic SC';
  }

  .neat {
    font-size: 6vh;
    font-weight: 800;
  }
</style>