import React, { Fragment, useEffect, useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Swal from 'sweetalert2';
import { useParams, withRouter } from 'react-router-dom';


const EditarProducto = () => {

    const { id } = useParams();
    const URL = process.env.REACT_APP_API_URL;
  
    //declaro los state
    const [producto, setProducto] = useState({});
    // traer los datos del objeto a editar
    useEffect(() => {
        consultarProducto();

    }, []);

    const [categoria, setCategoria] = useState('');
    const consultarProducto = async () => {
        try {
            const respuesta = await fetch(URL + '/' + id);
           
            if (respuesta.status === 200) {
                const resultado = await respuesta.json();
                setProducto(resultado);

            }
        } catch (error) {
            console.log(error);
        }

    }

    const cambiarCategoria = (e) => { setCategoria(e.target.value) }

    return (
        <div>

            <Fragment>
                <Container className='my-4'>
                    <Form >
                        <h1 className='my-4 text-center'>Editar Producto</h1>
                        <Form.Group>
                            {/**(error === true) ? (<Alert variant={'danger'}>
                                Todos los campos son obligatorios
                            </Alert>) : null**/}

                            <Form.Label>Nombre del producto *</Form.Label>
                            <Form.Control type="text" placeholder="Submarino"
                            defaultValue={producto.nombreProducto}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Precio *</Form.Label>
                            <Form.Control type="number" placeholder="$50" defaultValue={producto.precioProducto}></Form.Control>
                        </Form.Group>
                        <div className='text-center my-4'>
                            <h3>Categoria *</h3>
                            <Form.Check
                                inline
                                type="radio"
                                label="Bebida caliente"
                                name='categoria'
                                value='bebida-caliente'
                                onChange={cambiarCategoria}
                                defaultChecked={producto.categoria && producto.categoria==='bebida-caliente'}
                            ></Form.Check>
                            <Form.Check
                                inline
                                type="radio"
                                label="Bebida Fria"
                                name='categoria'
                                value='bebida-fria'
                                onChange={cambiarCategoria}
                                defaultChecked={producto.categoria && producto.categoria==='bebida-fria'}
                            ></Form.Check>
                            <Form.Check
                                inline
                                type="radio"
                                label="Sandwich"
                                name='categoria'
                                value='sandwich'
                                onChange={cambiarCategoria}
                                defaultChecked={producto.categoria && producto.categoria==='sandwich'}
                            ></Form.Check>
                            <Form.Check
                                inline
                                type="radio"
                                label="Dulce"
                                name='categoria'
                                value='dulce'
                                onChange={cambiarCategoria}
                                defaultChecked={producto.categoria && producto.categoria==='dulce'}
                            ></Form.Check>
                            <Form.Check
                                inline
                                type="radio"
                                label="Salado"
                                name='categoria'
                                value='salado'
                                onChange={cambiarCategoria}
                                defaultChecked={producto.categoria && producto.categoria==='salado'}
                            ></Form.Check>
                        </div>
                        <Button variant='danger' type='submit' className='w-100'>Agregar Producto</Button>
                    </Form>
                </Container>
            </Fragment>
        </div>
    );
};

export default EditarProducto;