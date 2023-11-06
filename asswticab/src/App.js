import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

function App() {
  return (
    <Routes>
      <Route path="/" element = {<Home/>}/>
    </Routes>
  );
}

export default App;
