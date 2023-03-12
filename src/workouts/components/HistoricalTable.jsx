
export const HistoricalTable = ({dates, prs}) => {
    const dateInv = dates.map(date => { 
        const dateString = new Date(date) 
        return dateString.toLocaleDateString()
    }).reverse()
    const prsInv = prs.map(pr => pr).reverse()

    return (
        <table className = 'table table-striped'>
        
       
        <thead >
          <tr>
          <th>Fecha</th>
          <th>RM</th>
          </tr>
        </thead>
          {
            
            dates.map(date => (
              
            // <table key={procentaje}>
            //   <tr  key={procentaje} data-toggle="collapse"
            // data-target=".multi-collapse1"
            // aria-controls="multiCollapseExample1">
              
                <tbody key={date}>
                  <tr className="table-primary">
                     <td>
                        {dateInv[dates.indexOf(date)]}
                     </td>
                     <td>{prsInv[dates.indexOf(date)]} </td>
                  </tr>
                
                  </tbody>
                  
                  ))}
                </table>
    )
    
}
