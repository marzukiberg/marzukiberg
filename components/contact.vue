<template>
  <section class="col-auto py-5 lax" data-lax-preset="fadeIn" id="contacts">
    <div class="text-center">
      <img src="images/contacts.png" alt="Project" class=" d-block mx-auto project-img">
    </div>
    <h2 class="text-primary">#Contacts</h2>
    <div class="row text-center">
      <div class="col-md-6 col-lg-6 col-xl-6 col-sm-12">
        <div class="form-group my-5 text-center">
          <label for="emailme" class="font-weight-bold">EMAIL ME</label>
          <input type="text" id="emailme" :class="`form-control rounded-pill mt-3 ${ invalid && message === '' ? 'is-invalid' : '' }`" placeholder="Write your message..." v-model="message" style="height: 50px">
          <button class="btn btn-primary rounded-pill gradient mt-3 btn-block send-email" id="send-email" @click="sendEmail()" style="height: 50px">Send</button>
        </div>
      </div>
      <div class="col-md-6 col-lg-6 col-xl-6 col-sm-12">
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
        contacts: [{
          title: "Google Mail",
          icon: "envelope",
          link: "mailto:marzukiberg@gmail.com"
        },
          {
            title: "Facebook",
            icon: "facebook",
            link: "https://facebook.com/marzukey.ukey.9"
          },
          {
            title: "Instagram",
            icon: "instagram",
            link: "https://instagram.com/uki_fingerstyle"
          },
          {
            title: "WhatsApp",
            icon: "whatsapp",
            link: "https://api.whatsapp.com/send?phone=+6282286062083"
          },
          {
            title: "Github",
            icon: "github",
            link: "https://github.com/marzukiberg"
          },
          {
            title: "Linked In",
            icon: "linkedin",
            link: "https://www.linkedin.com/in/marzuki-uki-12960a184"
          },
        ],
        message: "",
        invalid: false
      }
    },
    methods: {
      sendEmail() {
        if (this.message === "") {
          this.invalid = true
          console.log("Please write something")
        } else {
          window.location.href = "mailto:marzukiberg@gmail.com?subject=Hiring&&body="+this.message
        }
      }
    }
  }
  </script>