import { Gem, Lock, Shield, Clock } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 text-center bg-linear-to-b from-white to-gray-50">
        <h1 className="text-5xl font-bold mb-4">Our Story</h1>
        <p className="text-gray-600 text-lg mb-8">
          Crafting timeless elegance with passion and precision since 2010
        </p>
        <button className="bg-pink-600 text-white px-8 py-3 rounded-md hover:bg-pink-700 transition transform hover:scale-105">
          Explore Our Collection
        </button>
      </section>

      {/* Our Mission */}
      <section className="py-20 px-8 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Our Mission</h2>
        <p className="text-gray-600 text-center mb-6 leading-relaxed">
          At Bariq, we believe that jewelry is more than an accessory—it's a
          personal statement, a treasured memory, and an expression of
          individuality. Our mission is to transform your vision into exquisite
          pieces that tell your unique story.
        </p>
        <p className="text-gray-600 text-center mb-6 leading-relaxed">
          Founded by master jeweler John Doe in 2010, Bariq began as a small
          custom design studio in San Francisco. Today, we've grown into a
          beloved brand known for our attention to detail, ethical sourcing
          practices, and personalized approach to jewelry creation.
        </p>
        <p className="text-gray-600 text-center leading-relaxed">
          Every piece that bears the Bariq name is crafted with intention,
          precision, and heart—designed not just to be worn, but to be cherished
          for generations.
        </p>
      </section>

      {/* Our Values */}
      <section className="py-20 px-8 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-16">Our Values</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-lg hover:shadow-lg transition">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gem className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Craftsmanship</h3>
            <p className="text-gray-600 text-sm">
              We combine traditional techniques with modern innovation to create
              pieces of exceptional quality and beauty.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg hover:shadow-lg transition">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Exclusivity</h3>
            <p className="text-gray-600 text-sm">
              Each Bariq piece is thoughtfully designed to be as unique as the
              person who wears it.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg hover:shadow-lg transition">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Customer Trust</h3>
            <p className="text-gray-600 text-sm">
              We prioritize transparency, integrity, and exceptional service in
              every customer interaction.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg hover:shadow-lg transition">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Sustainability</h3>
            <p className="text-gray-600 text-sm">
              We source materials ethically and craft pieces that are designed
              to last for generations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-linear-to-r from-pink-600 to-pink-500 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Create Your Unique Piece?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Turn your vision into reality with our custom design service. Our team
          is ready to bring your dream jewelry to life.
        </p>
        <button className="bg-white text-pink-600 px-8 py-3 rounded-md hover:bg-gray-100 transition transform hover:scale-105 font-semibold">
          Start Designing Now
        </button>
      </section>
    </>
  );
}
