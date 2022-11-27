<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0 pb-150">
      <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
    <section class="section section-skew ">
      <div class="container pt-150">
        <card shadow class="card-profile pt-150 pb-150" no-body>
          <div class="px-4">


            <div class="row">

              <!--              VALUE-->
              <div class="col-4">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="name" id="name">Kwota</label>
                    <input type="text"
                           v-model="amountToExchange"
                           class="form-control"
                           id="name"
                           placeholder="Imie"/>
                  </div>
                </div>
              </div>
              <!--              END VALUE-->
              <!--              CURRENCY TYPE-->
              <div class="col-6">
                <div class="form-group">
                  <label for="bankNumber" id="bankName">Waluta</label>
                  <select v-model="selected" class="custom-select">

                    <optgroup label="Kupno">
                      <option v-for="option in plnToSmt" :value="option.value">
                        {{ option.text }}
                      </option>
                    </optgroup>
                    <optgroup label="Sprzedaz">
                      <option v-for="option in smtToPln" :value="option.value">
                        {{ option.text }}
                      </option>
                    </optgroup>

                  </select>


                </div>
              </div>
              <!--              END CURRENCY TYPE-->
              <!--              EXCHANGE ICON-->
              <!--              <div class="col-2 " style="display: flex"> <a href=""><img v-lazy="'img/theme/exchangecircle.png'"-->
              <!--                                       class="rounded mx-auto d-block"-->
              <!--                                       style=" display: flex"> </a></div>-->

              <button @click="calculate()">XDDD</button>

            </div>
            <div class="row pt-25">
              <div class="col-6"><p class="lead text-black mt-2">Ceny walut zostaly udostepnione przez Narodowy Bank
                Polski. Do podanej kwoty zostala doliczona oplata prowizyjna</p>
              </div>
              <div class="col-4">
                <div class="alert alert-primary" role="alert" v-if="toPay">
                  <strong>Do zaplaty: {{ toPay }} PLN</strong>
                </div>
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
      selected: null,
      currency: [],
      sell: [],
      buy: [],
      plnToSmt: [],
      smtToPln: [],
      amountToExchange: 0,
      toPay: 0,
    }
  },
  methods: {
    calculate():mixed {
      let x = this.amountToExchange;
      let selectedCurrency = this.selected;
      let sellOrBuy = this.selected.search(";sell");
      if (sellOrBuy === -1) {
        this.currency.forEach( function (item) {
          if (item.code === selectedCurrency.replace(";buy", "")) {
          return  x * item.buy;

          }
        })
      }

    },
//TODO add method to calculate

    getResult(){
      this.toPay = this.calculate();
    },


    getAllCurrencyForTrade() {
      axios.get('http://localhost:8080/api/nbp/today')
          .then(response => {
            console.log(response.data);
            response.data.forEach((item) => {
              this.currency.push({
                code: item.currency,
                plnToSmt: "PLN|" + item.currency,
                smtToPln: item.currency + "|PLN",
                sell: item.bid,
                buy: item.ask
              });

            })
            this.creteOptions();

          })
          .catch(error => {
            console.log(error);
          });
    },
    creteOptions() {

      this.currency.forEach((item) => {
        this.plnToSmt.push({
          text: item.plnToSmt, value: item.plnToSmt.replace("PLN|", '') + ';buy',
        });
        this.smtToPln.push({
          text: item.smtToPln, value: item.smtToPln.replace("|PLN", '') + ';sell',
        });

      })
    },


  },
  created() {
    this.getAllCurrencyForTrade();
  }

};
</script>
<style>
</style>
