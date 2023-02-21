//import { CalculateTable, InputCalculate } from '../components'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import {CalculateTable} from '../components'
import queryString from 'query-string'
//import { getWorkoutsByName } from '../helpers'


export const CalculatePage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const {q = 135} = queryString.parse(location.search);
    const {p = 45} = queryString.parse(location.search);

    const {calculateNumber, barraNumber, onInputChange } = useForm({
        calculateNumber: q,
        barraNumber: p
    })
   
    const onCalculateSubmit = (event) => {
    event.preventDefault();
    // if ( calculateNumber.trim().length <= 1 ) return;
    navigate(`?q=${calculateNumber}&p=${barraNumber}`)
    }
    
    return (
        <>
        {/* <h1>CalculatePage</h1>*/}
        {/* <hr />  */}
        <div className="row">
            <div className="col-12">
                <h4 className='mt-4'>Ingresa el peso en Libras</h4>
                <hr />
                <form onSubmit={onCalculateSubmit}>
                    <input type="float"
                        placeholder="Calcular pesos"
                        className="form-control"
                        name="calculateNumber"
                        autoComplete="off"
                        value = {calculateNumber}
                        onChange = {onInputChange}
                    />
                    <hr />
                    <h4>Selecciona Tu Barra</h4>
                    <select type="float"
                        placeholder="Peso Barra"
                        className="form-control"
                        name="barraNumber"
                        autoComplete="off"
                        value = {barraNumber}
                        onChange = {onInputChange}>
                        <option 
                            value= {45}
                        > 
                            45
                        </option>
                        <option 
                            value={35}
                        > 
                            35 
                        </option>
                    </select> 
                    <hr />
                    <button
                        className="btn btn-outline-primary mt-1"
                    >
                        Calcular
                    </button>
                    <hr />
                </form>
            </div>
                <h4 className='mt-4'>Resultados</h4>
                <hr />
                <CalculateTable varMaximo={q} bar={p}/> 

                
            {/* </div> */}
        </div>
        </>
    )

}
