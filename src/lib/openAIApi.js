// Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from './ApiKey.js';


export const communicateWithOpenAI = (messages) => {
   //Aquí es donde debes implementar la petición con fetch o axios
   const key = getApiKey();
   const openAI = {
    method: 'POST',
    header:{
     'Content-Type':'application/json',
     'Authorization': `Bearer ${key}`,
    },

    body: JSON.stringify ({
        model: "gpt-3.5-turbo",
        messages :[
            {
                role :"system",
                content: "You are the character from the Harry Potter saga, act like him or her."
            },


    ]
        


    }),




   };
   return fetch ('https://api.openai.com/v1/chat/completions', openAI)
   .then (response => {

    return response.json();
   }).then(data => {

   return data.choices [0].messasge.content;
}).catch(error =>{
    throw error
});
};