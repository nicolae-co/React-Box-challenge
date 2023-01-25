
function Box(props){
    
    const styles = {
        backgroundColor: props.on ? "#222" : "transparent"
      }

    return (
        <div 
            style={styles} 
            className="box" 
            onClick={props.toggle}   
        ></div>
    )
}
export default Box