import { useState } from "react";
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
      console.log("Successfully got user cars");
      setPosts(fetchedPosts.posts);
      console.log("Successfully fetched posts", posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

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
    return posts.map((post, index) => (
      <div>
        <div key={index} className="">
          {" "}
          <div className="flex-shrink-0">
            <img
              className="inline-block h-10 w-10 rounded-full"
              src="https://i.imgur.com/e8nzIKr.png"
              alt=""
            />
          </div>
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
            {post.id === editPostId ? (
              <textarea
                value={editMessageValue}
                onChange={(e) => setEditMessageValue(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md resize-none"
              />
            ) : (
              <p className="text-gray-800">{post.message}</p>
            )}
          </div>
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => handleDeletePost(post.id)}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Delete
            </button>
            {post.id === editPostId ? (
              <button
                onClick={() => savePostChanges(post)}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => handleEditPost(post)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="flex items-start space-x-4">
      {/* ProfileCard */}
      <div className="flex-shrink-0">
        <img
          className="inline-block h-10 w-10 rounded-full"
          src="https://i.imgur.com/e8nzIKr.png"
          alt=""
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="rounded-lg overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
          <textarea
            value={newMessageValue}
            onChange={(e) => setNewMessageValue(e.target.value)}
            placeholder="What's on your mind?"
            rows={1}
            className="block w-full py-3 border-0 resize-none focus:ring-0 sm:text-sm"
          />
        </div>

        {/* Button Div */}
        <div className=" bottom-0 inset-x-0 pl-3 pr-2 py-2 flex justify-end">
          <button
            onClick={handleCreatePost}
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Post
          </button>
        </div>

        <div className="mt-1">{renderPosts()}</div>
      </div>
    </div>
  );
}

export default PostForm;
