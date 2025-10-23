import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingCartPage from "./components/Cart/ShoppingCartPage";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShoppingCartPage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
