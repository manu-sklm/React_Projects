import React, { useState } from "react";
import clsx from "clsx";

const menuItems = [
  { icon: "🏠", label: "Home" },
  { icon: "💬", label: "Chat" },
  { icon: "⚙️", label: "Settings" },
];

export default function GeminiSidebar() {
  // `expanded` is true if toggled open, false if toggled closed, or null for hover-only
  const [expanded, setExpanded] = useState(null);

  // Handle mouse enter/leave for hover expand (only if not toggled)
  const handleMouseEnter = () => {
    if (expanded === null) setExpanded(true);
  };
  const handleMouseLeave = () => {
    if (expanded === null) setExpanded(false);
  };

  // Toggle expand/collapse on menu button click
  const handleToggle = () => {
    setExpanded((prev) => (prev === true ? false : true));
  };

  // Sidebar is expanded if toggled open, or if hovered (and not toggled closed)
  const isExpanded = expanded === true;

  return (
    <aside
      className={clsx(
        "relative flex flex-col bg-white shadow-lg transition-all duration-300 ease-in-out",
        isExpanded ? "w-56" : "w-16",
        "h-screen group"
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Toggle Button */}
      <button
        className={clsx(
          "absolute -right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white shadow transition-transform duration-200 hover:scale-110",
          isExpanded ? "" : ""
        )}
        aria-label="Toggle sidebar"
        type="button"
        onClick={handleToggle}
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
      {/* Sidebar Title */}
      <div className="flex items-center mt-14 mb-2 px-4">
        <span
          className={clsx(
            "text-lg font-bold text-blue-500 transition-opacity duration-300",
            isExpanded ? "opacity-100" : "opacity-0"
          )}
        >
          Gemini
        </span>
      </div>
      {/* Menu */}
      <nav className="flex flex-col items-center flex-1">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className="flex items-center w-full px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <span className="text-xl">{item.icon}</span>
            <span
              className={clsx(
                "ml-4 text-base font-medium text-gray-700 whitespace-nowrap transition-opacity duration-300",
                isExpanded ? "opacity-100" : "opacity-0"
              )}
            >
              {item.label}
            </span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
