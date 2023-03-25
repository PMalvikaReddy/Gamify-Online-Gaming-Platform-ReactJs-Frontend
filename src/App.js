import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Library from "./pages/Library/Library";
import Community from "./components/Community/Community";
import ViewNft1 from "./components/ViewNft1/ViewNft1";
import ViewNft2 from "./components/ViewNft2/ViewNft2";
import Fall from "./components/Fall/Fall";
import Store from "./pages/Store/Store";
import Main from "./pages/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import SingleNft from "./components/SingleNft/SingleNft";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Falling from "./components/Falling/Falling";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route exact path="/Store" element={<Store />}></Route>
        <Route path="/Community" element={<Community />}></Route>
        <Route path="/Library" element={<Library />}></Route>
        <Route path="/ViewNft1" element={<ViewNft1 />}></Route>
        <Route path="/ViewNft2" element={<ViewNft2 />}></Route>
        <Route path="/Fall" element={<Fall />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
