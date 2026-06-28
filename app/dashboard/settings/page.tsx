import {
  Bell,
  Lock,
  User,
  Shield,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold">
          Settings
        </h1>

        <p className="mt-2 text-gray-500">
          Manage your account and application preferences.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        {/* Profile */}

        <div className="rounded-2xl border border-gray-200 bg-white p-6">

          <div className="mb-6 flex items-center gap-3">

            <User className="text-red-600" />

            <h2 className="text-xl font-semibold">
              Profile
            </h2>

          </div>

          <div className="space-y-4">

            <input
              defaultValue="Abhinav Kumar Singh"
              className="w-full rounded-xl border border-gray-200 p-3 outline-none focus:border-red-500"
            />

            <input
              defaultValue="abhinav@example.com"
              className="w-full rounded-xl border border-gray-200 p-3 outline-none focus:border-red-500"
            />

            <button className="primary-btn">
              Save Changes
            </button>

          </div>

        </div>

        {/* Notifications */}

        <div className="rounded-2xl border border-gray-200 bg-white p-6">

          <div className="mb-6 flex items-center gap-3">

            <Bell className="text-red-600" />

            <h2 className="text-xl font-semibold">
              Notifications
            </h2>

          </div>

          <div className="space-y-4">

            {[
              "Email Alerts",
              "Critical Incidents",
              "Weekly Reports",
            ].map((item) => (

              <label
                key={item}
                className="flex items-center justify-between rounded-xl border border-gray-100 p-4"
              >

                <span>{item}</span>

                <input type="checkbox" defaultChecked />

              </label>

            ))}

          </div>

        </div>

        {/* Security */}

        <div className="rounded-2xl border border-gray-200 bg-white p-6">

          <div className="mb-6 flex items-center gap-3">

            <Shield className="text-red-600" />

            <h2 className="text-xl font-semibold">
              Security
            </h2>

          </div>

          <button className="secondary-btn">
            Enable Two-Factor Authentication
          </button>

        </div>

        {/* Password */}

        <div className="rounded-2xl border border-gray-200 bg-white p-6">

          <div className="mb-6 flex items-center gap-3">

            <Lock className="text-red-600" />

            <h2 className="text-xl font-semibold">
              Password
            </h2>

          </div>

          <button className="secondary-btn">
            Change Password
          </button>

        </div>

      </div>

    </div>
  );
}