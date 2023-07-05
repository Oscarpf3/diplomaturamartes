const EjemploProps01 = props => {
    
    return (
        <h3>Hola {props.nombre}</h3>
    )
};

const EjemploProps02 = props => {

    const { elementos } = props;

    return (
        <ul>
            {elementos.map(elemento => <li key={elemento}>{elemento}</li>)}
        </ul>
    );
};

const EjemploProps03 = ({titulo, texto}) => {

    return (
        <div>
            <h4>{ titulo }</h4>
            <p>{ texto }</p>
        </div>
    );
};


const EjemploProps04 = props => {
    return (
        <label>ver en consola: <input type="text" onChange={(e) => props.cambiaValor(e.target.value)} /></label>
    );
}


const EjemploProps05 = props => {
    // defino la funcion que va a manjear el evento del click
    const handleClick = e => {
        // valido que esten pasando el "manejador" que necesito
        if (props.eventoClick) {
            // si lo pasaron lo ejecuto
            props.eventoClick('me clickaste');
        }
    }

    return (
        <p>
            <button onClick={handleClick}>Clickeame!</button>
        </p>
    );
}

export {
    EjemploProps01,
    EjemploProps02,
    EjemploProps03,
    EjemploProps04,
    EjemploProps05
};