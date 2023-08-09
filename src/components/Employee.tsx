import * as styles from "../styles/components/Employee.styles"

export const Employee = (props: {avatarURL: string, username: string, position: string, id: string}) => {
    return <div style={styles.employeeContainer}>
        <div>
            <img src={ props.avatarURL } alt="" style={styles.image}/>
        </div>
        <div>
            <h2 style={styles.header}>{ props.username }</h2>
            <p style={styles.subtitle}>{ props.position }</p>
        </div>
        <p style={styles.id}>{ props.id }</p>
    </div>
};