import React from 'react'

export const Option = ({arry}) => {
  return (
    <>
        {arry.map((element) => <option key={element} value={element}>{element}</option>)}
    </>
  )
}
