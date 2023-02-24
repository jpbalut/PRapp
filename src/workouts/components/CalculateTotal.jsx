import React from 'react'

export const CalculateTotal = ( {fourtyfive, thirtyfive, twentyfive, fifteenfive, ten, five, barraWeight}) => {
  const oneSideWeight = 45*fourtyfive+35*thirtyfive+25*twentyfive+15*fifteenfive+10*ten+5*five
  const totalWeight = ((oneSideWeight*2)+barraWeight*1)
    return (
    <div>{totalWeight}</div>
  )
}
