import React from 'react'
import PropTypes from 'prop-types'
import { tipoTrabajo } from '../helper'
import styled from "@emotion/styled";


const Div = styled.div`
    background-image: 'url(../descarga.png)';
    padding: 1em;
    border: 1px solid #386641;
    border-radius: 5px;
`

const H2 = styled.h2`
    text-align: center;
    color: #386641;
`

const Ul = styled.ul`
    text-align: center;
    color: #386641;
    font-weight: 300;
`

const Summary = ({summary}) => {

    const {total, data: {density, mts, plan}}  = summary

    return ( 
        <Div>
            <H2>Resumen de la cotización: </H2>
            <Ul>
                <li>Densidad elegida: {density}</li>
                <li>Metros Cuadrados: {mts} mt2</li>
                <li>Tipo de trabajo: {tipoTrabajo(plan)}</li>
            </Ul>

            <H2>Total: ${total}</H2>
        </Div>
     );
}

Summary.propTypes = {
    summary: PropTypes.object.isRequired,
}
 
export default Summary;