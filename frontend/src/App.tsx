import { Gift, Shield, Stars, Truck } from "lucide-react";
import type { Product } from "./components/Shop/ProductCard";
import ProductCard from "./components/Shop/ProductCard";
import myImage from "./images/Container.png";
import p1 from "./images/p1.jpg";
import p2 from "./images/p2.jpg";
import p3 from "./images/p3.jpg";
import p4 from "./images/p4.jpg";
import { Link } from "react-router-dom";

function App() {
  const products: Product[] = [
    { id: 1, name: "Golden Leaf Pendant", price: 120, image: p1 },
    { id: 2, name: "Silver Chain Bracelet", price: 75, image: p2 },
    { id: 3, name: "Rose Gold Hoops", price: 50, image: p3 },
    { id: 4, name: "Personalized Initial Charm", price: 60, image: p4 },
  ];
  const footerCards = [
    {
      title: "Free Shipping",
      desc: "On orders over $100",
      icon: <Truck className="text-pink-600" />,
    },
    {
      title: "Secure Payment",
      desc: "100% secure transactions",
      icon: <Shield className="text-pink-600" />,
    },
    {
      title: "Gift Packaging",
      desc: "Special gift wrapping",
      icon: <Gift className="text-pink-600" />,
    },
    {
      title: "Quality Guarantee",
      desc: "30-day satisfaction guarantee",
      icon: <Stars className="text-pink-600" />,
    },
  ];

  const whyChooseCards = [
    {
      title: "Custom Designs",
      desc: "Create jewelry that's uniquely yours with our interactive tool. Choose materials, shapes, and add engravings.",
      icon: <Stars className="text-pink-600" />,
    },
    {
      title: "Perfect Gifts",
      desc: "Design meaningful gifts for loved ones. Save your designs and send them directly as presents.",
      icon: <Gift className="text-pink-600" />,
    },
    {
      title: "Quality Craftsmanship",
      desc: "Each piece is handcrafted by skilled artisans using premium materials for exceptional quality.",
      icon: <Shield className="text-pink-600" />,
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "Sophie Turner",
      role: "Fashion Blogger",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "The quality of the jewelry is outstanding! I was able to customize every detail, and the final piece looks even better than I imagined.",
    },
    {
      id: 2,
      name: "Daniel Carter",
      role: "Entrepreneur",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
      review:
        "Bariq made the whole process so smooth. Their customer service is amazing, and the delivery was faster than expected!",
    },
    {
      id: 3,
      name: "Aisha Malik",
      role: "Jewelry Designer",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      review:
        "I love how Bariq blends traditional artistry with modern design tools. The customization options make every piece feel truly personal.",
    },
  ];

  return (
    <main className="text-gray-800">
      {/* HERO SECTION */}
      <section className="w-full bg-pink-200 py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
              Design Your Own{" "}
              <span className="text-pink-600">Custom Jewelry</span>
            </h1>
            <p className="text-gray-600 text-base md:text-lg mb-6">
              Create one-of-a-kind charms that tell your story. Choose shapes,
              materials, colors, and add personal engravings.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <Link
                to="/custom-design"
                className="bg-pink-600 text-white px-6 py-2 rounded-md font-medium hover:bg-pink-700 transition"
              >
                Start Designing
              </Link>
              <Link
                to="/shop"
                className="bg-white text-gray-800 border px-6 py-2 rounded-md font-medium hover:bg-pink-100 transition"
              >
                Shop Collection
              </Link>
            </div>
          </div>

          <div className="mt-6 lg:mt-0">
            <img
              className="object-cover rounded-lg"
              src={myImage}
              alt="Custom jewelry display"
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-10 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-3">Why Choose Bariq?</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          We combine traditional craftsmanship with modern design tools to
          create unique jewelry made by you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {whyChooseCards.map((item) => (
            <div
              key={item.title}
              className="bg-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="bg-pink-200 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-10 px-4 bg-gray-200 text-center">
        <h2 className="text-3xl font-semibold mb-3">How It Works</h2>
        <p className="text-gray-600 mb-8">
          Creating your custom jewelry is simple with our easy design process.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {["Design", "Submit", "Craft", "Delivery"].map((step, i) => (
            <div key={step} className="flex flex-col items-center">
              <div className="bg-pink-600 text-white w-10 h-10 flex items-center justify-center rounded-full mb-3 font-semibold">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step}</h3>
              <p className="text-gray-600 text-sm">
                {i === 0
                  ? "Use our interactive tool to create your custom charm with your choice of shapes, materials, and engravings."
                  : i === 1
                  ? "Review your design in 3D preview and submit it for approval once you're satisfied."
                  : i === 2
                  ? "Our skilled artisans handcraft your unique piece with attention to every detail."
                  : "Your custom jewelry is carefully packaged and delivered to your doorstep."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-10 px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Featured Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex items-center justify-center mt-6">
          <Link to="/shop" className="text-pink-600 flex items-center justify-center gap-6">
            View All{" "}
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 11L6 6L1 1"
                stroke="#E11584"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
      </section>

      <section className="w-full space-y-5 lg:space-y-10 bg-gray-200 py-10">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto mt-3">
            Hear from customers who have created their own unique pieces with
            Bariq.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-16">
          {/* Review Card */}
          {reviews.map(({ id, name, role, image, review }) => (
            <div
              key={id}
              className="flex flex-col items-center text-center rounded-lg border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 text-pink-500 mb-4">
                {[...new Array(5)].map((_) => (
                  <svg
                    key={_}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.75l-6.172 3.245 1.179-6.873-5-4.867 6.9-1 3.086-6.253 3.086 6.253 6.9 1-5 4.867 1.179 6.873z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                {review}
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-4">
                <img
                  src={image}
                  alt={name}
                  className="w-12 h-12 rounded-full border border-gray-300 shadow-sm"
                />
                <div className="text-left">
                  <p className="text-gray-800 font-medium">{name}</p>
                  <p className="text-sm text-gray-500">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-pink-600 text-center py-12 px-4 text-white">
        <h2 className="text-3xl font-semibold mb-3">
          Ready to Create Your Unique Piece?
        </h2>
        <p className="text-gray-200 max-w-md mx-auto mb-6">
          Start designing today and bring your vision to life with our
          interactive design tool.
        </p>
        <Link
          to="/custom-design"
          className="bg-white text-pink-600 px-6 py-2 rounded-md font-medium hover:bg-pink-800 hover:text-white transition"
        >
          Start Designing Now
        </Link>
      </section>

      {/* BOTTOM INFO */}
      <section className="py-10 px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm text-gray-700">
        {footerCards.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center text-center space-y-4 py-2"
          >
            <div className=" rounded-full pt-6 flex items-center justify-center">
              {item.icon}
            </div>
            <div>
              <p className="text-sm text-black font-semibold">{item.title}</p>
              <p className=" text-xs text-gray-600 max-w-xs ">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
