<template>
  <section class="text-center text-lg-start">
    <div class="container py-4">
      <div class="row g-0 align-items-center">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <div
            class="card cascading-right"
            style="
              background: hsla(0, 0%, 100%, 0.55);
              backdrop-filter: blur(30px);
            "
          >
            <div class="card-body py-3 shadow-5 text-center">
              <h2 class="fw-bold mb-5">Sign up now</h2>
              <form @submit.prevent="createUser()">
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input
                        type="text"
                        id="name"
                        class="form-control"
                        v-model="formData.name"
                      />
                      <label class="form-label" for="name">First name</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input
                        type="text"
                        id="last-name"
                        class="form-control"
                        v-model="formData.lastname"
                      />
                      <label class="form-label" for="last-name"
                        >Last name</label
                      >
                    </div>
                  </div>
                </div>

                <!-- Email input -->
                <div class="form-outline mb-4">
                  <input
                    type="email"
                    id="email"
                    class="form-control"
                    v-model="formData.email"
                  />
                  <label class="form-label" for="email">Email address</label>
                </div>

                <!-- Email input -->
                <div class="form-outline mb-4">
                  <input
                    type="text"
                    id="username"
                    class="form-control"
                    v-model="formData.username"
                  />
                  <label class="form-label" for="username">Username</label>
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="password"
                    class="form-control"
                    v-model="formData.password"
                  />
                  <label class="form-label" for="password">Password</label>
                </div>

                <!-- Checkbox -->
                <div class="form-check d-flex justify-content-center mb-4">
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example33"
                    checked
                  />
                  <label class="form-check-label" for="form2Example33">
                    Subscribe to our newsletter
                  </label>
                </div>

                <!-- Submit button -->
                <button type="submit" class="btn btn-primary btn-block mb-4">
                  Sign up
                </button>

                <!-- Register buttons -->
                <div class="text-center">
                  <p>or sign up with:</p>
                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-facebook-f"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-google"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-twitter"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-github"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="col-lg-6 mb-5 mb-lg-0">
          <img
            :src="
              '//images.ctfassets.net/' +
              VUE_APP_CONTENTFUL_SPACE_ID +
              '/3ODaI8aEWKA2UuGd0D3gwJ/dee2b3b7253721a3c35996df0c5fccef/login.jpg'
            "
            loading="lazy"
            class="w-100 rounded-4 shadow-4"
            alt="Dungeons & Dragons"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      VUE_APP_CONTENTFUL_SPACE_ID: process.env.VUE_APP_CONTENTFUL_SPACE_ID,
      formData: {
        name: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
      },
    };
  },
  methods: {
    createUser() {
      this.axios
        .post("http://localhost:3000/auth/signup", this.formData)
        .then((response) => {
          const {access_token} = response.data;
          this.$store.commit("setToken", access_token);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped lang="scss">
.text-center.text-lg-start {
  height: 100vh;
  width: 100vw;
}
.cascading-right {
  margin-right: -50px;
}

@media (max-width: 991.98px) {
  .cascading-right {
    margin-right: 0;
  }
}
</style>