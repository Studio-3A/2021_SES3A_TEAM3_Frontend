import './ChatBot.css';
import '../../../App.css';
import ChatBotIcon from '../../svg/chatbot.svg';

function ChatBot() {

    function handleChatButton() {
        const el: HTMLElement = document.getElementById("chatbot-window")!;
        let currentDisplay = el.style.display;

        if (currentDisplay === 'block') {
            el.style.display = 'none';
        } else {
            console.log('here');
            el.style.display = 'block';
        }
    }
    
    return (
        <div className="cb-container">
            <div className="cb-section">
                <div id="chatbot-window" className="cb-chatbot">
                    <div className="cb-chatbot-container">
                        <iframe className="chatbot-iframe card-shadow"
                            allow='microphone;'
                            width='350'
                            height='430'
                            src='https://console.dialogflow.com/api-client/demo/embedded/44cd97b1-9772-4c73-a472-204fbe864c8c'>
                        </iframe>
    </div> 
                </div>
                <div className="cb-button" onClick={() => handleChatButton()}>
                    
                    <div id="chatbot-btn" className="cb-button-ico" >
                    <img alt="Chat" src={ChatBotIcon} />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ChatBot;