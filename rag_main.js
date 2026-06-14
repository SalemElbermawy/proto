Url='https://salemelbe-my-chat.hf.space/model'

async function sendMessage() {

    const inputField=document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const messageText = inputField.value.trim();
    if (messageText === "") return;

    const userDiv=document.createElement("div");
    userDiv.className="message user-msg";
    userDiv.innerHTML=messageText;
    chatBox.appendChild(userDiv)

    inputField.value="";
    chatBox.scrollTop=chatBox.scrollHeight;


    try{
        const response = await fetch(Url,{
            method:"POST",
            headers:{
                "Content-Type" :"application/json"
            },
            body:JSON.stringify({prompt:messageText})
        });

        const data = await response.json();

        const botDiv = document.createElement("div");
        botDiv.className="message bot-msg";
        botDiv.innerText=data.response;
        chatBox.appendChild(botDiv);
    }catch(error){
        const errorDiv = document.createElement("div");
        errorDiv.className="message bot-msg";
        errorDiv.style.color="#ff6b6b";
        errorDiv.innerHTML="Error We Can't Get The Server";
        chatBox.appendChild(errorDiv);
        console.error("Error:",error);
    }
    chatBox.scrollTop=chatBox.scrollHeight;
}

function handleKeyPress(event){
    if (event.key === "Enter"){
        sendMessage();
    }
}


