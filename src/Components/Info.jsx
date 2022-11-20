import {useState} from "react";
import {Button} from "react-bootstrap";
import "../Assets/Info.css";

export const Info = ()=>{
    const [word,setWord] = useState("The first known mention of the game was in the book Wuzazu by the Ming-dynasty writer Xie Zhaozhe who wrote that the game dated back to the time of the Han dynasty in the book, the game was called shoushiling Li Rihua's book Note of Liuyanzhai also mentions this game, calling it shoushiling.");

    return(
        <div>
            <h1>History</h1>
            <h3>{word}</h3>
            <Button className="button" onClick={()=>{setWord("The first known mention of the game was in the book Wuzazu by the Ming-dynasty writer Xie Zhaozhe who wrote that the game dated back to the time of the Han dynasty in the book, the game was called shoushiling Li Rihua's book Note of Liuyanzhai also mentions this game, calling it shoushiling.")}}>1</Button>
            <Button className="button" onClick={()=>{setWord("Throughout Japanese history there are frequent references to sansukumi-ken, meaning ken (fist) games \"of the three who are afraid of one another\" (i.e. A beats B, B beats C, and C beats A). This type of game originated in China before being imported to Japan and subsequently also becoming popular among the Japanese. The earliest Japanese sansukumi-ken game was known as mushi-ken (虫拳), which was imported directly from China.")}}>2</Button>
            <Button className="button" onClick={()=>{setWord(" In mushi-ken the \"frog\" (represented by the thumb) triumphs over the \"slug\" (represented by the little finger), which, in turn prevails over the \"snake\" (represented by the index finger), which triumphs over the \"frog\". Although this game was imported from China the Japanese version differs in the animals represented.")}}>3</Button>
            <Button className="button" onClick={()=>{setWord("In adopting the game, the original Chinese characters for the poisonous centipede (蜈蜙) were apparently confused with the characters for the slug (蛞蝓). The most popular sansukumi-ken game in Japan was kitsune-ken (狐拳).In the game, a supernatural fox called a kitsune (狐) defeats the village head, the village head (庄屋) defeats the hunter, and the hunter (猟師) defeats the fox.")}}>4</Button>
            <Button className="button" onClick={()=>{setWord("Kitsune-ken, unlike mushi-ken or rock–paper–scissors, is played by making gestures with both hands. Today, the best-known sansukumi-ken is called jan-ken (じゃんけん), which is a variation of the Chinese games introduced in the 17th century. Jan-ken uses the rock, paper, and scissors signs and is the game that the modern version of rock paper scissors derives from directly.")}}>5</Button>
            <Button className="button" onClick={()=>{setWord("Hand-games using gestures to represent the three conflicting elements of rock, paper, and scissors have been most common since the modern version of the game was created in the late 19th century, between the Edo and Meiji periods.")}}>6</Button>
        </div>
    )
}
export default Info;