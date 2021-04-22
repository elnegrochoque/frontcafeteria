import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ItemProducto = (props) => {

    const eliminarProducto = (id) => {
        console.log(id);
        const URL = process.env.REACT_APP_API_URL + '/' + id;
        console.log(URL);

        Swal.fire({
            title: '¿Está seguro?',
            text: "Se borrara permanentemente",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(URL, {
                        method: 'DELETE',
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });
                    if (response.status === 200) {
                        //mostrar el cartel de prod eliminado
                        Swal.fire(
                            'Producto eliminado',
                            'El producto seleccionado fue correctamente elminado',
                            'success'
                        )
                        //actualizar los datos
                        props.consultarAPI();
                    }
                    else {
                        Swal.fire(
                            'Error',
                            'Se produjo un error',
                            'error'
                        )
                    }
                } catch (error) {
                    console.log(error);
                    Swal.fire(
                        'Se produjo un eror',
                        'Intentelo en unos minutos',
                        'error'
                    )
                }
            }
        })
    }
    return (
        <div>
            <ListGroup.Item className="d-flex justify-content-between">
                <p>{props.producto.nombreProducto}
                    <span className='font-weight-bold'> ${props.producto.precioProducto}</span>
                </p>
                <div>
                    <Link to={`/productos/editar/${props.producto.id}`}className='btn btn-warning mr-2 text-light'>
                        <FontAwesomeIcon icon={faPencilAlt} ></FontAwesomeIcon>
                    </Link>

                    <Button variant='danger' onClick={() => eliminarProducto(props.producto.id)}>
                        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                    </Button>
                </div>
            </ListGroup.Item>
        </div>
    );
};

export default ItemProducto;