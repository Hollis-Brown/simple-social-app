import React from "react";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import PostForm from "../components/PostForm";
import Posts from "../components/Posts";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="flex">
      <Navbar />
      <div className="w-64">
        <Sidebar />
      </div>
      <div className="flex-grow mt-4 max-w-4xl mx-auto gap-6 overflow-auto scrollbar-hide">
        <div className="flex flex-col mt-14">
          <h1 className="text-6xl mb-4 text-gray-300">Posts</h1>
          <PostForm className="lg:mr-20"/>
          <Card>
            <Posts />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;
