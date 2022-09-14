import React from 'react';
import '../SignIn/signIn.css';
import content2 from '../static/index2';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema= yup.object().shape(
    {
        email: yup.string().required('Please enter a valid email address'),
        password: yup.string().required('Please enter password').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,'Min 8 characters.'),
    }
)

function SignIn() {
    const {register, handleSubmit, formState:{ errors }}= useForm(
        {
            resolver: yupResolver(schema),
        }
    );

    const onSubmit = (data) => console.log(data)
    return ( 
        <>
        <div className='log-cont'>
            <div className='cont-1'>
                <h1 className='header'>ChatScrum...</h1>
                <p className='pg'>To keep connected with us please
                    login with your personal info.</p>
                 <p className='pg1'>Don't have an account?<br/></p>
                  <button className='btn1'>Sign Up</button> 
            </div>
            <div className='cont-2'>
            <h2 className='head1'>Sign In to ChatScrum...</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {content2.inputs.map((input, key) => {
                        return (
                            <div className= 'form'key={key}>
                                <label>{input.label}</label><br/>
                                <input type={input.type} {...register(input.name)} /><br/>
                                <br/><span className='message'>{errors[input.name]?.message}</span>
                            </div>
                            
                        )
                    })}
                    <div className='but'>
                    <button type='submit' className='sign-btn'>Sign In</button>
                    </div>
                </form>  
               
            </div>
        </div>
        </>
     );
}

export default SignIn;