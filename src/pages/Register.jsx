import { useState } from "react";
import { Capacitor } from "@capacitor/core";
import { Http } from '@capacitor-community/http';

export default function Login() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const platform = Capacitor.getPlatform();
    console.log("Platform:", platform);

    const apiUrl =
      platform === "web"
        ? "http://localhost:5000/api/auth/registerr"
        : "http://10.0.2.2:5000/api/auth/registerr";

    try {
      const res = await Http.request({
        method: 'POST',
        url: apiUrl,
        headers: {
          'Content-Type': 'application/json',
        },
        params: {},
        data: formData,
      });

      console.log('Response:', res);

      if (res.status === 201) {
        alert("Message: " + res.data?.message);
        setFormData({
          name: '',
          email: '',
          password: ''
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Network error: " + error.message);
    }
  };

  return (
    <div className="py-8 flex items-center justify-center bg-pink-50 min-h-[calc(100vh-64px)]">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-pink-600 text-center mb-6">🌸 Register</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-pink-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-pink-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
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
