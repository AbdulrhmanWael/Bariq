import { Plus, Minus } from "lucide-react";
import type { ExpandableSectionProps } from "../../types";

export default function ExpandableSection({
  title,
  expanded,
  onToggle,
}: Readonly<ExpandableSectionProps>) {
  const isOpen = expanded === title;

  return (
    <div className="border-b border-gray-200 pb-2">
      <button
        onClick={onToggle}
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
}
