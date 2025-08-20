import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import JDForm from "./page/JDForm";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <div className="hiredude">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<JDForm />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
