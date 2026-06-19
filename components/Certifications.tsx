"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section className="py-32" id="certifications">
      <h2 className="freescpt text-8xl text-center font-black gradient-text mb-20">
        Certifications
      </h2>

      <Swiper
        effect={"coverflow"}
        centeredSlides
        slidesPerView={"auto"}
        modules={[EffectCoverflow]}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 150,
          modifier: 2
        }}
      >
        {certifications.map((cert) => (
          <SwiperSlide
            key={cert.title}
            style={{ width: "300px" }}
          >
            <div className="glass rounded-3xl overflow-hidden">

              <img
                src={cert.image}
                alt={cert.title}
                className="
                h-48
                w-full
                object-cover
                "
              />

              <div className="p-6">

                <h3 className="font-bold text-xl">
                  {cert.title}
                </h3>

                <p className="text-slate-400 mt-2">
                  {cert.issuer}
                </p>

                <a
                  href={cert.credential}
                  target="_blank"
                  className="
                  inline-block
                  mt-5
                  px-4
                  py-2
                  rounded-xl
                  bg-cyan-500/10
                  border
                  border-cyan-500/20
                  hover:bg-cyan-500/20
                  "
                >
                  View Credential
                </a>

              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}