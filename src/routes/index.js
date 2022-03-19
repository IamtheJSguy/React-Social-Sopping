import React from "react";
import { Routes, Route } from "react-router-dom";

// import Accounts from "../views/Accounts/index";
import Accounts from "../Layouts/Accounts/index";
import Login from "../views/Login";
import Home from "../views/Home";
import CoCart from "../views/CoCart";
import CreateCoCart from "../views/CreateCoCart"
import JoinCoCart from "../views/JoinCoCart"
import Members from "../views/Members"
import ProductSearchResult from "../views/ProductSearchResult"
import SearchResult from "../views/SearchResult"
import Terms from "../views/Terms"
import Chat from "../views/Chat"
import CoCarts from "../views/CoCarts";


const Routers = () => {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/accounts/*" element={<Accounts />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cocarts" element={<CoCarts />} />
        <Route path="/cocarts/:id" element={<CoCart />} />
        <Route path="/cocarts/create" element={<CreateCoCart />} />
        <Route path="/cocarts/join" element={<JoinCoCart />} />
        <Route path="/members" element={<Members />} />
        <Route path="/productresults" element={<ProductSearchResult />} />
        <Route path="/results" element={<SearchResult />} />
        <Route path="/chat/:chatId" element={<Chat />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
  );
};

export default Routers;