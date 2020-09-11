<template>
  <section class="col-12 py-5 lax" data-lax-preset="fadeIn" id="about">
    <div class="row no-gutters">
      <div class="col-md-4 d-flex justify-content-center align-items-center">
        <img src="images/about.png" alt="About" class="d-block mx-auto about__image" />
      </div>
      <div class="col-md-8">
        <h2 class="text-primary">#About</h2>
        <p class="text-justify">
          Halo! saya Marzuki, biasa dipanggil Uki.
          <br />Saya seorang Web dan Mobile Developer. Saya menguasai bahasa pemrograman PHP dan Javascript, saya juga mampu menggunakan dengan baik framework-framework seperti Codeigniter, Laravel, ReactJS, React Native, NuxtJS, dan NodeJS.
        </p>

        <button class="btn btn-flat btn-primary about__button">Hire Me!</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__button {
  background-image: linear-gradient(to right, #3a7bd5, #4ca1af);
}
.about__button:hover {
  background-color: white;
  background-image: none;
  border: 1px solid #3a7bd5;
  box-shadow: 0 0 5px linear-gradient(to right, #3a7bd5, #4ca1af);
  color: #3a7bd5;
}
.about__image {
  width: 100%;
}

@media (max-width: 600px) {
  .about__image {
    width: 80%;
  }
}

@media (max-width: 1000px) {
  .about__image {
    width: 80%;
  }
}
</style>