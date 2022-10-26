import { useEffect, useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret, faEarListen, faBook, faThumbsUp, faThumbsDown, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import words from "./data/words";
import textToSpeech from "./helpers/textToSpeech";
import "./styles/styles.scss";
import RevealBox from "./components/RevealBox";
import SpeakBtn from "./components/SpeakBtn";
import MeaningBtn from "./components/MeaningBtn";
import { MeaningBox } from "./components/MeaningBox";
import RightOrWrong from "./components/RightOrWrong";

library.add(faUserSecret, faEarListen, faBook, faThumbsUp, faThumbsDown, faTrophy);

function App() {
  const [currentWord, setCurrentWord] = useState("");
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [meaning, setMeaning] = useState("");
  const [showMeaning, setShowMeaning] = useState(false);
  const [voice, setVoice] = useState(null);
  const voices = window.speechSynthesis.getVoices();

  useEffect(() => {
    const idx = Math.floor(Math.random() * words.length);
    const randomWord = words[idx];
    setCurrentWord(randomWord);
    setCurrentWordIdx(idx);
  }, []);

  useEffect(() => {
    if (currentWord) {
      if (/\s/.test(currentWord)) {
        setMeaning("No meaning found") 
      } else {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${currentWord}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setMeaning(data[0].meanings[0].definitions[0].definition);
        })
        .catch(err => {
            console.log(err)
        });
      }
    }
  }, [currentWord]);

  useEffect(() => {
    const voice = voices.find(voice => voice.lang === 'en-GB');
    setVoice(voice);
  }, [voices]);

  const handleSpeech = () => {
    window.speechSynthesis.speak(textToSpeech(currentWord, voice));
  };

  const getNewWord = () => {
    const idx = Math.floor(Math.random() * words.length);
    const randomWord = words[idx];
    setCurrentWord(randomWord);
    setCurrentWordIdx(idx);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Spelling Bee <span className="header__icon-container"><FontAwesomeIcon icon="trophy" size="m" /></span></h1>
          <p>Score: {score}</p>
        </div>
        <div className="buttons-wrapper">
          <SpeakBtn handleSpeech={handleSpeech} />
          <MeaningBtn setShowMeaning={setShowMeaning} />
        </div>
        <RightOrWrong getNewWord={getNewWord} setScore={setScore} />
        <RevealBox currentWord={currentWord} />
        {showMeaning && <MeaningBox meaning={meaning} />}
      </div>
    </div>
  );
}

export default App;
