import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import FriendsPage from "./pages/FriendsPage";
import SavedPostsPage from "./pages/SavedPostsPage";
import NotificationsPage from "./pages/NotificationsPage";
import PhotosPage from "./pages/PhotosPage";
import MemoriesPage from "./pages/MemoriesPage";
import GroupsPage from "./pages/GroupsPage";
import VideosPage from "./pages/VideosPage";
import MarketPlacePage from "./pages/MarketPlacePage";
import EventsPage from "./pages/EventsPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />}></Route>

        <Route path="/profile" element={<ProfilePage />}></Route>

        <Route path="/friends" element={<FriendsPage />}></Route>

        <Route path="/memories" element={<MemoriesPage />}></Route>

        <Route path="/savedposts" element={<SavedPostsPage />}></Route>

        <Route path="/notifications" element={<NotificationsPage />}></Route>

        <Route path="/photos" element={<PhotosPage />}></Route>

        <Route path="/groups" element={<GroupsPage />}></Route>

        <Route path="/videos" element={<VideosPage />}></Route>

        <Route path="/marketplace" element={<MarketPlacePage />} />

        <Route path="/events" element={<EventsPage />}></Route>

        <Route path="/log-in" element={<LoginPage />}></Route>

        <Route path="/" element={<RegisterPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
