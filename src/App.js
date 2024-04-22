import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Pricing from "./components/Pricing";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container"></div>
    </>
  );
}
