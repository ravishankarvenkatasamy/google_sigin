import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Signup from "./components/Signup/Signup";
import Home from "./components/pages/Home"

// import firebase from 'firebase/app';
// import 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };



function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Signup}> </Route>
        <Route path="/Home" Component={Home}> </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default Routing