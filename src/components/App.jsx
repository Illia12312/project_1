import './App.css';
import {Routes, Route} from 'react-router-dom'
import Layout from "./Layout/Layout";
import Cart from '../pages/Cart/Cart';
import HomePage from '../pages/HomePage/HomePage';
import Man from '../pages/Man/Man';
import Registration from '../pages/Registration/Registration';
import Login from '../pages/Login/Login';
import LogOut from 'pages/LogOut/LogOut';

const App = () =>{
    return(
        <div className="app">   
            <Routes>
                <Route path='/' element={<Layout/>} >
                    <Route index element={<HomePage/>} />
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/man" element={<Man/>}/>
                    <Route path="/logOut" element={<LogOut/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path='/login/registration' element={<Registration/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App;