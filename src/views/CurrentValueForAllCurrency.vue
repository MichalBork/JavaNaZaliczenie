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
                <p class="lead  text-white">Wymieniaj waluty taniej, po atrakcyjnych kursach. Brak ukrytych opłat i prowizji. Rabat na pierwszą wymianę waluty.</p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section class="section section-lg pt-lg-0 ">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">

            <table class="table" style="background: white">
              <thead>
              <tr>
                <th class="text-center">#</th>
                <th>Para walutowa</th>
                <th>Kurs Kupna</th>
                <th>Kurs Sprzedazy</th>
                <th>Wymien</th>

              </tr>
              </thead>
              <tbody>

              <tr v-for="item in currency ">
                <td class="text-center">3</td>
                <td>{{currency}}</td>
                <td>{{amount}}</td>
                <td>{{result}}</td>
                <td class="td-actions text-right"> <button class="btn btn-info btn-icon btn-sm btn-simple"><a href="Landing.vue">XDDD</a></button></td>

              </tr>
              </tbody>
            </table>
          </div>
          </div>
          </div>
    </section>









  </div>
</template>


<script>
export default {
  name: "CurrentValueForAllCurrency",

  data() {
    return {
      currencies: [],
      currency: [123, 123, 123],
      amount: [123, 321, 123],
      result: [123, 123, 222]
    }
}
}


</script>

<style scoped>

</style>