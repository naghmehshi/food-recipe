import { BrowserRouter} from "react-router-dom";
import "./assets/css/App.css"
import RouteMap from "./routes";

function App() {
  return (
    <BrowserRouter>
       <RouteMap/>
    </BrowserRouter>
  );
}

export default App;
