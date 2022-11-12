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
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">22</span>
                                        <span class="description">Liczba transakcji</span>
                                    </div>
                                    <div>
                                        <span class="heading">10</span>
                                        <span class="description">Liczba walut na koncie</span>
                                    </div>
                                    <div>
                                        <span class="heading">89</span>
                                        <span class="description">Dolaczyl</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <h3>Jessica Jones
                            </h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>Bucharest, Romania</div>
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>mail@mail.con - Creative Tim Officer</div>
                            <div><i class="ni education_hat mr-2"></i>University of Computer Science</div>
                          <div class="row pt-100">
                            <div class="col">

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
                            <div class="col">



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
                          </div>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
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

                                <tr >
                                  <td class="text-center">3</td>
                                  <td>{x{currency}}</td>
                                  <td>{x{amount}}</td>
                                  <td>{{xresult}}</td>
                                  <td class="td-actions text-right"> <button class="btn btn-info btn-icon btn-sm btn-simple"><a href="Landing.vue">XDDD</a></button></td>

                                </tr>
                                </tbody>
                              </table>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
export default {};
</script>
<style>
</style>
