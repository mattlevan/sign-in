<template>
  <div class="container">
    <h4>Admin</h4>
    <div v-if="!admin">
      <div class="form-group">
        <label for="password">Admin password: </label>
        <input class="form-control" id="password" type="password" v-model="password"
               @keyup.enter="signIn">
      </div>
      <button type="button" v-on:click="signIn" class="btn btn-primary">Submit</button>
    </div>
    <table v-if="admin" class="table table-hover">
      <thead>
        <tr>
          <th id="name">Name</th>
          <th id="email">Email</th>
          <th id="telephone">Telephone</th>
          <th id="company">Company</th>
          <th id="officialVisit">Official Visit</th>
          <th id="escortRequired">Escort Required</th>
          <th id="escortName">Escort Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="visitor of visitors">
          <td>{{ visitor.name }}</td>
          <td>{{ visitor.email }}</td>
          <td>{{ visitor.telephone }}</td>
          <td>{{ visitor.company }}</td>
          <td>{{ visitor.officialVisit }}</td>
          <td>{{ visitor.escortRequired }}</td>
          <td>{{ visitor.escortName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'SignIn',
  data() {
    return {
      admin: false,
      retrieved: false,
      password: '',
      visitors: {},
    };
  },
  methods: {
    signIn() {
      if (this.password === 'admin') {
        alert('Hello, admin.');
        this.admin = true;
      } else {
        alert('Wrong password!');
      }
    },
    getVisitors() {
      if (this.admin === true && this.retrieved === false) {
        axios.get('/api/visitors')
        .then((res) => {
          this.visitors = res.data;
          this.retrieved = true;
        })
        .catch((err) => {
          console.log(err);
        });
      }
    },
  },
  updated() {
    this.getVisitors();
  },
};
</script>
