import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const FacilityNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("kolam"); // Default tab

  const tabs = [
    { id: "kolam", label: "Kolam Pemancingan" },
    { id: "resto", label: "Resto" },
    { id: "penyewaan", label: "Penyewaan Alat Pancing" },
    { id: "lain-lain", label: "Lain-Lain" },
  ];

  // Update activeTab berdasarkan route sekarang
  useEffect(() => {
    const currentPath = location.pathname.split("/").pop(); // Ambil bagian terakhir dari URL
    if (tabs.some((tab) => tab.id === currentPath)) {
      setActiveTab(currentPath);
    }
  }, [location.pathname, tabs]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId); // Update state
    navigate(`/${tabId}`); // Ganti seluruh path
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Tab Navigation */}
      <div className="mb-4 border-b">
        <ul
          className="flex flex-wrap justify-center sm:justify-start sm:flex-row flex-col -mb-px text-sm font-medium text-center"
          role="tablist"
        >
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className="sm:flex-1 w-full sm:w-auto mb-2 sm:mb-0"
              role="presentation"
            >
              <button
                className={`w-full sm:w-auto inline-block p-4 rounded-t-lg ${
                  activeTab === tab.id
                    ? "text-[#F29F05] border-b-2 border-[#F29F05] font-bold"
                    : "text-[#183262] hover:text-gray-600"
                }`}
                onClick={() => handleTabClick(tab.id)}
                role="tab"
                aria-controls={tab.id}
                aria-selected={activeTab === tab.id}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FacilityNav;
