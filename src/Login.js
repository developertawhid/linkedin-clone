import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css';

function Login() {
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
        .then((userAuth) => {
            dispatch(
                login({
                    email: userAuth.email,
                    uid: userAuth.uid,
                    displeyName: userAuth.displayName,
                    photoUrl: userAuth.photoURL,
                })
            )
        })
    }

    const register = () => {
        if(!name){
            return alert("Please enter a full name!")
        }

        auth.createUserWithEmailAndPassword(email, password).then(
            (userAuth) => {
                userAuth.user
                .updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                })
                .then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoURL: profilePic,
                    }))
                })
            }
        ).catch((error) => alert(error))
    }
    return (
        <div className="login">
            <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg" alt="" />

            <form>
                <input 
                    onChange={ e => setName( e.target.value ) } 
                    value={ name } 
                    placeholder="Full name (required if registering)" 
                    type="text" 
                />

                <input 
                    onChange={ e => setProfilePic( e.target.value ) } 
                    value={ profilePic } 
                    placeholder="Profile pic URL (optional)" 
                    type="text" 
                />

                <input 
                    onChange={ e => setEmail( e.target.value ) } 
                    value={ email } 
                    placeholder="Email" 
                    type="email" 
                />

                <input 
                    onChange={ e => setPassword( e.target.value ) } 
                    value={ password } 
                    placeholder="Password" 
                    type="password" 
                />

                <button type="submit" onClick={loginToApp}>Sing In</button>
                
            </form>
            <p>Not a member?
                <span className="login__register" onClick={register}> Register Now</span>
            </p>

        </div>
    )
}

export default Login
