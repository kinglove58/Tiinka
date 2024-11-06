import { Outlet } from "react-router-dom";
import NavItem from "./components/NavItem";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-200">
        <div>
          <NavItem />
        </div>

        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
