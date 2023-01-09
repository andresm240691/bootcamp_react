import React from 'react'
import { connect } from 'react-redux'
import AsyncLoginForm from '../pure/forms/AsyncLoginForm'
import {httpRequest} from '../../store/actions/asyncActions';

const mapStateToProps = (state, ownProps) => ({
    return:{
        logged: state.userState.logged,
        fetching: state.userState.fetching
    }

})

const mapDispatchToProps = (dispatch)=> {
    return {
        onLogin:(email, password) =>{
            let data = {
                email: email,
                password:password
            }
            const url = 'https://reqres.in/api/login';
            dispatch(httpRequest('post', url, data));
        }
    }
}

const AsyncLoginContainer = connect(mapStateToProps, mapDispatchToProps)(AsyncLoginForm)

export default AsyncLoginContainer