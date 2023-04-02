import Inicio from 'pages/Inicio';
import {useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cabecalho } from './components/Cabecalho';

export default function AppRouter() {
    const [tema, setTema] = useState('')
    useEffect(() => {
        if(localStorage.getItem('tema') === '' || localStorage.getItem('tema') === "claro") {
            localStorage.setItem('tema', 'claro')
            setTema('claro')
        } else {
            setTema('escuro')
        }
    })
    return (
        <BrowserRouter>
            <Cabecalho></Cabecalho>
            <main>
                <Routes>
                    <Route path='/' element={<Inicio></Inicio>}></Route>
                </Routes>
            </main>
        </BrowserRouter>
    )
}