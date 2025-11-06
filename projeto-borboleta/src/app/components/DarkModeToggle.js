'use client'

import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const modoSalvo = localStorage.getItem('modoEscuro');
            const initialMode = modoSalvo === 'true';
            
            setIsDarkMode(initialMode);
            
            if (initialMode) {
                document.body.classList.add('modo-escuro');
            } else {
                document.body.classList.remove('modo-escuro');
            }
        }
    }, []);

    const handleToggle = () => {
        const novoModo = !isDarkMode;
        setIsDarkMode(novoModo);

        if (typeof window !== 'undefined') {
            if (novoModo) {
                document.body.classList.add('modo-escuro');
            } else {
                document.body.classList.remove('modo-escuro');
            }

            localStorage.setItem('modoEscuro', novoModo);
            
            console.log(`Modo ${novoModo ? 'Escuro' : 'Claro'} ativado!`);
        }
    };

    return (
        <button
            id="btn-modo-escuro"
            title="Modo Escuro"
            onClick={handleToggle}
            style={{ 
                position: 'fixed', 
                top: '10px', 
                right: '10px', 
                padding: '10px', 
                fontSize: '20px', 
                cursor: 'pointer',
                zIndex: 1000
            }}
        >
            {isDarkMode ? '☀️' : '🌙'}
        </button>
    );
};
export default DarkModeToggle;
/**document.addEventListener('DOMContentLoaded', function() {
    
    const btnModoEscuro = document.createElement('button');
    btnModoEscuro.innerHTML = '🌙';
    btnModoEscuro.title = 'Modo Escuro';
    btnModoEscuro.id = 'btn-modo-escuro';
    
    document.body.appendChild(btnModoEscuro);
    
    const modoSalvo = localStorage.getItem('modoEscuro');
    if (modoSalvo === 'true') {
        document.body.classList.add('modo-escuro');
        btnModoEscuro.innerHTML = '☀️';
    }
    
    btnModoEscuro.addEventListener('click', function() {
        document.body.classList.toggle('modo-escuro');
        
        const estaEscuro = document.body.classList.contains('modo-escuro');
        localStorage.setItem('modoEscuro', estaEscuro);
        
        this.innerHTML = estaEscuro ? '☀️' : '🌙';
        
        console.log(`Modo ${estaEscuro ? 'Escuro' : 'Claro'} ativado!`);
})}**/