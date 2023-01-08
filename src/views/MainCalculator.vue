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

            <div class="alert alert-success" role="alert" v-if="actionSuccess">
              <strong>Success!</strong>  Wymiana walut przebiegła pomyślnie. W ciagu 24h otrzymasz email z potwierdzeniem.
            </div>
            <div class="row" v-if="!actionSuccess">


              <!--              VALUE-->
              <div class="col-4" >
                <div class="col-md-12" >
                  <div class="form-group" >
                    <label for="name" id="name">Kwota</label>
                    <input type="text"
                           v-model="amountToExchange"
                           class="form-control"
                           @change="calculate"
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
                  <select v-model="selected" class="custom-select" @change="calculate">

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

              <b-button size="lg"  @click="addTransactionToDB">Kliknij i zaplac</b-button>


            </div>
            <div class="row pt-25">
              <div class="col-6"><p class="lead text-black mt-2">Ceny walut zostaly udostepnione przez Narodowy Bank
                Polski. Do podanej kwoty zostala doliczona oplata prowizyjna</p>
              </div>
              <div class="col-4">
                <div class="alert alert-primary" role="alert" v-if="toPay && toPay > 0">
                  <strong>{{ givenAction }} {{ toPay }} {{ currencyDisplay }}</strong>
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
      currencyDisplay: "PLN",
      givenAction: null,
      selectedCurrencyNameToSell: null,
      selectedCurrencyNameToBuy: null,
      actionSuccess:false
    }
  },
  methods: {
    calculate() {
      let x = this.amountToExchange;
      let selectedCurrency = this.selected;
      let sellOrBuy = this.selected.search(";sell");
      let toPay = 0;
      let selectedCurrencyNameToBuy = "";
      let selectedCurrencyNameToSell = "";
      if (sellOrBuy === -1) {
        this.givenAction = "Do zapłaty";
        this.currency.forEach(function (item) {
          if (item.code === selectedCurrency.replace(";buy", "")) {
            toPay = x * item.buy;
            selectedCurrencyNameToBuy = item.code;
            selectedCurrencyNameToSell = "PLN";

          }
        })
      } else {
        this.givenAction = "Otrzymasz";
        this.currency.forEach(function (item) {
          if (item.code === selectedCurrency.replace(";sell", "")) {
            toPay = x * item.sell;
            selectedCurrencyNameToBuy = "PLN";
            selectedCurrencyNameToSell = item.code;

          }
        })
      }
      //round to 2 decimal places
      this.selectedCurrencyNameToSell = selectedCurrencyNameToSell;
      this.selectedCurrencyNameToBuy = selectedCurrencyNameToBuy;
      this.toPay = toPay.toFixed(2);
    },
//TODO add method to calculate

    addTransactionToDB() {
          axios.post('http://localhost:8080/api/transactions', {
        date: new Date(),
        value: this.amountToExchange,
        type: this.selected.search(";sell") === -1 ? 1 : 2,
        bidName: this.selected.search(";sell") === -1 ? this.selectedCurrencyNameToBuy : this.selectedCurrencyNameToSell,
        askName: this.selected.search(";buy") === -1 ? this.selectedCurrencyNameToBuy : this.selectedCurrencyNameToSell,
        client: localStorage.getItem("user-token"),
        nbpValue: this.toPay
      }).catch(error => {
      }).then(response => {
        this.actionSuccess = true;
      });

    },

    setActionSuccess(bool){
      this.actionSuccess = bool;
    },

    getAllCurrencyForTrade() {
      axios.get('http://localhost:8080/api/nbp/today')
          .then(response => {
            response.data.forEach((item) => {
              this.currency.push({
                code: item.currency,
                plnToSmt: "PLN|" + item.currency,
                smtToPln: item.currency + "|PLN",
                buy: item.bid,
                sell: item.ask
              });

            })
            this.creteOptions();

          })
          .catch(error => {
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
