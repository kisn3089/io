import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Header from './component/Header';
import Stores from './component/Stores';
import About from './component/About';
import Footer from './component/Footer';
import NotFound from './component/NotFound';


function Router() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/About" element={<About />}> </Route>
                <Route path="*" element={<NotFound />}> </Route>
                <Route path="/" element={<Stores />}> </Route>
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}

export default Router;