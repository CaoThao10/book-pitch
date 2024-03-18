import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import MenuComponent from "./components/MenuComponent";
import LogInPage from "./page/LogInPage";
import Register from "./page/Register";
import HomePage from "./page/UserDashboard/HomePage";
import About from "./page/UserDashboard/About";
import Pitch from "./page/UserDashboard/Pitch";
import DetailPage from "./page/UserDashboard/DetailPage";
import PricePage from "./page/UserDashboard/PricePage";
import Infomation from "./page/UserDashboard/Infomation";

// import LogInPage from "./page/LogInPage";
// import ListSan from "./page/AdminDashboard/ListSan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/san" element={<Pitch />} /> */}
        <Route path="/chi-tiet" element={<DetailPage />} />
        <Route path="/bang-gia" element={<PricePage />} />
        <Route path="/thong-tin-ca-nhan" element={<Infomation />} />
        {/* <Route path="/thong-tin" element={<Infor />} /> */}

        <Route path="/log-in" element={<LogInPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<MenuComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
