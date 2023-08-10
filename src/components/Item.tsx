import * as styles from "../styles/components/Item.styles";
import { itemProps } from "../interfaces/item.interface";

export const Item = (props: itemProps) => {
    return <div style={styles.Item}>
        <div style={styles.ItemImageContainer}>
            <div style={styles.ItemLabel}>{ props.label ? props.label : "Product Label" }</div>
            {props.imageURL ? 
            <img src={ props.imageURL } alt="Product" style={styles.ItemImage}/>
            : <p style={styles.ItemImagePlaceholder}>Product Image</p>
            }
        </div>
        <div style={styles.ItemTextContainer}>
            <h2 style={styles.ItemTextTitle}>{ props.name }</h2>
            <p style={styles.ItemTextData}>{ props.data }</p>
        </div>
    </div>
};