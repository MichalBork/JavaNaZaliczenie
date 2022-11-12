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



            <!--      FORM CALC QUICK            -->

          </div>
          <!--END-->

      </section>
      <!-- 1st Hero Variation -->
    </div>

    <section class="section section-lg pt-lg-0 mt--200">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row row-grid">
              <div class="col-lg-4">
                <!--                              CARD NUMBER 1-->
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="ni ni-check-bold" type="primary" rounded class="mb-4">
                  </icon>
                  <h6 class="text-primary text-uppercase">Wiarygodność</h6>
               <dl>
                  <dt class="">Firma posiada licencję na świadczenie usług płatniczych Komisji Nadzoru Finansowego</dt>

               </dl>
                  <base-button tag="a" @click="goToPage('/register')"  type="primary" class="mt-4">
                    Przekonaj sie sam
                  </base-button>
                </card>
              </div>
              <!--                          END OF CARD 1-->
              <div class="col-lg-4">
                <!--                              CARD NUMBER 2-->

                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="ni ni-istanbul" type="success" rounded class="mb-4">
                  </icon>
                  <h6 class="text-success text-uppercase">Wygoda i dostępność</h6>
                  <dl>
                    <dt>Całą dobę, cały tydzień i cały rok wymieniasz bez wychodzenia z domu</dt>

                  </dl>
                  <base-button tag="a" @click="goToPage('/register')"  type="success" class="mt-4">
                    Przekonaj sie sam
                  </base-button>
                </card>
              </div>
              <!--                          END OF CARD 2-->

              <div class="col-lg-4">
                <!--                              CARD NUMBER 3-->

                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="ni ni-planet" type="warning" rounded class="mb-4">
                  </icon>
                  <h6 class="text-warning text-uppercase">Bezpieczeństwo</h6>
                  <dl>
                    <dt>Transakcje realizujemy online, eliminując ryzyko związane z obrotem gotówki.</dt>

                  </dl>
                  <base-button tag="a" @click="goToPage('/register')" type="warning" class="mt-4">
                    Przekonaj sie sam
                  </base-button>
                </card>
              </div>
              <!--                          END OF CARD 3-->

            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-lg">
      <div class="container">
        <div class="row justify-content-center text-center mb-lg">
          <div class="col-lg-8">
            <h2 class="display-3">Szybka wymiana nawet w 15 minut</h2>

          </div>
        </div>
        <div class="row">

          <div class="col-md-8 col-lg-4 mb-5 mb-lg-0">
            <div class="px-4">
              <img v-lazy="'img/theme/pngtree-vector-wallet-icon-png-image_541861.jpg'"
                   class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                   style="width: 200px;">
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">Krok 1</span>
                  <small class="h6 text-muted">Wpłacasz przelewem środki na wymianę</small>
                </h5>

              </div>
            </div>
          </div>
          <div class="col-md-8 col-lg-4 mb-5 mb-lg-0">
            <div class="px-4">
              <img v-lazy="'img/theme/form640.jpeg'"
                   class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                   style="width: 200px; height: 200px">
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">Krok 2</span>
                  <small class="h6 text-muted">Wymieniasz walutę
                    w kilka kliknięć</small>
                </h5>

              </div>
            </div>
          </div>
          <div class="col-md-8 col-lg-4 mb-5 mb-lg-0">
            <div class="px-4">
              <img v-lazy="'img/theme/pngtree-money-transfer-icon-symbol-currency-exchangefinancial-investment-servicecash-back-refundsend-png-image_448507.jpg'"
                   class="rounded-circle img-center img-fluid  shadow-lg--hover"
                   style="width: 200px;">
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">Krok 3</span>
                  <small class="h6 text-muted">Otrzymujesz wymienione środki na konto

                  </small>
                </h5>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section ">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row row-grid">
              <div class="col-lg-4">
                <!--                              CARD NUMBER 1-->
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="ni ni-money-coins" type="success" rounded class="mb-4">

                  </icon>
                  <h6 class="text-primary text-uppercase">Wiarygodność</h6>
                  <dl>
                    <dt class="">Firma posiada licencję na świadczenie usług płatniczych Komisji Nadzoru Finansowego</dt>

                  </dl>
                  <base-button tag="a" href="#" type="primary" class="mt-4">
                    Dowiedz sie wiecej
                  </base-button>
                </card>
              </div>
              <!--                          END OF CARD 1-->
              <div class="col-lg-4">
                <!--                              CARD NUMBER 2-->

                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="ni ni-money-coins" type="success" rounded class="mb-4">
                  </icon>
                  <h6 class="text-success text-uppercase">Wygoda i dostępność</h6>
                  <dl>
                    <dt>Całą dobę, cały tydzień i cały rok wymieniasz bez wychodzenia z domu</dt>

                  </dl>
                  <base-button tag="a" href="#" type="success" class="mt-4">
                    Dowiedz sie wiecej
                  </base-button>
                </card>
              </div>
              <!--                          END OF CARD 2-->

              <div class="col-lg-4">
                <!--                              CARD NUMBER 3-->

                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="ni ni-money-coins" type="success" rounded class="mb-4">

                  </icon>
                  <h6 class="text-warning text-uppercase">EUR</h6>
                  <div class="row">
                    <div class="col-4">
                      <dl>
                        <dt>1 EUR = 4,56 PLN</dt>

                      </dl>
                    </div>
                    <div class="col-4">
                      <dl>
                        <dt>1 PLN = 0,22 EUR</dt>

                      </dl>
                    </div>
                  </div>

                  <base-button tag="a" href="#" type="warning" class="mt-4">
                    Dowiedz sie wiecej
                  </base-button>
                </card>
              </div>
              <!--                          END OF CARD 3-->

            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section bg-secondary">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6">
            <div class="card bg-default shadow border-0">
              <img v-lazy="'img/theme/digital_banking.jpg'" class="card-img-top">
              <blockquote class="card-blockquote">
                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                     class="svg-bg">
                  <polygon points="0,52 583,95 0,95" class="fill-default"></polygon>
                  <polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-default"></polygon>
                </svg>
                <h4 class="display-3 font-weight-bold text-white">Design System</h4>
                <p class="lead text-italic text-white">Kantor internetowy
                  inny niż wszystkie. Dołącz do największej społecznościowej platformy
                  wymiany walut w Polsce i oszczędź do 8%.</p>
              </blockquote>
            </div>
          </div>
          <div class="col-md-6">
            <div class="pl-md-5">
              <icon name="ni ni-settings" class="mb-5" size="lg" type="warning" shadow rounded></icon>

              <h3>Our customers</h3>
              <p class="lead">Oszczędzaj na płatnościach za granicą</p>
              <p>Usprawnij proces wymiany walut. Zaplanuj dokonywanie regularnych transakcji. Ustaw przydatne alerty. Oszczędzaj czas i zlecaj wymianę po atrakcyjnym kursie.</p>
              <p>Zapomnij o niekorzystnych kursach i ukrytych opłatach. Przekonaj się, ile możesz zaoszczędzić. Załóż darmowe konto i zacznij korzystnie wymieniać walutę.</p>
              <button type="button" class="btn btn-default" @click="goToPage('/register')">
                <a > Dowiedz sie wiecej </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>

</style>

<script>
export default {
  name: "home",
 data() {
    return {
      url: process.env.BASE_URL,
      subtitle: "This is the home page"
    };
  },
  methods: {

    goToPage(page) {
      this.$router.push(page);
    },

  }
};
</script>

