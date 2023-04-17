//import { CalculateTable, InputCalculate } from '../components'
import { useLocation, useNavigate } from 'react-router-dom'
import { useFormBasic } from '../../hooks'
import {BarSelectorKg, CalculateTableKg} from '../components'
import queryString from 'query-string'
import { BarSelector } from '../components/BarSelector'
import { Grid } from '@mui/material'
//import { getWorkoutsByName } from '../helpers'
import { WorkoutLayout } from '../layout/WorkoutLayout'

//const discos_lb = [5, 10, 15, 25, 35, 45, 55]

export const CalculatePageKg = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const {q = 60} = queryString.parse(location.search);
    const {p = 20} = queryString.parse(location.search);

    const {calculateNumber, barraWeight, onInputChange } = useFormBasic({
        calculateNumber: q,
        barraWeight: p
    })

    const onCalculateSubmit = (event) => {
    event.preventDefault();
    // if ( calculateNumber.trim().length <= 1 ) return;
    navigate(`?q=${calculateNumber}&p=${barraWeight}`)
    }
    // const handleAutoAssignSwitch = ()=>{
    //     console.log('cambio switch')
    // }

    // const handleCheckBoxChange = (event) =>{
    //     console.log(`Se desmarco ${event.target.id}`)
    // }

    return (
        <WorkoutLayout>
        <Grid
            container
            spacer={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: 'calc(100vh - 110px)' , borderRadius: 3}}
        >
            <h1>Calculador de Porcentajes</h1>
            <p>Con esta herramienta podrás calcular cuantos discos por lado debes ponerla a tu barra, según tu RM para cada uno de los porcentajes típicos de trabajo.</p>
        <div className="row">
        {/* <h4 className='mt-4'>Elige Libras o Kilogramos</h4> */}
            {/* <Stack direction="row" spacing={1} alignItems="center">
                <SwitchContainer
                    label="Lb"
                    handleSwitch={handleAutoAssignSwitch}
                >
                   Lb
                </SwitchContainer>
                <Typography>Kg</Typography>
            </Stack> */}
      
            <div className="col-12">
                <h4 className='mt-4'>Ingresa el peso en Kilos</h4>
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
                    <BarSelectorKg valuevar={barraWeight} onchangevar= {onInputChange}/>
                    {/* <fieldset data-role = "controlgroup" data-type = "horizontal">
                        <legend>Discos Disponibles en tu Gimnasio</legend>
                        {discos_lb.map((disco)=>(
                            <div key = {disco}>
                                <input type="checkbox" id={disco} name={disco} onChange={handleCheckBoxChange} checked/>
                                <label> {disco} </label>
                            </div>
                        ))}
                        
                    </fieldset> */}
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
                <CalculateTableKg varMaximo={q} barraWeight={p}/> 

                
            {/* </div> */}
        </div>
        </Grid>
        </WorkoutLayout>
    )

}
