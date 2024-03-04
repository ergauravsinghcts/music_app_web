<template>
  <q-page-container class="form-page">
    <!-- login page component -->

    <div class="q-pa-md" style="max-width: 400px">
      <h5>Create an account</h5>
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="name"
          label="Email address"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Please enter a valid email',
          ]"
        />

        <q-input
          filled
          type="password"
          v-model="password"
          label="Password"
          lazy-rules
          :rules="[
            (val) =>
              (val !== null && val !== '') || 'Please type your password',
          ]"
        />

        <!-- Name input field -->
        <q-input
          filled
          v-model="username"
          label="Name"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Please enter a valid name',
          ]"
        />
        <!-- Mobile input field -->
        <q-input
          filled
          v-model="mobile"
          label="Mobile"
          lazy-rules
          :rules="[
            (val) =>
              (val && val.length > 0) || 'Please enter a valid mobile number',
          ]"
        />
         <!-- show inline form submit success message here -->
      <span v-if="submitted" style="color: green">User registered successfully</span>

        <div>
          <q-btn label="Register" type="submit" color="red" />
          <q-btn flat class="q-ml-sm" color="red">
            <router-link to="/login" style="color: red"
              >Back to Login</router-link
            >
          </q-btn>
        </div>
      </q-form>
    </div>
  </q-page-container>
</template>

<script>
import { ref } from "vue";
// import axios
import axios from "axios";

export default {
  setup() {
    // name, password,
    const name = ref("");
    const password = ref("");
    const username = ref("");
    const mobile = ref("");
    const submitted = ref(false);

    // onSubmit
    const onSubmit = async () => {
        // use http://localhost:8090/api/gaana/user/register  using axios to register the user
       const response =  await axios.post("http://localhost:8090/api/gaana/user/register", {
          emailId: name.value,
          password: password.value,
          userName: username.value,
          mobile: mobile.value,
        });

      console.log(
        "Submitted",
        response
      );
        submitted.value = true;
        onReset();
    };

    // onReset
    const onReset = () => {
      name.value = "";
      password.value = "";
      username.value = "";
      mobile.value = "";
    };

    return {
      name,
      password,
      username,
      mobile,
      onSubmit,
      onReset,
        submitted,
    };
  },
};
</script>
<style scoped>
.form-page {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
  width: 100%;
}
</style>
