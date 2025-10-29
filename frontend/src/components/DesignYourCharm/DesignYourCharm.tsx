import { useState } from "react";
import { Plus, Minus, Save, ShoppingCart } from "lucide-react";

const charms = [
  "CHAIN",
  "CHARM 1",
  "CHARM 2",
  "CHARM 3",
  "CHARM 4",
  "CHARM 5",
  "CHARM 6",
  "CHARM 7",
  "CHARM 8",
  "CHARM 9",
  "CHARM 10",
  "FINAL STEP",
];

const sections = [
  "SKIP THIS CHARM?",
  "INITIALS (A–M)",
  "INITIALS (N–Z)",
  "NUMBERS",
  "BIRTH STONE",
];

const DesignYourCharm = () => {
  const [activeCharm, setActiveCharm] = useState("CHARM 1");
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setExpanded((prev) => (prev === title ? null : title));
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Top Section */}
      <section className="w-full bg-gradient-to-r from-pink-300 to-pink-200 text-center py-16 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Design Your Custom Charm
        </h1>
        <p className="max-w-2xl mx-auto text-gray-700">
          Create a one-of-a-kind piece that tells your unique story. Choose from
          various shapes, materials, colors, and add personal engravings.
        </p>
      </section>

      {/* Notice */}
      <div className="w-full max-w-5xl mt-8 px-4">
        <ul className="list-disc pl-6 text-gray-700 text-sm space-y-2">
          <li>Please DOUBLE CHECK your order. All orders are final sale.</li>
          <li>Lastly, but most importantly, HAVE FUN!! :)</li>
        </ul>
      </div>

      {/* Design Area */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-start justify-center mt-10 gap-12 px-4">
        {/* Necklace Preview */}
        <div className="flex justify-center w-full lg:w-1/2">
          <img
            src="necklace-preview.png"
            alt="Necklace preview"
            className="w-72 h-auto object-contain"
          />
        </div>

        {/* Options */}
        <div className="flex flex-col items-start w-full lg:w-1/2">
          {/* Charm Step Navigation */}
          <div className="grid grid-cols-3 gap-1 mb-8 w-full max-w-md text-sm">
            {charms.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCharm(c)}
                className={`py-2 rounded-none font-semibold transition-colors ${
                  activeCharm === c
                    ? "bg-pink-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Expandable Options */}
          <div className="flex flex-col space-y-3 text-sm font-medium text-pink-500 w-full max-w-md">
            {sections.map((title) => {
              const isOpen = expanded === title;
              return (
                <div key={title} className="border-b border-gray-200 pb-2">
                  <button
                    onClick={() => toggleSection(title)}
                    className="w-full flex justify-between items-center hover:underline"
                  >
                    <span>{title}</span>
                    {isOpen ? (
                      <Minus size={18} className="text-gray-600" />
                    ) : (
                      <Plus size={18} className="text-gray-600" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="mt-2 pl-2 text-gray-600">
                      <p className="text-sm italic">
                        (Example content for {title.toLowerCase()} section.)
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 mt-10">
            <button className="flex items-center gap-2 text-sm text-gray-600 border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-50 transition">
              <Save size={16} />
              Save Design
            </button>
            <button className="flex items-center gap-2 bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition">
              <ShoppingCart size={18} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <section className="w-full bg-pink-600 text-center py-16 mt-20 text-white">
        <h2 className="text-2xl font-bold mb-3">Need Help With Your Design?</h2>
        <p className="mb-6">
          Our design experts are ready to assist you in creating the perfect
          custom charm.
        </p>
        <button className="bg-white text-pink-600 font-semibold px-6 py-2 rounded-md hover:bg-pink-100 transition">
          Contact Our Design Team
        </button>
      </section>
    </div>
  );
};

export default DesignYourCharm;
