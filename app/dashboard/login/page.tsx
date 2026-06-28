import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7f7f7] px-6">

      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">

        {/* Left */}

        <div className="flex flex-col justify-center bg-red-600 p-12 text-white">

          <h1 className="text-5xl font-bold">
            IncidentIQ
          </h1>

          <p className="mt-6 text-lg leading-8 text-red-100">
            AI-powered infrastructure monitoring and
            incident management platform.
          </p>

          <div className="mt-12 space-y-3 text-red-100">

            <p>✔ Infrastructure Monitoring</p>
            <p>✔ Incident Management</p>
            <p>✔ AI Log Analysis</p>
            <p>✔ Analytics Dashboard</p>

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center justify-center p-12">

          <form className="w-full max-w-md space-y-6">

            <div>

              <h2 className="text-3xl font-bold">
                Sign In
              </h2>

              <p className="mt-2 text-gray-500">
                Welcome back.
              </p>

            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-red-500"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-red-500"
            />

            <button
              type="submit"
              className="primary-btn w-full"
            >
              Sign In
            </button>

            <p className="text-center text-sm text-gray-500">

              Don't have an account?{" "}

              <Link
                href="/register"
                className="font-semibold text-red-600"
              >
                Register
              </Link>

            </p>

          </form>

        </div>

      </div>

    </div>
  );
}