import React from 'react'
import FilterContainer from '../containers/FilterContainer'

const FilterOptions = props => {
  return (
    <div className='filter'>
        <FilterContainer filter="SHOW_ALL">
            ALL
        </FilterContainer>
        <FilterContainer filter="SHOW_COMPLETED">
            COMPLETED
        </FilterContainer>
        <FilterContainer filter="SHOW_ACTIVE">
            ACTIVE
        </FilterContainer>
    </div>
  )
}


export default FilterOptions