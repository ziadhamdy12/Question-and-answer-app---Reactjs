import HomeScreen from "./pages/home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <HomeScreen />
      <ToastContainer rtl={true} />
    </div>
  );
}

export default App;
