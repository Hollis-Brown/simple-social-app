import React from "react";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import Marketplace from "../components/MarketPlace";
import Navbar from "../components/Navbar";

function MarketPlacePage() {
  return (
    <div className="flex">
      <Navbar />
      <div className="w-64">
        <Sidebar />
      </div>
      <div className="flex-grow mt-4 max-w-4xl mx-auto gap-6 overflow-auto">
        <div className="flex flex-col mt-14">
          <h1 className="text-6xl mb-4 text-gray-300">Marketplace</h1>
          <Card>
            <Marketplace />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default MarketPlacePage;
