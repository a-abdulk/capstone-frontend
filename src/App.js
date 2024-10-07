import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import DataTrends from "./pages/DataTrends.js";
import ProfilePage from "./ProfilePage.js";

function App() {
  return (
    <div className="App">
      {/* paths to the actual pages end user would see */}
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<HomePage />} />
            <Route path="/DataTrends" element={<DataTrends />} />
            <Route path="/ProfilePage" element={<ProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// using imports, exports, compoents, propers, maps, and so on and so forth
