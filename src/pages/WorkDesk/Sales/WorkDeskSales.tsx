import * as styles from "../../../styles/pages/WorkDesk/WorkDeskSales.styles";
import * as globalStyles from "../../../styles/global.styles";
import * as buttonStyles from "../../../styles/components/Buttons.styles";
import { Button } from "../../../components/Button";
import { Block } from "../../../components/Block";
import { Graph } from "../../../components/Graph";

export const WorkDeskSales = () => {
    //TODO: fetching statistics, statistics interface
    const statistics: object[] = []

    return <div style={styles.workDeskSales}>
        <div style={styles.Container}>
            <h2 style={globalStyles.Header}>Sales Overview</h2>
            <p style={globalStyles.Paragraph}>Track your sales performance</p>
            <Button name="Generate Report" style={buttonStyles.buttonV3}/>
            <div style={styles.List}>
                {statistics.map((data, index) => (
                    <Block data={data}/>   
                ))}
            </div>
            <div style={styles.GraphContainer}>
                <Graph />
            </div>
        </div>
    </div>
}