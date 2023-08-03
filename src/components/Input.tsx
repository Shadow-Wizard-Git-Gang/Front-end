import * as styles from "../styles/Input"

export const Input = (props: { title?: string, placeholder: string }) => {
    return <div style={styles.container}>
        { props.title 
        ? <p style={styles.title}>{ props.title }</p>
        : "" } 
        <input type="text" style={styles.input} placeholder={props.placeholder}></input>
    </div>
}