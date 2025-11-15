import { Minus, Plus } from "lucide-react";
import CharmGrid from "./CharmGrid";
import type { ChainType, CharmPlacement } from "../../types";
import { useMemo, useState } from "react";

type CharmSelectorProps = {
  chainOptions: {
    id: ChainType;
    label: string;
    image: string;
    maxSlots: number;
    price: number;
  }[];
  selectedChain: ChainType;
  setSelectedChain: React.Dispatch<React.SetStateAction<ChainType>>;
  selectedCharms: CharmPlacement[];
  setSelectedCharms: React.Dispatch<React.SetStateAction<CharmPlacement[]>>;
};

const initialAM = { folder: "/builder-images/initialsA-M", start: 1, end: 91 };
const initialNZ = {
  folder: "/builder-images/initialsN-Z",
  start: 92,
  end: 172,
};
const numbers = { folder: "/builder-images/numbers", start: 173, end: 192 };
const birthstones = {
  folder: "/builder-images/birthstones",
  start: 193,
  end: 281,
};

const charmsSteps = [
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

const sections = ["INITIALS (A–M)", "INITIALS (N–Z)", "NUMBERS", "BIRTH STONE"];

function generateRangeList(
  folder: string,
  start: number,
  end: number,
  ext = "webp"
) {
  const arr: string[] = [];
  for (let i = start; i <= end; i++) arr.push(`${folder}/image_${i}.${ext}`);
  return arr;
}

export default function CharmSelector({
  chainOptions,
  selectedChain,
  setSelectedChain,
  selectedCharms,
  setSelectedCharms,
}: CharmSelectorProps) {
  const [activeCharm, setActiveCharm] = useState<string>("CHAIN");
  const [expanded, setExpanded] = useState<string | null>(null);
  const currentChainMeta = chainOptions.find((c) => c.id === selectedChain)!;

  const setCharmAt = (index: number, charm: CharmPlacement) => {
    setSelectedCharms((prev) => {
      const next = [...prev];
      next[index] = charm;
      return next;
    });
  };
  const handlePickCharmImage = (src: string) => {
    const slotIndex = activeCharm.startsWith("CHARM")
      ? Math.max(0, Number.parseInt(activeCharm.replaceAll(/\D/g, "")) - 1)
      : null;

    const maxSlots = currentChainMeta.maxSlots;

    if (slotIndex !== null && slotIndex >= 0 && slotIndex < maxSlots) {
      setCharmAt(slotIndex, {
        src,
        leftPct: 50,
        topPct: 50,
      });
    } else {
      const firstEmpty = selectedCharms.findIndex((c, i) => i < maxSlots && !c);
      if (firstEmpty >= 0)
        setCharmAt(firstEmpty, {
          src,
          leftPct: 50,
          topPct: 50,
        });
      else {
        setCharmAt(maxSlots - 1, {
          src,
          leftPct: 50,
          topPct: 50,
        });
      }
    }
  };
  const initialsAMList = useMemo(
    () => generateRangeList(initialAM.folder, initialAM.start, initialAM.end),
    []
  );
  const initialsNZList = useMemo(
    () => generateRangeList(initialNZ.folder, initialNZ.start, initialNZ.end),
    []
  );
  const numbersList = useMemo(
    () => generateRangeList(numbers.folder, numbers.start, numbers.end),
    []
  );
  const birthstonesList = useMemo(
    () =>
      generateRangeList(birthstones.folder, birthstones.start, birthstones.end),
    []
  );

  const toggleSection = (title: string) =>
    setExpanded((prev) => (prev === title ? null : title));

  const clearSlot = (i: number) => setCharmAt(i, null);

  const handleSelectChain = (chain: ChainType) => {
    setSelectedChain(chain);
    setSelectedCharms((prev) => {
      const next = [...prev];
      for (let i = currentChainMeta.maxSlots; i < next.length; i++)
        next[i] = null;
      return next;
    });
  };
  return (
    <>
      <div className="grid grid-cols-3 gap-1 mb-8 w-full max-w-md text-sm">
        {charmsSteps.map((c) => (
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

      {activeCharm === "CHAIN" && (
        <div className="w-full max-w-md mt-4 mb-10">
          <h3 className="text-gray-800 font-semibold mb-2">
            Choose Chain Type
          </h3>
          <div className="flex gap-2">
            {chainOptions.map((c) => (
              <button
                key={c.id}
                onClick={() => handleSelectChain(c.id)}
                className={`flex-1 py-2 px-3 rounded-md border ${
                  selectedChain === c.id
                    ? "bg-pink-500 text-white"
                    : "bg-white text-gray-700 border-gray-200"
                }`}
              >
                <div className="text-sm font-medium">{c.label}</div>
                <div className="text-xs flex justify-center gap-2 opacity-70">
                  Slots: {c.maxSlots}
                  <span>{c.price}$</span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-5 gap-2">
            {Array.from({ length: currentChainMeta.maxSlots }).map((_, i) => (
              <div key={i + 1} className="flex flex-col items-center">
                <div className="w-12 h-12 border border-gray-200 rounded-md flex items-center justify-center bg-white">
                  {selectedCharms[i] ? (
                    <img
                      src={selectedCharms[i].src}
                      alt={`s${i}`}
                      className="w-10 h-10 object-contain"
                    />
                  ) : (
                    <span className="text-xs text-gray-400">{i + 1}</span>
                  )}
                </div>
                <div className="flex gap-1 mt-1">
                  <button
                    onClick={() => setActiveCharm(`CHARM ${i + 1}`)}
                    className="text-xs px-2 py-1 border border-gray-200 rounded-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => clearSlot(i)}
                    className="text-xs px-2 py-1 border border-red-200 rounded-md text-red-600"
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeCharm !== "CHAIN" && (
        <div className="flex flex-col space-y-3 text-sm font-medium text-pink-500 w-full max-w-md">
          {sections.map((title) => {
            const isOpen = expanded === title;
            return (
              <div key={title} className="border-b border-gray-200 pb-2">
                <button
                  onClick={() => toggleSection(title)}
                  className="w-full flex justify-between items-center text-center"
                >
                  <span className="text-gray-800">{title}</span>
                  <span
                    className={`text-gray-800 ${
                      title == "NUMBERS"
                        ? "ml-8"
                        : title === "BIRTH STONE"
                        ? "ml-2"
                        : "ml-0"
                    }`}
                  >
                    {title === "NUMBERS" && "6$"}
                    {(title === "INITIALS (A–M)" ||
                      title === "INITIALS (N–Z)") &&
                      "8$"}
                    {title === "BIRTH STONE" && "20$"}
                  </span>
                  {isOpen ? (
                    <Minus size={18} className="text-gray-600" />
                  ) : (
                    <Plus size={18} className="text-gray-600" />
                  )}
                </button>

                {isOpen && (
                  <div className="mt-2 pl-2 text-gray-600">
                    {/* For each section render actual pickers */}
                    {title === "INITIALS (A–M)" && (
                      <CharmGrid
                        images={initialsAMList}
                        onPick={handlePickCharmImage}
                      />
                    )}

                    {title === "INITIALS (N–Z)" && (
                      <CharmGrid
                        images={initialsNZList}
                        onPick={handlePickCharmImage}
                      />
                    )}

                    {title === "NUMBERS" && (
                      <CharmGrid
                        images={numbersList}
                        onPick={handlePickCharmImage}
                      />
                    )}

                    {title === "BIRTH STONE" && (
                      <CharmGrid
                        images={birthstonesList}
                        onPick={handlePickCharmImage}
                      />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
