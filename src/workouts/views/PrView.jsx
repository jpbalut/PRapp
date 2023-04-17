import { CalculateOutlined, SaveOutlined } from "@mui/icons-material"
import { Button, Experimental_CssVarsProvider, Grid, TextField } from "@mui/material"
import { useEffect, useMemo, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css'
import { useForm } from "../../hooks/useForm"
import { deSelectPr, setActivePr, startDeletingPr, startSavePr, startUploadingFiles } from "../../store/workout" 
//import { CalculateTable, ImageGallery } from "../components"
// import { CalculateTable } from "../components/CalculateTable"
// import { ImageGallery } from "../components"
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory'
import { HistoricalTable } from "../components/HistoricalTable"


export const PrView = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { active:ejercicio, messageSaved, isSaving } = useSelector(state => state.workout)
    const {Rm, date, type, name, historical_Rm, historical_dates, onInputChange, formState} = useForm(ejercicio)
    const dateString = useMemo(()=>{
        const newDate = new Date(date)
        return newDate.toLocaleDateString()
    }, [date])

    const fileInputRef = useRef();

    
    useEffect(() => {
      dispatch(setActivePr(formState))
    }, [formState])
  
    
    useEffect(() => {
        if(messageSaved.length>0){
            Swal.fire('Rm Actualizado', messageSaved, 'success')
        }
      }, [messageSaved])

    const onSavePr = () => {
        dispatch(startSavePr(ejercicio))
    }

    const onFileInputChange = ({target})=>{
        if (target.files === 0) return

        dispatch(startUploadingFiles(target.files))

    }
    const onDelete = () =>{
        dispatch(startDeletingPr())

    }
    const onBack = () =>{
        dispatch(deSelectPr())
    }

    const onCalculate = ()=> {
        navigate(`/calculate?q=${ejercicio.Rm}&p=${45}`) 
    }
    const onCalculateKg = ()=> {
        navigate(`/calculateKg?q=${ejercicio.Rm*0.453592}&p=${20}`) 
    }
    const graphData = (fechas, rms) => {
        const data = []
        fechas.forEach((fecha, index) => {
            const stringFecha = new Date(fecha)
            data[index] = {x: stringFecha.toLocaleDateString(), y: rms[index]}
        }); 
        return data
    }

    
  return (
    <Grid //container direction = 'row' justifyContent='space-between' alignItems='center' sx={{mb:1}}>
    container
      spacer={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: 'calc(100vh - 110px)' , backgroundColor: 'white', borderRadius: 3}}>
          {/* <img 
          src={`/assets/workouts/${id}.jpg`} 
          alt={workout.exercise} 
          className="img-thumbnail animate__animated animate__fadeInLeft" 
        /> */}
       
      <div className="col-8">
      <h3 className="align-baseline"><b>{name}</b></h3>
      <img src={ ejercicio.imageUrls[0] } className="card-img" alt={ ejercicio.name }/>
        
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Tu RM:</b>{ejercicio.Rm} 
          </li>
          <li className="list-group-item">{dateString}</li>
        </ul>
        <button className="btn btn-outline-primary" onClick={onBack}>Back</button>
        
            
            </div>
        {/* <Grid item>
            <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
        </Grid> */}
        <Grid item>
            <input
                type = 'file' //'checkbox'
                multiple
                ref={fileInputRef}
                onChange={onFileInputChange}
                style = {{display: 'none'}}
            />

            {/* <IconButton
                color = 'primary'
                disabled = {isSaving}
                onClick = {()=> fileInputRef.current.click()}
            >
                <UploadOutlined/>
            </IconButton> */}

            <Button disabled = {isSaving} onClick = {onSavePr} color ='primary' sx={{padding: 2}}>
                <SaveOutlined sx={{ fontSize: 30, mr:1}}/>
                Guardar
            </Button>

            <Button disabled = {isSaving} onClick = {onCalculate} color ='primary' sx={{padding: 2}}>
                <CalculateOutlined sx={{ fontSize: 30, mr:1}}/>
                Calcular en Lb
            </Button>
            <Button disabled = {isSaving} onClick = {onCalculateKg} color ='primary' sx={{padding: 2}}>
                <CalculateOutlined sx={{ fontSize: 30, mr:1}}/>
                Calcular en Kg
            </Button>
        </Grid>
        <Grid container>
        
            <TextField
                type='number'
                variant='filled'
                fullWidth
                placeholder="Ingrese un Peso"
                sx={{border:'none', mb:1}}
                name='Rm'
                value = {Rm}
                onChange = {onInputChange}
            />

            {/* <Grid container justifyContent='end'>
                <Button
                onClick = {onDelete}
                sx={{mt:2}}
                color = "error"
                >
                    <DeleteOutline/>
                    Borrar
                </Button>

            </Grid> */}
            {/* <CalculateTable varMaximo={ejercicio.Rm} barraWeight={45}/> */}
            {/* <TextField
                type='text'
                variant='filled'
                fullWidth
                multiline
                placeholder="¿Que suciedio hoy?"
                minRows={5}
                name='name'
                value = {name}
                onChange = {onInputChange}

            />  */}
            {/* Image Gallery */}
            {/* <ImageGallery 
                images = {ejercicio.imageUrls}
                // onDeleteImage = {deleteImage}
            >
            </ImageGallery> */}

            {/* <CalculateTable varMaximo={ejercicio.Rm} barraWeight={45} /> */}
            
            
        </Grid>
{ !!(ejercicio.historical_Rm && ejercicio.historical_dates )
    ?   <> 
            <VictoryChart
                theme={VictoryTheme.material}
             >
            <VictoryLine
                style={{
                data: { stroke: "#c43a31" },
                parent: { border: "1px solid #ccc"}
                }}
                data={graphData(historical_dates, historical_Rm)}
            />
            </VictoryChart>
            <HistoricalTable dates = {historical_dates} prs = {historical_Rm}/> </>
    :   <></> }
            
        </Grid>
    )
}
