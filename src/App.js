import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/common/Footer";
import Topbar from "./components/common/Topbar";
import CustomRoutes from "./router/CustomRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <CustomRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
