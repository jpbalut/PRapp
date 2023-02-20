import React from 'react'
import { useForm } from '../../hooks/useForm'


export const InputCalculate = () => {
    
    const {calculateValue, onInputChange } = useForm()
    
    
    const onCalculateSubmit = (calculateValue) => {
        calculateValue.preventDefault();
        return calculateValue*2;

      // if ( searchText.trim().length <= 1 ) return;
        

    }
    return (
    <>
        <form onSubmit={onCalculateSubmit}>
            <input type="Ingresa tu Maximo"
              placeholder="PRCalculate"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value = {calculateValue}
              onChange = {onCalculateSubmit}
            />
        <button
              className="btn btn-outline-primary mt-1"
        > 
            Calcular 
        </button>
        </form>

        <p>{calculateValue}</p>
    </>
  )
}
