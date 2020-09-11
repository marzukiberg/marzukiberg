<template>
  <section class="col-12 py-5 lax" data-lax-preset="fadeIn" id="skill">
    <div class="row">
      <div class="col-md-4 d-flex justify-content-center align-items-center">
        <img src="images/skill.png" alt="Skill" class="d-block mx-auto skill__image" />
      </div>
      <div class="col-md-8">
        <h2 class="text-primary">#Skills</h2>
        <ul>
          <li class="py-2" v-for="(i, index) in skills">
            <label>{{i.name}}</label>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                :style="{width: i.width}"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              >{{i.width}}</div>
            </div>
          </li>
          <a
            class="btn btn-primary rounded-circle skill__expandButton float-right btn-more"
            data-toggle="collapse"
            href="#collapsedskills"
            role="button"
            @click="expand()"
          >
            <i :class="`fa fa-${expanded?'minus':'plus'} fa-lg plus`"></i>
          </a>
          <div class="collapse" id="collapsedskills">
            <li class="py-2" v-for="(i, index) in moreskills">
              <label>{{i.name}}</label>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  :style="{width: i.width}"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >{{i.width}}</div>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      allskills: [
        {
          name: "HTML",
          width: "90%",
        },
        {
          name: "CSS",
          width: "75%",
        },
        {
          name: "Bootstrap",
          width: "80%",
        },
        {
          name: "PHP",
          width: "75%",
        },
        {
          name: "Javascript",
          width: "70%",
        },
        {
          name: "Codeigniter",
          width: "70%",
        },
        {
          name: "Laravel",
          width: "70%",
        },
        {
          name: "React",
          width: "50%",
        },
        {
          name: "React Native",
          width: "60%",
        },
        {
          name: "Vue",
          width: "40%",
        },
        {
          name: "Nuxt",
          width: "70%",
        },
      ],
      skills: [],
      moreskills: [],
      expanded: false,
    };
  },
  mounted() {
    this.showSkills();
  },
  methods: {
    showSkills() {
      this.skills = this.allskills.filter((i, index) => index < 7);
      this.moreskills = this.allskills.filter((i, index) => index >= 7);
    },
    expand() {
      this.expanded ? (this.expanded = false) : (this.expanded = true);
    },
  },
};
</script>

<style scoped>
ul > li {
  list-style: none;
}
.skill__expandButton {
  background-image: linear-gradient(to right, #3a7bd5, #4ca1af);
}
.skill__image {
  width: 100%;
}
.btn-more {
  height: 50px;
  width: 50px;
  margin-top: -75px;
  margin-right: 10px;
  line-height: 35px;
  transition: 0.3s;
}
.fa {
  transition: 1s;
}
.btn-more:active {
  background-image: none;
  background-color: white;
  color: #3a7bd5;
  box-shadow: 0 0 5px #3a7bd5;
}
.collapse > li {
  list-style: none;
}

@media (max-width: 600px) {
  .skill__image {
    width: 80%;
  }
}

@media (max-width: 1000px) {
  .skill__image {
    width: 80%;
  }
}
</style>