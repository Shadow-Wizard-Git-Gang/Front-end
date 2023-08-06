import React from 'react';
import * as styles from "../styles/components/Input.styles"

export const Input = (props: { label?: string, placeholder: string, inputRef: React.Ref<HTMLInputElement> }) => {
    return <div style={styles.container}>
        { props.label && <label style={styles.label}>{ props.label }</label> } 
        <input ref={props.inputRef} type="text" style={styles.input} placeholder={props.placeholder}></input>
    </div>
}