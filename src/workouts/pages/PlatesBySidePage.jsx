//import { CalculateTable, InputCalculate } from '../components'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import {CalculateTable, PlateCalculate45} from '../components'
import queryString from 'query-string'
//import { getWorkoutsByName } from '../helpers'


export const PlatesBySidePage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const {q = ''} = queryString.parse(location.search);

    //const workouts = getWorkoutsByName(q);

    // const showSearch = (q.type===0)
    // const showError = (q.type!==0) && workouts.length===0

    const {calculateNumber, onInputChange } = useForm({
        calculateNumber: q
    })

    const onCalculateSubmit = (event) => {
    event.preventDefault();
    // if ( calculateNumber.trim().length <= 1 ) return;

    navigate(`?q=${calculateNumber}`)
    }

    return (
        <>
        <h1>CalculatePage</h1>
        <hr />
        <div className="row">
            <div className="col-5">
                <h4>Ingresa el peso en Libras</h4>
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
                    <button
                        className="btn btn-outline-primary mt-1"
                    >
                        Calcular
                    </button>
                </form>
            </div>
            {/* <div className="col-7"> */}
                <h4>Results</h4>
                <hr />
            {/* { 
                (q==='') 
                ? <div className="alert alert-primary">search workout</div>
                : (workouts.length===0) 
                && <div className="alert alert-danger"> No Workout <b>{q}</b> Found</div>
            } */}
{/* 
                <div className="alert alert-primary animate__animated animate__fadeIn" >search workout</div>
                <div className="alert alert-danger animate__animated animate__fadeIn" > No Workout <b>{q}</b> Found</div> */}
                <PlateCalculate45 peso={q}/>
                
            {/* </div> */}
        </div>
        </>
    )

}
