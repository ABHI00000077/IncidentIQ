import {
  Server,
  Cpu,
  HardDrive,
  MemoryStick,
} from "lucide-react";

const servers = [
  {
    name: "Server-01",
    cpu: "41%",
    ram: "63%",
    disk: "52%",
    status: "Healthy",
  },
  {
    name: "Server-02",
    cpu: "87%",
    ram: "78%",
    disk: "69%",
    status: "Warning",
  },
  {
    name: "Server-03",
    cpu: "24%",
    ram: "38%",
    disk: "47%",
    status: "Healthy",
  },
  {
    name: "Server-04",
    cpu: "96%",
    ram: "91%",
    disk: "82%",
    status: "Critical",
  },
];

export default function ServersPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold">
          Servers
        </h1>

        <p className="mt-2 text-gray-500">
          Live infrastructure overview.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        {servers.map((server) => (

          <div
            key={server.name}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >

            <div className="flex justify-between">

              <div>

                <div className="flex items-center gap-3">

                  <Server className="text-red-600" />

                  <h2 className="text-xl font-semibold">
                    {server.name}
                  </h2>

                </div>

                <span
                  className={`mt-3 inline-block rounded-full px-3 py-1 text-sm ${
                    server.status === "Healthy"
                      ? "bg-green-100 text-green-700"
                      : server.status === "Warning"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {server.status}
                </span>

              </div>

            </div>

            <div className="mt-8 space-y-5">

              <Metric
                icon={<Cpu size={18} />}
                title="CPU"
                value={server.cpu}
              />

              <Metric
                icon={<MemoryStick size={18} />}
                title="Memory"
                value={server.ram}
              />

              <Metric
                icon={<HardDrive size={18} />}
                title="Disk"
                value={server.disk}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

function Metric({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div>

      <div className="mb-2 flex justify-between text-sm">

        <div className="flex items-center gap-2">

          {icon}

          {title}

        </div>

        <span>{value}</span>

      </div>

      <div className="h-2 rounded-full bg-gray-200">

        <div
          className="h-2 rounded-full bg-red-600"
          style={{
            width: value,
          }}
        />

      </div>

    </div>
  );
}