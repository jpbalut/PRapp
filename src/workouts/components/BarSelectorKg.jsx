import React from 'react'

export const BarSelectorKg = ({barraWeight, onchangevar}) => {
  return (
    <>
    <h4 className='mt-4'>¿Cuanto pesa la barra?</h4>
    <select type="float"
                        placeholder="Peso Barra"
                        className="form-control"
                        name="barraWeight"
                        autoComplete="off"
                        value = {barraWeight}
                        onChange = {onchangevar}>
                        <option 
                            value= {20}
                        > 
                            20
                        </option>
                        <option 
                            value={15}
                        > 
                            15 
                        </option>
                        </select>
    </>
  )
}
