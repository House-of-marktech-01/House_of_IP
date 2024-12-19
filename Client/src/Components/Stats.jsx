import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Stats = () => {
  // Animation variants
  const cardVariants = {
    initial: { scale: 1, opacity: 0, y: 50 },
    inView: { scale: 1.2, opacity: 1, y: 0, transition: { duration: 0.1 } },
    outOfView: {
      scale: 0.8,
      opacity: 0,
      y: 100,
      transition: { duration: 0.1 },
    },
  };

  const gridVariants = {
    initial: { opacity: 0 },
    inView: { opacity: 1, transition: { staggerChildren: 0.2 } },
    outOfView: { opacity: 0, transition: { staggerChildren: 0.2 } },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <>
      <h1 className="text-2xl pt-10 bg-slate-100 text-gray-900 text-center sm:pl-2">
        Explore our digital services stack.
      </h1>
      <div className="card-body bg-slate-100 lg:px-20 py-10" ref={ref}>
        <motion.div
          className="grid grid-cols-1 gap-y-14 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-10 lg:px-10 py-1.5 mx-auto"
          initial="initial"
          animate={isInView ? "inView" : "outOfView"}
          variants={gridVariants}
        >
          {/* Card 1 */}
          <motion.div
            className="relative group rounded-xl lg:rounded-l-xl cursor-pointer overflow-hidden duration-500 pr-5 w-64 h-48 bg-slate-800 text-gray-50 p-5 mx-auto"
            variants={cardVariants}
          >
            <div>
              <div className="group-hover:scale-110 w-full h-36 bg-blue-400 duration-500">
                <img
                  src="https://st2.depositphotos.com/1007283/6930/i/450/depositphotos_69306965-stock-photo-rubber-stamp-printed-with-trademark.jpg"
                  alt="trademark"
                  className="h-36"
                />
              </div>
              <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
                <div className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-70 group-hover:bg-slate-900"></div>
                <span class="text-transparent bg-clip-text bg-gradient-to-r font-bold text-2xl to-indigo-600 from-indigo-700">
                  Trademark
                </span>
                <p className="group-hover:opacity-100 w-56 text-xs duration-500 opacity-0">
                  Protect your brand identity with trademark registration,
                  ensuring exclusive rights to your logo, name, or slogan.
                  Safeguard your business's unique reputation and recognition.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="relative group cursor-pointer rounded-xl overflow-hidden duration-500 pr-5 w-64 h-48 bg-slate-800 text-gray-50 p-5 mx-auto"
            variants={cardVariants}
          >
            <div>
              <div className="group-hover:scale-110 w-full h-36 bg-blue-400 duration-500">
                <img
                  src="https://singhania.in/admin/blogimages/Basic-of-copyright-law.jpg"
                  alt="copyright"
                  className="h-36"
                />
              </div>
              <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
                <div className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-70 group-hover:bg-slate-900"></div>
                <span class="text-transparent bg-clip-text bg-gradient-to-r font-bold text-2xl to-indigo-600 from-indigo-700">
                  Copyright
                </span>
                <p className="group-hover:opacity-100 w-56 text-xs duration-500 opacity-0">
                  Secure your creative works like music, art, and software with
                  copyright protection. Preserve your intellectual property
                  rights and prevent unauthorized usage.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}

          <motion.div
            className="relative group cursor-pointer rounded-xl overflow-hidden duration-500 pr-5 w-64 h-48 bg-slate-800 text-gray-50 p-5 mx-auto"
            variants={cardVariants}
          >
            <div>
              <div className="group-hover:scale-110 w-full h-36 bg-blue-400 duration-500">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2023/8/337203469/OC/LI/WN/122913636/design-registration-service.png"
                  alt=""
                  className="h-36 w-full"
                />
              </div>
              <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
                <div className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-70 group-hover:bg-slate-900"></div>
                <span class="text-transparent bg-clip-text bg-gradient-to-r font-bold text-2xl to-indigo-600 from-indigo-700">
                  Design
                </span>
                <p className="group-hover:opacity-100 w-56 text-xs duration-500 opacity-0">
                  Protect the visual and aesthetic aspects of your product with
                  design registration, covering elements. Ensure your unique
                  designs remain legally secure in markets.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="relative group cursor-pointer rounded-xl lg:rounded-r-xl overflow-hidden duration-500 pr-5 w-64 h-48 bg-slate-800 text-gray-50 p-5 mx-auto"
            variants={cardVariants}
          >
            <div>
              <div className="group-hover:scale-110 w-full h-36 bg-blue-400 duration-500">
                <img
                  src="https://media.licdn.com/dms/image/v2/C5112AQGJzX51eH37HQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1567008264730?e=2147483647&v=beta&t=pLt0DQhx_eLU1yvtHdOkFx-OyckP50WRCTsIPU6OKis"
                  alt=""
                  className="h-36"
                />
              </div>
              <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
                <div className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-70 group-hover:bg-slate-900"></div>
                <span class="text-transparent bg-clip-text bg-gradient-to-r font-bold text-2xl to-indigo-600 from-indigo-700">
                  Patent
                </span>
                <p className="group-hover:opacity-100 w-56 text-xs duration-500 opacity-0">
                  Safeguard your innovative ideas and inventions with patent
                  registration. Gain exclusive rights to your creations and
                  advance your technological edge.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Stats;
