import './ChatBot.css';

function ChatBot() {

    
    return (
        <div className="cb-container">
            <div className="cb-button">
            <iframe
                allow='microphone;'
                width='350'
                height='430'
                src='https://console.dialogflow.com/api-client/demo/embedded/44cd97b1-9772-4c73-a472-204fbe864c8c'
            ></iframe>
            </div>
        </div>
    );
}

export default ChatBot;