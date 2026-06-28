"use client";

import { motion } from "framer-motion";
import {
  Activity,
  AlertTriangle,
  Server,
  Database,
  Wifi,
} from "lucide-react";

const metrics = [
  {
    title: "CPU",
    value: 42,
    color: "bg-red-500",
  },
  {
    title: "Memory",
    value: 68,
    color: "bg-black",
  },
  {
    title: "Storage",
    value: 31,
    color: "bg-red-400",
  },
];

const alerts = [
  {
    title: "Database latency",
    level: "Critical",
    color: "text-red-600",
  },
  {
    title: "Memory usage high",
    level: "Warning",
    color: "text-orange-500",
  },
  {
    title: "API Gateway Healthy",
    level: "Healthy",
    color: "text-green-600",
  },
];

export default function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: .8 }}
      className="stats-card"
    >
      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500 text-sm">
            Live Infrastructure
          </p>

          <h2 className="text-3xl font-bold mt-2">
            IncidentIQ
          </h2>

        </div>

        <div className="flex items-center gap-2">

          <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />

          <span className="text-green-600 font-semibold">
            Live
          </span>

        </div>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-3 gap-4 mt-8">

        <div className="card p-5">

          <Server className="text-red-600 mb-4" />

          <h3 className="text-3xl font-bold">
            128
          </h3>

          <p className="text-gray-500 mt-2">
            Servers
          </p>

        </div>

        <div className="card p-5">

          <Database className="text-red-600 mb-4" />

          <h3 className="text-3xl font-bold">
            1.8M
          </h3>

          <p className="text-gray-500 mt-2">
            Logs
          </p>

        </div>

        <div className="card p-5">

          <Wifi className="text-red-600 mb-4" />

          <h3 className="text-3xl font-bold">
            99.9%
          </h3>

          <p className="text-gray-500 mt-2">
            Uptime
          </p>

        </div>

      </div>

      {/* Graph */}

      <div className="card p-6 mt-8">

        <div className="flex justify-between mb-6">

          <h3 className="font-semibold">
            Live Usage
          </h3>

          <Activity className="text-red-600" />

        </div>

        <div className="space-y-6">

          {metrics.map((item) => (

            <div key={item.title}>

              <div className="flex justify-between mb-2 text-sm">

                <span>{item.title}</span>

                <span>{item.value}%</span>

              </div>

              <div className="w-full h-3 rounded-full bg-gray-200">

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.value}%` }}
                  transition={{
                    duration: 1.2,
                  }}
                  className={`${item.color} h-3 rounded-full`}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Alerts */}

      <div className="card p-6 mt-8">

        <div className="flex justify-between items-center mb-6">

          <h3 className="font-semibold">
            Active Alerts
          </h3>

          <AlertTriangle
            className="text-red-600"
          />

        </div>

        <div className="space-y-5">

          {alerts.map((alert) => (

            <div
              key={alert.title}
              className="flex justify-between items-center"
            >

              <div>

                <h4 className="font-medium">

                  {alert.title}

                </h4>

                <p className={`text-sm ${alert.color}`}>

                  {alert.level}

                </p>

              </div>

              <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse" />

            </div>

          ))}

        </div>

      </div>

    </motion.div>
  );
}