import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import CurrentValueForAllCurrency from "@/views/CurrentValueForAllCurrency";
import MainCalculator from "@/views/MainCalculator";
import NbpUpdate from "@/services/Nbp.vue";

Vue.use(Router);

export default new Router({
    linkExactActiveClass: "active",
    routes: [
        {
            path: "/",
            name: "landing",
            components: {
                header: () => import('./layout/AppHeader.vue'),
                default: () => import('./views/Landing.vue'),
                footer: () => import('./layout/AppFooter.vue')
            }
        },

        {
            path: "/login",
            name: "login",

            components: {
                header: () => import('./layout/AppHeader.vue'),

                default: () => import('./views/Login.vue'),
                footer: () => import('./layout/AppFooter.vue')

            }
        },
        {
            path: "/register",
            name: "register",
            components: {
                header: () => import('./layout/AppHeader.vue'),

                default: () => import('./views/Register.vue'),
                footer: () => import('./layout/AppFooter.vue')

            }
        },
        {
            path: "/profile",
            name: "profile",
            beforeEnter: (to, from, next) => {
               localStorage.getItem('user-token') !== null ? next() : next('/login');
            },
            components: {
                header: () => import('./layout/AppHeader.vue'),

                default: () => import('./views/Profile.vue'),
                footer: () => import('./layout/AppFooter.vue')

            }
        },
        {
            path: "/calculator",
            name: "calculator",
            beforeEnter: (to, from, next) => {
                localStorage.getItem('user-token') !== null ? next() : next('/login');
            },
            components: {
                header: () => import('./layout/AppHeader.vue'),

                default: () => import('./views/MainCalculator.vue'),
                footer: () => import('./layout/AppFooter.vue')

            }
        },

        {
            path: "/current",
            name: "current",
            components: {
                header: () => import('./layout/AppHeader.vue'),

                default: () => import('./views/CurrentValueForAllCurrency.vue'),
                footer: () => import('./layout/AppFooter.vue')

            }
        },
        {
          path: "/nbpupdate",
            name: "nbpupdate",
            components: {
              default: NbpUpdate
            }
        }


    ],

});
