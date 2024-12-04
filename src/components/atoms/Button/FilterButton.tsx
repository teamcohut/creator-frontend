import React, { FC } from 'react'
import { IFilterButton } from '../../../@types/button.interface'

const FilterButton: FC<IFilterButton> = ({text}) => {
  return (
    <>
        <button>{text}</button>
    </>
  )
}

export default FilterButton