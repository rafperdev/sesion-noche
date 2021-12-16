import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../auth/auth';

export function Productos() {
    let listado;
    const [success, setSuccess] = useState(false);
    const nomRef = useRef();
    const preRef = useRef();
    const stockRef = useRef();
    const idRef = useRef();
    const guardarOld = () => {
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

    function guardar() {
        const nombre = nomRef.current.value;
        const precio = preRef.current.value;
        const stock = stockRef.current.value;
        const _id = idRef.current.value;
        const token = localStorage.getItem("token");
        fetch("http://localhost:8080/producto/guardar", {
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${token}`
            },
            method: "POST",
            body: JSON.stringify({ nombre, precio, stock, _id })
        }).then(res => res.json())
            .then(res => {
                alert(res.msg)
            })
    }

    function consultar() {
        const nombre = nomRef.current.value;
        const token = localStorage.getItem("token");
        fetch("http://localhost:8080/producto/consultar", {
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${token}`
            },
            method: "POST",
            body: JSON.stringify({ nombre })
        }).then(res => res.json())
            .then(res => {
                idRef.current.value = res.data._id;
                preRef.current.value = res.data.precio;
                stockRef.current.value = res.data.stock;
            })
    }
    return (
        <>
            {
                auth() ?
                    <>
                        {success && <div class="alert alert-success" role="alert">Guardado con éxito :)</div>}
                        <form action="">
                            <input ref={idRef} type="hidden" />
                            <label htmlFor="">Nombre</label>
                            <input ref={nomRef} className="form-control" type="text" />
                            <label htmlFor="">Precio</label>
                            <input ref={preRef} className="form-control" type="text" />
                            <label htmlFor="">Stock</label>
                            <input ref={stockRef} className="form-control" type="text" />
                            <button className="btn btn-primary" type="button" onClick={guardar}>Guardar</button>
                            <button className="btn btn-primary" type="button" onClick={consultar}>Consultar</button>
                        </form>
                    </>
                    : <Link to="/">Usuario No autorizado. Ir al Login</Link>
            }
        </>
    )
}