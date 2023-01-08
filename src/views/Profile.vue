<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img v-lazy="'img/theme/team-4-800x800.jpg'" class="rounded-circle">
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">

                            </div>
                            <div class="col-lg-6 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">{{items.length}}</span>
                                        <span class="description">Liczba transakcji</span>
                                    </div>

                                    <div>
                                        <span class="heading">{{user.registrationDate}}</span>
                                        <span class="description">Dolaczyl</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <h3>{{user.name}} {{user.surname}}
                            </h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>{{user.address}}</div>
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>{{user.email}} || {{user.phone}}</div>

                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                              <b-pagination
                                  v-model="currentPage"
                                  :total-rows="rows"
                                  :per-page="perPage"
                                  aria-controls="my-table"
                              ></b-pagination>

                              <b-table
                                  id="my-table"
                                  :items="items"
                                  :per-page="perPage"
                                  :current-page="currentPage"
                                  striped hover
                              ></b-table>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
import axios from "axios";

export default {

  data() {
    return {
    user:[],
      perPage: 7,
      currentPage: 1,
      items: [],
    };
  },

  methods: {

    createTable(table) {

      this.items = table;
      this.changeKeysName();
    },

    changeKeysName(){
      this.items.forEach(function (item) {
        item['Waluta sprzedazy'] = item['type'] === 1 ? item['bidName'] : item['askName'];
        item['Waluta kupna'] = item['type'] === 1 ? item['askName'] : item['bidName'];
        item['Numer referencyjny'] = item['id'];
        item['Kwota tranzakcji'] = item['nbpValue'];
        item['typ'] = item['type'] === 1 ? 'Kupno' : 'Sprzedaż';
        delete item['type'];
        delete item['bidName'];
        delete item['askName'];
        delete item['nbpValue'];
        delete item['client'];
        delete item['id'];

      });
    },
    },
  created() {
  axios.get('http://localhost:8080/api/clients/profile/'+localStorage.getItem('user-token'))
    .then(response => {
      this.user = response.data.user;
      this.createTable(response.data.transaction);
    })
    .catch(error => {
    });
  }



};
</script>
<style>
</style>
