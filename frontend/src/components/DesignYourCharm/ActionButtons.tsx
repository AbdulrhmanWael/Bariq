import { Save, ShoppingCart } from "lucide-react";
import * as htmlToImage from "html-to-image";
import { nanoid } from "nanoid";
import { useState, useMemo } from "react";
import Modal from "react-modal";
import type { ChainType, CharmPlacement } from "../../types";

Modal.setAppElement("#root");

const chainPrices: Record<ChainType, number> = {
  NECKLACE: 20,
  BRACELET: 15,
  "EAR RINGS": 10,
};

const charmPrices: Record<string, number> = {
  INITIALS: 8,
  NUMBERS: 6,
  "BIRTH STONE": 20,
};

export default function ActionButtons({
  selectedChain,
  selectedCharms,
  canvasRef,
}: Readonly<{
  selectedChain: ChainType;
  selectedCharms: CharmPlacement[];
  canvasRef: React.RefObject<HTMLDivElement>;
}>) {
  const [savedDesignId, setSavedDesignId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");

  const totalPrice = useMemo(() => {
    let total = chainPrices[selectedChain] || 0;
    selectedCharms.forEach((charm) => {
      if (!charm) return;
      const src = charm.src.toUpperCase();
      if (src.includes("INITIALS")) total += charmPrices.INITIALS;
      else if (src.includes("NUMBERS")) total += charmPrices.NUMBERS;
      else if (src.includes("BIRTHSTONE")) total += charmPrices["BIRTH STONE"];
    });
    return total;
  }, [selectedChain, selectedCharms]);

  async function saveDesign() {
    if (savedDesignId) {
      setModalText("Design already saved!");
      setIsModalOpen(true);
      return { id: savedDesignId, price: totalPrice };
    }

    if (!canvasRef.current) return;

    const dataUrl = await htmlToImage.toPng(canvasRef.current, {
      cacheBust: true,
      pixelRatio: 2,
    });

    const newId = nanoid();

    const designData = {
      id: newId,
      chain: selectedChain,
      charms: selectedCharms.filter(Boolean),
      preview: dataUrl,
      price: totalPrice,
      createdAt: new Date().toISOString(),
    };

    await fetch("http://localhost:3001/designs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(designData),
    });

    setSavedDesignId(newId);
    setModalText(`Design saved! Total Price: $${totalPrice}`);
    setIsModalOpen(true);

    return designData;
  }

  async function addToCart() {
    const design = (await saveDesign()) as {
      id: string;
      chain: ChainType;
      charms: CharmPlacement[];
      preview: string;
      price: number;
      createdAt: string;
    };
    if (!design) return;

    const res = await fetch(`http://localhost:3001/cart?designId=${design.id}`);
    const existingItems = await res.json();

    if (existingItems.length > 0) {
      const item = existingItems[0];
      await fetch(`http://localhost:3001/cart/${item.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: item.quantity + 1 }),
      });
    } else {
      const cartItem = {
        id: nanoid(),
        type: "custom-design",
        designId: design.id,
        preview: design.preview,
        quantity: 1,
        price: design.price,
        addedAt: new Date().toISOString(),
      };

      await fetch("http://localhost:3001/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartItem),
      });
    }

    setModalText(`Added to cart! Total Price: $${design.price}`);
    setIsModalOpen(true);
  }

  return (
    <>
      <div className="flex flex-col items-start gap-4 mt-10">
        <div className="text-lg font-semibold text-gray-800">
          Total Price: <span className="text-pink-500">${totalPrice}</span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={saveDesign}
            className="flex items-center gap-2 text-sm text-gray-600 border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-50 transition"
          >
            <Save size={16} />
            Save Design
          </button>

          <button
            onClick={addToCart}
            className="flex items-center gap-2 bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className={`bg-white p-6 rounded-lg max-w-md mx-auto mt-40 outline-none transform transition-all duration-300 ease-out ${
          isModalOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
        overlayClassName="fixed inset-0 bg-black/50 flex items-center justify-center"
        contentLabel="Confirmation"
      >
        <p className="mb-4">{modalText}</p>
        <button
          onClick={() => setIsModalOpen(false)}
          className="bg-pink-500 text-white px-4 py-2 rounded-md"
        >
          OK
        </button>
      </Modal>
    </>
  );
}
