<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top header__nav">
      <button
        class="navbar-toggler bg-white"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand text-white" href="#">Marzuki</a>
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#education">Education</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#skill">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#certifications">Certifications</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#contacts">Contacts</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="jumbotron jumbotron-fluid mb-2 header__jumbotron">
      <div class="container d-flex flex-column text-center">
        <img src="/images/profil.jpg" alt class="img-circle mx-auto d-block header__jumbotronImage" />
        <h1 class="text-white">Marzuki</h1>
        <h5 class="text-white" style="font-weight: 300;">Web Developer</h5>
        <br />
      </div>
    </div>
  </header>
</template>

<style scoped>
.header__nav {
  background-image: linear-gradient(to right, #3a7bd5, #4ca1af);
}
.header__jumbotron {
  padding-top: 100px;
  background-image: linear-gradient(to right, #3a7bd5, #4ca1af);
}
.header__jumbotronImage {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
</style>