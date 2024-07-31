import { contact } from '../../portfolio'
import axios from 'axios'
import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null
  const [name, setName] = useState('')
    const [text, setText] = useState('')
    const [email, setEmail] = useState('')


    function handleRegistrationForm(e){

        e.preventDefault();

        const register = {name,email,text}

        console.log(register);
        axios
        .post("https://portfolio-backend-production-b6c4.up.railway.app//send-contact", register)
        .then((response) => {
          document.getElementById("demo").innerHTML = response.data;
   
          // Handle response
        });

    }

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>If you are interested,Submit the form below</h2>
      <div className='container'>
        <br /> <br />
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <div className='card'>
                    <div className='card-header'>
                        <h2 className='text-center alignmain1'> Contact Form</h2>
                    </div>

                    <div className='card-body'>
                        <form>
                            <div className='row mb-3 alignmain '>
                                <label className='col-md-3 control-label text-centre'> Name </label>
                                <div className='col-md-9'>
                                    <input
                                        type='text'
                                        name='name'
                                        className='form-control'
                                        placeholder='Enter name'
                                        value={name}
                                        onChange={ (e) => setName(e.target.value)}
                                    >
                                    </input>
                                </div>
                            </div>

                           

                            <div className='row mb-3 alignmain '>
                                <label className='col-md-3 control-label'> Email </label>
                                <div className='col-md-9'>
                                    <input
                                        type='text'
                                        name='email'
                                        className='form-control'
                                        placeholder='Enter email address'
                                        value={email}
                                        onChange={ (e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>
                            </div>

                            <div className='row mb-3 alignmain '>
                                <label className='col-md-3 control-label'> Text </label>
                                <div className='col-md-9'>
                                    <textarea
                                        type='text'
                                        name='username'
                                        className='form-control '
                                        rows="10" cols="70"
                                        placeholder='Enter text'
                                        onChange={ (e) => setText(e.target.value)}
                                    >
                                    </textarea>
                                  
                                </div>
                            </div>


                            <div className='form-group mb-3 alignmain '>
                                <button className='btn btn--outline submito' onClick={ (e) => handleRegistrationForm(e)}>Submit</button>
                               
                            </div>
                            <p id="demo"></p>
                        </form>

                    </div>

                </div>
            </div>
        </div>


    </div>














    </section>
  )
}

export default Contact
