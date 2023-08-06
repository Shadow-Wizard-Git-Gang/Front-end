import * as styles from "../../../styles/pages/Home.styles";
import * as globalStyles from "../../../styles/global.styles";
import * as buttonStyles from "../../../styles/components/Buttons.styles";
import { Button } from "../../../components/Button";
import { Link } from "react-router-dom";

export const Login = () => {
    return <div style={styles.homeLogin}>
    <div style={styles.homeLoginContainer}>
        <h2 style={globalStyles.Header}>Welcome to our VendorConnect</h2>
        <p style={styles.homeLoginParagraph}>Sign up to start managing your store's items</p>
        <div style={globalStyles.Buttons}>
            <Link to="/login"><Button name="Login" style={buttonStyles.buttonV2}/></Link>
            <Link to="/sign-up"><Button name="Sign Up" style={buttonStyles.buttonV3}/></Link>
        </div>
    </div>
</div>
}