export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-pink-600 text-center mb-6">🌼 Register</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-pink-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-pink-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-pink-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded shadow"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account? <a href="/login" className="text-pink-500 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}
