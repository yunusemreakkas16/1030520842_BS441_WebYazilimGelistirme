import {Button, Container, Row} from "react-bootstrap";
import '../Assets/Game.css';
import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import rock from '../Taş.png';
import scissor from '../Makas.png';
import paper from '../Kağıt.png';

function Game(){


    const  Rock       = 0;
    const  Scissor    = 1;
    const  Paper      = 2;


    let    BotCard;
    const  choose ="Choose your figure";
    //Default single player design.

    const [result,setResult]         = useState(null);
    const [PlayerCard,setPlayerCard] = useState(null);
    const [Pcount,setpCount]         = useState(0);
    const [flag,  setFlag]           = useState(true);
    const [Bcount,setBCount]         = useState(0);

    useEffect(()=>{
        if(PlayerCard!== null) {
            if (flag) {
                BotCard = Math.floor(Math.random() * 3);
                console.log("Bot:"+BotCard);
                console.log("PlayerCard:"+PlayerCard);

                if (PlayerCard === 0 && BotCard === 1) {
                    setResult  ("Congrats, you've won this round.");
                    setpCount(prevState => prevState + 1);
                    console.log("1");
                }
                else if (PlayerCard === 1 && BotCard === 0) {
                    setResult  ("Sorry, you've lost this round.");
                    setBCount(prevState => prevState + 1);
                    console.log("2");
                }

                else if (PlayerCard === 0 && BotCard === 2) {
                    setResult  ("Sorry, you've lost this round.");
                    setBCount(prevState => prevState + 1);
                    console.log("3");
                }

                else if (PlayerCard === 2 && BotCard === 0) {
                    setResult  ("Congrats, you've won this round.");
                    setpCount(prevState => prevState + 1);
                    console.log("4");
                }
                else if (PlayerCard === 1 && BotCard === 2) {
                    setResult  ("Congrats, you've won this round.");
                    setpCount(prevState => prevState + 1);
                    console.log("5");
                }

                else if (PlayerCard === 2 && BotCard === 1) {
                    setResult  ("Sorry, you've lost this round.");
                    setBCount(prevState => prevState + 1);
                    console.log("6");
                }
                if (Bcount === 3 || Pcount === 3) {
                    setFlag(false);

                    if (Pcount === 3) {
                        setResult("Congrats you've won the game.");
                    } else {
                        setResult ("You've lose the game.");
                    }
                    console.log(result);
                }


            }
        }

    },[PlayerCard])



    return(
        <div>
            <h1 className="word">SinglePlayer</h1>
            <h1>{choose}</h1>
            <Button className="align" onClick={()=>{
                setPlayerCard(0);
            }}> <img className="size" src={rock} alt="Rock"/></Button>
            <Button className="align" onClick={()=>{
                setPlayerCard(1);
            }}> <img className="size" src={scissor} alt="Scissor"/></Button>
            <Button className="align" onClick={()=>{
                setPlayerCard(2);
            }}> <img className="size" src={paper} alt="Paper"/></Button>
            <h1>{result}</h1>
        </div>
)


}

export default Game;