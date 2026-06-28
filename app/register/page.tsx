import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7f7f7] px-6">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">

        {/* Left */}

        <div className="flex flex-col justify-center bg-red-600 p-12 text-white">

          <h1 className="text-5xl font-bold">
            IncidentIQ
          </h1>

          <p className="mt-6 text-lg text-red-100 leading-8">
            Create your account to access the monitoring dashboard.
          </p>

        </div>

        {/* Right */}

        <div className="flex items-center justify-center p-12">

          <form className="w-full max-w-md space-y-5">

            <h2 className="text-3xl font-bold">
              Create Account
            </h2>

            <input
              placeholder="Full Name"
              className="w-full rounded-xl border p-4"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border p-4"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border p-4"
            />

            <button
              type="submit"
              className="primary-btn w-full"
            >
              Register
            </button>

            <p className="text-center text-sm text-gray-500">

              Already have an account?{" "}

              <Link
                href="/login"
                className="text-red-600 font-semibold"
              >
                Login
              </Link>

            </p>

          </form>

        </div>

      </div>
    </div>
  );
}