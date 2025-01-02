import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { NavLink } from "react-router-dom";

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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <h1 className="text-2xl pt-10 font-serif font-bold bg-slate-900 text-white text-center sm:pl-2">
        Our digital services
      </h1>
      <h1 className="text-xl pt-5 font-normal font-roboto bg-slate-900 text-white text-center sm:pl-2">
      Unmatched Services & Excellence
      </h1>
      <div className="card-body bg-slate-900 lg:px-20 py-10" ref={ref}>
        <motion.div
          className="grid grid-cols-1 gap-y-14 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-10 lg:px-10 py-1.5 mx-auto"
          initial="initial"
          animate={isInView ? "inView" : "outOfView"}
          variants={gridVariants}
        >
          {/* Card 1 */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="profile-image">
                  <img src="/trademark.png" className="mt-8 " alt="" />
                  <div className="name relative right-3">Trademark</div>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="Description">
                  <p className="description pt-8">
                    Protect your brand identity with trademark registration,
                    ensuring exclusive rights to your logo, name, or slogan.
                    Safeguard your business's unique reputation and recognition.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="profile-image">
                  <img src="/copyright.png" className="mt-14" alt="" />
                  <div className="name relative right-3 top-0 pt-5">
                    Copyright
                  </div>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="Description">
                  <p className="description pt-3">
                    Protect your original works, such as art, music, and
                    literature, with copyright registration. Ensure exclusive
                    rights to your creations and prevent unauthorized use,
                    allowing you to control and monetize your intellectual
                    property.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="profile-image">
                  <img src="/design.png" className="w-20 mt-14 ml-5" alt="" />
                  <div className="name relative top-3 right-3 ml-3">Design</div>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="Description">
                  <p className="description pt-8">
                    Secure the unique look of your products with design
                    registration. Protect the visual elements of your designs,
                    ensuring that others cannot copy or imitate your distinct
                    creations in the market.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="profile-image">
                  <img
                    src="/patent.png"
                    className="lg:h-24 mt-12 lg:ml-3"
                    alt=""
                  />
                  <div className="name pr-5 ml-2">Patent</div>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="Description">
                  <p className="description pt-3">
                    Protect your innovative inventions with patent registration.
                    Secure exclusive rights to your invention, preventing others
                    from making, using, or selling it without your permission,
                    and gain the legal backing to bring your idea to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Stats;
