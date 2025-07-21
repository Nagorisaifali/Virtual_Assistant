

// src/App.jsx
import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import assistantImg from "./assets/sec.jpeg";

const App = () => {

  const [content, setContent] = useState("Click here to talk to me");
  const recognitionRef = useRef(null);


  useEffect(() => {
    wishMe();            

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;

    recognition.onresult = (event) => {
      let currentIndex = event.resultIndex;
      let transcript = event.results[currentIndex][0].transcript;
      setContent(transcript);
      takeCommand(transcript.toLowerCase());
    };
  }, []);

  const speak = (text) => {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-GB";
    window.speechSynthesis.speak(text_speak);
  };

  const wishMe = () => {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) speak("Good Morning Sir");
    else if (hours >= 12 && hours < 16) speak("Good Afternoon Sir");
    else speak("Good Evening Sir");
  };

  const handleTalk = () => {
    recognitionRef.current.start();
  };

  const takeCommand = (msg) => {
    if (msg.includes("hello") || msg.includes("hey")) {
    speak("Hello sir, what can I help you with?");
  } else if (msg.includes("who are you")) {
    speak("I am your virtual assistant, created by Saif Ali Nagori.");
  } else if (msg.includes("open youtube")) {
    speak("Opening YouTube");
    window.open("https://www.youtube.com", "_blank");
  } else if (msg.includes("open google")) {
    speak("Opening Google");
    window.open("https://www.google.com", "_blank");
  } else if (msg.includes("open facebook")) {
    speak("Opening Facebook");
    window.open("https://www.facebook.com", "_blank");
  } else if (msg.includes("open instagram")) {
    speak("Opening Instagram");
    window.open("https://www.instagram.com", "_blank");

  // --- Add 100+ Suggestions Below ---

  } else if (msg.includes("open gmail")) {
    speak("Opening Gmail");
    window.open("https://mail.google.com", "_blank");
  } else if (msg.includes("open whatsapp")) {
    speak("Opening WhatsApp ");
    window.open("whatsApp://"  );
  } else if (msg.includes("open twitter")) {
    speak("Opening Twitter");
    window.open("https://twitter.com", "_blank");
  } else if (msg.includes("open linkedin")) {
    speak("Opening LinkedIn");
    window.open("https://www.linkedin.com", "_blank");
  } else if (msg.includes("what is your name")) {
    speak("My name is Shifra, your assistant");
  } else if (msg.includes("open github")) {
    speak("Opening GitHub");
    window.open("https://github.com", "_blank");
  } else if (msg.includes("open netflix")) {
    speak("Opening Netflix");
    window.open("https://www.netflix.com", "_blank");
  } else if (msg.includes("play music")) {
    speak("Playing music");
    window.open("https://music.youtube.com", "_blank");
  } else if (msg.includes("open spotify")) {
    speak("Opening Spotify");
    window.open("https://open.spotify.com", "_blank");
  } else if (msg.includes("tell me a joke")) {
    speak("Why don't scientists trust atoms? Because they make up everything!");
  } else if (msg.includes("weather")) {
    speak("Opening weather forecast");
    window.open("https://weather.com", "_blank");
  } else if (msg.includes("news")) {
    speak("Opening latest news");
    window.open("https://news.google.com", "_blank");
  } else if (msg.includes("calculator")) {
    speak("Opening calculator");
    window.open("https://www.google.com/search?q=calculator", "_blank");
  } else if (msg.includes("map")) {
    speak("Opening Google Maps");
    window.open("https://maps.google.com", "_blank");
  } else if (msg.includes("translate")) {
    speak("Opening Google Translate");
    window.open("https://translate.google.com", "_blank");
  } else if (msg.includes("timer")) {
    speak("Setting a timer");
    window.open("https://www.google.com/search?q=timer", "_blank");
  } else if (msg.includes("reminder")) {
    speak("You can use Google Calendar for reminders");
    window.open("https://calendar.google.com", "_blank");
  } else if (msg.includes("calendar")) {
    speak("Opening Calendar");
    window.open("https://calendar.google.com", "_blank");
  } else if (msg.includes("translate hindi")) {
    speak("Translating to Hindi");
    window.open("https://translate.google.com/?sl=en&tl=hi", "_blank");
  } else if (msg.includes("translate spanish")) {
    speak("Translating to Spanish");
    window.open("https://translate.google.com/?sl=en&tl=es", "_blank");
  } else if (msg.includes("open amazon")) {
    speak("Opening Amazon");
    window.open("https://www.amazon.in", "_blank");
  } else if (msg.includes("open flipkart")) {
    speak("Opening Flipkart");
    window.open("https://www.flipkart.com", "_blank");
  } else if (msg.includes("open swiggy")) {
    speak("Opening Swiggy");
    window.open("https://www.swiggy.com", "_blank");
  } else if (msg.includes("open zomato")) {
    speak("Opening Zomato");
    window.open("https://www.zomato.com", "_blank");
  } else if (msg.includes("open myntra")) {
    speak("Opening Myntra");
    window.open("https://www.myntra.com", "_blank");

  } 
  else if (msg.includes("time")) {
    let time = new Date().toLocaleString(undefined , {hour:"numeric" , minute:"numeric"}) ; 
    speak(time) ; 
  }
  else if (msg.includes("date")) {
    let date = new Date().toLocaleString(undefined , {day:"numeric" , month:"short"}) ; 
    speak(date) ; 
  }

  else if (msg.includes("flip a coin")) {
    const result = Math.random() > 0.5 ? "Heads" : "Tails";
    speak("Flipping a coin: " + result);
  } else if (msg.includes("roll a dice")) {
    const result = Math.floor(Math.random() * 6) + 1;
    speak("Rolling the dice: It's a " + result);

  } 

  else {
    speak(`this is what i found on internet regarding ${msg.replace("shipra" , "") || msg.replace("shifra" , "")}`);
    window.open(`https://www.google.com/search?q=${msg.replace("shipra" , "") || msg.replace("shifra" , "")}`)

  }
  };

  return (
    <div className="container">
      <img
        id="logo"
        src={assistantImg}
        alt="Virtual Assistant"
        className="assistant-img"
      />

      <h1>
        I'm <span className="pink">Shifra</span>, Your
        <span className="blue"> Virtual Assistant</span>
      </h1>

      <button id="btn" className="talk-button" onClick={handleTalk}>
        🔍 <span id="content">{content}</span>
      </button>
    </div>
  );
};

export default App;
