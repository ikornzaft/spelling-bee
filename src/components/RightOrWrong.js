import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RightOrWrong = ({getNewWord, setScore}) => {
  const handleRight = () => {
    setScore(prevScore => prevScore + 1);
    getNewWord();
  };

  const handleWrong = () => {
    setScore(prevScore => prevScore > 0 ? prevScore - 1 : 0);
    getNewWord();
  };

  return (
    <div className="right-wrong__wrapper">
        <button onClick={handleRight} className="right-wrong__btn right-wrong__btn--right">
          <FontAwesomeIcon icon="thumbs-up" size="2x" />
        </button>
        <button onClick={handleWrong} className="right-wrong__btn right-wrong__btn--wrong">
          <FontAwesomeIcon icon="thumbs-down" size="2x" />
        </button>
    </div>
  )
}

export default RightOrWrong;