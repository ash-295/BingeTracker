import './loggedOutProfile.css';
import google from './google-logo.png'
import { useState } from 'react';

function LoggedOut() {
    const [sign, setSign] = useState("SignIn with <img src={google} alt='Google'/>");
    const btn_change = () => {  
        setSign(`Logout`)
    };
    return (
        <>
        <section>
            <div class="container">
                <button class="button login__submit">
                    <span class="button__text">SignIn with <img src={google} alt='Google'/></span>
                </button>
            </div>
        </section>
        </>
    );
}

export default LoggedOut;