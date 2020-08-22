<template>
  <section class="col-12 py-5 lax" data-lax-preset="fadeIn" id="certifications">
    <div class="row">
      <div class="col-md-4 d-flex justify-content-center align-items-center">
        <img
          src="images/certificate.png"
          alt="Certification"
          class="img-fluid d-block mx-auto w-100"
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