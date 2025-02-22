import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Homepage from "./pages/Homepage/index.js";
import "./pages/Homepage/styles.css"; // Importing the custom CSS file
//import Login from "./Componets/LoginForm.js";
//import RegisterForm from "./Componets/RegisterForm.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} /> 
          

          
          

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
