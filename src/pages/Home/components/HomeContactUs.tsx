import React, { useRef } from 'react';
import * as styles from "../../../styles/pages/Home.styles";
import * as globalStyles from "../../../styles/global.styles";
import * as buttonStyles from "../../../styles/components/Buttons.styles";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

export const ContactUs = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLInputElement>(null);

    //TODO: sending contacts to server
    function onSubmit() {
        console.log(nameRef.current?.value);
        console.log(emailRef.current?.value);
        console.log(messageRef.current?.value);
    }

    function onClear() {
        if (nameRef.current) {
            nameRef.current.value = "";
        }
        if (emailRef.current) {
            emailRef.current.value = "";
        }
        if (messageRef.current) {
            messageRef.current.value = "";
        }
    }

    return <div style={styles.homeContactUs}>
    <div style={styles.homeContactUsContainer}>
        <h2 style={globalStyles.Header}>Contact Form</h2>
        <p style={globalStyles.Paragraph}>Get in touch with us</p>
        <form style={styles.homeContactUsForm}>
            <Input label="Name" placeholder="Enter your name" inputRef={nameRef}/>
            <Input label="Email" placeholder="Enter your email" inputRef={emailRef}/>
            <Input label="Message" placeholder="Enter your message" inputRef={messageRef}/>
        </form>
        <div style={globalStyles.Buttons}>
            <Button name="Clear" style={buttonStyles.buttonV2} onClick={onClear}/>
            <Button name="Submit" style={buttonStyles.buttonV3} onClick={onSubmit}/>
        </div>
    </div>
    <div style={styles.homeContactUsImageContainer}>
        <img src={ "" } alt="" style={styles.homeContactUsImage} />
    </div>
</div>
}