const textarea = document.querySelector("textarea");
const button = document.querySelector("button");

const textToSpeech = () => {
    const synth = window.speechSynthesis;
    const text = textarea.value;
    if (!synth.speaking && text) {
        const utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance);
    }
};

button.addEventListener("click", textToSpeech);
