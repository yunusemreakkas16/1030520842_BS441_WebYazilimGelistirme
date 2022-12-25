
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
    const  choose ="You are in multiplayer mode. Choose your figure.";
    //Default single player design.

    const [result,setResult]           = useState(null);
    const [PlayerCard,setPlayerCard]   = useState(null);
    const [PlayerCard2,setPlayerCard2] = useState(null);
    const [Pcount,setpCount]           = useState(0);
    const [flag,  setFlag]             = useState(true);
    const [P2count,setP2Count]         = useState(0);
    const [P2Images,setP2images]       = useState(null);
    const [P1Images,setP1Images]       = useState(null);

    useEffect(()=>{
        if(PlayerCard!== null && PlayerCard2!== null) {
            if (flag) {
                console.log("PlayerCard2:"+PlayerCard2);
                console.log("PlayerCard:"+PlayerCard);

                if (PlayerCard === 0 && PlayerCard2 === 1) {
                    setResult  ("Player 1  has won this round.");
                    setpCount(prevState => prevState + 1);
                    setP1Images(rock);
                    setP2images(scissor);
                    console.log("1");
                }
                else if (PlayerCard === 1 && PlayerCard2 === 0) {
                    setResult  ("Player2 has won this round");
                    setP2Count(prevState => prevState + 1);
                    setP1Images(scissor);
                    setP2images(rock);
                    console.log("2");
                }

                else if (PlayerCard === 0 && PlayerCard2 === 2) {
                    setResult  ("Player2 has won this round");
                    setP2Count(prevState => prevState + 1);
                    setP1Images(rock);
                    setP2images(paper);
                    console.log("3");
                }

                else if (PlayerCard === 2 && PlayerCard2 === 0) {
                    setResult  ("Player 1  has won this round.");
                    setpCount(prevState => prevState + 1);
                    setP1Images(paper);
                    setP2images(rock);
                    console.log("4");
                }
                else if (PlayerCard === 1 && PlayerCard2 === 2) {
                    setResult  ("Player 1  has won this round.");
                    setpCount(prevState => prevState + 1);
                    setP1Images(scissor);
                    setP2images(paper);
                    console.log("5");
                }

                else if (PlayerCard === 2 && BotCard === 1) {
                    setResult  ("Player2 has won this round");
                    setP2Count(prevState => prevState + 1);
                    setP1Images(paper);
                    setP2images(scissor);
                    console.log("6");
                }
                if (P2count === 3 || Pcount === 3) {
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

    },[PlayerCard,PlayerCard2] )



    return(
        <div>
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

            <Button className="align" onClick={()=>{
                setPlayerCard2(0);
            }}> <img className="size" src={rock} alt="Rock"/></Button>
            <Button className="align" onClick={()=>{
                setPlayerCard2(1);
            }}> <img className="size" src={scissor} alt="Scissor"/></Button>
            <Button className="align" onClick={()=>{
                setPlayerCard2(2);
            }}> <img className="size" src={paper} alt="Paper"/></Button>

            <img className="align size" src={P1Images}/>
            <img className="align size" src={P2Images}/>
            <h1>{result}</h1>
        </div>
    )


}

export default Game;