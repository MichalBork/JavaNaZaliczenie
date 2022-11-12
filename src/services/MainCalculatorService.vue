
<script>
import axios from "axios";

export default {
  name: "MainCalculatorService",
  data() {
    return {
      proba:[{name: "USD", amount: 3.5, result: 4.5}, {name: "EUR", amount: 3.5, result: 4.5}, {name: "GBP", amount: 3.5, result: 4.5}],
    listOfAllCurrency: [],
    formatedListForBuy: [],
    formatedListForSell: [],
    }
},
  methods: {
    getAllCurrency() {
      axios.get('http://localhost:8080/currency')
        .then(response => {
          this.listOfAllCurrency = response.data;
          this.getProperFormat();
        })
        .catch(error => {
          console.log(error);
        })
    },

    getProperFormat() {
      this.listOfAllCurrency.forEach(item => {
        this.formatedListForBuy.push({name: "PLN|" + item.currency});
        this.formatedListForSell.push({name: item.currency +"|PLN"});
      })
    }

    // getProperFormat() {
    //   this.listOfAllCurrency.forEach(element => {
    //     this.formatedListForBuy.push("PLN|" + element.code);
    //     this.formatedListForSell.push(element.code+"|PLN");
    //   });
    // }
  },
}
</script>

