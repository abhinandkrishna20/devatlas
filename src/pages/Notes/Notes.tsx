import React, { useState, useEffect } from 'react';

// Define the structure of a Tab
interface Tab {
  id: string;
  title: string;
  isNewTab: boolean;
  content?: string; 
}
const Notes: React.FC = () => {
  // Initialize with one "New Tab" if empty
  const [tabs, setTabs] = useState<Tab[]>([
    { id: '1', title: 'Welcome', isNewTab: false, content: 'Welcome to your DevAtlas notes!' },
    { id: '2', title: 'Magazine', isNewTab: false, content: 'Magazine content goes here...' },
    { id: '3', title: 'New tab', isNewTab: true }
  ]);

  const [activeTabId, setActiveTabId] = useState<string>('3');

  // Helper: Create a brand new tab
  const createNewTab = () => {
    const newId = Date.now().toString();
    const newTab: Tab = {
      id: newId,
      title: 'New tab',
      isNewTab: true
    };
    setTabs([...tabs, newTab]);
    setActiveTabId(newId);
  };

  // Helper: Close a specific tab
  const closeTab = (idToClose: string, e?: React.MouseEvent) => {
    e?.stopPropagation(); // Prevent switching to the tab while closing it
    
    const filteredTabs = tabs.filter(tab => tab.id !== idToClose);
    
    // If we closed the active tab, find a new active tab
    if (activeTabId === idToClose && filteredTabs.length > 0) {
      // Set active to the tab next to it, or the last one
      const closedIndex = tabs.findIndex(tab => tab.id === idToClose);
      const nextActiveIndex = closedIndex === 0 ? 0 : closedIndex - 1;
      setActiveTabId(filteredTabs[nextActiveIndex].id);
    }
    
    setTabs(filteredTabs);
  };

  // Listen for global keyboard shortcuts (Ctrl + N)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'n') {
        e.preventDefault();
        createNewTab();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [tabs]);

  const activeTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <div>
      <div className="flex flex-col h-full text-slate-200 bg-[#161920]">
      {/* 1. Tab Bar Headers */}
      <div className="flex items-center border-b border-slate-700 bg-[#1e222b] overflow-x-auto select-none">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActiveTabId(tab.id)}
            className={`flex items-center gap-3 px-4 py-2 border-r border-slate-700 cursor-pointer text-sm transition-colors duration-150
              ${tab.id === activeTabId ? 'bg-[#161920] text-purple-400 font-medium' : 'hover:bg-[#232731] text-slate-400'}`}
          >
            <span>{tab.title}</span>
            <button 
              onClick={(e) => closeTab(tab.id, e)}
              className="hover:bg-slate-700 p-0.5 rounded text-xs text-slate-500 hover:text-slate-200"
            >
              ✕
            </button>
          </div>
        ))}
        
        {/* Plus Button to open a new tab */}
        <button 
          onClick={createNewTab}
          className="px-3 py-2 text-slate-400 hover:text-slate-200 hover:bg-[#232731] text-lg"
          title="New Tab (Ctrl + N)"
        >
          +
        </button>
      </div>

      {/* 2. Main Work Area Viewport */}
      <div className="flex-1 p-6 flex flex-col items-center justify-center relative">
        {tabs.length === 0 ? (
          <div className="text-center text-slate-500">
            <p className="mb-4">All tabs closed.</p>
            <button onClick={createNewTab} className="text-purple-400 underline">Open a new tab</button>
          </div>
        ) : activeTab?.isNewTab ? (
          /* Empty State View (Matches Obsidian's New Tab) */
          <div className="flex flex-col items-center gap-4 text-center select-none max-w-md">
            <div className="flex flex-col gap-3 text-sm">
              <button 
                onClick={() => {
                  if (activeTab) {
                    activeTab.title = "Untitled Note";
                    activeTab.isNewTab = false;
                    activeTab.content = "";
                    setTabs([...tabs]);
                  }
                }}
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                Create new note <span className="text-slate-500 ml-2">(Ctrl + N)</span>
              </button>
              
              <button className="text-purple-400 hover:text-purple-300 transition-colors">
                Go to file <span className="text-slate-500 ml-2">(Ctrl + O)</span>
              </button>
              
              <button 
                onClick={() => closeTab(activeTabId)}
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          /* Standard Active Note Content View */
          <div className="w-full h-full flex flex-col items-start justify-start">
            <h1 className="text-2xl font-bold mb-4">{activeTab?.title}</h1>
            <textarea
              className="w-full h-full bg-transparent border-none resize-none focus:outline-none text-slate-300 placeholder-slate-600"
              value={activeTab?.content || ''}
              onChange={(e) => {
                if (activeTab) {
                  activeTab.content = e.target.value;
                  setTabs([...tabs]);
                }
              }}
              placeholder="Start typing your markdown note..."
            />
          </div>
        )}
      </div>
      
    </div>
    </div>
    );  
}
export default Notes;