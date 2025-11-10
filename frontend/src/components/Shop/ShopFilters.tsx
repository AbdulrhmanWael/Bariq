import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface ShopFiltersProps {
  selectedFilters: {
    categories: string[];
    material: string[];
    stone: string[];
    priceRange: { min: number; max: number };
  };
  onFilterChange: (filters: ShopFiltersProps["selectedFilters"]) => void;
}

export default function ShopFilters({
  selectedFilters,
  onFilterChange,
}: Readonly<ShopFiltersProps>) {
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "categories",
    "material",
    "stone",
  ]);

  const filterSections: { id: string; title: string; options: string[] }[] = [
    {
      id: "categories",
      title: "All Categories",
      options: ["Bracelets", "Necklaces", "Rings", "Earrings"],
    },
    {
      id: "material",
      title: "Material",
      options: ["Gold", "Silver", "Platinum", "Rose Gold"],
    },
    {
      id: "stone",
      title: "Stone",
      options: ["Diamond", "Ruby", "Emerald", "Sapphire", "Pearl"],
    },
    {
      id: "occasion",
      title: "Occasion",
      options: ["Wedding", "Birthday", "Anniversary", "Casual"],
    },
    {
      id: "style",
      title: "Style",
      options: ["Modern", "Classic", "Vintage", "Bohemian"],
    },
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const handleCheckboxChange = (sectionId: string, option: string) => {
    const updated = selectedFilters[
      sectionId as keyof typeof selectedFilters
    ] as string[];
    const newSelection = updated.includes(option)
      ? updated.filter((o) => o !== option)
      : [...updated, option];

    onFilterChange({ ...selectedFilters, [sectionId]: newSelection });
  };

  const handlePriceChange = (minOrMax: "min" | "max", value: number) => {
    onFilterChange({
      ...selectedFilters,
      priceRange: { ...selectedFilters.priceRange, [minOrMax]: value },
    });
  };

  return (
    <div className="w-64 bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-6">Filters</h2>

      {filterSections.map((section) => (
        <div key={section.id} className="mb-6 border-b border-gray-200 pb-4">
          <button
            onClick={() => toggleSection(section.id)}
            className="flex items-center justify-between w-full text-left font-semibold text-gray-800 mb-3"
          >
            <span>{section.title}</span>
            {expandedSections.includes(section.id) ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </button>

          {expandedSections.includes(section.id) && (
            <div className="space-y-2">
              {section.options.map((option) => (
                <label
                  key={option}
                  className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-pink-600"
                >
                  <input
                    type="checkbox"
                    checked={(
                      selectedFilters[
                        section.id as keyof typeof selectedFilters
                      ] as string[]
                    ).includes(option)}
                    onChange={() => handleCheckboxChange(section.id, option)}
                    className="mr-2 rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                  />
                  {option}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}

      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-3">Price Range</h3>
        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max="1000"
            value={selectedFilters.priceRange.max}
            onChange={(e) => handlePriceChange("max", Number.parseInt(e.target.value))}
            className="w-full accent-pink-600"
          />
          <div className="flex items-center justify-between text-sm">
            <input
              type="number"
              value={selectedFilters.priceRange.min}
              onChange={(e) =>
                handlePriceChange("min", Number.parseInt(e.target.value))
              }
              className="w-20 px-2 py-1 border border-gray-300 rounded text-center"
              placeholder="Min"
            />
            <span className="text-gray-500">-</span>
            <input
              type="number"
              value={selectedFilters.priceRange.max}
              onChange={(e) =>
                handlePriceChange("max", Number.parseInt(e.target.value))
              }
              className="w-20 px-2 py-1 border border-gray-300 rounded text-center"
              placeholder="Max"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
