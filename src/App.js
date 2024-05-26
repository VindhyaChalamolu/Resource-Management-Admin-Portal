import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddResource from './components/AddResource';
import { Provider } from 'react-redux';
import store from './store';
import { ToastContainer } from 'react-toastify';
import Login from './components/Login';
function App() {


  return (
    <Provider store={store}>
    <div className="App">
      <Router basename="/Resource-Management-Admin-Portal">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addItem" element={<AddResource />} />
        </Routes>
      </Router>
      <ToastContainer 
        position="bottom-center"
        />
    </div>
    </Provider>
  );
}

export default App;
