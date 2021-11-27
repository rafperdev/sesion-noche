import React, { useEffect, useState } from 'react';
import { consumir } from '../api/comentarios';

export function Comentarios() {
    const [listComments, setListComment] = useState([]);
    useEffect(() => {
        const peticion = async () => {
            const data = await consumir();
            setListComment(data);
        }
        peticion();
    }, [])

    return (
        <div>
            {
                listComments.map(com => <p>{com.body}</p>)
            }
        </div>
    )
}