import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter basename="/">
      <Header />
      <Routes>
      </Routes>
    </BrowserRouter>
  );
}

export default App;