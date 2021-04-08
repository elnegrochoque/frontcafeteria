import React, { Fragment } from "react";
import { Container, Form, Button } from "react-bootstrap";

const AgregarProducto = () => {
  return (
    <Fragment>
      <Container className='my-4'>
        <Form>
          <h1 className='my-4 text-center'>Agregar nuevo producto</h1>
          <Form.Group>
            <Form.Label>Nombre del producto</Form.Label>
            <Form.Control type="text" placeholder="Submarino"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Precio</Form.Label>
            <Form.Control type="number" placeholder="$50"></Form.Control>
          </Form.Group>
          <div className='text-center my-4'>
          <h3>Categoria</h3>
            <Form.Check
              inline
              type="radio"
              label="Bebida caliente"
              name='categoria'
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              label="Bebida Fria"
              name='categoria'
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              label="Sandwich"
              name='categoria'
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              label="Dulce"
              name='categoria'
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              label="Salado"
              name='categoria'
            ></Form.Check>
          </div>
          <Button variant='danger' type='submit' className='w-100'>Agregar Producto</Button>
        </Form>
      </Container>
    </Fragment>
  );
};

export default AgregarProducto;
