import React, { useRef, useState } from "react";

export function Login() {
    const [error, setError] = useState();
    const [msgError, setMsgError] = useState();
    const usuarioRef = useRef();
    const passwordRef = useRef();
    function login() {
        const usuario = usuarioRef.current.value;
        const password = passwordRef.current.value;
        fetch("http://localhost:8080/user/login", {
            headers: { "content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({ usuario, password })
        }).then(res => res.json())
            .then(res => {
                if (res.estado === "ok") {
                    {
                        localStorage.setItem("token", res.token);
                        window.location.href = res.url;
                    }
                } else {
                    setError(true);
                    setMsgError(res.msg);
                }
            })
    }
    return (
        <>
            {error && <div className="alert alert-danger" role="alert">{msgError}</div>}
            <form action="">
                <label htmlFor="">Usuario</label>
                <input ref={usuarioRef} className="form-control" type="text" />
                <label htmlFor="">Password</label>
                <input ref={passwordRef} className="form-control" type="password" />
                <button className="btn btn-primary" type="button" onClick={login}>Entrar</button>
            </form>
        </>
    )
}