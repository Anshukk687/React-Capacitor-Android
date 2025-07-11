export default function Home() {
  return (
    <div className="min-h-screen bg-pink-50 font-sans">
      <section className="bg-gradient-to-r from-pink-100 to-pink-200 text-center py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-pink-700 mb-4">🌸 Welcome to FlowerApp</h2>
        <p className="text-lg text-pink-600 max-w-xl mx-auto">
          Discover, learn, and connect with the beauty of flowers. Your blooming journey starts here!
        </p>
        <button className="mt-6 bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition">
          Explore Now
        </button>
      </section>

      <section className="grid md:grid-cols-3 gap-6 p-6 text-center">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-pink-600 mb-2">🌷 Beautiful Catalog</h2>
          <p>Browse our extensive flower collection with vibrant photos and details.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-pink-600 mb-2">🌼 Easy Contact</h2>
          <p>Connect with us easily through our contact form. We're here for you!</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-pink-600 mb-2">🌹 Fresh Ideas</h2>
          <p>Read articles and get inspired with floral arrangements and DIY tips.</p>
        </div>
      </section>
    </div>
  );
}
