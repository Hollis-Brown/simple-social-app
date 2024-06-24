import React from "react";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import Navbar from "../components/Navbar";

function ProfilePage() {
  return (
    <div className="flex ">
      <Navbar />
      <div className="w-64">
        <Sidebar />
      </div>
      <div className="flex-grow mt-4 max-w-4xl mx-auto gap-6 overflow-auto">
        <div className="flex flex-col mt-14 ">
          <h1 className="text-6xl mb-4 text-gray-300 ">Profile</h1>
            <Profile/>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
