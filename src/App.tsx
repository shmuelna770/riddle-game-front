import { Route, Routes } from "react-router";
// import "./App.css";
import Home from "./pages/Home1";
import Login from "./pages/Login";
import Play from "./pages/Play";
import SignUp from "./pages/SignUp";
import Option from "./pages/Option";
import ShowRiddles from "./pages/ShowRiddles";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/play" element={<Play />} />
        <Route path="/option" element={<Option />} />
        <Route path="/showAllRiddles" element={<ShowRiddles />} />
      </Routes>
    </div>
  );
}

export default App;
