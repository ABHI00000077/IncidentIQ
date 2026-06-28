import {
  BarChart3,
  TrendingUp,
  Activity,
} from "lucide-react";

const metrics = [
  {
    title: "Incidents",
    value: "32",
    icon: BarChart3,
  },
  {
    title: "Avg Response",
    value: "14 ms",
    icon: TrendingUp,
  },
  {
    title: "Availability",
    value: "99.98%",
    icon: Activity,
  },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">
          Analytics
        </h1>

        <p className="mt-2 text-gray-500">
          Infrastructure insights and performance metrics.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-3">

        {metrics.map((item) => {

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

                <Icon
                  className="text-red-600"
                  size={28}
                />

              </div>

            </div>

          );

        })}

      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-8">

        <h2 className="text-xl font-semibold">
          Weekly Infrastructure Trend
        </h2>

        <div className="mt-10 flex h-72 items-end gap-4">

          {[45, 62, 58, 73, 81, 64, 91].map((value, index) => (

            <div
              key={index}
              className="flex-1 rounded-t-xl bg-red-600"
              style={{
                height: `${value}%`,
              }}
            />

          ))}

        </div>

      </div>

    </div>
  );
}