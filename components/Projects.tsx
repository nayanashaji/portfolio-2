"use client";

import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import {
  HiArrowLeft,
  HiArrowRight,
} from "react-icons/hi";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Projects() {
  return (
    <section
      id="projects"
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
          w-[600px]
          h-[600px]
          rounded-full
          bg-cyan-500/10
          blur-[180px]
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
            Featured Work
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
              Projects
            </span>
          </h2>

          <p
            className="
            text-slate-400
            max-w-2xl
            mx-auto
            mt-4
            "
          >
            A collection of projects spanning
            AI, accessibility, computer vision,
            full-stack development and real-world
            problem solving.
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
              {projects.length}
            </span>

            <span className="ml-2 text-slate-300">
              Featured Projects
            </span>
          </div>
        </div>

        {/* Carousel Controls */}

        <div
          className="
          flex
          justify-end
          gap-4
          mb-8
          "
        >
          <button
            className="
            project-prev
            glass
            w-12
            h-12
            rounded-full
            flex
            items-center
            justify-center
            hover:scale-110
            transition
            "
          >
            <HiArrowLeft />
          </button>

          <button
            className="
            project-next
            glass
            w-12
            h-12
            rounded-full
            flex
            items-center
            justify-center
            hover:scale-110
            transition
            "
          >
            <HiArrowRight />
          </button>
        </div>

        {/* Swiper */}

        <Swiper
          effect="coverflow"
          centeredSlides
          loop
          grabCursor
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".project-prev",
            nextEl: ".project-next",
          }}
          pagination={{
            clickable: true,
          }}
          modules={[
            EffectCoverflow,
            Pagination,
            Navigation,
            Autoplay,
          ]}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 2,
            scale: 0.9,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.05,
            },

            640: {
              slidesPerView: 1.2,
            },

            768: {
              slidesPerView: 1.5,
            },

            1024: {
              slidesPerView: 1.8,
            },

            1280: {
              slidesPerView: 2.2,
            },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide
              key={project.title}
              className="pb-14"
            >
              <ProjectCard
                project={project}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}