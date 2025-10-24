import { useState } from "react";
import { Clock, Plus } from "lucide-react";
import type { Design, DesignCardProps } from "../types";

export function DesignCard({ design, onEdit }: Readonly<DesignCardProps>) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Draft":
        return "bg-gray-200 text-gray-700";
      case "Submitted":
        return "bg-blue-100 text-blue-700";
      case "In Review":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <img
          src={design.image}
          alt={design.name}
          className="w-full h-64 object-cover"
        />
        <span
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
            design.status
          )}`}
        >
          {design.status}
        </span>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{design.name}</h3>

        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Clock size={16} className="mr-1" />
          <span>Last edited: {design.lastEdited}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">ID: {design.id}</span>
          <button
            onClick={() => onEdit(design.id)}
            className="px-4 py-2 border border-pink-600 text-pink-600 rounded-lg hover:bg-pink-50 font-medium text-sm"
          >
            Edit Design
          </button>
        </div>
      </div>
    </div>
  );
}

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState<"designs" | "orders">("designs");

  const designs: Design[] = [
    {
      id: "D1001",
      name: "Custom Gold Ring",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=300&fit=crop",
      lastEdited: "2023-08-15",
      status: "Draft",
    },
    {
      id: "D1002",
      name: "Pearl Necklace",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=300&fit=crop",
      lastEdited: "2023-08-10",
      status: "Submitted",
    },
    {
      id: "D1003",
      name: "Sapphire Earrings",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=300&fit=crop",
      lastEdited: "2023-08-05",
      status: "In Review",
    },
  ];

  const handleEditDesign = (id: string) => {
    console.log("Edit design:", id);
  };

  const handleNewDesign = () => {
    console.log("Create new design");
  };

  return (
    <div className="max-w-7xl min-w-[1053.75px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">My Dashboard</h1>

      {/* Tabs */}
      <div className="flex gap-8 border-b border-gray-200 mb-8">
        <button
          onClick={() => setActiveTab("designs")}
          className={`pb-4 px-2 font-medium relative ${
            activeTab === "designs"
              ? "text-pink-600"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          My Designs
          {activeTab === "designs" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-600" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("orders")}
          className={`pb-4 px-2 font-medium relative ${
            activeTab === "orders"
              ? "text-pink-600"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          My Orders
          {activeTab === "orders" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-600" />
          )}
        </button>
      </div>

      {/* Content Area */}
      {activeTab === "designs" && (
        <>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold">Your Custom Designs</h2>
            <button
              onClick={handleNewDesign}
              className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Plus size={20} />
              New Design
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designs.map((design) => (
              <DesignCard
                key={design.id}
                design={design}
                onEdit={handleEditDesign}
              />
            ))}
          </div>
        </>
      )}

      {activeTab === "orders" && (
        <div className="bg-white rounded-lg p-12 text-center">
          <p className="text-gray-500 text-lg">No orders yet</p>
          <p className="text-gray-400 mt-2">
            Your order history will appear here
          </p>
        </div>
      )}
    </div>
  );
}
