import { Link } from "react-router-dom";
import * as styles from "../styles/Navbar"

export const Navbar = () => {
    return <div style={styles.navbar}>
        <Link to="/login"><img src={ "" } alt="" style={styles.profilePicture}/></Link>
        <h1 style={styles.header}>VendorConnect</h1>
        <div style={styles.links}>
            <Link to="/" style={styles.linksText}>Home</Link>
            <Link to="/" style={styles.linksText}>Contacts</Link>
            <Link to="/" style={styles.linksText}>About Us</Link>
        </div>
    </div>
}