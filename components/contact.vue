<template>
  <section class="col-12 py-5">
    <div class="text-center">
      <img src="/images/contacts.png" alt="Contact Image" class="d-block mx-auto contact__image" />
    </div>
    <h2 class="text-primary">#Contacts</h2>
    <div class="row text-center">
      <div class="col-md-6 col-sm-12">
        <div class="form-group my-5 text-center">
          <label for="emailme" class="font-weight-bold">EMAIL ME</label>
          <input
            type="text"
            id="emailme"
            :class="`form-control rounded-pill mt-3 ${ invalid && message === '' ? 'is-invalid' : '' }`"
            placeholder="Write your message..."
            v-model="message"
            style="height: 50px"
          />
          <button
            class="btn btn-primary rounded-pill contact__buttonSend mt-3 btn-block send-email"
            id="send-email"
            @click="sendEmail()"
            style="height: 50px"
          >Send</button>
        </div>
      </div>
      <div class="col-md-6 col-sm-12">
        <div class="my-5">
          <label for="other" class="font-weight-bold">OTHER</label>
          <ul class="d-flex justify-content-between flex-wrap mt-3" id="other">
            <li class="mb-3" style="flex-basis: 33%;" v-for="i in contacts">
              <a :href="i.link" class="social-icon d-inline-block tx" :title="i.title">
                <i :class="`fa fa-${i.icon} fa-lg`"></i>
              </a>
              <br />
              {{i.title}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          title: "Google Mail",
          icon: "envelope",
          link: "mailto:marzukiberg@gmail.com",
        },
        {
          title: "Facebook",
          icon: "facebook",
          link: "https://facebook.com/marzukey.ukey.9",
        },
        {
          title: "Instagram",
          icon: "instagram",
          link: "https://instagram.com/marzukiberg.js",
        },
        {
          title: "WhatsApp",
          icon: "whatsapp",
          link: "https://api.whatsapp.com/send?phone=+6282286062083",
        },
        {
          title: "Github",
          icon: "github",
          link: "https://github.com/marzukiberg",
        },
        {
          title: "Linked In",
          icon: "linkedin",
          link: "https://www.linkedin.com/in/marzuki-uki-12960a184",
        },
      ],
      message: "",
      invalid: false,
    };
  },
  methods: {
    sendEmail() {
      if (this.message === "") {
        this.invalid = true;
        console.log("Please write something");
      } else {
        window.location.href =
          "mailto:marzukiberg@gmail.com?subject=Hiring&&body=" + this.message;
      }
    },
  },
};
</script>

<style>
ul > li {
  list-style: none;
}

.contact__image {
  width: 60%;
}
.contact__buttonSend {
  background-image: linear-gradient(to right, #3a7bd5, #4ca1af);
}
.contact__buttonSend:hover {
  background-color: white;
  background-image: none;
  border: 1px solid #3a7bd5;
  box-shadow: 0 0 5px linear-gradient(to right, #3a7bd5, #4ca1af);
  color: #3a7bd5;
}
.social-icon {
  color: white;
  height: 50px;
  width: 50px;
  /*background-color: white;*/
  background-image: linear-gradient(to right, #3a7bd5, #4ca1af);
  box-shadow: 0 0 5px #3a7bd5;
  border-radius: 50%;
  line-height: 50px;
  transition: 0.3s;
}

.social-icon:hover {
  background-color: white;
  background-image: none;
  border: 1px solid #3a7bd5;
  box-shadow: 0 0 5px linear-gradient(to right, #3a7bd5, #4ca1af);
  color: #3a7bd5;
}

@media (max-width: 600px) {
  .contact__image {
    width: 100%;
  }
}

@media (max-width: 1000px) {
  .contact__image {
    width: 80%;
  }
}
</style>