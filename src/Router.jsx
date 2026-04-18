import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Logement from './pages/Logement'
import APropos from './pages/APropos'
import Error404 from './pages/Error404'
import Header from './components/Header'
import Footer from './components/Footer'

function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes> <Route path="/" element={<Home />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="/a-propos" element={<APropos />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
export default Router