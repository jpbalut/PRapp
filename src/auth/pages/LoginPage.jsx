import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { useContext } from "react"
import {Link as RouterLink, useNavigate} from 'react-router-dom'
import { AuthContext } from "../context"
import { AuthLayout } from "../layout/AuthLayout"


export const LoginPage = () => {
  const {login} = useContext(AuthContext)
  const navigate = useNavigate()
  
  const onLogin = () =>{
    const lastPath = localStorage.getItem('lastPath') || '/'
    login('Juan Balut')
     navigate(lastPath, {replace: true});
  }
  return (
    
    <AuthLayout title='Login'>
      <form>
        <Grid container>
          <Grid item xs={12} sx = {{mt:2}}>
            <TextField label="Correo" type="email" placeholder="corre@google.com" fullWidth/>
          </Grid>

          <Grid item xs={12} sx = {{mt:2}}>
            <TextField label="Contraseña" type="password" placeholder="password" fullWidth/>
          </Grid>
          <Grid container spacing={2} sx={{mb:2, mt:1}}>
            <Grid item xs={12} sm={6} sx = {{mt:2}} >
              <Button variant='contained' fullWidth onClick={onLogin}>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} sx = {{mt:2}} >
              <Button variant='contained' fullWidth>
                <Google/>
                <Typography sx = {{ml:1}}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color = 'inherit' to="/auth/register">Crear una Cuenta</Link>
          </Grid>
        </Grid>
      </form>

    </AuthLayout>
          
           
  )
}
