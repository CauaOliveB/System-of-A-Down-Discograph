import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Historic from "./pages/historic";
import Discograph from "./pages/discograph";

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Home />} />

      
      <Route path="/historic" element={<Historic />} />

     
      <Route path="/discograph" element={<Discograph />} />
    </Routes>
  );
}

export default App;