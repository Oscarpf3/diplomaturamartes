import { useState } from 'react';

const EjemploEstado01 = props => {

    const [activo, setActivo] = useState(true);

    const toggleActivo = e => {
        setActivo(!activo);
    };

    return (
        <div>
            <input type="text" placeholder="clickear boton" disabled={!activo} />
            <button onClick={toggleActivo}>{activo ? 'Desactivar' : 'Activar'}</button>
        </div>
    );
}


export {
    EjemploEstado01
}