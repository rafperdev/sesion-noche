import React, { useEffect, useState } from "react";

export function VentasLista(props) {
    const [listado, setListado] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem("token");
        fetch("http://localhost:8080/venta/listar", {
            headers: {"authorization": `Bearer ${token}`},
            method: "GET"
        }).then(res => res.json())
            .then(res => {
                if (res.estado === "ok")
                    setListado(res.ventas);
            })
    }, [props.recarga])
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {
                    listado.map(v => <tr><td>{v.producto.nombre}</td><td>{v.total}</td></tr>)
                }
            </tbody>
        </table>
    )
}