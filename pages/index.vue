<template>
  <div>
    <Header />

    <div class="container wow">
      <div class="row">
        <About />

        <Education />

        <Skill />

        <Certification />

        <Project />

        <Contact />
      </div>
    </div>

    <footer class="footer gradient py-4">
      <div class="text-center">
        <h4 class="text-center text-white">MARZUKI</h4>
      </div>
    </footer>
  </div>
</template>

<script>
import Header from "~/components/header";
import About from "~/components/about";
import Education from "~/components/education";
import Skill from "~/components/skill";
import Certification from "~/components/certification";
import Project from "~/components/project";
import Contact from "~/components/contact";

export default {
  components: {
    Header,
    About,
    Education,
    Skill,
    Certification,
    Project,
    Contact,
  },
};
</script>