<template>
  <section class="section section-shaped section-lg my-0">
    <div class="shape shape-style-1 bg-gradient-default">
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
    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <card type="secondary" shadow
                header-classes="bg-white pb-2"
                body-classes="px-lg-12 py-lg-5"
                class="border-0">

            <template>
              <!--FORM -->
              <form role="form" v-model="form">

                <!--                            NAME AND SURNAME-->

                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="name" id="name">Imie</label>
                      <input type="text"
                             v-model="form.name"
                             class="form-control"
                             id="name"
                             placeholder="Imie"/>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="surname" id="surname">Nazwisko</label>
                      <input type="text"
                             v-model="form.surname"

                             placeholder="Nazwisko"
                             id="surname"
                             class="form-control"/>
                    </div>
                  </div>
                </div>


                <div class="row">
                  <span>&nbsp;</span>
                </div>
                <!--LOGIN AND PASSWORD-->

                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="login" id="name">Login</label>
                      <input type="text"
                             v-model="form.login"

                             class="form-control"
                             id="login"
                             placeholder="Login">
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="password" id="password">Haslo</label>
                      <input type="password"
                             v-model="form.password"

                             placeholder="Haslo"
                             id="password"
                             class="form-control"/>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="password2" id="password2">Haslo</label>
                      <input type="password"
                             v-model="form.password2"
                             placeholder="Powtorz haslo"
                             id="password2"
                             class="form-control"/>
                    </div>
                  </div>
                </div>


                <div class="row">
                  <span>&nbsp;</span>
                </div>
                <!--                            EMAIL AND PHONE-->
                <div class="row">
                  <div class="col-md-8">
                    <div class="form-group">
                      <label for="email" id="email">Email</label>
                      <input type="email"
                             v-model="form.email"
                             class="form-control"
                             id="email"
                             placeholder="name@example.com">
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="phone" id="email">Numer telefonu</label>
                      <input type="number"
                             placeholder="Telefon"
                             id="phone"
                             v-model="form.phone"
                             class="form-control"/>
                    </div>
                  </div>
                </div>


                <div class="row">
                  <span>&nbsp;</span>
                </div>
                <!--                            ADDRESS AND CITY-->
                <div class="row">
                  <div class="col-md-5">
                    <div class="form-group">
                      <label for="address" id="address">Miejscowosc</label>
                      <input

                          type="text"
                          class="form-control"
                          v-model="form.city"
                          id="address"
                          placeholder="Miejscowosc">
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="form-group">
                      <label for="street" id="street">Ulica</label>
                      <input type="text"
                             placeholder="Ulica"
                             v-model="form.street"
                             id="street"
                             class="form-control"/>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="form-group">
                      <label for="zip" id="zip">Kod pocztowy</label>
                      <input
                          id="zip"
                          v-model="form.zip"
                          type="text"
                          pattern="[0-9]{5}"
                          placeholder="XX-XXX"
                          class="form-control"/>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <span>&nbsp;</span>
                </div>
                <!--                              BANK DATA-->
                <div class="row">
                  <div class="col-md-9">
                    <div class="form-group">
                      <label for="bankNumber" id="bankNumber">Rachunek bankowy</label>
                      <input type="number"
                             v-model="form.bankNumber"
                             class="form-control"
                             id="bankNumber"
                             placeholder="XXXXXXXXXXXXXXXXXXXXXXXXXX">
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group">
                      <label for="bankNumber" id="bankName">Nazwa banku</label>
                      <select class="custom-select" v-model="form.bankName">
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-default" @click="onSubmit">Default</button>
                </div>


              </form>
            </template>
          </card>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        name: '',
        surname: '',
        login: '',
        password: '',
        password2: '',
        email: '',
        phone: '',
        address: '',
        street: '',
        zip: '',
        bankNumber: '',
        bankName: '',
        city: ''
      },
      message: ''
    }
  },
  methods: {
    onSubmit() {
this.createAddress();
      axios.post('http://localhost:8080/api/clients/register', this.form)
          .then(response => {
            this.message = response.data.message;
            console.log(response)
            this.sendMail(response.data);

          })
          .catch(error => {
            this.message = error.response.data.message;
          });
    },

    sendMail(userID) {
      axios.post('http://localhost:8080/sendMail', {
        id: userID,
        subject: "Link aktywacyjny",
        template: "activeAccountMailTemplate",
        mailRecipient: this.form.email
      })
          .then(response => {
            console.log(response)

          })
          .catch(error => {
            this.message = error.response.data.message;
          });
    },

    createAddress(){

     let a =
       this.form.city + " " +
     this.form.street + " " +
        this.form.zip

     this.form.address = a;

      console.log(a);
    }


  }

};
</script>
<style>
</style>
