import { groupchat } from "../components/groupchat.js";
import data from '../data/dataset.js';

export default function groupView() {
  const groupViewElement = document.createElement('div');
  groupViewElement.classList.add('group-view');

  // Crear el componente del grupo una sola vez
  const groupChatElement = groupchat(data);
  groupViewElement.appendChild(groupChatElement);

  // Mostrar los personajes en la consola
  data.forEach(personaje => { personaje
    //console.log(personaje);
  });

  return groupViewElement;
}



  



