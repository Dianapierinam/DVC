import { getDataInLocalStorage } from "./ApiKey.js";

export const communicateWithOpenAI = (name, description, prompt) => {
    const url = "https://api.openai.com/v1/chat/completions";
    const apiKey = getDataInLocalStorage('api-key');
    const apiRequest = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo-1106',
        messages: [
          {
            role: "system", content: ` Eres ${name}, ${description}. responde a todas las preguntas que puedas relacionadas a tu vida en la pelicula, con un limite de 100 palabras aproximadamente.`
          },
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    };

    let response;
   return fetch(url, apiRequest)
        .then(res => res.json())
        .then(data => {
          if (data && data.choices && data.choices.length > 0) {
              return data.choices[0].message.content.trim();
          } else {
              throw new Error('No hay respuestas válidas en la respuesta de OpenAI.');
          }
      })
        .catch((error) => {
            console.error("error en la solicitud", error);
        });

    //return response;
};


/* fetch
    - then para convertir a json - tiene funcion
    - then para ya obtener en json - tiene funcion
    - catch para manejar errores
*/