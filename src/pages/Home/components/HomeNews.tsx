import * as styles from "../../../styles/pages/Home.styles";
import * as globalStyles from "../../../styles/global.styles";
import * as buttonStyles from "../../../styles/components/Buttons.styles";
import { Button } from "../../../components/Button";
import { Block } from "../../../components/Block";
import { blockProps } from "../../../interfaces/block.interface";

export const News = () => {
    // TODO: fetch news from the API?
    const news: blockProps[] = []

    return <div style={styles.homeNews}>
    <div style={styles.homeNewsContainer}>
        <h2 style={globalStyles.Header}>Latest News</h2>
        <p style={globalStyles.Paragraph}>Stay updated with the latest updates</p>
        <div style={globalStyles.Buttons}>
            <Button name="Share" style={buttonStyles.buttonV2}/>
            <Button name="Read More" style={buttonStyles.buttonV3}/>
        </div>
    </div>
    <div style={styles.homeNewsList}>
        {news.map((data, index) => (
          <Block imageURL={data.imageURL} tags={data.tags} user={data.user} data={data.data}/>
        ))}
    </div>
</div>
}