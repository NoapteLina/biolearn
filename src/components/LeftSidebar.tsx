import { useState } from 'react';
import Link from 'next/link';

const LeftSidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <button
        className="absolute top-0 right-0 m-6 text-3xl"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        ☰
      </button>
      {isSidebarOpen && (
        <div className="absolute top-0 right-0 w-64 min-h-screen bg-gray-800 text-white p-6 z-10">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-600 rounded"></div>
            <span className="text-lg font-bold">Logo</span>
          </div>
          <Link href="/page1">
            <span className="block mt-6 py-1 px-3 rounded hover:bg-gray-700 cursor-pointer">Page 1</span>
          </Link>
          <button
            className="block w-full text-left mt-6 py-1 px-3 rounded hover:bg-gray-700"
            onClick={() => setSubMenuOpen(!isSubMenuOpen)}
          >
            Sub Menu
          </button>
        </div>
      )}
      {isSubMenuOpen && (
        <div className="absolute top-0 right-64 w-64 min-h-screen bg-gray-700 text-white p-6 z-20">
          <Link href="/subpage1">
            <span className="block py-1 px-3 rounded hover:bg-gray-600 cursor-pointer">Sub Page 1</span>
          </Link>
          <Link href="/subpage2">
            <span className="block py-1 px-3 rounded hover:bg-gray-600 cursor-pointer">Sub Page 2</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default LeftSidebar;
