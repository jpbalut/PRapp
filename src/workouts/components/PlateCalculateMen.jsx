import React from 'react'

export const PlateCalculateMen = (peso) => {
    // const count = 0
    // while (peso % 45 === 0) {
    //     count++
    //     return <h1>{count}</h1>

    // }
    

    const one_side = (peso.peso-45)/2
    const fourty_five_plates = Math.floor(one_side/45)
    const thrity_five_plates = Math.floor((one_side-fourty_five_plates*45)/35)
    const twenty_five_plates = Math.floor((one_side-fourty_five_plates*45-thrity_five_plates*35)/25)
    const fifteen_plates = Math.floor((one_side-fourty_five_plates*45-thrity_five_plates*35-twenty_five_plates*25)/15)
    const ten_plates = Math.floor((one_side-fourty_five_plates*45-thrity_five_plates*35-twenty_five_plates*25-fifteen_plates*15)/10)
    const five_plates = Math.floor((one_side-fourty_five_plates*45-thrity_five_plates*35-twenty_five_plates*25-fifteen_plates*15-ten_plates*10)/5)
    const resto = one_side-fourty_five_plates*45-thrity_five_plates*35-twenty_five_plates*25-fifteen_plates*15-ten_plates*10-five_plates*5
    
  return (
    <>
    <div>
      <table className = 'table table-striped'>
                    <thead >
                      <tr>
                        <th>Peso por Lado</th>
                        <th>45 Lb</th>
                        <th>35 Lb</th>
                        <th>25 Lb</th>
                        <th>15 Lb</th>
                        <th>10 Lb</th>
                        <th>5 Lb</th>
                        <th>Resto</th>
                      </tr>
                    </thead>
                    <tbody>
                          <tr>
                            <td>{one_side.toFixed(0)}Lb</td>
                            <td>{fourty_five_plates}</td>
                            <td>{thrity_five_plates}</td>
                            <td>{twenty_five_plates}</td>
                            <td>{fifteen_plates}</td>
                            <td>{ten_plates}</td>
                            <td>{five_plates}</td>
                            <td>{resto.toFixed(2)}</td>
                          </tr>
                    </tbody>
        </table>
    </div>

    </>
  )
}
