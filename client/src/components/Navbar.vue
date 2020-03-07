<template>
  <nav id="mb" class="mb navbar navbar-expand-lg navbar-light bg-light container-fluid">
    <div class="col-3 col-md-1">
      <router-link class="navbar-brand" :to="{ name: 'boards' }">
        <img src="../assets/logo.png" class="logo img-responsive" />
      </router-link>
    </div>

    <div class="col-6 col-md-10 justify-content-center text-center d-flex mx-auto logoFont neat">
      <strong>NeatureBoard</strong>
    </div>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarText">
      <span class="navbar-text">
        <button class="btn btn-danger" @click="logout">logout</button>
      </span>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
import NotificationService from "../NotificationService";

let _api = axios.create({
  baseURL: "https://localhost:3000",
  withCredentials: true
});
export default {
  name: "Navbar",
  methods: {
    async logout() {
      if (await NotificationService.confirmLog()) {
        await this.$auth.logout({ returnTo: window.location.href });
        this.$store.dispatch("resetBearer");
        this.$router.push({ name: "home" });
      }
    }
  }
};
</script>

<style>
.logo {
  max-width: 4vw;
}
.logo:hover {
  margin-left: 0.5rem;
  transition: 0.2s ease;
}

.logoFont {
  font-family: "Amatic SC";
}

.neat {
  font-size: 6vh;
  font-weight: 800;
}

#mb {
  padding-bottom: 0;
  padding-top: 0;
}
</style>