import React from 'react';
import '../SignIn/signIn.css';

function SignIn() {
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
                <form>
                    <div className='form'>
                    <label>E-mail</label><br/>
                    <input type='text' required /><br/>
                    </div>
                    <div className='form'>
                    <label>Password</label><br/>
                    <input type='password' required/><br/>
                    </div>
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