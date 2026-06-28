"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background */}

      <div className="grid-bg" />
      <div className="hero-glow" />

      <div className="container">

        <div className="flex flex-col items-center text-center pt-32 pb-52">

          {/* Badge */}

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
            className="badge"
          >
            <span className="live-dot" />

            Live Infrastructure Monitoring
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .15 }}
            className="title mt-8 text-center"
          >
            The easiest way
            <br />

            to monitor modern

            <br />

            <span className="gradient">
              infrastructure.
            </span>

          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .35 }}
            className="subtitle text-center"
          >
            AI-assisted incident management platform
            that helps engineering teams detect,
            investigate and resolve production
            incidents before they become outages.
          </motion.p>

          {/* CTA */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .45 }}
            className="mt-12"
          >

            <button className="primary-btn">

              Start Monitoring

              <ArrowRight size={18} />

            </button>

          </motion.div>

          {/* Trust */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .6 }}
            className="mt-5 text-sm text-gray-500"
          >
            No credit card required • Deploy in minutes
          </motion.p>

        </div>

      </div>

    </section>
  );
}