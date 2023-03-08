//import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {Link as RouterLink} from 'react-router-dom'
import { useForm } from "../../hooks"
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks"
import { AuthLayout } from "../layout/AuthLayout"

const formData={
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email:[(value) => value.includes('@'), 'El email debe tener una @'],
  password:[(value) => value.length>=6, 'La contraseña debe tener al menos 6 caracteres'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio']
}


export const RegisterPage = () => {
  const dispatch = useDispatch()
  const [formSubmitted, setformSubmitted] = useState(false)

  const {status, errorMessage} = useSelector(state => state.auth)
  const isCheckingAuthentication = useMemo(()=> status === 'checking', [status])

  const { displayName, email, password, onInputChange, formState, isFormValid, displayNameValid, emailValid, passwordValid} = useForm(formData, formValidations)
 
  const onSubmit = (event) => {
    event.preventDefault()
    setformSubmitted(true)
    if (!isFormValid) return
    dispatch(startCreatingUserWithEmailPassword(formState))
  }

  return (
    
    <AuthLayout title='Register'>
      <form className="animate__animated animate__fadeIn animate__faster" onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx = {{mt:2}}>
            <TextField 
              label="Nombre Completo" 
              type="text" 
              placeholder="John Doe" 
              fullWidth
              name = "displayName"
              value = {displayName}
              onChange = {onInputChange}
              error = {!!displayNameValid && formSubmitted}
              helperText = {displayNameValid}
              />
          </Grid>
          <Grid item xs={12} sx = {{mt:2}}>
            <TextField 
              label="Correo" 
              type="mail" 
              placeholder="john.doe@gmail.com" 
              fullWidth
              name = "email"
              value = {email}
              onChange = {onInputChange}
              error = {!!emailValid && formSubmitted}
              helperText = {emailValid}
            />
          </Grid>
          <Grid item xs={12} sx = {{mt:2}}>
            <TextField 
              label="Contraseña" 
              type="password" 
              placeholder="password" 
              fullWidth
              name = "password"
              value = {password}
              onChange = {onInputChange}
              error = {!!passwordValid && formSubmitted}
              helperText = {passwordValid}
            />
          </Grid>
          <Grid container spacing={2} sx={{mb:2, mt:1}}>
          <Grid item xs={12} display = { !!errorMessage ? '' : 'none'}> 
            <Alert severity='error'>{errorMessage}</Alert>
          </Grid>
            <Grid item xs={12} sx = {{mt:2}} >
              <Button disabled = {isCheckingAuthentication} type= "submit" variant='contained' fullWidth>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Typography> ¿Ya tienes una cuenta? <Link component={RouterLink} color = 'inherit' to="/auth/login">Ingresar</Link> </Typography>
            
          </Grid>
        </Grid>
      </form>

    </AuthLayout>
          
           
  )
}


// import { Google } from "@mui/icons-material"
// import { Button, Grid, Link, TextField, Typography } from "@mui/material"
// import {Link as RouterLink} from 'react-router-dom'
// import { AuthLayout } from "../layout/AuthLayout"


// export const RegisterPage = () => {
//   return (
    
//     <AuthLayout title='Register'>
//       <form>
//         <Grid container>
//           <Grid item xs={12} sx = {{mt:2}}>
//             <TextField label="Nombre Completo" type="text" placeholder="John Doe" fullWidth/>
//           </Grid>
//           <Grid item xs={12} sx = {{mt:2}}>
//             <TextField label="Correo" type="mail" placeholder="john.doe@gmail.com" fullWidth/>
//           </Grid>
//           <Grid item xs={12} sx = {{mt:2}}>
//             <TextField label="Contraseña" type="password" placeholder="password" fullWidth/>
//           </Grid>
//           <Grid container spacing={2} sx={{mb:2, mt:1}}>
//             <Grid item xs={12} sx = {{mt:2}} >
//               <Button variant='contained' fullWidth>
//                 Crear cuenta
//               </Button>
//             </Grid>
//           </Grid>
//           <Grid container direction='row' justifyContent='end'>
//             <Typography> ¿Ya tienes una cuenta? <Link component={RouterLink} color = 'inherit' to="/auth/login">Ingresar</Link> </Typography>
            
//           </Grid>
//         </Grid>
//       </form>

//     </AuthLayout>
          
           
//   )
// }
