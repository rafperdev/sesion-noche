import React from "react";
import { Link } from "react-router-dom";

export function Menu() {
    function logout() {
        localStorage.removeItem("token");
        window.location.href = "/";
    }
    return (
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <Link to="/producto" style={{ margin: 10 }}>Productos</Link>
            </li>
            <li className="nav-item">
                <Link to="/ventas" style={{ margin: 10 }}>Ventas</Link>
            </li>
            <li className="nav-item">
                <button className="btn btn-danger" type="button" onClick={logout}>Logout</button>
            </li>
        </ul>
    )
}