import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const Producto = () => {
    const {id} = useParams();
    const [producto, setProducto] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/productos/"+id)
            .then(res => {
                setProducto(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    const borrarProducto = id => {
        axios.delete("http://localhost:8000/api/productos/"+id)

    }

    return(
        <div className="card">
            <div className="card-header">{producto.nombre}</div>
            <div className="card-body">
                <h2>${producto.precio}</h2>
                <p>
                    {producto.descripcion}
                </p>
                <Link to="/" className="btn btn-primary">Regresar</Link>
                <Link to="/" className="btn btn-danger" onClick={() => borrarProducto(id)}>Eliminar</Link>
            </div>
        </div>
    )

}

export default Producto;