import React from "react";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        {/* <div className="p-6 border-b border-gray-200 font-bold text-xl">App Name</div> */}
        <nav className="p-4 space-y-4">
          <a
            href="#"
            className="block text-gray-700 hover:bg-gray-200 p-2 rounded-md"
          >
            Search
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:bg-gray-200 p-2 rounded-md"
          >
            Messages
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:bg-gray-200 p-2 rounded-md"
          >
            Yoga
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:bg-gray-200 p-2 rounded-md"
          >
            Food
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:bg-gray-200 p-2 rounded-md"
          >
            Workout
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:bg-gray-200 p-2 rounded-md"
          >
            Webshops
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden px-[5em]">
        {/* Header */}
        {/* <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Button</button>
        </header> */}

        {/* Scrollable Content Section */}
        <h1 className="text-2xl font-bold p-4">My Values</h1>

        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Section 1 */}
          <section className="grid grid-cols-4 gap-6">
            <div className="bg-white shadow rounded-lg p-6">37jr</div>
            <div className="bg-white shadow rounded-lg p-6">193</div>
            <div className="bg-white shadow rounded-lg p-6">107</div>
            <div className="bg-white shadow rounded-lg p-6">
              27.00%<br></br>bmi
            </div>
          </section>

          {/* Section 2 */}
          <section className="grid grid-cols-2 gap-6">
            <div className="bg-white shadow rounded-lg p-6 h-26">bmi</div>
            <div className="bg-white shadow rounded-lg p-6 h-26">age</div>
            <div className="bg-white shadow rounded-lg p-6 h-26">length</div>
            <div className="bg-white shadow rounded-lg p-6 h-26">weight</div>
          </section>

          <h1 className="text-2xl font-bold p-4">Webshops</h1>
          <section className="grid grid-cols-3 gap-6">
            <div className="bg-white shadow rounded-lg p-6 h-26 col-span-2">
            </div>
            <div className="bg-white shadow rounded-lg p-6 h-26">calendar</div>
          </section>
        </main>
      </div>
    </div>
  );
}
