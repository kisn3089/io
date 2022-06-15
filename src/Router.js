import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Header from './component/Header';
import Stores from './component/Stores';
import About from './component/About';
import Footer from './component/Footer';
import NotFound from './component/NotFound';
import Members from './component/Members'
import Login from "./component/Login";


function Router() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="*" element={<NotFound />}> </Route>
                <Route path="/stores" element={<Stores />}> </Route>
                <Route path="/members" element={<Members />}> </Route>
                <Route path="/login" element={<Login />}> </Route>
                <Route path="/" element={<About />}> </Route>
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}

export default Router;