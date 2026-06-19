"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (

<section
className="
min-h-screen
flex
items-center
justify-center
relative
"
>

<motion.div

initial={{opacity:0,y:80}}
animate={{opacity:1,y:0}}

transition={{duration:1}}

className="
glass
glow
p-10
rounded-3xl
max-w-4xl
text-center
"
>

<div className="mb-5">
  <h1
    className="
    mondy
    text-[7rem]
    md:text-[7rem]
    gradient-text
    "
  >
    NAYANA
  </h1>

  <h1
    className="
    mondy
    text-[7rem]
    md:text-[7rem]
    gradient-text
    -mt-15
    "
  >
    SHAJI
  </h1>
</div>

<p
className="
freescpt 
text-3xl
mt-1
text-slate-300
"
>

Building AI-powered solutions for
accessibility, safety and
real-world impact.

</p>

<div className="mt-10 flex gap-5 justify-center">

<button
className="
px-8
py-3
rounded-xl
glass
hover:scale-105
duration-300
"
>
Projects
</button>

<button
className="
px-8
py-3
rounded-xl
bg-linear-to-r
from-cyan-400
to-violet-500
"
>
Resume
</button>

</div>

</motion.div>

</section>

)
}