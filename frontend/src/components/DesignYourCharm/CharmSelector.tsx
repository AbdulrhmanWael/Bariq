import type { Charm } from "../../types";
import { Trash2, Edit, Move } from "lucide-react";

interface Props {
  charms: Charm[];
  activeCharmId: string | null;
  onSelect: (id: string | null) => void;
  onRemove: (id: string) => void;
  onChangeValue: (id: string, value: string) => void;
}

export default function CharmSelector({
  charms,
  activeCharmId,
  onSelect,
  onRemove,
  onChangeValue,
}: Readonly<Props>) {
  return (
    <div className="bg-white border rounded-md p-3 shadow-sm">
      <h3 className="text-sm font-semibold mb-2">Placed Charms</h3>

      <ul className="flex flex-col gap-2">
        {charms.length === 0 && (
          <li className="text-sm text-gray-500">
            No charms yet. Add one to start.
          </li>
        )}

        {charms.map((c) => (
          <li
            key={c.id}
            className={`flex items-center justify-between gap-3 p-2 rounded-md ${
              activeCharmId === c.id ? "bg-pink-50 border border-pink-200" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center bg-white border">
                <span className="text-sm font-semibold">
                  {String(c.value ?? "").slice(0, 2)}
                </span>
              </div>
              <div>
                <div className="text-sm font-medium">{c.type}</div>
                <div className="text-xs text-gray-500">t: {c.t.toFixed(2)}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                title="Select"
                onClick={() => onSelect(c.id)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <Move size={16} />
              </button>

              <button
                title="Edit value"
                onClick={() => {
                  const newVal = prompt(
                    "Enter new value (e.g. A) :",
                    c.value ?? ""
                  );
                  if (newVal != null) onChangeValue(c.id, newVal);
                }}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <Edit size={16} />
              </button>

              <button
                title="Remove"
                onClick={() => {
                  if (confirm("Remove this charm?")) onRemove(c.id);
                }}
                className="p-1 text-red-600 hover:bg-red-50 rounded"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
