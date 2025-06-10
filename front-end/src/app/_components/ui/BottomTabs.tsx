
import { Home, Search, PlusSquare, Bell, User } from "lucide-react";

const tabs = [
  { icon: <Home size={20} />, label: "Home" },
  { icon: <Search size={20} />, label: "Search" },
//   { icon: <PlusSquare size={20} />, label: "Post" },
//   { icon: <Bell size={20} />, label: "Alerts" },
  { icon: <User size={20} />, label: "Profile" },
];

export const BottomTabBar = () => (
 <nav className="fixed bottom-0 inset-x-0 bg-white z-50 border-t border-gray-200 h-16 flex justify-around items-center px-4">
    {tabs.map((tab, idx) => (
      <button key={idx} className="flex flex-col items-center text-xs text-gray-500">
        {tab.icon}
        <span className="text-[10px] mt-1">{tab.label}</span>
      </button>
    ))}
  </nav>
);
