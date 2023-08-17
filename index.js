const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");

let userMessage;


const creatChatLi = (message, className) => {
  const chatli = document.createElement("li");
  chatli.classList.add("chat", className);
  let ChatContent = className === "outgoing" ? `<p></p>`
    : `<p></p>`
  chatli.innerHTML = ChatContent;
  chatli.querySelector("p").textContent = message;
  return chatli;
}


const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;
  chatInput.value = "";
  chatbox.appendChild(creatChatLi(userMessage, "outgoing"));

  setTimeout(() => {
    // const incomingChatLi = creatChatLi("thinking...", "incoming")
    chatbox.appendChild(creatChatLi(answer, "incoming"));

  }, 600);


  // Sample local data object with questions and answers
  const localData = {
    "hello": "Hello wecolme to DAV College Chatbot. How can i help you?",
    "What is your name?": "My name is ChatBot.",
    "What is your favorite color?": "I don't have a favorite color, I'm a bot!",
    "How old are you?": "I am just a program, so I don't have an age.",
    "what are diffent courses offered": `M.Sc. in Computer Science M.Sc.in Mathematics M.Sc.in Chemistry M.Sc.in Physics`
  

};

  // Define patterns and corresponding responses
  const patterns = [
    { pattern: /hi|hey/gi, response: "Hello wellcome to DAV College Chatbot. How can i help you?" },
    { pattern: /name/gi, response: "My name is ChatBot." },
    { pattern: /favorite color|favourite color/gi, response: "I don't have a favorite color, I'm a bot!" },
    { pattern: /old|age/gi, response: "I am just a program, so I don't have an age." },
    { pattern: /courses/gi, response: "M.Sc. in Computer Science M.Sc.in Mathematics M.Sc.in Chemistry M.Sc.in Physics" }
  ];

  // Function to answer questions
  function answerQuestion(userMessage) {
    for (const patternObj of patterns) {
      if (userMessage.match(patternObj.pattern)) {
        return patternObj.response;
      }
    }
    return "I'm sorry, I don't have an answer for that question.";
  }

  // Example usage

  const answer = answerQuestion(userMessage);


}
sendChatBtn.addEventListener("click", handleChat);



document.getElementById('mytextarea').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent the default "Enter" behavior (newline in textarea)
    document.getElementById('send-btn').click(); // 
  }
});