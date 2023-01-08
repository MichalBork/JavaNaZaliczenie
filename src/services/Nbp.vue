<script>
import axios from "axios";

export default {
  name: "NbpUpdate",

  data() {
    return {
      currencyList: ["usd", "eur", "gbp", "chf", "jpy", "cny", "rub"],

    }
  },
  methods: {

    todayDate(){
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1; //January is 0!
      var yyyy = today.getFullYear();
      //if weekend then set date to friday
      if(today.getDay() === 6){
        dd = dd - 1;
      }
      if(today.getDay() === 0){
        dd = dd - 2;
      }
      if(dd<10){
          dd='0'+dd
      }
      if(mm<10){
          mm='0'+mm
      }
      today = yyyy+'-'+mm+'-'+dd;
      return today;
    },



    update(date, currency) {
      axios.get('http://api.nbp.pl/api/exchangerates/rates/c/'+currency+'/'+date+'/?format=json')
          .then(response => {
            this.updateDataBase(response)
          })
          .catch(error => {
          })
    },
    updateDataBase(resposne) {
      axios.post('http://localhost:8080/api/nbp/create', {
        id: this.getRandomID(),
        tradingDate:resposne.data.rates[0].effectiveDate,
        currency: resposne.data.code,
        bid: resposne.data.rates[0].bid,
        ask: resposne.data.rates[0].ask

      })
          .then(response => {
          })
    },
    getRandomID() {
      return Math.floor(Math.random() * 1000000000);
    }
  },
  created() {
    this.currencyList.forEach(element => {
      this.update(this.todayDate(),element)
    });
  }
}
</script>