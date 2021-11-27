import React from 'react';

export function ProductList() {
    const listado = JSON.parse(localStorage.getItem("listadoProductos")) || [];
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                {
                    listado.map((p) => <tr>
                        <td>{p.nom}</td>
                        <td>{p.pre}</td>
                        <td>{p.stock}</td>
                    </tr>)
                }
            </tbody>
        </table>
    )
}