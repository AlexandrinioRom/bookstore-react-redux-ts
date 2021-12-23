import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Registration } from './pages/registration'
import { Login } from './pages/login'
import Home from "./pages/home"


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App
