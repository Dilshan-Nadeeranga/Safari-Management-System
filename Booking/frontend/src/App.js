import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


/*import UpdateCustomer from "./Componets/UpdateCustomer.js";
import Dashborad from "./Componets/dashboard.js";
import Homepage from "./Componets/Homepage.js";
import Login from "./Componets/CustomerLogin.js";*/
import AddRoom from './Componets/AddRoom.js';
/*import RoomList from './Componets/DisplayRoom.js';
import Bookroom from './Componets/Bookroom.js';
import Register from "./Componets/CustomerRegister.js";
//import Profilepage from './Componets/Profile.js';*/



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          
          <Route path='/' element={<AddRoom />} />
          
          

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
