import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Homepage/home";
export default function Start() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
