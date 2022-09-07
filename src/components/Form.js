import React, {useState} from 'react';
import { calcularDensidad } from '../helper'
import styled from "@emotion/styled";

const Formulario = styled.form`
        font-weight: 600;
        padding: 0 1em 1em 1em;
    `;

    const Div = styled.div`
        margin: 1em 0;
    `

    const Label = styled.label`
        flex: 0 0 100px;
        width: 100px;
        margin-right: 1em;
        color: #386641;
        font-weight: 400;
    `;

    const Span = styled.span`
        color: #386641;
        font-weight: 300;
    `

    const Select = styled.select`
        display: inline-block;
        width: 100%;
        padding: 1rem;
        border: 1px solid #e1e1e1;
        -webkit-appearance: none;
        background-color: #ecfff5;

    `;

    const InputRadio = styled.input`
        margin: 0 1em;
    `;

    const MensajeError = styled.div`
        background-color: #bc4749;
        color: #fff;
        padding: 1em 0;
        text-align: center;
        width: 100%;

    `

    const Button = styled.button`
        display: block;
        width: 100%;
        color: #fff;
        background-color: #386641;
        padding: 0.5em 0;
        border: 1px solid #386641;
        font-size: 1.3em;
        font-weight: bold;
        border-radius: 5px;
        transition: background-color .3s;
        &:hover {
            background-color: transparent;
            cursor: pointer;
            color: #386641;
        }
    `;


const Form = ({setSummary, setUpdate}) => {
    
    const [ data, setData ] = useState({
        density: '',
        mts: '',
        plan: ''
    })

    const [ error, setError ] = useState(false)

    const {density, mts, plan} = data

    const updateData = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })

    } 

    const handleSubmit = e => {
        e.preventDefault();

        // Validar 
        if( density.trim() === ''  || mts.trim() === '' || plan.trim() === ''){
            setError(true)
            return;
        }
        
        setError(false)
        
        // Si pasa la validacion:
        // Calcular costo de la densidad
        let resultado = 5000 * calcularDensidad(density);

        // Calcular costo x mt2
        resultado *= mts;
        

        
        
        // Calcuar costo SOLO si requiere instalacion
        if(plan === 'colocado'){
            resultado *= 1.20
        }


        setUpdate(true)

        
        setTimeout( () => {

            setUpdate(false)

            setSummary({
                total: resultado,
                data
            })

        }, 3000 )       
    }

    return ( 
        
            <Formulario
                onSubmit={handleSubmit}
            >

                { error ? <MensajeError>Todos los campos son obligatorios</MensajeError>  : null } 
                <Div>
                    <Label htmlFor="density">Densidad</Label>
                    <Select
                        name="density"
                        value={density}
                        onChange={updateData}
                    >
                        <option value="">Seleccione un valor</option>
                        <option value="Alta">Fibra Alta (40mm a 60mm)</option>
                        <option value="Media">Fibra Media (20 a 35mm)</option>
                        <option value="Baja">Fibra Baja (5mm a 15mm)</option>
                    </Select>
                </Div>
                <Div>
                <Label htmlFor="mts">Superficie</Label>
                    <Select
                        name="mts"
                        value={mts}
                        onChange={updateData}
                    >
                        <option value="">Seleccione un valor</option>
                        <option value="10">10 mts2</option>
                        <option value="20">20 mts2</option>
                        <option value="30">30 mts2</option>
                        <option value="40">40 mts2</option>
                        <option value="50">50 mts2</option>
                        <option value="70">70 mts2</option>
                        <option value="100">100 mts2</option>
                        <option value="120">120 mts2</option>
                        <option value="150">150 mts2</option>
                        <option value="200">200 mts2</option>
                        <option value="300">300 mts2</option>
                        <option value="500">500 mts2</option>
                        <option value="1000">1000 mts2</option>
                    </Select>
                </Div>
                <Div>
                    <Label>Trabajo</Label> 
                    <InputRadio onChange={updateData} type="radio" name="plan" value='materiales' checked={plan === 'materiales'}/> <Span>Materiales</Span>
                    <InputRadio onChange={updateData} type="radio" name="plan" value="colocado" checked={plan === 'colocado'}/> <Span>Colocado</Span> 
                </Div>

                <Button type="submit">Cotizar</Button>
            </Formulario>

     );
}
 
export default Form;