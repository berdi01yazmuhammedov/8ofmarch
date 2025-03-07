import { createRoot } from 'react-dom/client'
import App from "./pages/App/App.tsx";
import { BrowserRouter, Routes, Route } from 'react-router'
import Womansday from './pages/Womansday/Womansday.tsx'
import "./styles/index.css"
createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path='/womansday' element={<Womansday />} />
        </Routes>
    </BrowserRouter>
)
