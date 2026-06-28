"use client";

import { motion } from "framer-motion";

const nodes = [
  {
    top: "34%",
    left: "20%",
    color: "bg-green-500",
    label: "New York",
  },
  {
    top: "28%",
    left: "48%",
    color: "bg-yellow-500",
    label: "London",
  },
  {
    top: "42%",
    left: "70%",
    color: "bg-green-500",
    label: "Singapore",
  },
  {
    top: "66%",
    left: "82%",
    color: "bg-red-600",
    label: "Sydney",
  },
];

export default function WorldMap() {
  return (
    <div className="relative h-[420px] card overflow-hidden">

      {/* Background Grid */}

      <div className="absolute inset-0 bg-[linear-gradient(#efefef_1px,transparent_1px),linear-gradient(90deg,#efefef_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Decorative SVG */}

      <svg
        viewBox="0 0 900 450"
        className="absolute inset-0 w-full h-full opacity-10"
      >
        <path
          d="M100 180 L170 150 L260 170 L330 130 L420 150 L500 120 L620 170 L720 150 L810 190"
          stroke="#111"
          strokeWidth="6"
          fill="none"
        />

        <path
          d="M140 260 L260 240 L370 260 L470 230 L600 250 L700 240"
          stroke="#111"
          strokeWidth="6"
          fill="none"
        />
      </svg>

      {/* Animated Nodes */}

      {nodes.map((node) => (

        <motion.div
          key={node.label}
          className="absolute"
          style={{
            top: node.top,
            left: node.left,
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className={`h-4 w-4 rounded-full ${node.color}`}
          />

          <div className="absolute top-6 -left-5 whitespace-nowrap rounded-lg bg-white px-3 py-1 text-xs shadow-md border border-gray-200">
            {node.label}
          </div>
        </motion.div>

      ))}

      {/* Connection Lines */}

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.line
          x1="20"
          y1="35"
          x2="48"
          y2="29"
          stroke="#DC2626"
          strokeWidth=".4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        <motion.line
          x1="48"
          y1="29"
          x2="70"
          y2="43"
          stroke="#DC2626"
          strokeWidth=".4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            delay: .4,
            repeat: Infinity,
          }}
        />

        <motion.line
          x1="70"
          y1="43"
          x2="82"
          y2="67"
          stroke="#DC2626"
          strokeWidth=".4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            delay: .8,
            repeat: Infinity,
          }}
        />
      </svg>

    </div>
  );
}