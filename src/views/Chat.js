const ChatView = () => {
    const element = document.createElement('div');
    const message = document.createElement('p');
    message.textContent = '¡Hola Chat!';
    element.appendChild(message);
    return element;
  };
  
  export default ChatView;