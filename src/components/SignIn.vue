<template>
  <div class="container">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" class="form-control" name="name" id="name"
               v-model="name">
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" class="form-control" name="email" id="email"
               v-model="email">
      </div>
      <div class="form-group">
        <label for="telephone">Telephone:</label>
        <input type="tel" class="form-control" name="telephone" id="telephone"
               v-model="telephone">
      </div>
      <div class="form-group">
        <label for="company">Company:</label>
        <input type="text" class="form-control" name="company" id="company"
               v-model="company">
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input type="checkbox" class="form-check-input" name="officialVisit"
                 v-model="officialVisit">
           Official visit
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input type="checkbox" class="form-check-input" name="escortRequired" 
                 v-model="escortRequired">
           Escort required
        </label>
      </div>
      <div class="form-group" v-if="escortRequired">
        <label for="escortName">Escort name:</label>
        <input type="text" class="form-control" name="escortName" id="escortName"
               v-model="escortName">
      </div>
      <button class="btn btn-primary" type="button" v-on:click="signIn">
        Sign In
      </button>
  </div>
</template>

<script>
const axios = require('axios');

function getInitialData() {
  return {
    name: '',
    email: '',
    telephone: '',
    company: '',
    officialVisit: false,
    escortRequired: false,
    escortName: '',
  };
}

export default {
  name: 'SignIn',
  data() {
    return getInitialData();
  },
  methods: {
    signIn() {
      const newVisitor = {
        name: this.name,
        email: this.email,
        telephone: this.telephone,
        company: this.company,
        officialVisit: this.officialVisit,
        escortRequired: this.escortRequired,
        escortName: this.escortName,
      };
      axios.post('/api/sign-in', newVisitor)
      .then((res) => {
        if (res.status === 200) {
          alert('Signed in!');
          this.$router.go('/');
        } else {
          alert('Failed.');
          this.$router.go('/');
        }
      })
      .catch((err) => {
        console.log(err);
      });
    },
  },
  created() {
    let self = this;
    window.addEventListener('keypress', function (e) {
      const key = e.which || e.keyCode;
      if (key === 13) {
        self.signIn();
      }
    });
  },
};
</script>
