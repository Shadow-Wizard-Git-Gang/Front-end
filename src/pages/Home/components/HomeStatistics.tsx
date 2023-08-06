import * as styles from "../../../styles/pages/Home.styles";
import * as globalStyles from "../../../styles/global.styles";
import * as buttonStyles from "../../../styles/components/Buttons.styles";
import { Button } from "../../../components/Button";
import { Block } from "../../../components/Block";
import { Graph } from "../../../components/Graph";
import { Link } from "react-router-dom";


export const Statistics = () => {
    //TODO: fetching statistics, statistics interface
    const statistics: object[] = []

    return <div style={styles.homeStatistics}>
    <div style={styles.homeStatisticsContainer}>
        <h2 style={globalStyles.Header}>Sales Metrics</h2>
        <p style={globalStyles.Paragraph}>Track your sales performance</p>
        <Link to={"work-desk/statistics"}><Button name="View Detailed Report" style={buttonStyles.buttonV3}/></Link>
        <div style={styles.homeStatisticsList}>
            {statistics.map((data, index) => (
                <Block data={data}/>   
            ))}
        </div>
        <div style={styles.homeStatisticsGraphContainer}>
            <Graph />
        </div>
    </div>
</div>
}