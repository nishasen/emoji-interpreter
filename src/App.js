import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "😚": "Kissing Face with Closed Eyes",
  "😙": "Kissing Face with Smiling Eyes",
  "😋": "Face Savoring Food",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "🤪": "Zany Face",
  "😝": "Squinting Face with Tongue",
  "🤑": "Money-Mouth Face",
  "🤗": "Hugging Face",
  "🤭": "Face with Hand Over Mouth",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face",
  "🤐": "Zipper-Mouth Face",
  "🤨": "Face with Raised Eyebrow",
  "😐": "Neutral Face",
  "😑": "Expressionless Face",
  "😶": "Face Without Mouth",
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "🙄": "Face with Rolling Eyes",
  "😬": "Grimacing Face",
  "🤥": "Lying Face",
  "😌": "Relieved Face",
  "😔": "Pensive Face",
  "😪": "Sleepy Face",
  "🤤": "Drooling Face",
  "😴": "Sleeping Face",
  "😷": "Face with Medical Mask",
  "🤒": "Face with Thermometer",
  "🤕": "Face with Head-Bandage",
  "🤢": "Nauseated Face",
  "🤮": "Face Vomiting",
  "🤧": "Sneezing Face",
  "🥵": "Hot Face",
  "🥶": "Cold Face",
  "🥴": "Woozy Face",
  "😵": "Dizzy Face",
  "🤯": "Exploding Head",
  "🤠": "Cowboy Hat Face",
  "🥳": "Partying Face",
  "😎": "Smiling Face with Sunglasses",
  "🤓": "Nerd Face",
  "🧐": "Face with Monocle",
  "😕": "Confused Face",
  "😟": "Worried Face",
  "🙁": "Slightly Frowning Face",
  "😮": "Face with Open Mouth",
  "😯": "Hushed Face",
  "😲": "Astonished Face",
  "😳": "Flushed Face",
  "🥺": "Pleading Face",
  "😦": "Frowning Face with Open Mouth",
  "😧": "Anguished Face",
  "😨": "Fearful Face",
  "😰": "Anxious Face with Sweat",
  "😥": "Sad but Relieved Face",
  "😢": "Crying Face",
  "😭": "Loudly Crying Face",
  "😱": "Face Screaming in Fear",
  "😖": "Confounded Face",
  "😣": "Persevering Face",
  "😞": "Disappointed Face",
  "😓": "Downcast Face with Sweat",
  "😩": "Weary Face",
  "😫": "Tired Face",
  "🥱": "Yawning Face",
  "😤": "Face with Steam From Nose",
  "😡": "Pouting Face",
  "😠": "Angry Face",
  "🤬": "Face with Symbols on Mouth",
  "😈": "Smiling Face with Horns",
  "👿": "Angry Face with Horns"
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
