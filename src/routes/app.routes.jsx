import { Routes, Route } from "react-router-dom";

import { New } from "../pages/New";
import { Details } from "../pages/Details";
import { Home } from "../pages/Home";
import { Edit } from "../pages/Edit";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
}
