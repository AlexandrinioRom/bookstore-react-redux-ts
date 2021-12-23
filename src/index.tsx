import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Registration } from './pages/registration'
import { Login } from './pages/login'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { store } from './store'
import App from './App'

ReactDOM.render(
  <Provider store = {store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);