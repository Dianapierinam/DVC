async function getCompletion(character, shortdescription, prompt) {

    const conversation = [
        {rol: "system", content: ` Eres ${character}, ${shortdescription}. responde a todas las preguntas que puedas relacionadas a tu vida en la pelicula, con un limite de 100 palabras aproximadamente.`
          }, 
        {rol: "user", content: prompt}
    ]
    
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        Headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + api_key
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo-1106',
            messages: conversation
            //max_tokens: 5,
            //temperature



        })
    })

    const data = await res.json()
    console.log(data)
}
getCompletion()


return fetch ('https://api.openai.com/v1/chat/completions', openAI)
   .then (response => {
    return response.json();
   }).then(data => {
   return data.choices [0].messasge.content;
}).catch(error =>{
    throw error
});