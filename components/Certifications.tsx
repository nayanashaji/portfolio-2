"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="
      py-32
      px-6
      max-w-7xl
      mx-auto
      relative
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        inset-0
        pointer-events-none
        "
      >
        <div
          className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[500px]
          h-[500px]
          rounded-full
          bg-violet-500/10
          blur-[150px]
          "
        />
      </div>

      <div className="relative z-10">

        {/* Heading */}

        <div className="text-center mb-16">

          <p
            className="
            text-cyan-400
            uppercase
            tracking-[0.4em]
            text-sm
            "
          >
            Learning & Growth
          </p>

          <h2
            className="
            freescpt
            text-6xl
            md:text-8xl
            mt-4
            "
          >
            My{" "}
            <span className="gradient-text">
              Certifications
            </span>
          </h2>

          <p
            className="
            text-slate-400
            mt-4
            max-w-2xl
            mx-auto
            "
          >
            Certifications, courses and learning
            experiences that strengthened my
            skills across software development,
            AI and emerging technologies.
          </p>

          <div
            className="
            mt-6
            inline-flex
            glass
            px-5
            py-2
            rounded-full
            "
          >
            <span className="gradient-text font-bold">
              {certifications.length}
            </span>

            <span className="ml-2 text-slate-300">
              Certifications
            </span>
          </div>
        </div>

        {/* Carousel */}

        <Swiper
          effect="coverflow"
          centeredSlides
          loop
          grabCursor
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[
            EffectCoverflow,
            Pagination,
            Autoplay,
          ]}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 180,
            modifier: 2,
            scale: 0.9,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.1,
            },

            768: {
              slidesPerView: 1.8,
            },

            1200: {
              slidesPerView: 2.5,
            },
          }}
        >
          {certifications.map((cert) => (
            <SwiperSlide
              key={cert.title}
              className="pb-14"
            >
              <div
                className="
                glass
                rounded-[32px]
                overflow-hidden
                border
                border-white/10
                hover:border-cyan-400/30
                hover:shadow-[0_0_40px_rgba(0,245,212,0.15)]
                transition-all
                duration-500
                group
                "
              >
                {/* Image */}

                <div className="relative overflow-hidden">

                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="
                    h-56
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                    "
                  />

                  <div
                    className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-transparent
                    to-transparent
                    "
                  />
                </div>

                {/* Content */}

                <div className="p-6">

                  <h3
                    className="
                    text-xl
                    font-bold
                    gradient-text
                    "
                  >
                    {cert.title}
                  </h3>

                  <p
                    className="
                    text-slate-400
                    mt-3
                    "
                  >
                    {cert.issuer}
                  </p>

                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      mt-6
                      px-5
                      py-3
                      rounded-xl
                      bg-gradient-to-r
                      from-cyan-400
                      via-violet-500
                      to-pink-500
                      hover:scale-105
                      transition
                    "
                  >
                    View Credential
                  </a>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
