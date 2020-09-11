<template>
  <section class="col-12 py-5" id="education">
    <div class="row">
      <div class="col-md-4 d-flex justify-content-center align-items-center">
        <img src="images/education.png" alt="Education" class="d-block mx-auto education__image" />
      </div>
      <div class="col-md-8">
        <h2 class="text-primary">#Education</h2>
        <ul class="list-group">
          <li class="list-group-item education__list" v-for="i in educations">
            <span :class="`badge badge-${i.finish==='Sekarang'?'primary':'success'}`">{{i.start}}</span> -
            <span :class="`badge badge-${i.finish==='Sekarang'?'primary':'success'}`">{{i.finish}}</span>
            <h3>{{i.name}}</h3>
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
      educations: [
        {
          name: "UIN SUSKA RIAU",
          start: "2017",
          finish: "Sekarang",
        },
        {
          name: "SMA Negeri 3 Tanah Putih",
          start: "2014",
          finish: "2017",
        },
        {
          name: "MTs Al-Istiqomah Tanah Putih",
          start: "2011",
          finish: "2014",
        },
        {
          name: "SDN 022 Tanah Putih",
          start: "2005",
          finish: "2011",
        },
      ],
    };
  },
};
</script>

<style>
.education__list:hover {
  background-color: white;
  box-shadow: 0 0 5px silver;
  transition: 0.3s;
}
.education__image {
  width: 100%;
}

@media (max-width: 600px) {
  .education__image {
    width: 80%;
  }
}

@media (max-width: 1000px) {
  .education__image {
    width: 80%;
  }
}
</style>