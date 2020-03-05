<template>
  <div class="home text-center container-fluid">
    <div class="row">
      <div class="col-12 d-flex align-items-center homev justify-content-center">
        <div class="row">
          <div class="col-12">
            <h4 class="text-secondary logoFont">Welcome to NeatureBoard</h4>
          </div>
          <div class="col-12"><button class="btn btn-light btn-lg" @click="login">Log In</button></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import axios from "axios";

  let _api = axios.create({
    baseURL: "https://localhost:3000",
    withCredentials: true
  });
  export default {
    name: "home",
    data() {
      return {};
    },
    methods: {
      async login() {
        await this.$auth.loginWithPopup();
        this.$store.dispatch("setBearer", this.$auth.bearer);
        this.$store.dispatch("getProfile");
        this.$router.push({ name: "boards" });
        console.log("this.$auth.user: ");
        console.log(this.$auth.user);
      }
    },
    computed: {},
    components: {}
  };
</script>


<style scoped>
  .home {
    background-image: URL("../assets/mountains.jpg");
    background-size: cover;
    height: 100vh;
    width: 100vw;
  }

  .homev {
    min-height: 100vh;
  }

  .logoFont {
    font-family: 'Amatic SC';
    font-size: 8vh;
    font-weight: 700;
  }
</style>