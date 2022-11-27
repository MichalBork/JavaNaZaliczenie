<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex">
          <div class="col-12 px-1">
            <div class="row">
              <div class="col-12 ">
                <h1 class="display-3  text-white">Wymiana walut
                  <span>Prosta i bezpieczna wymiana walut online </span>
                </h1>
                <p class="lead  text-white">Wymieniaj waluty taniej, po atrakcyjnych kursach. Brak ukrytych opłat i
                  prowizji. Rabat na pierwszą wymianę waluty.</p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div>
    </div>
    <section class="section section-lg pt-lg-0 ">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">

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
            <div>
            </div>
          </div>
          </div>
          </div>
    </section>


  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "CurrentValueForAllCurrency",

  data() {
    return {
      perPage: 7,
      currentPage: 1,
      currencies: [],
      currency: [],
      amount: [],
      result: [],
      items: [],
    }
  },
  methods: {
    getCurrency() {
      axios
          .get("http://localhost:8080/api/nbp/all")
          .then((response) => {
            console.log(response);
            response.data.forEach((item,index) => {
              this.items.push({'#':index+1,currencies:"PLN|" + item.currency, amount:item.ask, result:item.bid,});
            });
          });
    },


  },
  created() {
    this.getCurrency();

  },
  computed: {
    rows() {
      return this.items.length
    }
  },
};


</script>

<style scoped>

</style>