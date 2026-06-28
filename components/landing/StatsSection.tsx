"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ShieldCheck,
  Server,
  Clock3,
} from "lucide-react";

const stats = [
  {
    icon: Server,
    number: "128",
    suffix: "+",
    title: "Servers Monitored",
    color: "text-red-600",
  },
  {
    icon: Activity,
    number: "1.8M",
    suffix: "",
    title: "Logs Processed",
    color: "text-green-600",
  },
  {
    icon: Clock3,
    number: "14",
    suffix: " ms",
    title: "Average Response",
    color: "text-orange-500",
  },
  {
    icon: ShieldCheck,
    number: "99.98",
    suffix: "%",
    title: "System Uptime",
    color: "text-blue-600",
  },
];

export default function StatsSection() {
  return (
    <section className="py-24">

      <div className="container">

        <motion.div
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:.5}}
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-6"
        >

          {stats.map((item)=>{

            const Icon=item.icon;

            return(

              <div
                key={item.title}
                className="card p-8 group hover:border-red-500"
              >

                <div className="flex items-center justify-between">

                  <div
                    className="h-16 w-16 rounded-2xl bg-red-50 flex items-center justify-center"
                  >

                    <Icon
                      className={item.color}
                      size={30}
                    />

                  </div>

                  <span className="text-green-600 text-sm font-semibold">

                    ▲ Live

                  </span>

                </div>

                <h2 className="mt-8 text-5xl font-black">

                  {item.number}

                  <span className="text-red-600">

                    {item.suffix}

                  </span>

                </h2>

                <p className="mt-3 text-gray-500">

                  {item.title}

                </p>

              </div>

            )

          })}

        </motion.div>

      </div>

    </section>
  );
}