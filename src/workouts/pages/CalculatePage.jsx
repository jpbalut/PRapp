//import { CalculateTable, InputCalculate } from '../components'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import {CalculateTable} from '../components'
import queryString from 'query-string'
import { BarSelector } from '../components/BarSelector'
//import { getWorkoutsByName } from '../helpers'


export const CalculatePage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const {q = 135} = queryString.parse(location.search);
    const {p = 45} = queryString.parse(location.search);

    const {calculateNumber, barraWeight, onInputChange } = useForm({
        calculateNumber: q,
        barraWeight: p
    })
   
    const onCalculateSubmit = (event) => {
    event.preventDefault();
    // if ( calculateNumber.trim().length <= 1 ) return;
    navigate(`?q=${calculateNumber}&p=${barraWeight}`)
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
                    <BarSelector valuevar={barraWeight} onchangevar= {onInputChange}/>
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
                <CalculateTable varMaximo={q} barraWeight={p}/> 

                
            {/* </div> */}
        </div>
        </>
    )

}
