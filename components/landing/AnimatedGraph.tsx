"use client";

import { motion } from "framer-motion";

const values = [
  75, 62, 88, 55, 70, 46,
  82, 67, 90, 72, 58, 80,
];

export default function AnimatedGraph() {
  const width = 460;
  const height = 170;

  const points = values
    .map((v, i) => {
      const x = (i / (values.length - 1)) * width;
      const y = height - (v / 100) * height;

      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="card p-6">

      <div className="flex justify-between items-center mb-8">

        <div>

          <p className="text-gray-500 text-sm">
            CPU Usage
          </p>

          <h3 className="text-xl font-bold mt-2">
            Last 24 Hours
          </h3>

        </div>

        <span className="text-green-600 font-semibold">

          ● Live

        </span>

      </div>

      <svg
        width="100%"
        height={height}
        viewBox={`0 0 ${width} ${height}`}
      >

        <polyline
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="3"
          points={points}
        />

        <motion.polyline
          fill="none"
          stroke="#DC2626"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={points}
          initial={{
            pathLength: 0,
          }}
          animate={{
            pathLength: 1,
          }}
          transition={{
            duration: 2,
          }}
        />

      </svg>

      <div className="grid grid-cols-4 gap-4 mt-8">

        <div>

          <p className="text-gray-500 text-sm">
            Avg
          </p>

          <h4 className="font-bold mt-2">
            68%
          </h4>

        </div>

        <div>

          <p className="text-gray-500 text-sm">
            Peak
          </p>

          <h4 className="font-bold mt-2">
            92%
          </h4>

        </div>

        <div>

          <p className="text-gray-500 text-sm">
            Min
          </p>

          <h4 className="font-bold mt-2">
            31%
          </h4>

        </div>

        <div>

          <p className="text-gray-500 text-sm">
            Status
          </p>

          <h4 className="text-green-600 font-bold mt-2">
            Healthy
          </h4>

        </div>

      </div>

    </div>
  );
}