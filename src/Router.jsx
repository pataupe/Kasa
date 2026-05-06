import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Logement from './pages/Logement/Logement'
import APropos from './pages/APropos/APropos'
import Error404 from './pages/Error404/Error404'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function Router() {
    return (
        <BrowserRouter>
                <Header />
                <main className='content-container'>
                <Routes> 
                    <Route path="/" element={<Home />} />
                    <Route path="/logement/:id" element={<Logement />} />
                    <Route path="/a-propos" element={<APropos />} />
                    <Route path="/404" element={<Error404 />} />
                    <Route path="*" element={<Navigate to="/404" replace />} />
                </Routes>
                </main>
            <Footer />
        </BrowserRouter>
    )
}
export default Router