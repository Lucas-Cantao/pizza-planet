import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../components/home';
import Cart from '../components/cart';
import Footer from "../components/footer";

export default function AppRoutes(){
    return (
        <Router>
            <Footer/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
        </Router>
    )
}