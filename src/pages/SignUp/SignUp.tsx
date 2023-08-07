import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import * as styles from "../../styles/pages/SignUp.styles";
import * as globalStyles from "../../styles/global.styles";
import * as buttonStyles from "../../styles/components/Buttons.styles";

export const SignUp = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const companyNameRef = useRef<HTMLInputElement>(null);

    //TODO: create account function
    function onSubmit() {
    }

    return <div style={styles.signUp}>
    <div style={styles.signUpContainer}>
        <h2 style={globalStyles.Header}>Sign Up</h2>
        <p style={globalStyles.Paragraph}>Enter your details.</p>
        <Input label="Username" placeholder="Enter username" inputRef={usernameRef}/>
        <Input label="Email" placeholder="Enter your email" inputRef={emailRef}/>
        <Input label="Password" placeholder="Enter your password" inputRef={passwordRef}/>
        <div style={styles.signUpPositionContainer}>
            <p style={styles.signUpPositionTitle}>Position</p>
            <div style={styles.signUpPositionButtons}>
                <Button name="Employee" style={buttonStyles.buttonV4}/>
                <Button name="Employer" style={buttonStyles.buttonV4}/>
            </div>
        </div>
        <Input label="Company Name" placeholder="Enter company name" inputRef={companyNameRef}/>
        <div style={globalStyles.Buttons}>
            <Link to='/'><Button name="Home" style={buttonStyles.buttonV2}/></Link>
            <Button name={"" ? "Send Request" : "Create Account"} style={buttonStyles.buttonV3} onClick={onSubmit}/>
        </div>
    </div>
</div>
}