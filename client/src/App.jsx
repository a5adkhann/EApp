import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import MainUI from "./pages/MainUI";
import Products from "./components/Products";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Toaster } from "react-hot-toast";

// Wrapper to use `useLocation` with conditional rendering
const AppLayout = ({ children }) => {
  const location = useLocation();

  const hideNavbarFooter =
    location.pathname === "/signin" || location.pathname === "/signup";

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      {children}
      {!hideNavbarFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<MainUI />} />
          <Route path="/products" element={<Products />} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </AppLayout>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </BrowserRouter>
  );
};

export default App;
