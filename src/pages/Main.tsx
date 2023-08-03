import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Link } from "react-router-dom";
import * as styles from "../styles/Main";
import * as buttonStyles from "../styles/Buttons";
import { Article } from "../components/Article";

export const Main = () => {
    return <div className="Main">
        <div style={styles.mainWelcome}>
            <div style={styles.mainWelcomeContainer}>
                <h2 style={styles.mainHeader}>Welcome to VendorConnect!</h2>
                <p style={styles.mainParagraph}>Manage your items and generate reports</p>
                <Input placeholder="Search Company..."/>
                <div style={styles.mainButtons}>
                    <Link to="/sign-up"><Button name="Join Company" style={buttonStyles.buttonV1}/></Link>
                    <Link to="/sign-up"><Button name="New Company" style={buttonStyles.buttonV3}/></Link>
                </div>
            </div>
            <img src={ "" } alt="" style={styles.mainWelcomeImage} />
        </div>
        <div style={styles.mainLogin}>
            <div style={styles.mainLoginContainer}>
                <h2 style={styles.mainHeader}>Welcome to our VendorConnect</h2>
                <p style={styles.mainLoginParagraph}>Sign up to start managing your store's items</p>
                <div style={styles.mainButtons}>
                    <Link to="/login"><Button name="Login" style={buttonStyles.buttonV2}/></Link>
                    <Link to="/sign-up"><Button name="Sign Up" style={buttonStyles.buttonV3}/></Link>
                </div>
            </div>
        </div>
        <div style={styles.mainNews}>
            <div style={styles.mainNewsContainer}>
                <h2 style={styles.mainHeader}>Latest News</h2>
                <p style={styles.mainParagraph}>Stay updated with the latest updates</p>
                <div style={styles.mainButtons}>
                    <Button name="Share" style={buttonStyles.buttonV2}/>
                    <Button name="Read More" style={buttonStyles.buttonV3}/>
                </div>
            </div>
            <div style={styles.mainNewsList}>
                <Article/>
                <Article/>
            </div>
        </div>
        <div style={styles.mainContactUs}>
            <div style={styles.mainContactUsContainer}>
                <h2 style={styles.mainHeader}>Contact Form</h2>
                <p style={styles.mainParagraph}>Get in touch with us</p>
                <Input title="Name" placeholder="Enter your name"/>
                <Input title="Email" placeholder="Enter your email"/>
                <Input title="Message" placeholder="Enter your message"/>
                <div style={styles.mainButtons}>
                    <Button name="Clear" style={buttonStyles.buttonV2}/>
                    <Button name="Submit" style={buttonStyles.buttonV3}/>
                </div>
            </div>
            <div style={styles.mainContactUsImageContainer}>
                <img src={ "" } alt="" style={styles.mainContactUsImage} />
            </div>
        </div>
    </div>
}