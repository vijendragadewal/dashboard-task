"use client";
import Sidebar from "./sidebar";
import { useTheme } from "./themeContext";

export default function LayoutContent({ children }) {
    const { darkMode } = useTheme(); // Get darkMode from context
  
    return (
      <div className={darkMode ? "flex dark bg-gray-900 text-white" : "flex bg-white text-black"}>
        {/* Sidebar */}
        <Sidebar />
  
        {/* Main Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    );
  }
  