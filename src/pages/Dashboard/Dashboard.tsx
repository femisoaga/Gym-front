import React from "react";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b border-gray-200 font-bold text-xl">App Name</div>
        <nav className="p-4 space-y-4">
          <a href="#" className="block text-gray-700 hover:bg-gray-200 p-2 rounded-md">Dashboard</a>
          <a href="#" className="block text-gray-700 hover:bg-gray-200 p-2 rounded-md">Reports</a>
          <a href="#" className="block text-gray-700 hover:bg-gray-200 p-2 rounded-md">Settings</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        {/* <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Button</button>
        </header> */}

        {/* Scrollable Content Section */}
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Section 1 */}
          <section className="grid grid-cols-3 gap-6">
            <div className="bg-white shadow rounded-lg p-6">Card 1</div>
            <div className="bg-white shadow rounded-lg p-6">Card 2</div>
            <div className="bg-white shadow rounded-lg p-6">Card 3</div>
          </section>

          {/* Section 2 */}
          <section className="grid grid-cols-2 gap-6">
            <div className="bg-white shadow rounded-lg p-6 h-96">Content 1</div>
            <div className="bg-white shadow rounded-lg p-6 h-96">Content 2</div>
          </section>
        </main>
      </div>
    </div>
  );
}
