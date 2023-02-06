import React, { useState } from "react";
import "./App.css";
import { ListUser } from "./components/ListUser";
import { Pagination } from "./components/Pagination";

function App() {
  const [page, setPage] = useState(1);
  return (
    <div className="App">
      <h1 className="title">List Of User</h1>
      <ListUser page={page} />
      <Pagination setPage={setPage} />
    </div>
  );
}

export default App;
