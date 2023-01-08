
import React from 'react'
import { connect } from 'react-redux'
import { setVisifilityFilter } from '../../store/actions/actions'
import Filter from '../pure/Filter'


const mapStateToProps = (state, ownProps) => ({
    return:{
        active: ownProps.filter === state.filterState
    }
})

const mapDispatchToProps = (dispatch, ownProps)=>{
    return {
        onClick: () =>{
            dispatch(setVisifilityFilter(ownProps.filter))
        }
    }
}

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter)

export default FilterContainer;