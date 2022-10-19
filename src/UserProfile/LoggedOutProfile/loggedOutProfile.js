import './loggedOutProfile.css';
import google from './google-logo.png';
import { useState } from 'react';
import auth, { provider } from '../../_connection/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';

function LoggedOut() {
    const [sign, setSign] = useState(localStorage.getItem("UID"));

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((response1) => {
            localStorage.setItem("UID", response1.user.uid);
            localStorage.setItem("Email", response1.user.email);
            localStorage.setItem("Verified", response1.user.emailVerified);
            localStorage.setItem("Username", response1.user.displayName);
            localStorage.setItem("ProfilePic", response1.user.photoURL);
            setSign(localStorage.getItem("UID"));
        })
        .catch((error1) => {
            console.log(error1);
        });
    };
    const signOutfromApp = () => {
        signOut(auth).then(() => {
            localStorage.setItem("UID", "");
            localStorage.setItem("Email", "");
            localStorage.setItem("Verified", "");
            localStorage.setItem("Username", "");
            localStorage.setItem("ProfilePic", "");
            setSign(localStorage.getItem("UID"));
          }).catch((error) => {
            console.log(error);
          });
    }
    console.log("checkpoint", typeof sign);
    if(sign === "" || sign === null || sign === undefined){
        console.log("In 1");
        return (
            <section>
                <div class="container">
                    <button onClick={signInWithGoogle} class="button login__submit">
                        <span class="button__text">Sign In with <img src={google} alt='Google'/></span>
                    </button>
                </div>
            </section>
        );
    }
    else{
        console.log("In 2");
        return (
            <section>
                <div className='profile-card'>
                    <img src={localStorage.getItem("ProfilePic")} alt="profile-pic"/>
                    <div className='userdata'>
                        <h2>{localStorage.getItem("Username")}</h2>
                        <h4>{localStorage.getItem("Email")}</h4>
                    </div>
                </div>
                <div class="container">
                    <button onClick={signOutfromApp} class="button login__submit">
                        <span class="button__text">Logout</span>
                    </button>
                </div>
            </section>
        );
    }
}

export default LoggedOut;