import { useState } from "react";
import { Capacitor } from "@capacitor/core";
import { Http } from "@capacitor-community/http";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const platform = Capacitor.getPlatform();
    console.log("Platform:", platform);

    let apiUrl = "";
    if (platform === "web") {
      apiUrl = "http://localhost:5000/api/auth/contact";
    } else if (platform === "android") {
      apiUrl = "http://10.0.2.2:5000/api/auth/contact";
    } else if (platform === "ios") {
      apiUrl = "http://192.168.0.178:5000/api/auth/contact";
    }

    try {
      const res = await Http.request({
        method: "POST",
        url: apiUrl,
        headers: {
          "Content-Type": "application/json",
        },
        params: {},
        data: { name, email, phoneNumber, description },
      });

      console.log("Response:", res);

      if (res.status === 201) {
        alert("Message: " + res.data?.message);
        setName("");
        setEmail("");
        setPhoneNumber("");
        setDescription("");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Network error: " + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 font-sans py-10 px-4">
      <section className="bg-gradient-to-r from-pink-100 to-pink-200 text-center py-12 rounded-lg shadow mb-10">
        <h1 className="text-4xl font-extrabold text-pink-700 mb-2">
          🌼 Contact Us
        </h1>
        <p className="text-pink-600 max-w-xl mx-auto">
          Got questions, suggestions, or floral love to share? Fill out the form
          and we’ll get back to you!
        </p>
      </section>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md max-w-lg mx-auto space-y-6"
      >
        <input
          type="text"
          placeholder="Name"
          className="block w-full p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="block w-full p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="block w-full p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <textarea
          placeholder="Your Message"
          className="block w-full p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          rows="5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition shadow"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
