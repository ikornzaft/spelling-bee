const textToSpeech = (text, voice) => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.pitch = 1;
    msg.rate = 0.7;
    msg.lang = 'en-US';
    msg.voice = voice;
    return msg;
};

export default textToSpeech;
