import React from 'react'
import { PlateCalculateWomen } from './PlateCalculateWomen'
import { PlateCalculateMen } from './PlateCalculateMen'


export const CalculateTable = ({varMaximo=0, barraWeight}) => {
  const porc = [1, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.5, 0.45, 0.4, 0.35, 0.3, 0.25, 0.2, 0.15, 0.1, 0.05]
  //const plates = [45, 35, 25, 15, 10, 5]

  return (
    <>
      <h1 className=''>Peso: {varMaximo} libras</h1>
      <h1>Barra: {barraWeight} libras</h1>
      <div className='table-responsive-xl'>
        <table className = 'table table-striped'>
          <thead >
            <tr>
            <th>Discos por Lado {barraWeight}</th>
            </tr>
          </thead>
          {/* <tbody> */}
            {
              
            porc.map(procentaje => (
                
              // <table key={procentaje}>
              //   <tr  key={procentaje} data-toggle="collapse"
              // data-target=".multi-collapse1"
              // aria-controls="multiCollapseExample1">
                
                  <tbody key={procentaje}>
                    <tr className="table-primary">
                    <th>
                      <ul>
                        <li className="list-group-item list-group-item-primary">Porcentaje: {(procentaje*100).toFixed(0)}%</li>
                        <li className="list-group-item list-group-item-primary">Peso: {(varMaximo*procentaje).toFixed(2)} libras</li>
                      </ul>
                    </th>
                    </tr>
                  
                  
                    <tr><td> <PlateCalculateMen peso = {(varMaximo*procentaje).toFixed(2)} barraWeight={barraWeight}/> </td></tr>
                  
                    </tbody>
                
              // </tr>
              // </table>
              ))}
          {/* </tbody> */}
        </table>
      </div>
            
                  
                

    </>
  )
}
