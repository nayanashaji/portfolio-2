import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      className="
      py-32
      px-6
      max-w-4xl
      mx-auto
      "
    >
      <div className="glass rounded-3xl p-12 text-center">

        <h2 className="freescpt text-8xl font-black gradient-text">
          Let's Connect
        </h2>

        <p className="mt-6 text-slate-300">
          Open to collaborations,
          internships and exciting projects.
        </p>

        <div className="flex justify-center gap-8 mt-10 text-3xl">

          <a href="#">
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>

          <a href="#">
            <FaEnvelope />
          </a>

        </div>

      </div>
    </section>
  );
}