// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";

import NotFound from "./pages/NotFound";
import LayoutFrontend from "./components/LayoutFrontend";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<PageA />} />
        <Route path="/page-b" element={<PageB />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
