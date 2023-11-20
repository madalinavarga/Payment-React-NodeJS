import { Route, Routes } from "react-router-dom";
import Dummy from "./pages/Dummy";
import PayPalPayment from "./pages/PayPalPayment";
import ShoppingList from "./pages/ShoppingList";

function App() {
  return (
    <Routes>
      <Route path="/dummy" element={<Dummy />} />
      <Route path="/transaction" element={<PayPalPayment />} />
      <Route path="/" element={<PayPalPayment />} />
      <Route path="/products" element={<ShoppingList />} />
    </Routes>
  );
}

export default App;
