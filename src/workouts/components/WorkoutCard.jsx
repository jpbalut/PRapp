
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setActivePr } from '../../store/workout';
import { useMemo } from 'react';

export const WorkoutCard = ({
    Rm, 
    date,
    name, 
    type, 
    id,
    imageUrls,
    historical_dates,
    historical_Rm
}) => {

const dateString = useMemo(()=>{
    const newDate = new Date(date)

    return newDate.toUTCString()
}, [date])
const dispatch = useDispatch();
const onClickPr = ()=> {
    dispatch(setActivePr( { Rm, date, name, type, id, imageUrls, historical_dates, historical_Rm} ))
}
// const newName = React.useMemo(() => {
//     return name.length>17 
//         ? name.substring(0,17) + '...'
//         : name
// },[name])



    return (
    <Card sx={{ maxWidth: 400 }} onClick={onClickPr}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {imageUrls[0]}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
              RM = {Rm} libras
          </Typography>
          <Typography variant="body2" color="text.secondary">
              {dateString}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}