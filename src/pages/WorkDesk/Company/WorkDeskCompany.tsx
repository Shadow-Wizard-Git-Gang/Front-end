import * as styles from "../../../styles/pages/WorkDesk/WorkDeskCompany.styles";
import * as globalStyles from "../../../styles/global.styles";
import * as buttonStyles from "../../../styles/components/Buttons.styles";
import { Button } from "../../../components/Button";
import { Employee } from "../../../components/Employee";

export const WorkDeskCompany = () => {
    //TODO: employees fetching and type of a user
    const employees: any[] = [{}];

    return <div style={styles.workDeskCompany}>
        <div style={styles.container}>
            <h2 style={globalStyles.Header}>Company Employees</h2>
            <p style={globalStyles.Paragraph}>Manage your company's staff</p>
            <div style={globalStyles.Buttons}>
                <Button name="Edit Employee" style={buttonStyles.buttonV2}/>
                <Button name="Add Employee" style={buttonStyles.buttonV3}/>
            </div>
            <div style={styles.list}>
                {employees.map((employee, index) => (
                    <Employee avatarURL="" username="test" position="test" id="test"/>
                ))}
            </div>
        </div>
        </div>
}