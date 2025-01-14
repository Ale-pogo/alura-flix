import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Index";
import Footer from "./components/Footer/Index";
import Home from "./Pages/Home/Index";
import NewVideo from "./Pages/NewVideo/Index";
import NotFound from "./components/NotFound/index";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewVideo />} />   
      <Route path="*" element={<NotFound/>} />   
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;


