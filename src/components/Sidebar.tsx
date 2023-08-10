import { Link } from "react-router-dom";
import * as styles from "../styles/components/Sidebar.styles"

export const Sidebar = () => {
    return <div style={styles.sidebar}>
        <Link to="/work-desk/store" style={styles.Links}><p style={styles.LinksIcon}>😃</p><p style={styles.LinksText}>Store</p></Link>
        <Link to="/work-desk/sales" style={styles.Links}><p style={styles.LinksIcon}>😃</p><p style={styles.LinksText}>Sales</p></Link>
        <Link to="/work-desk/company" style={styles.Links}><p style={styles.LinksIcon}>😃</p><p style={styles.LinksText}>Company</p></Link>
    </div>
}