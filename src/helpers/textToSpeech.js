const textToSpeech = (text) => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    return msg;
};

export default textToSpeech;
