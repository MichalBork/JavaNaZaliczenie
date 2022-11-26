<template>
  <section class="section section-shaped section-lg my-0">
    <div class="shape shape-style-1 bg-gradient-default">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <card type="secondary" shadow
                header-classes="bg-white pb-5"
                body-classes="px-lg-5 py-lg-5"
                class="border-0">

            <template>
              <div class="text-center text-muted mb-4">
                <small>Or sign in with credentials</small>
              </div>
              <form role="form">
                <base-input alternative
                            v-model="login"
                            class="mb-3"
                            placeholder="Email"
                            addon-left-icon="ni ni-email-83">
                </base-input>
                <base-input alternative
                            v-model="password"
                            type="password"
                            placeholder="Password"
                            addon-left-icon="ni ni-lock-circle-open">
                </base-input>
                <base-checkbox>
                  Remember me
                </base-checkbox>
                <div class="text-center">
                  <base-button type="primary" class="my-4" @click="loginToAccount">Sign In</base-button>
                </div>
              </form>
            </template>
          </card>
          <div class="row mt-3">
            <div class="col-6">
              <a href="#" class="text-light">
                <small>Forgot password?</small>
              </a>
            </div>
            <div class="col-6 text-right">
              <a href="#" class="text-light">
                <small>Create new account</small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
import Landing from "@/views/Landing";

export default {
  name: 'Login',
  data() {
    return {
      login: '',
      password: ''
    }
  },

  methods: {
    loginToAccount() {
      console.log(this.login,this.password);

      axios.post('http://localhost:8080/api/clients/login', {
        login: this.login,
        password: this.password
      })
          .then(response => {
            console.log(response)
            this.saveUserToken(response.data)
            console.log(localStorage.getItem('user-token'))
            this.$router.push({name: 'landing'})
          })
          .catch(error => {
            console.log(error)
          })
    },
    saveUserToken(token) {
      localStorage.setItem('user-token', token)
    }
  }
};
</script>
<style>
</style>
