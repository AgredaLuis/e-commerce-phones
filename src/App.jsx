import "./App.css";
import {
  Navbar,
  ProductList,
  Details,
  Cart,
  NotFound,
  Modal,
} from "./containers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  // Obtiene el estado del modal desde el store de Redux
  const showModal = useSelector((state) => state.modal);

  return (
    <>
      <BrowserRouter basename="e-commerce-phones">
        <Navbar />
        <Routes>
          <Route path="/" Component={ProductList} />
          <Route path="/details/" Component={NotFound} />
          <Route path="/details/:id" Component={Details} />
          <Route path="/cart" Component={Cart} />
          <Route path="*" Component={NotFound} />
        </Routes>
        {showModal.isOpen && <Modal id={showModal.id}/>}
      </BrowserRouter>
    </>
  );
}

export default App;
