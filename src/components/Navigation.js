import {Link} from "react-router-dom"

function Navigation(){

    return (
    <nav style={{
        border : "solid 1px",
        padding : "1rem",
        marginBottom : "1rem",
        backgroundColor : "lightgray",        
    }}>

        <Link to="/">Home</Link> | {""}
        <Link to="Graph">Score Graph</Link> | {""}
        <Link to="Detail">Detail</Link>

    </nav>
    )
}

export default Navigation