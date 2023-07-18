import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages.js/Home";
import Cart from "./pages.js/Cart";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import Store from "./components/Store";
function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
