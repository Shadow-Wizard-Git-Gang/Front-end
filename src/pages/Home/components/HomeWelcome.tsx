import React, { useRef } from 'react';
import * as styles from "../../../styles/pages/Home.styles";
import * as globalStyles from "../../../styles/global.styles";
import * as buttonStyles from "../../../styles/components/Buttons.styles";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Link } from "react-router-dom";

export const Welcome = () => {
    const companyNameRef = useRef<HTMLInputElement>(null);

    // TODO: Provide data to sign-up page
    function onSubmit() {
        console.log(companyNameRef.current?.value);
    }

    return <div style={styles.homeWelcome}>
            <div style={styles.homeWelcomeContainer}>
                <h2 style={globalStyles.Header}>Welcome to VendorConnect!</h2>
                <p style={globalStyles.Paragraph}>Manage your items and generate reports</p>
                <Input placeholder="Search Company..." inputRef={companyNameRef}/>
                <div style={globalStyles.Buttons}>
                    <Link to="/sign-up"><Button name="Join Company" style={buttonStyles.buttonV1} onClick={onSubmit}/></Link>
                    <Link to="/sign-up"><Button name="New Company" style={buttonStyles.buttonV3} onClick={onSubmit}/></Link>
                </div>
            </div>
            <img src={ "" } alt="" style={styles.homeWelcomeImage} />
        </div>
}