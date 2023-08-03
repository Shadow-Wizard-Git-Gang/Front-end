import * as styles from "../styles/Article"

export const Article = () => {
    return <div style={styles.article}>
        <img src={ "" } alt="" style={styles.image}/>
        <div style={styles.container}>
            <h2 style={styles.header}>Temp</h2>
            <p style={styles.subtitle}>Temp</p>
            <p style={styles.text}>Temp</p>
            <div style={styles.tagContainer}>
                <div style={styles.tag}>Temp</div>
            </div>
            <div style={styles.userContainer}>
                <img src={ "" } alt="" style={styles.avatar}/>
                <p style={styles.username}>Temp</p>
                <p style={styles.text}>👍</p>
                <p style={styles.text}>✍️</p>
            </div>
        </div>
    </div>
}