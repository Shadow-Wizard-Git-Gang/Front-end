import * as styles from "../../../styles/pages/Home.styles";
import * as buttonStyles from "../../../styles/components/Buttons.styles";
import { Button } from "../../../components/Button";

export const User = () => {
    //TODO: Buttons functionality
    //TODO: User data fetching

    return <div style={styles.homeUser}>
    <img src={ "" } alt="" style={styles.homeUserAvatar}/>
    <div style={styles.homeUserDataContainer}>
        <h2 style={styles.homeUserHeader}>{}</h2>
        <div style={styles.homeUserTagContainer}>
            <div style={styles.homeUserTag}>{}</div>
        </div>
        <p style={styles.homeUserParagraph}>{}</p>
    </div>
    <div style={styles.homeUserButtonContainer}>
        <Button name="Logout" style={buttonStyles.buttonV1}/>
        <Button name="Edit Profile" style={buttonStyles.buttonV3}/>
    </div>
</div>
}