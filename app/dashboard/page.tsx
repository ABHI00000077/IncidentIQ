import {
  Activity,
  AlertTriangle,
  Clock3,
  Server,
} from "lucide-react";

const stats = [
  {
    title: "Healthy Servers",
    value: "124",
    icon: Server,
    color: "text-green-600",
  },
  {
    title: "Critical Alerts",
    value: "03",
    icon: AlertTriangle,
    color: "text-red-600",
  },
  {
    title: "CPU Usage",
    value: "43%",
    icon: Activity,
    color: "text-orange-500",
  },
  {
    title: "Avg Response",
    value: "14ms",
    icon: Clock3,
    color: "text-blue-600",
  },
];

const incidents = [
  {
    service: "Database Cluster",
    status: "Critical",
    owner: "Backend Team",
  },
  {
    service: "Redis Cache",
    status: "Investigating",
    owner: "Platform",
  },
  {
    service: "API Gateway",
    status: "Resolved",
    owner: "DevOps",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      {/* Welcome */}

      <section>

        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Monitor infrastructure health, incidents and system performance.
        </p>

      </section>

      {/* Stats */}

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {stats.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-gray-500">
                    {item.title}
                  </p>

                  <h2 className="mt-3 text-4xl font-bold">
                    {item.value}
                  </h2>

                </div>

                <div className="rounded-xl bg-gray-100 p-3">

                  <Icon
                    className={item.color}
                    size={24}
                  />

                </div>

              </div>

            </div>

          );

        })}

      </section>

      {/* Charts + Incidents */}

      <section className="grid gap-6 lg:grid-cols-3">

        {/* CPU */}

        <div className="lg:col-span-2 rounded-2xl border border-gray-200 bg-white p-6">

          <div className="flex items-center justify-between">

            <h2 className="text-xl font-semibold">
              CPU Utilization
            </h2>

            <span className="rounded-full bg-red-50 px-3 py-1 text-sm text-red-600">
              Live
            </span>

          </div>

          <div className="mt-8 flex h-72 items-end gap-3">

            {[42, 60, 54, 80, 63, 72, 48, 85, 66, 59, 74, 91].map(
              (height, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-t-xl bg-red-600 transition-all duration-300 hover:opacity-80"
                  style={{
                    height: `${height}%`,
                  }}
                />
              )
            )}

          </div>

        </div>

        {/* Incidents */}

        <div className="rounded-2xl border border-gray-200 bg-white p-6">

          <h2 className="text-xl font-semibold">
            Recent Incidents
          </h2>

          <div className="mt-6 space-y-4">

            {incidents.map((incident) => (

              <div
                key={incident.service}
                className="rounded-xl border border-gray-100 p-4"
              >

                <h3 className="font-semibold">
                  {incident.service}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {incident.owner}
                </p>

                <span
                  className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-medium ${
                    incident.status === "Critical"
                      ? "bg-red-100 text-red-600"
                      : incident.status === "Resolved"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {incident.status}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}