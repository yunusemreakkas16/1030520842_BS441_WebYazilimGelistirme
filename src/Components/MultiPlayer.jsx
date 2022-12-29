
import {Button, Container, Row} from "react-bootstrap";
import '../Assets/Game.css';
import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import rock from '../Taş.png';
import scissor from '../Makas.png';
import paper from '../Kağıt.png';

function Game(){
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
        if(PlayerCard2!== null) {
            if (flag) {

                if (PlayerCard === 0 && PlayerCard2 === 1) {
                    setResult  ("Player 1  has won this round.");
                    setpCount(prevState => prevState + 1);
                    setP1Images(rock);
                    setP2images(scissor);
                }
                else if (PlayerCard === 1 && PlayerCard2 === 0) {
                    setResult  ("Player2 has won this round");
                    setP2Count(prevState => prevState + 1);
                    setP1Images(scissor);
                    setP2images(rock);
                }

                else if (PlayerCard === 0 && PlayerCard2 === 2) {
                    setResult  ("Player2 has won this round");
                    setP2Count(prevState => prevState + 1);
                    setP1Images(rock);
                    setP2images(paper);
                }

                else if (PlayerCard === 2 && PlayerCard2 === 0) {
                    setResult  ("Player 1  has won this round.");
                    setpCount(prevState => prevState + 1);
                    setP1Images(paper);
                    setP2images(rock);
                }
                else if (PlayerCard === 1 && PlayerCard2 === 2) {
                    setResult  ("Player 1  has won this round.");
                    setpCount(prevState => prevState + 1);
                    setP1Images(scissor);
                    setP2images(paper);
                }

                else if (PlayerCard === 2 && PlayerCard2 === 1) {
                    setResult  ("Player2 has won this round");
                    setP2Count(prevState => prevState + 1);
                    setP1Images(paper);
                    setP2images(scissor);
                }
                if (P2count === 3 || Pcount === 3) {
                    setFlag(false);

                    if (Pcount === 3) {
                        setResult("Congrats you've won the game.");
                    } else {
                        setResult ("You've lose the game.");
                    }
                }


            }
        }

        if(PlayerCard2!==null){
            let a = document.querySelectorAll(".card1")
            let b= document.querySelectorAll(".card2")
            for(let i=0;i<3;i++){
                a[i].classList.remove("disable");
                b[i].classList.add("disable");
            }
            setTurn("Player 1's turn")
        }
        setPlayerCard(null)
        setPlayerCard2(null)

    },[PlayerCard2] )

    const[disable, setDisable] = useState(true);
    const[turn, setTurn] = useState("Player 1's turn");

    useEffect(()=>{
        if(PlayerCard!==null){
            let a = document.querySelectorAll(".card1");
            let b= document.querySelectorAll(".card2");
            for(let i=0;i<3;i++){
                a[i].classList.add("disable");
                b[i].classList.remove("disable");
            }
            setTurn("Player 2's turn");
        }

    }, [PlayerCard])



    return(
        <div>
            <h1>{choose}</h1>
            <h3>Player 1</h3>
            <Button className="align card1" onClick={()=>{
                setPlayerCard(0);
            }}> <img className="size" src={rock} alt="Rock"/></Button>
            <Button className="align card1" onClick={()=>{
                setPlayerCard(1);
            }}> <img className="size" src={scissor} alt="Scissor"/></Button>
            <Button className="align card1" onClick={()=>{
                setPlayerCard(2);
            }}> <img className="size" src={paper} alt="Paper"/></Button>
            <br></br>
            <h3>Player 2</h3>
            <Button className="align card2 disable" onClick={()=>{
                setPlayerCard2(0);
            }}> <img className="size" src={rock} alt="Rock"/></Button>
            <Button className="align card2 disable" onClick={()=>{
                setPlayerCard2(1);
            }}> <img className="size" src={scissor} alt="Scissor"/></Button>
            <Button className="align card2 disable" onClick={()=>{
                setPlayerCard2(2);
            }}> <img className="size" src={paper} alt="Paper"/></Button>
            <br></br>
            <h2>{turn}</h2>
            <br></br>
            <img className="alignv2 size" src={P1Images}/>
            <img className="alignv2 size" src={P2Images}/>
            <h1>{result}</h1>
        </div>
    )


}

export default Game;