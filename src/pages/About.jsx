export default function About() {
  return (
    <div className="min-h-screen bg-pink-50 font-sans">
      <section className="bg-gradient-to-r from-pink-100 to-pink-200 text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700 mb-4">🌺 About FlowerApp</h1>
        <p className="text-lg text-pink-600 max-w-2xl mx-auto">
          FlowerApp is your go-to companion for everything floral — from discovering rare blooms to sending heartfelt bouquets.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6 p-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">🌼 Our Mission</h2>
          <p>
            To bring the joy and serenity of flowers to everyone, everywhere. We believe in making floral knowledge and beauty accessible to all.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">🌸 Our Vision</h2>
          <p>
            To be the most trusted flower-focused platform — inspiring creativity, sharing knowledge, and helping users connect with nature.
          </p>
        </div>
      </section>

      <section className="bg-pink-100 py-12 text-center px-6">
        <h2 className="text-3xl font-bold text-pink-700 mb-4">🌹 Our Story</h2>
        <p className="text-pink-600 max-w-3xl mx-auto">
          What started as a passion project bloomed into a full-fledged floral hub. From small gardens to large greenhouses, we’ve captured the magic of flowers in one place.
        </p>
      </section>
    </div>
  );
}
