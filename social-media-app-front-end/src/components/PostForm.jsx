import { useState, useEffect } from "react";
import Card from "./Card";
import {
  createSocialPost,
  getUserSocialPosts,
  deleteSocialPost,
  updateSocialPost,
} from "../ApiServices/SocialPostsService";

function PostForm() {
  const [posts, setPosts] = useState([]);
  const [newMessageValue, setNewMessageValue] = useState("");
  const [editPostId, setEditPostId] = useState(null);
  const [editMessageValue, setEditMessageValue] = useState("");

  // Function to fetch posts from the backend
  const fetchPosts = async () => {
    try {
      const fetchedPosts = await getUserSocialPosts();
      setPosts(fetchedPosts.posts);
    } catch (error) {
    }
  };

  // Inside your component
  useEffect(() => {
    fetchPosts();
  }, []);

  // Function to handle creating a new post
  const handleCreatePost = async () => {
    try {
      await createSocialPost({ newMessageValue });

      setNewMessageValue("");
      console.log("Posts after update:", posts); // This line is added
      fetchPosts();
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  // Function to handle deleting a post
  const handleDeletePost = async (postId) => {
    await deleteSocialPost(postId);
    fetchPosts();
  };

  // Function to handle editing a post
  const handleEditPost = (post) => {
    setEditMessageValue(post.message);
    setEditPostId(post.id);
  };

  // Function to save edited post changes
  const savePostChanges = async (post) => {
    updateSocialPost({
      id: post.id,
      message: editMessageValue,
    });
    setEditPostId(null);
    setEditMessageValue("");
    fetchPosts();
  };

  // Function to render posts dynamically
  const renderPosts = () => {
    return posts
      .sort((a, b) => b.id - a.id)
      .map((post, index) => (
        <Card key={index}>
        <div>
          {" "}
          <div className="space-x-3">
            {/* ProfileCard */}
            <div className="flex ml-3">
              <img
                className="inline-block w-11 rounded-full"
                src="https://i.imgur.com/e8nzIKr.png"
                alt=""
                />
                <h3 className="font-bold ml-3">John Doe</h3>
            </div>
            <div className="flex-1">
              <div className="mt-3 rounded-lg overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                {post.id === editPostId ? (
                  <textarea
                    value={editMessageValue}
                    onChange={(e) => setEditMessageValue(e.target.value)}
                    placeholder="What's on your mind?"
                    rows={1}
                    className="block w-full p-3 border-0 resize-none focus:ring-0 sm:text-sm "
                  />
                ) : (
                  <p className="text-gray-500 sm:text-sm ">
                    {post.message}
                  </p>
                )}
              </div>

              {/* Buttons Div */}
              <div className="bottom-0 pr-2 py-2 flex justify-end space-x-2">
                <button
                  onClick={() => handleDeletePost(post.id)}
                  className="px-4 py-2 text-sm font-medium bg-red-500 text-white rounded-md hover:bg-red-700"
                >
                  Delete
                </button>
                {post.id === editPostId ? (
                  <button
                    onClick={() => savePostChanges(post)}
                    className="px-4 py-2 text-sm font-medium bg-green-500 text-white rounded-md hover:bg-green-700"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEditPost(post)}
                    className="px-4 py-2 text-sm font-medium bg-blue-500 text-white rounded-md hover:bg-blue-700"
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
          </div>
          </div>
          </Card>
      ));
  };

  return <div className="">
    <Card>
 <div className="space-x-3">
        {/* ProfileCard */}
        <div className="flex ml-3">
          <img
            className="inline-block w-11 rounded-full"
            src="https://i.imgur.com/e8nzIKr.png"
            alt=""
          />
          <h3 className="font-bold ml-3">John Doe</h3>
        </div>
        <div className="flex-1">
          <div className="-ml-3 rounded-lg overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 mt-1">
            <textarea
              value={newMessageValue}
              onChange={(e) => setNewMessageValue(e.target.value)}
              placeholder="What's on your mind?"
              rows={1}
              className="block w-full border-0 resize-none focus:ring-0 lg:text-sm sm:text-sm"
            />
          </div>

          {/* Button Div */}
          <div className=" bottom-0 pr-2 py-2 flex justify-end">
            <button
              onClick={handleCreatePost}
              type="submit"
              className="px-4 py-2 text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </Card>
      <div>{renderPosts()}</div>
  </div>;
}

export default PostForm;
