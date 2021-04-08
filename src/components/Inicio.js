import React, { Fragment } from 'react';
import cafe from '../img/coffee.jpg'

const Inicio = () => {
    return (
        <Fragment>
         
            <img src={cafe} alt="imagen del cafe" className='w-100'/>
           
        </Fragment>
    );
};

export default Inicio;