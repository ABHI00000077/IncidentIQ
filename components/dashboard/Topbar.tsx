"use client";

import {
  Bell,
  Search,
} from "lucide-react";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white">

      <div className="flex h-20 items-center justify-between px-8">

        {/* Search */}

        <div className="relative w-[420px]">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search servers, incidents..."
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 outline-none focus:border-red-500"
          />

        </div>

        {/* Right */}

        <div className="flex items-center gap-5">

          <button className="relative rounded-xl border border-gray-200 p-3 hover:bg-gray-50">

            <Bell size={20} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-600" />

          </button>

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600 text-white font-bold">

              A

            </div>

            <div>

              <h4 className="font-semibold">

                Abhinav

              </h4>

              <p className="text-xs text-gray-500">

                Administrator

              </p>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}