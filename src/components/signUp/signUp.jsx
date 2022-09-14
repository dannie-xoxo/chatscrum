import React from 'react';
import '../signUp/signUp.css';

function SignUp() {
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
                <form>
                    <div className='form'>
                    <label>first name</label><br/>
                    <input type='text' required/><br/>
                    </div>
                    <div className='form'>
                    <label>Last name</label><br/>
                    <input type='text' required/><br/>
                    </div>
                    <div className='form'>
                    <label>E-mail</label><br/>
                    <input type='text' required /><br/>
                    </div>
                    <div className='form'>
                    <label>Password</label><br/>
                    <input type='password' required/><br/>
                    </div>
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