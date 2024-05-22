import { groupchat } from "../components/groupchat.js";
import { communicateWithOpenAI } from "../lib/OpenAIApi.js";
import data from '../data/dataset.js';

export default function groupView() {
  const groupViewElement = document.createElement('div');
  groupViewElement.classList.add('group-view');

  // Crear el componente del grupo una sola vez
  const groupChatElement = groupchat(data);
  groupViewElement.appendChild(groupChatElement);

  // Mostrar los personajes en la consola
  data.forEach(personaje => {
    console.log(personaje);
  });

  return groupViewElement;
}


  



