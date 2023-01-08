<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/white.png" alt="logo">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
                        <img src="img/brand/blue.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">


            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">

              <li class="nav-item">
                <a class="nav-link nav-link-icon" href="#/profile">
                  <i class="ni ni-badge"></i>
                  <span class="nav-link-inner--text d-lg-none">Facebook</span>
                </a>
              </li>


              <li class="nav-item">
                <a class="nav-link nav-link-icon" href="#/calculator">
                  <i class="ni ni-money-coins"></i>
                  <span class="nav-link-inner--text d-lg-none">Facebook</span>
                </a>
              </li>


                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.facebook.com/creativetim" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Like us on Facebook">
                        <i class="fa fa-facebook-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Facebook</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.instagram.com/creativetimofficial"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Follow us on Instagram">
                        <i class="fa fa-instagram"></i>
                        <span class="nav-link-inner--text d-lg-none">Instagram</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://twitter.com/creativetim" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Follow us on Twitter">
                        <i class="fa fa-twitter-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Twitter</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://github.com/creativetimofficial/vue-argon-design-system"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Star us on Github">
                        <i class="fa fa-github"></i>
                        <span class="nav-link-inner--text d-lg-none">Github</span>
                    </a>
                </li>
                <li class="nav-item d-none d-lg-block ml-lg-4" v-if="!isLogin">
                    <a href="#/login"  rel="noopener"
                       class="btn btn-neutral btn-icon">
                <span class="btn-inner--icon">
                  <i class="fa fa-cloud-download mr-2"></i>
                </span>
                        <span class="nav-link-inner--text" >Login</span>
                    </a>
                </li>


              <li class="nav-item d-none d-lg-block ml-lg-4" v-if="isLogin">
                <a href="/"  rel="noopener"
                   class="btn btn-neutral btn-icon">
                <span class="btn-inner--icon">
                  <i class="fa fa-cloud-download mr-2"></i>
                </span>
                  <span class="nav-link-inner--text" id="account_action" @click="logout">Logout</span>
                </a>
              </li>

            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  },
  data() {
    return {
      isLogin: false,
    };
  },
 methods: {
    isUserLoggedIn() {
      this.isLogin = !!localStorage.getItem("user-token");
    },

   logout() {
     localStorage.removeItem("user-token");
     this.$router.push("/login");
   },
   setTimeout() {
     setInterval(() => {
       this.isUserLoggedIn();
     }, 1000);
   },


 },
  mounted(){
    this.isUserLoggedIn();
    this.setTimeout();
  },

}
</script>
<style>
</style>
