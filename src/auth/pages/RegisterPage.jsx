import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import {Link as RouterLink} from 'react-router-dom'
import { AuthLayout } from "../layout/AuthLayout"


export const RegisterPage = () => {
  return (
    
    <AuthLayout title='Register'>
      <form>
        <Grid container>
          <Grid item xs={12} sx = {{mt:2}}>
            <TextField label="Nombre Completo" type="text" placeholder="John Doe" fullWidth/>
          </Grid>
          <Grid item xs={12} sx = {{mt:2}}>
            <TextField label="Correo" type="mail" placeholder="john.doe@gmail.com" fullWidth/>
          </Grid>
          <Grid item xs={12} sx = {{mt:2}}>
            <TextField label="Contraseña" type="password" placeholder="password" fullWidth/>
          </Grid>
          <Grid container spacing={2} sx={{mb:2, mt:1}}>
            <Grid item xs={12} sx = {{mt:2}} >
              <Button variant='contained' fullWidth>
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
