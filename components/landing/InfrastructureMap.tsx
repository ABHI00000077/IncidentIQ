"use client";

import { motion } from "framer-motion";
import WorldMap from "./WorldMap";
const regions = [
  {
    name: "North America",
    status: "Healthy",
    color: "bg-green-500",
  },
  {
    name: "Europe",
    status: "Warning",
    color: "bg-yellow-500",
  },
  {
    name: "Asia",
    status: "Healthy",
    color: "bg-green-500",
  },
  {
    name: "Australia",
    status: "Healthy",
    color: "bg-green-500",
  },
];

export default function InfrastructureMap() {
  return (
    <section className="section bg-[#fafafa]">

      <div className="container">

        <h2>

          Global Infrastructure

        </h2>

        <p className="subtitle">

          Monitor infrastructure health across multiple regions.

        </p>

        <div className="grid lg:grid-cols-2 gap-10 mt-16">

          <WorldMap/>

          <div className="space-y-5">

            {regions.map((region)=>(

              <div

                key={region.name}

                className="card p-6 flex justify-between items-center"

              >

                <div>

                  <h3 className="font-semibold">

                    {region.name}

                  </h3>

                  <p className="text-gray-500">

                    Region Status

                  </p>

                </div>

                <div className="flex items-center gap-3">

                  <span className={`h-3 w-3 rounded-full ${region.color}`}/>

                  <span>

                    {region.status}

                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}