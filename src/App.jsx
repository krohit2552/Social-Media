import React from 'react';
import Feed from './components/Feed';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-xl font-bold text-gray-900">Social Feed</h1>
        </div>
      </header>
      <main>
        <Feed />
      </main>
    </div>
  );
}

export default App;