import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export function Productos() {
    let listado;
    const [success, setSuccess] = useState(false);
    const nomRef = useRef();
    const preRef = useRef();
    const stockRef = useRef();
    const guardar = () => {
        // Captura los datos de las cajas de texto
        const nom = nomRef.current.value;
        const pre = preRef.current.value;
        const stock = stockRef.current.value;
        //Crea JSON productos
        const prod = { nom, pre, stock };
        //Obtiene los productos guardados
        listado = JSON.parse(localStorage.getItem("listadoProductos")) || [];
        //Agrega el nuevo producto
        listado.push(prod);
        //Guarda el array de productos en local storage
        localStorage.setItem("listadoProductos", JSON.stringify(listado));
        //Limpia las cajas de texto
        nomRef.current.value = "";
        preRef.current.value = "";
        stockRef.current.value = "";
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
    };
    return (
        <>
            {success && <div class="alert alert-success" role="alert">Guardado con éxito :)</div>}
            <form action="">
                <label htmlFor="">Nombre</label>
                <input ref={nomRef} className="form-control" type="text" />
                <label htmlFor="">Precio</label>
                <input ref={preRef} className="form-control" type="text" />
                <label htmlFor="">Stock</label>
                <input ref={stockRef} className="form-control" type="text" />
                <button className="btn btn-primary" type="button" onClick={guardar}>Guardar</button>
                <Link to="/producto/lista">Listar</Link>
                <Link to="/comments">Comentarios</Link>
            </form>
        </>
    )
}