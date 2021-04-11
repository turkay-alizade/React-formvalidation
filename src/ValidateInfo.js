import React from 'react'

const ValidateInfo = (values) => {
    let errors = {};
    if(!values.username){
        errors.username='Username is required'
    }
    if(!values.email){
        errors.email='Email is required'
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email='Email is invalid'
    }
    if(!values.password){
        errors.password='Password is required'
    }else if(values.password.length<6){
        errors.password='Password must be more than six characters'
    }
    if(!values.password2){
        errors.password2='Password is required'
    }else if(values.password2 !== values.password){
        errors.password2='Password do not match'
    }
    return errors
}



export default ValidateInfo;