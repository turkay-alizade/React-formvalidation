import React, {useState} from 'react';
import Form from './Form';
import FormSuccess from './FormSuccess';
import './form.css';

function App() {
  const [formIsSubmitted, setFormIsSubmitted]= useState(false);
  const submitForm=()=>{
    setFormIsSubmitted(true)
  }
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-6 col-lg-5">
            <img src='./img/login.png'/>
          </div>
          <div className="col-12 col-sm-6 col-lg-6">
            {!formIsSubmitted ? (<Form submitForm={submitForm}/>) : (<FormSuccess/>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
