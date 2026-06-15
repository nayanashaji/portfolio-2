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

<h1
className="
text-7xl
font-black
gradient-text
"
>
NAYANA SHAJI
</h1>

<p
className="
mt-6
text-xl
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