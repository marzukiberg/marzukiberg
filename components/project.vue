<template>
  <section class="col-auto py-5 lax" data-lax-preset="fadeIn" id="projects">
    <div class="text-center">
      <img src="images/project.png" alt="Project" class="d-block mx-auto project-img" />
    </div>
    <h2 class="text-primary">#Projects</h2>
    <div class="row text-center">
      <div class="col-md-4 col-sm-12" v-for="i in projects">
        <div class="card my-3 mx-1 myhover">
          <img :src="'images/'+i.img" class="card-img-top project-image" alt="Project Image" />
          <div class="card-body project-cb">
            <h5 class="card-title">{{i.name}}</h5>
            <p :class="'card-text text-justify '+projectdesc" @click="expandDesc()">{{i.desc}}</p>
            <div class="d-inline" v-for="j in i.tags">
              <span class="badge badge-primary">#{{j}}</span>&nbsp;
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script type="text/javascript" charset="utf-8">
export default {
  data() {
    return {
      projects: [
        {
          name: "Aplikasi Arsip Surat",
          desc:
            "Aplikasi ini digunakan untuk mengelola surat masuk dan surat keluar dengan fitur meliputi kelola data surat masuk dan surat keluar, disposisi surat masuk, dan laporan surat.",
          img: "arsipsurat.png",
          tags: ["PHP", "CODEIGNITER", "BOOTSTRAP"],
        },
        {
          name: "Aplikasi Peminjaman Ruangan Laboratorium",
          desc:
            "Aplikasi ini bertujuan untuk menampilkan informasi mengenai jadwal ruangan serta memungkinkan pengguna untuk melakukan peminjaman ruangan, data yang dapat dikelola admin yaitu kelola data ruangan, anggota, permintaan peminjaman, jadwal, dan data admin.",
          img: "siplab.png",
          tags: ["PHP", "CODEIGNITER", "BOOTSTRAP"],
        },
        {
          name: "Aplikasi Apotek",
          desc:
            "Aplikasi ini digunakan untuk mengelola data obat di apotek, serta pembelian dan penjualannya.",
          img: "apotek.png",
          tags: ["PHP", "CODEIGNITER", "BOOTSTRAP"],
        },
        {
          name: "Web Portofolio",
          desc:
            " Web Portofolio Dinamis Sederhana, portofolio ini dinamis dan pengguna dapat dengan mudah mengganti info sewaktu-waktu seperti mengubah tentang, menambah keahlian, history pendidikan, pencapaian, dll.",
          img: "portofolio.png",
          tags: ["PHP", "BOOTSTRAP"],
        },
        {
          name: "Sistem Informasi Pengaduan Tenaga Kerja",
          desc:
            " Sistem ini memungkinkan para pekerja memberikan keluhan kepada atasan, admin akan memberikan verifikasi jika keluhan sudah diselesaikan dan notifikasi akan sampai kepada para pekerja.",
          img: "pengaduan.png",
          tags: ["PHP", "BOOTSTRAP"],
        },
        {
          name: "Web Profil Rumah Sakit",
          desc:
            "Website ini dibuat untuk mengelola profile dari rumah sakit, dengan adanya fitur admin panel dapat memudahkan admin mengubah atau menambah informasi pada website sewaktu-waktu.",
          img: "rsmadani.png",
          tags: ["PHP", "CODEIGNITER", "BOOTSTRAP"],
        },
        {
          name: "Website Bisnis Agen Prudential",
          desc:
            "Website ini dibuat menggunakan NuxtJS, bertujuan untuk mempromosikan bisnis asuransi oleh Prudential.",
          img: "agenpru.png",
          tags: ["JAVASCRIPT", "NUXTJS"],
        },
      ],
      projectdesc: "project-desc",
    };
  },
  methods: {
    expandDesc() {
      if (this.projectdesc == "project-desc") {
        this.projectdesc = "";
      } else {
        this.projectdesc = "project-desc";
      }
    },
  },
};
</script>