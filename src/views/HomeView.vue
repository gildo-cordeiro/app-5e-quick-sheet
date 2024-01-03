<template>
  <div class="row-head">
    <div class="col-md-12">
      <div class="css-page">
        <div class="justify-content container-fluid">
          <div class="header__logo">
            <img
              :src="
                '//images.ctfassets.net/' +
                VUE_APP_CONTENTFUL_SPACE_ID +
                '/6E1XPUSVDBXYCkcPstuu5k/56f048ac3f5cf754459a344e002ef486/dnd_logo.png'
              "
              loading="lazy"
              class="css-BsIZM"
              alt="Dungeons & Dragons"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <div class="container backgound-container"  
          :style="{ backgroundImage: 'url(//images.ctfassets.net/' 
          + VUE_APP_CONTENTFUL_SPACE_ID 
          + '/2eqUnr6jP4h5SSLfNknavp/ad3cf93b86306525da3936d84ee8adca/home_page_01.jpg)'}">

          <div class="info-text col-md-5 col-sm-12">
            <h2>Iniciando no mundo de Dungeons & Dragons?</h2>
            <p>O jogo de interpretação Dungeons & Dragons é sobre contar histórias em mundos de espada e feitiçaria.</p>
            <p>Como jogos de faz de conta, D&D é conduzido pela imaginação.</p>
            <p>É sobre visualizar um castelo em ruínas em uma floresta escura e imaginar como um aventureiro fantástico pode reagir aos desafios que a cena apresenta.</p>
          </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      dada
      <font-awesome-icon :icon="['fas', 'play']" />

    </div>

  </div>
  <footer class="text-center text-lg-start bg-body-tertiary text-muted">
    <!-- Section: Social media -->
    <section
      class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
    >
      <!-- Left -->
      <div class="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      <!-- Left -->

      <!-- Right -->
      <div>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-google"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-github"></i>
        </a>
      </div>
      <!-- Right -->
    </section>
    <!-- Section: Social media -->

    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-gem me-3"></i>Company name
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Products</h6>
            <p>
              <a href="#!" class="text-reset">Angular</a>
            </p>
            <p>
              <a href="#!" class="text-reset">React</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Vue</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Laravel</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <a href="#!" class="text-reset">Pricing</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Settings</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Orders</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Help</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
            <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
            <p>
              <i class="fas fa-envelope me-3"></i>
              info@example.com
            </p>
            <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
            <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05)">
      © 2021 Copyright:
      <a class="text-reset fw-bold" href="https://mdbootstrap.com/"
        >MDBootstrap.com</a
      >
    </div>
    <!-- Copyright -->
  </footer>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      VUE_APP_CONTENTFUL_SPACE_ID: process.env.VUE_APP_CONTENTFUL_SPACE_ID,
    };
  },
};
</script>

<style scoped lang="sass">
  .row-head
    background-color: #000
    padding: 20px 0
    border-bottom: 3px solid #a98743

  .row-head
    background-color: #000
    padding: 20px 0
    border-bottom: 3px solid #a98743

  .header
    padding: 0 10px
    max-width: 1220px
    margin: auto

  .header__logo
    margin: 20px 0
    display: flex
    align-items: center
    justify-content: center

  .header__logo img
    width: 100%
    max-width: 150px
    height: auto

  .backgound-container
    margin-top: 1%
    background-size: cover
    background-position: center    
    height: 600px

  .info-text
    text-align: left
    color: #fff
    padding: 20px
    background-color: rgba(0,0,0,0.5)
    height: 100%
  
  .info-text h2
    margin-top: 20px
    font-size: 2.5rem
    font-weight: 700
    margin-bottom: 20px
  
  .info-text p
    font-size: 1.5rem
    font-weight: 400
    margin-bottom: 20px

  .info-text p, h2
    text-shadow: 2px 2px 4px rgba(255, 0, 0, 0.5)

  @media screen and (max-width: 768px)
    .info-text
      text-align: center
      padding: 20px
      background-color: rgba(0,0,0,0.5)
      margin-top: 20px

    .info-text h2
      margin-top: 20px
      font-size: 2rem
      font-weight: 700
      margin-bottom: 20px

    .info-text p
      font-size: 1.2rem
      font-weight: 400
      margin-bottom: 20px

    .info-text p, h2
      text-shadow: 2px 2px 4px rgba(255, 0, 0, 0.5) 

</style>