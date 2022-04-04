import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MintNft from "./pages/MintNft";
import StackMyNfts from "./pages/StackMyNfts";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route element={<Dashboard />} path="/" />
        <Route element={<MintNft />} path="/mint_nft" />
        <Route element={<StackMyNfts />} path="/stack_my_nfts" />

        {/* NOT FOUND ROUTE */}
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
