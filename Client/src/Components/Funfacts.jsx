import React from "react";
import { motion } from "framer-motion";

const FunFact = () => {
  const funFacts = [
    {
      id: 1,
      title: "Global Patent Applications",
      content:
        "Over 3.3 million patent applications are filed annually worldwide, with the most filed in China, the US, and Japan.",
      icon: "🌐",
    },
    {
      id: 2,
      title: "IP Boosts Innovation",
      content:
        "Strong IP protection fosters innovation, with patent holders reporting 20% higher revenue on average.",
      icon: "💡",
    },
    {
      id: 3,
      title: "Trademark Growth",
      content:
        "The world saw 13.9 million trademark applications in 2022, showing a massive surge in brand protection.",
      icon: "📈",
    },
    {
      id: 4,
      title: "IP's Role in Startups",
      content:
        "Startups with patents are 35% more likely to attract venture capital funding.",
      icon: "🚀",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-gray-100 py-12 px-5 sm:px-10 lg:px-20">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
        {" "}
        Fun Facts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {funFacts.map((fact) => (
          <motion.div
            key={fact.id}
            className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl hover:scale-105 transition-transform"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <div className="text-4xl mb-4">{fact.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {fact.title}
            </h3>
            <p className="text-sm text-gray-600">{fact.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FunFact;
