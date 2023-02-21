import React from 'react'

export const PlateCalculate45 = (peso) => {
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
    const one_side_35 = (peso.peso-35)/2
    const fourty_five_plates_35 = Math.floor(one_side_35/45)
    const thrity_five_plates_35 = Math.floor((one_side_35-fourty_five_plates_35*45)/35)
    const twenty_five_plates_35 = Math.floor((one_side_35-fourty_five_plates_35*45-thrity_five_plates_35*35)/25)
    const fifteen_plates_35 = Math.floor((one_side_35-fourty_five_plates_35*45-thrity_five_plates_35*35-twenty_five_plates_35*25)/15)
    const ten_plates_35 = Math.floor((one_side_35-fourty_five_plates_35*45-thrity_five_plates_35*35-twenty_five_plates_35*25-fifteen_plates_35*15)/10)
    const five_plates_35 = Math.floor((one_side_35-fourty_five_plates_35*45-thrity_five_plates_35*35-twenty_five_plates_35*25-fifteen_plates_35*15-ten_plates_35*10)/5)
    const resto_35 = (one_side_35-fourty_five_plates_35*45-thrity_five_plates_35*35-twenty_five_plates_35*25-fifteen_plates_35*15-ten_plates_35*10-five_plates_35*5)

  return (
    <>
    <div>
        
        <h1>Barra 45 Lb</h1>
        <hr />
        <h4>Peso Total: {peso.peso}</h4>
        <h4>Peso por Lado: {one_side.toFixed(2)}</h4>
        <h4>Discos de 45 por lado: {fourty_five_plates}</h4>
        <h4>Discos de 35 por lado: {thrity_five_plates}</h4>
        <h4>Discos de 25 por lado: {twenty_five_plates}</h4>
        <h4>Discos de 15 por lado: {fifteen_plates}</h4>
        <h4>Discos de 10 por lado: {ten_plates}</h4>
        <h4>Discos de 5 por lado: {five_plates}</h4>
        <h4>Resto: {resto.toFixed(2)}</h4>
    </div>
    
    <div>
        <h1>Barra 35 Lb</h1>
        <hr />
        <h4>Peso Total: {peso.peso}</h4>
        <h4>Peso por Lado: {one_side_35.toFixed(2)}</h4>
        <h4>Discos de 45 por lado: {fourty_five_plates_35}</h4>
        <h4>Discos de 35 por lado: {thrity_five_plates_35}</h4>
        <h4>Discos de 25 por lado: {twenty_five_plates_35}</h4>
        <h4>Discos de 15 por lado: {fifteen_plates_35}</h4>
        <h4>Discos de 10 por lado: {ten_plates_35}</h4>
        <h4>Discos de 5 por lado: {five_plates_35}</h4>
        <h4>Resto: {resto_35.toFixed(2)}</h4>
            
    </div>

    </>
  )
}
