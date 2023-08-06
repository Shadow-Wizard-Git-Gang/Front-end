export const Button = (props: {name:string, style: Object, onClick?: () => void}) => {
    return <div style={props.style} onClick={props.onClick}>{ props.name }</div>
}