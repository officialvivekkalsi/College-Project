import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomeScreen from "./Components/HomeScreen";
import "./Components/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StubyId from "./Components/StubyId";
import Post from "./Components/Post";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" exact="true" element={<HomeScreen />} />
            <Route path="add-Student/" element={<Post />} />
            <Route path="student/:id" element={<StubyId />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
