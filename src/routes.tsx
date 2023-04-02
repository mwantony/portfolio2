import Inicio from 'pages/Inicio';
import {useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cabecalho } from './components/Cabecalho';

export default function AppRouter() {
    const [aparecer, setAparecer] = useState(false)
    const [selecionado, setSelecionado] = useState(0)
    return (
        <BrowserRouter>
            <Cabecalho aparecer={aparecer} setAparecer={setAparecer} selecionado={selecionado} setSelecionado={setSelecionado}></Cabecalho>
            <main>
                <Routes>
                    <Route path='/' element={<Inicio></Inicio>}></Route>
                </Routes>
            </main>
        </BrowserRouter>
    )
}