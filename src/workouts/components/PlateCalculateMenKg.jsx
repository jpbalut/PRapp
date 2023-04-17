import React from 'react'

export const PlateCalculateMenKg = ({peso, barraWeight}) => {
    // const count = 0
    // while (peso % 45 === 0) {
    //     count++
    //     return <h1>{count}</h1>
    // }
    const one_side = (peso-barraWeight)/2
    const twenty_plates = Math.floor(one_side/20)
    const fifteen_plates = Math.floor((one_side-twenty_plates*20)/15)
    const ten_plates = Math.floor((one_side-twenty_plates*20-fifteen_plates*15)/10)
    const five_plates = Math.floor((one_side-twenty_plates*20-fifteen_plates*15-ten_plates*10)/5)
    const twopoint5_plates = Math.floor((one_side-twenty_plates*20-fifteen_plates*15-ten_plates*10-five_plates*5)/2.5)
    const resto = one_side-twenty_plates*20-fifteen_plates*15-ten_plates*10-five_plates*5-twopoint5_plates*2.5
    
  return (
    <>
    <div className='table-responsive'>
      <table className = 'table table-striped'>
                    <thead >
                      <tr>
                        <th>Peso por Lado</th>
                        <th>20 Kg</th>
                        <th>15 Kg</th>
                        <th>10 Kg</th>
                        <th>5 Kg</th>
                        <th>2.5 Kg</th>
                        <th>Resto</th>
                      </tr>
                    </thead>
                    <tbody>
                          <tr>
                            <td>{((peso-barraWeight*1)/2).toFixed(1)}Kg</td>
                            <td>{twenty_plates}</td>
                            <td>{fifteen_plates}</td>
                            <td>{ten_plates}</td>
                            <td>{five_plates}</td>
                            <td>{twopoint5_plates}</td>
                            <td>{resto.toFixed(2)}</td>
                          </tr>
                    </tbody>
        </table>
    </div>

    </>
  )
}
