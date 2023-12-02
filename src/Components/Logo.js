import {Component} from "react";

const styles = {
    logo : {
        fontWeight :"700",
        fontSize: "2.3rem",
        flex: "left",
        padding: "5px 340px",
        color: "#fdd302",
    }
}

class Logo extends Component{
    render(){
        return(
            <div style={styles.logo}>
                Image-Finder
            </div>
        )
    }
}

export default Logo