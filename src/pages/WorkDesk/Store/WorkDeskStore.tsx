import { useRef } from "react";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import * as styles from "../../../styles/pages/WorkDesk/WorkDeskStore.styles";
import * as globalStyles from "../../../styles/global.styles";
import * as buttonStyles from "../../../styles/components/Buttons.styles";
import { Item } from "../../../components/Item";
import { itemProps } from "../../../interfaces/item.interface";

export const WorkDeskStore = () => {
    const itemRef = useRef(null);
    
    //TODO: fetch items
    const items: itemProps[] = [];

    const containerElements: JSX.Element[][] = [];

    items.forEach((item, index) => {
        const containerIndex = Math.floor(index / 3);
      
        if (!containerElements[containerIndex]) {
            containerElements[containerIndex] = [];
        }
      
        containerElements[containerIndex].push(
          <Item imageURL={item?.imageURL} label={item?.label} name={item?.name} data={item?.data}/>
        );
    });

    return <div style={styles.workDeskStore}>
            <div style={styles.workDeskStoreContainer}>
                <h2 style={globalStyles.Header}>Shop Items</h2>
                <Input placeholder="Search for items" inputRef={itemRef}/>
                <div style={globalStyles.Buttons}>
                    <Button name="Edit Item" style={buttonStyles.buttonV1}/>
                    <Button name="Create Item" style={buttonStyles.buttonV3}/>
                </div>
                {containerElements.map((containerItems, index) => (
                <div style={styles.workDeskStoreList} key={index}>
                    {containerItems}
                </div>
                ))}
                <div style={styles.workDeskStoreButtons}>
                    <Button name="All Items" style={buttonStyles.buttonV5}/>
                    <Button name="In Stock" style={buttonStyles.buttonV5}/>
                    <Button name="Out of Stock" style={buttonStyles.buttonV5}/>
                </div>
            </div>
        </div>
}