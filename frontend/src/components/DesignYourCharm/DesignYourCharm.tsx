import { useRef, useState } from "react";
import type { ChainType, CharmPlacement } from "../../types";
import PreviewCanvas from "./PreviewCanvas";
import ActionButtons from "./ActionButtons";
import CharmSelector from "./CharmSelector";

const chainOptions: {
  id: ChainType;
  label: string;
  image: string;
  maxSlots: number;
  price:number;
}[] = [
  {
    id: "NECKLACE",
    label: "Necklace",
    image: "/builder-images/necklace-1.webp",
    maxSlots: 10,
    price:20
  },
  {
    id: "BRACELET",
    label: "Bracelet",
    image: "/builder-images/bracelet-1.webp",
    maxSlots: 6,
    price:15
  },
  {
    id: "EAR RINGS",
    label: "Ear Rings",
    image: "/builder-images/ear-rings.png",
    maxSlots: 4,
    price:10
  },
];

export default function DesignYourCharm() {
  const [selectedChain, setSelectedChain] = useState<ChainType>("NECKLACE");

  const maxPossibleSlots = 10;
  const [selectedCharms, setSelectedCharms] = useState<CharmPlacement[]>(
    new Array(maxPossibleSlots).fill(null)
  );

  const canvasRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full flex flex-col items-center">
      <section className="w-full bg-linear-to-r from-pink-300 to-pink-200 text-center py-16 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Design Your Custom Charm
        </h1>
        <p className="max-w-2xl mx-auto text-gray-700">
          Create a one-of-a-kind piece that tells your unique story. Choose from
          various shapes, materials, colors, and add personal engravings.
        </p>
      </section>

      <div className="w-full max-w-5xl mt-8 px-4">
        <ul className="list-disc pl-6 text-gray-700 text-sm space-y-2">
          <li>Charms may or may not move depending on selected chain.</li>
          <li>Drag and drop the charms to position them!</li>
          <li>Please DOUBLE CHECK your order. All orders are final sale.</li>
          <li>Lastly, but most importantly, HAVE FUN!!</li>
        </ul>
      </div>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-start justify-center mt-10 gap-12 px-4">
        <div className="flex justify-center w-full lg:w-1/2">
          <PreviewCanvas
            setSelectedCharms={setSelectedCharms}
            chainImage={
              chainOptions.find((c) => c.id === selectedChain)?.image || ""
            }
            charms={selectedCharms}
            innerRef={canvasRef}
          />
        </div>

        <div className="flex flex-col items-start w-full lg:w-1/2">
          {/* Charm Selector */}
          <CharmSelector
            chainOptions={chainOptions}
            setSelectedChain={setSelectedChain}
            selectedChain={selectedChain}
            setSelectedCharms={setSelectedCharms}
            selectedCharms={selectedCharms}
          />
          {/* Action Buttons */}
          <ActionButtons
            canvasRef={canvasRef}
            selectedChain={selectedChain}
            selectedCharms={selectedCharms}
          />
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
}
