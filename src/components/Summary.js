import React from 'react'
import { tipoTrabajo } from '../helper'
import styled from "@emotion/styled";


const Div = styled.div`
    background-color: #386641;
    padding: 1em;
`

const H2 = styled.h2`
    text-align: center;
`

const Summary = ({summary}) => {

    const {total, data: {density, mts, plan}}  = summary

    return ( 
        <Div>
            <H2>Resultado de la cotización: ${total}</H2>
            <ul>
                <li>Densidad elegida: {density}</li>
                <li>Metros Cuadrados: {mts} mt2</li>
                <li>Tipo de trabajo: {tipoTrabajo(plan)}</li>
            </ul>
        </Div>
     );
}
 
export default Summary;