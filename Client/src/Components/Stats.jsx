import React, { useState, useEffect } from "react";

const Stats = () => {
  const stats = [
    { title: "Trusted Clients", value: 25, prefix: "", suffix: "" },
    { title: "Successful Case", value: 98, prefix: "", suffix: "%" },
    { title: "Money Case", value: 200000, prefix: "₹", suffix: "" },
    { title: "Case Closed", value: 45, prefix: "", suffix: "" },
  ];

  // Animation logic for counters
  const [currentValues, setCurrentValues] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValues((prev) =>
        prev.map((curr, i) =>
          curr < stats[i].value
            ? Math.min(curr + Math.ceil(stats[i].value / 50), stats[i].value)
            : curr
        )
      );
    }, 50);

    return () => clearInterval(interval);
  }, [stats]);

  return (
    <div className="bg-white p-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-md shadow-md"
          >
            <div className="text-lg font-semibold text-gray-700">
              {stat.title}
            </div>
            <div className="mt-4 text-4xl font-bold text-yellow-500">
              {stat.prefix}
              {currentValues[index].toLocaleString()}
              {stat.suffix}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
