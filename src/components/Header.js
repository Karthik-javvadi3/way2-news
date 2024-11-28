import React, { useState } from 'react';

const Header = ({ activeTab, setActiveTab }) => {
  const [activeSubTab, setActiveSubTab] = useState('byTopic');
  
  const tabs = ['Top Stories', 'My News', 'Popular', 'Video'];
  const subTabs = ['By Topic', 'By Time'];

  return (
    <div className="bg-red-600 text-white sticky top-0 z-50">
      <div className="flex justify-between items-center p-4">
        <button className="text-2xl">☰</button>
        <div className="text-xl font-bold">BBC NEWS</div>
        <div className="flex gap-3">
          <button className="text-xl">✎</button>
          <button className="text-xl">⋮</button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="flex min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase().replace(' ', ''))}
              className={`px-6 py-3 whitespace-nowrap ${
                activeTab === tab.toLowerCase().replace(' ', '') 
                ? 'border-b-2 border-white' 
                : ''
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white text-black flex border-b">
        {subTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveSubTab(tab.toLowerCase().replace(' ', ''))}
            className={`flex-1 py-3 text-center ${
              activeSubTab === tab.toLowerCase().replace(' ', '') 
              ? 'border-b-2 border-red-600' 
              : ''
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
