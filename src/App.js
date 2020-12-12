import React, { useState } from "react";
import "./styles.css";

let emojiTranslator = {
  "😂": "smiling",
  "❤️": "love Heart",
  "😴": "sleepingFace",
  "😕": "ConfusedFace",
  "😱": "Face Screaming in Fear",
  "🤓": "Nerd Face",
  "😬": "Grimacing Face",
  "😇": "Smiling Face with Halo",
  "😭": "Loudly Crying Face"
};

console.log(emojiTranslator);

export default function App() {
  let [meaning, output] = useState("");

  function eventHandler(event) {
    var userinput = event.target.value;
    meaning = emojiTranslator[userinput]; //bcoz we dont have index so this

    output(meaning);
    if (meaning === undefined) {
      output("sorry we dont have this emoji");
    }
  }
  let key = Object.keys(emojiTranslator);
  console.log(key);
  function handler(item) {
    meaning = emojiTranslator[item]; //bcoz we dont have index so this

    output(meaning);
  }
  // function bg() {
  //   console.log("hello");
  //   return url("./undraw.svg");
  // }

  return (
    <div className="App">
      <input
        onChange={eventHandler}
        placeholder="put your emoji here to know what it says"
      />
      <div className="meaning">{meaning}</div>
      <div>
        <ul>
          {key.map((item) => {
            return (
              <li key={item} onClick={() => handler(item)}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

/**
 *
 * VISER --. View -> Interact -> State in Event handler  -> Render
 */
