"use client";
import { Bell, Headphones, LogOut, Moon, Settings, Users } from "lucide-react";
import { useTheme } from "./themeContext";

export default function Sidebar() {
  const { darkMode, setDarkMode } = useTheme();
  return (
    <aside className={`w-64 p-5 shadow-md flex flex-col justify-between rounded-r-xl transition-all 
        ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
     >
      <div>
        <h1 className="text-2xl font-bold mb-6 italic">Shoorah</h1>
        <nav>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 cursor-pointer">
              <Settings size={20} /> <span>Dashboard</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 cursor-pointer">
              <Settings size={20} /> <span>Surveys</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 cursor-pointer">
              <Settings size={20} /> <span>Peap</span>
            </li>
            <li className="flex items-center space-x-3 text-purple-600 font-semibold border-l-4 border-purple-600 pl-2">
              <Headphones size={20} /> <span>Instant Support</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 cursor-pointer">
              <Users size={20} /> <span>Sub Admin</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 cursor-pointer">
              <Users size={20} /> <span>Approvals</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 cursor-pointer">
              <Users size={20} /> <span>Solutions</span>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <hr className="my-4" />
        <div className="flex items-center justify-between text-gray-700">
          <span>Darkmode</span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="cursor-pointer"
          />
        </div>
        <div className="flex items-center space-x-3 text-gray-700 hover:text-red-500 cursor-pointer mt-4">
          <LogOut size={20} /> <span>Logout</span>
        </div>
      </div>
    </aside>
  );
}
