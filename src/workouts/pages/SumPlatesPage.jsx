import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import queryString from 'query-string'
import { CalculateTotal } from '../components';
import { BarSelector } from '../components/BarSelector';

export const SumPlatesPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const {q = 0} = queryString.parse(location.search);
    const {q2 = 0} = queryString.parse(location.search);
    const {q3 = 0} = queryString.parse(location.search);
    const {q4 = 0} = queryString.parse(location.search);
    const {q5 = 0} = queryString.parse(location.search);
    const {q6 = 0} = queryString.parse(location.search);
    const {q7 = 45} = queryString.parse(location.search);

    const { fourtyFivePlate, thirtyFivePlate, twentyFivePlate, fifteenPlate, tenPlate, fivePlate, barraWeight ,onInputChange } = useForm({
        fourtyFivePlate: q,
        thirtyFivePlate: q2,
        twentyFivePlate: q3,
        fifteenPlate: q4,
        tenPlate: q5,
        fivePlate: q6,
        barraWeight: q7,

    })
   
    const onCalculateSubmit = (event) => {
    event.preventDefault();
    // if ( calculateNumber.trim().length <= 1 ) return;
    navigate(`?q=${fourtyFivePlate}&q2=${thirtyFivePlate}&q3=${twentyFivePlate}&q4=${fifteenPlate}&q5=${tenPlate}&q6=${fivePlate}&q7=${barraWeight}`)
    }
    
    return (
        <>
      
                <h2 className='mt-4'>Ingresa la cantidad de discos por lado que usaras</h2>
            {/* <div className='mt-4'> */}
                <form onSubmit={onCalculateSubmit}>
                    <div className= "d-flex flex-row">
                        <h4 className='mt-4'>Discos de 45 Libras</h4>
                        <input type="float"
                        placeholder="Calcular pesos"
                        className="form-control"
                        name="fourtyFivePlate"
                        autoComplete="off"
                        value = {fourtyFivePlate}
                        onChange = {onInputChange}
                        />
                    </div>
                    <div className= "d-flex flex-row">
                        <h4 className='mt-4'>Discos de 35 Libras</h4>
                        <input type="float"
                            placeholder="Calcular pesos"
                            className="form-control"
                            name="thirtyFivePlate"
                            autoComplete="off"
                            value = {thirtyFivePlate}
                            onChange = {onInputChange}
                        />
                    </div>
                    <div className= "d-flex flex-row" >
                    <h4 className='mt-4'>Discos de 25 Libras</h4>
                    <input type="float"
                        placeholder="Calcular pesos"
                        className="form-control"
                        name="twentyFivePlate"
                        autoComplete="off"
                        value = {twentyFivePlate}
                        onChange = {onInputChange}
                    /></div>
                    <div className= "d-flex flex-row">
                    <h4 className='mt-4'>Discos de 15 Libras</h4>
                    <input type="float"
                        placeholder="Calcular pesos"
                        className="form-control"
                        name="fifteenPlate"
                        autoComplete="off"
                        value = {fifteenPlate}
                        onChange = {onInputChange}
                    /></div>
                    <div className= "d-flex flex-row">
                        <h4 className='mt-4'>Discos de 10 Libras</h4>
                    <input type="float"
                        placeholder="Calcular pesos"
                        className="form-control"
                        name="tenPlate"
                        autoComplete="off"
                        value = {tenPlate}
                        onChange = {onInputChange}
                    /></div>
                    <div className= "d-flex flex-row">
                        <h4 className='mt-4'>Discos de 5 Libras</h4>
                    <input type="float"
                        placeholder="Calcular pesos"
                        className="form-control"
                        name="fivePlate"
                        autoComplete="off"
                        value = {fivePlate}
                        onChange = {onInputChange}
                    /></div>
                     <div className= "d-flex flex-row">
                        <BarSelector barraWeight={barraWeight} onchangevar= {onInputChange}/>
                    </div>
                     <button
                        className="btn btn-outline-primary mt-1"
                    >
                        Calcular
                    </button>
                    <hr />
                </form>


                <h1 className='mt-4'>  El peso total es de </h1>
                <hr />
                <CalculateTotal fourtyfive={q} thirtyfive={q2} twentyfive={q3} fifteenfive={q4} ten={q5} five={q6} barraWeight={q7}/> 
            
    
        </>
    )

}
