
// // const { shortCopy } = about;
// const AboutTeaser = () => {

//   return (
//     <section className="relative md:max-w-[95%] mx-auto">
//       <div className="grid grid-cols-1 gap-6 lg:gap-12 content-center">
//         <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 content-center'>
//           <div className="p-4 animate-on-scroll">
//             <h3 className="leading-11 animate-on-scroll text-1xl sm:text-1xl md:text-2xl font-nunito font-bold text-secondary/50 mb-4 text-center">
//               <span className="block">Founded with</span>
//               <span className="font-bold text-3xl md:text-5xl text-complementary"  > care and intention, </span>
//               <span className="block">Roots & Routines Family Concierge is a</span>
//               <span className="text-3xl md:text-5xl text-complementary"> personalized service dedicated to helping families </span>
//               create smoother home routines, find trusted support, and make confident decisions for their child&apos;s wellbeing.
//             </h3>
//           </div>
//           <div className='w-full top-0 rounded-4xl overflow-hidden flex justify-center items-center'>
//             <h3 className="leading-11 animate-on-scroll text-1xl sm:text-1xl md:text-2xl font-nunito font-bold text-secondary/50 mb-4 text-center">
//               Your families rhythm doesn&apos;t have to match anyone&apos;s else&apos;s.
//               <span className="font-bold text-3xl md:text-5xl text-accent" > Build routines that work</span>
//               for you - ones that bring more laughter and less stress
//             </h3>
//           </div>
//         </div>
//         <div className="w-full h-80 lg:col-span-2  rounded-4xl">
//           <h3 className="leading-11 animate-on-scroll text-1xl sm:text-1xl md:text-2xl font-nunito font-bold text-accent/50 mb-4 text-center">
//             <span className="block font-bold text-3xl md:text-5xl text-secondary">No more guess work.</span>
//             Ever feel like you&apos;re winging it everyday? <br />The mental load that comes with parenting is real. Having a home structure helps to
//             <span className="block">free up brain space, reduce decision fatigue and gives your </span>

//             <span className="text-3xl md:text-5xl text-secondary">family more time to connect. </span><br />
//             Let us help you build a flow that works for you
//           </h3>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutTeaser;

"use client"

import { motion } from "framer-motion"

const AboutTeaser = () => {
  return (
    <section className="relative md:max-w-[95%] mx-auto py-24 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-complementary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* First block - Large emphasis on left */}
        <motion.div
          className="mb-20 lg:mb-32 max-w-4xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            {/* Decorative accent line */}
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-complementary via-complementary/50 to-transparent rounded-full" />

            <p className="font-nunito text-lg md:text-xl lg:text-2xl text-secondary/60 leading-relaxed">
              Founded with{" "}
              <span className="font-bold text-4xl md:text-5xl lg:text-6xl text-complementary block my-4">
                care and intention,
              </span>
              Roots & Routines Family Concierge is a{" "}
              <span className="font-bold text-3xl md:text-4xl lg:text-5xl text-complementary">
                personalized service
              </span>{" "}
              dedicated to helping families create smoother home routines, find trusted support, and make confident
              decisions for their child&apos;s wellbeing.
            </p>
          </div>
        </motion.div>

        {/* Second block - Offset to the right */}
        <motion.div
          className="mb-20 lg:mb-32 ml-auto max-w-3xl"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            {/* Decorative accent line on right */}
            <div className="absolute -right-4 top-0 w-1 h-full bg-gradient-to-b from-accent via-accent/50 to-transparent rounded-full" />

            <p className="font-nunito text-lg md:text-xl lg:text-2xl text-secondary/60 leading-relaxed text-right">
              Your family&apos;s rhythm doesn&apos;t have to match anyone else&apos;s.{" "}
              <span className="font-bold text-4xl md:text-5xl lg:text-6xl text-accent block my-4">
                Build routines that work
              </span>
              for you - ones that bring more laughter and less stress.
            </p>
          </div>
        </motion.div>

        {/* Third block - Centered with maximum emphasis */}
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative">
            {/* Top decorative line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full mb-8" />

            <div className="pt-12">
              <p className="font-bold text-4xl md:text-5xl lg:text-7xl text-secondary mb-8">No more guesswork.</p>

              <p className="font-nunito text-lg md:text-xl lg:text-2xl text-secondary/60 leading-relaxed mb-6">
                Ever feel like you&apos;re winging it every day?
              </p>

              <p className="font-nunito text-lg md:text-xl lg:text-2xl text-secondary/60 leading-relaxed">
                The mental load that comes with parenting is real. Having a home structure helps to free up brain space,
                reduce decision fatigue and gives your{" "}
                <span className="font-bold text-3xl md:text-4xl lg:text-5xl text-secondary block my-6">
                  family more time to connect.
                </span>
              </p>

              <p className="font-nunito text-lg md:text-xl lg:text-2xl text-secondary/60 leading-relaxed mt-6">
                Let us help you build a flow that works for you.
              </p>
            </div>

            {/* Bottom decorative line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full mt-8" />
          </div>
        </motion.div>
      </div>

      <div className="absolute top-12 right-12 opacity-10">
        <svg width="40" height="40" viewBox="0 0 40 40">
          <circle cx="5" cy="5" r="2" fill="#bc9b0a" />
          <circle cx="20" cy="5" r="2" fill="#ca6c28" />
          <circle cx="35" cy="5" r="2" fill="#788a68" />
          <circle cx="5" cy="35" r="2" fill="#788a68" />
          <circle cx="35" cy="35" r="2" fill="#ca6c28" />
        </svg>
      </div>

      <div className="absolute bottom-12 left-12 opacity-10">
        <svg width="40" height="40" viewBox="0 0 40 40">
          <circle cx="5" cy="5" r="2" fill="#788a68" />
          <circle cx="35" cy="5" r="2" fill="#bc9b0a" />
          <circle cx="5" cy="35" r="2" fill="#ca6c28" />
          <circle cx="20" cy="35" r="2" fill="#788a68" />
          <circle cx="35" cy="35" r="2" fill="#bc9b0a" />
        </svg>
      </div>
    </section>
  )
}

export default AboutTeaser

