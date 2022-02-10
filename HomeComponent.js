import React from "react";
import { Button } from "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft,faCheckSquare,faAmbulance, faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
const HomeComponent = () => {
  return (
    <div>
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="/asset/images/img4.webp"
              class="d-block w-100"
              alt="Hospital"
              height="700px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="/asset/images/img2.jpg"
              class="d-block w-100"
              alt="Hospital"
              height="700px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="/asset/images/img3.jpg"
              class="d-block w-100"
              alt="Hospital"
              height="700px"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="container py-2">
          <div className="text-center">
            <h3>
              <strong>ABOUT US</strong>
            </h3>
          </div>
          <div class="site-section cta-big-image" id="about-section">
            <div class="container">
              <div class="row mb-5"></div>
              <div class="row">
                <div class="col-lg-6 mb-5">
                  <figure class="circle-bg">
                    <img
                      src="/asset/images/gambar1.jpg"
                      alt="Image"
                      class="img-fluid"
                      height="150px"
                    />
                  </figure>
                </div>
                <div class="col-lg-5 ml-auto">
                  <div class="mb-7">
                    <h3 class="h3 mb-10 text-black">
                      <center>
                        <strong>Rumah Sakit Wava Husada</strong>
                      </center>
                    </h3>
                    <p>
                     <center>
                        Rumah Sakit Wava Husada dahulu bernama “Jang Seng Ie”
                        didirikan pada tanggal 28 Desember 1924 oleh dr Kwa
                        Tjoan Sioe dan beberapa teman sejawat serta
                        pengusaha-pengusaha Tionghoa di Jakarta dalam wadah
                        perkumpulan “Jang Seng Ie” (sekarang menjadi Rumah Sakit
                        Wava Husada).
                        </center>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="site-section bg-light" id="pricing-section">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-6 mb-4 mb-lg-0 col-lg-4">
              <div class="pricing">
                <h4 class="text-center text-black">
                  Staff Kompeten dan Terkualifikasi
                </h4>
                <FontAwesomeIcon icon={faArrowLeft}/>
                <p>
                  Rumah Sakit Wava Husada memiliki lebih dari 300 dokter umum,
                  2.000 spesialis dan 5.000 perawat serta tenaga medis lain
                </p>
              </div>
            </div>
            <div class="col-md-6 mb-4 mb-lg-0 col-lg-4">
              <div class="pricing">
                <h4 class="text-center text-black">Berpusat Kepada Pasien</h4>
                <FontAwesomeIcon icon={faAmbulance} />
                <p>
                  Mengutamakan Pelayanan yang bersifat personal dan memungkinkan
                  Anda untuk memilih paket pemeriksaan sesuia riwayat kesehatan
                  dan kebutuhan Anda
                </p>
              </div>
            </div>
            <div class="col-md-6 mb-4 mb-lg-0 col-lg-4">
              <div class="pricing">
                <h3 class="text-center text-black">Standar Internasional</h3>
                <FontAwesomeIcon fontSize={24} icon={faGlobeAmericas}/>
                <p>
                  Rumah Sakit yang progresif dan Inovatif yang telah menjadi
                  tolak ukur standar pelayanan kesehatan di Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeComponent;
