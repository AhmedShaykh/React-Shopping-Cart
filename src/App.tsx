import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Main from './Pages/Main';
import Login from './Pages/Login';
import './App.css';

const App: FC = () => {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </div>
    )
};

export default App;