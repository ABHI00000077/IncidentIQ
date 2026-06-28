import {
  FileText,
  Search,
} from "lucide-react";

const logs = [
  {
    time: "12:43:12",
    level: "INFO",
    service: "API Gateway",
    message: "Health check passed successfully.",
  },
  {
    time: "12:44:08",
    level: "WARNING",
    service: "Redis",
    message: "Memory usage exceeded 80%.",
  },
  {
    time: "12:45:17",
    level: "ERROR",
    service: "Database",
    message: "Connection timeout detected.",
  },
  {
    time: "12:46:29",
    level: "INFO",
    service: "Authentication",
    message: "User logged into dashboard.",
  },
  {
    time: "12:47:55",
    level: "INFO",
    service: "Monitoring",
    message: "CPU metrics synchronized.",
  },
];

function badge(level: string) {
  switch (level) {
    case "ERROR":
      return "bg-red-100 text-red-700";
    case "WARNING":
      return "bg-yellow-100 text-yellow-700";
    default:
      return "bg-green-100 text-green-700";
  }
}

export default function LogsPage() {
  return (
    <div className="space-y-8">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Logs
          </h1>

          <p className="mt-2 text-gray-500">
            Search and inspect infrastructure logs.
          </p>

        </div>

      </div>

      <div className="relative max-w-md">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          placeholder="Search logs..."
          className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 outline-none focus:border-red-500"
        />

      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-[#111111] text-white shadow-sm">

        {logs.map((log) => (

          <div
            key={`${log.time}-${log.service}`}
            className="border-b border-gray-800 p-5 last:border-none"
          >

            <div className="flex flex-wrap items-center gap-4">

              <span className="font-mono text-sm text-gray-400">
                {log.time}
              </span>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${badge(
                  log.level
                )}`}
              >
                {log.level}
              </span>

              <div className="flex items-center gap-2">

                <FileText size={16} />

                <span className="font-medium">
                  {log.service}
                </span>

              </div>

            </div>

            <p className="mt-3 font-mono text-sm text-gray-300">
              {log.message}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}