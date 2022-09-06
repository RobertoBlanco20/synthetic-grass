import styled from "@emotion/styled";


const Form = () => {

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
    `;

    const Select = styled.select`
        display: inline-block;
        width: 100%;
        padding: 1rem;
        border: 1px solid #e1e1e1;
        -webkit-appearance: none;
        background-color: #ecfff5;

    `;

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
        &:hover {
            background-color: #6A994E;
            cursor: pointer;
        }
    `;

    return ( 
        
            <Formulario>
                <Div>
                    <Label for="density">Densidad</Label>
                    <Select>
                        <option value="none">Seleccione un valor</option>
                        <option value="high">Fibra Alta (40mm a 60mm)</option>
                        <option value="medium">Fibra Media (20 a 35mm)</option>
                        <option value="low">Fibra Baja (5mm a 15mm)</option>
                    </Select>
                </Div>
                <Div>
                <Label for="mts">Superficie</Label>
                    <Select>
                        <option value="none">Seleccione un valor</option>
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
                    <input type="radio" name="trabajo" value='materiales'/> Materiales
                    <input type="radio" name="trabajo" value="colocado"/> Colocado 
                </Div>

                <Button type="button">Cotizar</Button>
            </Formulario>

     );
}
 
export default Form;