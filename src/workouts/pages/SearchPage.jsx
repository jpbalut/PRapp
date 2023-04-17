import { useLocation, useNavigate } from 'react-router-dom'
import {WorkoutCard} from '../components'
import queryString from 'query-string'
import { getWorkoutsByName } from '../helpers'
import { useFormBasic } from '../../hooks'

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);

  const workouts = getWorkoutsByName(q);

  const showSearch = (q.length===0)
  const showError = (q.length>0) && workouts.length===0
  
  const {searchText, onInputChange } = useFormBasic({
    searchText: q
  })


const onSearchSubmit = (event) => {
  event.preventDefault();
  navigate(`?q=${searchText}`)
}

  return (
    <>
      <div className="row">
        <div className="col-5">
          <h4 className='mt-4'>Buscando</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input type="text"
              placeholder="Buscar Ejercicio"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value = {searchText}
              onChange = {onInputChange}
            />
            <button
              className="btn btn-outline-primary mt-1"
            >
              Buscar
            </button>


          </form>
        </div>
        <div className="col-7">
          <h4 className='mt-4'>Resultados</h4>
          <hr />
          {/* { 
            (q==='') 
            ? <div className="alert alert-primary">search workout</div>
            : (workouts.length===0) 
            && <div className="alert alert-danger"> No Workout <b>{q}</b> Found</div>
          } */}

            <div className="alert alert-primary animate__animated animate__fadeIn" style={{ display: showSearch ? '' : 'none'}}>Buscar Ejercicio</div>
            <div className="alert alert-danger animate__animated animate__fadeIn" style={{ display: showError ? '':'none'}}> No se encontro el ejercicio <b>{q}</b> </div>

          { workouts.map(workout => (
            <WorkoutCard key = {workout.id} {...workout} /> 
          ))
          }

        </div>
      </div>
    </>
  )
}
