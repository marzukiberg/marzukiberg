<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  methods: {
    smoothScroll() {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
        });
      });
    },
  },
  mounted() {
    this.smoothScroll();
  },
  head: {
    title: "Welcome to my Portofolio | MARZUKI",
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap",
      },
    ],
    script: [{ src: "https://kit.fontawesome.com/79bb9df689.js" }],
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
}
</style>
