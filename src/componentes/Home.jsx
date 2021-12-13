import React from "react";
import { Link } from 'react-router-dom';

export function Home(){
    return(
        <>
            <Link to="/producto">Producto</Link> <br />
            <Link to="/ventas">Ventas</Link>
        </>
    )
}