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


// Reading Results

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    //default
    speech.text = "I don't know what you mean by " + message;
    //options
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
        love[Math.floor(Math.random() * love.length)];
        speech.text = finalText;
    } 

    if(message.includes('tell' && 'joke')){
        const finalText = 
        jokes[Math.floor(Math.random() * jokes.length)];
        speech.text = finalText;
    } 

    if(message.includes('hello')){
        const finalText = 
        hello[Math.floor(Math.random() * hello.length)];
        speech.text = finalText;
    } 

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    

    window.speechSynthesis.speak(speech);
}

// Responses

const hello = [
    'Hello',
    'Bonjour',
    'Good day'
];

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

const love = [
    'I love you so much' , 
    'I am a computer and incapable of love' , 
    'I was sent here to destroy humans, but then I fell in love with them'
];

const jokes = [
    "Two blondes walk into a bar, you'd think one of them would have seen it",
    "A man walks into a bar and he goes 'Ouch!' ",
    "What do you call a black guy flying a plane? A pilot you racist prick",
    "Why did eighteen blondes show up to watch a movie? Because they saw it was for 18 plus.",
    "What does a blonde do in the desert? Hoovering",
];
