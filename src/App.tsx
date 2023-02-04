import { FC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Main from './Pages/Home/Main';
import MainPage from './Pages/Home/MainPage';
import Login from './Pages/Login';
import Post from './Pages/Posts/CreatePost';
import './App.css';

const App: FC = () => {
    return (
        <ChakraProvider>
            <div className="App">
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/" element={<MainPage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/post" element={<Post />} />
                    </Routes>
                </Router>
            </div>
        </ChakraProvider>
    )
};

export default App;