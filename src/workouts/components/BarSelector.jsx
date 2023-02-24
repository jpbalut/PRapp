import React from 'react'

export const BarSelector = ({barraWeight, onchangevar}) => {
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
                            value= {45}
                        > 
                            45
                        </option>
                        <option 
                            value={35}
                        > 
                            35 
                        </option>
                        </select>
    </>
  )
}
