"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="section">

      <div className="container grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <p className="text-blue-500 font-semibold mb-4 uppercase tracking-widest">
            AI Incident Monitoring
          </p>

          <h1 className="text-6xl font-bold leading-tight">

            Monitor

            <span className="gradient-text">
              {" "}Infrastructure{" "}
            </span>

            Before

            It Breaks.

          </h1>

          <p className="text-slate-400 mt-8 text-lg leading-8">

            IncidentIQ helps startups monitor servers,
            manage incidents,
            analyze logs
            and resolve outages
            from one clean dashboard.

          </p>

          <div className="flex gap-4 mt-10">

            <button className="primary-btn">

              Launch Dashboard

            </button>

            <button className="secondary-btn">

              GitHub

            </button>

          </div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
        >

          <div className="glass rounded-3xl p-8">

            <div className="flex justify-between">

              <div>

                <p className="text-slate-400 text-sm">

                  Healthy Servers

                </p>

                <h2 className="text-5xl font-bold mt-3">

                  24

                </h2>

              </div>

              <div className="text-green-400 text-sm">

                ▲ 99.9%

              </div>

            </div>

            <div className="mt-10 space-y-5">

              <div>

                <div className="flex justify-between mb-2">

                  <span>CPU</span>

                  <span>45%</span>

                </div>

                <div className="w-full h-3 bg-slate-800 rounded-full">

                  <div className="h-3 bg-blue-500 rounded-full w-[45%]"></div>

                </div>

              </div>

              <div>

                <div className="flex justify-between mb-2">

                  <span>Memory</span>

                  <span>68%</span>

                </div>

                <div className="w-full h-3 bg-slate-800 rounded-full">

                  <div className="h-3 bg-green-500 rounded-full w-[68%]"></div>

                </div>

              </div>

              <div>

                <div className="flex justify-between mb-2">

                  <span>Network</span>

                  <span>81%</span>

                </div>

                <div className="w-full h-3 bg-slate-800 rounded-full">

                  <div className="h-3 bg-yellow-500 rounded-full w-[81%]"></div>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}