<template>
  <section class="col-auto py-5" id="projects">
    <div class="text-center">
      <img
        src="images/project.png"
        alt="Project"
        class="d-block mx-auto img-fluid project__mainImage"
      />
    </div>
    <h2 class="text-primary">#Projects</h2>
    <div class="row text-center">
      <div class="col-md-4 col-sm-6" v-for="i in projects">
        <a :href="i.link" class="project__link" target="_blank">
          <div class="card my-3 mx-1 project__card">
            <img
              :src="'images/projects/'+i.img"
              class="card-img-top project__image"
              alt="Project Image"
            />
            <div class="card-body project-cb">
              <h5 class="card-title">{{i.name}}</h5>

              <div class="d-inline" v-for="j in i.tags">
                <span class="badge badge-primary">#{{j}}</span>&nbsp;
              </div>
            </div>
          </div>
        </a>
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
          id: 1,
          name: "Aplikasi Arsip Surat",
          desc:
            "Aplikasi ini digunakan untuk mengelola surat masuk dan surat keluar dengan fitur meliputi kelola data surat masuk dan surat keluar, disposisi surat masuk, dan laporan surat.",
          img: "arsipsurat.png",
          tags: ["PHP", "CODEIGNITER", "BOOTSTRAP"],
          link: "http://e-arsip-smkdh.epizy.com",
        },
        {
          id: 2,
          name: "Aplikasi Peminjaman Ruangan Laboratorium",
          desc:
            "Aplikasi ini bertujuan untuk menampilkan informasi mengenai jadwal ruangan serta memungkinkan pengguna untuk melakukan peminjaman ruangan, data yang dapat dikelola admin yaitu kelola data ruangan, anggota, permintaan peminjaman, jadwal, dan data admin.",
          img: "siplab.png",
          tags: ["PHP", "CODEIGNITER", "BOOTSTRAP"],
          link: "#",
        },
        {
          id: 3,
          name: "Aplikasi Apotek",
          desc:
            "Aplikasi ini digunakan untuk mengelola data obat di apotek, serta pembelian dan penjualannya.",
          img: "apotek.png",
          tags: ["PHP", "CODEIGNITER", "BOOTSTRAP"],
          link: "#",
        },
        {
          id: 4,
          name: "Web Portofolio",
          desc:
            " Web Portofolio Dinamis Sederhana, portofolio ini dinamis dan pengguna dapat dengan mudah mengganti info sewaktu-waktu seperti mengubah tentang, menambah keahlian, history pendidikan, pencapaian, dll.",
          img: "portofolio.png",
          tags: ["PHP", "BOOTSTRAP"],
          link: "#",
        },
        {
          id: 5,
          name: "Sistem Informasi Pengaduan Tenaga Kerja",
          desc:
            " Sistem ini memungkinkan para pekerja memberikan keluhan kepada atasan, admin akan memberikan verifikasi jika keluhan sudah diselesaikan dan notifikasi akan sampai kepada para pekerja.",
          img: "pengaduan.png",
          tags: ["PHP", "BOOTSTRAP"],
          link: "#",
        },
        {
          id: 6,
          name: "Web Profil Rumah Sakit",
          desc:
            "Website ini dibuat untuk mengelola profile dari rumah sakit, dengan adanya fitur admin panel dapat memudahkan admin mengubah atau menambah informasi pada website sewaktu-waktu.",
          img: "rsmadani.png",
          tags: ["PHP", "CODEIGNITER", "BOOTSTRAP"],
          link: "#",
        },
        {
          id: 7,
          name: "Website Bisnis Agen Prudential",
          desc:
            "Website ini dibuat menggunakan NuxtJS, bertujuan untuk mempromosikan bisnis asuransi oleh Prudential.",
          img: "agenpru.png",
          tags: ["JAVASCRIPT", "NUXTJS"],
          link: "https://al-ikhsanprusyariah.now.sh",
        },
        {
          id: 8,
          name: "Aplikasi Sistem Inventory Barang",
          desc:
            "Aplikasi ini digunakan untuk mengelelola transaksi pemakaian dan pengembalian barang.",
          img: "inventory.png",
          tags: ["PHP", "LARAVEL", "BOOTSTRAP"],
          link: "#",
        },
        {
          id: 9,
          name: "Amazon Clone ReactJS",
          img: "amazon-clone.png",
          tags: ["JAVASCRIPT", "REACTJS"],
          link: "https://challenge-a6438.web.app/",
        },
        {
          id: 10,
          name: "Whatsapp Clone ReactJS",
          img: "whatsapp-clone.png",
          tags: ["JAVASCRIPT", "REACTJS"],
          link: "https://whatsapp-clone-marzukiberg.vercel.app/",
        },
        {
          id: 11,
          name: "Photo Filter ReactJS",
          img: "photo-filter-react.png",
          tags: ["JAVASCRIPT", "REACTJS"],
          link: "https://photo-filter-react.vercel.app/",
        },
        {
          id: 12,
          name: "Javascript Piano",
          img: "javascript-piano.png",
          tags: ["JAVASCRIPT"],
          link: "https://javascript-piano-nu.vercel.app/",
        },
        {
          id: 13,
          name: "Send to WhatsApp",
          img: "send2whatsapp.png",
          tags: ["JAVASCRIPT"],
          link: "https://send2whatsapp.now.sh/"
        }
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

<style>
.project__mainImage {
  width: 60%;
}
.project__card:hover {
  background-color: white;
  box-shadow: 0 0 5px silver;
  transition: 0.3s;
}
.project__image {
  height: 200px;
  object-fit: cover;
  object-position: center top;
}

.project__link {
  color: black;
}
.project__link:hover {
  text-decoration: none;
  color: black;
  font-weight: bolder;
}

@media (max-width: 600px) {
  .project__mainImage {
    width: 100%;
  }
}

@media (max-width: 1000px) {
  .project__mainImage {
    width: 80%;
  }
}
</style>
