import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateRepo from "./components/CreateRepo";
import RepoList from "./components/RepoList";
import RepoDetails from "./components/RepoDetails";
import UpdateRepo from "./components/UpdateRepo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RepoList />} />
        <Route path="/details" exact element={<RepoDetails />} />
        <Route path="/create" exact element={<CreateRepo />} />
        <Route path="/update" exact element={<UpdateRepo />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
