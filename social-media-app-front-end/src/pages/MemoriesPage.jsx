import React from "react";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import Memories from "../components/Memories";
import Navbar from "../components/Navbar";

function MemoriesPage() {
  return (
    <div className="flex">
      <Navbar />
      <div className="w-64">
        <Sidebar />
      </div>
      <div className="flex-grow mt-4 max-w-4xl mx-auto gap-6 overflow-auto">
        <div className="flex flex-col mt-14">
          <h1 className="text-6xl mb-4 text-gray-300">Memories</h1>
          <Card>
            <Memories />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default MemoriesPage;
