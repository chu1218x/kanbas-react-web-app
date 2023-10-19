import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Nav from "../Nav";

function Labs(){
    return (
        <div className="container">
            <h1>Labs</h1>
            <Nav/>
            <Assignment3 />
            <Assignment4 />
        </div>
    );
}

export default Labs;