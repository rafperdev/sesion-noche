import React, { useEffect, useRef, useState } from "react";
import { VentasLista } from "./VentasLista";

export function Ventas() {
    const [listado, setListado] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const prodRef = useRef();
    const totalRef = useRef();
    useEffect(() => {
        fetch("http://localhost:8080/producto/listar", {
            method: "POST"
        }).then(res => res.json())
            .then(res => {
                if (res.estado === "ok")
                    setListado(res.data);
            })
    }, []);

    function guardar() {
        const producto = prodRef.current.value;
        const total = totalRef.current.value;
        fetch("http://localhost:8080/venta/guardar", {
            headers: { "content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({ producto, total })
        }).then(res => res.json())
            .then(res => {
                setRefresh(!refresh);
                alert(res.msg)
            })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <form action="">
                        <select ref={prodRef} className="form-select" name="" id="">
                            <option value="">-- Seleccione --</option>
                            {
                                listado.map(p => <option key={p._id} value={p._id} >{p.nombre}</option>)
                            }
                        </select>
                        <label htmlFor="">Total</label>
                        <input ref={totalRef} className="form-control" type="number" />
                        <button className="btn btn-primary" type="button" onClick={guardar} >Guardar</button>
                    </form>
                </div>
                <div className="col">
                    <VentasLista recarga={refresh} />
                </div>
            </div>
        </div>
    )
}