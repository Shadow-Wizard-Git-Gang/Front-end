import * as styles from "../styles/components/Block.styles"
import { blockProps } from "../interfaces/block.interface";

// TODO: changeable styling
export const Block = (props: blockProps) => {
    const blockStyle = {
        ...styles.block,
        justifyContent: props.imageURL ? "center" : undefined,
        flexDirection: props.imageURL ? undefined : 'column' as const,
        gap: props.imageURL ? '1rem' : '0.25rem',
    };
    return <div style={blockStyle}>
        { props.imageURL && <img src={ props.imageURL } alt="" style={styles.image}/> }
        <div style={styles.container}>
            <h2 style={(props.imageURL ? styles.header : styles.title)}>{props.data?.header}</h2>
            <p style={(props.imageURL ? styles.subtitle : styles.data)}>{props.data?.subtitle}</p>
            <p style={(props.imageURL ? styles.text : styles.change)}>{props.data?.text}</p>
            <TagContainer tags={ props.tags } />
            {
                props.user && 
                <div style={styles.userContainer}>
                    <img src={ props.user?.avatarURL } alt="" style={styles.avatar}/>
                    <p style={styles.username}>{ props.user?.username }</p>
                </div>
            }
        </div>
    </div>
}

const TagContainer = (props: { tags?: string[] }) => {
    if (!props.tags || props.tags.length === 0) {
      return null;
    }
  
    return (
      <div style={styles.tagContainer}>
        {props.tags.map((tag, index) => (
          <div key={index} style={styles.tag}>
            {tag}
          </div>
        ))}
      </div>
    );
};