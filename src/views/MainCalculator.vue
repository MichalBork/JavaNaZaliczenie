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
            <v-app>
              <v-container>
                <v-row>
                  <v-col cols="10" md="12" lg="9" xl="6" class="bg--light mx-auto">
                    <h1 class="text-center mb-4">Currency Converter</h1>
                    <v-row justify="space-between" no-gutters>
                      <v-col cols="12" md="5">
                        <v-row no-gutters>
                          <v-col class="px-1" cols="3">
                            <v-select @change="convert" v-model="selected[0]" :items="countries" label="I have"></v-select>
                          </v-col>

                          <v-col class="px-1" cols="9">
                            <v-text-field @input="convert" v-model="inputed" :rules="[rules.onlyNumbers]"></v-text-field>
                          </v-col>
                        </v-row>
                      </v-col>

                      <v-col cols="2" offset="5" offset-md="0" class="d-flex justify-center align-center">
                        <img class="exchange" :src="require('./assets/icons/exchange.png')" alt="Exchange">
                      </v-col>

                      <v-col cols="12" md="5">
                        <v-row no-gutters>
                          <v-col class="px-1" cols="9">
                            <v-text-field v-model="result" type="number" readonly></v-text-field>
                          </v-col>

                          <v-col class="px-1" cols="3">
                            <v-select @change="convert" v-model="selected[1]" :items="countries" label="I want to buy"></v-select>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>
            </v-app>
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
