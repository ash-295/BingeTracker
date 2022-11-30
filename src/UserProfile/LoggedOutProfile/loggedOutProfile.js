import './loggedOutProfile.css';
import google from './google-logo.png';
import { useState } from 'react';
import auth, { provider } from '../../_connection/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import axios from 'axios';

function LoggedOut() {
    const [sign, setSign] = useState(localStorage.getItem("UID"));

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((response1) => {
            axios.post('http://13.126.46.242:4400/api/v1/signIn', { 
                uid: response1.user.uid, 
                email: response1.user.email, 
                userName: response1.user.displayName
            })
            .then((response2) => {
                console.log("API response", response2);
                localStorage.setItem("UID", response1.user.uid);
                localStorage.setItem("Email", response1.user.email);
                localStorage.setItem("Verified", response1.user.emailVerified);
                localStorage.setItem("Username", response1.user.displayName);
                localStorage.setItem("ProfilePic", response1.user.photoURL);
                setSign(localStorage.getItem("UID"));
            })
            .catch((error2) => {
                console.log("API Error", error2);
            });
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
            <section className='user_profile_area'>
                <div className='profile-card'>
                    <img src={localStorage.getItem("ProfilePic")} alt="profile-pic"/>
                    <div className='userdata'>
                        <h2>{localStorage.getItem("Username")}</h2>
                        <h4>{localStorage.getItem("Email")}</h4>
                    </div>
                </div>
                <div className="container">
                    <button onClick={signOutfromApp} className="button login__submit">
                        <span className="button__text">Logout</span>
                    </button>
                </div>
            </section>
        );
    }
}

export default LoggedOut;