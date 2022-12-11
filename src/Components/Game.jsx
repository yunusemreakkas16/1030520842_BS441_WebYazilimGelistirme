import {Col, Container, Row} from "react-bootstrap";
import '../Assets/Game.css';
import {Route, Routes} from "react-router-dom";

function Game(){


    const  Rock       = 0;
    const  Scissor    = 1;
    const  Paper      = 2;

    let    Pcount     = 0;
    let    Bcount     = 0;
    let    flag       = true;
    let    PlayerCard;
    let    BotCard;
    let    result ="";

    //Default single player design.
    console.log("fgfgfg")
    //Ilgilen


    for(;flag===false;) {
        PlayerCard = Math.random(0,2);
        BotCard    = Math.random(0,2);

        if (PlayerCard === 0 && BotCard === 1) {
            result="Congrats, you've won this round.";
            Pcount++;
        }
        if (PlayerCard === 1 && BotCard === 0) {
            result="You've lost this round.";
            Bcount++;
        }

        if (PlayerCard === 0 && BotCard === 2) {
            result="You've lost this round.";
            Bcount++;
        }

        if (PlayerCard === 2 && BotCard === 0) {
            result="Congrats, you've won this round.";
            Pcount++;
        }
        if (PlayerCard === 1 && BotCard === 2) {
            result="Congrats, you've won this round.";
            Pcount++;
        }

        if (PlayerCard === 2 && BotCard === 1) {
            result="You've lost this round.";
            Bcount++;
        }
        if(Bcount===3 || Pcount===3)
        {
            flag =false;
        }
    }

    if(Pcount===3)
    {
        result="Congrats you've won the game.";
    }
    else
    {
        result="You've lose the game.";
    }

    return(
        <div>
            <h1 className="word">SinglePlayer</h1>
            <h1>{result}</h1>
        </div>
)

}

export default Game;