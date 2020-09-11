<template>
  <section class="col-12 py-5" id="certifications">
    <div class="row">
      <div class="col-md-4 d-flex justify-content-center align-items-center">
        <img
          src="images/certificate.png"
          alt="Certification"
          class="d-block mx-auto certification__image"
        />
      </div>
      <div class="col-md-8">
        <h2 class="text-primary">#Certifications</h2>

        <ul class="list-group">
          <li class="list-group-item myhover" v-for="i in certifications">
            <h5 class="card-title">{{i.name}}</h5>
            <span class="text-muted">Penyedia</span>
            : {{i.penyedia}}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      certifications: [
        {
          name: "UX Designer: Digital Product Development",
          penyedia: "SkillAcademy",
        },
        {
          name: "Dasar Pemrograman Web",
          penyedia: "Dicoding Academy",
        },
        {
          name: "Belajar Fundamental Front-End Web Development",
          penyedia: "Dicoding Academy",
        },
        {
          name: "React Native Mobile Apps Development",
          penyedia: "SanberCode",
        },
        {
          name: "React Native Redux and Hooks Course",
          penyedia: "Udemy",
        },
      ],
    };
  },
};
</script>


<style>
.certification__image {
  width: 100%;
}

@media (max-width: 600px) {
  .certification__image {
    width: 80%;
  }
}

@media (max-width: 1000px) {
  .certification__image {
    width: 80%;
  }
}
</style>