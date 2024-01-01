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

<style lang="sass">
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