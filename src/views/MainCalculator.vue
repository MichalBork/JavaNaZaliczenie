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
                    <label for="name" id="name">Imie</label>
                    <input type="text"

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
                  <label for="bankNumber" id="bankName">Nazwa banku</label>
                  <select class="custom-select">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
<!--              END CURRENCY TYPE-->
<!--              EXCHANGE ICON-->
<!--              <div class="col-2 " style="display: flex"> <a href=""><img v-lazy="'img/theme/exchangecircle.png'"-->
<!--                                       class="rounded mx-auto d-block"-->
<!--                                       style=" display: flex"> </a></div>-->

      <button @click="getCurrency()">XDDD</button>

            </div>
            <div class="row pt-25">
              <div class="col-6"><p class="lead text-black mt-2">Ceny walut zostaly udostepnione przez Narodowy Bank Polski. Do podanej kwoty zostala doliczona oplata prowizyjna</p>
                  </div>
              <div class="col-4"><div class="alert alert-primary" role="alert">
                This is a primary alert—check it out!
              </div></div>
            </div>


          </div>
        </card>

      </div>
    </section>
  </div>
</template>
<script>
import MainCalculatorService from "@/services/MainCalculatorService";

export default {

  data(){
    return{
      selectOption: null,
    }
  },
  methods: {
   getCurrency() {
     MainCalculatorService.getProperFormat();
      this.selectOption = MainCalculatorService.formatedListForBuy;
      console.log(this.selectOption);
    },
  },

};
</script>
<style>
</style>
