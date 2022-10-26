import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SpeakBtn = ({handleSpeech}) => {
  return (
    <div onClick={handleSpeech} className="speak-btn__container">
        <FontAwesomeIcon icon="ear-listen" size="2x" />
    </div>
  )
}

export default SpeakBtn;