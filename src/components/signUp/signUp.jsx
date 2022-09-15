import React from 'react';
import '../signUp/signUp.css';
import content from '../static';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema= yup.object().shape(
    {
        firstname: yup.string().required().min(5),
        lastname: yup.string().required().min(5),
        email: yup.string().required('Please enter a valid email address'),
        password: yup.string().required('Please enter password').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,'Minimum eight characters,at least one letter, one number and one special character:'),
    }
)
function SignUp() {
    const {register, handleSubmit, formState: { errors }}= useForm(
        {
            resolver: yupResolver(schema),
        }
    );

    const onSubmit = (data) => console.log(data)
    return ( 
        <>
        <div className='chat-cont'>
            <div className='cont-1'>
                <h1 className='header'>ChatScrum...</h1>
                <p className='pg'>To keep connected with us please
                    login with your personal info.<br/>
                    Enter your personal details
                 and start your personal journey with us.</p>
                 <p className='pg1'>Already have an account?<br/></p>
                  <button className='btn1'>Sign In</button> 
            </div>
            <div className='cont-2'>
                <h2 className='head'>Don't have an account?<br/> Sign Up now!!</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {content.inputs.map((input, key) => {
                        return (
                            <div className= 'form'key={key}>
                                <label>{input.label}</label><br/>
                                <input type={input.type} {...register(input.name)} /><br />
                                <span className='message'>{errors[input.name]?.message}</span>
                            </div>
                            
                        )
                    })}
                    <div className='but'>
                    <button type='submit' className='btn'>Sign up</button>
                    </div>
                </form>  
               
            </div>
        </div>
        </>
     );
}

export default SignUp;
