"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  AlertTriangle,
  Database,
  Cpu,
  ShieldAlert,
  Server,
} from "lucide-react";

const events = [
  {
    icon: Database,
    color: "text-red-600",
    time: "12:41",
    title: "Database latency detected",
    status: "Critical",
  },
  {
    icon: Cpu,
    color: "text-orange-500",
    time: "12:43",
    title: "CPU spike on Server-07",
    status: "Warning",
  },
  {
    icon: Server,
    color: "text-green-600",
    time: "12:45",
    title: "API Gateway recovered",
    status: "Resolved",
  },
  {
    icon: ShieldAlert,
    color: "text-red-600",
    time: "12:47",
    title: "Firewall rule updated",
    status: "Security",
  },
  {
    icon: CheckCircle2,
    color: "text-green-600",
    time: "12:50",
    title: "All systems operational",
    status: "Healthy",
  },
];

export default function LiveFeed() {
  return (
    <section className="section">

      <div className="container">

        <div className="flex items-center gap-3 mb-10">

          <div className="h-3 w-3 rounded-full bg-red-600 animate-pulse"/>

          <span className="font-bold text-red-600">

            LIVE EVENT STREAM

          </span>

        </div>

        <div className="card overflow-hidden">

          {events.map((event, index) => {

            const Icon = event.icon;

            return (

              <motion.div

                key={index}

                initial={{
                  opacity:0,
                  x:-20
                }}

                whileInView={{
                  opacity:1,
                  x:0
                }}

                transition={{
                  delay:index*.1
                }}

                className="flex justify-between items-center p-6 border-b border-gray-200 last:border-none"

              >

                <div className="flex items-center gap-5">

                  <div className="h-12 w-12 rounded-xl bg-gray-100 flex items-center justify-center">

                    <Icon
                      className={event.color}
                      size={24}
                    />

                  </div>

                  <div>

                    <h3 className="font-semibold">

                      {event.title}

                    </h3>

                    <p className="text-sm text-gray-500">

                      {event.time}

                    </p>

                  </div>

                </div>

                <span className={`${event.color} font-semibold`}>

                  {event.status}

                </span>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}