import {
  AlertTriangle,
} from "lucide-react";

const incidents = [
  {
    id: "INC-1024",
    title: "Database Latency",
    priority: "Critical",
    assignee: "Backend Team",
    status: "Open",
  },
  {
    id: "INC-1025",
    title: "Redis Cache Restart",
    priority: "Medium",
    assignee: "Platform",
    status: "Investigating",
  },
  {
    id: "INC-1026",
    title: "SSL Renewal",
    priority: "Low",
    assignee: "DevOps",
    status: "Resolved",
  },
];

export default function IncidentsPage() {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">
          Incidents
        </h1>

        <p className="mt-2 text-gray-500">
          Track and manage production incidents.
        </p>

      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">

        <table className="w-full">

          <thead className="bg-gray-50">

            <tr className="text-left">

              <th className="p-5">ID</th>
              <th>Incident</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Owner</th>

            </tr>

          </thead>

          <tbody>

            {incidents.map((incident) => (

              <tr
                key={incident.id}
                className="border-t border-gray-100 hover:bg-gray-50"
              >

                <td className="p-5 font-medium">

                  {incident.id}

                </td>

                <td>

                  <div className="flex items-center gap-3">

                    <AlertTriangle
                      size={18}
                      className="text-red-600"
                    />

                    {incident.title}

                  </div>

                </td>

                <td>

                  {incident.priority}

                </td>

                <td>

                  <span className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-600">

                    {incident.status}

                  </span>

                </td>

                <td>

                  {incident.assignee}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}