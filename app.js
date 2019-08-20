// HTML Selectors

const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

// Window Selectors
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();


// Recognition start and end
recognition.onstart = function (){
    console.log('voice is active');
};
recognition.onresult = function(event){
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;

    content.textContent = transcript;
    readOutLoud(transcript);
};

//add listener to button

btn.addEventListener('click',()=>{
    recognition.start();
});

// Responses
const greetings = [
    'Alright bitch', 
    'Howaya' , 
    'Wha Hop',
    "I'm doing alright, how are you?"    
];

const weathers = [
    'Sunny', 
    'Rainy' , 
    'God knows',
    "It's Ireland, sure who knows?"
];

const emotions = [
    'I love you so much' , 
    'I am a computer and incapable of love' , 
    'I was sent here to destroy humans, but then I fell in love with them'
];

// Reading Results

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "I don't know what you mean by " + message;
    if(message.includes('how are you')){
        const finalText = 
        greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }
    if(message.includes('weather' && 'today')){
        const finalText = 
        weathers[Math.floor(Math.random() * weathers.length)];
        speech.text = finalText;
    } 
    if(message.includes('love')){
        const finalText = 
        emotions[Math.floor(Math.random() * emotions.length)];
        speech.text = finalText;
    } 

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    

    window.speechSynthesis.speak(speech);
}