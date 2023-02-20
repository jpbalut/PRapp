import React from 'react'

export const CalculateTable = ({varMaximo}) => {
  const porc = [0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.5, 0.45, 0.4, 0.35, 0.3, 0.25, 0.2, 0.71, 0.1, 0.05]
  return (
    <>
      <h1>Your PR: {varMaximo}</h1>
      <table className = 'table table-striped'>
                    <thead >
                        <tr>
                        <th>Porcentajes</th>
                        <th>Peso</th>
                        <th>Peso KG</th>
                        <th>Peso por lado barra 45LB</th>
                        <th>Peso por lado barra 35LB</th>
                        </tr>
                    </thead>
                    <tbody>
                        {porc.map(procentaje => (
                          <tr key={procentaje}>
                            <td>{procentaje}</td>
                            <td>{(varMaximo*procentaje).toFixed(2)}</td>
                            <td>{(varMaximo*procentaje/2.2).toFixed(2)}</td>
                            <td>{((varMaximo*procentaje-45)/2).toFixed(2)}</td>
                            <td>{((varMaximo*procentaje-35)/2).toFixed(2)}</td>
                          </tr>
                          ))}
                    </tbody>
                    </table>

    </>
  )
}
