import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Dashboard/App';
import WatchlistPage from './UserWatchlist/watchlist';
import DiscussPage from './Community/community';
import ProfilePage from './UserProfile/profile';
import ShowPage from './ShowPage/showpage';
import ExplorePage from './Explore/explore';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/home" element={<App/>}/>
      <Route path="/explore" element={<ExplorePage/>}/>
      <Route path="/watchlist" element={<WatchlistPage/>}/>
      <Route path="/discussion" element={<DiscussPage/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
      <Route path="/watchlist/show/:showid" element={<ShowPage/>}/>
    </Routes>
  </BrowserRouter>
);