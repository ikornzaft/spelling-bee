import { useEffect, useState } from "react";
import words from "./data/words";
import textToSpeech from "./helpers/textToSpeech";
import "./styles/styles.css";

function App() {
  const [currentWord, setCurrentWord] = useState("");
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [showWord, setShowWord] = useState(false);

  useEffect(() => {
    const idx = Math.floor(Math.random() * words.length);
    const randomWord = words[idx];
    setCurrentWord(randomWord);
    setCurrentWordIdx(idx);
  }, []);

  const speechHandler = msg => {
    window.speechSynthesis.speak(textToSpeech(msg));
  };

  const handleNewWord = () => {
    const idx = Math.floor(Math.random() * words.length);
    const randomWord = words[idx];
    setCurrentWord(randomWord);
    setCurrentWordIdx(idx);
  };

  const handleMouseOver = () => {
    setShowWord(true);
  };

  const handleMouseOut = () => {
    setShowWord(false);
  };

  const handleMeaning = () => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${currentWord}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const meaning = data[0].meanings[0].definitions[0].definition;
        speechHandler(meaning);
      })
      .catch(err => console.log(err));
  };


  return (
    <div className="App">
      <h1>Spelling Bee</h1>
      <div className="container">
        <button onClick={() => speechHandler(currentWord)}>SPEAK</button>
        <div>
          <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='reveal-button'>REVEAL {currentWordIdx}: </div>
          {showWord ? currentWord : "?????"}
        </div>
        <button onClick={() => handleNewWord()}>NEW WORD</button>
        <button onClick={handleMeaning}>Meaning</button>
      </div>
    </div>
  );
}

export default App;
