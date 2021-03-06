import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "๐": "Grinning Face",
  "๐": "Grinning Face with Big Eyes",
  "๐": "Grinning Face with Smiling Eyes",
  "๐": "Beaming Face with Smiling Eyes",
  "๐": "Grinning Squinting Face",
  "๐": "Grinning Face with Sweat",
  "๐คฃ": "Rolling on the Floor Laughing",
  "๐": "Face with Tears of Joy",
  "๐": "Slightly Smiling Face",
  "๐": "Upside-Down Face",
  "๐": "Winking Face",
  "๐": "Smiling Face with Smiling Eyes",
  "๐": "Smiling Face with Halo",
  "๐ฅฐ": "Smiling Face with Hearts",
  "๐": "Smiling Face with Heart-Eyes",
  "๐คฉ": "Star-Struck",
  "๐": "Face Blowing a Kiss",
  "๐": "Kissing Face",
  "๐": "Kissing Face with Closed Eyes",
  "๐": "Kissing Face with Smiling Eyes",
  "๐": "Face Savoring Food",
  "๐": "Face with Tongue",
  "๐": "Winking Face with Tongue",
  "๐คช": "Zany Face",
  "๐": "Squinting Face with Tongue",
  "๐ค": "Money-Mouth Face",
  "๐ค": "Hugging Face",
  "๐คญ": "Face with Hand Over Mouth",
  "๐คซ": "Shushing Face",
  "๐ค": "Thinking Face",
  "๐ค": "Zipper-Mouth Face",
  "๐คจ": "Face with Raised Eyebrow",
  "๐": "Neutral Face",
  "๐": "Expressionless Face",
  "๐ถ": "Face Without Mouth",
  "๐": "Smirking Face",
  "๐": "Unamused Face",
  "๐": "Face with Rolling Eyes",
  "๐ฌ": "Grimacing Face",
  "๐คฅ": "Lying Face",
  "๐": "Relieved Face",
  "๐": "Pensive Face",
  "๐ช": "Sleepy Face",
  "๐คค": "Drooling Face",
  "๐ด": "Sleeping Face",
  "๐ท": "Face with Medical Mask",
  "๐ค": "Face with Thermometer",
  "๐ค": "Face with Head-Bandage",
  "๐คข": "Nauseated Face",
  "๐คฎ": "Face Vomiting",
  "๐คง": "Sneezing Face",
  "๐ฅต": "Hot Face",
  "๐ฅถ": "Cold Face",
  "๐ฅด": "Woozy Face",
  "๐ต": "Dizzy Face",
  "๐คฏ": "Exploding Head",
  "๐ค ": "Cowboy Hat Face",
  "๐ฅณ": "Partying Face",
  "๐": "Smiling Face with Sunglasses",
  "๐ค": "Nerd Face",
  "๐ง": "Face with Monocle",
  "๐": "Confused Face",
  "๐": "Worried Face",
  "๐": "Slightly Frowning Face",
  "๐ฎ": "Face with Open Mouth",
  "๐ฏ": "Hushed Face",
  "๐ฒ": "Astonished Face",
  "๐ณ": "Flushed Face",
  "๐ฅบ": "Pleading Face",
  "๐ฆ": "Frowning Face with Open Mouth",
  "๐ง": "Anguished Face",
  "๐จ": "Fearful Face",
  "๐ฐ": "Anxious Face with Sweat",
  "๐ฅ": "Sad but Relieved Face",
  "๐ข": "Crying Face",
  "๐ญ": "Loudly Crying Face",
  "๐ฑ": "Face Screaming in Fear",
  "๐": "Confounded Face",
  "๐ฃ": "Persevering Face",
  "๐": "Disappointed Face",
  "๐": "Downcast Face with Sweat",
  "๐ฉ": "Weary Face",
  "๐ซ": "Tired Face",
  "๐ฅฑ": "Yawning Face",
  "๐ค": "Face with Steam From Nose",
  "๐ก": "Pouting Face",
  "๐ ": "Angry Face",
  "๐คฌ": "Face with Symbols on Mouth",
  "๐": "Smiling Face with Horns",
  "๐ฟ": "Angry Face with Horns"
};

var headingText = "iinside out";
var emojiList = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputChangeHandler(event) {
    var userInput = event.target.value;
    var emojiMeaning = emojiDictionary[userInput];
    if (emojiMeaning === undefined) {
      emojiMeaning = "This emoji is not defined in our database";
    }
    setMeaning(emojiMeaning);
  }

  const [emojiName, setEmojiName] = useState("");

  function emojiHandler(item) {
    var emojiMean = emojiDictionary[item];
    setEmojiName(emojiMean);
  }

  return (
    <div className="App">
      <h1>{headingText}</h1>

      <input
        placeholder="Insert your emoji here"
        onChange={inputChangeHandler}
      ></input>
      <div className="emojiDiv">{meaning}</div>
      <div className="emojiDisplayName">{emojiName}</div>
      <ul className="listDiv">
        {emojiList.map((item) => {
          return (
            <li className="emojiItems" onClick={() => emojiHandler(item)}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// {shoppingList.map((list, index) =>{
//   return <li
//   onClick={() => listClickHandler(list)}
//   style={{backgroundColor: getBg(index), fontSize: getSize(index)}}
//   key={index}>{list}</li>;
// }
//     )}

// var shoppingList = ["milk", "banana", "oats", "egg"];
// var color = "grey";
// var noColor = "white";

// function getBg(index){
//   if(index % 2 ===0)
//   {
//     return color;
//   }
//   return noColor;
// }

// function getSize(index){
//   if(index % 2===0)
//   {
//     return "larger"
//   }
//   return "small"
// }

// function listClickHandler(item){
//   console.log("Clicked ",item);
// }

// things to notice
// class --> className
// style --> takes an object instead of
// VISER --> Render a View -> user Interact with it
// -> Update State in Event Handler -> You React to it (Consumed in render)

//var headingText = "inside outtt";
// var color = "red";
// var fontColor = "black";
// //var count=0;
// //var userName = prompt("Enter your username")
// // function clicked(){
// //   console.log("clicked")
// // }
// var counter = 0;

/*
const [likeCounter, setLikeCounter] = useState(0)
  const [disLikeCounter, setDisLikeCounter] = useState(0)

  const clicked = () => {
    // count +=1;
    // console.log("clicked "+count);
     counter = likeCounter + 1;
    setLikeCounter(counter);
  }

  const disClick = () => {
     counter = likeCounter - 1;
     if(counter < 0)
     {
       counter = 0;
     }
     setLikeCounter(counter);
     var disLike = disLikeCounter + 1;
     setDisLikeCounter(disLike);
  }
*/

// in return
//<button onClick={clicked}>Like</button>{likeCounter}
//<button onClick={disClick}>Dislike</button>{disLikeCounter}
