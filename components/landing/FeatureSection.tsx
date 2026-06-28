"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  ShieldCheck,
  BellRing,
  BarChart3,
  ServerCog,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    title: "Infrastructure Monitoring",
    description:
      "Monitor CPU, RAM, disk usage and server health from a unified dashboard.",
    icon: ServerCog,
  },
  {
    title: "Incident Management",
    description:
      "Create, assign and resolve incidents with complete lifecycle tracking.",
    icon: BellRing,
  },
  {
    title: "AI Log Analysis",
    description:
      "Analyze logs instantly and receive AI-assisted root cause suggestions.",
    icon: BrainCircuit,
  },
  {
    title: "Live Metrics",
    description:
      "Visualize infrastructure metrics updating continuously in real time.",
    icon: Activity,
  },
  {
    title: "Analytics",
    description:
      "Powerful charts for uptime, alerts and infrastructure performance.",
    icon: BarChart3,
  },
  {
    title: "Enterprise Security",
    description:
      "JWT authentication, protected routes and secure backend architecture.",
    icon: ShieldCheck,
  },
];

export default function FeatureSection() {
  return (
    <section
      id="features"
      className="section bg-[#fafafa]"
    >
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >
          <span className="badge">
            Platform Features
          </span>

          <h2 className="mt-6">
            Everything You Need To
            <span className="gradient-text">
              {" "}Monitor Infrastructure
            </span>
          </h2>

          <p className="subtitle">
            A lightweight DevOps platform that combines monitoring,
            incident management and AI-assisted troubleshooting.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .08,
                }}
                className="card p-8 group cursor-pointer"
              >

                <div className="h-16 w-16 rounded-2xl bg-red-50 flex items-center justify-center mb-8 transition-all duration-300 group-hover:bg-red-600">

                  <Icon
                    size={30}
                    className="text-red-600 group-hover:text-white transition"
                  />

                </div>

                <h3 className="text-2xl font-bold mb-4">

                  {feature.title}

                </h3>

                <p className="text-gray-500 leading-8">

                  {feature.description}

                </p>

                <div className="mt-8 flex items-center gap-2 text-red-600 font-semibold">

                  Learn More

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-2"
                  />

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}