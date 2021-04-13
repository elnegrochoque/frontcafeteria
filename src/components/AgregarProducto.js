import React, { Fragment, useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

const AgregarProducto = () => {

  const URL = process.env.REACT_APP_API_URL;
  console.log(URL);
  const [nombreProducto, setNombreProducto] = useState('');
  const [precioProducto, setPrecioProducto] = useState('');
  const [categoria, setCategoria] = useState('');
  const [error, setError] = useState(false);

  const cambiarCategoria = (e) => { setCategoria(e.target.value) }

  const handleSubmit = async(e) => {
    e.preventDefault();
    //  validar los datos
    if (nombreProducto.trim() === '' || precioProducto.trim() === '' || categoria === '') {
      // mostrar el cartel de error
      setError(true);
      return;
    } else {
      // quitar cartel de error
      console.log('aqui esta todo bien envio de datos')
      setError(false);

      // crear el objeto a enviar
      const datos = {
        nombreProducto,
        precioProducto,
        categoria,
      };
      console.log(datos);

      //enviar objetoa la api, operacion POST
      try{
        const parametros ={
          method: "POST",
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify(datos)
        };
        // ejecutar la solicitud o request
        const respuesta = await fetch(URL, parametros);
        console.log(respuesta);
      }catch(error){
        console.log(error);
      }
    }
    // enviar el producto a la api

  }

  return (
    <Fragment>
      <Container className='my-4'>
        <Form onSubmit={handleSubmit}>
          <h1 className='my-4 text-center'>Agregar nuevo producto</h1>
          <Form.Group>
            {(error === true) ? (<Alert variant={'danger'}>
              Todos los campos son obligatorios
            </Alert>) : null}

            <Form.Label>Nombre del producto *</Form.Label>
            <Form.Control type="text" placeholder="Submarino" onChange={(e) => setNombreProducto(e.target.value)}></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Precio *</Form.Label>
            <Form.Control type="number" placeholder="$50" onChange={(e) => setPrecioProducto(e.target.value)}></Form.Control>
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
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              label="Bebida Fria"
              name='categoria'
              value='bebida-fria'
              onChange={cambiarCategoria}
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              label="Sandwich"
              name='categoria'
              value='sandwich'
              onChange={cambiarCategoria}
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              label="Dulce"
              name='categoria'
              value='dulce'
              onChange={cambiarCategoria}
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              label="Salado"
              name='categoria'
              value='salado'
              onChange={cambiarCategoria}
            ></Form.Check>
          </div>
          <Button variant='danger' type='submit' className='w-100'>Agregar Producto</Button>
        </Form>
      </Container>
    </Fragment>
  );
};

export default AgregarProducto;
