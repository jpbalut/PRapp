//import { CalculateTable, InputCalculate } from '../components'
import { useLocation, useNavigate } from 'react-router-dom'
import { useFormBasic } from '../../hooks'
import {CalculateTable} from '../components'
import queryString from 'query-string'
import { BarSelector } from '../components/BarSelector'
import { Grid } from '@mui/material'
//import { getWorkoutsByName } from '../helpers'
import { WorkoutLayout } from '../layout/WorkoutLayout'
import { useSelector } from 'react-redux'

//const discos_lb = [5, 10, 15, 25, 35, 45, 55]

export const CalculateView = () => {


    // const handleAutoAssignSwitch = ()=>{
    //     console.log('cambio switch')
    // }

    // const handleCheckBoxChange = (event) =>{
    //     console.log(`Se desmarco ${event.target.id}`)
    // }
    const { active:ejercicio } = useSelector(state => state.workout)
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
        <div className="row">
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
                <form>
                    <BarSelector valuevar={barraWeight} onchangevar= {onInputChange}/>
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
                </form>
            </div>
                <CalculateTable varMaximo={ejercicio.Rm} barraWeight={45}/> 
                <button className="btn btn-outline-primary" onClick={onBack}>Back</button>
        

                
            {/* </div> */}
        </div>
        </Grid>
        </WorkoutLayout>
    )

}
