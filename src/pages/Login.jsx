import { useState } from "react";
import { Capacitor } from "@capacitor/core";
import { Http } from '@capacitor-community/http';
import { Preferences } from '@capacitor/preferences';

export default function Login() {
  const [formData, setFormData] = useState({
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
    const apiUrl =
      platform === "web"
        ? "http://localhost:5000/api/auth/loginn"
        : "http://10.0.2.2:5000/api/auth/loginn";

    try {
      const res = await Http.request({
        method: 'POST',
        url: apiUrl,
        headers: {
          'Content-Type': 'application/json',
        },
        params: {},
        data: formData
      });

      console.log('Response:', res);

      if (res.status === 200 && res.data?.user) {
        alert("Login Successfully!");
        await Preferences.set({
          key: 'user',
          value: JSON.stringify(res.data.user),
        });

        window.location.href = '/';

        setFormData({ email: '', password: '' });
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Network error: " + error.message);
    }
  };

  return (
    <div className="py-8 flex items-center justify-center bg-pink-50 min-h-[calc(100vh-64px)]">
      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-pink-600 text-center mb-6">🌸 Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
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
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account? <a href="/register" className="text-pink-500 hover:underline">Register</a>
        </p>
      </div>
    </div>
  );
}
