import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import CartPage from "./pages/CartPage";
import LikePage from "./pages/LikePage";
import Home from "./pages/Home";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="favorites" element={<LikePage />} />
      </Route>
    </Routes>
  );
};

export default App;
