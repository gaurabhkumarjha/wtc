import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Edit from "./Pages/Edit";
function App() {
  return (
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/edit/:id" element={<Edit/>}/>
    </Routes>
  );
}

export default App;
