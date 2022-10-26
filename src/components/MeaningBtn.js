import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const MeaningBtn = ({setShowMeaning}) => {
  return (
    <div onMouseOver={() => setShowMeaning(true)} onMouseOut={() => setShowMeaning(false)} className="speak-btn__container">
        <FontAwesomeIcon icon="book" size="2x" />
    </div>
  )
}

export default MeaningBtn;