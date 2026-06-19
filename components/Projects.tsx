"use client";

import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  EffectCoverflow,
  Pagination
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-6 mx-25"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-[0.3em]">
          Featured Work
        </p>

        <h2 className="freescpt text-8xl md:text-7xl font-black mt-3 mb-16">
          My{" "}
          <span className="gradient-text">
            Projects
          </span>
        </h2>

        <Swiper
          effect={"coverflow"}
          centeredSlides
          loop
          grabCursor
          pagination={{
            clickable: true
          }}
          modules={[
            EffectCoverflow,
            Pagination
          ]}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 180,
            modifier: 2,
            scale: 0.9
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.1
            },

            768: {
              slidesPerView: 1.5
            },

            1200: {
              slidesPerView: 2.2
            }
          }}
        >
          {projects.map((project) => (
            <SwiperSlide
              key={project.title}
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