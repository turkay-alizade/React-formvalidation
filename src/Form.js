import React, {useState, useEffect} from 'react';
import ValidateInfo from './ValidateInfo';

import './form.css';

function Form({submitForm}) {

    const [form, setForm]=useState({username:'', email:'',password:'',password2:''});
    const [errors,setErrors]=useState({});
    const [dataIsCorrect, setDataIsCorrect]=useState(false);
    const handleChange = (e) => setForm({...form, [e.target.name]:e.target.value});
    const handleSubmit = (e) =>{
        e.preventDefault();
        setErrors(ValidateInfo(form));
        setDataIsCorrect(true);
    };
    useEffect(() => {
        if(Object.keys(errors).length===0 && dataIsCorrect){
            submitForm(true)
        }
    }, [errors]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <h2 className="col-12">SIGN UP</h2>
                    <div className="col-12">
                        <label htmlFor="username" className="form-label">Name</label>
                        <input className="form-input form-control" id="username" type="text" value={form.username} name="username" onChange={handleChange}/>
                        {errors.username && <p className='errors'>{errors.username}</p>}
                    </div>
                    <div className="col-12">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input className="form-input form-control" id="email" type="email" value={form.email} name="email" onChange={handleChange}/>
                        {errors.email && <p className='errors'>{errors.email}</p>}
                    </div>
                    <div className="col-12">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input className="form-input form-control" id="password" type="password" value={form.password} name="password" onChange={handleChange}/>
                        {errors.password && <p className='errors'>{errors.password}</p>}
                    </div>
                    <div className="col-12">
                        <label htmlFor="password2" className="form-label">Confirm Password</label>
                        <input className="form-input form-control" id="password2" type="password" value={form.password2} name="password2" onChange={handleChange}/>
                        {errors.password2 && <p className='errors'>{errors.password2}</p>}
                    </div>
                    <div className="form-btn col-12"><button type="submit">Submit</button></div>
                </div>
            </form>
        </div>
    )
}

export default Form

