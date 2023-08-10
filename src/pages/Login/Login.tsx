import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import * as styles from "../../styles/pages/Login.styles";
import * as globalStyles from "../../styles/global.styles";
import * as buttonStyles from "../../styles/components/Buttons.styles";

export const Login = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    //TODO: login function
    function onLogin() {
    }

    //TODO: forgot password procedure
    return <div style={styles.login}>
        <div style={styles.loginContainer}>
            <h2 style={globalStyles.Header}>Login</h2>
            <p style={globalStyles.Paragraph}>Please enter your credentials to login.</p>
            <form style={styles.loginForm}>
                <Input label="Email" placeholder="Enter your email" inputRef={emailRef}/>
                <Input label="Password" placeholder="Enter your password" inputRef={passwordRef}/>
            </form>
            <Link to='/sign-up'>Create New Account</Link>
            <div style={globalStyles.Buttons}>
                <Button name="Forgot Password" style={buttonStyles.buttonV2}/>
                <Button name="Login" style={buttonStyles.buttonV3} onClick={onLogin}/>
            </div>
        </div>
    </div>
}