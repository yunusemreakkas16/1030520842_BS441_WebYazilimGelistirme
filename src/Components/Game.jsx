import {Button, Container, Row} from "react-bootstrap";
import '../Assets/Game.css';
import {Link, Route, Routes,BrowserRouter} from "react-router-dom";
import '../Assets/Info.css';


function Game(){
    const  choose ="Choose your Gamemode";
    return(
        <div className="alignv1">
            <h1>{choose}</h1>
            <Button className="align button" onClick={()=>{
            }}><Link className="forlink" to="/MultiPlayer">Multiplayer</Link></Button>
            <Button className="align button" onClick={()=>{
            }}><Link className="forlink" to="/SinglePlayer">SinglePlayer</Link></Button>
        </div>
)
}

export default Game;