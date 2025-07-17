import React from 'react';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-purple-100 text-gray-900 p-4">
      <header className="bg-white shadow p-6 rounded-2xl mb-6">
        <h1 className="text-4xl font-bold text-center">Peaceful Vibes Showroom</h1>
        <p className="text-center text-sm text-gray-600">
          Photos • Videos • Editorials • Ads • Member Access
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow">Photo Gallery (Coming Soon)</div>
        <div className="bg-white p-4 rounded-2xl shadow">Videos (Coming Soon)</div>
        <div className="bg-white p-4 rounded-2xl shadow">Editorial Snippets (Coming Soon)</div>
      </main>

      <footer className="text-center text-xs text-gray-500 mt-10">
        &copy; 2025 Peaceful Vibes Showroom. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
